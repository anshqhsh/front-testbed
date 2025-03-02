import { NextRequest } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// 특정 Assistant ID (OpenAI 대시보드에서 생성 후 삽입)
const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID!;

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  if (!message) {
    return new Response('Invalid input', { status: 400 });
  }

  try {
    // 1. 새로운 스레드 생성
    const thread = await openai.beta.threads.create();

    // 2. 사용자 메시지를 스레드에 추가
    await openai.beta.threads.messages.create(thread.id, {
      role: 'user',
      content: message,
    });

    // 3. 스트리밍으로 Assistant 응답 생성
    const stream = openai.beta.threads.runs.stream(thread.id, {
      assistant_id: ASSISTANT_ID,
    });

    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const event of stream) {
          console.log({ event });
          if (event.event === 'thread.message.delta') {
            const contentArray = event.data.delta.content || [];
            let content = '';
            for (const item of contentArray) {
              if ('text' in item) {
                if (item.text) {
                  content += item.text.value;
                }
              }
            }

            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }
        }
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (error) {
    console.error('OpenAI Assistants API 오류:', error);
    return new Response('API 호출 실패', { status: 500 });
  }
}

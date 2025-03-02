'use client';
import { styled } from '@/styles/stitches.config';

const PageContainer = styled('div', {
  backgroundColor: '#d22',
});
export default function Home() {
  return (
    <PageContainer>
      <p>Home</p>
    </PageContainer>
  );
}

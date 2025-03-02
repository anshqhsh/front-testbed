import { createStitches } from '@stitches/react';

export const { styled, css, theme, globalCss, createTheme } = createStitches({
  theme: {
    colors: {
      primary: '#0070f3',
      background: '#D22', // 기본 테마 배경색 (라이트 모드)
      text: '#333333',
    },
    fonts: {
      body: 'Arial, sans-serif',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});

export const darkTheme = createTheme({
  colors: {
    background: '#121212', // 다크 모드 배경색
    text: '#ffffff',
  },
});

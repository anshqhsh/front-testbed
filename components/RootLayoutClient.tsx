// 📂 src/components/RootLayoutClient.tsx (클라이언트 컴포넌트)
'use client';

import { useState } from 'react';
import { styled, darkTheme, globalCss } from '@/styles/stitches.config';
import MobileMenu from '@/components/MobileMenu';
import Sidebar from '@/components/SideBar';

const Container = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
});

const Main = styled('main', {
  flexGrow: 1,
  padding: '16px',
  overflowY: 'auto',
});

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  globalCss();
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? darkTheme : ''}>
      {/* <button onClick={() => setIsDark((prev) => !prev)}>
        🌙 Toggle Dark Mode
      </button> */}
      <Container>
        <Sidebar />
        <MobileMenu />
        <Main>{children}</Main>
      </Container>
    </div>
  );
}

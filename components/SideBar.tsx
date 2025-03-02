'use client';
import { styled } from '@/styles/stitches.config';

const SidebarContainer = styled('aside', {
  width: '240px',
  height: '100vh',
  backgroundColor: 'Red',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',

  '@sm': {
    display: 'none', // 모바일에서는 감춤
  },
});

const NavItem = styled('a', {
  padding: '10px 15px',
  borderRadius: '4px',
  marginBottom: '8px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#ddd',
  },
});

export default function Sidebar() {
  return (
    <SidebarContainer>
      <NavItem href="/">홈</NavItem>
      <NavItem href="/profile">프로필</NavItem>
      <NavItem href="/settings">설정</NavItem>
    </SidebarContainer>
  );
}

'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '@/styles/stitches.config';
import { useState } from 'react';

const MenuButton = styled('button', {
  position: 'fixed',
  top: '16px',
  left: '16px',
  background: '#0070f3',
  color: '#fff',
  padding: '10px 15px',
  borderRadius: '4px',
  cursor: 'pointer',

  '@media (min-width: 768px)': {
    display: 'none', // PC에서는 숨김
  },
});

const DrawerOverlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  position: 'fixed',
  inset: 0,
});

const DrawerContent = styled(Dialog.Content, {
  backgroundColor: '#fff',
  width: '80vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
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

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <MenuButton onClick={() => setOpen(true)}>☰</MenuButton>
      <Dialog.Portal>
        <DrawerOverlay />
        <DrawerContent>
          <NavItem href="/">홈</NavItem>
          <NavItem href="/profile">프로필</NavItem>
          <NavItem href="/settings">설정</NavItem>
          <button onClick={() => setOpen(false)}>닫기</button>
        </DrawerContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

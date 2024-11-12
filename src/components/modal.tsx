import React from "react";
import StyledContainer from "./styled-container";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div className="text absolute left-0 top-0 flex min-h-screen w-full items-center justify-center bg-sky-950/70">
      {children}
    </div>
  );
}

export function ModalContent({ children }: { children: React.ReactNode }) {
  return (
    <StyledContainer className="menu-box relative flex w-[324px] flex-col items-center py-20 sm:w-[529px]">
      {children}
    </StyledContainer>
  );
}

export function ModalHeader({ children }: { children: React.ReactNode }) {
  return <div className="absolute -top-[90px]">{children}</div>;
}

export function ModalOptions({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-[34px]">{children}</div>
  );
}

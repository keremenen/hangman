import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return <div className="absolute flex">{children}</div>;
}

export function ModalContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="menu-box relative flex w-[324px] flex-col items-center py-20">
      {children}
    </div>
  );
}

export function ModalHeader({ children }: { children: React.ReactNode }) {
  return <div className="absolute -top-14">{children}</div>;
}

export function ModalOptions({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-[34px]">{children}</div>
  );
}

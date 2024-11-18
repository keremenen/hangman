import React, { forwardRef } from "react";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="text absolute left-0 top-0 flex min-h-screen w-full items-center justify-center bg-sky-950/70"
      >
        {children}
      </div>
    );
  },
);

type ModalContentProps = {
  children: React.ReactNode;
};

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="menu-box relative flex w-[324px] flex-col items-center rounded-[3rem] bg-blue-gradient py-20 pb-16 shadow-primary-box sm:w-[529px] sm:max-w-xl sm:rounded-[4.5rem]"
      >
        {children}
      </div>
    );
  },
);

export function ModalHeader({ children }: { children: React.ReactNode }) {
  return <div className="absolute -top-[90px]">{children}</div>;
}

export function ModalOptions({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-[34px]">{children}</div>
  );
}

export default Modal;

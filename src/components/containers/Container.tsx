import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => any;
}

function Container({ children, className, onClick }: ContainerProps) {
  return (
    <section
      onClick={onClick}
      className={`rounded-xl bg-white p-4 shadow-sm ${className} `}
    >
      {children}
    </section>
  );
}

export default Container;

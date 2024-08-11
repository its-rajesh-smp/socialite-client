import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => any;
  fullHeight?: boolean;
}

function Container({
  children,
  className,
  onClick,
  fullHeight,
}: ContainerProps) {
  return (
    <section
      onClick={onClick}
      className={`rounded-xl bg-white p-4 shadow-sm ${className} ${fullHeight ? "max-h-fit min-h-[calc(100vh-80px)]" : ""} `}
    >
      {children}
    </section>
  );
}

export default Container;

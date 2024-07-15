import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return <section className={className}>{children}</section>;
}

export default Container;

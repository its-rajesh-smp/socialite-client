import React from "react";

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return (
    <section className={`rounded-xl bg-white p-4 shadow-sm ${className} `}>
      {children}
    </section>
  );
}

export default Container;

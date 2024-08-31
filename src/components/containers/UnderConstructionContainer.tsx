function UnderConstructionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pointer-events-none relative z-50 flex h-[calc(100vh-76px)] w-full cursor-not-allowed items-center justify-center overflow-hidden opacity-30">
      <div className="h-full w-full">{children}</div>
      <h1 className="absolute text-center text-6xl font-bold">
        This page is under development
      </h1>
    </div>
  );
}

export default UnderConstructionContainer;

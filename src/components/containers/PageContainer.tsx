export interface PageContainerProps {
  children: React.ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return <div className="w-full">{children}</div>;
}

export default PageContainer;

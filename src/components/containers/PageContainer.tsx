export interface PageContainerProps {
  children: React.ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return <div>{children}</div>;
}

export default PageContainer;

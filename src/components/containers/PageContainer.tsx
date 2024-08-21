export interface IPageContainer {
  children?: React.ReactNode;
}

function PageContainer({ children }: IPageContainer) {
  return <div className="w-full">{children}</div>;
}

export default PageContainer;

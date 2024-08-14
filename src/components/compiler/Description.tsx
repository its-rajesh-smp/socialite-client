import DocViewer from "react-doc-viewer";

interface IDescription {
  className?: string;
}

function Description({ className }: IDescription) {
  const docs = [
    {
      uri: "https://res.cloudinary.com/dsmjkmxfk/image/upload/v1723610117/ghrh8ltameqot0frbrs1.pdf",
    },
  ];
  return (
    <div className={`${className} bg-white`}>
      {/* <DocViewer documents={docs} /> */}
      <iframe
        className="h-full w-full"
        src="https://docs.google.com/document/d/1t6Ye-_MifbNGatr39wLw53K90iC1NpipVQmrq5FSasw/pub?embedded=true"
      ></iframe>
    </div>
  );
}

export default Description;

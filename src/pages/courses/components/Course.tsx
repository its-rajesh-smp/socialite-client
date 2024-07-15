interface CourseProps {
  id: number;
  title: string;
  views: number;
  reviews: number;
}

function Course({ title }: CourseProps) {
  return (
    <div className={`w-80 rounded-xl bg-slate-200 p-3`}>
      <h1 className="text-2xl font-semibold text-primary">{title}</h1>
      <p className="text-xs text-slate-700">Views: 20000</p>
    </div>
  );
}

export default Course;

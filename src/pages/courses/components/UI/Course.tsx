import { useNavigate } from "react-router-dom";
import { generatePathNameWithParams } from "../../../../utils/route";
import authRoutes from "../../../../router/paths/auth.routes";

export interface ICourseProps {
  id: string;
  title: string;
  views: number;
  reviews: number;
}

function Course({ title, id }: ICourseProps) {
  const navigate = useNavigate();

  const onCourseClick = () => {
    navigate(
      generatePathNameWithParams(authRoutes.COURSES_MODULE, {
        courseModuleId: id,
      }),
    );
  };

  return (
    <div
      onClick={onCourseClick}
      className={`flex h-60 w-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl bg-slate-200 bg-gradient-to-r from-violet-200 to-pink-200 p-5`}
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-5xl font-semibold text-primary">{title}</h1>
        <p className="text-sm text-slate-800">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
          eligendi quo necessitatibus voluptatem? Exercitationem amet alias sed
          totam consequatur eligendi magni laborum? Error modi amet cumque
          magnam beatae illum asperiores?
        </p>
      </div>

      <div className="flex gap-5 text-xs text-slate-700">
        <p>Views: 20000</p>
        <p>Views: 20000</p>
        <p>Views: 20000</p>
      </div>
    </div>
  );
}

export default Course;

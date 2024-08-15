import { Avatar, Separator } from "@radix-ui/themes";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineEdit, MdOutlineReviews } from "react-icons/md";

function CourseDetails() {
  return (
    <div className="flex max-h-fit min-h-52 flex-col justify-between gap-5 rounded-md bg-slate-200 bg-gradient-to-r from-violet-200 to-pink-200 p-5">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-semibold text-primary">
          JAVASCRIPT BASIC
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
          accusamus natus, tempore iusto libero sed maiores earum nesciunt
          praesentium dolor pariatur non vitae, rem id quis quos numquam dolores
          illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          praesentium, rerum sequi earum fuga quisquam est, sint facilis
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5 text-xs text-slate-700">
          <div className="flex cursor-pointer items-center gap-2">
            <Avatar
              size="2"
              fallback
              src="https://demo.foxthemes.net/socialite-v3.0/assets/images/avatars/avatar-2.jpg"
              radius="full"
            />
            <p>Rajesh</p>
          </div>
          <Separator className="rotate-90" />
          <p>Views: 20000</p>
          <p>Views: 20000</p>
          <p>Views: 20000</p>
        </div>
        <div className="flex items-center gap-5 text-2xl text-slate-400">
          <MdOutlineReviews className="cursor-pointer transition-all hover:text-primary" />
          <MdOutlineEdit className="cursor-pointer transition-all hover:text-primary" />
          <IoMdAdd className="cursor-pointer transition-all hover:text-primary" />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;

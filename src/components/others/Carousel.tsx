import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export interface CarouselContainerProps {
  children: React.ReactNode[];
  limit?: number;
  offset?: number;
}
function CarouselContainer({
  children,
  limit = children.length,
  offset = 0,
}: CarouselContainerProps) {
  const [currentLimit, setCurrentLimit] = useState(limit);
  const [currentOffset, setCurrentOffset] = useState(offset);

  const handleNext = () => {
    setCurrentLimit((prev) => prev + 1);
    setCurrentOffset((prev) => prev + 1);
  };

  const handlePrev = () => {
    setCurrentLimit((prev) => prev - 1);
    setCurrentOffset((prev) => prev - 1);
  };

  return (
    <div className="relative flex h-fit w-fit items-center gap-4">
      {currentOffset != 0 && (
        <MdKeyboardArrowLeft
          onClick={handlePrev}
          className="absolute -left-3 cursor-pointer rounded-full bg-white text-3xl shadow-lg"
        />
      )}
      {children?.slice(currentOffset, currentLimit)}
      {currentLimit < children.length && (
        <MdKeyboardArrowRight
          onClick={handleNext}
          className="absolute -right-3 cursor-pointer rounded-full bg-white text-3xl shadow-lg"
        />
      )}
    </div>
  );
}

export default CarouselContainer;

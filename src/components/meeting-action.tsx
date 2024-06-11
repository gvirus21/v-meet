"use client";

import { IoIosArrowDropright } from "react-icons/io";

interface Props {
  children: React.ReactNode;
  handleClick: () => void;
}

const MeetingAction = ({ children, handleClick }: Props) => {
  return (
    <section
      onClick={handleClick}
      className="flex justify-between items-center h-[4rem] xl:h-[5rem] w-full px-5 bg-black border border-white rounded-full cursor-pointer"
    >
      <h3 className="text-xl 2xl:text-3xl uppercase">{children}</h3>
      <IoIosArrowDropright className="text-3xl xl:text-4xl" />
    </section>
  );
};

export default MeetingAction;

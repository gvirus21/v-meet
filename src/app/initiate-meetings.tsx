import { IoIosArrowDropright } from "react-icons/io";

const InitiateMeetings = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="h-[40rem]">
        <div className="flex flex-col gap-10 lg:w-[26rem] 2xl:w-[40rem] text-white lg:mt-10">
          <div className="flex justify-between items-center h-[4rem] xl:h-[5rem] w-full px-5 bg-black border border-white rounded-full cursor-pointer">
            <h3 className="text-xl 2xl:text-3xl uppercase">
              Create an Instant Meeting
            </h3>
            <IoIosArrowDropright className="text-3xl xl:text-4xl" />
          </div>
          <div className="flex justify-between items-center h-[4rem] xl:h-[5rem] w-full px-5 bg-black border border-white rounded-full cursor-pointer">
            <h3 className="text-xl 2xl:text-3xl uppercase">Join a Meeting</h3>
            <IoIosArrowDropright className="text-3xl xl:text-4xl" />
          </div>
          <div className="flex justify-between items-center h-[4rem] xl:h-[5rem] w-full px-5 bg-black border border-white rounded-full cursor-pointer">
            <h3 className="text-xl 2xl:text-3xl uppercase">
              Schedule a Meeting
            </h3>
            <IoIosArrowDropright className="text-3xl xl:text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiateMeetings;

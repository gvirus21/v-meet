import React from "react";

const UpcomingMeetings = () => {
  const meetings = [
    {
      title: "Seeren x John",
      time: "06:00 PM",
    },
    {
      title: "Product Meeting",
      time: "08:00 PM",
    },
    {
      title: "Group Chillout session",
      time: "10:00 PM",
    },
  ];

  return (
    <div className="flex flex-col justify-center gap-5 lg:-mt-28 2xl:mt-0">
      <div className="min-h-[30rem] lg:w-[24rem] xl:w-[32rem] 2xl:w-[40rem] -mt-40">
        <h2 className="text-4xl">Upcoming Meetings</h2>
        <div className="flex flex-col justify-between gap-6 text-black mt-10">
          {meetings.map((meeting, i) => (
            <div
              key={i}
              className="flex justify-between items-center h-[6rem] px-6 bg-white rounded-xl cursor-pointer"
            >
              <h3 className="text-2xl capitalize">{meeting.title}</h3>
              <p className="text-xl">{meeting.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingMeetings;

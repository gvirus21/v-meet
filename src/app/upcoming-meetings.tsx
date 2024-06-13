"use client";

import React from "react";
import { useGetCalls } from "@/hooks/useGetCalls";
import { Call } from "@stream-io/video-react-sdk";
import Link from "next/link";
import Loader from "@/components/Loader";

const UpcomingMeetings = () => {
  const { upcomingCalls, isLoading } = useGetCalls();

  return (
    <div className="flex flex-col justify-center gap-5 lg:-mt-28 2xl:mt-0">
      <div className="min-h-[30rem] lg:w-[24rem] xl:w-[32rem] 2xl:w-[40rem] -mt-40">
        <h2 className="text-4xl">Upcoming Meetings</h2>

        {isLoading ? (
          <Loader className="bg-transparent" />
        ) : (
          <div className="flex flex-col justify-between gap-6 text-black mt-10">
            {upcomingCalls && upcomingCalls.length > 0 ? (
              upcomingCalls?.map((meeting: Call) => {
                const id = meeting.id;
                const title =
                  meeting.state?.custom?.description || "No Description";

                const time = (meeting as Call).state?.startsAt?.toLocaleString(
                  "en-US",
                  {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  }
                );

                const date = (
                  meeting as Call
                ).state?.startsAt?.toLocaleDateString("en-GB");

                const link = `/meeting/${(meeting as Call).id}`;

                return (
                  <Link
                    key={id}
                    href={link}
                    className="flex justify-between items-center h-[6rem] px-6 bg-white rounded-xl cursor-pointer"
                  >
                    <h3 className="text-2xl capitalize">{title}</h3>

                    <div className="flex flex-col items-end">
                      <p className="text-lg">{time}</p>
                      <p className="text-sm">{date}</p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p className="text-center text-white text-2xl mt-20">
                No Upcoming Meeting.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingMeetings;

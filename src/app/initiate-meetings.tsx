"use client";

import { useState } from "react";
import MeetingAction from "@/components/meeting-action";
import MeetingModal from "@/components/meeting-modal";

type MeetingState =
  | "isCreatingMeeting"
  | "isJoiningMeeting"
  | "isSchedulingMeeting";

const InitiateMeetings = () => {
  const [meetingState, setMeetingState] = useState<MeetingState | undefined>(
    undefined
  );

  const createMeeting = () => {};

  return (
    <div className="flex flex-col justify-center">
      <div className="h-[40rem]">
        <div className="flex flex-col gap-10 lg:w-[26rem] 2xl:w-[40rem] text-white lg:mt-10">
          <MeetingAction
            handleClick={() => {
                console.log("first")
              setMeetingState("isCreatingMeeting")}}
          >
            Create an Instant Meeting
          </MeetingAction>
          <MeetingAction
            handleClick={() => setMeetingState("isJoiningMeeting")}
          >
            Join a Meeting
          </MeetingAction>
          <MeetingAction
            handleClick={() => setMeetingState("isSchedulingMeeting")}
          >
            Schedule a Meeting
          </MeetingAction>
        </div>
      </div>

      <MeetingModal
        isOpen={meetingState === "isCreatingMeeting"}
        onClose={() => {
          setMeetingState(undefined);
        }}
        title="Start an Instant Meeting"
        buttonText="Start Meeting"
        handleClick={createMeeting}
        className="text-center"
      />
    </div>
  );
};

export default InitiateMeetings;

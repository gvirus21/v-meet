import InitiateMeetings from "./initiate-meetings";
import UpcomingMeetings from "./upcoming-meetings";

export default function Home() {
  return (
    <main className="min-h-screen lg:h-screen bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
      <div className="flex flex-col items-center p-24 z-10">
        <div className="flex w-full justify-between mt-10 2xl:mt-24">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hello, Gourav 👋🏻</h1>
            <p className="text-xl md:text-2xl lg:text-3xl mt-4">What do you want to do today?</p>
          </div>
          <p className="hidden lg:block text-2xl lg:text-4xl font-semibold mt-6">02:34 PM</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full mt-32">
          <InitiateMeetings />
          <UpcomingMeetings />
        </div>
      </div>
    </main>
  );
}

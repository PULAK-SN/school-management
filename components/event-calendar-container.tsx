import Image from "next/image";
import EventList from "./event-list";
import EventCalendar from "./event-calendar";

const EventCalendarContainer = async ({
  searchParams,
}: {
  searchParams: {
    [keys: string]: string | undefined;
  };
}) => {
  const { date } = await searchParams;
  return (
    <div className="bg-white p-4 rounded-md">
      <EventCalendar />

      <div className="flex items-center justify-between">
        <h1 className="font-xl font-semibold my-4">Events</h1>
        <Image src={"/moreDark.png"} alt="more" height={20} width={20} />
      </div>
      <div className="flex flex-col gap-4">
        <EventList dateParam={date} />
      </div>
    </div>
  );
};

export default EventCalendarContainer;

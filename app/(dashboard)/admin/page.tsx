import {
  Announcements,
  AttendanceChart,
  EventCalendar,
  FinanceChart,
  UserCard,
} from "@/components";
import AttendanceChartContainer from "@/components/attendance-chart-container";
import CountChartContainer from "@/components/count-chart-container";

const AdminPage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 p-4">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="admin" />
          <UserCard type="teacher" />
          <UserCard type="student" />
          <UserCard type="parent" />
        </div>
        {/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChartContainer />
          </div>

          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChartContainer />
          </div>
        </div>

        {/* bottom chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;

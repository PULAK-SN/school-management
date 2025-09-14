import {
  AttendanceChart,
  CountChart,
  FinanceChart,
  UserCard,
} from "@/components";

const AdminPage = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 p-4">
      {/* left */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* user card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* middle chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* bottom chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;

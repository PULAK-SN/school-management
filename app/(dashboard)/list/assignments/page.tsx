import { Pagination, Table, TableSearch } from "@/components";
import { assignmentsData, role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "due Date",
    accessor: "dueDate",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const AssignmentList = () => {
  const renderRow = (item: Assignment) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.dueDate}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md p-4 m-4 mt-0 flex-1">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          All Assignmensts
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="h-8 w-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src={"/filter.png"} alt="filter" height={14} width={14} />
            </button>

            <button className="h-8 w-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src={"/sort.png"} alt="filter" height={14} width={14} />
            </button>

            {role === "admin" && (
              <button className="h-8 w-8 flex items-center justify-center rounded-full bg-yellow">
                <Image src={"/plus.png"} alt="filter" height={14} width={14} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={assignmentsData} />

      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default AssignmentList;

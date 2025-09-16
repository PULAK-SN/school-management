import { FormModal, Pagination, Table, TableSearch } from "@/components";
import { role, subjectsData } from "@/lib/data";
import Image from "next/image";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const columns = [
  {
    header: "Subject Name",
    accessor: "subjects",
  },
  {
    header: "Teachers",
    accessor: "teachers",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const SubjectList = () => {
  const renderRow = (item: Subject) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(",")}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="subject" type="update" data={item} />
              <FormModal table="subject" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white rounded-md p-4 m-4 mt-0 flex-1">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="h-8 w-8 flex items-center justify-center cursor-pointer rounded-full bg-yellow">
              <Image src={"/filter.png"} alt="filter" height={14} width={14} />
            </button>

            <button className="h-8 w-8 flex items-center justify-center cursor-pointer rounded-full bg-yellow">
              <Image src={"/sort.png"} alt="filter" height={14} width={14} />
            </button>

            {role === "admin" && <FormModal table="subject" type="create" />}
          </div>
        </div>
      </div>

      {/* list */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />

      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default SubjectList;

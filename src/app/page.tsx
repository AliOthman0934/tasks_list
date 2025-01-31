import Link from "next/link";
import prisma from "@/utils/db";
import StatusBadge from "@/components/StatusBadge";

export const dynamic = "force-dynamic";

async function HomePage() {
  const tasks = await prisma.task.findMany();
  return (
    <section className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-100">
        Tasks List App
      </h1>
      <div className="flex justify-end mb-10">
        <Link
          href="/task/add"
          className="bg-blue-500 hover:bg-blue-400 transition-colors text-white py-2 px-4 text-lg font-medium rounded-lg shadow-md"
        >
          Add Task
        </Link>
      </div>
      <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-lg p-6">
        <table className="w-full table-auto text-left">
          <thead className="bg-gray-700 text-gray-300 text-lg">
            <tr>
              <th className="p-4">#</th>
              <th className="p-4">Task Title</th>
              <th className="p-4">Task Status</th>
              <th className="p-4">Task Details</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id} className="hover:bg-gray-700 transition-colors">
                <td className="p-4 border-b border-gray-600">{index + 1}</td>
                <td className="p-4 border-b border-gray-600">{task.title}</td>
                <td className="p-4 border-b border-gray-600">
                  <StatusBadge status={task.status} />
                </td>
                <td className="p-4 border-b border-gray-600">
                  <Link
                    href={`/task/${task.id}`}
                    className="bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-md py-1 px-3 shadow-md"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default HomePage;

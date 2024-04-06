import React from 'react';

const users = [
  {
    name: 'Samuel',
    email: 'samuel38@gmail.com',
    status: 'active',
    enrolled: 'March 23, 2023',
  },
  {
    name: 'Jimmy',
    email: 'jimmy@gmail.com',
    status: 'active',
    enrolled: 'March 22, 2021',
  },
  {
    name: 'Jose',
    email: 'joshua@gmail.com',
    status: 'inactive',
    enrolled: 'March 22, 2021',
  },
  {
    name: 'Leo',
    email: 'leonard@gmail.com',
    status: 'active',
    enrolled: 'March 22, 2021',
  },
  {
    name: 'Faith',
    email: 'Faith@gmail.com',
    status: 'active',
    enrolled: 'March 22, 2021',
  },
  {
    name: 'Tobi',
    email: 'tobi8@gmail.com',
    status: 'inactive',
    enrolled: 'March 22, 2021',
  },
  {
    name: 'Emeka',
    email: 'emeka38@gmail.com',
    status: 'inactive',
    enrolled: 'March 22, 2021',
  },
  {
    name: 'Gbagir',
    email: 'jongbs@gmail.com',
    status: 'active',
    enrolled: 'March 22, 2021',
  },
  {
    name: 'Ezeh',
    email: 'eze@gmail.com',
    status: 'active',
    enrolled: 'March 22, 2021',
  },
  {
    name: 'Joyce',
    email: 'joy@gmail.com',
    status: 'inactive',
    enrolled: 'March 22, 2021',
  },
];
function Users() {
  return (
    <div className="flex-between m-auto w-auto p-8 bg-white mt-10 text-sm">
      <nav className="pb-4 border-b">
        <div className="flex justify-between">
          <div href="/" className="flex gap-2 flex-center">
            <p>
              All Users
              <span className=" text-green-300 bg-green-50 rounded-full ml-2 px-2 py-1 cursor-pointer ">
                2,000
              </span>
            </p>
          </div>

          <div className="">
            <input
              className="border rounded-s focus:outline-none text-center p-1"
              placeholder="search users"
            />
          </div>
        </div>
      </nav>
      <div className="mt-10">
        <table className="w-full table-auto">
          <thead className="text-left cursor-pointer bg-slate-50 hover:bg-slate-200 w-auto">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th className="max-md:hidden">Enrolled</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr className="hover:bg-slate-100 cursor-pointer" key={user.id}>
                <td className="p-1 rounded-s ">
                  {user.name}
                  <p className="font-thin text-sm">@{user.name}</p>
                </td>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td className="max-md:hidden">{user.enrolled}</td>
                <td className="text-violet-700">
                  <a href="#">view</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 mb-6 float-right ">
          <a href="/" className="cursor-pointer">
            {' '}
            &lt; previous
          </a>
          <a href="/" className="ml-2 cursor-pointer">
            next &gt;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Users;

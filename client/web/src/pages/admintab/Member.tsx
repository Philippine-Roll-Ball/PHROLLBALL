
const members = [
  {
    id: 1,
    name: "Rafael de Cruz",
    role: "Athlete",
    association: "URS RBA",
    status: "Active",
    lastActive: "2 hours ago",
  },
   {
    id: 1,
    name: "Rafael de Cruz",
    role: "Athlete",
    association: "URS RBA",
    status: "Active",
    lastActive: "2 hours ago",
  },
   {
    id: 1,
    name: "Rafael de Cruz",
    role: "Athlete",
    association: "URS RBA",
    status: "Active",
    lastActive: "2 hours ago",
  },
   {
    id: 1,
    name: "Rafael de Cruz",
    role: "Athlete",
    association: "URS RBA",
    status: "Active",
    lastActive: "2 hours ago",
  },
   {
    id: 1,
    name: "Rafael de Cruz",
    role: "Athlete",
    association: "URS RBA",
    status: "Active",
    lastActive: "2 hours ago",
  },
   {
    id: 1,
    name: "Rafael de Cruz",
    role: "Athlete",
    association: "URS RBA",
    status: "Active",
    lastActive: "2 hours ago",
  },
];

const statusStyles = {
  active: "bg-success/15 text-success",
  inactive: "bg-muted text-muted-foreground",
  completed: "bg-info/15 text-info",
};


const Member = () => {
  return (
    <div className="p-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-xl border p-4">
          <p className="text-sm   mb-2">
            Total Members
          </p>
          <h2 className="text-3xl font-bold text-blue-900">
            1,248
          </h2>
          <p className="text-green-600 text-sm">
            +12% this month
          </p>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <p className="text-sm mb-2">
            Active Athletes
          </p>
          <h2 className="text-3xl font-bold text-red-600">
            856
          </h2>
        </div>
        <div className="bg-white rounded-xl border p-4">
          <p className="text-sm  mb-2">
            Certified Coaches
          </p>
          <h2 className="text-3xl font-bold text-yellow-600">
            142
          </h2>
        </div>
      </div>


      {/* Filters and Actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <select className="border rounded-lg px-4 py-2">
            <option>All Associations</option>
            <option>URS RBA</option>
            <option>CRBA</option>
            <option>BRBA</option>
            <option>PRBA</option>
          </select>
          <select className="border rounded-lg px-4 py-2">
            <option>All Roles</option>
            <option>Athlete</option>
            <option>Coach</option>
            <option>Official</option>
            <option>Volunteer</option>
          </select>
        </div>
      </div>

      {/* Member Table */}
      <div className="bg-white rounded-xl border">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-muted/50 text-left">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Association</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Last Active</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (

              <tr key={member.id} className="border-t hover:bg-muted/50 transition-colors">
                <td className="px-4 py-3">{member.name}</td>
                <td className="px-4 py-3">{member.role}</td>
                <td className="px-4 py-3">{member.association}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${statusStyles[member.status.toLowerCase()]}`}>
                    {member.status}
                  </span>
                </td>
                <td className="px-4 py-3">{member.lastActive}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


   export default Member;
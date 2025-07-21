import React, { useMemo } from "react";

const users = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  name: `User ${i}`,
}));

//revised line , used filter, includes function of JS
function filterUsers(search) {
  console.log("⚙️ Filtering Users...");
  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
}

export default function UserList({ search }) {
  // 🚀 useMemo prevents filtering unless "search" changes
  const filteredUsers = useMemo(() => filterUsers(search), [search]);

  return (
    <div>
      <p>Showing {filteredUsers.length} users</p>
      <ul style={{ maxHeight: "300px", overflowY: "scroll" }}>
        {filteredUsers.slice(0, 50).map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

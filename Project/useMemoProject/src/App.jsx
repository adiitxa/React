import React, { useState } from "react";
import UserList from "./UserList";

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>👨‍💻 useMemo Demo</h1>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "0.5rem", marginBottom: "1rem", width: "300px" }}
      />
      <UserList search={search} />
    </div>
  );
}

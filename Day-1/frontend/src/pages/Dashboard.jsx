import { useEffect, useState } from "react";
import ProfilePic from "../components/ProfilePic";
import UserItem from "../components/UserItem";
import axios from "axios";

function Dashboard() {
  const [filter, setFilter] = useState("");
  const [users, setUsers] = useState([]);
  const [balance, setBalance] = useState("");

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "http://localhost:3000/api/v1/account/balance",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      console.log(response);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/user/bulk?filter=${filter}`,
      );
      response.data.user;
      setUsers(response.data.user);
    })();
  }, [filter]);

  return (
    <div className="min-h-screen bg-gray-900 px-10 py-10 text-white">
      <div className="mb-8 flex justify-between">
        <div>
          <p className="text-xl font-bold">Your Balance</p>
          <p className="mt-1 text-2xl font-semibold">$5,000</p>
        </div>
        <div className="flex items-center space-x-4 text-xl font-bold">
          <p>Hello, User</p>
          <ProfilePic firstName={"John"} lastName={"Doe"} />
        </div>
      </div>
      <div className="mb-6">
        <p className="text-lg font-semibold">Users</p>
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          placeholder="Search users..."
          className="mt-2 w-full rounded-md border border-gray-600 bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-400 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </div>
      <div className="space-y-4">
        {users.map((user, i) => {
          return <UserItem user={user} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Dashboard;

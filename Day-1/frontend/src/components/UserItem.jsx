import { useNavigate } from "react-router-dom";
import ProfilePic from "./ProfilePic";
export default function UserItem({
  user = {
    firstName: "John",
    lastName: "Doe",
    username: "johndoe@example.com",
  },
}) {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between rounded-md border border-gray-700 bg-gray-800 px-4 py-3 shadow hover:shadow-lg">
      <div className="flex items-center space-x-4">
        <ProfilePic firstName={user.firstName} lastName={user.lastName} />
        <div>
          <p className="text-sm font-semibold">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-xs text-gray-400">{user.username}</p>
        </div>
      </div>
      <button
        onClick={() => {
          navigate(
            `/send?id=${user.id}&firstName=${user.firstName}&lastName=${user.lastName}&username=${user.username}`,
          );
        }}
        className="rounded-md bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send Money
      </button>
    </div>
  );
}

export default function ProfilePic({ firstName, lastName }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-lg font-bold text-white">
      {firstName[0]}
      {lastName[0]}
    </div>
  );
}

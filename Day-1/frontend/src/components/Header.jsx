import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="flex items-center justify-between border-b border-gray-700 bg-gray-900 px-6 py-4 text-gray-200 shadow-md">
      <Link to="/" className="text-2xl font-bold text-[#0CBA74]">
        Paytm
      </Link>
      <ul className="flex space-x-8">
        <HeaderItem text={"Dashboard"} to={"dashboard"} />
        <HeaderItem text={"Send Money"} to={"send"} />
        <HeaderItem text={"Sing in"} to={"signin"} />
        <HeaderItem text={"Sign up"} to={"signup"} />
      </ul>
    </nav>
  );
}

function HeaderItem({ text, to }) {
  return (
    <li>
      <Link
        to={`/${to}`}
        className="cursor-pointer transition-colors hover:text-emerald-400"
      >
        {text}
      </Link>
    </li>
  );
}

export default Header;

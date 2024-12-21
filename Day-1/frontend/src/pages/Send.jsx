import { useState } from "react";
import FormHeader from "../components/FormHeader";
import InputItem from "../components/InputItem";
import ProfilePic from "../components/ProfilePic";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
function Send() {
  const [amount, setAmount] = useState("");
  const [response, setResonse] = useState("");

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const firstName = searchParams.get("firstName");
  const lastName = searchParams.get("lastName");
  const username = searchParams.get("username");
  async function handleSubmit(e) {
    e.preventDefault();
    if (!amount) return;

    const response = await axios.post(
      "http://localhost:3000/api/v1/account/transfer",
      { to: id, amount },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    );
    setResonse(response.data.msg);
  }
  return (
    <div className="flex justify-center bg-slate-950 py-16 text-slate-50">
      <div className="flex w-80 flex-col items-center justify-center rounded-md border border-slate-300 px-4 py-10 text-center text-slate-50">
        <FormHeader title={"Send Money"} description={""} />
        <div className="mb-6 flex w-full items-center space-x-4 px-5">
          <ProfilePic firstName={firstName} lastName={lastName} />
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold">{firstName}</p>
            <p className="text-xs text-gray-400">{username}</p>
          </div>
        </div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex w-60 flex-col items-start"
        >
          <InputItem
            labelText={"Amount (in Rs)"}
            placeholderText={"Enter amount"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <TransferButton buttonText={"Transfer"} />
        </form>
        {response ? <div className="mt-4 text-green-400">{response}</div> : ""}
      </div>
    </div>
  );
}

function TransferButton({ buttonText }) {
  return (
    <button className="mb-2 me-2 mt-5 w-full rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-gray-300">
      {buttonText}
    </button>
  );
}

export default Send;

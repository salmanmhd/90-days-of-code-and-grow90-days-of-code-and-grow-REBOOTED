import { useState } from "react";
import axios from "axios";
import FormButton from "../components/FormButton";
import FormHeader from "../components/FormHeader";
import FormSuggestionText from "../components/FormSuggestionText";
import InputItem from "../components/InputItem";

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) return;
    const response = await axios.post(
      "http://localhost:3000/api/v1/user/signin",
      {
        username,
        password,
      },
    );

    console.log(response);
    localStorage.setItem("token", response.data.token);
    setUsername("");
    setPassword("");
  }

  return (
    <div className="flex justify-center bg-slate-950 py-16 text-slate-50">
      <div className="flex w-80 flex-col items-center justify-center rounded-md border border-slate-300 px-4 py-10 text-center text-slate-50">
        <FormHeader
          title={"Sign In"}
          description={"Enter your credential to access your account"}
        />
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex w-60 flex-col items-start"
        >
          <InputItem
            labelText={"Username"}
            placeholderText={"johndoe@example.com"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputItem
            labelText={"Password"}
            placeholderText={"******"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <FormButton buttonText={"Sign in"} />
        </form>
        <FormSuggestionText
          text={"Don't have an account?"}
          referText={"Sign up"}
        />
      </div>
    </div>
  );
}

export default Signin;

import { Input } from "@/components/ui/input";

export default function Signup() {
  return (
    <>
      <h1>LETTERBOXD</h1>

      <p>Username</p>
      <Input type="username" placeholder="Username" />
      <p>Password</p>
      <Input type="password" placeholder="Password" />
      <p>Forgot Password?</p>
      <button className="rounded bg-blue-500 px-4 py-2 text-white">
        LOGIN
      </button>

      <p>New User? Create Account</p>
      <p>Continue without logging in</p>
    </>
  );
}

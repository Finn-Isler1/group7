import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Signup() {
  return (
    <>
      <h1>LETTERBOXD</h1>

      <h1>LETTERBOXD</h1>

      <p>Username:</p>
      <Input type="username" />
      <p>Email Address:</p>
      <Input type="email" />
      <p>Phone Number:</p>
      <Input type="" />
      <p>New Password:</p>
      <Input type="password" />
      <p>Confirm Password:</p>
      <Input type="password" />

      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I accept the Terms and Conditions</Label>
      </div>
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">I accept the Privacy Policy</Label>
      </div>

      <button className="rounded bg-blue-500 px-4 py-2 text-white">
        SIGN UP
      </button>

      <p>Already have an account? Log in</p>
    </>
  );
}

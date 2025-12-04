import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function Login() {
  return (
    <>
      <div className="flex justify-center px-4 py-10">
        <form className="flex w-full max-w-md flex-col gap-4">
          <h1 className="text-center text-3xl font-bold">LETTERBOXD</h1>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" type="text" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input id="password" type="password" required />
                <FieldDescription className="flex justify-end text-[#31A4D9]">
                  Forgot Password?
                </FieldDescription>
              </Field>

              <Button variant="link" type="submit" className="font-bold">
                Login
              </Button>

              <div className="flex flex-col items-center gap-2 text-center">
                <FieldLabel>
                  New User?{" "}
                  <a href="/Signup" className="text-[#31A4D9]">
                    Create Account
                  </a>
                </FieldLabel>
                <FieldLabel>
                  <a href="/" className="text-[#31A4D9]">
                    Continue Without Logging In
                  </a>
                </FieldLabel>
              </div>
            </FieldGroup>
          </FieldSet>
        </form>
      </div>
    </>
  );
}

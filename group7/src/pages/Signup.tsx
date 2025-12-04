import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";

export default function Signup() {
  return (
    <>
      <div className="flex justify-center px-4 py-10">
        <form className="flex w-full max-w-md flex-col gap-4">
          <h1 className="text-center text-3xl font-bold">LETTERBOXD</h1>
          <FieldSet>
            <FieldGroup>
              {/* Username */}
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" type="text" required />
              </Field>

              {/* Email Address */}
              <Field className="flex flex-col">
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input id="username" type="text" required />
              </Field>

              {/* Phone Number */}
              <Field>
                <FieldLabel htmlFor="email">Phone Number</FieldLabel>
                <Input id="username" type="text" required />
              </Field>

              {/* New Password */}
              <Field>
                <FieldLabel htmlFor="password">New Password</FieldLabel>
                <Input id="password" type="password" required />
              </Field>

              {/* Confirm Password */}
              <Field>
                <FieldLabel htmlFor="confirm password">
                  Confirm Password
                </FieldLabel>
                <Input id="confirm password" type="password" required />
              </Field>

              <Button variant="link" type="submit" className="font-bold">
                Signup
              </Button>

              <div className="flex flex-col items-center text-center">
                <FieldLabel>
                  Already Have An Account?{" "}
                  <a href="/Login" className="text-[#31A4D9]">
                    Login
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

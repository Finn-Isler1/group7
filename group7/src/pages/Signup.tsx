import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!username || !email || !phone || !password || !confirmPassword) {
      alert("Please fill in all fields!");
      return;
    }

    if (password !== confirmPassword) {
      setOpenDialog(true);
      return;
    }

    navigate("/");
  };
  return (
    <>
      <div className="flex justify-center px-4 py-10">
        <form
          className="flex w-full max-w-md flex-col gap-4"
          onSubmit={handleSignup}
        >
          <h1 className="text-center text-3xl font-bold">LETTERBOXD</h1>
          <FieldSet>
            <FieldGroup>
              {/* Username */}
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Field>

              {/* Email Address */}
              <Field className="flex flex-col">
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>

              {/* Phone Number */}
              <Field>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Field>

              {/* New Password */}
              <Field>
                <FieldLabel htmlFor="password">New Password</FieldLabel>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>

              {/* Confirm Password */}
              <Field>
                <FieldLabel htmlFor="confirmPassword">
                  Confirm Password
                </FieldLabel>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
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

      {/* Password Mismatch Dialog */}
      <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
        <AlertDialogContent className="flex min-h-[200px] w-full max-w-md flex-col justify-center p-10 text-center">
          <AlertDialogTitle className="flex justify-center font-bold">
            Passwords Do Not Match
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            Please make sure your password and confirmation match.
          </AlertDialogDescription>

          <div>
            <AlertDialogAction
              onClick={() => setOpenDialog(false)}
              className="text-primary w-40 border border-black px-6 py-3 hover:bg-black hover:text-white"
            >
              Okay
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

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
import { Button } from "@/components/ui/button";
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

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!username || !password) return;

    navigate("/");
  };

  return (
    <>
      <div className="flex justify-center px-4 py-10">
        <form
          className="flex w-full max-w-md flex-col gap-4"
          onSubmit={handleLogin}
        >
          <h1 className="text-center text-3xl font-bold">LETTERBOXD</h1>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <AlertDialog>
                  {/* Trigger */}
                  <AlertDialogTrigger>
                    <FieldDescription
                      className="flex cursor-pointer justify-end text-[#31A4D9]"
                      onClick={() => setShowConfirmation(false)}
                    >
                      Forgot Password?
                    </FieldDescription>
                  </AlertDialogTrigger>

                  {/* Dialog Content */}
                  <AlertDialogContent className="flex min-h-[200px] w-full max-w-md flex-col justify-center p-10 text-center">
                    {!showConfirmation ? (
                      <>
                        <AlertDialogHeader>
                          <AlertDialogTitle className="text-center font-bold">
                            Account Recovery
                          </AlertDialogTitle>
                        </AlertDialogHeader>
                        <AlertDialogDescription>
                          Enter your email address to receive a password reset
                          link.
                        </AlertDialogDescription>
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.currentTarget;

                            if (!form.checkValidity()) {
                              form.reportValidity();
                              return;
                            }

                            setShowConfirmation;
                          }}
                          className="flex flex-col items-center gap-6"
                        >
                          <div className="flex justify-center gap-6">
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              required
                              className="mx-auto w-90"
                            />
                          </div>
                          <div className="mt-6 flex justify-center gap-4">
                            <Button
                              type="submit"
                              className="text-primary w-40 border border-black px-6 py-3 hover:bg-black hover:text-white"
                              onClick={() => setShowConfirmation(true)}
                            >
                              Confirm
                            </Button>
                            <AlertDialogAction className="text-primary w-40 border border-black px-6 py-3 hover:bg-black hover:text-white">
                              Back
                            </AlertDialogAction>
                          </div>
                        </form>
                      </>
                    ) : (
                      // Confirmation Message
                      <div className="flex flex-col items-center justify-center gap-4 p-6">
                        <AlertDialogTitle>
                          Password Recovery Sent
                        </AlertDialogTitle>
                        <AlertDialogDescription className="">
                          Check your email for a link to reset your password.
                        </AlertDialogDescription>
                        <AlertDialogAction className="text-primary w-40 border border-black px-6 py-3 hover:bg-black hover:text-white">
                          Back to Login
                        </AlertDialogAction>
                      </div>
                    )}
                  </AlertDialogContent>
                </AlertDialog>
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

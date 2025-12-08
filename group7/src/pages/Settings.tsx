// src/pages/Settings.tsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function Settings() {
  const navigate = useNavigate();

  // Toggle states
  const [reviewReminders, setReviewReminders] = useState(true);
  const [gentleNudges, setGentleNudges] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [privateAccount, setPrivateAccount] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center bg-linear-to-br pt-36 pb-28">
      {/* Centered Container */}
      <div className="flex w-full max-w-4xl flex-col items-center px-6 py-12">
        <div className="FilmDetailsTopBar mb-12 w-full">
          <Link to="/profile" className="BackButton">
            ← Back to Profile
          </Link>
        </div>

        {/* HERO / Header */}
        <header className="mb-20 flex flex-col items-center justify-center text-center">
          <h1 className="mb-6 text-6xl font-black tracking-tight text-gray-900 md:text-7xl lg:text-8xl">
            Settings
          </h1>
          <p className="max-w-3xl text-lg text-gray-700 md:text-xl lg:text-2xl">
            Adjust your preferences for reminders, notifications, and account
            visibility.
          </p>
        </header>

        {/* CONTENT GRID */}
        <div className="flex w-full max-w-3xl flex-col">
          {/* Review Reminders */}
          <section className="mb-20 space-y-6">
            <h2 className="text-center text-2xl font-bold text-gray-900">
              Review Reminders
            </h2>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="font-medium">
                  Send reminders to review watched movies
                </p>
                <p className="text-sm text-gray-500">
                  Receive a notification 24 hours after watching a film.
                </p>
              </div>
              <Switch
                checked={reviewReminders}
                onCheckedChange={(checked) => setReviewReminders(checked)}
              />
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="font-medium">
                  Gentle nudges to share your thoughts
                </p>
                <p className="text-sm text-gray-500">
                  Build your review history with subtle prompts.
                </p>
              </div>
              <Switch
                checked={gentleNudges}
                onCheckedChange={(checked) => setGentleNudges(checked)}
              />
            </div>
          </section>

          {/* Notifications */}
          <section className="mb-16 space-y-6">
            <h2 className="text-center text-2xl font-bold text-gray-900">
              Notifications
            </h2>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <p className="font-medium">Email notifications</p>
              <Switch
                checked={emailNotifications}
                onCheckedChange={(checked) => setEmailNotifications(checked)}
              />
            </div>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <p className="font-medium">Push notifications</p>
              <Switch
                checked={pushNotifications}
                onCheckedChange={(checked) => setPushNotifications(checked)}
              />
            </div>
          </section>

          {/* Account */}
          <section className="mb-16 space-y-6">
            <h2 className="text-center text-2xl font-bold text-gray-900">
              Account
            </h2>

            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="font-medium">Private account</p>
                <p className="text-sm text-gray-500">
                  Make your profile and reviews public for friends to see, or
                  private for personal use only.
                </p>
              </div>
              <Switch
                checked={privateAccount}
                onCheckedChange={(checked) => setPrivateAccount(checked)}
              />
            </div>
          </section>

          {/* Logout */}
          <section>
            <Button
              variant="link"
              className="w-full py-6 text-lg"
              onClick={() => navigate("/login")}
            >
              Logout
            </Button>
          </section>
        </div>
      </div>
    </div>
  );
}

// src/components/ui/BackButton.tsx

import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // go to previous page in browser history
  };

  return (
    <button
      className="BackButton inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-gray-100"
      onClick={handleBack}
    >
      ← Back
    </button>
  );
}

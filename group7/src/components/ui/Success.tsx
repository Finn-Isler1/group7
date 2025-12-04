import React from "react";

interface SuccessProps {
  onClose: () => void;
  onViewReview: () => void;
}

export default function Success({ onClose, onViewReview }: SuccessProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl p-8 shadow-lg text-center max-w-sm w-full">
        <div className="text-green-500 text-5xl mb-4">✓</div>

        <h2 className="text-2xl font-semibold mb-2">
          Review Successfully Posted!
        </h2>
        <p className="text-gray-600 mb-6">Thank you for leaving a review!</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onViewReview}
            className="px-6 py-2 border rounded-lg hover:bg-gray-100"
          >
            View My Review
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 border rounded-lg hover:bg-gray-100"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

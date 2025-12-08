interface SuccessProps {
  onClose: () => void;
  onViewReview: () => void;
}

export default function Success({ onClose, onViewReview }: SuccessProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 text-center shadow-lg">
        <div className="mb-4 text-5xl text-green-500">✓</div>

        <h2 className="mb-2 text-2xl font-semibold">
          Review Successfully Posted!
        </h2>
        <p className="mb-6 text-gray-600">Thank you for leaving a review!</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={onViewReview}
            className="rounded-lg border px-6 py-2 hover:bg-gray-100"
          >
            View My Review
          </button>

          <button
            onClick={onClose}
            className="rounded-lg border px-6 py-2 hover:bg-gray-100"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

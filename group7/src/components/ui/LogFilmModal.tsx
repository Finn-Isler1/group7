// src/components/ui/LogFilmModal.tsx
import { useState } from "react";
import { X, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Processing from "./Processing";
import Success from "./Success";
import { saveFilmLog } from "../../utils/film-logs";

interface LogFilmModalProps {
  film: { id: number; title: string };
  onClose: () => void;
}

export default function LogFilmModal({ film, onClose }: LogFilmModalProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const [showProcessing, setShowProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const navigate = useNavigate();

  const handleSave = () => {
    // save to localStorage
    saveFilmLog({
      filmId: film.id,
      title: film.title,
      rating,
      review,
      date: new Date().toISOString(),
    });

    setShowProcessing(true);
    setTimeout(() => {
      setShowProcessing(false);
      setShowSuccess(true);
    }, 1500);
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    onClose();
  };

  const handleViewReview = () => {
    setShowSuccess(false);
    onClose();

    navigate(`/films/${film.id}/reviews`);
  };

  return (
    <>
      {showProcessing && <Processing />}

      {showSuccess && (
        <Success onClose={handleSuccessClose} onViewReview={handleViewReview} />
      )}

      <div
        className="fixed inset-0 z-40 flex items-center justify-center bg-black/40"
        onClick={onClose}
      >
        <div
          className="w-full max-w-md rounded-2xl bg-gray-100 p-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="mb-4 flex items-start justify-between">
            <h2 className="text-xl font-bold">{film.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className="text-3xl"
                >
                  <span
                    className={
                      star <= rating ? "text-orange-400" : "text-gray-300"
                    }
                  >
                    ★
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Review */}
          <div className="mb-6">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Review
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review..."
              className="h-32 w-full resize-none rounded-xl border border-gray-300 p-3 text-sm text-gray-800 focus:ring-2 focus:ring-sky-400 focus:outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 rounded-xl border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 rounded-xl bg-sky-400 py-2 text-sm font-medium text-white hover:bg-sky-600"
            >
              Post Review
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

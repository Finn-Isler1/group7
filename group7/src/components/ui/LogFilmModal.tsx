import { useState } from "react";
import { X, Star } from "lucide-react";
import { saveFilmLog } from "../../utils/film-logs.ts";

interface LogModalProps {
  film: { id: number; title: string };
  onClose: () => void;
}

export default function LogModal({ film, onClose }: LogModalProps) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSave = () => {
    saveFilmLog({
      filmId: film.id,
      title: film.title,
      rating,
      review,
      date: new Date().toISOString(),
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-gray-100 p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">{film.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {/* Rating */}
        <div className="mb-6">
          <label className="mb-2 block text-sm text-gray-500">Rating</label>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} type="button" onClick={() => setRating(star)}>
                <Star
                  size={32}
                  fill={rating >= star ? "#ff8000" : "none"}
                  stroke={rating >= star ? "#ff8000" : "#999"}
                  strokeWidth={2}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Review */}
        <div className="mb-6">
          <label className="mb-2 block text-sm text-gray-500">Review</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review..."
            className="h-32 w-full resize-none rounded-xl border border-gray-400 bg-white p-3 text-sm text-gray-900 focus:border-sky-400 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-gray-400 bg-white py-2 font-medium text-gray-900 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="flex-1 rounded-xl bg-sky-400 py-2 font-medium text-white hover:bg-sky-600"
          >
            Save Log
          </button>
        </div>
      </div>
    </div>
  );
}

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import FilmsDB from "../data/films.json";

export default function Reviews() {
  const { id } = useParams<{ id: string }>();
  const film = FilmsDB.FilmsDB.find((f) => f.id === Number(id));

  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [modal, setModal] = useState<null | "processing" | "save-success" | "post-success">(null);

  function handleSaveDraft() {
    setModal("processing");
    setTimeout(() => setModal("save-success"), 1500);
  }

  function handlePostReview() {
    setModal("processing");
    setTimeout(() => setModal("post-success"), 1500);
  }

  if (!film) {
    return <div>Film not found</div>;
  }

  return (
    <>
      {modal === "processing" && (
        <div>
          <div>
            <h2>Processing Request</h2>
            <p>Give us a moment...</p>
          </div>
        </div>
      )}

      {modal === "save-success" && (
        <div>
          <div>
            <h2>Draft Saved To Profile</h2>
            <p>Successfully Saved Draft!</p>
            <Link to="/profile">View Profile</Link>
          </div>
        </div>
      )}

      {modal === "post-success" && (
        <div>
          <div>
            <h2>Review Successfully Posted!</h2>
            <p>Thank you for leaving a review!</p>
            <Link to="/profile">View My Review</Link>
          </div>
        </div>
      )}

      <div>
        <div>
          <h1>
            {film.title} ({film.year})
          </h1>
          <p>{film.genre} • Watched: 12</p>

          <p>Choose Star Rating</p>

          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                style={{
                  cursor: "pointer",
                  fontSize: "1.4rem",
                  color: star <= rating ? "gold" : "gray",
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <div>
          <p>Write review (optional)</p>
          <textarea
            rows={10}
            cols={60}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>

        <div>
          <button type="button" onClick={handleSaveDraft}>
            Save Draft
          </button>

          <button type="button" onClick={handlePostReview}>
            Post Review
          </button>
        </div>
      </div>
    </>
  );
}

import { useParams, Link } from "react-router-dom";
import FilmsDB from "../data/films.json";

export default function Reviews() {
  const { id } = useParams();
  const film = FilmsDB.FilmsDB.find((f) => f.id === Number(id));

  return (
    <div className="review-page">
      <div className="review-header">
        <div className="review-film-card">
          <h1 className="review-title">
            {film.title} ({film.year})
          </h1>
          <p className="review-meta">{film.genre} • Watched: 12</p>

          <p className="review-rating-label">Choose Star Rating</p>
          <div className="review-stars">★ ★ ★ ★ ★</div>
        </div>

        <div className="review-poster"></div>
      </div>

      <div className="review-body">
        <p className="review-body-label">Write review (optional)</p>
        <textarea
          className="review-textarea"
          placeholder="Write your review here"
        />
      </div>

    
      <div className="review-actions">
        <div></div>

        <div className="review-actions-right">
          <button className="btn-secondary" type="button">
            Save Draft
          </button>
          <button className="btn-primary" type="button">
            Post Review
          </button>
        </div>
      </div>

      <div style={{ marginTop: "0.5rem" }}>
        <Link to={`/films/${id}`}>Back to Film</Link>
      </div>
    </div>
  );
}
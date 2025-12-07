import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <button className="BackButton" onClick={handleBack}>
      Go Back
    </button>
  );
}

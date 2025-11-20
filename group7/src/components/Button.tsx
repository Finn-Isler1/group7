type StyleType = "primary" | "secondary";
type ButtonType = {
  text: string;
  onClick: () => void;
  variant?: StyleType;
};

/**
 * This is a component to render a button.
 *
 * It has 2 styles:
 * - Primary: black button
 * - Secondary: white button with black outline
 */
function Button({ text, onClick, variant }: ButtonType) {
  variant ??= "primary";

  let className;
  if (variant === "secondary") {
    className = "bg-white border-solid border-2";
  } else {
    className = "bg-black text-white";
  }

  return (
    <button className={className + " rounded-xl px-4 py-2"} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

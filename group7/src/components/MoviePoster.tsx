interface MoviePosterProps {
  src: string;
  alt?: string;
}

export default function MoviePoster({ src, alt }: MoviePosterProps) {
  return (
    // <div>
    //   <img src={src} alt={alt} className="h-auto w-full" />
    // </div>
    <div className={`aspect-ratio: 2/3 overflow-hidden`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

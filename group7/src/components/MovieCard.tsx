import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MovieCardProps = {
  title?: string;
  year?: string;
  genre?: string;
  rating?: string;
  duration?: string;
  description?: string;
  img?: string;
};

export default function MovieCard({
  title = "Untitled Movie",
  year = "0000",
  genre = "Unknown",
  rating = "0/5",
  duration = "--",
  description = "No description available.",
  img = "src/assets/12AngryMen.jpg",
}: MovieCardProps) {
  return (
    <Card className="flex flex-row items-center px-4 py-4">
      <img
        className="h-64 w-64 object-cover object-center"
        src={img}
        alt={title}
      />
      <div className="flex flex-col gap-6">
        <div>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              {title} ({year})
            </CardTitle>
            <CardDescription style={{ color: "#8B8B8B" }}>
              {genre} • {rating} • {duration}
            </CardDescription>
            <CardAction>
              <Button variant="link">View</Button>
            </CardAction>
          </CardHeader>
        </div>
        <div>
          <CardContent style={{ color: "#8B8B8B" }}>{description}</CardContent>
          <CardFooter className="flex-col gap-2"></CardFooter>
        </div>
      </div>
    </Card>
  );
}

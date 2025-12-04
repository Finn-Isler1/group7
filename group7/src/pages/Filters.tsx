import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Filters() {
  return (
    <>
      <div className="flex flex-col">
        <p>Genre</p>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Choose a Genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Genres</SelectLabel>
              <SelectItem value="action">Action</SelectItem>
              <SelectItem value="adventure">Adventure</SelectItem>
              <SelectItem value="animation">Animation</SelectItem>
              <SelectItem value="comedy">Comedy</SelectItem>
              <SelectItem value="crime">Crime</SelectItem>
              <SelectItem value="documentary">Documentary</SelectItem>
              <SelectItem value="drama">Drama</SelectItem>
              <SelectItem value="family">Family</SelectItem>
              <SelectItem value="fantasy">Fantasy</SelectItem>
              <SelectItem value="history">History</SelectItem>
              <SelectItem value="horror">Horror</SelectItem>
              <SelectItem value="music">Music</SelectItem>
              <SelectItem value="mystery">Mystery</SelectItem>
              <SelectItem value="romance">Romance</SelectItem>
              <SelectItem value="sciencefiction">Science Fiction</SelectItem>
              <SelectItem value="thriller">Thriller</SelectItem>
              <SelectItem value="tvmovie">TV Movie</SelectItem>
              <SelectItem value="war">War</SelectItem>
              <SelectItem value="western">Western</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <p>Year</p>
      </div>
    </>
  );
}

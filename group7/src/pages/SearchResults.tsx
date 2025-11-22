import MovieCard from "@/components/MovieCard";

export default function Signup() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <MovieCard
          title="12 Angry Men"
          year="1957"
          genre="Drama"
          rating="4.6/5"
          duration="1h 37m"
          description="The defense and the prosecution have rested and the jury is
                filing into the jury room to decide if a young Spanish-American
                is guilty or innocent of murdering his father."
          img="src/assets/12AngryMen.jpg"
        />

        <MovieCard
          title="12 Angry Men"
          year="1997"
          genre="Drama"
          rating="3.9/5"
          duration="1h 57m"
          description="During the trial of a man accused of his father’s murder, 
                a lone juror takes a stand against the guilty verdict handed 
                down by the others as a result of their preconceptions and 
                prejudices."
          img="src/assets/12AngryMen_2.jpg"
        />

        <MovieCard
          title="12 Angry Men"
          year="1954"
          genre="Drama"
          rating="3.8/5"
          duration="1h"
          description="The jurors in a murder trial take their seats in a small, 
                drab room to decide the defendant's fate. At first, all the men 
                vote guilty bar one, who still has many questions not answered 
                in court. Through theories and re-enactments, others change 
                their minds, but one man is adamant that he'll never change 
                his vote and won't listen to reason."
          img="src/assets/12AngryMen_3.jpg"
        />
      </div>
    </>
  );
}

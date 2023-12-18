import "./ActorList.css";
import ActorCard from "../../components/ActorCard/ActorCard";

export default function ActorList({ movies }) {
  const actorList = movies.reduce((actors, m) => {
    m.cast.forEach((a) => {
      if (!actors.includes(a)) actors.push(a);
    });
    return actors;
    console.log(actors);
  }, []);
  return (
    <>
      <div>
        {actorList.map((actor) => {
          return <ActorCard key={actor} actor={actor} />;
        })}
      </div>
    </>
  );
}

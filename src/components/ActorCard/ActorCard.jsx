import "./ActorCard.css";

export default function ActorCard({ actor }) {
    const ran = Math.floor(Math.random()*500) + 200;
    const rando = `https://picsum.photos/${ran}`
  return (
    <>
       <img src={rando} alt="" />
      <h4>{actor}</h4>
    </>
  );
}

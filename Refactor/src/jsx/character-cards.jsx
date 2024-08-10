import "../css/character-cards.css";

export function CharacterCard({ name, nickName, url, description }) {
  return (
    <div className="card">
      <div className="card-titles">
        <h3>{name}</h3>
        {nickName && <h4>{nickName}</h4>}
      </div>
      <img src={url} alt="" />
      <p>{description} </p>
    </div>
  );
}

import { CharacterCard } from "./characterCard";

export const CharacterCards = ({ data }) => {
  return (
    <section id="character-cards">
      {data.map((item) => {
        return (
          <CharacterCard
            name={item.name}
            nickName={item.nickName}
            url={item.imageUrl}
            description={item.background}
            key={item.name}
          />
        );
      })}
    </section>
  );
};

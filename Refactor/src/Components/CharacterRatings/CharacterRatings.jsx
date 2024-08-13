import "./character-ratings.css";
import { CharacterRatingRow } from "./CharacterRatingRow";

export function CharacterRatings({ data }) {
  const topFiveSortedCharacters = data
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 5);

  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {topFiveSortedCharacters.map((item, itemIndex) => {
            return (
              <CharacterRatingRow
                index={itemIndex}
                name={
                  item.name +
                  " " +
                  (item.nickName !== null ? `"${item.nickName}"` : "")
                }
                skillset={item.skillset}
                votes={item.votes}
                key={item.name}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default CharacterRatings;

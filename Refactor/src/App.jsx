import "./css/reset.css";
import "./css/style.css";
import "./css/header.css";
import data from "./data/fma-data";
import { CharacterRatings } from "./jsx/character-ratings";
import { CharacterCard } from "./jsx/character-cards";

function App() {
  let sortedCharacterByVotes = data.data;
  sortedCharacterByVotes.sort((a, b) => b.votes - a.votes);

  return (
    <>
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Skillset</th>
              <th>Votes</th>
            </tr>
            {sortedCharacterByVotes.slice(0, 5).map((item, itemIndex) => {
              const backgroundColor = itemIndex % 2 !== 0 ? "light" : "dark";
              return (
                <CharacterRatings
                  backgroundColorClass={backgroundColor}
                  /*I wasn't sure how you wanted the names displayed So I only displayed the nickname if they had one */
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
      <section id="character-cards">
        {data.data.map((item) => {
          return (
            <CharacterCard
              name={item.name}
              nickName={item.nickName}
              url={item.imageUrl}
              description={item.background}
              key="item.name"
            />
          );
        })}
      </section>
    </>
  );
}

export default App;

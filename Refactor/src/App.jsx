import "./css/reset.css";
import "./css/App.css";
import { data } from "./data/fma-data";
import { HeaderComponent } from "./Components/Header/HeaderComponent";
import { CharacterRatings } from "./Components/CharacterRatings/CharacterRatings";
import { CharacterCards } from "./Components/Character-Cards/characterCards";

function App() {
  return (
    <>
      <HeaderComponent />
      <CharacterRatings data={data} />
      <CharacterCards data={data} />
    </>
  );
}

export default App;

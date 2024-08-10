import "../css/character-ratings.css";

import { Component } from "react";

export class CharacterRatings extends Component {
  render() {
    return (
      <>
        <tr className={this.props.backgroundColorClass}>
          <td>{this.props.name}</td>
          <td>{this.props.skillset}</td>{" "}
          {/* ↑Don't get me for camelCasing here I was just following naming conventions from the data ! :D */}
          <td>{this.props.votes}</td>
        </tr>
      </>
    );
  }
}

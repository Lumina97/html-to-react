export function CharacterRatingRow({ name, skillset, votes, index }) {
  const skills = skillset.join(", ");
  const backgroundColor = index % 2 !== 0 ? "light" : "dark";
  return (
    <>
      <tr className={backgroundColor}>
        <td>{name}</td>
        <td>{skills}</td>
        <td>{votes}</td>
      </tr>
    </>
  );
}

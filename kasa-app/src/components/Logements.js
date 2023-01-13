import data from "../assets/logements.json";

function Ntm() {
  return (
    <div className="users">
      {data.map((user) => (
        <div className="user">{user}</div>
      ))}
    </div>
  );
}
export default Ntm;

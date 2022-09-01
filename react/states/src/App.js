import { useState } from "react";

function App() {

  const [name, setName] = useState("Cengiz");
  const [age, setAge] = useState(23);
  const [friends, setFriends] = useState(["AA", "BB"]);
  const [address, setAddress] = useState({ title: "İstanbul", zip: 34600 });


  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Cngz")} >Change Name</button>
      <button onClick={() => setAge(19)} >Change Age</button>

      <hr />
      <br />

      <h2>Friends</h2>
      {
        friends.map(
          (friend, index) => <div key={index}>{friend}</div>
        )
      }
      <br />
      <button onClick={() => setFriends([...friends, "CC"])} >Add New Friends</button>

      <hr />
      <br />

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>

      <br />
      <button onClick={() => setAddress({...address, title:'Ankara', zip:'84000'})} >Add New Friends</button>

    </div>
  );
}

export default App;

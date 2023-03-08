import {useState, useEffect} from "react";
import './App.css';

function App() {

  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(30);
  const [friends, setFriends] = useState(["Ahmet","Aslı"])
  const [address, setAddress] = useState({ title:"İzmir",zip:"35420" })



  function changeName() {
    name == "Mehmet" ? setName("Aslı") : setName("Mehmet")
  }

  useEffect(() => {
    console.log("Component mount edildi");
  }, [])


  useEffect(() => {
  console.log("Name güncellendi");
  }, [name])

  return (
    <div className="App">
      <h1>Merhaba {name}</h1>
      <h2>{age}</h2>
      <button onClick={changeName}>Change Name</button>
      <button onClick={()=> setAge(31)}>Change Age</button>
      <br />
      <br />
      <hr />
      <h2>Friends</h2>
      {
        friends.map((friend,key)=><div key={key}>{friend}</div>)
      }
      <button onClick={()=> setFriends([...friends,"Ayşe"])}>Add New Friend</button>

      <br /><br />
      <hr /> 
      <h2>Adress</h2>
      <div>{address.title}/{address.zip}</div>
      <br />
      <button onClick={()=> setAddress({...address,title:"Ankara"})}>Change the Title</button>
      <button onClick={()=> setAddress({...address, zip:"04568"})}>Change the Zip</button>
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Mehmet");

  useEffect(() => {
    console.log("Component mount edildi");
    const interval = setInterval(()=>{
      setCounter((n)=>n+1)
    },1000);
    return ()=> clearInterval(interval);
  }, [])



  useEffect(() => {
   console.log("Name state güncellendi");
  }, [name])

  useEffect(() => {
    console.log("counter state güncellendi");
  }, [counter])




//   Increase fonksiyonu
  const increase = () =>{
    setCounter((n)=>n+1) // buradaki n counter değerini ifade ediyor
  };

//   Decrease Fonksiyonu

  const decrease = () =>{
    counter == 0 ? setCounter(0) :  setCounter(counter - 1)
  };

  const changeName =()=>{
    name =="Mehmet"?setName("Aslı") : setName("Mehmet")
    }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={decrease}>Decrease</button>
      <button onClick={increase}>Increase</button><br /><br />
      <hr /><br /><br />
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
    </>
  );
}

export default Counter;

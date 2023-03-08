import React, { useState } from 'react'

function InputExample() {

    const [form, setForm] = useState({name:"",surname:""})


    const onChangeInput = (e) =>{
        // console.log(e.target.name);
        setForm({...form,[e.target.name]:e.target.value})
    }


  return (
    <>
        Please enter a name <br />
        <input name='name' value={form.name} onChange={onChangeInput} />
        <br /> 

        <br />
        Please enter a surname <br />
        <input name='surname' value={form.surname} onChange={onChangeInput} />
        <br /><br />
        {form.name} {form.surname}
    </>
  )
}



export default InputExample;
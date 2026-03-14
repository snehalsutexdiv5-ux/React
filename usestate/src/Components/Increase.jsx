import React, { useState } from 'react'

const Increase = () => {

  const [number, setnumber] = useState(0);
  //number ==> read only che 
  //set number==>write only(jo number ni value change karvi hoy to set number no use karvano)

  function IncreacseNum() {
    setnumber(number + 1);
  }
  function DeacreaseNum() {
    if (number !== 0) return setnumber(number - 1);
    // setnumber(number -1);

  }
  function jump10() {
    setnumber(number + 10);
    return setnumber(number + 10);
  }
    function jump5for() {
    setnumber(number + 5);
    return setnumber(number + 5);
  }
    function jump5back() {
      if(number >=5){
          setnumber(number - 5);
      }
      else{
        setnumber(0);
      }
  }
  //console.log(number);

  return (
    <>
      <section className='py-15'>
        <h1 className='text-4xl text-center font-extrabold'>UseState == data that can change(data ne chaneg karvo)</h1>
        <p className='text-2xl py-3  font-bold text-center'>Increase and Decrease counter</p>
        <div className='w-72 h-72 border-4 border-amber-500 rounded-2xl bg-amber-200 text-4xl py-2 px-4 font-bold flex items-center justify-center text-amber-950 mx-auto'>
          {number}
        </div>
        <div className='flex justify-center items-center mt-5 gap-5'>
          <button className='border bg-amber-950 px-4 py-1 text-center rounded-lg w-54 h-12 text-xl '
            onClick={IncreacseNum}>
            Increase</button>
          <button className='border bg-amber-950 px-4 py-1 text-center rounded-lg w-54 h-12 text-xl 
    'onClick={DeacreaseNum}>Decrease</button>
          <button className='border bg-amber-950 px-4 py-1 text-center rounded-lg w-54 h-12 text-xl 
    'onClick={jump10}>jump10</button>
    <button className='border bg-amber-950 px-4 py-1 text-center rounded-lg w-54 h-12 text-xl 
    'onClick={jump5for}>jump 5 FORWARD</button>
    <button className='border bg-amber-950 px-4 py-1 text-center rounded-lg w-54 h-12 text-xl 
    'onClick={jump5back}>jump 5 BACKWARD</button>
        </div>
      </section>

    </>
  )
}

export default Increase
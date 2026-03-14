import React, { useState } from 'react'

const App = () => {
  const [number, setnumber] = useState(0);

  // number = read only
  // setnumber = write only (number ne change karvo)
  function IncreaseNum(){
    //let newnumber = number + 1;
     setnumber(number + 1);
  }

   function DecreaseNum(){
    if(number == 0)return; setnumber(number - 1);

  }

  // function ResetNum(){ jump10(){
  //   setnumber(! == 0)
  //    return setnumber(number + 10);
  // }


  console.log(number);
  return (
   <>
   <section className='py-1'>
   <h1 className='text-4xl text-center font-extrabold'>useState == data that can change (data ne change karvo )</h1>
   <p className='text-2xl py-3 font-bold text-center'>Increase and Decrease Counter</p>
   <div className='w-72 h-72 border bg-[#555] text-5xl font-extrabold
             rounded-xl PY-2 PX-4 flex items-center justify-center text-[#222] mx-auto'>{number} </div>

             <div className='flex items-center justify-center mt-5 gap-5'>
   <button className='border bg-[#555] px-4 py-1 text-center rounded-lg w-59
        h-12 text-xl'onClick={IncreaseNum}>Increase</button>
   <button className='border bg-[#555] px-4 py-1 text-center rounded-lg w-59
        h-12 text-xl ' onClick={DecreaseNum}>Decrease</button>
        </div>
</section>
   </>

  )
}

export default App
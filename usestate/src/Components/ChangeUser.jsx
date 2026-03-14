import React, { useState } from 'react'

const ChangeUser = () => {

    const [Data, setData] = useState({
        photo: 'https://i.pinimg.com/736x/37/a9/87/37a9871f476fb065a3d78ecb856b0dd9.jpg',
        username: 'John Doe',
        role: 'User',
        email: 'john.doe@example.com',
        background: 'bg-teal-60'
    });

    // only Change username and photo

     function Change() {
        let new_obj = { ...Data };
        if (Data.username === 'John Doe') {
            new_obj.username = 'Jane Smith'; // object copy
            new_obj.photo = 'https://i.pinimg.com/736x/1a/69/07/1a6907fbd0c98c275fa9aecc50ae0a28.jpg';
          new_obj.background = 'bg-green-600';
            setData(new_obj);
        }
        else{
            new_obj.username = 'John Doe'; // object copy
        new_obj.photo = 'https://i.pinimg.com/736x/37/a9/87/37a9871f476fb065a3d78ecb856b0dd9.jpg';
        new_obj.background = 'bg-orange-500';
        setData(new_obj);
        }
     }

  return (
    <>
<section className='flex items-center justify-center mt-20'>
    <div className={`w-full h-auto max-w-md px-6 py-4 
        ${Data.background}  rounded-2xl text-center font-bold
     shadow-lg shadow-amber-900 flex flex-col gap-2`}>
        <img src={Data.photo} alt="photo"  className='w-44 
        h-44 object-cover rounded-full my-5 mx-auto'/>
        <h1 className='text-2xl bg-amber-800 hover:bg-amber-950 text-center py-1 roundede-xl'>{Data.username}</h1>
        <h2 className='text-2xl bg-amber-800 hover:bg-amber-950 text-center py-1 roundede-xl'>{Data.role}</h2>
        <p className='text-2xl bg-amber-800 hover:bg-amber-950 text-center py-1 roundede-xl'>{Data.email}</p>
        <button className='w-full text-center py-1 px-4 bg-orange-950 hover:bg-amber-800 roundede-xl'
         onClick={Change}>change user</button>
    </div>
</section>
    
    </>

  )
}

export default ChangeUser
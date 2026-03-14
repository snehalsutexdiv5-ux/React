import React, { useState } from 'react'

const AddUser = () => {
    const [Data, setData] = useState([
        { username: "palak vanjara", email: "palak@gmail.com" },
        { username: "aditi kantharia", email: "aditi@gmail.com" },
        { username: "dhruvi patel", email: "dhruvi@gmail.com" },

    ]);
    function Add() {
        let new_arr = [...Data];
            new_arr.push({
                username: "ananya gupta",
                email: "anaya@gmail.com"
            });
               if (Data[3]?.username === "ananya gupta") {
                  return console.log("not not");
        }
         setData(new_arr);
    }
    return (
        <>
            <section className='flex flex-wrap items-center gap-6 justify-center my-10  mx-20 px-8'>
                {Data.map((data, idx) => {
                    console.log(data);
                    return <div key={idx}>
                        <div className=' bg-[#555] rounded-xl w-full h-auto max-w-md px-2 py-4 text-center'>
                            <h1 className='text-2xl bg-[#222] rounded-lg my-2 px-4 py-2 '>{data.username}</h1>
                            <p className='text-2xl bg-[#222] rounded-lg my-2 px-4 py-2 '>{data.email}</p>
                        </div>
                    </div>
                })}

            </section>
            <button className='bg-orange-400 active:scale-95  mx-w-sm py-2 px-4 rounded-2xl translate-x-9/2'
             onClick={Add}>Add Random user</button>
        </>
    );
};

export default AddUser
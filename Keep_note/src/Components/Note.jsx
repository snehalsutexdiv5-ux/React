import { NotebookPen,LayoutList } from 'lucide-react';
import React, { useState } from 'react'

const Note = () => {
    const [Heading, setHeading] = useState("");
    const [Notes, setNotes] = useState("");
    const [Tasks, setTasks] = useState([]);
    function SubmitForm() {
        console.log("new tasks craeted", {
            "tasks Heading": Heading,
            "Notes": Notes
        });
        let Add = [...Tasks];
        Add.push({ Title: Heading, Task: Notes });
        setTasks(Add);

        console.log("tasks", Add);
        setHeading("");
        setTasks("");
        setNotes("");
    }
    return (
        <>
            <section className='flex items-center justify-center w-full h-screen form-[#]'>
                {/* {form for add tasks} */}
                <div className=' w-1/2 h-screen flex items-center justify-center bg-green-50 '>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        SubmitForm();
                    }}>
                        <div className='flex gap-4 items-center my-4'>
                            <NotebookPen strokeWidth={3} className='w-32 h-32 text-green-700' />
                            <h1 className='text-5xl text-shadow-lg font-bold text-green-900'>Add your Task</h1>
                        </div>

                        <input type="text" className='w-full bg-green-200 rounded-md px-4 py-2 my-2 font-semibold ' placeholder='Task Heading'
                            value={Heading} onChange={(e) => {
                                setHeading(e.target.value);
                            }} />
                        <textarea rows={8} className='w-full bg-green-200 rounded-md px-4 py-2 my-2 font-semibold ' placeholder='Add your Tasks...'
                            value={Notes}
                            onChange={(e) => {
                                setNotes(e.target.value);
                            }}
                        >

                        </textarea>
                        <input type="submit" value="New Task"
                            className='w-full text-center px-4 py-2 rounded-md bg-green-900
             text-green-100 active:scale-95 active:bg-green-100 active:text-green-900 
             transition-all font-semibold'/>
                    </form>
                </div>

                {/* {create a div that show ours notes} */}
                <div className=' w-1/2 h-screen border-l-2 border-black border-dashed p-6 bg-amber-100'>
                        <div className='flex justify-center items-center gap-4 my-4'>
                           <LayoutList strokeWidth={3} 
                           className="w-10 h-10 text-red-900 font-bold"/>
                           <h1 
                           className='text-4xl text-red-950'>Your Tasks:</h1>
                        </div>
                    <div className='border border-[#582f0e] flex   items-center justify-center p-2 rounded-4xl w-full h-52 max-w-52 '>
                            <div className='w-full  max-w-48 h-48 bg-[#582f0e] rounded-3xl'>

                            </div>
                    </div>
            
                </div>
            </section>
        </>
    );
};

export default Note;
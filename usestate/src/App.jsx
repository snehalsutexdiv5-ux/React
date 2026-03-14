import React from 'react'
import Increase from './Components/Increase';
import ChangeUser from './Components/ChangeUser';
import AddUser from './Components/AddUser';

const App = () => {
  return (
    <>
    <Increase />

 {/*   usestate with object */}
       <ChangeUser />

       {/* Usesatae with array */}

        <AddUser />


      </>
  )
}

export default App
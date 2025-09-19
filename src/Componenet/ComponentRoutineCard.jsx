// import React, { useState } from 'react'

function ComponentRoutineCard({routine , userId ,toggleRoutine,deleteRoutine}) {
  // const [done,setDone] = useState(routine.done)

  // const changeDone = () =>{
  //   setDone(!done)
  // }
  return (
    <div className='flex justify-between  m-2 px-2'>
        <div>
          <h6 className={routine.done ? "line-through text-gray-500" : ""}>{routine.title}</h6>
        </div>
        <div>
          {routine.done ? 
          (<button onClick={() => toggleRoutine(userId, routine.id)} className='mx-5 bg-amber-500 rounded-2xl'><i className="fa-solid fa-xmark text-white m-2"></i></button>):
          (<button onClick={() => toggleRoutine(userId, routine.id)} className='mx-5 bg-green-600 rounded-2xl'><i className="fa-solid fa-check text-white m-2"></i></button>)
          }
          <button onClick={() => deleteRoutine(userId, routine.id)} className='mx-5 bg-red-600 rounded-2xl'><i className="fa-solid fa-trash-can text-white m-2"></i></button>
        </div>
    </div>
  )
}

export default ComponentRoutineCard
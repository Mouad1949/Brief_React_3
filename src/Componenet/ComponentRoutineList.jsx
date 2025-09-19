import React from 'react'
import ComponentRoutineCard from './ComponentRoutineCard'

function ComponentRoutineList({user,toggleRoutine,deleteRoutine}) {
  return (
    <div className="my-8">
      {user.routines.map((routine, index) => (
        <div key={index}>
          <ComponentRoutineCard routine={routine} userId={user.id} toggleRoutine={toggleRoutine} deleteRoutine={deleteRoutine}/>
        </div>
      ))}
    </div>
  )
}

export default ComponentRoutineList
import React from 'react'
import ComponentUserCard from './ComponentUserCard'
import ComponentRoutineList from './ComponentRoutineList'

function ComponentUserList({users , toggleRoutine,deleteRoutine}) {
  return (
    <div className='flex justify-between rounded-[10px] w-[1400px] h-full'>
         {users.map((user, index) => (
            <div key={index} className="bg-white w-[400px] rounded-[10px]">
              <ComponentUserCard user={user} />
              <ComponentRoutineList user={user} toggleRoutine={toggleRoutine} deleteRoutine={deleteRoutine}/>
            </div>
          ))}
    </div>
  )
}

export default ComponentUserList
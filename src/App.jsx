
import './App.css'
import ComponentUserList from './Componenet/ComponentUserList'
import ComponentAddRoutineForm from './Componenet/ComponentAddRoutineForm'
import { useEffect, useState } from 'react';

function App() {
  const data =[
      {
        "id": 1,
        "name": "Ali",
        "image":"/images/man.png",
        "routines": [
          { "id": 1, "title": "Sport", "done": true },
          { "id": 2, "title": "Lecture", "done": false }
        ]
      },
      {
        "id": 2,
        "name": "ayoub",
        "image":"/images/man2.png",
        "routines": [
          { "id": 2, "title": "Hydratation", "done": true }
        ]
      },
      {
        "id": 3,
        "name": "mouad",
        "image":"/images/man1.png",
        "routines": [
          { "id": 3, "title": "Hydratation", "done": true }
        ]
      }
    ];
  const [users,setUsers] = useState([])

  useEffect(()=>{
    const getUsers = localStorage.getItem('UsersData')
    if(!getUsers){
      localStorage.setItem('UsersData', JSON.stringify(data))
      setUsers(data)
    }else{
      setUsers(JSON.parse(getUsers))
    }
  },[])

  const toggleRoutine = (userId , routineId) =>{
    const updateUsers = users.map((user)=>{
      if(user.id === userId){
        return {
          ...user,
          routines:user.routines.map(rou=>
            rou.id === routineId ? {...rou,done: !rou.done} : rou
          )
        };
      }
      return user;
    })
    setUsers(updateUsers);
    localStorage.setItem('UsersData' , JSON.stringify(updateUsers))
  }
  
  const deleteRoutine = (userId ,routineId) =>{
    const userUpdate = users.map(user=>{
      if(user.id === userId){
        return {
          ...user,
          routines: user.routines.filter(rou=>rou.id !==routineId)
        };
      }
      return user;
    })
    setUsers(userUpdate);
    localStorage.setItem('UsersData', JSON.stringify(userUpdate));
  }

  return (
    <div className="container mx-auto py-[100px]">
          <div className="bg-blue-100 border border-blue-400 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-blue-600 text-white text-xl font-bold text-center py-3">
              Daily Habits Tracker
            </div>
            <div className="p-6 flex flex-wrap gap-6 justify-center">
              <ComponentAddRoutineForm users={users} setuser={setUsers}/>
              <ComponentUserList users={users} toggleRoutine={toggleRoutine} deleteRoutine={deleteRoutine}/>
            </div>
          </div>
        </div>
  )
}

export default App

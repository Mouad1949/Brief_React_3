import { useState } from "react"

function ComponentAddRoutineForm({users,setuser}) {
  const [title , setTitle] = useState('');
  const [selectUser ,setSelectUser] = useState('')

  const handelData = (e) =>{
    e.preventDefault();

    if(!title.trim()){
      alert("please enter data !!")
      return;
    }

    const newRoutine = {
      id:Date.now(),
      title,
      done:false
    }

    const saveData =JSON.parse(localStorage.getItem('UsersData')) || users ;
  
    const UpdateData = saveData.map((u)=>
      u.id === Number(selectUser) ? {...u , routines: [...u.routines ,newRoutine]} : u
    );
    localStorage.setItem('UsersData', JSON.stringify(UpdateData))
    alert("Routine added!");
    setuser(UpdateData)
  }
  

  return (
    
        <div>
          <form  className='flex justify-between w-[1300px] h-[40px] mb-[100px]'>
            <input type="text" className='bg-white arounded-2 w-[300px] rounded-[10px]' name="routine" id="" placeholder='Nouvelle Routine ...' onChange={((e) => setTitle(e.target.value))}/>
              <select name="" className='bg-white arounded-2 w-[300px] rounded-[10px]' onChange={((e) => setSelectUser(e.target.value))}>
                {users.map((user)=>(
                <option key={user.id} value={user.id}>{user.name}</option>
                ))}
              </select>
            <button type='submit' onClick={handelData} className='bg-blue-500 arounded-2 w-[300px] rounded-[10px]'>Ajouter</button>
          </form>
        </div>
    
  )
}

export default ComponentAddRoutineForm
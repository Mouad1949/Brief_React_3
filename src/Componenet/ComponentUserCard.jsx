function ComponentUserCard({user}) {

  const totalRoutine = user.routines.length
  const routineDone = user.routines.filter(rou => rou.done).length

  const progress = totalRoutine === 0 ? 0 : (routineDone / totalRoutine) * 100;
  return (
    <div className='m-4'>
        <img src={user.image} alt='Image user' className='w-[80px] h-[70px] mx-auto'/>
        <h6 className='text-center mt-4'>{user.name}</h6>
        <p>progress :{Math.round(progress)}%</p>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${Math.round(progress)}%`}}></div>
        </div>
    </div>
  )
}

export default ComponentUserCard
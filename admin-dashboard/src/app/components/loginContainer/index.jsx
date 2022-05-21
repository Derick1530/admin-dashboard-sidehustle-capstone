import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContainer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (password && username === 'admin') {
      localStorage.setItem('admin', username)
      navigate('/')

    }

  }

  return (
    <div className='flex items-center   justify-center'>
      <div className='absolute  mx-auto my-auto  border-gray-200 border-2 border-opacity-50 hover:border-4 hover:border-blue-200 hover:border-opacity-25 rounded-lg  inset-0 md:w-[30rem] h-[22rem] '>
        <p className='text-center text-4xl font-bold mt-3'>Login</p>
        <form onSubmit={onSubmitHandler}>
          <div className=' -mt-10 m-2 rounded-lg h-[20rem] bg-blue-500 hover:bg-blue-600 hover:backdrop-blur-sm hover:bg-clip-padding  shadow-lg hover:backdrop-filter-blur hover:bg-opacity-30 bg-opacity-50 flex justify-center flex-col p-6 space-y-6'>
            <input type="text" className='input' placeholder='username' onChange={(e) => { setUsername(e.target.value) }} />
            <input type="password" className='input' placeholder='*****' onChange={(e) => { setPassword(e.target.value) }} />
            <button className='btn'>sign in</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default LoginContainer
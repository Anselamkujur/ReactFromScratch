import React from 'react'

const LoginForm = () => {
  return (
    <div className='h-full flex items-center justify-center '>
      <form action="" className='flex px-10 py-10 rounded-4xl bg-gray-300 flex-col grid gap-2 tracking-wider'>
        <h1 className='uppercase text-3xl flex justify-center pb-5 '>login</h1>
        <h2>Email</h2>
        <input type="email" 
                placeholder='enter your name'
                className='px-3'/>
        <h2>Password</h2>
        <input type="password"
               placeholder='enter password'
               className='px-3' />
        
        <button className='px-3 py-2 border-2 rounded-full hover:bg-sky-200'>login</button>

      </form>
    </div>
  )
}

export default LoginForm
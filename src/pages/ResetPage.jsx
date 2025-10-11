import React, { useState } from 'react'
import { Link } from 'react-router'
import axiosInstance from '../instances/Instance'
import passkey from '../assets/passkey.svg'
import validation from '../helperFile'

const ResetPage = () => {
const [password1,setPassword1] = useState('')
const [password2,setPassword2] = useState('')
const [error,setError] = useState('')
const [pass1,setPass1] = useState(false)
const [pass2,setPass2] = useState(false)
 const reset = async(e) =>{
    e.preventDefault()
    setError('')
    try{
      console.log(password1,password2)
      if(!validation.PassError(password1)){
         setPass1(true)
         return
      }
      else if(!validation.PassError(password2)){
         setPass2(true)
         setPass1(false)
         return
      }
      setPass2(false)
      setPass1(false)
      const query = window.location.search
      const url = new URLSearchParams(query)
      const rs = url.get('rs')
      const email = url.get('email')
    
      const getRS = await axiosInstance.post(`/newpassword?rs=${rs}&email=${email}`,{
        password1,
        password2
      })
      const res = await getRS.data
      console.log(res.message)
      alert(res.message)
      setPassword1('')
      setPassword2("")
    }
    catch(err){
       setError(err.response?.data?.message)
    }
    
 }
  return (
     <form action="">
        <div className="bg-white/30 md:w-100 rounded flex flex-col justify-center items-center  box-content w-70 h-75 m-auto my-10 py-5">
            <h2 className='mt-3 text-xl mb-6'><strong>Change Password</strong></h2>
            <label htmlFor="password1" className='text-gray-800'><strong>New Password</strong></label>
            <div className=" mb-5 font-semibold  py-3 px-10 flex rounded-xl hover:bg-white/75 ">
               <input type="password1" value={password1} onChange={(e)=>setPassword1(e.target.value)} placeholder="Enter Your New Password . . . ."
               className="text-center border-none focus:outline-none font-semibold"/>
               <img src={passkey} alt="" />
            </div >
            {pass1&&<span className='text-sm -mt-4  text-red-600 '>Enter Password....</span>}
            <label htmlFor='password2' className='text-gray-800'><strong>Confirm Password</strong></label>
            <div className=" mb-5 font-semibold  py-3 px-10 flex rounded-xl hover:bg-white/75 ">
               <input type="password2" value={password2} onChange={(e)=>setPassword2(e.target.value)} placeholder="Enter Your Confirm Password . . . ."
               className="text-center border-none focus:outline-none font-semibold"/>
               <img src={passkey} alt="" />
            </div>
            
            {pass2&&<span className='text-sm -mt-4  text-red-600 '>Enter Password....</span>}
            {error&&<span className='text-sm -mt-4  text-red-600 '>{error}</span>}

            <div className='w-full px-10'>
               <button onClick={reset}  type='submit' className="relative hover:text-amber-50  px-4 py-2 rounded bg-[conic-gradient(at_top,_#ff0080,_#ff8c00,_#40e0d0,_#8a2be2,_#ff0080)] w-full">Reset</button>
            </div>
            <Link to={'/'} className='hover:underline text-sm my-3 font-medium text-sky-800'>back</Link>
        </div>
   </form>
  )
}

export default ResetPage
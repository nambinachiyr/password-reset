import { useState } from "react"
import { Globel } from "../GlobelContext.jsx"
import axiosInstance from "../instances/Instance"
import validation from "../helperFile.js"
import mail from '../assets/mail.svg';
import { Link } from "react-router";



const Forget_PW = () => {
    const {email,setEmail} = Globel()
    const [error,setError] = useState()
    const [err,setErr] = useState(false)
    const [erMg,setErMg] = useState('')
    console.log(email)

    const handleEmailSubmit = async(e) => {
      
      e.preventDefault()

      if(!validation.EmailError(email)){
          setErr(true)
          setErMg('Please Enter Vaild Email....')
          return;
      }
      try{
        setErr(false)
        setErMg('')
        const EmailGet = await axiosInstance.post('/password_reset',{email})
        const res = await EmailGet.data
        setError('')
        alert(res.message)
        setEmail('')
      }catch(err){
        console.log("Error ",err)
        const message = err.response?.data?.message
        setError(message)
      }
      console.log("Its work")
      // setError('')
    }
    console.log(error)
    
  return (
   <form onSubmit={handleEmailSubmit}>
        <div className=" bg-white/30 md:w-100 flex flex-col gap-5 justify-center items-center box-border rounded w-70 h-60 m-auto my-10 py-5">
         
          <h1><strong>Verify with email</strong></h1>
           
            <div className=" mb-5 font-semibold  py-3 px-10 flex rounded-xl hover:bg-white/75 ">
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Your Email . . . ."
              className="border-none focus:outline-none font-semibold"/>
              <img src={mail} alt="mail" />
            </div>
              {err?err&&<span className='text-sm -mt-4  text-red-600 '>{erMg}</span>: error&&<span className='text-sm -mt-4  text-red-600 '>{error}</span>}
            <div className="w-full px-10">
              <button type='submit' className="w-full relative p-[2px] rounded-xl overflow-hidden group">
                <span className="absolute inset-0 bg-[conic-gradient(at_top,_#ff0080,_#ff8c00,_#40e0d0,_#8a2be2,_#ff0080)] rounded-xl "></span>
                <span className="relative block bg-white/70 rounded-xl text-gray-800 px-6 py-2 font-semibold group-hover:text-black hover:cursor-pointer">
                Verify
                </span>
              </button>
            </div>
            <Link to={'/'} className='hover:underline text-sm font-medium  text-sky-800'>back</Link>
        </div>
   </form>
  )
}

export default Forget_PW
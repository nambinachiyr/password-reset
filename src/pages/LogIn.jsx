import { Link } from 'react-router';
import mail from '../assets/mail.svg';
import passkey from '../assets/passkey.svg'
import { useState } from 'react';
import axiosInstance from '../instances/Instance';
import validation from '../helperFile';

const LogIn = () => {

  const[emailL,setEmailL] = useState('')
  const[pwL,setPwL]  = useState('')
  const[erE,setErE] = useState(false)
  const[erP,setErP] = useState(false)
  const [er,setEr] = useState('')
  const[pr,setPr]=useState('')
  const [error,setError] = useState('')

  async function handleLogin(e){
    e.preventDefault();
     if(!validation.EmailError(emailL)){
      setErE(true) 
      setEr('Please Enter Vaild Email....')
      return;
    }
    else if(!validation.PassError(pwL)){
      setErP(true)
      setEr('')
      setPr('Password Invalid')
      return;
    }
    
    try {    
      setErE(false)  
      setErP(false)
      const CreateUser = await axiosInstance.post('/login', {
        emailL,
        pwL,
      });
      const res = await CreateUser.data;
      console.log(res);
      setError('')
      alert(res.message);
      setEmailL('')
      setPwL('')
    } catch (err) {
      setError(err?.response?.data?.message)
    }
    
  }
  return (
    <form action="" onSubmit={handleLogin}>
      <div className=" bg-white/30 md:w-100  rounded-xl  flex flex-col box-border justify-center items-center  w-70 h-105 m-auto my-10 py-5">
        <h1 className='text-3xl mb-6 text-shadow text-shadow-glow  text-black'>
          <strong>LogIn</strong>
        </h1>
        <label htmlFor="email" className='text-gray-800'>
          <strong>Email</strong>
        </label>
       <div className=" mb-5 font-semibold  py-3 px-10 flex rounded-xl hover:bg-white/75 ">
         <input
          type="email"
          value={emailL} onChange={(e)=>setEmailL(e.target.value)}
          placeholder="Enter Your Email . . . ."
          className="border-none focus:outline-none font-semibold"
          />
          <img src={mail} alt='User image' className=''/>
       </div>
        {erE&&<span className='text-sm -mt-4  text-red-600 '>{er}</span>}
        <label htmlFor="password" className='text-gray-800'>
          <strong>Password</strong>
        </label>
        <div className=" mb-5 font-semibold  py-3 px-10 flex rounded-xl hover:bg-white/75 ">
          <input
          type="password"
          value={pwL}  onChange={(e)=>setPwL(e.target.value)}
          placeholder="Enter Your Password . . . ."
          className="border-none focus:outline-none font-semibold"
          />
          <img src={passkey} alt="key" />
        </div>
        {erP&&<span className='text-sm -mt-4  text-red-600 '>{pr}</span>}
        <div className='text-cyan-800 my-3'>
          <Link to={'/forgetpassword'} className='mt-3 font-medium hover:underline'>forget password</Link>
        </div>
        <div className='w-full px-10'>
          <button type='submit' className="w-full  relative p-[2px] rounded-xl overflow-hidden group">
            <span className="absolute px-10 group-hover:animate-spin-slow inset-0 bg-[conic-gradient(at_top,_#ff0080,_#ff8c00,_#40e0d0,_#8a2be2,_#ff0080)] rounded-xl "></span>
            <span className="relative block bg-white/70 rounded-xl text-gray-800 px-6 py-2 font-semibold group-hover:text-black hover:cursor-pointer">
            Login
            </span>

          </button>
        </div>
        <div className='text-xs mt-2'>
          <span>Don't you have an account?</span>
          <Link to={'/createaccount'} className='hover:underline text-sm font-medium text-sky-800'> Register</Link>
        </div>
      </div>
    </form>
  );
};

export default LogIn;

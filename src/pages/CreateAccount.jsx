import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axiosInstance from '../instances/Instance.js';
import validation from '../helperFile.js';
import uImg from '../assets/user.svg';
import mail from '../assets/mail.svg';
import passkey from '../assets/passkey.svg'

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errE, setErrE] = useState(false);
  const [errN, setErrN] = useState(false);
  const [errP, setErrP] = useState(false);
   
  async function handlelaoder(e) {
    e.preventDefault();
    if(!validation.NameValidation(name)){
      setErrN(true)
      return;
    }
    
    else if(!validation.EmailError(email)){
      setErrN(false) 
      setErrE(true) 
      return;
    }
    else if(!validation.PassError(password)){
      setErrP(true)
      return;
    }
    
    try {    
      setErrE(false)  
      setErrN(false)
      setErrP(false)
      const CreateUser = await axiosInstance.post('/createaccount', {
        name,
        email,
        password,
      });
      const res = await CreateUser.data;
      console.log(res);
      
      alert(res.message);
      setEmail('')
      setName('')
      setPassword('')
    } catch (err) {
      alert(err.response?.data?.message);
    }
    
  }
  return (
    <form action="">
      <div className=" bg-white/30 flex flex-col justify-center items-center rounded-xl w-70 md:w-100 h-125 m-auto my-10 py-5">
        <h1 className="text-3xl mb-6 text-black">
          <strong>Create Account</strong>
        </h1>
        <label htmlFor="name" className='text-gray-800'>
          <strong>Name </strong>
        </label>
        
        <div className=" mb-5 font-semibold  py-3 px-10 flex rounded-xl hover:bg-white/75 ">
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name . . . ."
            className='text-center border-none focus:outline-none font-semibold'
          />
          <img src={uImg} alt='User image' className=''/>
        </div>
        {errN && <span  className='text-sm -mt-4  text-red-600 '>Please Enter Your Name...</span>}
        <label htmlFor="email" className='text-gray-800'>
          <strong>Email</strong>
        </label>
        <div className=" mb-5 font-semibold  py-3 px-10 flex rounded-xl hover:bg-white/75 ">
          <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Your Email . . . ."
          className="text-center border-none focus:outline-none font-semibold"
          />
          <img src={mail} alt="mail" />
        </div>
        {errE && <span  className='text-sm -mt-4  text-red-600 '>Please Enter valid Email...</span>}
        <label htmlFor="password" className='text-gray-800'>
          <strong>Password</strong>
        </label>
        <div className=" mb-5 font-semibold  py-3 px-10 flex rounded-xl hover:bg-white/75 ">
          <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Your Password . . . ."
          className="text-center border-none focus:outline-none font-semibold"
          />
          <img src={passkey} alt="key" />
        </div>
        {errP && <span  className='text-sm -mt-4  text-red-600 '>Please Enter Password...</span>}

        <div className='text-cyan-600 my-3'>
          <Link to={'/forgetpassword'} className='mt-3 hover:underline'>forget password</Link>
        </div>
        <div className='w-full px-10'>
          <button
            onClick={handlelaoder}
            className="relative w-full p-[2px] rounded-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-[conic-gradient(at_top,_#ff0080,_#ff8c00,_#40e0d0,_#8a2be2,_#ff0080)] rounded-xl "></span>
            <span className="relative block bg-white/70 rounded-xl text-gray-800 px-6 py-2 font-semibold group-hover:text-black hover:cursor-pointer">
            Register
            </span>
          </button>
        </div>
        <div className='text-xs mt-2 '>
          <span>Do you already have an account?</span>
          <Link to={'/'} className='hover:underline text-sm font-medium  text-sky-800'> Login</Link>
        </div>
      </div>
    </form>
  );
};

export default CreateAccount;

const validation ={
   EmailError: (email) =>{
   const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   return emailCheck.test(email)
   },
   NameValidation:  (name) =>name.trim().length>2
   ,
   PassError:(password)=>password.trim().length>=5

}


export default validation;

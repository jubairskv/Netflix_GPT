
 export const checkValidData =(email,password)=>{
    //const isName = /^[a-zA-Z\\s]*$/.test(name)
    const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    //if(!isName) return "Name is not valid"
    
    if(!isEmailValid) return "Email ID is not valid";

    if(!isPasswordValid) return "Password is not valid";

    return null
 }
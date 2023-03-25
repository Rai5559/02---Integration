

export const validate = (userData, errors) => {
const errores={...errors};

//! ************************** Codigo de jorge*********************************
   // username
   if (!userData.username)  errores.username= "Por favor completa este campo" ;
  
 else if (userData.username.length > 35) errores.username="No puede superar los 35 caracteres";
 else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)) errores.username= "Email inválido";
 else errores.username="";



 // password
 if (userData.password.length < 6 || userData.password.length > 10) errores.password= "Longitud de password inválida"
 else if (!/\d/.test(userData.password)) errores.password=  "Debe contener al menos un número";
 else errores.password= "";
 

//! ************************** Codigo de jorge*********************************

/* 
  if (!userData.username)
   {setErrors({ ...errors, username: "Por favor completa este campo" })

  else if (!^(?=.{1,35}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.username)
 ) {
   setErrors({ ...errors, username: "Email inválido" });
   console.log("Email inválido");
 }
 else {
   setErrors({ ...errors, username: "" });
 }

 

  if (!userData.password)
   {setErrors({ ...errors, password: "Por favor completa este campo" })

  else if (/^(?=.*[0-9])[a-zA-Z0-9]{6,10}$/.test(userData.password)
  ) {
   setErrors({ ...errors, password: "Password inválida" });
  } 
  else {
   setErrors({ ...errors, password: "" });
  }
*/
  return errores;
  };
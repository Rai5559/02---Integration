import React, { useState } from "react";
import { FormStyle, DivForm } from "./Forms"
import { validate } from "./Validation";


const Forms = (props)=>{
    const [userData, setUserData] = useState({ 
        username: "", 
        password: "" 
    });

    const [errors, setErrors]=useState({
        username: "",
        password: ""
      });

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({ ...userData, [property]: value }); 
        setErrors(validate({...userData, [property]:value}, errors))
      };

      const submitHandler = (event) => {
        event.preventDefault();
        props.login(userData);
      };


    return (
        <FormStyle onSubmit={submitHandler}>

            
            <DivForm >
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" onChange={handleChange} value={userData.username } />
                    <span>{errors.username}</span> {/*no muestra*/}
                </div>
                

                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" onChange={handleChange} value={userData.password}/>
                    <span>{errors.password}</span>
                 </div>
            
                
                
                <div>
                    <button type="submit">LOG IN</button>
                </div>
            </DivForm>
                
            
        </FormStyle>
    )
}

export default Forms
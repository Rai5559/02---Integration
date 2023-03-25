import React, { useState } from "react";
import { FormStyle, DivForm, Label, Input, Button, Error } from "./Forms"
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
                    <Label htmlFor="username">Username: </Label>
                    <Input type="text" name="username" onChange={handleChange} value={userData.username } />
                    <Error>{errors.username}</Error> 
                </div>
                

                <div>
                    <Label htmlFor="password">Password: </Label>
                    <Input type="text" name="password" onChange={handleChange} value={userData.password}/>
                    <Error>{errors.password}</Error>
                 </div>
            
                
                
                <div>
                    <Button type="submit">LOG IN</Button>
                </div>
            </DivForm>
                
            
        </FormStyle>
    )
}

export default Forms
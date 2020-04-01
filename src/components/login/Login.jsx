import React from 'react';
import Form from './Form'
import RememberMe from './RememberMe';
import Button from './Button';





const Login = () => {
    return ( 
        <div className="bg-auto sm:bg-cover custom-css">
           <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
           <h3 className="text-center">Welcome back</h3>
            <Form label={'Username'} 
              type={'email'}
              placeholder={'Sam@example.com'}
            />
             
             <Form label={'Password'} 
              type={'password'}
              placeholder={'minimum of 6 characters'}
            />
            <RememberMe />
            <Button />
           
        </form>

        
    
             
             

       
      </div>
        
     );
}
 
export default Login;
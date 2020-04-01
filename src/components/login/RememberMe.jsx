import React from 'react';


const RememberMe = () => {
    return ( 
            <div className="flex justify-between">
                 <span className="" >
                    <input type="checkbox" value="Remember Me" />Remember Me
                </span>
                <span className='mb-4 text-red-200'>Forgot password?</span>
            </div>
     );
}
 
export default RememberMe;
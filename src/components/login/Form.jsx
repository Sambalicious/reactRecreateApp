import React from 'react';




const Form = ({label,type, placeholder}) => {
    return ( 
        <div>
             
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" for={label}>
                   {label}
                 </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline" id="username" type={type} placeholder={placeholder} />
             </div>
            
        </div>
     );
}
 
export default Form;
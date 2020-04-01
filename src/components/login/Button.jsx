import React from 'react';


const Button = ({label}) => {
    return ( 
        <div>
            <button class="w-full md:p-2 bg-transparent hover:bg-indigo-900 text-black font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded">
                     {label}
            </button>
        </div>
     );
}
 
export default Button;
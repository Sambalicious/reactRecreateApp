import React, { Fragment } from 'react'


const Special = ({pics, title}) => {
    return ( <Fragment>
      
              
            <div className="shadow-2xl m-16 ">
            <div className="flex justify-between  p-10 md:flex">
      <div className="mt-4 mr-16 md:mt-0 md:ml-6">
         <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">{title} </div>
         <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos 
        tempora eum? Praesentium, nulla nemo tempore esse sapiente adipisci ipsum ut dolor! Saepe, 
        officiis amet ullam ab ipsum neque quisquam!</p>
        <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos 
        tempora eum? Praesentium, nulla nemo tempore esse sapiente adipisci ipsum ut dolor! Saepe, 
        officiis amet ullam ab ipsum neque quisquam!</p>
        
    </div>
            <div className="md:flex-shrink-0">
                  <img className="md:w-56" src={pics} />
            </div>
       </div>
        </div>
        
        </Fragment>
    )
}
 
export default Special;
import React,{Fragment} from 'react';



const Find = ({title, pics}) => {
    return (    
        <Fragment>
             <div className="text-center m-6 text-5xl font-bold border-t border-black">{title} </div>
           <div className="flex justify-around m-20  md:flex justify-between">
                <div className="mr-10 md:flex-shrink-0">
                    <img  className="w-full" src={pics} alt="alpha beach image"/>
                    <button className="m-8">More Pictures</button>
                    <button className="m-8">Reviews</button>
            </div>
            <div className="mt-4 md:mt-0 md:ml-6">
                <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam, quod nulla? Quidem minima eius, perspiciatis eveniet error
                 atque vero accusantium voluptate ullam optio dolore eum, quo omnis, delectus molestiae voluptatibus.</p>
                 <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam, quod nulla? Quidem minima eius, perspiciatis eveniet error
                 atque vero accusantium voluptate ullam optio dolore eum, quo omnis, delectus molestiae voluptatibus.</p>
                 <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam, quod nulla? Quidem minima eius, perspiciatis eveniet error
                 atque vero accusantium voluptate ullam optio dolore eum, quo omnis, delectus molestiae voluptatibus.</p>
                 <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ullam, quod nulla? Quidem minima eius, perspiciatis eveniet error
                 atque vero accusantium voluptate ullam optio dolore eum, quo omnis, delectus molestiae voluptatibus.</p>
            </div>          
            </div>
            <div className=" flex justify-center">
                <button >Make a Reservation</button>
                <button className="mx-8">Directions</button>
                <button className="mx-8">Book a ride</button>
        </div>

        </Fragment>
     );
}
 
export default Find;
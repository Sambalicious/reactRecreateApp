import React from 'react'
import NavBar from '../Navbar/Navbar'
import Special from './Special';
import zuma from '../../utils/img/zuma.png';
import omu from '../../utils/img/omu1.png';


const SpecialOffer = () => {
    return ( 
        <div>
            <NavBar />
            <div className="mt-10 -mb-32">
            <h2 className="text-center text-5xl font-normal">Special Offers</h2>
            </div>
            <Special pics={zuma} alt="image of Zuma Rock" title={'Zuma Rock'} />
            <Special pics={omu} alt="image of omu resort" title={'Omu Resort'} />
            <div className="flex justify-center">
                <button  className="border-2 border-gray-600 -mt-20 px-2">See More</button>
            </div>
        </div>
     );
}
 
export default SpecialOffer;
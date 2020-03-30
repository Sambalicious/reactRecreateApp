import React from 'react'
import NavBar from '../Navbar/Navbar'
import Special from './Special';
import zuma from '../../utils/img/zuma.png';
import omu from '../../utils/img/omu1.png';


const SpecialOffer = () => {
    return ( 
        <div>
            <NavBar />
            <h2 className="text-center m-6 text-5xl font-bold border-t border-black ">Special Offers</h2>
            <Special pics={zuma} title={'Zuma Rock'} />
            <Special pics={omu} title={'Omu Resort'} />
            <div className="flex justify-center">
                <button >See More</button>
            </div>
        </div>
     );
}
 
export default SpecialOffer;
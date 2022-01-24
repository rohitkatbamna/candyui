import React from "react";
import './homecon.css';
import pandaimage from '../assests/panda.jpeg';
import pandaalt1 from '../assests/1.jpeg';
import pandaalt2 from '../assests/2.jpeg';
import pandaalt3 from '../assests/3.jpeg';
import pandaalt4 from '../assests/4.jpeg';
import pandaalt5 from '../assests/5.jpeg';
import pandaalt6 from '../assests/6.jpeg';
import pandaalt7 from '../assests/7.jpeg';
import pandaalt8 from '../assests/8.jpeg';
import pandaalt9 from '../assests/9.jpeg';
import pandaalt10 from '../assests/10.jpeg';
import pandaalt11 from '../assests/11.jpeg';
import pandaalt12 from '../assests/12.jpeg';


function Homemaincontent() {
    return (
        <div className="home-main-content-all-of-it mt-3">
            <div className="card container-fluid shadow home-main-content-card-below-of-all" style={{ borderRadius: '20px' }}>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="main-content-welcome-panda fs-1">Welcome to Our Panda Zone</p>
                            <img src={pandaimage} style={{ width: '20%', height: '70%' }} alt="panda" />
                        </div>
                    </div>
                    <div className="row">
                        <p className="fs-2 text-center main-content-our-panda mt-5 col-12">Our Swag For Panda</p>
                    </div>
                    <div className="row mt-3">
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt1} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt2} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt3} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt4} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt5} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt6} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt7} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt8} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                    <div className="row">
                        <p className="col-12 text-center fs-3 fw-bold mt-3">OUR STORY</p>
                        <p className="col-12 text-center fs-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className="row">
                        <p className="fs-2 text-center fw-bold mt-3 col-12">Our NFTs</p>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt9} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt10} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt11} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-4" >
                            <img src={pandaalt12} alt="pandaalt1" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Homemaincontent;
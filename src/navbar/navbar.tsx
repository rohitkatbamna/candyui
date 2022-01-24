import React from "react";
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import finelogo from '../assests/wolf-pack-battalion-brands.svg';
function Navbarmintnft() {
    return (

        <div className="card shadow navbar-mint-nft-all-of-it" style={{ marginRight: '50px', marginLeft: '50px', borderBottomRightRadius: '16px', borderBottomLeftRadius: '16px' }}>
            <div className="card-body">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="navbar-brand fw-bold fs-2"><img src={finelogo} alt="fine logo" style={{ height: '60px' }} /><FontAwesomeIcon icon="check-square" />Fine <span style={{ color: '#D8FF01' }}>NFT</span></div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto fs-4">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#">Contact Us</a>
                                <a className="nav-link" href="#">Pricing</a>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Navbarmintnft;
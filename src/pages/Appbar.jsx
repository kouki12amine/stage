import React from 'react';
import { Link } from 'react-router-dom'
import HomeLogo from '../resources/HomeLogo'
import Review from '../resources/Review'
import Contact from '../resources/Contact'
import Admin from '../resources/Admin'

function Appbar() {
    return (
        <div className="nav-section">
            <div className="navbar">
                <Link to="/" className='text-link'>
                    <div className="logo">
                        <div className="img">
                            <HomeLogo />
                        </div>
                        <h6>home</h6>
                    </div>
                </Link>
                <Link to="/Formation" className='text-link'>
                    <div className="logo">
                        <div className="img">
                            <Review />
                        </div>
                        <h6>Review</h6>
                    </div>
                </Link>
                <Link to="/Contact" className='text-link'>
                    <div className="logo">
                        <div className="img">
                            <Contact />
                        </div>
                        <h6>Contact us</h6>
                    </div>
                </Link>
                <Link to="/Admin" className='text-link'>
                    <div className="logo">
                        <div className="img">
                            <Admin />
                        </div>
                        <h6>admin</h6>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Appbar;

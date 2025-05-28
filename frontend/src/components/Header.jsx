import React from 'react';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div>
            {/* Left site */}
            <div>
                <p>
                    Book Appoinment<br /> With Trusted Doctors
                </p>
                <div>
                    <img src="/images/group_profile.png" alt="Group Profile" />
                    <p>Simply browse through our extensive list of Trusted doctors <br/>,
                        schedule your appoinment hassle-free
                    </p>
                </div>
                <a href="">
                    Book appoinment <img src={assets.arrow_icon} alt="" />
                </a>
            </div>
            {/* Right site */}
            <div>
                {/* Add right site content here */}
            </div>
            <img src={assets.header_img} alt="" />
        </div>
    )
}

export default Header;
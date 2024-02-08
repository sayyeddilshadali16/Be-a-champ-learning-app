import React from 'react';
import './Footer.css';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_left">
                <div className="footer_menu">
                    <ul className="menu_list">
                        <li className="menu_items">Privacy Policy</li>
                        <li className="menu_items">Terms and Condition</li>
                        <li className="menu_items">Pricing and Refund</li>
                        <li className="menu_items">Shipping and delivery</li>
                    </ul>
                </div>
                <div className="footer_menu">
                    <ul className="menu_list">
                        <li className="menu_items">About Us</li>
                        <li className="menu_items">Bug Bounty</li>
                        <li className="menu_items">Hire from us</li>
                    </ul>
                </div>
                <div className="footer_menu">
                    <ul className="menu_list">
                        <li className="menu_items">Community</li>
                        <li className="menu_items">Our Students</li>
                    </ul>
                </div>
                <div className="footer_menu menu4">
                    <ul className="menu_list">
                        <li className="menu_items"> <strong>Contact Us</strong></li>
                        <li className="menu_items"><FaPhone />  +91 890-768-0000</li>
                        <li className="menu_items"><MdEmail />  hello@beachamplearning.app</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
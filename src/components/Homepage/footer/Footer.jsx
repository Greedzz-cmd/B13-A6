import React from "react";
import instagramIcon from "../../../assets/instagram.png";
import facebookIcon from "../../../assets/facebook.png";
import twitterIcon from "../../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#101727] text-white py-30 text-center md:text-left">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-7 container mx-auto">
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">DigiTools</h3>
          <p>
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>
        <ul className="space-y-4">
          <li>
            <h3 className="text-2xl font-medium">Product</h3>
          </li>
          <li>
            <a href="">Features</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Templates</a>
          </li>
          <li>
            <a href="">Integrations</a>
          </li>
        </ul>
        <ul className="space-y-4">
          <li>
            <h3 className="text-2xl font-medium">Company</h3>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Press</a>
          </li>
        </ul>
        <ul className="space-y-4 grid">
          <li>
            <h3 className="text-2xl font-medium">Resources</h3>
          </li>
          <li>
            <a href="">Documentation</a>
          </li>
          <li>
            <a href="">Help Center</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="space-y-4 grid justify-items-center">
          <h3 className="text-2xl font-medium">Social Links</h3>
          <ul className="flex gap-3">
            <li>
              <img src={instagramIcon} alt="" />
            </li>
            <li>
              <img src={facebookIcon} alt="" />
            </li>
            <li>
              <img src={twitterIcon} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="border border-t-[#FAFAFA] mt-10 container mx-auto h-0.5"></div>
      <div className="flex justify-between mt-10 container mx-auto text-[#e5e7eb] text-xs">
        <div>
          <p>© 2026 Digitools. All rights reserved.</p>
        </div>
        <div className="flex justify-between gap-2">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

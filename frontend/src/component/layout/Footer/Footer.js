import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Little Milestones</h1>
        <p>Our vision is to fulfill our clients’ desires, dreams, and expectations with motivated and well-trained staff, generating results with sustainability. And to be a benchmark in the market, by reselling different brands of children's shoes that are favored and admired in our sector.</p>

        <p>Copyrights 2022 &copy; Little Milestones</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/_littlemilestones">Instagram</a>
        <a href="http://youtube.com/channel/UCbMSS96sbRWQ7creof2YoZA/featured">Youtube</a>
        <a href="http://facebook.com/Little-Milestones-101734189247533">Facebook</a>
        <a href="http://twitter.com/TheLMStore">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;

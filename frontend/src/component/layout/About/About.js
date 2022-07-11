import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import logo from "../../../images/png.png";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/_littlemilestones";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={logo}
              alt="Founder"
            />
            <Typography className="title">Little Milestones</Typography>
            <span>"Small Steps Makes Little Milestones"</span>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
            Little Milestones started as a little dream of two innovative minds, Nathanael Memis and Mark Angelo Advincula, the company's founders. Little Milestones’ story, similar to its name, came a long way in its development, the success that the company is about to become results from small, yet consistent, efforts by its founders. We didn’t expect such small imaginative ideas to bloom into something that became a big part of our lives. Little Milestones’ value is not just about the company’s growth, its real value comes from the adventures we had, the tiny steps we thought we couldn’t take, the sleepless nights, and the leap of faith we perpetrated.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Follow Us</Typography>
            <a
              href="https://www.youtube.com/channel/UCbMSS96sbRWQ7creof2YoZA/featured"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/_littlemilestones" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
            <a href="https://facebook.com/Little-Milestones-101734189247533" target="blank">
              <FacebookIcon className="FBSvgIcon" />
            </a>
            <a href="https://twitter.com/TheLMStore" target="blank">
              <TwitterIcon className="SvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

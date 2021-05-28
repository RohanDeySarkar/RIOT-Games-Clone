import React from 'react';
import './Navbar.css';

import LanguageIcon from '@material-ui/icons/Language';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
import CallMadeSharpIcon from '@material-ui/icons/CallMadeSharp';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbarLeft" onClick={() => window.open("https://playvalorant.com/en-gb/", '_blank')}>
                <img 
                    src="https://www.riotgames.com/darkroom/800/662c6e258b3f5287e70b7548f152b03a:f873f124ebda69d2a1157d062985fcb9/riot-logotype-white-rgb.png"
                    alt=""
                    className="icon"
                />
                <img 
                    src="https://cdn-images-1.medium.com/max/1200/1*IOMogY9xupXEg_ndWOb_4A.png"
                    alt=""
                    className="iconFist"
                />
                <div style={{marginLeft: "10px", borderLeft: "1px solid #757575", height: "25px"}} ></div>
                <img 
                    src="https://www.elosoar.com/images/vl-full-logo.png"
                    alt=""
                />
            </div>
           
            <div className="navbarMiddle">
                <div className="navbarOptions" onClick={() => window.open("https://playvalorant.com/en-us/maps/", '_blank')}>
                    <h2>game info</h2>
                    <ArrowDropDownRoundedIcon />
                </div>
                <div className="navbarOptions" onClick={() => window.open("https://playvalorant.com/en-us/media/", '_blank')}> 
                    <h2>media</h2>
                </div>
                <div className="navbarOptions" onClick={() => window.open("https://playvalorant.com/en-us/news/", '_blank')}>
                    <h2>news</h2>
                </div>
                <div className="navbarOptions" onClick={() => window.open("https://playvalorant.com/en-us/leaderboards/", '_blank')}>
                    <h2>leaderboards</h2>
                </div>
                <div className="navbarOptions" onClick={() => window.open("https://playvalorant.com/en-us/specs/", '_blank')}>
                    <h2>support</h2>
                    <ArrowDropDownRoundedIcon />
                </div>
                <div className="navbarOptions" onClick={() => window.open("https://playvalorant.com/en-gb/", '_blank')}>
                    <h2>our socials</h2>
                    <ArrowDropDownRoundedIcon />
                </div>
                <div className="navbarOptions" onClick={() => window.open("https://valorantesports.com/schedule", '_blank')}>
                    <h2>esports</h2>
                    <CallMadeSharpIcon />
                </div>
            </div>

            <div className="navbarRight">
                <LanguageIcon 
                    onClick={() => window.open("https://playvalorant.com/en-us/?utm_source=riotbar&utm_medium=card4%2Bplayvalorant.com&utm_campaign=val&utm_content=val_jett01", '_blank')} 
                />
                <a
                    onClick={() => window.open("https://playvalorant.com/en-us/?utm_source=riotbar&utm_medium=card4%2Bplayvalorant.com&utm_campaign=val&utm_content=val_jett01", '_blank')}
                >
                    PLAY NOW
                </a>
            </div>
        </div>
    )
}

export default Navbar

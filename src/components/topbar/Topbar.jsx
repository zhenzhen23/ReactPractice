import React from 'react';
import "./topbar.css";
import {NotificationsNone, GTranslate, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div  className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">lamaadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>

                    <div className="topbarIconContainer">
                        <GTranslate/>
                    </div>

                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://weijiezheng.com/image/weijie.png" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

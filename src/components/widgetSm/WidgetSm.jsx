import "./widgetSm.css"
import {Visibility} from '@material-ui/icons';

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://weijiezheng.com/image/weijie.png" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <div className="widgetSmUserName">Weijie Zheng</div>
                        <div className="widgetSmUserTitle">Software Engineer</div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://weijiezheng.com/image/weijie.png" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <div className="widgetSmUserName">Weijie Zheng</div>
                        <div className="widgetSmUserTitle">Software Engineer</div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://weijiezheng.com/image/weijie.png" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <div className="widgetSmUserName">Weijie Zheng</div>
                        <div className="widgetSmUserTitle">Software Engineer</div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://weijiezheng.com/image/weijie.png" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <div className="widgetSmUserName">Weijie Zheng</div>
                        <div className="widgetSmUserTitle">Software Engineer</div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/> 
                        Display
                    </button>
                </li>

                <li className="widgetSmListItem">
                    <img src="https://weijiezheng.com/image/weijie.png" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <div className="widgetSmUserName">Weijie Zheng</div>
                        <div className="widgetSmUserTitle">Software Engineer</div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Display
                    </button>
                </li>
            </ul>
        </div>
    );
}

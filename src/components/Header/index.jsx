import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import AppsSharpIcon from "@mui/icons-material/AppsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import "./style.css";
const Header = () => {
   return (
      <div className="header-container">
         <div className="header-left">
            <MenuSharpIcon onClick={() => setExpand(!expand)} />
            <img
               className="header-logo"
               src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
               alt=""
            />
         </div>
         <div className="header-input">
            <input type="text" placeholder="Search" />
            <SearchSharpIcon className="header-input-btn" />
         </div>
         <div className="header-icons">
            <VideoCallSharpIcon className="header-icon" />
            <AppsSharpIcon className="header-icon" />
            <NotificationsSharpIcon className="header-icon" />
            <AccountCircleSharpIcon className="header-icon" />
         </div>
      </div>
   );
};

export default Header;

import "./style.css";
import SideBarRow from "../SideBarRow";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import WhatshotSharpIcon from "@mui/icons-material/WhatshotSharp";
import SubscriptionsSharpIcon from "@mui/icons-material/SubscriptionsSharp";
import ScheduleSharpIcon from "@mui/icons-material/ScheduleSharp";
import VideoLibrarySharpIcon from "@mui/icons-material/VideoLibrarySharp";
import RestoreSharpIcon from "@mui/icons-material/RestoreSharp";
import ThumbUpAltSharpIcon from "@mui/icons-material/ThumbUpAltSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
const Sidebar = () => {
   return (
      <div className="sidebar-container">
         <SideBarRow Icon={<HomeSharpIcon />} title="Home" />
         <SideBarRow Icon={<WhatshotSharpIcon />} title="Trending" />
         <SideBarRow Icon={<SubscriptionsSharpIcon />} title="Subscription" />
         <hr />
         <SideBarRow Icon={<VideoLibrarySharpIcon />} title="Library" />
         <SideBarRow Icon={<ScheduleSharpIcon />} title="Watch Later" />
         <SideBarRow Icon={<RestoreSharpIcon />} title="History" />
         <SideBarRow Icon={<ThumbUpAltSharpIcon />} title="Liked Videos" />
         <SideBarRow Icon={<KeyboardArrowDownSharpIcon />} title="Show More" />
         <hr />
      </div>
   );
};

export default Sidebar;

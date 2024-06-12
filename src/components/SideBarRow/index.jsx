import "./style.css";
const SideBarRow = ({ Icon, title }) => {
   return (
      <div className="sidebarrow-container">
         {/* <Icon className="sidebarrow-icon" /> */}
         <div className="sidebarrow-icon">{Icon}</div>
         <h3 className="sidebarrow-title">{title}</h3>
      </div>
   );
};

export default SideBarRow;

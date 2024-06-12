import "./App.css";
import Header from "./components/Header";
import Videos from "./components/RecomendedVideo";
import Sidebar from "./components/Sidebar";

function App() {
   return (
      <>
         <div className="app">
            {/* header */}
            <Header />
            <div className="app-page">
               {/* sidebar */}
               <Sidebar />
               <Videos />
               {/* body */}
            </div>
         </div>
      </>
   );
}

export default App;

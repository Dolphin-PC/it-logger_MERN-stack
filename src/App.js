import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import SearchBar from "./components/layout/SearchBar";

import { useEffect } from "react";
import Logs from "./components/logs/Logs";

const App = () => {
   useEffect(() => {
      M.AutoInit();
   }, []);

   return (
      <div className="App">
         <SearchBar />
         <Logs />
      </div>
   );
};

export default App;

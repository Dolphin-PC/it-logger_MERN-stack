import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLog } from "../../actions/logActions";
import PropTypes from "prop-types";

const SearchBar = ({ searchLog }) => {
   const text = useRef("");

   const handleSearchBar = (e) => {
      searchLog(text.current.value);
   };
   return (
      <nav style={{ marginBottome: 30 }} className="blue">
         <div className="nav-wrapper">
            <form>
               <div className="input-field">
                  <input
                     id="search"
                     type="search"
                     ref={text}
                     onChange={handleSearchBar}
                  />
                  <label className="label-icon">
                     <i className="material-icons">search</i>
                  </label>
                  <i className="material-icons">close</i>
               </div>
            </form>
         </div>
      </nav>
   );
};

SearchBar.propTypes = {
   searchLog: PropTypes.func.isRequired,
};

export default connect(null, { searchLog })(SearchBar);

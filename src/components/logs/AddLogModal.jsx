import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";

const AddLogModal = ({ techs: { techs }, addLog }) => {
   const [message, setMessage] = useState("");
   const [attention, setAttention] = useState(false);
   const [tech, setTech] = useState("");

   const onSubmit = () => {
      if (message === "" || tech === "") {
         M.toast({ html: "please enter a message & tech" });
      } else {
         const newLog = {
            message,
            attention,
            tech,
            date: new Date(),
         };

         addLog(newLog);
         M.toast({ html: `Added log by ${tech}` });
         // Clear
         setMessage("");
         setAttention(false);
         setTech("");
      }
   };

   return (
      <div id="add-log-modal" className="modal" style={ModalStyle}>
         <div className="modal-content">
            <h4>Add - System Log</h4>
            <div className="row">
               <div className="input-field">
                  <input
                     type="text"
                     name="message"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  />
                  <label htmlFor="message" className="active">
                     Log Message
                  </label>
               </div>
            </div>

            <div className="row">
               <div className="input-field">
                  <select
                     name="tech"
                     value={tech}
                     className="browser-default"
                     onChange={(e) => setTech(e.target.value)}
                  >
                     <option value="" disabled>
                        Select Technician
                     </option>
                     {techs !== null &&
                        techs.map((tech) => {
                           return (
                              <option
                                 value={`${tech.firstName} ${tech.lastName}`}
                                 key={tech.id}
                              >
                                 {tech.firstName} {tech.lastName}
                              </option>
                           );
                        })}
                  </select>
               </div>
            </div>

            <div className="row">
               <div className="input-field">
                  <p>
                     <label>
                        <input
                           type="checkbox"
                           className="filled-in"
                           checked={attention}
                           value={attention}
                           onChange={(e) => setAttention(!attention)}
                        />
                        <span>Needs Attention</span>
                     </label>
                  </p>
               </div>
            </div>
         </div>

         <div className="modal-footer">
            <a
               href="#!"
               onClick={onSubmit}
               className="modal-close waves-effect waves-light btn blue"
            >
               Enter
            </a>
         </div>
      </div>
   );
};

const ModalStyle = {
   width: "75%",
   height: "75%",
};

AddLogModal.propTypes = {
   addLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
   techs: state.tech,
});

export default connect(mapStateToProps, { addLog })(AddLogModal);

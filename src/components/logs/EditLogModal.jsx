import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../actions/logActions";

const EditLogModal = ({ current, updateLog }) => {
   const [message, setMessage] = useState("");
   const [attention, setAttention] = useState(false);
   const [tech, setTech] = useState("");

   useEffect(() => {
      if (current) {
         setMessage(current.message);
         setAttention(current.attention);
         setTech(current.tech);
      }
   }, [current]);

   const onSubmit = () => {
      if (message === "" || tech === "") {
         M.toast({ html: "please enter a message & tech" });
      } else {
         const upLog = {
            id: current.id,
            message,
            attention,
            tech,
            date: new Date(),
         };

         updateLog(upLog);
         M.toast({ html: "Updated Log" });
         //   Clear
         setMessage("");
         setAttention(false);
         setTech("");
      }
   };

   return (
      <div id="edit-log-modal" className="modal" style={ModalStyle}>
         <div className="modal-content">
            <h4>Edit - System Log</h4>
            <div className="row">
               <div className="input-field">
                  <input
                     type="text"
                     name="message"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  />
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
                     <option value="John Doe">John Doe</option>
                     <option value="Sam Smith">Sam Smith</option>
                     <option value="Sara Wilson">Sara Wilson</option>
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

EditLogModal.propTypes = {
   current: PropTypes.object.isRequired,
   updateLog: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
   current: state.log.current,
});

export default connect(mapStateToProps, { updateLog })(EditLogModal);

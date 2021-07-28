import React from "react";

const ScheduleModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <span style={{cursor:'pointer'}} className="modal-close" onClick={handleClose}>
          close
        </span>
      </div>
    </div>
  );
};

export default ScheduleModal;

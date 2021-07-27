import React from "react";

const ScheduleModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <a style={{cursor:'pointer'}} className="modal-close" onClick={handleClose}>
          close
        </a>
      </div>
    </div>
  );
};

export default ScheduleModal;

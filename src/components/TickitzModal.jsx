import React from "react";

const TickitzModal = ({ show, title, onClose, message, type }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true"></div>
      <div className="z-10 mx-4 w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        <div className="mb-4">{message}</div>

        <div className="flex justify-end">
          <button
            onClick={onClose}
            className={
              type == "validation"
                ? "rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-950"
                : "rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-950"
            }
          >
            Close
          </button>
        </div>
      </div>
    </div>

    // <div className="modal">
    //   <div className="modal-content">
    //     <span className="close" onClick={onClose}>
    //       &times;
    //     </span>
    //     <h2>Submission Successful!</h2>
    //     <p>{message}</p>
    //     <button onClick={onClose}>Close</button>
    //   </div>
    //   {/* Add basic styling in CSS for these classes */}
    // </div>
  );
};

export default TickitzModal;

import React, { useState, useEffect } from "react";

import modalStar from "../assets/images/modalStar.png";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, onClose, formData, clearFormFields }) => {
  const { name } = formData;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    }
  }, [isOpen, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isVisible ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-[#282828]  transition-opacity flex flex-col items-center
           justify-center gap-4"
          aria-hidden="true"
        >
          <h6 className="text-gray-600 font-bold text-3xl">
            Reseña de peliculas
          </h6>
          <p className="text-white text-4xl font-bold text-center">
            ¡Muchas gracias {name}!
          </p>
          <img src={modalStar} alt="estrella-modal" />
          <p className="text-white text-2xl font-bold text-center">
            Tu reseña sobre la pelicula "Jhon Wick 4" ha sido enviada.
          </p>
          <div className="">

          {/* back <- btn */}
              <button
                onClick={() => {
                  clearFormFields();
                  handleClose();
                }}
                className="text-white bg-[#554F95] px-10 py-4 font-bold uppercase rounded"
              >
                Volver
              </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

import React from "react";
import { MdCheckCircle } from "react-icons/md";

const Payment = ({ value }) => {
  if (!value) {
    return (
      <>
        <span className="text-xl text-white">Procesando</span>
        <div className="lds-facebook">
          <div className="bg-white"></div>
          <div className="bg-white"></div>
          <div className="bg-white"></div>
        </div>
      </>
    );
  }
  else {
    return(
        <div className="max-w-[150px]">
            <MdCheckCircle className="text-green-400 max-w-[150px]" size={150} />
        </div>
    )
  }
};

export default Payment;

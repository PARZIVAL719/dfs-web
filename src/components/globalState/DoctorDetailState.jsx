import React, { createContext, useState } from "react";

const doctorContext = createContext(null);

function DoctorDetailState({ children }) {
  const [note, setNote] = useState([]);
  const [guarantee, setGuarantee] = useState([]);

  return (
    <doctorContext.Provider value={{ note, setNote, guarantee, setGuarantee }}>
      {children}
    </doctorContext.Provider>
  );
}
export { doctorContext };
export default DoctorDetailState;

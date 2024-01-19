import React, { useContext, useEffect } from "react";
import { doctorAllDetailsContext } from "./Doctor_Display_Detail";

function Doctor_Address() {
  const { address, setAddress } = useContext(doctorAllDetailsContext);

  const handleChange = (e, field) => {
    setAddress({ ...address,[field]: e.target.value });
  };
  
  useEffect(() => {
    // console.log(address);
  });

  return (
    <div>
      <header className="card-header navbar bg-secondary py-2">
        <div className="text-light">Adress</div>
      </header>
      <div className="card-body">
        <div className="row ">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="" className="col-form-label">
              Address No. / Address
            </label>
          </div>
          <div className="col-sm-6 ">
            <input
              type="text"
              name="Address_Code"
              id=""
              className="form-control"
              value={address.ADDRESS_NUMBER || ""}
              onChange={(e) => handleChange(e,"ADDRESS_NUMBER")}
            />
          </div>
        </div>
        <div className="row mt-2  ">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="" className="col-form-label">
              Sub District / District
            </label>
          </div>
          <div className="col-sm-6 ">
            <input
              type="text"
              name="Address_Sub"
              id=""
              className="form-control"
              value={address.DISTRICT || ""}
              onChange={(e) => handleChange(e,"DISTRICT")}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="" className="col-form-label">
              Province
            </label>
          </div>
          <div className="col-sm-6 ">
            <input
              type="text"
              name="Address_Province"
              id=""
              className="form-control"
              value={address.PROVINCE || ""}
              onChange={(e) => handleChange(e,"PROVINCE")}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-3 text-sm-end">
            <label htmlFor="" className="col-form-label">
              Postal Code
            </label>
          </div>
          <div className="col-sm-3 ">
            <input
              type="text"
              name="Address_Postal_Code"
              id=""
              className="form-control"
              value={address.POSTAL_CODE || ""}
              onChange={(e) => handleChange(e,"POSTAL_CODE")}
            />
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-sm-3  text-sm-end">
            <label htmlFor="" className="col-form-label">
              Email
            </label>
          </div>
          <div className="col-sm-6 ">
            <input
              type="text"
              name="Address_Email"
              id=""
              className="form-control"
              value={address.EMAIL || ""}
              onChange={(e) => handleChange(e, "EMAIL")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctor_Address;

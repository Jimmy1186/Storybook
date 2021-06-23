import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Date = () => {
  const [startDate, setStartDate] = useState(null);
  return (
   <>
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
   <p>更多模組連結 : https://reactdatepicker.com/#example-custom-day</p>
   </>
  );
};

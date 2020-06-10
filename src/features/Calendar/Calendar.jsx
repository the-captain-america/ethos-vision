import React, { useState, useEffect } from "react";
import { DateContainer } from "./styledComponents";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const Calendar = () => {
  const [state, setState] = useState("");

  useEffect(() => {
    setState(new Date());
  }, []);
  const handleChange = date => {
    setState(state => ({ ...state, startDate: date }));
  };

  return (
    <DateContainer>
      <DatePicker selected={state.startDate} onChange={handleChange} />;
    </DateContainer>
  );
};

export default Calendar;

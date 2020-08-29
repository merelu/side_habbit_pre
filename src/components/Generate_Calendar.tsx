import React, { useState } from "react";
import { Paper } from "@material-ui/core";
import { useStaticState, Calendar } from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

function Generate_Calendar() {
  const [value, handleDateChange] = useState<MaterialUiPickersDate>(new Date());
  ////////////////////////////////////test//////////////////////////////////////////////
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  ////////////////////////////////////test////////////////////////////////////////////
  const { pickerProps, wrapperProps } = useStaticState({
    value,
    onChange: handleDateChange,
  });

  return (
    <>
      <div>
        <Paper style={{ overflow: "hidden" }}>
          <Calendar {...pickerProps} />
        </Paper>
      </div>
      <div>
        {setFixedId(
          value?.getFullYear()!,
          value?.getMonth()!,
          value?.getDate()!
        )}
        {user.username}
      </div>
    </>
  );
}

const setFixNum = (num: number): string => {
  let fixNum: string = "";
  if (num < 10) {
    fixNum = "0" + num.toString();
  } else {
    fixNum = num.toString();
  }
  return fixNum;
};

const setFixedId = (year: number, month: number, day: number): string => {
  return year.toString().substring(2, 4) + setFixNum(month) + setFixNum(day);
};

export default Generate_Calendar;

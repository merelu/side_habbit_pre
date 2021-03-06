import React, { useState } from "react";
import { RootState } from "../../store/reducers";
import { useSelector } from "react-redux";
import { Divider } from "@material-ui/core";
import HabitList from "./HabitList";
import { habitBodyStyle } from "../../styles";
import HabitDetail from "./HabitDetail";
import Header from "./Header";

//alert override snackbar로 사용하기위해 옵션 줌

function HabitBody() {
  const classes = habitBodyStyle();
  const { habits, selectedIndex } = useSelector(
    (state: RootState) => state.habitsReducer
  );
  const [detailed, setDetailed] = useState(false);
  const [push, setPush] = useState(true);
  const handleDetailed = (value: boolean) => {
    setDetailed(value);
  };

  const handlePush = (value: boolean) => {
    setPush(value);
  };
  return (
    <React.Fragment>
      <Header />
      <div className={classes.appBarSpacer} />
      <main className={classes.root}>
        {push && (
          <div
            className={`${classes.flex} ${
              detailed ? classes.disable : classes.active
            }`}
            onAnimationEnd={() => {
              if (detailed) {
                handlePush(false);
              }
            }}
          />
        )}
        <HabitList
          habits={habits}
          selectedIndex={selectedIndex}
          handleDetailed={handleDetailed}
          handlePush={handlePush}
        />
        {!detailed && (
          <div
            className={`${classes.flex} ${
              detailed ? classes.disable : classes.active
            }`}
          />
        )}
        {detailed ? (
          <React.Fragment>
            <Divider orientation="vertical" flexItem />
            <HabitDetail
              handleDetailed={handleDetailed}
              handlePush={handlePush}
            />
          </React.Fragment>
        ) : (
          <React.Fragment />
        )}
      </main>
    </React.Fragment>
  );
}

export default HabitBody;

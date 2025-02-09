import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import classes from "./latest-events.module.css";
import EventCard from "./event-card";

const LatestEventsShow = () => {
  return (
    <div className={classes["latest-show"]}>
      <div className={`${classes["latest-show-container"]} container`}>
        <div className={classes["heading-wrapper"]}>
          <div className={classes["content-wrapper"]}>
            <h2 className={classes["content-heading"]}>Latest Event & Show</h2>
            <div className={classes["divider"]}></div>
            <p className={classes["content-desc"]}>
              ************************************
            </p>
          </div>

          <div className={classes["button-wrapper"]}>
            <button>
              <GoArrowLeft />
            </button>
            <button>
              <GoArrowRight />
            </button>
          </div>
        </div>

        <div className={classes["event-wrapper"]}>
          <EventCard
            date="8 Sep 2020"
            comments={125}
            title="BMA Events"
            desc="*********************************************************"
          />
          <EventCard
            date="8 Sep 2020"
            comments={125}
            title="CESR seminar for SAS grade doctors"
            desc="*********************************************************."
          />
        </div>

        <div className={classes["dots-wrapper"]}>
          <div className={classes["dot"]}></div>
          <div className={`${classes["dot"]} ${classes["dot-active"]}`}></div>
          <div className={classes["dot"]}></div>
          <div className={classes["dot"]}></div>
          <div className={classes["dot"]}></div>
        </div>
      </div>
    </div>
  );
};

export default LatestEventsShow;

import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import classes from "./work-history.module.css";
import WorkHistoryCard from "./work-history-card";

import work1 from "../../assets/images/work-1.png";
import work2 from "../../assets/images/work-2.png";
import work3 from "../../assets/images/work-3.png";

const WorkHistory = () => {
  return (
    <div className={`${classes["work-history"]} container`}>
      <div className={classes["work-his-heading-wrapper"]}>
        <h1 className={classes["history-heading"]}>My Working History</h1>
        <div className={classes["divider"]}></div>
        <p className={classes["history-desc"]}>
          Clinic to provide patients with personalized nutritional counseling 
          and treatment plans to help them manage disease, recover, or adjust their eating habits.
        </p>
      </div>

      <div className={classes["work-history-card-wrapper"]}>
        <WorkHistoryCard
          isCurrent={true}
          img={work1}
          time="CURRENTLY WORKING"
          title="New York Nutrition Group"
          desc="****************"
        />
        <WorkHistoryCard
          img={work2}
          time="Jan,2019 to March,2021"
          title="Singapore General Hospital"
          desc="***************"
        />
        <WorkHistoryCard
          img={work3}
          time="Mar,2017 to Dec,2018"
          title="**************"
          desc="***************"
        />
      </div>

      <div className={classes["work-history-arrow-wrapper"]}>
        <button>
          <GoArrowLeft />
        </button>
        <button>
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WorkHistory;

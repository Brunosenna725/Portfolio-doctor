import React from "react";
import { GoArrowRight } from "react-icons/go";

import classes from "./call-to-action.module.css";
import Button from "../button";

const CallToAction = () => {
  return (
    <div className={classes["call-to-action"]}>
      <div className={`${classes["call-to-action-container"]} container`}>
        <h1 className={classes["title"]}>
          Looking for a Neurologists Doctor? Get in touch and let's chat!
        </h1>

        <div className={classes["content"]}>
          <p className={classes["content-desc"]}>
          Clinic to provide patients with personalized nutritional counseling and treatment plans to help them manage disease, recover, or adjust their eating habits.
          </p>
          <Button>
            Get in touch <GoArrowRight size={"2.4rem"} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;

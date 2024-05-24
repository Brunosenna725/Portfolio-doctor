import React from "react";
import classes from "./qualification-awards.module.css";
import ExperienceCard from "./experience-card";
import AwardCard from "./award-card";

import award1 from "../../assets/images/award-1.svg";
import award2 from "../../assets/images/award-2.svg";
import award3 from "../../assets/images/award-3.svg";

const QualificationAwards = () => {
  return (
    <div
      className={`${classes["qualification-awards"]} container`}
      id="education"
    >
      <div className={classes["qualification-heading-wrapper"]}>
        <h1 className={classes["qualification-heading"]}>
          My Qualification & Awards
        </h1>
        <div className={classes["divider-heading"]}></div>
        <p className={classes["qualification-desc"]}>
          ******************************************************
        </p>
      </div>

      <div className={classes["qualification-content"]}>
        <div className={classes["education-wrapper"]}>
          <ExperienceCard
            universityName="University of Hong Kong"
            duration="2003 to 2008"
            degree="Bachelor of Medicine degree"
            desc="******************************************************************"
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="University of Hong Kong"
            duration="2003 to 2008"
            degree="Bachelor of Medicine degree"
            desc="*******************************************************************"
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="University of Hong Kong"
            duration="2003 to 2008"
            degree="Bachelor of Medicine degree"
            desc="*******************************************************************"
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="University of Hong Kong"
            duration="2003 to 2008"
            degree="Bachelor of Medicine degree"
            desc="*******************************************************************"
          />
        </div>

        <div className={classes["award-card-wrapper"]}>
          <div className={classes["award-card-column"]}>
            <AwardCard
              img={award1}
              count="01"
              title="Lasker Award"
              desc="************************************************"
            />
            <AwardCard
              img={award3}
              count="03"
              title="Maxwell Finland Award"
              desc="************************************************"
            />
          </div>
          <AwardCard
            img={award2}
            count="02"
            title="John Howland Award"
            desc="*****************************************************"
          />
        </div>
      </div>
    </div>
  );
};

export default QualificationAwards;

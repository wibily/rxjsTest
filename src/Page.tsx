import React from "react";
import ComponentA from "./ComponentA";
import { excpetionServiceFeatureFlag } from "./App";
import { exceptions } from "./ExceptionService";

const computeOverlapExceptions = (jobs: object[]) => {
  //FE logic to compute certain exceptions goes here
  return {
    a: "FE overlap exception"
  };
};

const computeXConstraintViolations = (jobs: object[]) => {
  //FE Logic to compute constraint violations
  return [];
};

// push the current FE logic up to the 'page' level?
const Page = (props: { allTheJobs: [] }) => {
  React.useEffect(() => {
    if (!excpetionServiceFeatureFlag) {
      const frontendExceptions = {
        ...computeOverlapExceptions(props.allTheJobs),
        ...computeXConstraintViolations(props.allTheJobs)
      };
      exceptions.next(frontendExceptions);
    }
  }, [props.allTheJobs]);

  return (
    <div className="App">
      <h1>Page</h1>
      <ComponentA />
    </div>
  );
};

export default Page;

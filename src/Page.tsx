import React from "react";
import ComponentA from "./ComponentA";
import {
  exceptions,
  excpetionServiceFeatureFlag,
  registerUuid,
  removeUuid,
} from "./ExceptionService";

const computeOverlapExceptions = (jobs: any[]) => {
  //FE logic to compute certain exceptions goes here
  return {
    a: "FE overlap exception",
  };
};

const computeXConstraintViolations = (jobs: any[]) => {
  //FE Logic to compute constraint violations
  return [];
};

// push the current FE logic up to the 'page' level?
const Page = (props: { allTheJobs: ["a"] }) => {

  //register/derigster uuids
  React.useEffect(() => {
    if (excpetionServiceFeatureFlag) {
      props.allTheJobs.forEach((uuid) => registerUuid(uuid));
      //logic to removeUUids as props change goes here
      return () => {
        props.allTheJobs.forEach((uuid) => removeUuid(uuid));
      };
    }
  }, [props.allTheJobs]);

  //calculate FE exceptions 
  React.useEffect(() => {
    if (!excpetionServiceFeatureFlag) {
      const frontendExceptions = {
        ...computeOverlapExceptions(props.allTheJobs),
        ...computeXConstraintViolations(props.allTheJobs),
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

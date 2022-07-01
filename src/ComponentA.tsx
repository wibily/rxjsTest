import { useState, useEffect } from "react";
import { exceptions } from "./ExceptionService";

const ComponentA = () => {
  const [exception, setException] = useState<string | undefined>(undefined);

  useEffect(() => {
    const sub = exceptions.subscribe((exceptionObj) => {
      setException(exceptionObj["a"])
    }
    );
    return () => sub.unsubscribe();
  }, []);

  return (
    <div>
      <h2>Component</h2>
      <div>Exception: {exception}</div>
    </div>
  );
};

export default ComponentA;

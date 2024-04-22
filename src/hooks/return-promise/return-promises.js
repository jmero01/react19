import { HooksReturnPromise } from "./before";
import { ReturnPromiseWithUse } from "./new";
import "./return-promises.css";

export const ReturnPromise = () => {
  return (
    <>
      <div className="return-promise">
        <HooksReturnPromise />
        <ReturnPromiseWithUse />
      </div>
    </>
  );
};

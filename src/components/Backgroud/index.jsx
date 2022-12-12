import { useContext } from "react";
import { userContexts } from "../../contexts/userContext";
import { Backgroud } from "./style";

export const BackgroudAnimate = () => {
  const { background } = useContext(userContexts);
  return (
    <>
      {background ? (
        <Backgroud>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </Backgroud>
      ) : (
        <></>
      )}
    </>
  );
};

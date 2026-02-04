import { useState } from "react";
import { Counter } from "./Counter";

export const Project = () => {
  const [visible, setVisible] = useState({
    rows: true,
    colons: true,
  });
  // hide the counter with indicated name
  function hideBtn(name) {
    setVisible((prev) => {
      return { ...prev, [name]: false };
    });
  }

  //RETURN
  return (
    <>
      <h1>My Project</h1>
      {visible.rows && <Counter name={"rows"} onClick={hideBtn} />}
      {visible.colons && <Counter name={"colons"} onClick={hideBtn} />}
    </>
  );
};

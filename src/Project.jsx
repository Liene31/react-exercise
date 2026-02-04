import { Counter } from "./Counter";

export const Project = () => {
  function hideBtn() {
    console.log("hide element");
  }
  return (
    <>
      <h1>My Project</h1>
      <Counter name={"rows"} onClick={hideBtn} />
      <Counter name={"colons"} onClick={hideBtn} />
    </>
  );
};

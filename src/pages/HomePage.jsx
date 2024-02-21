import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <NavLink to={"/rent"}>Choose Your Car</NavLink>
    </>
  );
};

export default HomePage;

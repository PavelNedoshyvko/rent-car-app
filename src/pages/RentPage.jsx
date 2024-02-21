import { NavLink } from "react-router-dom";

const RentPage = () => {
  return (
    <>
      <h1>RentPage</h1>

      <NavLink to={"/favorite"}>To Favorite Page</NavLink>
      <NavLink to={"/"}>To Home Page</NavLink>
    </>
  );
};

export default RentPage;

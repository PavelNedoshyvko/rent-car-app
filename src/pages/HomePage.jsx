import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Link to={"/catalog"}>Choose Your Car</Link>
    </>
  );
};

export default HomePage;

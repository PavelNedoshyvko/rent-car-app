import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { allAdvertsThunk } from "../redux/advertsOperation";
import { useEffect } from "react";
import { Gallery } from "../components/Gallery/Gallery";

const RentPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allAdvertsThunk());
  }, [dispatch]);

  return (
    <>
      <h1>RentPage</h1>

      <Link to={"/favorite"}>To Favorite Page</Link>
      <Link to={"/"}>To Home Page</Link>
      <Gallery />
    </>
  );
};

export default RentPage;

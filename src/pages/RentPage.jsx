import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allAdvertsThunk } from "../redux/advertsOperation";
import { useEffect, useState } from "react";
import { Gallery } from "../components/Gallery/Gallery";
import { Filter } from "../components/Filter/Filter";
import { GalleryContainer } from "../components/UI/GalleryContainer/GalleryContainer.styled";
import { LoadMoreBtn } from "../components/UI/LoadMoreButton/LoadMoreButton.styled";
import { selectFilter } from "../redux/advertsSelectors";
// import { NewFilter } from "../components/Filter/NewFilter";

const RentPage = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const filter = useSelector(selectFilter);

  const renderBtnLoadMore = Math.ceil(25 / 12) !== page;

  const shouldLoadNextPage = Object.values(filter).some(
    (value) => value !== ""
  );

  useEffect(() => {
    if (shouldLoadNextPage) {
      for (let index = 1; index < 4; index++) {
        dispatch(allAdvertsThunk(index));
      }
    } else {
      dispatch(allAdvertsThunk(page));
    }
  }, [dispatch, page, shouldLoadNextPage]);

  const loadMore = () => {
    setPage((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>RentPage</h1>

      <Link to={"/favorite"}>To Favorite Page</Link>
      <Link to={"/"}>To Home Page</Link>
      <GalleryContainer>
        <Filter />
        <Gallery />
        {renderBtnLoadMore && (
          <LoadMoreBtn type="button" onClick={loadMore}>
            Load more
          </LoadMoreBtn>
        )}
      </GalleryContainer>
    </>
  );
};

export default RentPage;

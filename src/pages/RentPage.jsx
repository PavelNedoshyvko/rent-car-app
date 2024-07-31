import { useDispatch, useSelector } from "react-redux";
import { allAdvertsThunk } from "../redux/advertsOperation";
import { useEffect, useState } from "react";
import { Gallery } from "../components/Gallery/Gallery";
import { Filter } from "../components/Filter/Filter";
import { GalleryContainer } from "../components/UI/GalleryContainer/GalleryContainer.styled";
import { LoadMoreBtn } from "../components/UI/LoadMoreButton/LoadMoreButton.styled";
import {
  selectFilter,
  selectIsLoading,
  selectVisibleAdverts,
} from "../redux/advertsSelectors";
import { HeaderWrap } from "../components/Header/Header.styled";
import { PageLink, RentPageWrap } from "./RentPage.styled";
import { Loader } from "../components/UI/Loader/Loader";
import { Logo } from "../components/UI/Logo/Logo";
import { Link } from "react-router-dom";
// import { NewFilter } from "../components/Filter/NewFilter";

const RentPage = () => {
  const dispatch = useDispatch();

  const visibleAdverts = useSelector(selectVisibleAdverts);

  const loading = useSelector(selectIsLoading);

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
    <RentPageWrap>
      {loading && <Loader />}
      <HeaderWrap>
        <Link to={"/"}>
          <Logo />
        </Link>

        <PageLink to={"/"}>Home Page</PageLink>
        <PageLink to={"/favorite"}>Favorite Page</PageLink>
      </HeaderWrap>

      <GalleryContainer>
        <Filter />
        <Gallery visibleadverts={visibleAdverts} />
        {visibleAdverts.length > 0 && renderBtnLoadMore && (
          <LoadMoreBtn type="button" onClick={loadMore}>
            Load more
          </LoadMoreBtn>
        )}
      </GalleryContainer>
    </RentPageWrap>
  );
};

export default RentPage;

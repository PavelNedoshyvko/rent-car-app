import styled from "styled-components";

export const GalleryList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
`;

export const GalleryItem = styled.li`
  width: calc((100% - 29px * 3) / 4);
`;

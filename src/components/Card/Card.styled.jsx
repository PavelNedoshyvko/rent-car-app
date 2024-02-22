import styled from "styled-components";

export const ImageWrap = styled.div`
  position: relative;
  height: 268px;
  margin-bottom: 14px;
  border-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TitleWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const TitleAccent = styled.span`
  color: #3470ff;
`;

export const Price = styled.span`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: #121417;
`;

export const ParamsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 40px;
  overflow: hidden;
  margin-bottom: 28px;
  gap: 6px;

  span {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);

    &:not(:last-child) {
      border-right: 1px solid rgba(18, 20, 23, 0.1);
      padding-right: 6px;
    }
  }
`;

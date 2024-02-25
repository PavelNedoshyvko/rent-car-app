import styled from "styled-components";

export const ImageWrap = styled.div`
  position: relative;
  height: 248px;
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

export const ParamsWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-height: 40px;
  width: 300px;
  overflow: hidden;
  margin-bottom: 14px;
  gap: 6px;

  li {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);

    &:not(:last-child) {
      border-right: 1px solid rgba(18, 20, 23, 0.1);
      padding-right: 6px;
    }
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`;

export const AccessoriesTitle = styled.h4`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`;

export const AccessoriesWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-height: 40px;
  width: 400px;
  margin-bottom: 24px;
  overflow: hidden;
  gap: 6px;

  li {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);

    &:not(:last-child) {
      border-right: 1px solid rgba(18, 20, 23, 0.1);
      padding-right: 6px;
    }
  }
`;

export const ConditionsTitle = styled.h4`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.42857;
  color: #121417;
`;

export const RentalLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 168px;
  height: 44px;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.42857;
  color: #fff;
  background-color: #3470ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const CloseModalBtn = styled.button`
  background-color: transparent;
  color: #121417;
  border: none;
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  padding: 0;
  cursor: pointer;
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.3;
  }
`;

export const ConditionsWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* width: 400px; */
  margin-bottom: 24px;
  gap: 8px;

  li {
    font-size: 12px;
    line-height: 1.5;
    color: #363535;

    border-radius: 35px;
    padding: 7px 14px;
    background: #f9f9f9;
  }

  span {
    font-weight: 600;
    color: #3470ff;
  }
`;

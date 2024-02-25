import { Field } from "formik";
import styled from "styled-components";

export const FilterWrap = styled.div`
  display: flex;
  gap: 18px;
  align-items: flex-end;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;

  label {
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    color: #8a8a89;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FromToWrap = styled.div`
  position: relative;
  display: flex;
  width: 320px;
  border-radius: 14px;
  background-color: #f7f7fb;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 160px;
    width: 2px;
    height: 48px;
    background-color: rgb(138, 138, 137, 0.2);
  }
`;

export const FromWrap = styled.span`
  position: absolute;
  top: 15px;
  left: 30px;
`;

export const ToWrap = styled.span`
  position: absolute;
  top: 15px;
  left: 190px;
`;

export const Input = styled(Field)`
  width: 224px;
  height: 48px;
  padding-left: 18px;
  padding-right: 18px;
  border: none;
  border-radius: 14px;
  background-color: #f7f7fb;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #121417;
  outline: none;
  /* appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; */
`;

export const InputFromTo = styled(Field)`
  width: 160px;
  height: 48px;
  padding-left: 80px;
  padding-right: 18px;
  border: none;
  border-radius: 14px;
  background-color: transparent;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #121417;
  outline: none;
  /* appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none; */
`;

export const OptionDefault = styled.option`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11111;
  color: #121417;
`;

export const Option = styled.option`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);

  &:hover,
  &:focus {
    color: #121417;
  }
`;

export const OptionList = styled.ul`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);

  &:hover,
  &:focus {
    color: #121417;
  }
`;

export const OptionItem = styled.li`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  color: rgba(18, 20, 23, 0.2);

  &:hover,
  &:focus {
    color: #121417;
  }
`;

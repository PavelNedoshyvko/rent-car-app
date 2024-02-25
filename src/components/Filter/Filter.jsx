import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { selectAllAdverts } from "../../redux/advertsSelectors";
import {
  FilterWrap,
  FromToWrap,
  Input,
  InputWrap,
  Option,
  OptionDefault,
} from "./Filter.styled";
import { Button } from "../UI/Button/Button";
import { changeFilter } from "../../redux/filterSlice";
import makes from "../../data/makes.json";

const FilterSchema = Yup.object().shape({
  brand: Yup.string(),
  price: Yup.string(),
  mileageFrom: Yup.string(),
  mileageTo: Yup.string(),
});

export const Filter = () => {
  const dispatch = useDispatch();

  const adverts = useSelector(selectAllAdverts);

  return (
    <Formik
      initialValues={{
        brand: "",
        price: "",
        mileageFrom: "",
        mileageTo: "",
      }}
      validationSchema={FilterSchema}
      onSubmit={(values) => {
        dispatch(changeFilter(values));
        // actions.resetForm();
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <FilterWrap>
            <InputWrap>
              <label htmlFor="brand">Car brand</label>
              <Input
                as="select"
                id="brand"
                name="brand"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setFieldValue("brand", newValue);
                }}
              >
                <OptionDefault value="Enter the text">
                  Enter the text
                </OptionDefault>

                {makes.map((make, idx) => (
                  <Option key={idx} value={make}>
                    {make}
                  </Option>
                ))}
              </Input>
            </InputWrap>

            <InputWrap>
              <label htmlFor="price">Price/ 1 hour</label>
              <Input
                as="select"
                id="price"
                name="price"
                onChange={(e) => {
                  const newValue = e.target.value;
                  setFieldValue("price", newValue);
                }}
              >
                <OptionDefault value="To $">To $</OptionDefault>
                {adverts.map(({ id, rentalPrice }) => (
                  <Option key={id} value={rentalPrice.substring(1)}>
                    {rentalPrice.substring(1)}
                  </Option>
                ))}

                {/* {adverts.map(({ id, rentalPrice }) => {
                console.log(rentalPrice.substring(1)); // Отладка: Отслеживание значений rentalPrice
                return (
                  <Option key={id} value={rentalPrice.substring(1)}>
                    {rentalPrice.substring(1)}
                  </Option>
                );
              })} */}
              </Input>
            </InputWrap>

            <InputWrap>
              <label htmlFor="carMileage">Car mileage / km </label>
              <FromToWrap>
                <div>
                  <span>From</span>
                  <Input type="text" id="mileageFrom" name="mileageFrom" />
                </div>
                <div>
                  <span>To</span>
                  <Input type="text" id="mileageTo" name="mileageTo" />
                </div>
              </FromToWrap>
            </InputWrap>

            <Button
              type={"submit"}
              title={"Search"}
              width={"136px"}
              height={"48px"}
            />
          </FilterWrap>
        </Form>
      )}
    </Formik>
  );
};

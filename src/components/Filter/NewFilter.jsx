// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import * as Yup from "yup";
// import { selectAllAdverts } from "../../redux/advertsSelectors";
// import {
//   FilterWrap,
//   FromToWrap,
//   InputWrap,
//   OptionDefault,
//   OptionList,
//   OptionItem,
// } from "./Filter.styled";
// import { Button } from "../UI/Button/Button";
// import { Field, Form, Formik } from "formik";

// const FilterSchema = Yup.object().shape({
//   brand: Yup.string(),
//   price: Yup.string(),
//   mileageFrom: Yup.string(),
//   mileageTo: Yup.string(),
// });

// export const NewFilter = () => {
//   const dispatch = useDispatch();
//   const adverts = useSelector(selectAllAdverts);
//   const [selectedBrand, setSelectedBrand] = useState("");
//   const [selectedPrice, setSelectedPrice] = useState("");

//   const handleBrandSelect = (make) => {
//     setSelectedBrand(make);
//   };

//   const handlePriceSelect = (price) => {
//     setSelectedPrice(price);
//   };

//   const handleSubmit = (values, actions) => {
//     console.log("Submitted values:", values);
//     actions.resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{
//         brand: "",
//         price: "",
//         mileageFrom: "",
//         mileageTo: "",
//       }}
//       validationSchema={FilterSchema}
//       onSubmit={handleSubmit}
//     >
//       <Form>
//         <FilterWrap>
//           <InputWrap>
//             <label htmlFor="brand">Car brand</label>
//             <OptionList>
//               <OptionItem
//                 onClick={() => handleBrandSelect("")}
//                 active={!selectedBrand}
//               >
//                 Enter the text
//               </OptionItem>
//               {adverts.map(({ id, make }) => (
//                 <OptionItem
//                   key={id}
//                   onClick={() => handleBrandSelect(make)}
//                   active={selectedBrand === make}
//                 >
//                   {make}
//                 </OptionItem>
//               ))}
//             </OptionList>
//           </InputWrap>

//           <InputWrap>
//             <label htmlFor="price">Price/ 1 hour</label>
//             <OptionList>
//               <OptionItem
//                 onClick={() => handlePriceSelect("")}
//                 active={!selectedPrice}
//               >
//                 To $
//               </OptionItem>
//               {adverts.map(({ id, rentalPrice }) => (
//                 <OptionItem
//                   key={id}
//                   onClick={() => handlePriceSelect(rentalPrice)}
//                   active={selectedPrice === rentalPrice}
//                 >
//                   {rentalPrice.substring(1)}
//                 </OptionItem>
//               ))}
//             </OptionList>
//           </InputWrap>

//           <InputWrap>
//             <label htmlFor="mileageFrom">Car mileage / km </label>
//             <FromToWrap>
//               <div>
//                 <span>From</span>
//                 <Field type="text" id="mileageFrom" name="mileageFrom" />
//               </div>
//               <div>
//                 <span>To</span>
//                 <Field type="text" id="mileageTo" name="mileageTo" />
//               </div>
//             </FromToWrap>
//           </InputWrap>

//           <Button type="submit" title="Search" width="136px" height="48px" />
//         </FilterWrap>
//       </Form>
//     </Formik>
//   );
// };

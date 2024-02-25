import{u as e,j as t,L as r}from"./index-B2pPn30y.js";const i="/rent-car-app/images/sky.jpg",n="/rent-car-app/images/road.jpg",o="/rent-car-app/images/city.png",s=e.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  background-image: url(${i});
  background-size: cover;
  overflow-x: hidden;
`,c=e.div`
  position: absolute;
  height: 200px;
  width: 500%;
  display: block;
  background-image: url(${n});
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-repeat: repeat-x;
  animation: highway 5s linear infinite;

  @keyframes highway {
    100% {
      transform: translateX(-3400px);
    }
  }
`,l=e.div`
  position: absolute;
  height: 250px;
  width: 500%;
  background-image: url(${o});
  left: 0;
  right: 0;
  bottom: 200px;
  display: block;
  z-index: 1;
  background-repeat: repeat-x;
  animation: city 20s linear infinite;

  @keyframes city {
    100% {
      transform: translateX(-1400px);
    }
  }
`,p=e.div`
  position: absolute;
  width: 400px;
  left: 50%;
  bottom: 100px;
  transform: translateX(-50%);
  z-index: 2;

  img {
    width: 100%;
    animation: car 1s linear infinite;
  }

  @keyframes car {
    100% {
      transform: translateY(-1px);
    }
    50% {
      transform: translateY(1px);
    }
    0% {
      transform: translateY(-1px);
    }
  }
`,h=e.div`
  position: absolute;
  display: flex;
  width: 310px;
  justify-content: space-between;
  left: 969px;
  bottom: 105px;
  transform: translateX(-50%);
  z-index: 2;

  img {
    width: 65px;
    height: 65px;
    animation: wheel 1s linear infinite;

    @keyframes wheel {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`,m=e.h1`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 80px;
  z-index: 2;
  white-space: nowrap;
  text-transform: uppercase;
  color: #3470ff;
`,x=e.h1`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 80px;
  z-index: 2;
  white-space: nowrap;
  text-transform: uppercase;
  color: #3470ff;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #a0bdff;
  }
`,d="/rent-car-app/images/car.png",a="/rent-car-app/images/wheel.png",f=()=>t.jsx(t.Fragment,{children:t.jsxs(s,{children:[t.jsx(m,{children:"Rent a car for any occasion"}),t.jsx(c,{}),t.jsx(l,{}),t.jsxs(r,{to:"/catalog",children:[t.jsx(x,{children:"Choose your car here"}),t.jsx(p,{children:t.jsx("img",{src:d,alt:"Car"})}),t.jsxs(h,{children:[t.jsx("img",{src:a,alt:"Wheel"}),t.jsx("img",{src:a,alt:"Wheel"})]})]})]})}),u=()=>t.jsx(t.Fragment,{children:t.jsx(f,{})});export{u as default};

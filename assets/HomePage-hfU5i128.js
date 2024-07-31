import{u as e,j as t,L as r}from"./index-BkQGk1kN.js";import{c as i,w as a}from"./wheel-De3T1mCu.js";const o="/rent-car-app/images/sky.jpg",n="/rent-car-app/images/road.jpg",s="/rent-car-app/images/city.png",c=e.div`
  position: relative;
  min-height: 100vh;
  /* width: 100vh; */
  background-image: url(${o});
  background-size: cover;
  overflow-x: hidden;
`,l=e.div`
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
  animation: highway 8000ms linear infinite;

  @keyframes highway {
    100% {
      transform: translateX(-3400px);
    }
  }
`,p=e.div`
  position: absolute;
  height: 250px;
  width: 500%;
  background-image: url(${s});
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
`,m=e.div`
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
  left: 52.3%;
  bottom: 4px;
  transform: translateX(-50%);
  z-index: 2;

  img {
    width: 65px;
    height: 65px;
    animation: wheel 1000ms linear infinite;

    @keyframes wheel {
      100% {
        transform: rotate(360deg);
      }
    }
  }
`,x=e.h1`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 80px;
  z-index: 2;
  white-space: nowrap;
  text-transform: uppercase;
  color: #3470ff;
`,d=e.h1`
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
`,f=()=>t.jsx(t.Fragment,{children:t.jsxs(c,{children:[t.jsx(x,{children:"Rent a car for any occasion"}),t.jsx(l,{}),t.jsx(p,{}),t.jsxs(r,{to:"/catalog",children:[t.jsx(d,{children:"Choose your car here"}),t.jsxs(m,{children:[t.jsx("img",{src:i,alt:"Car"}),t.jsxs(h,{children:[t.jsx("img",{src:a,alt:"Wheel"}),t.jsx("img",{src:a,alt:"Wheel"})]})]})]})]})}),b=()=>t.jsx(t.Fragment,{children:t.jsx(f,{})});export{b as default};

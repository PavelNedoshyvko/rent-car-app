import { createGlobalStyle } from "styled-components";
import "modern-normalize";
import ManropeRegularWoff from "/fonts/Manrope-Regular.woff";
import ManropeRegularWoff2 from "/fonts/Manrope-Regular.woff2";
import ManropeMediumWoff from "/fonts/Manrope-Medium.woff";
import ManropeMediumWoff2 from "/fonts/Manrope-Medium.woff2";
import ManropeSemiboldWoff from "/fonts/Manrope-Semibold.woff";
import ManropeSemiboldWoff2 from "/fonts/Manrope-Semibold.woff";

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Manrope';
    src: url(${ManropeRegularWoff2}) format('woff2'), 
         url(${ManropeRegularWoff}) format('woff');
    font-weight: 400;
		font-display: swap;
    font-style: normal;
}

@font-face {
    font-family: 'Manrope';
    src: url(${ManropeMediumWoff2}) format('woff2'), 
         url(${ManropeMediumWoff}) format('woff');
    font-weight: 500;
		font-display: swap;
    font-style: normal;
}

@font-face {
    font-family: 'Manrope';
    src: url(${ManropeSemiboldWoff2}) format('woff2'), 
         url(${ManropeSemiboldWoff}) format('woff');
    font-weight: 600;
		font-display: swap;
    font-style: normal;
}

body {
  margin: 0;
	/* padding-top: 100px; */
	/* padding-bottom: 50px; */
	/* background: rgb(24, 5, 14); */
  /* background: radial-gradient(
    circle,
    rgba(24, 5, 14, 0.8939950980392157) 0%,
    rgba(164, 157, 96, 1) 93%
  ); */
  font-family: -apple-system, BlinkMacSystemFont, 'Manrope','Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	
	/* overflow: ${(props) => (props.modalOpen ? "hidden" : "auto")}; */

	&.ReactModal__Body--open{
		overflow: hidden;
	}
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
	padding: 0;
	list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

button {
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

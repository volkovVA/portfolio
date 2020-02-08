import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import inputValue from "./scripts/inputValue";

import  parallax  from "./scripts/parallax";

import popupMenu from "./scripts/popupMenu";

import "./scripts/skills";

import "./scripts/slider";

import "./scripts/reviews";

import "./scripts/form";

import hoverScroll from "./scripts/hoverScroll";

import headerFix from "./scripts/headerFix";

import anchorScroll from "./scripts/anchorScroll";

hoverScroll();

inputValue();

parallax('.js-promo-area');

parallax('.js-leaf-area');

popupMenu();

anchorScroll();

headerFix('.js-header');

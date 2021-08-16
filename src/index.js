import { compse, pipe } from "lodash/fp";

const str = "This is a string";

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInDiv = (str) => `<div>${str}</div>`;

const result = wrapInDiv(toLowerCase(trim(str)));
console.log(result);

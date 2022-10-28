import { renderToStaticMarkup } from "react-dom/server";
import { load } from "cheerio";

export const render = (component) => load(renderToStaticMarkup(component));
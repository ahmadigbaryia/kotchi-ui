import "./core/utils/loggerInit";
import buildP1 from "./demo/page1_1";
import buildP2 from "./demo/page1_2";

const container = document.getElementById("demo-container");
buildP1(container);
buildP2(container);
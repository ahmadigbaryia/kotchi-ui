import "./core/utils/loggerInit";

// export { default as KUIButton } from "./components/kui-button";
// export { default as KUIIcon } from "./components/kui-icon";

// export { default as KUIAccordion } from "./components/accordion";
// export { default as KUISection } from "./components/section";
// import buildP1 from "./demo/page1_1";
// import buildP2 from "./demo/page1_2";
import { build as sb } from "./demo/sections_demo";
import build from "./demo/accordion_demo";
// import build from "./demo/test";

const container = document.getElementById("demo-container");
build(container);
sb(container);

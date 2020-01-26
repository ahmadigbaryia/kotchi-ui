/** 
 * A script that auto-generate new component under src/components, with the a specific folder structure and files.
 * Input: JSON:
 *  {
 *      componentName: "STRING", //example: accordion,
 *      description: "STRING",
 *      attributes:[
 *          {
 *              name: "STRING",
 *              description: "STRING"
 *          }
 *      ]
 *  }
 * Output: Folder with the following structure and initial files 
src/components/COMPONENT_NAME/
├── __tests__/
│   └── kui-COMPONENT_NAME.test.js
├── docs/
│   └── configuration.json
├── config.js
├── index.js
├── kui-COMPONENT_NAME.js
├── README.md
├── styles.css
└── template.html
*/


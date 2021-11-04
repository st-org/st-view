export const root="body>.lr-struct>main>article {\n    display: flow-root;\n    margin: 0 auto;\n    margin-bottom: 100vh;\n    max-width: var(--length-width);\n    min-width: 100px;\n    padding: 0 var(--length-padding);\n}\n\n@media print {\n    body>.lr-struct>main>article {\n        margin: 0;\n        padding: 0;\n    }\n}\n\nbody>.lr-struct>aside>.content {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    justify-content: space-between;\n    overflow: auto;\n}\n\nbody>.lr-struct>aside>.content>.panel {\n    margin: var(--length-padding);\n}"
export const tree="body>.lr-struct>aside>.content>nav {\n    margin: var(--length-padding);\n}\n\nbody>.lr-struct>aside>.content>nav .data {\n    display: flex;\n    align-items: baseline;\n}\n\nbody>.lr-struct>aside>.content>nav .mark::before {\n    font-family: var(--font-mono);\n    color: var(--color-light);\n    display: block;\n    width: 1em;\n    text-align: center;\n    content: \"−\";\n}\n\nbody>.lr-struct>aside>.content>nav .tree.folded>.data>.mark::before {\n    content: \"+\";\n}\n\nbody>.lr-struct>aside>.content>nav .content {\n    flex-grow: 1;\n}\n\nbody>.lr-struct>aside>.content>nav .children {\n    border-left: 1px solid var(--color-border);\n    margin-left: calc(.5em - .5px);\n}\n\nbody>.lr-struct>aside>.content>nav .tree.folded>.children {\n    display: none;\n}"
export const all=root+tree
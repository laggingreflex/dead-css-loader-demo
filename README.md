# webpack-dead-css-demo

A demo project for [webpack-dead-css]

[webpack-dead-css]: https://github.com/simlrh/webpack-dead-css

## Input files

### src/index.js
```js
import { paragraph } from './css/style.css';

var body = `<p class="${ paragraph }">Vestibulum volutpat pretium libero.</p>`;

document.getElementById('app').innerHTML = body;
```

### src/css/style.css
```css
.title {
  composes: title-color from "./colors.css";
  font-weight:bold;
}
.paragraph {
  composes: text-color from "./colors.css";
  text-align:center;
}
```

## Output

Run `npm run build` and inspect `dist/bundle.js`. You can see in the output below, webpack has determined that `title` is an unused export and so webpack-dead-css has removed it from the source in `$css.content`. An unused color declaration in `colors.css` is also removed.

The unused exports themselves will also be removed if you use the UglifyJS plugin.

### dist/bundle.js
```js
// ---snip---

// module
const $css = {
	 id: module.i,
	 content: ".lSBa5KDdUjX9m1GrKvxlh {\n  text-align:center;\n}\n",
	 imports: cssImports
}                                                    
/* harmony export (immutable) */ __webpack_exports__["b"] = $css;


// exports
const title = "_2ZttkiyRXSbviqjyks0SRA " + __WEBPACK_IMPORTED_MODULE_1__home_steve_src_webpack_dead_css_demo_node_modules_css_loader_index_js_modules_true_camelCase_dashes_colors_css__["b" /* titleColor */] + "";
/* unused harmony export title */

const paragraph = "lSBa5KDdUjX9m1GrKvxlh " + __WEBPACK_IMPORTED_MODULE_1__home_steve_src_webpack_dead_css_demo_node_modules_css_loader_index_js_modules_true_camelCase_dashes_colors_css__["c" /* textColor */] + "";
/* harmony export (immutable) */ __webpack_exports__["a"] = paragraph;

// ---snip---
```

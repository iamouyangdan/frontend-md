import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, F as Fragment, d as createTextVNode } from "./app.050d295a.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "html-css\u77E5\u8BC6",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#html-css\u77E5\u8BC6",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" HTML+CSS\u77E5\u8BC6")
], -1);
const _hoisted_2 = { class: "custom-container tip" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u9644\u5F55", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\u6280\u672F\u5206\u4EAB - HTML+CSS3\u65B0\u7279\u6027");
const _hoisted_5 = /* @__PURE__ */ createTextVNode("\u6280\u672F\u5206\u4EAB - CSS \u5E03\u5C40");
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\u6280\u672F\u5206\u4EAB - grid \u5E03\u5C40");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            createVNode(_component_RouterLink, { to: "/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/%E5%85%B6%E4%BB%96%E5%88%86%E4%BA%AB/HTML+CSS3%E6%96%B0%E7%89%B9%E6%80%A7.html" }, {
              default: withCtx(() => [
                _hoisted_4
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            createVNode(_component_RouterLink, { to: "/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/%E5%85%B6%E4%BB%96%E5%88%86%E4%BA%AB/CSS%E5%B8%83%E5%B1%80.html" }, {
              default: withCtx(() => [
                _hoisted_5
              ]),
              _: 1
            })
          ])
        ]),
        createBaseVNode("li", null, [
          createBaseVNode("p", null, [
            createVNode(_component_RouterLink, { to: "/%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB/%E5%85%B6%E4%BB%96%E5%88%86%E4%BA%AB/grid%E5%B8%83%E5%B1%80.html" }, {
              default: withCtx(() => [
                _hoisted_6
              ]),
              _: 1
            })
          ])
        ])
      ])
    ])
  ], 64);
}
var HTML_CSS___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "HTML+CSS\u77E5\u8BC6.html.vue"]]);
export { HTML_CSS___html as default };

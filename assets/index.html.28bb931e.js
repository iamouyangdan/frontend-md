import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, F as Fragment, d as createTextVNode } from "./app.050d295a.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "l-ui\u6587\u6863\u5165\u53E3",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#l-ui\u6587\u6863\u5165\u53E3",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" l-ui\u6587\u6863\u5165\u53E3")
], -1);
const _hoisted_2 = {
  href: "http://lui-dev.kapboo.com/start/install.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = /* @__PURE__ */ createTextVNode("l-ui\u5FEB\u901F\u5F00\u59CB");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_2, [
        _hoisted_3,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export { index_html as default };

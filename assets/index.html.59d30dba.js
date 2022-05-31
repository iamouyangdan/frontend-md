import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, F as Fragment, d as createTextVNode } from "./app.050d295a.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "custom-container warning" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u6CE8\u610F"),
  /* @__PURE__ */ createBaseVNode("p", null, [
    /* @__PURE__ */ createTextVNode("\u5982\u5B58\u5728\u4EE5\u4E0A\u95EE\u9898\uFF0C\u53EF\u80FD"),
    /* @__PURE__ */ createBaseVNode("code", null, "npm run docs:dev"),
    /* @__PURE__ */ createTextVNode("\u672C\u5730\u5F00\u53D1\u65F6\u6CA1\u95EE\u9898\uFF0C\u4F46\u662F\u4F1A\u5BFC\u81F4"),
    /* @__PURE__ */ createBaseVNode("code", null, "vuepress2.x"),
    /* @__PURE__ */ createTextVNode("\u6253\u5305\u7F16\u8BD1"),
    /* @__PURE__ */ createBaseVNode("code", null, "npm run docs:build"),
    /* @__PURE__ */ createTextVNode("\u62A5\u9519\u6216\u6700\u7EC8\u9875\u9762\u663E\u793A\u5F02\u5E38\uFF0C\u6240\u4EE5\u8BF7\u52A1\u5FC5\u4E25\u683C\u9075\u5B88\u8981\u6C42\u3002")
  ])
], -1);
const _hoisted_2 = { class: "custom-container tip" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "\u9644\u5F55\u8D44\u6599", -1);
const _hoisted_4 = {
  href: "https://github.com/ikatyang/emoji-cheat-sheet",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createTextVNode("markdown\u53EF\u7528\u7684\u8868\u60C5\u5305");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("div", _hoisted_2, [
      _hoisted_3,
      createBaseVNode("ul", null, [
        createBaseVNode("li", null, [
          createBaseVNode("a", _hoisted_4, [
            _hoisted_5,
            createVNode(_component_ExternalLinkIcon)
          ])
        ])
      ])
    ])
  ], 64);
}
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export { index_html as default };

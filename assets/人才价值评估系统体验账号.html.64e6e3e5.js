import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, F as Fragment, e as createStaticVNode, d as createTextVNode } from "./app.050d295a.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u4EBA\u624D\u4EF7\u503C\u8BC4\u4F30\u7CFB\u7EDF\u4F53\u9A8C\u8D26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u4EBA\u624D\u4EF7\u503C\u8BC4\u4F30\u7CFB\u7EDF\u4F53\u9A8C\u8D26\u53F7" aria-hidden="true">#</a> \u4EBA\u624D\u4EF7\u503C\u8BC4\u4F30\u7CFB\u7EDF\u4F53\u9A8C\u8D26\u53F7</h1><h2 id="\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93" aria-hidden="true">#</a> \u6570\u636E\u5E93</h2><p><strong>\u4FDD\u5B58\u4F53\u9A8C\u8D26\u53F7\u4FE1\u606F\u76F8\u5173\u6570\u636E\u5E93</strong></p><p>cms\u6570\u636E\u5E93\u3001cms_customer\u8868</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CREATE TABLE `cms_customer` (\n  `cms_customer_id` varchar(32) NOT NULL DEFAULT &#39;&#39; COMMENT &#39;\u7F16\u53F7&#39;,\n  `user_name` varchar(30) NOT NULL DEFAULT &#39;&#39; COMMENT &#39;\u7528\u6237\u540D&#39;,\n  `company_name` varchar(32) NOT NULL DEFAULT &#39;&#39; COMMENT &#39;\u4F01\u4E1A\u540D\u79F0&#39;,\n  `phone` varchar(15) DEFAULT NULL COMMENT &#39;\u79FB\u52A8\u7535\u8BDD&#39;,\n\n  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT &#39;\u521B\u5EFA\u65F6\u95F4&#39;,\n\n  PRIMARY KEY (`cms_customer_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT=&#39;\u4EBA\u624D\u4EF7\u503C\u8BC4\u4F30\u7CFB\u7EDF\u4F53\u9A8C\u8D26\u53F7&#39;;\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u65B0\u4EBA\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#\u65B0\u4EBA\u5165\u95E8" aria-hidden="true">#</a> \u65B0\u4EBA\u5165\u95E8</h2>', 6);
const _hoisted_7 = {
  href: "https://thoughts.aliyun.com/share/618c7d1ac1a410001add8373#title=%E4%BA%BA%E6%89%8D%E4%BB%B7%E5%80%BC%E8%AF%84%E4%BC%B0%E8%87%AA%E5%8A%A8%E5%8C%96%E9%A1%B9%E7%9B%AE",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("strong", null, "https://thoughts.aliyun.com/share/618c7d1ac1a410001add8373#title=\u4EBA\u624D\u4EF7\u503C\u8BC4\u4F30\u81EA\u52A8\u5316\u9879\u76EE", -1);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u4EA7\u54C1\u9700\u6C42",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4EA7\u54C1\u9700\u6C42",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4EA7\u54C1\u9700\u6C42")
], -1);
const _hoisted_10 = {
  href: "https://thoughts.aliyun.com/share/618c7e1bbdc2c4001ae9ff86#title=%E6%95%B0%E6%8D%AE%E5%88%9B%E5%BB%BA%E6%B5%81%E7%A8%8B",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("strong", null, "https://thoughts.aliyun.com/share/618c7e1bbdc2c4001ae9ff86#title=\u6570\u636E\u521B\u5EFA\u6D41\u7A0B", -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_7, [
        _hoisted_8,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_9,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_10, [
        _hoisted_11,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ], 64);
}
var _____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u4EBA\u624D\u4EF7\u503C\u8BC4\u4F30\u7CFB\u7EDF\u4F53\u9A8C\u8D26\u53F7.html.vue"]]);
export { _____________html as default };

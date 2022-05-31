import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, F as Fragment, e as createStaticVNode, d as createTextVNode } from "./app.050d295a.js";
var _imports_0 = "/frontend-md/images/\u65B0\u4EBA\u57F9\u8BAD/1635249254(1).png";
var _imports_1 = "/frontend-md/images/\u65B0\u4EBA\u57F9\u8BAD/image.png";
var _imports_2 = "/frontend-md/images/\u65B0\u4EBA\u57F9\u8BAD/image1.png";
var _imports_3 = "/frontend-md/images/\u65B0\u4EBA\u57F9\u8BAD/16352506222.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u7B2C\u4E8C\u5468\u7684\u524D\u7AEF\u57F9\u8BAD" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u5468\u7684\u524D\u7AEF\u57F9\u8BAD" aria-hidden="true">#</a> \u7B2C\u4E8C\u5468\u7684\u524D\u7AEF\u57F9\u8BAD</h1><h2 id="\u57F9\u8BAD\u76EE\u7684" tabindex="-1"><a class="header-anchor" href="#\u57F9\u8BAD\u76EE\u7684" aria-hidden="true">#</a> \u57F9\u8BAD\u76EE\u7684</h2><ul><li><p>\u5E2E\u52A9\u65B0\u4EBA\u66F4\u5FEB\u66F4\u597D\u5730\u719F\u6089\u516C\u53F8\u9879\u76EE</p></li><li><p>\u5E2E\u52A9\u65B0\u4EBA\u63D0\u5347PC\u7AEF\u7BA1\u7406\u540E\u53F0\u5F00\u53D1\u901F\u5EA6\u548C\u5F00\u53D1\u6548\u7387</p></li></ul><h2 id="\u5185\u5BB9\u6982\u89C8" tabindex="-1"><a class="header-anchor" href="#\u5185\u5BB9\u6982\u89C8" aria-hidden="true">#</a> \u5185\u5BB9\u6982\u89C8</h2><ol><li><p>\u4F7F\u7528l-ui\u7EC4\u4EF6</p></li><li><p>\u524D\u540E\u7AEF\u4EA4\u4E92</p></li><li><p>\u5C01\u88C5\u7684\u7F51\u7EDC\u8BF7\u6C42</p></li><li><p>\u914D\u7F6E\u8DE8\u57DF</p></li><li><p>\u5F00\u53D1\u89C4\u8303ESlint</p></li></ol><h2 id="\u57F9\u8BAD\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u57F9\u8BAD\u5185\u5BB9" aria-hidden="true">#</a> \u57F9\u8BAD\u5185\u5BB9</h2><h2 id="\u4F7F\u7528lui\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528lui\u7EC4\u4EF6" aria-hidden="true">#</a> \u4F7F\u7528lui\u7EC4\u4EF6</h2><h3 id="l-ui\u7EC4\u4EF6\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#l-ui\u7EC4\u4EF6\u5F15\u5165" aria-hidden="true">#</a> l-ui\u7EC4\u4EF6\u5F15\u5165</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> LUi <span class="token keyword">from</span> <span class="token string">&#39;@linkkap/l-ui&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;@linkkap/l-ui/lib/l-ui.css&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5E38\u7528\u7EC4\u4EF6\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7EC4\u4EF6\u4ECB\u7ECD" aria-hidden="true">#</a> \u5E38\u7528\u7EC4\u4EF6\u4ECB\u7ECD</h3><ul><li><p>\u8868\u5355 formModel \u8868\u5355\u9A8C\u8BC1 rules</p></li><li><p>\u5355\u9009\u6846 radioGroup check @change</p></li><li><p>\u591A\u9009\u6846 checkbox check checkbox-group @change</p></li><li><p>\u8868\u683C table-common data\u3001column\u3001page\u3001column\u3001slot</p></li><li><p>\u6811\u5F62\u63A7\u4EF6 tree data\u3001@change</p></li><li><p>upload\u4E0A\u4F20 uploadDragger upload\u3001custom</p></li><li><p>\u5BF9\u8BDD\u6846 modal visible\u3001@ok\u3001@cancel</p></li></ul><h3 id="\u7BA1\u7406\u540E\u53F0\u76EE\u5F55\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u540E\u53F0\u76EE\u5F55\u4ECB\u7ECD" aria-hidden="true">#</a> \u7BA1\u7406\u540E\u53F0\u76EE\u5F55\u4ECB\u7ECD</h3><ul><li><p>public \u9875\u9762\u6A21\u677F\u3001script\u3001style\u6807\u7B7E\u5F15\u5165\u4F4D\u7F6E</p></li><li><p>.env .env\u6587\u4EF6\u914D\u7F6E\u5168\u5C40\u73AF\u5883\u53D8\u91CF p<wbr>rocess.env.xxx</p></li><li><p>vue.config.js vue-cli\u7684\u914D\u7F6E</p></li><li><p>components \u5168\u5C40\u7EC4\u4EF6\u7684\u4F4D\u7F6E</p></li><li><p>router \u8DEF\u7531 \u5206\u6A21\u5757\u6765\u653E</p></li><li><p>store vuex\u7684\u6570\u636E \u5206\u6A21\u5757\u6765\u653E \u6700\u597D\u548Crouter\u6709\u5BF9\u5E94</p></li><li><p>utils \u516C\u7528\u7684\u5DE5\u5177\u51FD\u6570\u5B58\u653E\u4F4D\u7F6E</p></li></ul><p><img src="' + _imports_0 + '" alt=""></p><h2 id="\u524D\u540E\u7AEF\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u524D\u540E\u7AEF\u4EA4\u4E92" aria-hidden="true">#</a> \u524D\u540E\u7AEF\u4EA4\u4E92</h2><ul><li><p>swagger\u6587\u6863\u7684\u67E5\u770B</p></li><li><p>swagger\u6587\u6863\u8C03\u8BD5 \u5168\u5C40\u53C2\u6570</p></li><li><p>postMan\u8C03\u8BD5</p></li><li><p>\u62A5\u9519\u7684\u63D0\u793A\u548C\u53CD\u9988Request URL</p></li></ul><p>\u8BF7\u6C42\u5934\u3001\u8FD4\u56DE</p><p>Request Url\u3001sessionKey\u3001data\u3001param</p><p><img src="' + _imports_1 + '" alt=""></p><h2 id="\u5C01\u88C5\u7684\u7F51\u7EDC\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u7684\u7F51\u7EDC\u8BF7\u6C42" aria-hidden="true">#</a> \u5C01\u88C5\u7684\u7F51\u7EDC\u8BF7\u6C42</h2><ul><li><p>axios\u7684\u4ECB\u7ECD</p></li><li><p>\u7F51\u7EDC\u8BF7\u6C42\u5C01\u88C5\u7684\u6D41\u7A0B</p></li></ul><p><img src="' + _imports_2 + '" alt=""></p><h2 id="\u914D\u7F6E\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u8DE8\u57DF" aria-hidden="true">#</a> \u914D\u7F6E\u8DE8\u57DF</h2><p>vue\u8DE8\u57DF\u7684\u914D\u7F6E</p><p><img src="' + _imports_3 + '" alt=""></p><h2 id="\u524D\u7AEF\u4EE3\u7801\u89C4\u8303\u7684\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u4EE3\u7801\u89C4\u8303\u7684\u4ECB\u7ECD" aria-hidden="true">#</a> \u524D\u7AEF\u4EE3\u7801\u89C4\u8303\u7684\u4ECB\u7ECD</h2>', 26);
const _hoisted_27 = {
  href: "https://thoughts.aliyun.com/share/60cb4c84ec6958001a9d249b#title=%E5%89%8D%E7%AB%AF%E8%A7%84%E8%8C%83%E6%96%87%E6%A1%A3",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\u524D\u7AEF\u89C4\u8303\u6587\u6863");
const _hoisted_29 = {
  href: "https://thoughts.aliyun.com/share/60cb4c94f3da82001a61e4b1#title=ESlint%E8%A7%84%E8%8C%83",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_30 = /* @__PURE__ */ createTextVNode("ESlint\u89C4\u8303");
const _hoisted_31 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "eslint\u5E38\u7528rules\u4ECB\u7ECD",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#eslint\u5E38\u7528rules\u4ECB\u7ECD",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" eslint\u5E38\u7528rules\u4ECB\u7ECD")
], -1);
const _hoisted_32 = {
  href: "https://www.jianshu.com/p/2e8325f20c5a?utm_campaign=maleskine&utm_content=note&utm_medium=seo_notes&utm_source=recommendation",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createTextVNode("eslint\u5E38\u7528rules\u4ECB\u7ECD");
const _hoisted_34 = /* @__PURE__ */ createStaticVNode('<h2 id="\u57F9\u8BAD\u8BB0\u5F55" tabindex="-1"><a class="header-anchor" href="#\u57F9\u8BAD\u8BB0\u5F55" aria-hidden="true">#</a> \u57F9\u8BAD\u8BB0\u5F55</h2><table><thead><tr><th>\u65E5\u671F</th><th>\u89C6\u9891\u5730\u5740</th></tr></thead><tbody><tr><td>\u7B2C\u4E00\u54682021-10-21</td><td>\u94FE\u63A5: https://pan.baidu.com/s/13tOXuteRukEVnHsRQjoJSA \u63D0\u53D6\u7801: 2jnw</td></tr><tr><td>\u7B2C\u4E8C\u54682021-10-28</td><td>\u94FE\u63A5\uFF1Ahttps://pan.baidu.com/s/1IIDhvqJU0AqSuU_xbfi6Sw \u63D0\u53D6\u7801\uFF1Ab7re</td></tr></tbody></table><h2 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h2><h2 id="\u4F5C\u4E1A" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u4E1A" aria-hidden="true">#</a> \u4F5C\u4E1A</h2>', 4);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("p", null, "\u7528\u94FE\u80A1AppWorks\u63D2\u4EF6\u521B\u5EFA\u4E00\u4E2APC\u7AEF\u9879\u76EE\uFF0C\u5B8C\u6210\u4E00\u4E2A\u767B\u5F55\u9875\u9762\u3001\u4F7F\u7528lui\u7EC4\u4EF6\u5E93\u7684table\u7EC4\u4EF6\u5B9E\u73B0\u5546\u54C1\u5217\u8868\u9875\u9762\uFF0C\u4F7F\u7528form-modal\u7EC4\u4EF6\u5B8C\u6210\u4E00\u4E2A\u5546\u54C1\u7F16\u8F91\u8868\u5355\u9875\u9762\uFF0C\u4F5C\u4E1A\u5468\u4E00\u524D\u63D0\u4EA4\u3002\u8981\u6C42\uFF1A", -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "VSCode\u5B89\u88C5Linkkap AppWorks\u76F8\u5173\u63D2\u4EF6")
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u4F7F\u7528\u63D2\u4EF6\u521B\u5EFAPC\u7BA1\u7406\u540E\u53F0\u9879\u76EE\uFF08\u5373\u94FE\u80A1admin\u7BA1\u7406\u540E\u53F0\uFF09\u3002")
], -1);
const _hoisted_41 = /* @__PURE__ */ createTextVNode("\u5F15\u5165lui\u7EC4\u4EF6\u5E93\uFF0C");
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("em", null, "\u5E76\u4F7F\u7528table\u3001form-modal\u7EC4", -1);
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u4EF6\uFF0C");
const _hoisted_44 = {
  href: "http://lui-dev.kapboo.com/#/table",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("strong", null, "\u7EC4\u4EF6\u5E93\u6587\u6863", -1);
const _hoisted_46 = /* @__PURE__ */ createTextVNode("\u3002");
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u5728gitee\u4E2D\u521B\u5EFA\u5F00\u6E90\u9879\u76EE\uFF0C\u5E76\u5C06\u4F5C\u4E1A\u6E90\u7801\u4E0A\u4F20\u5230gitee\u3002")
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("li", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "\u4F5C\u4E1A\u63D0\u4EA4\uFF1A\u5728\u5468\u62A5\u4E2D\u5907\u6CE8gitee\u6E90\u7801\u5730\u5740\u3002")
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", null, "\u6CE8\uFF1Al-ui\u5B89\u88C5\u5931\u8D25\u65F6\uFF0C\u5C06l-ui\u6539\u4E3A @ouyangdan/l-ui", -1);
const _hoisted_50 = {
  href: "/static.zip",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_51 = /* @__PURE__ */ createTextVNode("static.zip");
const _hoisted_52 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u53C2\u8003\u6587\u6863",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53C2\u8003\u6587\u6863",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53C2\u8003\u6587\u6863")
], -1);
const _hoisted_53 = {
  href: "https://www.antdv.com/components/table-cn/#API",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_54 = /* @__PURE__ */ createTextVNode("ant-desing-vue");
const _hoisted_55 = {
  href: "http://lui-dev.kapboo.com/#/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createTextVNode("l-ui\u4ECB\u7ECD");
const _hoisted_57 = {
  href: "https://www.jianshu.com/p/cca05d62b974",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_58 = /* @__PURE__ */ createTextVNode(".env\u73AF\u5883\u53D8\u91CF");
const _hoisted_59 = {
  href: "http://www.axios-js.com/zh-cn/docs/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_60 = /* @__PURE__ */ createTextVNode("axios\u4E2D\u6587\u6587\u6863");
const _hoisted_61 = {
  href: "https://cli.vuejs.org/zh/guide/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_62 = /* @__PURE__ */ createTextVNode("vue-cli\u6587\u6863");
const _hoisted_63 = {
  href: "https://www.npmjs.com/package/http-proxy-middleware",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_64 = /* @__PURE__ */ createTextVNode("http-proxy-middleware");
const _hoisted_65 = {
  href: "https://www.jianshu.com/p/8493282fe232",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_66 = /* @__PURE__ */ createTextVNode("Vue\u9879\u76EEdevServer.proxy\u4EE3\u7406\u914D\u7F6E\u8BE6\u89E3");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_27, [
        _hoisted_28,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_29, [
        _hoisted_30,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_31,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_32, [
        _hoisted_33,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_34,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_38,
        createBaseVNode("ul", null, [
          _hoisted_39,
          _hoisted_40,
          createBaseVNode("li", null, [
            createBaseVNode("p", null, [
              _hoisted_41,
              _hoisted_42,
              _hoisted_43,
              createBaseVNode("a", _hoisted_44, [
                _hoisted_45,
                createVNode(_component_ExternalLinkIcon)
              ]),
              _hoisted_46
            ])
          ]),
          _hoisted_47,
          _hoisted_48
        ])
      ])
    ]),
    _hoisted_49,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_50, [
        _hoisted_51,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_52,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_53, [
        _hoisted_54,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_55, [
        _hoisted_56,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_57, [
        _hoisted_58,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_59, [
        _hoisted_60,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_61, [
        _hoisted_62,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_63, [
        _hoisted_64,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_65, [
        _hoisted_66,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ], 64);
}
var _________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u7B2C\u4E8C\u5468\u7684\u524D\u7AEF\u57F9\u8BAD.html.vue"]]);
export { _________html as default };

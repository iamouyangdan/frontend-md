import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, F as Fragment, e as createStaticVNode, d as createTextVNode } from "./app.050d295a.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u7B2C\u4E94\u5468\u7684\u524D\u7AEF\u57F9\u8BAD" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E94\u5468\u7684\u524D\u7AEF\u57F9\u8BAD" aria-hidden="true">#</a> \u7B2C\u4E94\u5468\u7684\u524D\u7AEF\u57F9\u8BAD</h1><h2 id="\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5B9E\u6218" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5B9E\u6218" aria-hidden="true">#</a> \u5C0F\u7A0B\u5E8F\u5F00\u53D1\u5B9E\u6218</h2><h2 id="\u6846\u67B6\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u6846\u67B6\u4ECB\u7ECD" aria-hidden="true">#</a> \u6846\u67B6\u4ECB\u7ECD</h2>', 3);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("uni-app \u662F\u4E00\u4E2A\u4F7F\u7528 ");
const _hoisted_5 = {
  href: "https://vuejs.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createTextVNode("Vue.js");
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" \u5F00\u53D1\u6240\u6709\u524D\u7AEF\u5E94\u7528\u7684\u6846\u67B6\uFF0C\u5F00\u53D1\u8005\u7F16\u5199\u4E00\u5957\u4EE3\u7801\uFF0C\u53EF\u53D1\u5E03\u5230iOS\u3001Android\u3001Web\uFF08\u54CD\u5E94\u5F0F\uFF09\u3001\u4EE5\u53CA\u5404\u79CD\u5C0F\u7A0B\u5E8F\uFF08\u5FAE\u4FE1/\u652F\u4ED8\u5B9D/\u767E\u5EA6/\u5934\u6761/\u98DE\u4E66/QQ/\u5FEB\u624B/\u9489\u9489/\u6DD8\u5B9D\uFF09\u3001\u5FEB\u5E94\u7528\u7B49\u591A\u4E2A\u5E73\u53F0\u3002");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5B66\u4F1A\u9605\u8BFB\u5B98\u65B9\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u5B66\u4F1A\u9605\u8BFB\u5B98\u65B9\u6587\u6863" aria-hidden="true">#</a> \u5B66\u4F1A\u9605\u8BFB\u5B98\u65B9\u6587\u6863</h2><p>\u5982\u4F55\u5FEB\u901F\u7684\u5B66\u4E60\u4E00\u4E2A\u65B0\u7684\u6280\u672F\u6808\uFF1F</p><p>\u9996\u5148\u4E00\u70B9\u662F\u8981\u6E05\u695A\u6211\u4EEC\u9700\u8981\u8FD9\u4E2A\u6280\u672F\u6808\u4E3A\u6211\u4EEC\u89E3\u51B3\u4EC0\u4E48\u95EE\u9898\uFF1A</p><p>1.\u9875\u9762\u6E32\u67D3\u548C\u6570\u636E\u6E32\u67D3</p><p>2.\u9875\u9762\u8DF3\u8F6C</p><p>3.\u4EA4\u4E92\u903B\u8F91</p><p>4.\u5904\u7406\u4E1A\u52A1</p><h2 id="\u76EE\u5F55\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u4ECB\u7ECD" aria-hidden="true">#</a> \u76EE\u5F55\u4ECB\u7ECD</h2><p>\u516C\u53F8uni-app\u6A21\u677F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>|---- dist                              build\u6216\u8005\u5F00\u53D1\u73AF\u5883\u975Eh5\u73AF\u5883\u4E0B\u8FD0\u884C\uFF0C\u7F16\u8BD1\u540E\u7684\u5404\u5E73\u53F0\u4EE3\u7801\u5B58\u653E\u76EE\u5F55\n\n|---- public                            \u5185\u6709\u4E00\u4E2A index.html\uFF0C\u662Fh5\u9875\u9762\u6A21\u677F\uFF0C\u7528\u4E8E\u9879\u76EE\u751F\u6210 html \u4EE3\u7801\n\n|---- src\n\n|      |---- assets                     \u5B58\u653Ecss\u3001less\u3001scss\u3001fonts\u7B49\u8D44\u6E90\n\n|      |       |---- css\n\n|      |       |---- fonts\n\n|      |      \u2514---- scss\n\n|      |---- components            \u7EC4\u4EF6\u76EE\u5F55\uFF0C\u5B58\u653E\u5404\u79CD\u53EF\u590D\u7528\u7EC4\u4EF6\n\n|      |---- pages                     \u4E1A\u52A1\u9875\u9762\u6587\u4EF6\u5B58\u653E\u7684\u76EE\u5F55\uFF0C\u6700\u597D\u6309\u6A21\u5757\u5206\u597D\u6587\u4EF6\u5939\n\n|      |---- static                      \u5B58\u653E\u5F15\u7528\u9759\u6001\u8D44\u6E90(\u5982\uFF1A\u56FE\u7247\u3001\u97F3\u9891\u3001\u89C6\u9891\u7B49)\u7684\u76EE\u5F55\uFF0C\u6CE8\u610F\uFF1A\u9759\u6001\u8D44\u6E90\u53EA\u80FD\u5B58\u653E\u4E8E\u6B64\n\n|      |       |---- app-plus         \u6309\u73AF\u5883\u533A\u5206\u8D44\u6E90\uFF0Capp\u73AF\u5883\n\n|      |       |---- h5                 \u6309\u73AF\u5883\u533A\u5206\u8D44\u6E90\uFF0Ch5\u73AF\u5883\n\n|      |       |---- mp-weixin          \u6309\u73AF\u5883\u533A\u5206\u8D44\u6E90\uFF0C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u73AF\u5883\n\n|      |      \u2514---- platforms          \u6309\u73AF\u5883\u533A\u5206\u8D44\u6E90\uFF0C\u5168\u73AF\u5883\n\n|      |---- utils                      \u516C\u5171\u5305\u5B58\u653E\u76EE\u5F55\uFF0C\u5982\u5171\u7528\u7684 ajax.js\n\n|      |       \u2514---- request.js         \u516C\u5171ajax\u8BF7\u6C42\u65B9\u6CD5\uFF0C\u53EF\u5728\u65B9\u6CD5\u5185\u52A0\u5165ajax\u8BF7\u6C42\u4F20\u5165\u7684\u516C\u5171\u53C2\u6570\uFF0C\u6216\u8005\u9519\u8BEF\u4FE1\u606F\u7684\u5168\u5C40\u5904\u7406\u7B49\n\n|      |---- APP.vue                    \u5E94\u7528\u914D\u7F6E\uFF0C\u7528\u6765\u914D\u7F6EApp\u5168\u5C40\u6837\u5F0F\u4EE5\u53CA\u76D1\u542C\n\n|      |---- config.js                  \u914D\u7F6E\u6587\u4EF6\uFF0C\u7528\u6765\u914D\u7F6E\u5C0F\u7A0B\u5E8F\u8BF7\u6C42\u57DF\u540D\uFF0C\u4E5F\u53EF\u7528\u6765\u5B58\u653E\u4E00\u4E9B\u516C\u7528\u7684\u914D\u7F6E\u4FE1\u606F\n\n|      |---- main.js                    Vue\u521D\u59CB\u5316\u5165\u53E3\u6587\u4EF6\n\n|      |---- manifest.json              \u914D\u7F6E\u5E94\u7528\u540D\u79F0\u3001appid\u3001logo\u3001\u7248\u672C\u7B49\u6253\u5305\u4FE1\u606F\uFF0C\u6216h5\u7AEF\u5F00\u53D1\u73AF\u5883\u7684proxy\u4EE3\u7406\n\n|      |---- pages.json                 \u914D\u7F6E\u9875\u9762\u8DEF\u7531\u3001\u5BFC\u822A\u6761\u3001\u9009\u9879\u5361\u7B49\u9875\u9762\u7C7B\u4FE1\u606F\n\n|      \u2514---- uni.scss                   uni.scss \u516C\u5171\u6837\u5F0F, \u53EF\u4EE5\u76F4\u63A5\u5728\u9875\u9762\u7684scss\u4E2D\u4F7F\u7528\u53D8\u91CF\u65E0\u9700\u5F15\u5165\u8BE5\u6587\u4EF6\uFF08\u6682\u65F6\u6CA1\u7528\u5230\uFF09\n\n|---- .env                              \u516C\u7528\u7684\u73AF\u5883\u914D\u7F6E\uFF0C\u5728\u6240\u6709\u7684\u73AF\u5883\u4E2D\u88AB\u8F7D\u5165\n\n|---- .env.h5-prod                      h5\u751F\u4EA7\u73AF\u5883\u914D\u7F6E\n\n|---- .env.h5-dev                       h5\u5F00\u53D1\u73AF\u5883\u914D\u7F6E\n\n|---- .env.weixin                       \u5C0F\u7A0B\u5E8F\u5F00\u53D1\u73AF\u5883\u914D\u7F6E\n\n|---- .env.weixin-prod                  \u5C0F\u7A0B\u5E8F\u751F\u4EA7\u73AF\u5883\u914D\u7F6E\n\n|---- .env.weixin-dev                   \u5C0F\u7A0B\u5E8F\u5F00\u53D1\u73AF\u5883\u914D\u7F6E\n\n|---- .eslintrc.js                      eslint \u914D\u7F6E\u6587\u4EF6\n\n|---- .gitignore                        git \u5FFD\u7565\u5217\u8868\n\n|---- package.json                      \u9879\u76EE\u4F9D\u8D56 npm \u5305\uFF0C\u542F\u52A8\u6307\u4EE4\n\n|---- README.md                         \u9879\u76EE\u6587\u6863\u4EE5\u53CA\u8BF4\u660E\n\n|---- vue.config.js                     vue-cli4\u914D\u7F6E\u6587\u4EF6\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br></div></div><h2 id="\u91CD\u8981\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u91CD\u8981\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u91CD\u8981\u914D\u7F6E\u6587\u4EF6</h2>', 11);
const _hoisted_19 = {
  href: "https://uniapp.dcloud.io/collocation/manifest.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_20 = /* @__PURE__ */ createTextVNode("manifest.json");
const _hoisted_21 = {
  href: "https://uniapp.dcloud.io/collocation/pages.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_22 = /* @__PURE__ */ createTextVNode("pages.json");
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<h2 id="\u9875\u9762\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u6E32\u67D3" aria-hidden="true">#</a> \u9875\u9762\u6E32\u67D3</h2><h2 id="\u8DE8\u7AEF\u517C\u5BB9-\u6761\u4EF6\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u8DE8\u7AEF\u517C\u5BB9-\u6761\u4EF6\u7F16\u8BD1" aria-hidden="true">#</a> \u8DE8\u7AEF\u517C\u5BB9-\u6761\u4EF6\u7F16\u8BD1</h2><p><strong>\u5199\u6CD5\uFF1A<strong>\u4EE5 #ifdef \u6216 #ifndef \u52A0</strong> %PLATFORM%</strong> \u5F00\u5934\uFF0C\u4EE5 #endif \u7ED3\u5C3E\u3002</p><ul><li><p>#ifdef\uFF1Aif defined \u4EC5\u5728\u67D0\u5E73\u53F0\u5B58\u5728</p></li><li><p>#ifndef\uFF1Aif not defined \u9664\u4E86\u67D0\u5E73\u53F0\u5747\u5B58\u5728</p></li><li><p><strong>%PLATFORM%</strong>\uFF1A\u5E73\u53F0\u540D\u79F0</p></li></ul><table><thead><tr><th>\u6761\u4EF6\u7F16\u8BD1\u5199\u6CD5</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>#ifdef APP-PLUS <br> \u9700\u6761\u4EF6\u7F16\u8BD1\u7684\u4EE3\u7801 <br>#endif</td><td>\u4EC5\u51FA\u73B0\u5728 App \u5E73\u53F0\u4E0B\u7684\u4EE3\u7801</td></tr><tr><td>#ifndef H5<br>\u9700\u6761\u4EF6\u7F16\u8BD1\u7684\u4EE3\u7801<br>#endif</td><td>\u9664\u4E86 H5 \u5E73\u53F0\uFF0C\u5176\u5B83\u5E73\u53F0\u5747\u5B58\u5728\u7684\u4EE3\u7801</td></tr><tr><td>#ifdef H5 || MP-WEIXIN<br>\u9700\u6761\u4EF6\u7F16\u8BD1\u7684\u4EE3\u7801<br>#endif`</td><td>\u5728 H5 \u5E73\u53F0\u6216\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5E73\u53F0\u5B58\u5728\u7684\u4EE3\u7801\uFF08\u8FD9\u91CC\u53EA\u6709||\uFF0C\u4E0D\u53EF\u80FD\u51FA\u73B0&amp;&amp;\uFF0C\u56E0\u4E3A\u6CA1\u6709\u4EA4\u96C6\uFF09</td></tr></tbody></table><p><strong>%PLATFORM%</strong> <strong>\u53EF\u53D6\u503C\u5982\u4E0B\uFF1A</strong></p>', 6);
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", null, "\u503C"),
    /* @__PURE__ */ createBaseVNode("th", null, "\u751F\u6548\u6761\u4EF6")
  ])
], -1);
const _hoisted_30 = /* @__PURE__ */ createBaseVNode("td", null, "VUE3", -1);
const _hoisted_31 = /* @__PURE__ */ createTextVNode("HBuilderX 3.2.0+ ");
const _hoisted_32 = {
  href: "https://ask.dcloud.net.cn/article/37834",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_33 = /* @__PURE__ */ createTextVNode("\u8BE6\u60C5");
const _hoisted_34 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "APP-PLUS"),
  /* @__PURE__ */ createBaseVNode("td", null, "App")
], -1);
const _hoisted_35 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "APP-PLUS-NVUE\u6216APP-NVUE"),
  /* @__PURE__ */ createBaseVNode("td", null, "App nvue")
], -1);
const _hoisted_36 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "H5"),
  /* @__PURE__ */ createBaseVNode("td", null, "H5")
], -1);
const _hoisted_37 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "MP-WEIXIN"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F")
], -1);
const _hoisted_38 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "MP-ALIPAY"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F")
], -1);
const _hoisted_39 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "MP-BAIDU"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u767E\u5EA6\u5C0F\u7A0B\u5E8F")
], -1);
const _hoisted_40 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "MP-TOUTIAO"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u5B57\u8282\u8DF3\u52A8\u5C0F\u7A0B\u5E8F")
], -1);
const _hoisted_41 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "MP-LARK"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u98DE\u4E66\u5C0F\u7A0B\u5E8F")
], -1);
const _hoisted_42 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "MP-QQ"),
  /* @__PURE__ */ createBaseVNode("td", null, "QQ\u5C0F\u7A0B\u5E8F")
], -1);
const _hoisted_43 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "MP-KUAISHOU"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u5FEB\u624B\u5C0F\u7A0B\u5E8F")
], -1);
const _hoisted_44 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "MP-360"),
  /* @__PURE__ */ createBaseVNode("td", null, "360\u5C0F\u7A0B\u5E8F")
], -1);
const _hoisted_45 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "MP"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/\u652F\u4ED8\u5B9D\u5C0F\u7A0B\u5E8F/\u767E\u5EA6\u5C0F\u7A0B\u5E8F/\u5B57\u8282\u8DF3\u52A8\u5C0F\u7A0B\u5E8F/\u98DE\u4E66\u5C0F\u7A0B\u5E8F/QQ\u5C0F\u7A0B\u5E8F/360\u5C0F\u7A0B\u5E8F")
], -1);
const _hoisted_46 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "QUICKAPP-WEBVIEW"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u5FEB\u5E94\u7528\u901A\u7528(\u5305\u542B\u8054\u76DF\u3001\u534E\u4E3A)")
], -1);
const _hoisted_47 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "QUICKAPP-WEBVIEW-UNION"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u5FEB\u5E94\u7528\u8054\u76DF")
], -1);
const _hoisted_48 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "QUICKAPP-WEBVIEW-HUAWEI"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u5FEB\u5E94\u7528\u534E\u4E3A")
], -1);
const _hoisted_49 = /* @__PURE__ */ createBaseVNode("p", null, [
  /* @__PURE__ */ createBaseVNode("strong", null, "\u652F\u6301\u7684\u6587\u4EF6")
], -1);
const _hoisted_50 = /* @__PURE__ */ createBaseVNode("ul", null, [
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, ".vue")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, ".js")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, ".css")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, "pages.json")
  ]),
  /* @__PURE__ */ createBaseVNode("li", null, [
    /* @__PURE__ */ createBaseVNode("p", null, "\u5404\u9884\u7F16\u8BD1\u8BED\u8A00\u6587\u4EF6\uFF0C\u5982\uFF1A.scss\u3001.less\u3001.stylus\u3001.ts\u3001.pug")
  ])
], -1);
const _hoisted_51 = {
  href: "https://uniapp.dcloud.io/tutorial/platform.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_52 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u6587\u6863");
const _hoisted_53 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u7EC4\u4EF6",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u7EC4\u4EF6",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u7EC4\u4EF6")
], -1);
const _hoisted_54 = /* @__PURE__ */ createBaseVNode("p", null, "\u548Cvue\u7684\u5199\u6CD5\u4E00\u81F4\uFF0C\u9700\u8981\u6CE8\u610F\u7EC4\u4EF6\u6587\u4EF6\u5B58\u653E\u89C4\u5219\uFF0C\u516C\u5171\u7EC4\u4EF6\u653E\u5728components\u6587\u4EF6\u5939\u4E0B\uFF0C\u79C1\u6709\u7EC4\u4EF6\u653E\u5728\u9875\u9762\u6587\u4EF6\u5939\u4E0B\u7684components\u6587\u4EF6\u4E0B", -1);
const _hoisted_55 = {
  href: "https://uniapp.dcloud.io/tutorial/vue-components.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u6587\u6863");
const _hoisted_57 = /* @__PURE__ */ createBaseVNode("p", null, "\u26A0\uFE0F\u8FD9\u91CC\u6709\u4E00\u4E2A\u5751\u70B9\u5C31\u662F\u8DE8\u7AEF\u5E94\u7528\u4E0D\u8981\u4F7F\u7528\u52A8\u6001\u7EC4\u4EF6\uFF0C\u56E0\u4E3A\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6682\u65F6\u4E0D\u652F\u6301\u52A8\u6001\u7EC4\u4EF6", -1);
const _hoisted_58 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u751F\u547D\u5468\u671F",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u751F\u547D\u5468\u671F",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u751F\u547D\u5468\u671F")
], -1);
const _hoisted_59 = /* @__PURE__ */ createBaseVNode("p", null, "\u6709\u4E09\u79CD\u751F\u547D\u5468\u671F\uFF0C\u5206\u522B\u662F\u5E94\u7528\u751F\u547D\u5468\u671F\u3001\u9875\u9762\u751F\u547D\u5468\u671F\u3001\u7EC4\u4EF6\u751F\u547D\u5468\u671F", -1);
const _hoisted_60 = /* @__PURE__ */ createBaseVNode("p", null, "\u5E94\u7528\u751F\u547D\u5468\u671F\uFF1A\u5168\u5C40\u7684\u751F\u547D\u5468\u671F\uFF0C\u6709\u7279\u5B9A\u65F6\u673A\u89E6\u53D1\uFF0C\u4E5F\u6709\u76D1\u542C\u89E6\u53D1\u3002\u53EA\u5728App.vue\u6587\u4EF6\u91CC\u9762\u6709\u6548", -1);
const _hoisted_61 = /* @__PURE__ */ createBaseVNode("p", null, "\u9875\u9762\u751F\u547D\u5468\u671F\uFF1A\u6709\u4E00\u5957\u533A\u522B\u4E8Evue\u7684\u9875\u9762\u751F\u547D\u5468\u671F\uFF0C\u6709\u7279\u5B9A\u65F6\u673A\u89E6\u53D1\uFF0C\u4E5F\u6709\u96C6\u5408\u7528\u6237\u4EA4\u4E92\u3001\u4E0D\u540C\u7AEF\u7684\u76D1\u542C\u89E6\u53D1", -1);
const _hoisted_62 = /* @__PURE__ */ createBaseVNode("p", null, "\u7EC4\u4EF6\u751F\u547D\u5468\u671F\uFF1A\u548Cvue\u4E00\u6837", -1);
const _hoisted_63 = {
  href: "https://uniapp.dcloud.io/collocation/frame/lifecycle",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_64 = /* @__PURE__ */ createTextVNode("https://uniapp.dcloud.io/collocation/frame/lifecycle");
const _hoisted_65 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u9875\u9762\u8DF3\u8F6C",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u9875\u9762\u8DF3\u8F6C",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u9875\u9762\u8DF3\u8F6C")
], -1);
const _hoisted_66 = /* @__PURE__ */ createBaseVNode("p", null, "\u6846\u67B6\u4EE5\u6808\u7684\u5F62\u5F0F\u7BA1\u7406\u5F53\u524D\u6240\u6709\u9875\u9762\uFF0C \u5F53\u53D1\u751F\u8DEF\u7531\u5207\u6362\u7684\u65F6\u5019\uFF0C\u9875\u9762\u6808\u7684\u8868\u73B0\u5982\u4E0B\uFF1A", -1);
const _hoisted_67 = /* @__PURE__ */ createBaseVNode("thead", null, [
  /* @__PURE__ */ createBaseVNode("tr", null, [
    /* @__PURE__ */ createBaseVNode("th", null, "\u8DEF\u7531\u65B9\u5F0F"),
    /* @__PURE__ */ createBaseVNode("th", null, "\u9875\u9762\u6808\u8868\u73B0"),
    /* @__PURE__ */ createBaseVNode("th", null, "\u89E6\u53D1\u65F6\u673A")
  ])
], -1);
const _hoisted_68 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "\u521D\u59CB\u5316"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u65B0\u9875\u9762\u5165\u6808"),
  /* @__PURE__ */ createBaseVNode("td", null, "uni-app \u6253\u5F00\u7684\u7B2C\u4E00\u4E2A\u9875\u9762")
], -1);
const _hoisted_69 = /* @__PURE__ */ createBaseVNode("td", null, "\u6253\u5F00\u65B0\u9875\u9762", -1);
const _hoisted_70 = /* @__PURE__ */ createBaseVNode("td", null, "\u65B0\u9875\u9762\u5165\u6808", -1);
const _hoisted_71 = /* @__PURE__ */ createTextVNode("\u8C03\u7528 API ");
const _hoisted_72 = {
  href: "https://uniapp.dcloud.io/api/router?id=navigateto",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_73 = /* @__PURE__ */ createTextVNode("uni.navigateTo");
const _hoisted_74 = /* @__PURE__ */ createTextVNode(" \u3001\u4F7F\u7528\u7EC4\u4EF6 ");
const _hoisted_75 = /* @__PURE__ */ createBaseVNode("code", null, '<navigator open-type="navigate"/>', -1);
const _hoisted_76 = /* @__PURE__ */ createBaseVNode("td", null, "\u9875\u9762\u91CD\u5B9A\u5411", -1);
const _hoisted_77 = /* @__PURE__ */ createBaseVNode("td", null, "\u5F53\u524D\u9875\u9762\u51FA\u6808\uFF0C\u65B0\u9875\u9762\u5165\u6808", -1);
const _hoisted_78 = /* @__PURE__ */ createTextVNode("\u8C03\u7528 API ");
const _hoisted_79 = {
  href: "https://uniapp.dcloud.io/api/router?id=redirectto",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_80 = /* @__PURE__ */ createTextVNode("uni.redirectTo");
const _hoisted_81 = /* @__PURE__ */ createTextVNode(" \u3001\u4F7F\u7528\u7EC4\u4EF6 ");
const _hoisted_82 = /* @__PURE__ */ createBaseVNode("code", null, '<navigator open-type="redirectTo"/>', -1);
const _hoisted_83 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "\u9875\u9762\u8FD4\u56DE"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u9875\u9762\u4E0D\u65AD\u51FA\u6808\uFF0C\u76F4\u5230\u76EE\u6807\u8FD4\u56DE\u9875"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createTextVNode("\u8C03\u7528 API "),
    /* @__PURE__ */ createBaseVNode("a", { href: "" }, "uni.navigateBack"),
    /* @__PURE__ */ createTextVNode(" \u3001\u4F7F\u7528\u7EC4\u4EF6 "),
    /* @__PURE__ */ createBaseVNode("code", null, '<navigator open-type="navigateBack"/>'),
    /* @__PURE__ */ createTextVNode(" \u3001\u7528\u6237\u6309\u5DE6\u4E0A\u89D2\u8FD4\u56DE\u6309\u94AE\u3001\u5B89\u5353\u7528\u6237\u70B9\u51FB\u7269\u7406back\u6309\u952E")
  ])
], -1);
const _hoisted_84 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "Tab \u5207\u6362"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u9875\u9762\u5168\u90E8\u51FA\u6808\uFF0C\u53EA\u7559\u4E0B\u65B0\u7684 Tab \u9875\u9762"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createTextVNode("\u8C03\u7528 API uni.switchTab \u3001\u4F7F\u7528\u7EC4\u4EF6 "),
    /* @__PURE__ */ createBaseVNode("code", null, '<navigator open-type="switchTab"/>'),
    /* @__PURE__ */ createTextVNode(" \u3001\u7528\u6237\u5207\u6362 Tab")
  ])
], -1);
const _hoisted_85 = /* @__PURE__ */ createBaseVNode("tr", null, [
  /* @__PURE__ */ createBaseVNode("td", null, "\u91CD\u52A0\u8F7D"),
  /* @__PURE__ */ createBaseVNode("td", null, "\u9875\u9762\u5168\u90E8\u51FA\u6808\uFF0C\u53EA\u7559\u4E0B\u65B0\u7684\u9875\u9762"),
  /* @__PURE__ */ createBaseVNode("td", null, [
    /* @__PURE__ */ createTextVNode("\u8C03\u7528 API uni.reLaunch \u3001\u4F7F\u7528\u7EC4\u4EF6 "),
    /* @__PURE__ */ createBaseVNode("code", null, '<navigator open-type="reLaunch"/>')
  ])
], -1);
const _hoisted_86 = {
  href: "https://uniapp.dcloud.io/tutorial/page.html#%E8%B7%AF%E7%94%B1%E8%B7%B3%E8%BD%AC",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_87 = /* @__PURE__ */ createTextVNode("\u8DEF\u7531\u8DF3\u8F6C");
const _hoisted_88 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u4EA4\u4E92\u903B\u8F91",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4EA4\u4E92\u903B\u8F91",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4EA4\u4E92\u903B\u8F91")
], -1);
const _hoisted_89 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u4E8B\u4EF6\u6620\u5C04\u8868",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u4E8B\u4EF6\u6620\u5C04\u8868",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u4E8B\u4EF6\u6620\u5C04\u8868")
], -1);
const _hoisted_90 = {
  href: "https://uniapp.dcloud.io/tutorial/vue-basics.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_91 = /* @__PURE__ */ createTextVNode("\u4E8B\u4EF6\u6620\u5C04\u8868");
const _hoisted_92 = /* @__PURE__ */ createStaticVNode('<h2 id="\u5904\u7406\u4E1A\u52A1" tabindex="-1"><a class="header-anchor" href="#\u5904\u7406\u4E1A\u52A1" aria-hidden="true">#</a> \u5904\u7406\u4E1A\u52A1</h2><h2 id="\u5C01\u88C5\u5DE5\u5177-\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5C01\u88C5\u5DE5\u5177-\u65B9\u6CD5" aria-hidden="true">#</a> \u5C01\u88C5\u5DE5\u5177/\u65B9\u6CD5</h2><h3 id="\u8BF7\u6C42\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u65B9\u6CD5" aria-hidden="true">#</a> \u8BF7\u6C42\u65B9\u6CD5</h3><p>\u57FA\u4E8EPromise\u7684uni.request\u3001uni.login\u7684\u518D\u6B21\u5C01\u88C5\uFF0C\u5E76\u6DFB\u52A0\u5176\u4ED6\u4E1A\u52A1\u5904\u7406\uFF0C\u4F8B\u5982\u7F13\u5B58\u7279\u6B8A\u7684\u6570\u636E\uFF08\u4F8B\u5982\u8BB0\u5F55\u767B\u5F55\u72B6\u6001\uFF09\u3001\u53D6\u6D88\u8BF7\u6C42\u5904\u7406\u7B49</p>', 4);
const _hoisted_96 = {
  href: "https://uniapp.dcloud.io/api/request/request.html#request",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_97 = /* @__PURE__ */ createTextVNode("request");
const _hoisted_98 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    uni<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">CancelController</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>requestTaskMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// \u7F13\u5B58\u4E0A\u4E00\u6B21\u7684\u8BF7\u6C42</span>\n  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">uniqueKey<span class="token punctuation">,</span> requestTask</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>requestTaskMap<span class="token punctuation">[</span>uniqueKey<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>requestTaskMap<span class="token punctuation">[</span>uniqueKey<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>requestTaskMap<span class="token punctuation">[</span>uniqueKey<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>requestTask<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// \u7EC8\u6B62\u8BF7\u6C42</span>\n  <span class="token function">cancel</span><span class="token punctuation">(</span><span class="token parameter">uniqueKey</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>requestTaskMap<span class="token punctuation">[</span>uniqueKey<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>requestTaskMap<span class="token punctuation">[</span>uniqueKey<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">requestTask</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      requestTask<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">start</span><span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span> method<span class="token punctuation">,</span> requestTask</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> uniqueKey <span class="token operator">=</span> url <span class="token operator">+</span> method\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span>uniqueKey<span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>uniqueKey<span class="token punctuation">,</span> requestTask<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> requestTask\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> cancelController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CancelController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">RetryController</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> request <span class="token operator">!==</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;request\u53C2\u6570\u4EC5\u652F\u6301\u51FD\u6570\u7C7B\u578B&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;options\u53C2\u6570\u4E0D\u5141\u8BB8\u4E3A\u7A7A&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>request <span class="token operator">=</span> request\n    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">async</span> <span class="token function">tryRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment">// \u7F51\u7EDC\u8BF7\u6C42\u8D85\u65F6\uFF0C\u53D1\u8D77\u91CD\u8BD5</span>\n  <span class="token comment">// \u9ED8\u8BA4\u91CD\u8BD53\u6B21</span>\n  <span class="token keyword">async</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>response<span class="token punctuation">.</span>errMsg <span class="token operator">!==</span> <span class="token string">&#39;request:fail timeout&#39;</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> response\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>config <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">retry</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>config<span class="token punctuation">.</span>retry <span class="token operator">===</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>config<span class="token punctuation">.</span>retry <span class="token operator">=</span> <span class="token number">3</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>config<span class="token punctuation">.</span>retry <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>config<span class="token punctuation">.</span>retry<span class="token operator">--</span>\n      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">tryRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">throw</span> response\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">request</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> <span class="token punctuation">{</span> url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> method<span class="token punctuation">,</span> header<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> dataType<span class="token punctuation">,</span> responseType<span class="token punctuation">,</span> complete<span class="token punctuation">,</span> config<span class="token punctuation">,</span> isNotJoinDomain <span class="token operator">=</span> <span class="token boolean">false</span> <span class="token punctuation">}</span> <span class="token operator">=</span> options\n  <span class="token comment">// \u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D ms\uFF0C\u8D85\u65F6\u65F6\u95F4\u9ED8\u8BA4\u4E3A3s</span>\n  timeout <span class="token operator">=</span> timeout <span class="token operator">||</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_TIMEOUT</span><span class="token punctuation">)</span>\n  <span class="token comment">// \u5982\u679C\u8BBE\u4E3A json\uFF0C\u4F1A\u5C1D\u8BD5\u5BF9\u8FD4\u56DE\u7684\u6570\u636E\u505A\u4E00\u6B21 JSON.parse</span>\n  dataType <span class="token operator">=</span> dataType <span class="token operator">||</span> <span class="token string">&#39;json&#39;</span>\n  <span class="token comment">// \u8BBE\u7F6E\u54CD\u5E94\u7684\u6570\u636E\u7C7B\u578B\u3002\u5408\u6CD5\u503C\uFF1Atext\u3001arraybuffer</span>\n  responseType <span class="token operator">=</span> responseType <span class="token operator">||</span> <span class="token string">&#39;text&#39;</span>\n  <span class="token comment">// \u6709\u6548\u503C: GET POST PUT DELETE\uFF0C\u8BE6\u60C5\u89C1https://uniapp.dcloud.io/api/request/request?id=request</span>\n  method <span class="token operator">=</span> method <span class="token operator">||</span> <span class="token string">&#39;GET&#39;</span>\n  <span class="token comment">// \u8BBE\u7F6E\u8BF7\u6C42\u7684 header\uFF0Cheader \u4E2D\u4E0D\u80FD\u8BBE\u7F6E Referer\u3002</span>\n  header <span class="token operator">=</span> header <span class="token operator">||</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json;charset=utf-8;&#39;</span> <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>url<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;url\u4E0D\u5141\u8BB8\u4E3A\u7A7A&#39;</span><span class="token punctuation">)</span>\n  <span class="token comment">// isNotJoinDomain \u662F\u5426\u4E0D\u9700\u8981\u62FC\u63A5\u57DF\u540D</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;//&#39;</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isNotJoinDomain<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    url <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token operator">?</span> url <span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n    url <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_DOMAIN</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u53C2\u6570&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">,</span> data<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> requestTask <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      url<span class="token punctuation">,</span>\n      data<span class="token punctuation">,</span>\n      method<span class="token punctuation">,</span>\n      header<span class="token punctuation">,</span>\n      timeout<span class="token punctuation">,</span>\n      dataType<span class="token punctuation">,</span>\n      responseType<span class="token punctuation">,</span>\n      <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> data<span class="token punctuation">,</span> statusCode<span class="token punctuation">,</span> header<span class="token punctuation">,</span> cookies <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span>\n        <span class="token comment">// eslint-disable-next-line eqeqeq</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data <span class="token operator">||</span> data<span class="token punctuation">.</span>code <span class="token operator">!=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token function">fail</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fail &#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>\n        <span class="token function">reject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token function">complete</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        complete <span class="token operator">&amp;&amp;</span> <span class="token function">complete</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token comment">// \u662F\u5426\u914D\u7F6E\u4E86cancel\u53C2\u6570\uFF0C\u5373\u53D6\u6D88\u4E0A\u4E00\u6B21\u672A\u5B8C\u6210\u7684\u8BF7\u6C42</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>config <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>cancel<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      cancelController<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> method<span class="token punctuation">,</span> requestTask<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">showLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">ifHideLoading</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token operator">!</span>ifHideLoading <span class="token operator">&amp;&amp;</span> uni<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\u52A0\u8F7D\u4E2D&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">hideLoading</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  uni<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getOpenId</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> cacheOpenId <span class="token operator">=</span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>openId\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;cacheOpenId&#39;</span><span class="token punctuation">,</span> cacheOpenId<span class="token punctuation">)</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheOpenId<span class="token punctuation">)</span> <span class="token keyword">return</span> cacheOpenId\n\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> code <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">ifHideLoading</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token comment">// url: &#39;/survey/minimall/wechat/get-openid-by-jscode.do&#39;,</span>\n    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/survey/minimall/wechat/get-userInfo-by-jscode.do&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token literal-property property">jsCode</span><span class="token operator">:</span> code<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">const</span> openId <span class="token operator">=</span> res<span class="token punctuation">.</span>result<span class="token punctuation">.</span>openId\n\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;store&#39;</span><span class="token punctuation">,</span> store<span class="token punctuation">)</span>\n  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;refreshState&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>result<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> openId\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">post</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> isNotJoinDomain <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> ifHideLoading <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">showLoading</span><span class="token punctuation">(</span>ifHideLoading<span class="token punctuation">)</span>\n  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>\n    url<span class="token punctuation">,</span>\n    data<span class="token punctuation">,</span>\n    timeout<span class="token punctuation">,</span>\n    isNotJoinDomain\n  <span class="token punctuation">}</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">request</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n    <span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> res\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">throw</span> e\n  <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> ifHideLoading <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">showLoading</span><span class="token punctuation">(</span>ifHideLoading<span class="token punctuation">)</span>\n  <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>\n    url<span class="token punctuation">,</span>\n    timeout<span class="token punctuation">,</span>\n    data<span class="token punctuation">,</span>\n    <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token comment">// \u53D6\u6D88\u4E0A\u6B21\u672A\u5B8C\u6210\u7684\u8BF7\u6C42</span>\n      <span class="token literal-property property">cancel</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token comment">// \u9ED8\u8BA4\u91CD\u8BD53\u6B21</span>\n      <span class="token comment">// retry: 3</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// #ifndef H5</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>openId<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    data<span class="token punctuation">.</span>openId <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getOpenId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">// #endif</span>\n  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">null</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">request</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// \u9ED8\u8BA4\u91CD\u8BD53\u6B21</span>\n    <span class="token keyword">const</span> retryController <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RetryController</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> options<span class="token punctuation">)</span>\n    res <span class="token operator">=</span> <span class="token keyword">await</span> retryController<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> res\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getCommon</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> header<span class="token punctuation">,</span> timeout<span class="token punctuation">,</span> isNotJoinDomain <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> ifHideLoading <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token function">showLoading</span><span class="token punctuation">(</span>ifHideLoading<span class="token punctuation">)</span>\n  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">null</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>\n      url<span class="token punctuation">,</span>\n      data<span class="token punctuation">,</span>\n      header<span class="token punctuation">,</span>\n      timeout<span class="token punctuation">,</span>\n      isNotJoinDomain\n    <span class="token punctuation">}</span>\n    res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">request</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>\n    <span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> res\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br></div></div><h3 id="storage-js-\u7F13\u5B58\u65B9\u6CD5\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#storage-js-\u7F13\u5B58\u65B9\u6CD5\u5C01\u88C5" aria-hidden="true">#</a> storage.js \u7F13\u5B58\u65B9\u6CD5\u5C01\u88C5</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u53C2\u8003\uFF1Ahttps://uniapp.dcloud.io/api/storage/storage?id=setstorage</span>\n\n<span class="token comment">// \u5904\u7406\u4ECE\u7F13\u5B58\u63D0\u53D6\u51FA\u6765\u7684\u6570\u636E</span>\n<span class="token keyword">function</span> <span class="token function">handleStr</span><span class="token punctuation">(</span><span class="token parameter">objectStr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> returnObj <span class="token operator">=</span> <span class="token keyword">null</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>objectStr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;obj-&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    returnObj <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>objectStr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>objectStr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;str-&#39;</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    returnObj <span class="token operator">=</span> objectStr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> returnObj\n<span class="token punctuation">}</span>\n\n<span class="token comment">// \u5904\u7406\u5B58\u5165\u7F13\u5B58\u7684\u6570\u636E</span>\n<span class="token keyword">function</span> <span class="token function">handleData</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    value <span class="token operator">=</span> <span class="token string">&#39;obj-&#39;</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    value <span class="token operator">=</span> <span class="token string">&#39;str-&#39;</span> <span class="token operator">+</span> data\n  <span class="token punctuation">}</span>\n  <span class="token keyword">return</span> value\n<span class="token punctuation">}</span>\n\n<span class="token comment">// \u5B58\u5165\u7F13\u5B58</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">setStorage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> value <span class="token operator">=</span> <span class="token function">handleData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    uni<span class="token punctuation">.</span><span class="token function">setStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// error</span>\n    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\u8BBE\u7F6E\u7F13\u5B58</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u51FA\u9519\u4E86</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// \u8BFB\u53D6\u7F13\u5B58</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getStorage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> value <span class="token operator">=</span> uni<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token function">handleStr</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// error</span>\n    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\u83B7\u53D6\u7F13\u5B58</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u51FA\u9519\u4E86</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// \u5220\u9664\u7F13\u5B58</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">removeStorage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    uni<span class="token punctuation">.</span><span class="token function">removeStorageSync</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// error</span>\n    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\u5220\u9664\u7F13\u5B58</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u51FA\u9519\u4E86</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// \u6E05\u9664\u6240\u6709\u7F13\u5B58</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">clearStorage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">try</span> <span class="token punctuation">{</span>\n    uni<span class="token punctuation">.</span><span class="token function">clearStorageSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// error</span>\n    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u6E05\u7A7A\u7F13\u5B58\u51FA\u9519\u4E86&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h3 id="util-js" tabindex="-1"><a class="header-anchor" href="#util-js" aria-hidden="true">#</a> util.js</h3><p>\u5B58\u653E\u5176\u4ED6\u516C\u5171\u65B9\u6CD5\uFF0C\u4F8B\u5982\u65F6\u95F4\u683C\u5F0F\u8F6C\u6362\u7B49</p><h2 id="\u62D3\u5C55" tabindex="-1"><a class="header-anchor" href="#\u62D3\u5C55" aria-hidden="true">#</a> \u62D3\u5C55</h2><h2 id="\u6839\u636E\u9700\u6C42\u4FEE\u6539\u6846\u67B6" tabindex="-1"><a class="header-anchor" href="#\u6839\u636E\u9700\u6C42\u4FEE\u6539\u6846\u67B6" aria-hidden="true">#</a> \u6839\u636E\u9700\u6C42\u4FEE\u6539\u6846\u67B6</h2>', 7);
const _hoisted_105 = {
  href: "https://thoughts.aliyun.com/share/61939a0ebdc2c4001aea002d#title=information-pages",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_106 = /* @__PURE__ */ createTextVNode("information-pages\u5C0F\u7A0B\u5E8F\u6846\u67B6\u786E\u5B9A\u6587\u6863");
const _hoisted_107 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u9047\u5230\u7684\u5751\u70B9",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u9047\u5230\u7684\u5751\u70B9",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u9047\u5230\u7684\u5751\u70B9")
], -1);
const _hoisted_108 = {
  href: "https://thoughts.aliyun.com/share/617a014cc1a410001add80a4#title=information-pages%E6%96%87%E6%A1%A3",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_109 = /* @__PURE__ */ createTextVNode("\u9047\u5230\u7684\u5751\u70B9");
const _hoisted_110 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u793E\u533A\u6C42\u52A9",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u793E\u533A\u6C42\u52A9",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u793E\u533A\u6C42\u52A9")
], -1);
const _hoisted_111 = {
  href: "https://ask.dcloud.net.cn/explore/category-12",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_112 = /* @__PURE__ */ createTextVNode("https://ask.dcloud.net.cn/explore/category-12");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      _hoisted_4,
      createBaseVNode("a", _hoisted_5, [
        _hoisted_6,
        createVNode(_component_ExternalLinkIcon)
      ]),
      _hoisted_7
    ]),
    _hoisted_8,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_19, [
        _hoisted_20,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_21, [
        _hoisted_22,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_23,
    createBaseVNode("table", null, [
      _hoisted_29,
      createBaseVNode("tbody", null, [
        createBaseVNode("tr", null, [
          _hoisted_30,
          createBaseVNode("td", null, [
            _hoisted_31,
            createBaseVNode("a", _hoisted_32, [
              _hoisted_33,
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ]),
        _hoisted_34,
        _hoisted_35,
        _hoisted_36,
        _hoisted_37,
        _hoisted_38,
        _hoisted_39,
        _hoisted_40,
        _hoisted_41,
        _hoisted_42,
        _hoisted_43,
        _hoisted_44,
        _hoisted_45,
        _hoisted_46,
        _hoisted_47,
        _hoisted_48
      ])
    ]),
    _hoisted_49,
    _hoisted_50,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_51, [
        _hoisted_52,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_53,
    _hoisted_54,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_55, [
        _hoisted_56,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_57,
    _hoisted_58,
    _hoisted_59,
    _hoisted_60,
    _hoisted_61,
    _hoisted_62,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_63, [
        _hoisted_64,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_65,
    _hoisted_66,
    createBaseVNode("table", null, [
      _hoisted_67,
      createBaseVNode("tbody", null, [
        _hoisted_68,
        createBaseVNode("tr", null, [
          _hoisted_69,
          _hoisted_70,
          createBaseVNode("td", null, [
            _hoisted_71,
            createBaseVNode("a", _hoisted_72, [
              _hoisted_73,
              createVNode(_component_ExternalLinkIcon)
            ]),
            _hoisted_74,
            _hoisted_75
          ])
        ]),
        createBaseVNode("tr", null, [
          _hoisted_76,
          _hoisted_77,
          createBaseVNode("td", null, [
            _hoisted_78,
            createBaseVNode("a", _hoisted_79, [
              _hoisted_80,
              createVNode(_component_ExternalLinkIcon)
            ]),
            _hoisted_81,
            _hoisted_82
          ])
        ]),
        _hoisted_83,
        _hoisted_84,
        _hoisted_85
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_86, [
        _hoisted_87,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_88,
    _hoisted_89,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_90, [
        _hoisted_91,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_92,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_96, [
        _hoisted_97,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_98,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_105, [
        _hoisted_106,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_107,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_108, [
        _hoisted_109,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_110,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_111, [
        _hoisted_112,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ], 64);
}
var _________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u7B2C\u4E94\u5468\u7684\u524D\u7AEF\u57F9\u8BAD.html.vue"]]);
export { _________html as default };

import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, F as Fragment, d as createTextVNode, e as createStaticVNode } from "./app.050d295a.js";
var _imports_0 = "/frontend-md/images/auto/vue\u54CD\u5E94\u5F0F\u539F\u7406/image1.png";
var _imports_1 = "/frontend-md/images/auto/vue\u54CD\u5E94\u5F0F\u539F\u7406/image2.png";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("h1", {
  id: "vue\u54CD\u5E94\u5F0F\u539F\u7406",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#vue\u54CD\u5E94\u5F0F\u539F\u7406",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" vue\u54CD\u5E94\u5F0F\u539F\u7406")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, "\u7B80\u5355\u5B9E\u73B0\u7684\u4F8B\u5B50", -1);
const _hoisted_3 = {
  href: "/code.zip",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode("code.zip");
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", null, "v2.6\u6E90\u7801", -1);
const _hoisted_6 = {
  href: "/vue-2.6.zip",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("vue-2.6.zip");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<h2 id="vue-\u6570\u636E\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#vue-\u6570\u636E\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> Vue \u6570\u636E\u53CC\u5411\u7ED1\u5B9A</h2><p>Vue \u6700\u72EC\u7279\u7684\u7279\u6027\u4E4B\u4E00\uFF0C\u662F\u5176\u975E\u4FB5\u5165\u6027\u7684\u54CD\u5E94\u5F0F\u7CFB\u7EDF\u3002\u6570\u636E\u6A21\u578B\u4EC5\u4EC5\u662F\u666E\u901A\u7684 JavaScript \u5BF9\u8C61\u3002\u800C\u5F53\u4F60\u4FEE\u6539\u5B83\u4EEC\u65F6\uFF0C\u89C6\u56FE\u4F1A\u8FDB\u884C\u66F4\u65B0\u3002\u8FD9\u4F7F\u5F97\u72B6\u6001\u7BA1\u7406\u975E\u5E38\u7B80\u5355\u76F4\u63A5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> <span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div&gt;\n    &lt;div&gt;\u6D88\u606F&lt;/div&gt;\n    &lt;div&gt;{{ msg }}&lt;/div&gt;\n    &lt;input v-model=&quot;msg&quot;&gt;\n    &lt;button @click=&quot;changeMsg&quot;&gt;\u6539\u53D8\u503C&lt;/button&gt;\n  &lt;/div&gt;</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">changeMsg</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>msg <span class="token operator">=</span> <span class="token string">&#39;hello world&#39;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a> \u539F\u7406</h2><p>\u628A\u4E00\u4E2A\u666E\u901A\u7684 JavaScript \u5BF9\u8C61\u4F20\u5165 Vue \u5B9E\u4F8B\u4F5C\u4E3A data \u9009\u9879\uFF0CVue \u5C06\u904D\u5386\u6B64\u5BF9\u8C61\u6240\u6709\u7684 property\uFF0C\u5E76\u4F7F\u7528 Object.defineProperty \u628A\u8FD9\u4E9B property \u5168\u90E8\u8F6C\u4E3A getter/setter\u3002Object.defineProperty \u662F ES5 \u4E2D\u4E00\u4E2A\u65E0\u6CD5 shim \u7684\u7279\u6027\uFF0C\u8FD9\u4E5F\u5C31\u662F Vue \u4E0D\u652F\u6301 IE8 \u4EE5\u53CA\u66F4\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u7684\u539F\u56E0\u3002</p><p>\u5728 property \u88AB\u8BBF\u95EE\u548C\u4FEE\u6539\u65F6\u901A\u77E5\u53D8\u66F4\uFF0C\u6BCF\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u90FD\u5BF9\u5E94\u4E00\u4E2A watcher \u5B9E\u4F8B\uFF0C\u5B83\u4F1A\u5728\u7EC4\u4EF6\u6E32\u67D3\u7684\u8FC7\u7A0B\u4E2D\u628A\u201C\u63A5\u89E6\u201D\u8FC7\u7684\u6570\u636E property \u8BB0\u5F55\u4E3A\u4F9D\u8D56\u3002\u4E4B\u540E\u5F53\u4F9D\u8D56\u9879\u7684 setter \u89E6\u53D1\u65F6\uFF0C\u4F1A\u901A\u77E5 watcher\uFF0C\u4ECE\u800C\u4F7F\u5B83\u5173\u8054\u7684\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u3002</p><h3 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a> Object.defineProperty</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>\n<span class="token punctuation">}</span>\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BBF\u95EE\u4E86name&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> obj<span class="token punctuation">.</span>name\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BBE\u7F6Ename&#39;</span><span class="token punctuation">)</span>\n    obj<span class="token punctuation">.</span>name <span class="token operator">=</span> value\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nObject<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> value <span class="token operator">=</span> obj<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span>\n  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BBF\u95EE\u4E86age&#39;</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> value\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>newValue <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E0D\u53EF\u5C0F\u4E8E18\u5C81&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BBE\u7F6Eage&#39;</span><span class="token punctuation">)</span>\n    value <span class="token operator">=</span> newValue\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>name<span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>age<span class="token punctuation">)</span>\nobj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;\u674E\u56DB&#39;</span>\n<span class="token comment">// obj.age = 10</span>\nobj<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">20</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h3 id="\u7B80\u5355\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5B9E\u73B0" aria-hidden="true">#</a> \u7B80\u5355\u5B9E\u73B0</h3>', 9);
const _hoisted_17 = {
  href: "https://thoughts.aliyun.com/share/616e22c6fb3343001a2f685b#title=vue%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_18 = /* @__PURE__ */ createTextVNode("\u7B80\u5355\u5B9E\u73B0");
const _hoisted_19 = /* @__PURE__ */ createStaticVNode('<h3 id="v2-6\u6E90\u7801-\u6570\u636E\u54CD\u5E94\u7B80\u5355\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#v2-6\u6E90\u7801-\u6570\u636E\u54CD\u5E94\u7B80\u5355\u4ECB\u7ECD" aria-hidden="true">#</a> v2.6\u6E90\u7801-\u6570\u636E\u54CD\u5E94\u7B80\u5355\u4ECB\u7ECD</h3><p>src\\core\\observer</p><h3 id="v2-6\u6570\u7EC4\u65B9\u6CD5\u91CD\u5199" tabindex="-1"><a class="header-anchor" href="#v2-6\u6570\u7EC4\u65B9\u6CD5\u91CD\u5199" aria-hidden="true">#</a> v2.6\u6570\u7EC4\u65B9\u6CD5\u91CD\u5199</h3><p>src\\core\\observer\\array.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> def <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../util/index&#39;</span>\n<span class="token keyword">const</span> arrayProto <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype\n<span class="token keyword">export</span> <span class="token keyword">const</span> arrayMethods <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>arrayProto<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> methodsToPatch <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string">&#39;push&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;pop&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;shift&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;unshift&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;splice&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;sort&#39;</span><span class="token punctuation">,</span>\n  <span class="token string">&#39;reverse&#39;</span>\n<span class="token punctuation">]</span>\n\nmethodsToPatch<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// cache original method</span>\n  <span class="token keyword">const</span> original <span class="token operator">=</span> arrayProto<span class="token punctuation">[</span>method<span class="token punctuation">]</span>\n  <span class="token function">def</span><span class="token punctuation">(</span>arrayMethods<span class="token punctuation">,</span> method<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token function">mutator</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">original</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n    <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>__ob__\n    <span class="token keyword">let</span> inserted\n    <span class="token keyword">switch</span> <span class="token punctuation">(</span>method<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">case</span> <span class="token string">&#39;push&#39;</span><span class="token operator">:</span>\n      <span class="token keyword">case</span> <span class="token string">&#39;unshift&#39;</span><span class="token operator">:</span>\n        inserted <span class="token operator">=</span> args\n        <span class="token keyword">break</span>\n      <span class="token keyword">case</span> <span class="token string">&#39;splice&#39;</span><span class="token operator">:</span>\n        inserted <span class="token operator">=</span> args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>\n        <span class="token keyword">break</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>inserted<span class="token punctuation">)</span> ob<span class="token punctuation">.</span><span class="token function">observeArray</span><span class="token punctuation">(</span>inserted<span class="token punctuation">)</span>\n    <span class="token comment">// notify change</span>\n    ob<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> result\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h3 id="v2-6-set\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#v2-6-set\u65B9\u6CD5" aria-hidden="true">#</a> v2.6 $set\u65B9\u6CD5</h3><p><img src="' + _imports_0 + '" alt=""></p><p>src\\core\\observer\\index.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">set</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span> <span class="token operator">|</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">key</span><span class="token operator">:</span> any<span class="token punctuation">,</span> <span class="token literal-property property">val</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>\n    <span class="token punctuation">(</span><span class="token function">isUndef</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isPrimitive</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Cannot set reactive property on undefined, null, or primitive value: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>target<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">isValidArrayIndex</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    target<span class="token punctuation">.</span>length <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>target<span class="token punctuation">.</span>length<span class="token punctuation">,</span> key<span class="token punctuation">)</span>\n    target<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> val\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token keyword">in</span> target <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val\n    <span class="token keyword">return</span> val\n  <span class="token punctuation">}</span>\n  <span class="token keyword">const</span> ob <span class="token operator">=</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> any<span class="token punctuation">)</span><span class="token punctuation">.</span>__ob__\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>_isVue <span class="token operator">||</span> <span class="token punctuation">(</span>ob <span class="token operator">&amp;&amp;</span> ob<span class="token punctuation">.</span>vmCount<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token function">warn</span><span class="token punctuation">(</span>\n      <span class="token string">&#39;Avoid adding reactive properties to a Vue instance or its root $data &#39;</span> <span class="token operator">+</span>\n      <span class="token string">&#39;at runtime - declare it upfront in the data option.&#39;</span>\n    <span class="token punctuation">)</span>\n    <span class="token keyword">return</span> val\n  <span class="token punctuation">}</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ob<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val\n    <span class="token keyword">return</span> val\n  <span class="token punctuation">}</span>\n  <span class="token function">defineReactive</span><span class="token punctuation">(</span>ob<span class="token punctuation">.</span>value<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span>\n  ob<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> val\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="v2-6-forceupdate\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#v2-6-forceupdate\u65B9\u6CD5" aria-hidden="true">#</a> v2.6 $forceUpdate\u65B9\u6CD5</h3><p><img src="' + _imports_1 + '" alt=""></p><p>src\\core\\instance`lifecycle.js`</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$forceUpdate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token literal-property property">vm</span><span class="token operator">:</span> Component <span class="token operator">=</span> <span class="token keyword">this</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_watcher<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      vm<span class="token punctuation">.</span>_watcher<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="vue\u5165\u53E3\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#vue\u5165\u53E3\u6587\u4EF6" aria-hidden="true">#</a> Vue\u5165\u53E3\u6587\u4EF6</h3><p>src\\core\\instance\\index.js</p><h3 id="vue3\u7684\u6570\u636E\u76D1\u542C" tabindex="-1"><a class="header-anchor" href="#vue3\u7684\u6570\u636E\u76D1\u542C" aria-hidden="true">#</a> Vue3\u7684\u6570\u636E\u76D1\u542C</h3><p>Proxy \u7528\u4E8E\u4FEE\u6539\u67D0\u4E9B\u64CD\u4F5C\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u5728\u76EE\u6807\u5BF9\u8C61\u4E4B\u524D\u67B6\u8BBE\u4E00\u5C42\u201C\u62E6\u622A\u201D\uFF0C\u5916\u754C\u5BF9\u8BE5\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u90FD\u5FC5\u987B\u5148\u901A\u8FC7\u8FD9\u5C42\u62E6\u622A\uFF0C\u56E0\u6B64\u63D0\u4F9B\u4E86\u4E00\u79CD\u673A\u5236\uFF0C\u53EF\u4EE5\u5BF9\u5916\u754C\u7684\u8BBF\u95EE\u8FDB\u884C\u8FC7\u6EE4\u548C\u6539\u5199\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u5F20\u4E09&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj1<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BBF\u95EE&#39;</span> <span class="token operator">+</span> key<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BBF\u95EE&#39;</span> <span class="token operator">+</span> key<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nobj1<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;\u674E\u56DB&#39;</span>\n\nobj2<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;\u738B\u4E94&#39;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u53C2\u8003\u6587\u732E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u732E" aria-hidden="true">#</a> \u53C2\u8003\u6587\u732E</h2>', 19);
const _hoisted_38 = {
  href: "https://cn.vuejs.org/v2/guide/reactivity.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_39 = /* @__PURE__ */ createTextVNode("\u6DF1\u5165\u54CD\u5E94\u5F0F\u539F\u7406");
const _hoisted_40 = {
  href: "https://juejin.cn/post/6844903903822086151",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_41 = /* @__PURE__ */ createTextVNode("0 \u5230 1 \u638C\u63E1\uFF1AVue \u6838\u5FC3\u4E4B\u6570\u636E\u53CC\u5411\u7ED1\u5B9A");
const _hoisted_42 = {
  href: "https://juejin.cn/post/6844903960046731277",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_43 = /* @__PURE__ */ createTextVNode("\u4E94\u5206\u949F\u770B\u61C2Vue3-\u6570\u636E\u7ED1\u5B9A");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock(Fragment, null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_3, [
        _hoisted_4,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_5,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_6, [
        _hoisted_7,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_8,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_17, [
        _hoisted_18,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_19,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_38, [
        _hoisted_39,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_40, [
        _hoisted_41,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_42, [
        _hoisted_43,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ], 64);
}
var vue______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "vue\u54CD\u5E94\u5F0F\u539F\u7406.html.vue"]]);
export { vue______html as default };

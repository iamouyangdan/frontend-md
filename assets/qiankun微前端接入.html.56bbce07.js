import { _ as _export_sfc, e as createStaticVNode } from "./app.050d295a.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="qiankun\u5FAE\u524D\u7AEF\u63A5\u5165" tabindex="-1"><a class="header-anchor" href="#qiankun\u5FAE\u524D\u7AEF\u63A5\u5165" aria-hidden="true">#</a> qiankun\u5FAE\u524D\u7AEF\u63A5\u5165</h1><p>https://qiankun.umijs.org/zh/guide</p><p>\u6539\u9020\u6B65\u9AA4\uFF1A</p><ol><li>\u4FEE\u6539package.json\u7684name\u5B57\u6BB5\u3002</li><li>\u4FEE\u6539vue.config.js\uFF0C\u589E\u52A0configureWebpack:</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> name <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;../package.json&#39;</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>  \n	<span class="token operator">...</span><span class="token punctuation">,</span>  \n	<span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    	<span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      		<span class="token comment">// \u628A\u5B50\u5E94\u7528\u6253\u5305\u6210 umd \u5E93\u683C\u5F0F</span>\n      		<span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-[name]</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n      		<span class="token literal-property property">libraryTarget</span><span class="token operator">:</span> <span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>\n      		<span class="token literal-property property">jsonpFunction</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">webpackJsonp_</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n    	<span class="token punctuation">}</span>\n  	<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ol start="3"><li><p>\u4FEE\u6539main.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&#39;../../public-path&#39;</span>\n<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> routes <span class="token keyword">from</span> <span class="token string">&#39;@/router&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./index.vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> store <span class="token keyword">as</span> commonStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;common&#39;</span>\n<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;@/store&#39;</span>\n<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>\n\n<span class="token keyword">import</span> <span class="token string">&#39;@/assets/styles/basic.scss&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;@/assets/styles/global.scss&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;@/assets/styles/atom.scss&#39;</span>\n\n<span class="token keyword">import</span> directive <span class="token keyword">from</span> <span class="token string">&#39;@/utils/directive&#39;</span>\n<span class="token keyword">import</span> Vtip <span class="token keyword">from</span> <span class="token string">&#39;vtip&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;vtip/lib/index.min.css&#39;</span>\n\n<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;@/components&#39;</span>\n\n<span class="token keyword">import</span> LUi <span class="token keyword">from</span> <span class="token string">&#39;@linkkap/l-ui&#39;</span>\n<span class="token keyword">import</span> <span class="token string">&#39;@linkkap/l-ui/lib/l-ui.css&#39;</span>\n\n<span class="token comment">// vue\u64CD\u4F5Ccookies: https://www.jianshu.com/p/60c13168cc8f</span>\n<span class="token keyword">import</span> VueCookies <span class="token keyword">from</span> <span class="token string">&#39;vue-cookies&#39;</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueCookies<span class="token punctuation">)</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>LUi<span class="token punctuation">)</span>\n\ndirective<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>Vue<span class="token punctuation">)</span>\n\nVue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Components<span class="token punctuation">)</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vtip<span class="token punctuation">.</span>directive<span class="token punctuation">)</span>\n\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">install</span><span class="token punctuation">(</span><span class="token parameter">Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$toPage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span> obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        obj <span class="token operator">=</span> val\n        val <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span>path\n      <span class="token punctuation">}</span>\n      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>$router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          <span class="token literal-property property">path</span><span class="token operator">:</span> val<span class="token punctuation">,</span>\n          <span class="token literal-property property">query</span><span class="token operator">:</span> obj <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nVue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token keyword">let</span> instance <span class="token operator">=</span> <span class="token keyword">null</span>\n\n<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">{</span> container<span class="token punctuation">,</span> routerBase <span class="token punctuation">}</span> <span class="token operator">=</span> props\n  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;routerBase&#39;</span><span class="token punctuation">,</span> routerBase<span class="token punctuation">,</span> container<span class="token punctuation">)</span>\n  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// base: window.__POWERED_BY_QIANKUN__ ? routerBase : p<wbr>rocess.env.BASE_URL,</span>\n    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>\n    routes\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    router<span class="token punctuation">,</span>\n    store<span class="token punctuation">,</span>\n    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">h</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>container <span class="token operator">?</span> container<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// \u8FD9\u91CC\u662F\u5B50\u5E94\u7528\u72EC\u7ACB\u8FD0\u884C\u7684\u73AF\u5883\uFF0C\u5B9E\u73B0\u5B50\u5E94\u7528\u7684\u767B\u5F55\u903B\u8F91</span>\n\n  <span class="token comment">// \u72EC\u7ACB\u8FD0\u884C\u65F6\uFF0C\u4E5F\u6CE8\u518C\u4E00\u4E2A\u540D\u4E3Aglobal\u7684store module</span>\n  commonStore<span class="token punctuation">.</span><span class="token function">globalRegister</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span>\n  <span class="token comment">// \u6A21\u62DF\u767B\u5F55\u540E\uFF0C\u5B58\u50A8\u7528\u6237\u4FE1\u606F\u5230global module</span>\n  <span class="token keyword">const</span> userInfo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;\u6211\u662F\u72EC\u7ACB\u8FD0\u884C\u65F6\u5C97\u4F4D\u4EF7\u503C\u8BC4\u4F30&#39;</span> <span class="token punctuation">}</span> <span class="token comment">// \u5047\u8BBE\u767B\u5F55\u540E\u53D6\u5230\u7684\u7528\u6237\u4FE1\u606F</span>\n  store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">&#39;global/setGlobalState&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> userInfo <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">bootstrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;[vue] vue app bootstraped&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">mount</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;[vue] props from main framework&#39;</span><span class="token punctuation">,</span> props<span class="token punctuation">)</span>\n\n  commonStore<span class="token punctuation">.</span><span class="token function">globalRegister</span><span class="token punctuation">(</span>store<span class="token punctuation">,</span> props<span class="token punctuation">)</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  instance<span class="token punctuation">.</span><span class="token function">$destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  instance<span class="token punctuation">.</span>$el<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n  instance <span class="token operator">=</span> <span class="token keyword">null</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br></div></div></li></ol><p><strong>public-path.js</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* eslint-disable */</span>\n<span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>__POWERED_BY_QIANKUN__<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// eslint-disable-next-line</span>\n      __webpack_public_path__ <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">//localhost:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_PORT</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n      <span class="token keyword">return</span>\n    <span class="token punctuation">}</span>\n    console<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;__INJECTED_PUBLIC_PATH_BY_QIANKUN__&#39;</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>__INJECTED_PUBLIC_PATH_BY_QIANKUN__<span class="token punctuation">)</span>\n    <span class="token comment">// eslint-disable-next-line</span>\n    __webpack_public_path__ <span class="token operator">=</span> window<span class="token punctuation">.</span>__INJECTED_PUBLIC_PATH_BY_QIANKUN__\n    <span class="token comment">// __webpack_public_path__ = `${p<wbr>rocess.env.BASE_URL}/`</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>https://blog.csdn.net/cyyy1223/article/details/111995277</p><h1 id="\u5F85\u5B8C\u5584\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u5F85\u5B8C\u5584\u5185\u5BB9" aria-hidden="true">#</a> \u5F85\u5B8C\u5584\u5185\u5BB9</h1><ol><li>\u5FAE\u524D\u7AEF\u6846\u67B6\u63A5\u5165\u3002</li><li>\u641C\u7D22\u6846\u4EA4\u4E92\u4F18\u5316\uFF0C\u5EFA\u8BAE\u641C\u7D22\u6846\u652F\u6301\u56DE\u8F66\u952E\u641C\u7D22\uFF0C\u6E05\u7A7A\u641C\u7D22\u6846\u5185\u5BB9\u65F6\u89E6\u53D1\u641C\u7D22\u3002</li><li>\u4E0B\u62C9\u9009\u62E9\u6846\u652F\u6301\u53EF\u641C\u7D22\u3002</li><li>\u52A0\u8F7D\u8868\u683C\u6570\u636E\u8FC7\u7A0B\u4E2D\uFF0C\u589E\u52A0\u5C40\u90E8\u52A0\u8F7D\u52A8\u753B\u3002</li><li>\u516C\u7528\u8868\u683C\u81EA\u52A8\u6536\u96C6\u8FC7\u6EE4\u5185\u5BB9\u3002</li></ol>', 11);
function _sfc_render(_ctx, _cache) {
  return _hoisted_1;
}
var qiankun______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "qiankun\u5FAE\u524D\u7AEF\u63A5\u5165.html.vue"]]);
export { qiankun______html as default };

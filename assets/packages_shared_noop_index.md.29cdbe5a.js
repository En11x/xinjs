import{_ as s,c as a,o as n,d as o}from"./app.bbab798a.js";const C=JSON.parse('{"title":"Noop","description":"","frontmatter":{"category":"Shared"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Code","slug":"code","link":"#code","children":[]}],"relativePath":"packages/shared/noop/index.md"}'),e={name:"packages/shared/noop/index.md"},l=o(`<h1 id="noop" tabindex="-1">Noop <a class="header-anchor" href="#noop" aria-hidden="true">#</a></h1><p>noop \u51FD\u6570</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> noop</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">noopAsync</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">nooNull </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> from &#39;@xinjs/shared&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">noop</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">noopAsync</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">noopNull</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,6),p=[l];function c(t,r,i,d,y,A){return n(),a("div",null,p)}const F=s(e,[["render",c]]);export{C as __pageData,F as default};
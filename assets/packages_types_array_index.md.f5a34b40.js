import{_ as s,c as a,o as e,d as n}from"./app.bbab798a.js";const _=JSON.parse('{"title":"Type","description":"","frontmatter":{"category":"Types"},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":2,"title":"Code","slug":"code","link":"#code","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[]}],"relativePath":"packages/types/array/index.md"}'),l={name:"packages/types/array/index.md"},t=n(`<h1 id="type" tabindex="-1">Type <a class="header-anchor" href="#type" aria-hidden="true">#</a></h1><p>ts \u5404\u79CD\u5E38\u7528\u7C7B\u578B\u96C6\u5408</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/// &lt;reference types=&quot;@xinjs/types&quot; /&gt;;</span></span>
<span class="line"></span></code></pre></div><h2 id="code" tabindex="-1">Code <a class="header-anchor" href="#code" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ArrayItrm</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">T</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">T</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">infer</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">V</span><span style="color:#A6ACCD;">)[] </span><span style="color:#89DDFF;">?</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">V</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">never</span></span>
<span class="line"></span></code></pre></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h2>`,7),p=[t];function o(r,c,d,i,y,C){return e(),a("div",null,p)}const A=s(l,[["render",o]]);export{_ as __pageData,A as default};
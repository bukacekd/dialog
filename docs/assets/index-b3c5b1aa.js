var Ue=(c,e)=>()=>(e||c((e={exports:{}}).exports,e),e.exports);var we=(c,e,s)=>{if(!e.has(c))throw TypeError("Cannot "+s)};var m=(c,e,s)=>(we(c,e,"read from private field"),s?s.call(c):e.get(c)),f=(c,e,s)=>{if(e.has(c))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(c):e.set(c,s)},k=(c,e,s,l)=>(we(c,e,"write to private field"),l?l.call(c,s):e.set(c,s),s);var y=(c,e,s)=>(we(c,e,"access private method"),s);/* empty css                    *//* empty css                    *//* empty css                         */var Xe=Ue((et,ue)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const p of n)if(p.type==="childList")for(const F of p.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&l(F)}).observe(document,{childList:!0,subtree:!0});function s(n){const p={};return n.integrity&&(p.integrity=n.integrity),n.referrerPolicy&&(p.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?p.credentials="include":n.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(n){if(n.ep)return;n.ep=!0;const p=s(n);fetch(n.href,p)}})();var Ge=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},u=function(c){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,l={},n={manual:c.Prism&&c.Prism.manual,disableWorkerMessageHandler:c.Prism&&c.Prism.disableWorkerMessageHandler,util:{encode:function a(t){return t instanceof p?new p(t.type,a(t.content),t.alias):Array.isArray(t)?t.map(a):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).slice(8,-1)},objId:function(a){return a.__id||Object.defineProperty(a,"__id",{value:++s}),a.__id},clone:function a(t,r){var i,o;switch(r=r||{},n.util.type(t)){case"Object":if(o=n.util.objId(t),r[o])return r[o];for(var g in i={},r[o]=i,t)t.hasOwnProperty(g)&&(i[g]=a(t[g],r));return i;case"Array":return o=n.util.objId(t),r[o]?r[o]:(i=[],r[o]=i,t.forEach(function(d,h){i[h]=a(d,r)}),i);default:return t}},getLanguage:function(a){for(;a;){var t=e.exec(a.className);if(t)return t[1].toLowerCase();a=a.parentElement}return"none"},setLanguage:function(a,t){a.className=a.className.replace(RegExp(e,"gi"),""),a.classList.add("language-"+t)},currentScript:function(){if(typeof document>"u")return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var a=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(a){var t=document.getElementsByTagName("script");for(var r in t)if(t[r].src==a)return t[r]}return null}},isActive:function(a,t,r){for(var i="no-"+t;a;){var o=a.classList;if(o.contains(t))return!0;if(o.contains(i))return!1;a=a.parentElement}return!!r}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(a,t){var r=n.util.clone(n.languages[a]);for(var i in t)r[i]=t[i];return r},insertBefore:function(a,t,r,i){var o=(i=i||n.languages)[a],g={};for(var d in o)if(o.hasOwnProperty(d)){if(d==t)for(var h in r)r.hasOwnProperty(h)&&(g[h]=r[h]);r.hasOwnProperty(d)||(g[d]=o[d])}var v=i[a];return i[a]=g,n.languages.DFS(n.languages,function(b,ee){ee===v&&b!=a&&(this[b]=g)}),g},DFS:function a(t,r,i,o){o=o||{};var g=n.util.objId;for(var d in t)if(t.hasOwnProperty(d)){r.call(t,d,t[d],i||d);var h=t[d],v=n.util.type(h);v!=="Object"||o[g(h)]?v!=="Array"||o[g(h)]||(o[g(h)]=!0,a(h,r,d,o)):(o[g(h)]=!0,a(h,r,null,o))}}},plugins:{},highlightAll:function(a,t){n.highlightAllUnder(document,a,t)},highlightAllUnder:function(a,t,r){var i={callback:r,container:a,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),n.hooks.run("before-all-elements-highlight",i);for(var o,g=0;o=i.elements[g++];)n.highlightElement(o,t===!0,i.callback)},highlightElement:function(a,t,r){var i=n.util.getLanguage(a),o=n.languages[i];n.util.setLanguage(a,i);var g=a.parentElement;g&&g.nodeName.toLowerCase()==="pre"&&n.util.setLanguage(g,i);var d={element:a,language:i,grammar:o,code:a.textContent};function h(b){d.highlightedCode=b,n.hooks.run("before-insert",d),d.element.innerHTML=d.highlightedCode,n.hooks.run("after-highlight",d),n.hooks.run("complete",d),r&&r.call(d.element)}if(n.hooks.run("before-sanity-check",d),(g=d.element.parentElement)&&g.nodeName.toLowerCase()==="pre"&&!g.hasAttribute("tabindex")&&g.setAttribute("tabindex","0"),!d.code)return n.hooks.run("complete",d),void(r&&r.call(d.element));if(n.hooks.run("before-highlight",d),d.grammar)if(t&&c.Worker){var v=new Worker(n.filename);v.onmessage=function(b){h(b.data)},v.postMessage(JSON.stringify({language:d.language,code:d.code,immediateClose:!0}))}else h(n.highlight(d.code,d.grammar,d.language));else h(n.util.encode(d.code))},highlight:function(a,t,r){var i={code:a,grammar:t,language:r};if(n.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),p.stringify(n.util.encode(i.tokens),i.language)},tokenize:function(a,t){var r=t.rest;if(r){for(var i in r)t[i]=r[i];delete t.rest}var o=new B;return Q(o,o.head,a),T(a,o,t,o.head,0),function(g){for(var d=[],h=g.head.next;h!==g.tail;)d.push(h.value),h=h.next;return d}(o)},hooks:{all:{},add:function(a,t){var r=n.hooks.all;r[a]=r[a]||[],r[a].push(t)},run:function(a,t){var r=n.hooks.all[a];if(r&&r.length)for(var i,o=0;i=r[o++];)i(t)}},Token:p};function p(a,t,r,i){this.type=a,this.content=t,this.alias=r,this.length=0|(i||"").length}function F(a,t,r,i){a.lastIndex=t;var o=a.exec(r);if(o&&i&&o[1]){var g=o[1].length;o.index+=g,o[0]=o[0].slice(g)}return o}function T(a,t,r,i,o,g){for(var d in r)if(r.hasOwnProperty(d)&&r[d]){var h=r[d];h=Array.isArray(h)?h:[h];for(var v=0;v<h.length;++v){if(g&&g.cause==d+","+v)return;var b=h[v],ee=b.inside,Le=!!b.lookbehind,je=!!b.greedy,Me=b.alias;if(je&&!b.pattern.global){var Ze=b.pattern.toString().match(/[imsuy]*$/)[0];b.pattern=RegExp(b.pattern.source,Ze+"g")}for(var Te=b.pattern||b,w=i.next,A=o;w!==t.tail&&!(g&&A>=g.reach);A+=w.value.length,w=w.next){var P=w.value;if(t.length>a.length)return;if(!(P instanceof p)){var S,te=1;if(je){if(!(S=F(Te,A,a,Le))||S.index>=a.length)break;var ne=S.index,He=S.index+S[0].length,j=A;for(j+=w.value.length;ne>=j;)j+=(w=w.next).value.length;if(A=j-=w.value.length,w.value instanceof p)continue;for(var R=w;R!==t.tail&&(j<He||typeof R.value=="string");R=R.next)te++,j+=R.value.length;te--,P=a.slice(A,j),S.index-=A}else if(!(S=F(Te,0,P,Le)))continue;ne=S.index;var ae=S[0],ye=P.slice(0,ne),Pe=P.slice(ne+ae.length),be=A+P.length;g&&be>g.reach&&(g.reach=be);var se=w.prev;if(ye&&(se=Q(t,se,ye),A+=ye.length),Re(t,se,te),w=Q(t,se,new p(d,ee?n.tokenize(ae,ee):ae,Me,ae)),Pe&&Q(t,w,Pe),te>1){var ve={cause:d+","+v,reach:be};T(a,t,r,w.prev,A,ve),g&&ve.reach>g.reach&&(g.reach=ve.reach)}}}}}}function B(){var a={value:null,prev:null,next:null},t={value:null,prev:a,next:null};a.next=t,this.head=a,this.tail=t,this.length=0}function Q(a,t,r){var i=t.next,o={value:r,prev:t,next:i};return t.next=o,i.prev=o,a.length++,o}function Re(a,t,r){for(var i=t.next,o=0;o<r&&i!==a.tail;o++)i=i.next;t.next=i,i.prev=t,a.length-=o}if(c.Prism=n,p.stringify=function a(t,r){if(typeof t=="string")return t;if(Array.isArray(t)){var i="";return t.forEach(function(v){i+=a(v,r)}),i}var o={type:t.type,content:a(t.content,r),tag:"span",classes:["token",t.type],attributes:{},language:r},g=t.alias;g&&(Array.isArray(g)?Array.prototype.push.apply(o.classes,g):o.classes.push(g)),n.hooks.run("wrap",o);var d="";for(var h in o.attributes)d+=" "+h+'="'+(o.attributes[h]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+d+">"+o.content+"</"+o.tag+">"},!c.document)return c.addEventListener&&(n.disableWorkerMessageHandler||c.addEventListener("message",function(a){var t=JSON.parse(a.data),r=t.language,i=t.code,o=t.immediateClose;c.postMessage(n.highlight(i,n.languages[r],r)),o&&c.close()},!1)),n;var q=n.util.currentScript();function fe(){n.manual||n.highlightAll()}if(q&&(n.filename=q.src,q.hasAttribute("data-manual")&&(n.manual=!0)),!n.manual){var Se=document.readyState;Se==="loading"||Se==="interactive"&&q&&q.defer?document.addEventListener("DOMContentLoaded",fe):window.requestAnimationFrame?window.requestAnimationFrame(fe):window.setTimeout(fe,16)}return n}(Ge);typeof ue<"u"&&ue.exports&&(ue.exports=u),typeof global<"u"&&(global.Prism=u);u.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},u.languages.markup.tag.inside["attr-value"].inside.entity=u.languages.markup.entity,u.languages.markup.doctype.inside["internal-subset"].inside=u.languages.markup,u.hooks.add("wrap",function(c){c.type==="entity"&&(c.attributes.title=c.content.replace(/&amp;/,"&"))}),Object.defineProperty(u.languages.markup.tag,"addInlined",{value:function(c,e){var s={};s["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:u.languages[e]},s.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:s}};l["language-"+e]={pattern:/[\s\S]+/,inside:u.languages[e]};var n={};n[c]={pattern:RegExp("(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)".replace(/__/g,function(){return c}),"i"),lookbehind:!0,greedy:!0,inside:l},u.languages.insertBefore("markup","cdata",n)}}),Object.defineProperty(u.languages.markup.tag,"addAttribute",{value:function(c,e){u.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(`(^|["'\\s])(?:`+c+`)\\s*=\\s*(?:"[^"]*"|'[^']*'|[^\\s'">=]+(?=[\\s>]))`,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:u.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),u.languages.html=u.languages.markup,u.languages.mathml=u.languages.markup,u.languages.svg=u.languages.markup,u.languages.xml=u.languages.extend("markup",{}),u.languages.ssml=u.languages.xml,u.languages.atom=u.languages.xml,u.languages.rss=u.languages.xml;(function(c){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;c.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp(`@[\\w-](?:[^;{\\s"']|\\s+(?!\\s)|`+e.source+")*?(?:;|(?=\\s*\\{))"),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+`|(?:[^\\\\\r
()"']|\\\\[^])*)\\)`,"i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},c.languages.css.atrule.inside.rest=c.languages.css;var s=c.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(u);u.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/};u.languages.javascript=u.languages.extend("clike",{"class-name":[u.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp("(^|[^\\w$])(?:NaN|Infinity|0[bB][01]+(?:_[01]+)*n?|0[oO][0-7]+(?:_[0-7]+)*n?|0[xX][\\dA-Fa-f]+(?:_[\\dA-Fa-f]+)*n?|\\d+(?:_\\d+)*n|(?:\\d+(?:_\\d+)*(?:\\.(?:\\d+(?:_\\d+)*)?)?|\\.\\d+(?:_\\d+)*)(?:[Ee][+-]?\\d+(?:_\\d+)*)?)(?![\\w$])"),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),u.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,u.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(`((?:^|[^$\\w\\xA0-\\uFFFF."'\\])\\s]|\\b(?:return|yield))\\s*)/(?:(?:\\[(?:[^\\]\\\\\r
]|\\\\.)*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}|(?:\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.|\\[(?:[^[\\]\\\\\r
]|\\\\.)*\\])*\\])*\\]|\\\\.|[^/\\\\\\[\r
])+/[dgimyus]{0,7}v[dgimyus]{0,7})(?=(?:\\s|/\\*(?:[^*]|\\*(?!/))*\\*/)*(?:$|[\r
,.;:})\\]]|//))`),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:u.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:u.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:u.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:u.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:u.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),u.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:u.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),u.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),u.languages.markup&&(u.languages.markup.tag.addInlined("script","javascript"),u.languages.markup.tag.addAttribute("on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)","javascript")),u.languages.js=u.languages.javascript;const _e=/iPad|iPhone|iPod/.test(navigator.userAgent),ie={FULFILLED:0,PENDING:1};let re=new Set,oe={},M=new Set;var _,C,D,Z,$,H,U,G,O,N,L,W,ke,I,le,Y,Fe,z,ce,de,De,X,xe,J,Ae,ge,Oe,pe,Ne,he,Ie,K,Ee,V,$e,me,ze;class We{constructor({className:e,content:s,id:l,open:n,close:p,styleSheets:F}={}){f(this,W);f(this,I);f(this,Y);f(this,z);f(this,de);f(this,X);f(this,J);f(this,ge);f(this,pe);f(this,he);f(this,K);f(this,V);f(this,me);f(this,_,new AbortController);f(this,C,void 0);f(this,D,!0);f(this,Z,void 0);f(this,$,void 0);f(this,H,void 0);f(this,U,void 0);f(this,G,void 0);f(this,O,void 0);f(this,N,ie.PENDING);f(this,L,new Map);const T=[...re].find(B=>B.element.id===l);if(T)return T.content(s),T;k(this,C,{close:p,open:n}),this.element=document.createElement("dialog"),y(this,X,xe).call(this,[].concat(F).filter(B=>typeof B=="string")),k(this,$,{click:y(this,ge,Oe).bind(this),keydown:y(this,pe,Ne).bind(this),pointerdown:y(this,he,Ie).bind(this)}),e&&(this.element.className=e),l&&(this.element.id=l),this.content(s),re.add(this)}abort(){return m(this,_).abort(),k(this,_,new AbortController),m(this,W,ke)||M.delete(this),this}async close(e){var s,l;return y(this,z,ce).call(this),typeof e=="number"&&e>0&&await new Promise(n=>{k(this,Z,setTimeout(()=>n(),e))}),this.element.open&&(document.removeEventListener("click",m(this,$).click),document.removeEventListener("keydown",m(this,$).keydown),document.removeEventListener("pointerdown",m(this,$).pointerdown),this.element.dataset.dialogState="close",await y(this,K,Ee).call(this),re.delete(this),M.delete(this),this.element.close(),this.element.remove(),y(this,J,Ae).call(this,!1),y(this,de,De).call(this),(l=(s=m(this,C)).close)==null||l.call(s,this),await this.reject(),k(this,N,ie.PENDING)),Promise.resolve()}async content(e,s){if(e!=null){if(y(this,z,ce).call(this),this.abort(),typeof e=="function")return e(this,m(this,_).signal);const l=document.createElement("div");e instanceof HTMLElement?l.append(e instanceof HTMLTemplateElement?e.content.cloneNode(!0):e):l.innerHTML=e,y(this,X,xe).call(this,[...l.querySelectorAll('link[rel="stylesheet"]')]),await y(this,Y,Fe).call(this),this.element.replaceChildren(...l.childNodes)}return k(this,D,!1),this.open(s)}async open(e){var s,l;return y(this,z,ce).call(this),typeof e=="number"&&e>0&&await new Promise(n=>k(this,H,setTimeout(()=>n(),e))),!this.element.open&&m(this,W,ke)&&(await y(this,Y,Fe).call(this),document.addEventListener("click",m(this,$).click),document.addEventListener("keydown",m(this,$).keydown),document.addEventListener("pointerdown",m(this,$).pointerdown),document.contains(this.element)||document.body.appendChild(this.element),y(this,J,Ae).call(this,!0),this.element.showModal(),this.element.dataset.dialogState="open",re.add(this),M.add(this),await y(this,K,Ee).call(this),(l=(s=m(this,C)).open)==null||l.call(s,this)),Promise.resolve()}then(e){return typeof e=="function"&&k(this,G,e),this}catch(e){return typeof e=="function"&&k(this,U,e),this}reject(e){return y(this,V,$e).call(this,m(this,U),e)}resolve(e){return y(this,V,$e).call(this,m(this,G),e)}}_=new WeakMap,C=new WeakMap,D=new WeakMap,Z=new WeakMap,$=new WeakMap,H=new WeakMap,U=new WeakMap,G=new WeakMap,O=new WeakMap,N=new WeakMap,L=new WeakMap,W=new WeakSet,ke=function(){return this.element.childNodes.length>0},I=new WeakSet,le=function(){return[...M].pop()===this},Y=new WeakSet,Fe=function(){return Promise.allSettled([...m(this,L)].map(([e,s])=>new Promise((l,n)=>{if(s)return l();const p=document.createElement("link");p.href=e,p.rel="stylesheet",p.addEventListener("load",l),p.addEventListener("error",n),document.head.appendChild(p),m(this,L).set(e,p)})))},z=new WeakSet,ce=function(){m(this,D)&&(clearTimeout(m(this,Z)),clearTimeout(m(this,H))),k(this,D,!0)},de=new WeakSet,De=function(){[...m(this,L)].forEach(([e,s])=>{s.remove(),m(this,L).set(e,null)})},X=new WeakSet,xe=function(e){e.forEach(s=>{var n;const l=typeof s=="string"?new URL(s,document.baseURI).href:s.href;m(this,L).has(l)||(m(this,L).set(l,null),(n=s.remove)==null||n.call(s))})},J=new WeakSet,Ae=function(e){M.size>0||(e?_e?(oe={left:window.scrollX,top:window.scrollY,behavior:"instant"},document.documentElement.style.cssText=`left: -${oe.left}px; position: fixed; top: -${oe.top}px;`):document.documentElement.style.cssText=`overflow: hidden; padding-right: ${window.innerWidth-document.documentElement.getBoundingClientRect().width}px`:(document.documentElement.style.cssText=null,_e&&document.documentElement.scrollTo(oe)))},ge=new WeakSet,Oe=function(e){if(m(this,I,le)){if(m(this,O)===document.documentElement&&e.target===document.documentElement)y(this,me,ze).call(this,e)&&this.close();else if(e.target.closest("[data-dialog-action]")){const l=e.target.dataset.dialogAction.toLowerCase().split(/\s+/);(async()=>{var n;for(let p of l)await((n=this[p])==null?void 0:n.call(this))})()}k(this,O,null)}},pe=new WeakSet,Ne=function(e){e.key==="Escape"&&m(this,I,le)&&(e.preventDefault(),this.close())},he=new WeakSet,Ie=function(e){m(this,I,le)&&(e.target===document.documentElement&&e.preventDefault(),k(this,O,e.target))},K=new WeakSet,Ee=function(){return Promise.allSettled(this.element.getAnimations().map(e=>e.finished))},V=new WeakSet,$e=async function(e,s){return m(this,N)===ie.PENDING&&await(e==null?void 0:e(s)),k(this,N,ie.FULFILLED),Promise.resolve()},me=new WeakSet,ze=function(e){const{left:s,right:l,top:n,bottom:p}=this.element.getBoundingClientRect();return s>e.clientX||l<e.clientX||n>e.clientY||p<e.clientY};const Be=[...document.styleSheets].filter(c=>c.href.includes("-dialog")).reduce((c,{href:e,ownerNode:s})=>(s.remove(),{...c,[e.split("/").pop().split("-").shift()]:new URL(e).pathname}),{}),E={animation:{base:`dialog::backdrop {
   pointer-events: none;
   background-color: rgba(0, 0, 0, .6);
}`,fade:`

/* fade animation */

dialog,
dialog::backdrop {
    opacity: 0;
    transition: opacity .3s;
}

[data-dialog-state="open"],
[data-dialog-state="open"]::backdrop {
    opacity: 1;
}`,translate:`

/* fade + translate animation */

dialog {
    translate: 0 15%;
}

dialog,
dialog::backdrop {
    opacity: 0;
    transition: opacity .3s, translate .3s;
}

[data-dialog-state="open"],
[data-dialog-state="open"]::backdrop {
   opacity: 1;
   translate: none;
}
[data-dialog-state="close"] {
   translate: 0 -15%;
}`},type:{html:`<h1>Do you want to continue?</h1>
<button data-dialog-action="resolve close">Yes</button>
<button data-dialog-action="reject close">No</button>
`,ajax:`content: async (e, signal) => {
    const response = await fetch("/templates/automatic.html", {signal}),
          data     = await response.text();

    await e.content(data);
}`,template:'document.querySelector("template")'},action:`

const [resolveBtn, rejectBtn] = e.element.querySelectorAll("button");

resolveBtn.addEventListener("click", () => {
    e.resolve("resolved by button");
    e.close();
});

rejectBtn.addEventListener("click", () => {
    e.reject("rejected by button");
    e.close();
});
`},x=(c,e)=>{const s=/^(?!\s*$)/gm;return c.replace(s," ".repeat(e))},Ce=(c,e)=>{const s=document.createElement("code");s.textContent=e,c.replaceChildren(s),Prism.highlightElement(c)},qe=c=>{const e=[],s=[],l=new FormData(document.querySelector("form"));switch(l.get("type")){case"ajax":let n=E.type.ajax;l.get("action")==="manual"&&(n=n.replace(/(e\.content\(data\);)\s*/,"await $1"+x(E.action,4)).replace("automatic","manual")),s.push(x(n,4));break;case"html":l.get("action")==="manual"?s.push(x(`content: async e => {
    await e.content(\`
`+x(E.type.html.replace(/\s+data-dialog-action="[^"]*"/g,""),8)+"    `);"+x(E.action,4)+"}",4)):s.push(x("content: `\n"+x(E.type.html,4)+"`",4));break;case"template":l.get("action")==="manual"?s.push(`    content: async e => {
        await e.contet(`+E.type.template+");"+x(E.action,8)+"    }"):s.push(x("content: "+E.type.template,4));break}l.getAll("callback").forEach(n=>{switch(n){case"open":s.push(x('open: e => console.log("opened", e)',4));break;case"close":s.push(x('close: e => console.log("closed", e)',4));break;case"then":e.push('dialog.then(value => console.log(value ?? "resolved"));');break;case"catch":e.push('dialog.catch(reason => console.log(reason ?? "rejected"));');break}}),Ce(document.querySelector(".language-css"),(l.get("animation")!=="base"?E.animation.base:"")+E.animation[l.get("animation")]),Ce(document.querySelector(".language-js"),`const dialog = new Dialog({
    styleSheets: ["${Be[l.get("animation")]}"],
${s.join(`,
`)}
});${e.length>0?`

`+e.join(`
`):""}`)},Ye=c=>{c.preventDefault();const e=new FormData(c.target.form),s=e.getAll("callback");new We({styleSheets:[Be[e.get("animation")]],content:async(l,n)=>{if(e.get("type")==="ajax"){const p=await fetch(`/templates/${e.get("action")}.html`,{signal:n}),F=await p.text();await l.content(F)}else await l.content(document.querySelector("template"));if(e.get("action")==="manual"){const[p,F]=l.element.querySelectorAll("button");p.addEventListener("click",()=>{l.resolve("resolved by button"),l.close()}),F.addEventListener("click",()=>{l.reject("rejected by button"),l.close()})}},open:l=>s.includes("open")&&console.log("opened",l),close:l=>s.includes("close")&&console.log("closed",l)}).then(l=>s.includes("then")&&console.log(l??"resolved")).catch(l=>s.includes("catch")&&console.log(l??"rejected"))};document.querySelector("button").addEventListener("click",Ye);document.addEventListener("change",qe);qe()});export default Xe();
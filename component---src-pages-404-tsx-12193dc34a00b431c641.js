(self.webpackChunkexorde_landingpage=self.webpackChunkexorde_landingpage||[]).push([[218],{1046:function(e,t,l){"use strict";l.d(t,{w_:function(){return s}});var n=l(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(r),i=function(){return(i=Object.assign||function(e){for(var t,l=1,n=arguments.length;l<n;l++)for(var r in t=arguments[l])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},c=function(e,t){var l={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(l[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(l[n[r]]=e[n[r]])}return l};function o(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function s(e){return function(t){return n.createElement(m,i({attr:i({},e.attr)},t),o(e.child))}}function m(e){var t=function(t){var l,r=e.attr,a=e.size,o=e.title,s=c(e,["attr","size","title"]),m=a||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,s,{className:l,style:i(i({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(r)}},5500:function(e,t,l){"use strict";l.d(t,{Z:function(){return d}});var n=l(7294),r=l(5444),a=JSON.parse('{"en":{"background_color":"black","category_color":"white","text_color":"grey","copyright":"Made by Exorde Labs. All rights reserved.","logo":"/img/logo-light.svg","socials":[{"id":"twitter","link":"https://twitter.com/exorde_en","icon":"/img/twitter.svg","icon_color":"white"},{"id":"reddit","link":"https://www.reddit.com/r/Exorde/","icon":"/img/reddit.svg","icon_color":"white"},{"id":"linkedin","link":"https://www.linkedin.com/company/exorde","icon":"/img/linkedin.svg","icon_color":"white"},{"id":"facebook","link":"https://www.facebook.com/Exorde-102932808116053","icon":"/img/facebook.svg","icon_color":"white"}],"categories":[{"title":"About us","items":[{"label":"Contact","link":"mailto:hello@exordelabs.com","external":true},{"label":"Team","link":"/team","external":false},{"label":"Litepaper","link":"/pdf/litepaper.pdf","external":true}]},{"title":"Legal","items":[{"label":"Terms of use ","link":"https://docs.exorde.network/legal/terms","external":true},{"label":"Privacy Policy","link":"https://docs.exorde.network/legal/privacy-policy","external":true}]}]},"fr":{"background_color":"black","text_color":"grey","category_color":"white","copyright":"Réalisé par Exorde Labs. Tous droits réservés.","logo":"/img/logo-light.svg","socials":[{"id":"twitter","link":"https://twitter.com/exorde_fr","icon":"/img/twitter.svg","icon_color":"white"},{"id":"reddit","link":"https://www.reddit.com/r/Exorde/","icon":"/img/reddit.svg","icon_color":"white"},{"id":"linkedin","link":"https://www.linkedin.com/company/exorde","icon":"/img/linkedin.svg","icon_color":"white"},{"id":"facebook","link":"https://www.facebook.com/Exorde-102932808116053","icon":"/img/facebook.svg","icon_color":"white"}],"categories":[{"title":"À propos","items":[{"label":"Contact","link":"mailto:hello@exordelabs.com","external":true},{"label":"Team","link":"/team","external":false},{"label":"Litepaper","link":"/pdf/litepaper.pdf","external":true}]},{"title":"Legal","items":[{"label":"Mentions légales","link":"https://docs.exorde.network/v/fr/legal/mentions-legales","external":true},{"label":"Politique de confidentialité","link":"https://docs.exorde.network/legal/privacy-policy"}]}]}}'),i=function(e){var t=e.locale;return n.createElement("div",{className:"py-8 bg-transparent  text-grey"},n.createElement("div",{className:"container"},n.createElement("div",{className:"md:flex md:pb-16"},n.createElement("div",{id:"logo",className:"h-36"},n.createElement("img",{src:a[t].logo,className:"h-full mx-auto"})),n.createElement("div",{id:"categories",className:"text-center md:flex md:flex-1 md:py-0 md:pl-8 md:justify-end"},a[t].categories.map((function(e){return n.createElement("div",{id:"category",className:"py-4 md:py-0 md:px-8"},n.createElement("h3",{className:"text-2xl text-"+a[t].category_color+" p-2"},e.title),e.items.map((function(e){return n.createElement("div",{className:"p-1"},e.external?n.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.label):n.createElement(r.Link,{to:e.link},e.label))})))})))),n.createElement("div",{id:"subpart",className:"md:flex md:flex-row-reverse md:justify-between md:items-center"},n.createElement("div",{id:"socials",className:"flex justify-center"},a[t].socials.map((function(e){return n.createElement("a",{href:e.link,className:"h-14 w-14 p-2",target:"_blank",rel:"noopener noreferrer"},n.createElement("img",{src:e.icon,alt:e.id,className:"icon-"+e.icon_color}))}))),n.createElement("p",{id:"copyright",className:"text-xs text-center"},a[t].copyright))))},c=l(3201),o=function(e){var t=e.open,l=e.items;return n.createElement("div",{id:"sidebar",className:(t?"visible sticky":"hidden")+"  h-screen w-full top-0 pt-20 z-40 bg-gradient-to-b from-blue-dark to-black"},n.createElement("ul",{className:"text-center  text-white font-semibold text-4xl pt-20"},l.map((function(e){return n.createElement(r.Link,{to:e.link},n.createElement("li",{className:"p-4"},e.label))}))))},s=JSON.parse('{"en":{"items":[]},"fr":{"items":[]}}'),m=function(e){var t=e.locale,l=(0,n.useState)(!1),a=l[0],i=l[1],m=(0,n.useState)(0),d=m[0],u=m[1],g=function(){return u(window.pageYOffset)};return(0,n.useEffect)((function(){return window.addEventListener("scroll",g),function(){window.removeEventListener("scroll",g)}})),n.createElement(n.Fragment,null,n.createElement("nav",{className:"fixed top-0 py-2 h-20 w-full flex items-center z-50 text-white "+(d>0?"shadow bg-gradient-to-l from-black to-blue-dark":"bg-transparent")},n.createElement("div",{className:"container flex items-center justify-between"},n.createElement(r.Link,{to:"/",className:"h-28 flex items-center"},n.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDkuMTcgMTM1Ljk4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2M2YzhkOTt9LmNscy0ye2ZpbGw6IzczODZiMzt9LmNscy0ze2ZpbGw6IzM1MzY3Mzt9LmNscy00e2ZpbGw6IzJkMjY1OTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkZpY2hpZXIgMTI8L3RpdGxlPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkNhbHF1ZV8xLTIiIGRhdGEtbmFtZT0iQ2FscXVlIDEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDEwNy44MiA1NC41OSA5NC41MyA1NC41OSAwIDAgMTA3LjgyIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjU0LjU5IDAgNTQuNTkgOTQuNTMgMTA5LjE3IDEwNy44MiA1NC41OSAwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjAgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAwIDExMS4zOSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSIxMDkuMTcgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAxMDkuMTcgMTExLjM5Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTAuNzQsNjMuNDNzLTExLjIsNi40MS03LDEwLjI1YzMuODksMy41NiwyMC4wNiw2Ljc1LDQ1LjY5LDAsMzcuMDgtOS42OSw0OS44LTIyLDUzLTI2Ljk0cy0xOC41NC0yLjkxLTE4LjU0LTIuOTFsLS4xOS40czE4LjM3LTEsMTYuNzMsMS40M2MtNS44Miw4Ljc2LTM1LjU0LDE5Ljc0LTQ5LjcxLDI0LjJzLTMyLjI4LDYtNDAuMDYsNC41MUMzLjA4LDczLDYuMDksNjksNy43LDY3LjI2bDMuMTktMy40NVoiLz48L2c+PC9nPjwvc3ZnPg==",alt:"exorde logo",className:"h-12"}),n.createElement("h3",{className:"font-display ml-2 text-2xl mt-4"},"EXORDE")),n.createElement("ul",{className:"hidden md:flex"},s[t].items.map((function(e){return n.createElement(r.Link,{to:e.link},n.createElement("li",{className:"p-2"},e.label))}))),s[t].items.length>0&&n.createElement("button",{type:"button",onClick:function(){return i(!a)},className:"ml-auto text-3xl text-white md:hidden"},a?n.createElement(c.aHS,null):n.createElement(c.lPs,null)))),n.createElement(o,{open:a,items:s[t].items}))},d=function(e){var t=e.children,l=e.locale;return n.createElement(n.Fragment,null,n.createElement("div",{className:"relative bg-gradient-to-b from-blue-dark to-black"},n.createElement(m,{locale:l}),n.createElement("div",null,t),n.createElement(i,{locale:l})))}},8054:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return s}});var n=l(5444),r=l(7294),a=l(5500),i=l(5658),c=l.p+"static/404-80e8f93695f591d3c871c1fa40a5b1c0.png",o={en:{title:"Have you lost your way ?",button:"Go back to civilization"}},s=function(){var e="en";return r.createElement(a.Z,{locale:e},r.createElement(r.Fragment,null,r.createElement("div",{className:"container pt-32 md:pt-36"},r.createElement("h1",{className:"text-5xl sm:text-6xl md:text-7xl text-white text-center"},o.en.title),r.createElement(n.Link,{to:(0,i.y)(e,"/"),className:"bg-blue text-white p-2 mt-8 rounded max-w-max flex items-center mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:-mb-32"},r.createElement("p",null,o.en.button))),r.createElement("div",null,r.createElement("img",{src:c,alt:"desert",className:"w-full"}),r.createElement("p",{className:"text-xs text-grey text-center mb-16"},"Illustration by"," ",r.createElement("a",{href:"https://icons8.com/illustrations/author/5d99891e7dca3d0016cd4e34"},"Julia")," ","from ",r.createElement("a",{href:"https://icons8.com/illustrations"},"Ouch!")))))}},5658:function(e,t,l){"use strict";l.d(t,{y:function(){return a}});var n=l(5226),r=l.n(n),a=function(e,t){return r().find((function(t){return t.id==e})).default?t:"/"+e+t}},5226:function(e){e.exports=[{id:"en",default:!0,path:"en",locale:"en-US",dateFormat:"DD/MM/YYYY",siteLanguage:"en",ogLanguage:"en_US"},{id:"fr",path:"fr",locale:"fr-FR",dateFormat:"DD/MM/YYYY",siteLanguage:"fr",ogLanguage:"fr_FR"}]}}]);
//# sourceMappingURL=component---src-pages-404-tsx-12193dc34a00b431c641.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={Container:"CountryPage_Container__fexME",CategoryButton:"CountryPage_CategoryButton__6BQhd",PlainButton:"CountryPage_PlainButton__2jPbO",SelectedButton:"CountryPage_SelectedButton__FsnqQ",TitleContainer:"CountryPage_TitleContainer__3-Bi5",ContentContainer:"CountryPage_ContentContainer__VfBc8",CategoryContainer:"CountryPage_CategoryContainer__1nESG",NewsContainer:"CountryPage_NewsContainer__1wAGT"}},,,function(e,t,n){e.exports={Footer:"Footer_Footer__1YbOw",FormContent:"Footer_FormContent__2kMda",BreakLine:"Footer_BreakLine__Ueadc",SubmitButton:"Footer_SubmitButton__IAaDS"}},,function(e,t,n){e.exports={Container:"SingleNewsPage_Container__S8mWo",Content:"SingleNewsPage_Content__2POnI",Image:"SingleNewsPage_Image__1I7sY"}},,function(e,t,n){e.exports={WorldContent:"WorldPage_WorldContent__Ymnl5",Countries:"WorldPage_Countries__3ZR-f"}},function(e,t,n){e.exports={CountriesContent:"CountryInWorld_CountriesContent__2Tl97",CountryNews:"CountryInWorld_CountryNews__3k-5J"}},function(e,t,n){e.exports={NewsCard:"NewsCard_NewsCard__12at-",Image:"NewsCard_Image__1-fPP"}},,,function(e,t,n){e.exports={ErrorPageContent:"ErrorPage_ErrorPageContent__qf22Q",Lines:"ErrorPage_Lines__3sRAA"}},function(e,t,n){e.exports={Header:"Header_Header__VDelf",TopNav:"Header_TopNav__zwkj6"}},function(e,t,n){e.exports={NewsCard:"NewsCardUnderTopic_NewsCard__1oLz1",Image:"NewsCardUnderTopic_Image__fL_2h"}},,,,,,function(e,t,n){e.exports=n(38)},,,,,function(e,t,n){},,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),l=n.n(o),c=n(3),i=n(1),s=(n(32),n(14)),m=n.n(s),u=n(8),d=n(15),E=n.n(d),p={us:"United States",ca:"Canada",gb:"United Kingdom",au:"Australia",cn:"China",jp:"Japan"},C={us:"en-US",ca:"en-CA",gb:"en-GB",au:"en-AU",cn:"zh-CN",jp:"ja-JP"},g={us:["US","Business","Entertainment","Politics","Sports","World"],ca:["Canada","Business","Entertainment","Politics","Sports","World"],gb:["UK","Business","Entertainment","Politics","Sports","World"],au:["Australia","Business","Entertainment","Politics","Sports","World"],cn:["China","Business","Entertainment","Society","Sports","World"],jp:["Japan","Business","Entertainment","Politics","Sports","World"]},y=n(16),_=n.n(y),f=function(e){var t={name:e.news.name,provider:e.news.provider[0].name,url:e.news.url,imgUrl:e.news.image&&e.news.image.contentUrl?e.news.image.contentUrl:"",description:e.news.description};t=(t=JSON.stringify(t)).toString().replace(/%/g,"~~pct~~"),t=encodeURIComponent(t);var n="/news/".concat(t);return r.a.createElement(c.b,{to:n,className:_.a.NewsCard},e.news.image?r.a.createElement("img",{className:_.a.Image,src:e.news.image.thumbnail.contentUrl,alt:e.title}):null,r.a.createElement("h4",null,e.news.name))},h=function(e){var t=p[e.countryCode],n=C[e.countryCode],o=Object(a.useState)([]),l=Object(u.a)(o,2),i=l[0],s=l[1],m={mkt:n,count:10,originalImg:!0},d=new URLSearchParams(Object.entries(m));return Object(a.useEffect)(function(){e.countryCode in p&&0===i.length&&(console.log("fetching data from api"),fetch("https://api.bing.microsoft.com/v7.0/news?"+d,{headers:{"content-type":"application/json","Ocp-Apim-Subscription-Key":"f23336450eff41789eae442a8e728341"}}).then(function(e){return e.json()}).then(function(e){return s(e.value)}).catch(function(e){console.log(e)}))},[i,e.countryCode,d]),0===i.length?null:r.a.createElement("div",{className:E.a.CountriesContent},r.a.createElement(c.b,{to:"/country/$countryCode".replace("$countryCode",e.countryCode)},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:E.a.CountryNews},i.map(function(e){return r.a.createElement(f,{news:e,key:e.url})})))},v=function(){return r.a.createElement("div",{className:m.a.WorldContent},r.a.createElement("div",{className:m.a.Countries},r.a.createElement("h2",null,"World's Top News"),r.a.createElement(h,{countryCode:"us"}),r.a.createElement(h,{countryCode:"ca"}),r.a.createElement(h,{countryCode:"gb"}),r.a.createElement(h,{countryCode:"au"}),r.a.createElement(h,{countryCode:"cn"}),r.a.createElement(h,{countryCode:"jp"})))},b=n(19),w=n.n(b),N=function(){return r.a.createElement("div",{className:w.a.ErrorPageContent},r.a.createElement("div",{className:w.a.Lines},r.a.createElement("h2",null,"Sorry, the content you're looking for does not exist."),r.a.createElement("h2",null,"D\xe9sol\xe9, le contenu que vous cherchez n'existe pas."),r.a.createElement("h2",null,"Tut uns leid, die Inhalte, die Sie suchen, existieren nicht."),r.a.createElement("h2",null,"Lo sentimos, el contenido que buscas no existe."),r.a.createElement("h2",null,"O conte\xfado que voc\xea est\xe1 procurando n\xe3o existe."),r.a.createElement("h2",null,"\u62b1\u6b49\uff0c\u60a8\u5bfb\u627e\u7684\u5185\u5bb9\u4e0d\u5b58\u5728\u3002"),r.a.createElement("h2",null,"\u62b1\u6b49\uff0c\u60a8\u5c0b\u627e\u7684\u5167\u5bb9\u4e0d\u5b58\u5728\u3002"),r.a.createElement("h2",null,"\u5c0d\u5514\u4f4f\uff0c\u95a3\u4e0b\u5c0b\u627e\u5605\u5167\u5bb9\u5514\u55ba\u5230\u3002"),r.a.createElement("h2",null,"\u6b8b\u5ff5\u306a\u304c\u3089\u304a\u63a2\u3057\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u5b58\u5728\u3057\u307e\u305b\u3093\u3002"),r.a.createElement("h2",null,"\uc8c4\uc1a1\ud569\ub2c8\ub2e4\ub9cc, \ucc3e\uc73c\uc2dc\ub294 \ub0b4\uc6a9\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.")))},S=n(20),I=n.n(S),P=function(){return r.a.createElement("div",{className:I.a.Header},r.a.createElement("h1",null,"Solid News"),r.a.createElement("div",{className:I.a.TopNav},r.a.createElement(c.b,{to:"/"},"World"),r.a.createElement(c.b,{to:"/country/us"},"US"),r.a.createElement(c.b,{to:"/country/ca"},"Canada"),r.a.createElement(c.b,{to:"/country/gb"},"UK"),r.a.createElement(c.b,{to:"/country/au"},"Australia"),r.a.createElement(c.b,{to:"/country/cn"},"China"),r.a.createElement(c.b,{to:"/country/jp"},"Japan"),r.a.createElement(c.b,{to:"/country/404"},"404")))},B=n(12),U=n.n(B),j=function(e){var t=decodeURIComponent(e.data);t=t.toString().replace(/~~pct~~/g,"%");var n=t=JSON.parse(t),a=n.name,o=n.provider,l=n.url,c=n.imgUrl,i=n.description;return r.a.createElement("div",{className:U.a.Container},r.a.createElement("div",{className:U.a.Content},r.a.createElement("h1",null,a),r.a.createElement("h2",null,o),""!==c?r.a.createElement("img",{className:U.a.Image,src:c,alt:a,referrerPolicy:"no-referrer"}):null,r.a.createElement("p",null,i),r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},"Read On Orginal Page")))},D=n(7),F=n.n(D),x=n(26),O=n.n(x),W=n(21),k=n.n(W),L=function(e){var t={name:e.news.name,provider:e.news.provider[0].name,url:e.news.url,imgUrl:e.news.image&&e.news.image.contentUrl?e.news.image.contentUrl:"",description:e.news.description};t=(t=JSON.stringify(t)).toString().replace(/%/g,"~~pct~~"),t=encodeURIComponent(t);var n="/news/".concat(t);return r.a.createElement(c.b,{to:n,className:k.a.NewsCard},e.news.image?r.a.createElement("img",{className:k.a.Image,src:e.news.image.thumbnail.contentUrl,alt:e.title}):null,r.a.createElement("h4",null,e.news.name))},T=function(e){var t=e.countryCode,n=p[t],o=C[t],l=g[t],c=Object(a.useState)(0),i=Object(u.a)(c,2),s=i[0],m=i[1],d=Object(a.useState)([]),E=Object(u.a)(d,2),y=E[0],_=E[1];return Object(a.useEffect)(function(){if(e.countryCode in p){var t={mkt:o,category:l[s],originalImg:!0},n=new URLSearchParams(Object.entries(t));console.log("fetching data from api"),fetch("https://api.bing.microsoft.com/v7.0/news?"+n,{headers:{"content-type":"application/json","Ocp-Apim-Subscription-Key":"f23336450eff41789eae442a8e728341"}}).then(function(e){return e.json()}).then(function(e){return _(e.value)})}},[l,o,e.countryCode,s]),r.a.createElement("div",{className:F.a.Container},r.a.createElement("div",{className:F.a.TitleContainer},r.a.createElement("h1",null,n+" - "+l[s])),r.a.createElement("div",{className:F.a.ContentContainer},r.a.createElement("div",{className:F.a.CategoryContainer},l.map(function(e,t){return r.a.createElement("button",{className:O()(F.a.CategoryButton,s===t?F.a.SelectedButton:F.a.PlainButton),key:e,onClick:function(){m(t)}},e)})),r.a.createElement("div",{className:F.a.NewsContainer},y?y.map(function(e){return r.a.createElement(L,{news:e,key:e.url})}):null)))},A=n(10),M=n.n(A),J=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:M.a.Footer},r.a.createElement("div",{className:M.a.FormContent},r.a.createElement("h2",null,"Subscribe"),n?r.a.createElement("div",null,r.a.createElement("h5",null,n.get("title")," ",n.get("name"),", you have successfully subscribed categoriy"," ",n.get("selectedCategory")," from"," ",p[n.get("country")],".")):r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=new FormData(e.target);o(t),console.log(t.get("selectedCategory"))}},r.a.createElement("div",null,r.a.createElement("h5",null,"Please tell us your information."),r.a.createElement("label",{htmlFor:"titleID"},"Title"),r.a.createElement("select",{name:"title",id:"titleID"},r.a.createElement("option",{value:"Mr"},"Mr"),r.a.createElement("option",{value:"Miss"},"Miss"),r.a.createElement("option",{value:"Mrs"},"Mrs"),r.a.createElement("option",{value:"Ms"},"Ms"),r.a.createElement("option",{value:"Mx"},"Mx")),r.a.createElement("label",{htmlFor:"nameID"},"Name"),r.a.createElement("input",{type:"text",name:"name",required:!0,id:"nameID"}),r.a.createElement("div",{className:M.a.BreakLine}),r.a.createElement("label",{htmlFor:"emailID"},"Email"),r.a.createElement("input",{type:"email",name:"email",required:!0,id:"emailID"})),r.a.createElement("div",null,r.a.createElement("h5",null,"Please customize subscription."),r.a.createElement("label",{htmlFor:"countryID"},"Country"),r.a.createElement("select",{name:"country",id:"countryID"},r.a.createElement("option",{value:"us"},"United States"),r.a.createElement("option",{value:"ca"},"Canada"),r.a.createElement("option",{value:"gb"},"United Kingdom"),r.a.createElement("option",{value:"au"},"Australia"),r.a.createElement("option",{value:"cn"},"China"),r.a.createElement("option",{value:"jp"},"Japan")),r.a.createElement("div",{className:M.a.BreakLine}),r.a.createElement("label",{htmlFor:"localID"},r.a.createElement("input",{type:"radio",name:"selectedCategory",value:"Local",id:"localID"}),"Local"),r.a.createElement("label",{htmlFor:"businessID"},r.a.createElement("input",{type:"radio",name:"selectedCategory",value:"Business",id:"businessID"}),"Business"),r.a.createElement("label",{htmlFor:"entertainmentID"},r.a.createElement("input",{type:"radio",name:"selectedCategory",value:"Entertainment",id:"entertainmentID"}),"Entertainment"),r.a.createElement("label",{htmlFor:"politicsID"},r.a.createElement("input",{type:"radio",name:"selectedCategory",value:"Politics/Society",id:"politicsID"}),"Politics/Society"),r.a.createElement("label",{htmlFor:"sportsID"},r.a.createElement("input",{type:"radio",name:"selectedCategory",value:"Sports",id:"sportsID"}),"Sports"),r.a.createElement("label",{htmlFor:"worldID"},r.a.createElement("input",{type:"radio",name:"selectedCategory",value:"World",id:"worldID"}),"World")),r.a.createElement("input",{className:M.a.SubmitButton,type:"submit",value:"Submit"}))),r.a.createElement("h6",null,r.a.createElement("span",null,'\xa9 Fan "Felix" Zhang 2020')))};var R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement(P,null)),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:v}),r.a.createElement(i.a,{path:"/country/:cc",exact:!0,render:function(e){var t=e.match;return t.params.cc in p?r.a.createElement(T,{countryCode:t.params.cc}):r.a.createElement(N,null)}}),r.a.createElement(i.a,{path:"/news/:data",exact:!0,render:function(e){var t=e.match;return r.a.createElement(j,{data:t.params.data})}}),r.a.createElement(i.a,{component:N})),r.a.createElement("footer",null,r.a.createElement(J,null)))};l.a.render(r.a.createElement(c.a,{basename:/github.io/.test(window.location)?"/seainfo6150-final-project-webapp":""},r.a.createElement(R,null)),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.a1819886.chunk.js.map
(this.webpackJsonpformvalidation=this.webpackJsonpformvalidation||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(23),r=a.n(n),o=(a(33),a(4)),i=(a(34),a(9)),l=a(1);function d(e){return Object(l.jsxs)("div",{className:"navbar py-1 px-3 bg-".concat(e.mode," d-flex justify-content-between flex-").concat(e.flexDirection),children:[Object(l.jsxs)("ul",{className:"nav justify-content-center",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link active text-".concat(e.txtMode),"aria-current":"page",to:"/Texttutils/",children:"Home"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link text-".concat(e.txtMode),to:"/Texttutils/projects",children:"Projects"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(i.b,{className:"nav-link text-".concat(e.txtMode),to:"/Texttutils/textconverter",children:"Text convertor"})})]}),Object(l.jsxs)("div",{className:"d-flex justify-content-between ",children:[Object(l.jsx)("button",{className:"btn btn-light bg-transparent border border-".concat(e.txtMode," border-1 p-2 py-0 m-1 text-").concat(e.txtMode," nav-link"),onClick:e.toggleMode,children:"dark"===e.mode?"Light":"Dark"}),Object(l.jsx)(i.b,{className:"nav-link text-".concat(e.txtMode," border border-").concat(e.txtMode," border-1 p-2 py-0 m-1 rounded"),to:"/Texttutils/login",children:"Login"})]})]})}function b(){return Object(l.jsx)("div",{className:"container text-center my-2",children:Object(l.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}function j(e){var t=Object(s.useState)(!0),a=Object(o.a)(t,2),c=a[0],n=a[1];return Object(l.jsxs)("div",{id:"carouselExampleCaptions",className:"carousel slide ",style:{height:"60vh"},children:[Object(l.jsxs)("div",{className:"carousel-indicators",children:[Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"0",className:"active","aria-current":"true","aria-label":"Slide 1"}),Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"1","aria-label":"Slide 2"}),Object(l.jsx)("button",{type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide-to":"2","aria-label":"Slide 3"})]}),Object(l.jsxs)("div",{className:"carousel-inner",style:{height:"59vh"},children:[Object(l.jsxs)("div",{className:"carousel-item active",children:[Object(l.jsx)("div",{className:"container",style:{transform:"translateY(50%)",height:"100%",display:c?"block":"none"},children:Object(l.jsx)(b,{})}),Object(l.jsx)("img",{src:"https://picsum.photos/1250/600",className:"d-block ",alt:"Not found",style:{minWidth:"17rem",objectFit:"contain"},onLoad:function(e){return n(!1)}}),Object(l.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(l.jsx)("h5",{className:"bg-dark rounded-3 opacity-75",children:"First slide label"}),Object(l.jsx)("p",{className:"bg-dark rounded-3 opacity-75",children:"Some representative placeholder content for the first slide."})]})]}),Object(l.jsxs)("div",{className:"carousel-item",children:[Object(l.jsx)("img",{src:"https://picsum.photos/1251/600 ",className:"d-block ",alt:"Not found",style:{minWidth:"17rem"}}),Object(l.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(l.jsx)("h5",{className:"bg-dark rounded-3 opacity-75",children:"Second slide label"}),Object(l.jsx)("p",{className:"bg-dark rounded-3 opacity-75",children:"Some representative placeholder content for the second slide."})]})]}),Object(l.jsxs)("div",{className:"carousel-item",children:[Object(l.jsx)("img",{src:"https://picsum.photos/1249/600",className:"d-block ",alt:"Not found",style:{minWidth:"17rem"}}),Object(l.jsxs)("div",{className:"carousel-caption d-none d-md-block",children:[Object(l.jsx)("h5",{className:"bg-dark rounded-3 opacity-75",children:"Third slide label"}),Object(l.jsx)("p",{className:"bg-dark rounded-3 opacity-75",children:"Some representative placeholder content for the third slide."})]})]})]}),Object(l.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"prev",children:[Object(l.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(l.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleCaptions","data-bs-slide":"next",children:[Object(l.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(l.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})}function m(e){var t=Object(s.useState)(""),a=Object(o.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)(""),i=Object(o.a)(r,2),d=i[0],b=i[1],j=Object(s.useState)(""),m=Object(o.a)(j,2),u=m[0],h=m[1],x=Object(s.useState)(""),p=Object(o.a)(x,2),O=p[0],v=p[1];return Object(l.jsxs)("form",{className:"text-".concat(e.txtMode),children:[Object(l.jsx)("div",{children:Object(l.jsx)("h1",{className:"text-center mb-3",children:"Login here"})}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Email address"}),Object(l.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:c,name:"user-email",onChange:function(e){n(e.target.value),null!==e.target.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)||""===e.target.value?h(""):h("Invalid E-mail!")}}),Object(l.jsx)("div",{id:"emailHelp",className:"form-text text-".concat(e.txtMode),children:"We'll never share your email with anyone else."}),Object(l.jsx)("div",{id:"emailHelp",className:"form-text text-danger fs-4",children:u})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsxs)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:["Password ",e.passInfo]}),Object(l.jsx)("input",{type:"password",className:"form-control",name:"user-password",id:"exampleInputPassword1",value:d,onChange:function(e){var t=e.target.value;b(t),!1===/[A-Z]/.test(t)?v("Your password must contain at least one uppercase letter."):!1===/[a-z]/.test(t)?v("Your password must contain at least one lowercase letter."):!1===/[!@#$%^&*]/.test(t)?v("Your password must contain at least one special letter."):!1===/[0-9]/.test(t)?v("Your password must contain at least one digit letter."):t.length<8?v("Your password must contain more the 8 characters."):v("")}})]}),Object(l.jsx)("div",{id:"emailHelp",className:"form-text text-danger fs-4",children:O}),Object(l.jsxs)("div",{className:"mb-3 form-check",children:[Object(l.jsx)("input",{type:"checkbox",className:"form-check-input",id:"exampleCheck1",onChange:function(){var e=document.getElementById("exampleInputPassword1");document.getElementById("exampleCheck1").checked?e.type="text":e.type="password"}}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"exampleCheck1",children:"show password"})]}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){""!==c&&""!==d&&""===O||e.preventDefault()},children:"Submit"})]})}function u(e){var t=Object(s.useState)(!0),a=Object(o.a)(t,2),c=a[0],n=a[1],r=function(e){return Object(l.jsxs)("div",{className:"card rounded-4 border-3 bg-".concat("body-secondary"===e.mode?"light":"secondary"),style:{flex:"1 1 100%",minWidth:"17rem"},children:[Object(l.jsx)("div",{className:"container",style:{transform:"translateY(44%)",height:"250px",display:c?"block":"none"},children:Object(l.jsx)(b,{})}),Object(l.jsx)("img",{src:"https://picsum.photos/25".concat(e.index,"/250"),className:"card-img-top rounded-top-4 object-fit-cover",alt:"...",style:{height:"250px",objectFit:"cover",display:c?"none":"block"},onLoad:function(e){return n(!1)}}),Object(l.jsxs)("div",{className:"card-body border-top border-5 text-".concat("body-secondary"===e.mode?"black":"white"),children:[Object(l.jsxs)("h5",{className:"card-title",children:["Project ",e.index+1]}),Object(l.jsx)("p",{className:"card-text",children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),Object(l.jsx)("a",{href:0===e.index?"https://github.com/sahilbishnoi156/iNotebook":1===e.index?"https://sahilbishnoi156.github.io/PASS-GEN/":2===e.index?"https://sahilbishnoi156.github.io/SG-MEDIA/":"https://github.com/sahilbishnoi156/News-Monkey",className:"btn btn-".concat(e.txtMode),style:{cursor:"pointer",width:"50%"},rel:"noreferrer",target:"_blank",children:"Explore"})]})]})},i=Array.from({length:4},(function(e,t){return t}));return Object(l.jsx)("div",{className:"container d-grid overflow-hidden",style:{gridTemplateColumns:"repeat(auto-fit, minmax(17rem, 1fr))",gridRowGap:"3rem",gridColumnGap:"6rem"},children:i.map((function(t){return Object(l.jsx)(r,{index:t,mode:e.mode,txtMode:e.txtMode},t)}))})}var h=a(24),x=a.n(h);function p(e){var t=Object(s.useState)("Enter your text here"),a=Object(o.a)(t,2),c=a[0],n=a[1],r=Object(s.useState)("No E-mails currently"),i=Object(o.a)(r,2),d=i[0],b=i[1],j=Object(s.useState)("No Numbers currently"),m=Object(o.a)(j,2),u=m[0],h=m[1],x=Object(s.useState)(0),p=Object(o.a)(x,2),O=p[0],v=p[1];return Object(l.jsxs)("div",{className:"container text-".concat(e.textMode),id:"text-area-div",children:[Object(l.jsx)("h1",{style:{fontSize:"1.3rem"},children:e.heading}),Object(l.jsx)("div",{className:"my-3",children:Object(l.jsx)("textarea",{className:"form-control bg-".concat("body-secondary"===e.mode?"white":"secondary"," text-").concat(e.textMode),value:c,onChange:function(e){var t=e.target.value;n(t),v(t.split(" ").filter((function(e){return 0!==e.length})).length)},onClick:function(){"Enter your text here"===c&&n("")},id:"myBox",rows:"8"})}),Object(l.jsxs)("div",{className:"d-flex flex-".concat(e.flexDirection),children:[Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){if(""===c)return 0;var t=c.toUpperCase();n(t),e.showAlert("Text is converted!","success")},children:"Convert to uppercase"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){if(""===c)return 0;var t=c.toLowerCase();n(t),e.showAlert("Text is converted!","success")},children:"Convert to lowercase"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){var t=/[a-z]*@[a-z]*.com/gm,a="";return""===c?0:null===c.match(t)?(b("No E-mail's Found."),e.showAlert("No E-mail's Found","warning"),0):(c.match(t).forEach((function(e){a=a+e+" "})),b(a),void e.showAlert("E-mail's has been extracted","success"))},children:"Extract Email's"}),Object(l.jsx)("button",{className:"btn btn-primary m-2",onClick:function(){var t=/((\d{3}|\(\d{3}\))\s\d{3}\s\d{4})|(\d{10})/gm,a="";return""===c?0:null===c.match(t)?(h("No Mobile Numbers Found."),e.showAlert("No Mobile Numbers Found","warning"),0):(c.match(t).forEach((function(e){a=a+e+" "})),void h(a))},children:"Extract Number"})]}),Object(l.jsxs)("div",{className:"my-4",children:[Object(l.jsx)("h1",{style:{fontSize:"1.3rem"},children:"Text Summary :"}),Object(l.jsxs)("p",{children:["Characters: ",c.length," Words: ",O]}),Object(l.jsxs)("p",{children:["Reading time: ",.008*O]}),Object(l.jsx)("h2",{style:{fontSize:"1.3rem"},children:"Preview"}),Object(l.jsx)("p",{className:"w-100",children:"Enter your text here"===c||""===c?"Enter text above to see preview.":c}),Object(l.jsxs)("div",{className:"my-3",children:[Object(l.jsx)("h2",{style:{fontSize:"1.3rem"},children:"Emails:-"}),Object(l.jsx)("p",{className:"w-100",children:d})]}),Object(l.jsxs)("div",{className:"my-3",children:[Object(l.jsx)("h2",{style:{fontSize:"1.3rem"},children:"Numbers:-"}),Object(l.jsx)("p",{className:"w-100",children:u})]})]})]})}function O(e){return e.alertObj&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alertObj.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:e.alertObj.type.charAt(0).toUpperCase()+e.alertObj.type.slice(1)}),": ",e.alertObj.msg]})}p.prototype={heading:x.a.string},p.defaultProps={heading:"Write your heading here :"};var v=a(3);var y=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)("body-secondary"),r=Object(o.a)(n,2),b=r[0],h=r[1],x=Object(s.useState)("dark"),y=Object(o.a)(x,2),N=y[0],f=y[1],g=Object(s.useState)(window.innerWidth<1e3?"column":"row"),w=Object(o.a)(g,2),k=w[0],S=w[1],C=Object(s.useState)(window.innerWidth<1e3?"":"(must contain one uppercase, lowercase, number and special character)"),E=Object(o.a)(C,2),M=E[0],T=E[1];return window.addEventListener("resize",(function(){window.innerWidth<1e3?(S("column"),T("")):(S("row"),T("(must contain one uppercase, lowercase, number and special character)"))})),Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{id:"main",style:{boxSizing:"border-box"},children:[Object(l.jsx)(d,{mode:b,toggleMode:function(){"dark"===b?(h("body-secondary"),document.body.style.backgroundColor="white",f("dark")):(h("dark"),document.body.style.backgroundColor="black",f("light"))},txtMode:N,flexDirection:k}),Object(l.jsx)("div",{className:"container my-1",style:{height:"30px",width:"100%"},children:Object(l.jsx)(O,{alertObj:a})}),Object(l.jsx)("div",{style:{boxSizing:"border-box",padding:"20px"},children:Object(l.jsx)("div",{className:"container my-5 bg-".concat(b," p-4 rounded-5 "),style:{boxShadow:".1px .1px 26px ".concat("body-secondary"===b?"grey":"white")},children:Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{exact:!0,path:"/Texttutils/login",element:Object(l.jsx)(m,{txtMode:N,passInfo:M})}),Object(l.jsx)(v.a,{exact:!0,path:"/Texttutils/projects",element:Object(l.jsx)(u,{txtMode:N,mode:b})}),Object(l.jsx)(v.a,{exact:!0,path:"/Texttutils/",element:Object(l.jsx)(j,{mode:b,textMode:N})}),Object(l.jsx)(v.a,{exact:!0,path:"/Texttutils/textconverter",element:Object(l.jsx)(p,{heading:"Enter your text below :",showAlert:function(e,t){c({msg:e,type:t}),setTimeout((function(){c(null)}),2500)},mode:b,textMode:N,flexDirection:k})})]})})})]})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,39)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};r.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(y,{})})),N()}},[[38,1,2]]]);
//# sourceMappingURL=main.dc480cd4.chunk.js.map
(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[6],{113:function(e,a,r){"use strict";r.d(a,"b",(function(){return n})),r.d(a,"a",(function(){return c}));var t=r(132),n=t.b().shape({login:t.c().min(6,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043b\u043e\u0433\u0438\u043d!").max(50,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u0434\u043b\u0438\u043d\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d!").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043b\u043e\u0433\u0438\u043d!"),password:t.c().min(6,"\u0421\u043b\u0438\u0448\u043a\u043e\u043c \u043a\u043e\u0440\u043e\u0442\u043a\u0438\u0439 \u043f\u0430\u0440\u043e\u043b\u044c!").required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c!"),rememberMe:t.a(),captcha:t.c()}),c=t.b().shape({fullName:t.c().min(2).max(20).required(),aboutMe:t.c().min(2).max(60).required(),lookingForAJobDescription:t.c().min(2).max(20).required(),mainLink:t.c().matches(/^https?:\/\/?[\w-]{1,32}\.[\w-]{1,32}[^\s@]*$/g,"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430! (https://mylink.com)")})},150:function(e,a,r){"use strict";r.r(a);var t=r(19),n=r(0),c=r.n(n),l=r(6),o=r(5),m=r(38),i=r.n(m),s=r(99),p=r(30),u=r(113),b=r(27);a.default=function(){var e=Object(l.b)(),a=Object(n.useState)(""),r=Object(t.a)(a,2),m=r[0],d=r[1],g=Object(l.c)(b.a),h=g.captchaUrl;return g.isAuth?c.a.createElement(o.a,{to:"/profile"}):c.a.createElement("div",{className:"login-wrapper block"},c.a.createElement("h1",{className:"login-title"},"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0441\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),c.a.createElement(s.c,{initialValues:{login:"",password:"",rememberMe:!1,captcha:""},validationSchema:u.b,onSubmit:function(a){return function(a){e(Object(p.b)(a,(function(e){d(e)})))}(a)}},(function(e){var a=e.values,r=e.errors,t=e.touched;return c.a.createElement(s.b,{className:"login-form"},m&&c.a.createElement("div",{className:"error-message"},m),c.a.createElement(s.a,{className:i()("login-form__item","login-form--input",{error:r.login&&t.login}),type:"text",placeholder:"\u041b\u043e\u0433\u0438\u043d",name:"login",value:a.login}),r.login&&t.login?c.a.createElement("div",{className:"error-message"},r.login):null,c.a.createElement(s.a,{className:i()("login-form__item","login-form--input",{error:r.password&&t.password}),type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",value:a.password}),r.password&&t.password?c.a.createElement("div",{className:"error-message"},r.password):null,c.a.createElement("div",{className:"login-form__item checkbox"},c.a.createElement(s.a,{className:"login-form-checkbox",type:"checkbox",id:"rememberMe",name:"rememberMe"}),c.a.createElement("label",{className:"login-form-label",htmlFor:"rememberMe"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f")),h&&c.a.createElement("div",{className:"login-form__item login-form--captcha"},c.a.createElement("img",{src:h,alt:""}),c.a.createElement(s.a,{className:i()("login-form--input",{error:r.captcha&&t.captcha}),type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438",name:"captcha"})),c.a.createElement("button",{className:"login-form__submit btn btn--login",type:"submit",disabled:r.login||r.password},"\u0412\u043e\u0439\u0442\u0438"))})))}}}]);
//# sourceMappingURL=6.d3c26f11.chunk.js.map
(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[1],{12:function(e,t,a){"use strict";t.a=a.p+"static/media/sprite.60e1bd12.svg"},16:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return i}));var n=a(46),r=a.n(n).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"7000b236-bfb6-4f30-b175-37522e846b95"}}),c={getUsers:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followUser:function(e){return r.post("follow/".concat(e)).then((function(e){return e.data}))},unfollowUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))}},l={getUserProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getUserStatus:function(e){return r.get("profile/status/".concat(e)).then((function(e){return e.data}))},putUserStatus:function(e){return r.put("profile/status",{status:"".concat(e)}).then((function(e){return e}))}},s={getAuthUserData:function(){return r.get("auth/me").then((function(e){return e.data}))},login:function(e){var t=e.login,a=e.password,n=e.rememberMe,c=void 0!==n&&n,l=e.captcha,s=void 0!==l&&l;return r.post("auth/login",{email:t,password:a,rememberMe:c,captcha:s}).then((function(e){return e.data}))},logout:function(){return r.delete("auth/login").then((function(e){return e.data}))}},i={getCaptchaUrl:function(){return r.get("security/get-captcha-url").then((function(e){return e.data.url}))}}},2:function(e,t,a){"use strict";a.d(t,"n",(function(){return n})),a.d(t,"h",(function(){return r})),a.d(t,"k",(function(){return c})),a.d(t,"p",(function(){return l})),a.d(t,"i",(function(){return s})),a.d(t,"m",(function(){return i})),a.d(t,"o",(function(){return o})),a.d(t,"l",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"c",(function(){return f})),a.d(t,"q",(function(){return d})),a.d(t,"e",(function(){return v})),a.d(t,"d",(function(){return A})),a.d(t,"b",(function(){return p})),a.d(t,"g",(function(){return g})),a.d(t,"f",(function(){return E})),a.d(t,"j",(function(){return b}));var n="SET_USERS",r="SET_CURRENT_PAGE",c="SET_LOADING",l="TOGGLE_FOLLOW_USER",s="SET_FOLLOWING",i="SET_PROFILE",o="SET_USER_STATUS",u="SET_POSTS",m="ADD_POST",f="DELETE_POST",d="TOGGLE_LIKE_POST",v="SET_ACTIVE_DIALOG",A="SEND_MESSAGE",p="CHANGE_NEW_MESSAGE",g="SET_AUTH_USER_DATA",E="SET_AUTH_CAPTCHA_URL",b="SET_INITIALIZED"},24:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return m}));var n=a(6),r=a.n(n),c=a(15),l=a(16),s=a(2),i=function(e,t,a,n){return{type:s.g,payload:{userId:e,email:t,login:a,isAuth:n}}},o=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a,n,c,s,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getAuthUserData();case 2:a=e.sent,n=a.data,c=n.id,s=n.email,o=n.login,t(i(c,s,o,0===a.resultCode));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},u=function(e,t){return function(){var a=Object(c.a)(r.a.mark((function a(n){var i;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.login(e);case 2:i=a.sent,a.t0=i.resultCode,a.next=0===a.t0?6:1===a.t0?8:10===a.t0?10:12;break;case 6:return n(o()),a.abrupt("break",13);case 8:return t("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c!"),a.abrupt("break",13);case 10:return n(function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.c.getCaptchaUrl();case 2:a=e.sent,t((n=a,{type:s.f,payload:n}));case 4:case"end":return e.stop()}var n}),e)})));return function(t){return e.apply(this,arguments)}}()),a.abrupt("break",13);case 12:t("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a...");case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},m=function(){return function(){var e=Object(c.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.logout();case 2:0===e.sent.resultCode&&t(i(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},25:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"loadingio-spinner-spin-xyau1cuxpv"},r.a.createElement("div",{className:"ldio-uqseqks461j"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)))))}},29:function(e,t,a){"use strict";t.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAFBMVEVHcExPkv9Pkv9Pkv9Pkv9Pkv9Fhv9Pkv9KjP9Ji/9Pkv9Pkv9Pkv9HiP9Pkv9KjP9Pkv9Pkv9Pkv9Nj/9Pkv9Pkv9Pkv9Pkv9Pkv9Pkv8wa/9Pkv9Pkv9KjP9Pkv9Pkv9Pkv9Pkv9Jiv9Pkv9Pkv8wa/9Pkv8wa/8wa/9Pkv9Pkv9Pkv9Pkv9Pkv9Pkv9Pkv9Pkv9Pkv9Pkv8wa/9Pkv9Pkv8wa/8wa/8wa/9Pkv9Fhv8wa/9Pkv8wa/9Pkv8wa/8wa/8wa/8wa/9OkPtPkv8wa/8wa/9Pkv9Pkv8wa/8wa/8wa/8wa/8wa/9Pkv8wa/8wa/9Pkv9Pkv8wa/9Pkv8wa/86eP86d/9Pkv8wa/8lJUb50qD2vY7////zsY350aBNkP/2v5BUS1pLRFb//v750J4vLUr0vI9Gh/+eh3kzbv9Cgf/1upIxbP9jmPP3xJVLjv/4y5v0t5D2vpM0cf/63cPhv5bbx7L10aI5d/8qKUhEhf8oL1f1+P8mJ0o0TYqlv//2z586NU5Kh+wmKU0+Z7f0zp5eUl1IgOErNWFYlvonK1H6+//3xZknJkeSfXTyzZ3xz6U7ev+/vcFEdtE2UpMxRHwuPW+kjXxOj/v3wJT86NZunu48Yq761rlJg+W8rrb0tI8+ff/4zZz4yZnuzqc4WJ06XKTluZrJsa3CpYhMivLtu5Syt8jrxprvypxFev/E1f9Sk/3HwL3W4f/++/eMrf94nv/1y5zYt5IsOWiYrdfpzKmxl4FCc8pgmPZHiv9FedWVgHZQSFgqMVtAbL797NxpXGNAO1G8oYb85M7+9e2fsNN2Z2hIf99Ad/9onPIzSINGe9lwmf+epsqEp//ttotOjvmBn92WpdD4y6WIdXD98OaRsf+Hp+BMjPRGQFSZhHfi6v9CeP/nw5jx9f9OgP/X4/92oep5ougvQHVyn+zKt7P73b2cpsvJq4y9k3r50K6JodirhnRmWmKHbGjg6f/62a751aXPr45Sg/+stcvfrIbVpYO5usTZ5P91S7B5AAAAWHRSTlMA9IIm+9MJ/gEFxemnF2ERS7WHA6TwSG3VNfkxZR90XUIsHL97d9dJX1v5y2mMVvaPsN6NDdzW7KnPRf6T3XhpuTIo9j7Sl37hoMLex8ZPPVHfncXdhfv7TQXv3QAAEPxJREFUeNrknXlMVNcexy8wMMwMAoOgY0AWMSQgChj9w8T4l0n7l0mb/nHm3gFcChSVQdCKC4WyKCBPFlHc44YrKq12iWsr1efytLHGuMSmT/t8SdXYNl3Svrwlb4ZhYJY7986d+z137uj3P8Jdfr/PnOV3fufccxhGYUVFxMemJrxdoDe9Y0jKIzblJRneMekL3p6aGhufEcW8sopKzk6I0RuIiAz6mITs5FeMw4y5qTEmDZEgTVZM6twZr4TzY6bNniXJdxcKs2ZPGxPapT4+30RkypQfH6L1YVKuMY9AlGfMnRRq3k9M1WsJUFp96sTQ8T4uF+u9k0FuXCh4H50ek0MoKScmPVrtbf6cmYSqZs5Rc7+QnKgh1KVJTFZp2Y/PJAopM159NUEXayJapQBoiSlWpy73U94iCuutFPUgiM6eSYKgmdkqqQjjIkmQFDlOBe5HGEkQZYwIdtA3NYcEVTlTgxkeRqcYSNBlSAlaUxCRSVShzODUg7GT84hKlDd5bBDC3kiiIkVOUPrnD9cQVUkTrmghiJhCVKcpCrYEaWFEhQqLVSrJnUhUqkRFEukRWUS1ylKgGkwLIypW2DTarX+Clqha2gSqvcEMI1G9jBQbgomRJAQUSW0GYYIhFPwnWgOlsHBcGAkRhVFJlKRpSMhIk4b3f7yWhJC049H+TyYhpslY/8NJyCkc6X8CCUElvNa/P7QMvEFCVG+A2n8SsoL0Bdna0AWgzQbEfzkkhJUzT3b8H0ZCWmEyxwWTDCTEZZC1wm5GJAl5RcrID0QXkFdABWNftwAIFhDFU+kAt99Zd6h3a207y7J1tW1be7ccvnKpif/Spiv1bZcAnWF8gPnvJLz3mw9trWN5VNf2vP7Quot39vRvt13V39+62Uap1v6fbwBvTQooWx4FbwAv1rezktV8H9EQBrLgHDz/03Solg1IlxBvT5TufyzU/TvfdLABah3EAMnzhhHICPBOLxu4dmMiQonNgA44/72nnpWjwxgrpuiCFAHcP1wny39QCZAYDUyApcA3t7EydQWVKpcwLNKhesD7W1jZuoj6LUw6xSvA123y/We/Vj4kzgBVgHXNAP/rtsMAaDL8HAPqMTE/oPjbtBXYHev9W1OaAnlZ/3OI/x27gQBIil/rnyFJoKazLEZ7oOkhf1ZW5yPe1HoZ5H9HG5RAvh8xMKIFbK1lYWq/CASgEY+IjSrzHxcMD8koOg2AqP+XWax6/44jILJ4JBoQA/a3sWidbcIliYW7wjRA/7+VxasWFw8Krp7RTZf/gnqWhtovoQBM19GNgdaxdNS8WYFoaKz8AtDazKqdwPSxFPOA28+y1NSMqgU+84PRJtnP3s1SVDuoJTRFU4sBmpppAmAvg3pDX7GA/M8At7B0dfY+BECmjw/h5Od/6ygDYOsxRSCZ0lRQPUtdmGkS3omiMbKHgU119AE0Q0bHGr6dWObIfuxhVgFhUmRzePpA2btAbK9VAgBmomSmd0+YLvuhFxXxn22H9IXpXgBiQqEJxPUEMV6pUPnrIWsVAsC2AgDkeKZHc+XPAirlP2TVDMn1ACB/MuSQYgAgRcAjGpwof0HYc+UAbAEA0LqHAqnyn9isHIB2RJJ0PLgGtLIKChEQ693WRMuvAVeUBNCLqAOToH2AMnHwyJx5P7gfACyKrlcSAGTdTIFLNhywJq5XUQCIfiBMBxwHEILPhl4VWFvZhh0PTAU8DT0fyF5ruN7o+7+IRmDqCADEorB2NIAnHLfyK5//RUwSRI7kghDlCR0HlZ7kOK7rFtWsgDMYnIZ4GLoAdHJD2raGf+EIohUkzi1nZqsQQOOAAwD3UyO9EeHsYQCzVAjgAufU0xZqqcFZw9/GadQH4Co3qoZHfJNEkOSw44u6uURtADpKn3KuulDqvWICYnQ6aiiMLgHXOXedeew1IoYYnQpKh6IBdHKeGrjqeQ3EaEdqNEttAH5r8ALAFQ92UACQNfR5nEZlABYOcHw61ogHoImCTApjASw6yfHLPTDGTRNnYwE8kfv7+/Kf49bfggNIw22R4zSMG5Tlf8sAJyCXwBhjdQKsExgFwG3rCNz/W12coP51DQsgBhUIuwLwbK4kBEDlnJhOYgHYg+EkOABu5cLAUiA/ceLCAkhimDiCB8A1DK4JoPgPcIoDIHFMBg0AtuC1RaL7j49xXBAAZDDxdABw3PVFUvI/g+u5oACIh30m7wWAa7jgL4LSRyc5LjgAYmE7JXoDsAXwx37zo0ts7HzKccECMBmTD/MBwN4hDAoXg46WCw0cFzwA+ag4yBcAe3s42OKjT1jTsu0pJ1FgAImMkToA+3D+WOfVa+614drVzmNdnHSBARgZvRIAhtR15vqFJ52PHg0+2Xb9zAAXoMAA9EykYgBsjWIxJ1tgAJHMmwoCQAgM4E3G8HoDMKDGQnYAjb///J97tAHc++/PvzfiACQxqP2C2MZfyyw20QZgf0fZr40oAGEM6EGk5Z7FohQAi+VeC8puFICHZRYlAVjKHqoLwAOn/z4ArC9fWFq6cJtfQ7712+zXlq8XBGApe6AmANbjFkEAK4cHBItWivsvcu3Ii45bMQAgjeBeiyCArpEB0Vei0W/XSPZ/UZcgAMteTCOI6AatZcIAykeHAKJpT7FrR99UZoV0g4hA6EeLMACXHOlCMQBi17q86kdIIIQIhY+KAHAZDa8RAyB2rcurjkJCYcRg6Ij/AEolACgVAXAEMhhCDIfLglMFyiDDYaMCAOg0ghAARkhKTKwKdD0W7tr4u8zHXQpUgURIUlSsEaQSCGEawXxIWvyuGIDirnKh8JYvbC7v4sQA3IWkxRETI1YxAPjBkF2IQCgWMzW2NxgAIKFwPGZyVGwwRAMAZjCUAZoe/0V5AL9ADI9DLZB4qDQATEIkCbdE5sFxJQEcB6VDZuEWSRHrXsUAlO21goyOgZ4kZ7179EgZbQBlR47etcJMTsBsIegq2gCw1qbhlsqGJgD7Utko7esLYGixNJMVSgBWQY3NAn4w4VQ3XQAHocbGAD+Zceo8Vf+Lz0ONTQV+NOVUDd0SUAM1dq7jRCXokYqn6QI4jbQ1Jwq1gYiLTgQQ10u45QTSVj3w6/kRnZPgTaXD/0oJt5xD2ur8fn4e8qHPJHhT4gBQIuGWZ0hb5yE/n3dqg5QaXWIrA5VS/C/egLR1DHIDBWW6AWgnEAndQiOgVlCyTtBoAjCbqIzoO5oAvkNamg7dRme0EVhFcSSAbAJcttFhoKfLng6RMKgAu5WWInUAWgNysZupjerUQSEfDlTv2+jrfxv3VR8QHAqeAprptpkaNhr+t5ATS4uKiqr4/1Vl+9dSxeNgBj8ktq4SAVDNG/uUVIsAWHUbaeV49JaaLuoR8KKvyO4mz4cDxXY0vgrHkHqQNnpsqYmtA7eFisDyIQJeZaBkyP8dihWATPi2uq76n1A4by/pRdUeP3VVta+SQacF8NpWNw6aFflCKDM4VNeLipa7NPgHhoqFj7ZhWN1fQHMhcfittV11U3AMOFTabb93ZVVJcXFJVaXzb8Fx4U0K6VDs5upusYDgmLB4RxGPdgh+UlVzCmpgOoXt9f1vB51V3lXVVcKjgF1Q83i21wccsCApNda31NX9pX0il2MrAN8BC4AjNvwPBhxNwcbl1fuKivZVL98olhQqPo21jfeIDcAhK+7DYmBqqGYD1rZESsfsePSFsEmi87fBpiXTOmjJXS8OYvzvfgE2LJPicZtu+gEyU9r9A9qucfQOW/MkACgD3c/QVvk8bA22n8iodsluB87vghsVS/PARa/cgMy+oMYKN0nozM0U+NvIhh45/vdswFuUQvnQVe+YMOA8+apzFMwRPHQVvWZuuCEIsBrU7KJhTRr1g5d5xoY3AygE3TdP0bBF5OBlfCww3BZKbgl6rHQsGafE4eu89aDnTylTQC8omSF6+DoToaHx3vlrN3326Q0/Efz58m+fbVo7n4YdmghRAEw+Be9XV5jNnxQWvvvXP8Td/2Pnp4WFn5jNFaspMMgX95+JM2Df+eUmm/dm8z8KbQAKC1/2CY79S/peFg7pI/s9FZu+xNpiiPMDADQamr9khdmhzx2OvW+xLKis4p8ZqqpcYLG877ju8+HbVixBFoMUf/xnomGTJMv2LzY79eEIALsWVFb2VR0osadBi0tKDlT1Vdqdt2sYwIcjNy7evwxljz7aLwBMBqYdXOYo+8P62A2Abw0D+Njl1opNGASaDMZPhSMK/35X983m76UB+N7t5or9iIqQ4K//jM4kv+67u282fyANwAcet1fIbwtMOr8BMBNkVoL3Vpg9VSgNQKHXA1a8J7MCTGAkKFxe5TebfQG4IQbghuO6v/A8Ql5TEC7Ff0Y3JfA3rV3MY/xwFXh3pxiAnQ4A/+R7xuIlgVs1RScJABMR6Mq5+avNvBpuBL8VA/AtXyM4otWBtgRhEYxE/b+bs2lJJQrj+GOWJmLdsosoiBRNMxC0UXRAxBeIyF4hupdZCFdwIXORgtxECH0A+wIFLvoEBWXbu2rTokW4kVpdqnWbFndzb9d0zJd5OTNnZo79tkcez//xeTtnVJX3g3m+/85bbTC3J61/L9fbBjuCQGUlGANkVD0v/8mJ0RyEMi/SDnjJdA9C3ahKgyl0/WAbwRb+H0bhzImiEiCMwnjSYMSmwgFgRf1d+W5RfNeNw1AjB46k9B81M+D9MCRCEbUbfLWCKtbRvjr2i+ekuFDSCJtN8P9xWAIe7ZBoXweVIE0D+YLkprlqKwTq4vrrrQCoStsq5PWbADoelCDcjx3I6Oduy01xN8di+o9vmi8p38oYKxwg3IK5VTsAQooL4QEnS6sPZK5F9GevM7I9QECxB0ZCoAG/E5t+7qwkeCDbdwQQ9JfOOGwecPpBE14Ljvx/56ElMHPfpxUc3QvLD0qsKasDFi9oZH0Yl36OfxYkXla69VcuhcVnXpG5goJeMLwOmgnINsNdZfo57klIgrdSWPmQB9nKTXul9KTQHC87D9gDgAGP3PxX5JRylxNk5jKXJ5X6Tja7U6+ctD/9t4U7xeaKcjOhB7CwJP0u+5xyahlZagjm9qV3tgSYkByITjkUajlp+bkakrlTfQagHiT+aifPoXFXktJfukM0l8dxB6olBnZ5xB1zT8/i+v/+QbUmXgiHACuzGApAa88P5f7yyw88ujWxMjALmPHY0S5AJGfCwz55UDo8U2Ws7wWJ3QPYCQxrmAB6TkbVi075F9VblaYKfZJgOAA68MWCIwHaNyRXh+evj+Xy4+v54dVvDYZ6k8DyBXTB69TYAXSiuxM4vaAT/q7TcZEMBxS7zr9+0I3QhPYKqAMddXAiBDrinmw3gx88KQ7g22cC+6Qb9GXBQlwAfAgBywLozvQcaQHQDoG5aTCA0BRpAdAKgakQGMOYhZwW0G4EljEwDOs8KTNAexaYt4KBOIa+keWA70MOMJbkIkn6F5NgOA7KR4p8H+UAM0ilydCfToFJjMYj5suPxEfBPMaDJueBLzgO5pJKmKk/kQLzoU3rB4s0EIGbiZkhP8a4gRQczIrR8lcYB5CEgwkbKT9MmPxGT6QNK4cJehSIJLlsQFP0LSeBXFyUzvUwRrmAcGhWtzDwsaTGftd4GN+K4lcf3Yq7YDB4+5T81CpWH0RXKT8MGDPxBKZc8CXiMzCQhOig5ukgHKRDMLiMgmszuKYyEnyrwU1XI6MGHdsGxYaRakI0zFIbNvhU2JLMNrsme4MSWWO3meQn097hhxTNUMFlNh2ORSJvURH1RSIrsXCaXQ5SDJ0yXPk/NHqQUwRgafgAAAAASUVORK5CYII="},34:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(5),l=a(4);t.a=function(e){return function(t){return Object(c.c)((function(e){return e.auth.isAuth}))?r.a.createElement(e,t):r.a.createElement(l.a,{to:"/login"})}}},44:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return r}));var n=function(e){return e.auth.userId},r=function(e){return e.auth}},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),l=a.n(c),s=a(14),i=a(4),o=a(11),u=a(5),m=a(24),f=a(12),d=r.a.memo((function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.auth})),a=t.login,n=t.isAuth;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container header-container"},r.a.createElement(s.c,{to:"/profile",className:"header__logo"},r.a.createElement("svg",null,r.a.createElement("use",{href:f.a+"#logo"}))),n&&r.a.createElement("div",{className:"header__auth"},r.a.createElement("span",null,a),r.a.createElement("button",{className:"btn btn--logout",type:"button",onClick:function(){e(Object(m.c)())}},"\u0412\u044b\u0439\u0442\u0438"))))}));var v=function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",{className:"navbar__list"},r.a.createElement("li",{className:"navbar__list-item"},r.a.createElement(s.c,{to:"/profile",className:"navbar__list-link"},r.a.createElement("svg",{className:"navbar__list-ico"},r.a.createElement("use",{href:f.a+"#home"})),r.a.createElement("span",null,"\u041c\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430"))),r.a.createElement("li",{className:"navbar__list-item"},r.a.createElement(s.c,{to:"/messanger",className:"navbar__list-link"},r.a.createElement("svg",{className:"navbar__list-ico"},r.a.createElement("use",{href:f.a+"#messages"})),r.a.createElement("span",null,"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"))),r.a.createElement("li",{className:"navbar__list-item"},r.a.createElement(s.c,{to:"/users",className:"navbar__list-link"},r.a.createElement("svg",{className:"navbar__list-ico"},r.a.createElement("use",{href:f.a+"#users"})),r.a.createElement("span",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"))),r.a.createElement("li",{className:"navbar__list-item"},r.a.createElement("a",{href:"/",className:"navbar__list-link"},r.a.createElement("svg",{className:"navbar__list-ico"},r.a.createElement("use",{href:f.a+"#news"})),r.a.createElement("span",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"))),r.a.createElement("li",{className:"navbar__list-item"},r.a.createElement("a",{href:"/",className:"navbar__list-link"},r.a.createElement("svg",{className:"navbar__list-ico"},r.a.createElement("use",{href:f.a+"#music"})),r.a.createElement("span",null,"\u041c\u0443\u0437\u044b\u043a\u0430"))),r.a.createElement("li",{className:"navbar__list-item"},r.a.createElement("a",{href:"/",className:"navbar__list-link"},r.a.createElement("svg",{className:"navbar__list-ico"},r.a.createElement("use",{href:f.a+"#settings"})),r.a.createElement("span",null,"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")))))},A=a(6),p=a.n(A),g=a(15),E=a(16),b=a(2),h=function(e){return{type:b.o,payload:e}},k=a(19),P=r.a.memo((function(e){var t=e.status,a=e.userId,c=e.myId,l=Object(u.b)(),s=Object(n.useRef)(),i=Object(n.useState)(!1),o=Object(k.a)(i,2),m=o[0],f=o[1],d=Object(n.useState)(t),v=Object(k.a)(d,2),A=v[0],b=v[1];Object(n.useEffect)((function(){return document.body.addEventListener("mousedown",P),function(){document.body.removeEventListener("mousedown",P)}}),[]),Object(n.useEffect)((function(){t!==A&&b(t.trim())}),[t]);var P=function(e){(e.path||e.composedPath&&e.composedPath()).includes(s.current)||f(!1)},w=function(e){var a;e?(e!==t&&l((a=e,function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.b.putUserStatus(a);case 2:0===e.sent.data.resultCode&&t(h(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),f(!1)):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430!")};return r.a.createElement("div",{className:"profile-status"},a===c?m?r.a.createElement("div",{className:"profile-status__edit",ref:s},r.a.createElement("div",{className:"profile-status__title"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u0442\u0430\u0442\u0443\u0441\u0430"),r.a.createElement("input",{autoFocus:!0,type:"text",className:"profile-status__input",value:A,onChange:function(e){b(e.target.value)}}),r.a.createElement("button",{className:"btn btn--status-save",onClick:function(){return w(A)}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")):r.a.createElement("div",{className:"profile-status__label",onClick:function(){return f(!0)}},t||"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0447\u0442\u043e \u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"):r.a.createElement("div",{className:"profile-status__label"},t))}));var w=function(e){var t=e.post,a=e.avatar,n=e.onDeletePost,c=e.onLikePost,l=t.id,s=t.text,i=t.img,o=t.likeCount,u=t.liked;return r.a.createElement("div",{className:"block post"},r.a.createElement("div",{className:"post__author avatar"},r.a.createElement("img",{src:a,alt:"Alex"})),r.a.createElement("div",{className:"post__body"},r.a.createElement("div",{className:"post__text"},s),t.img&&r.a.createElement("div",{className:"post__img"},r.a.createElement("img",{src:i,alt:s}))),r.a.createElement("button",{className:"btn btn--like",onClick:function(){return c(l)}},r.a.createElement("span",null,o,"\xa0"),r.a.createElement("svg",{className:u?"liked":""},r.a.createElement("use",{href:f.a+"#like"}))),r.a.createElement("button",{className:"btn btn--remove-post",onClick:function(){return n(l)}},r.a.createElement("svg",null,r.a.createElement("use",{href:f.a+"#trash"}))))},O=r.a.memo((function(e){var t=e.posts,a=e.avatar,c=Object(u.b)(),l=Object(n.useState)(""),s=Object(k.a)(l,2),i=s[0],o=s[1],m=function(e){c(function(e){return{type:b.c,payload:e}}(e))},f=function(e){c(function(e){return{type:b.q,payload:e}}(e))};return r.a.createElement("div",{className:"my-posts"},r.a.createElement("form",{className:"block add-form"},r.a.createElement("input",{className:"add-form-field",type:"text",placeholder:"\u0427\u0442\u043e \u0443 \u0412\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?",onChange:function(e){o(e.target.value)},value:i}),r.a.createElement("button",{className:"btn btn--add-form",onClick:function(e){var t;e.preventDefault(),i.trim()?(c((t=i,{type:b.a,payload:t})),o("")):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442!")}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")),t.map((function(e){return r.a.createElement(w,{post:e,avatar:a,key:e.id,onDeletePost:m,onLikePost:f})})))})),N=a(34),j=function(e){return e.profile},I=function(e){return e.posts.activePosts},C=a(44),y=a(29);var M=Object(o.d)(i.f,N.a)((function(e){var t=Object(u.b)(),a=Object(u.c)(j),c=a.userId,l=a.fullName,s=a.aboutMe,i=a.lookingForAJob,o=a.lookingForAJobDescription,m=a.contacts,f=a.photos,d=a.status,v=Object(u.c)(I),A=Object(u.c)(C.b);return Object(n.useEffect)((function(){t(function(e){return function(){var t=Object(g.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.b.getUserProfile(e);case 2:return n=t.sent,a((c=n,{type:b.m,payload:c})),t.next=6,E.b.getUserStatus(e);case 6:r=t.sent,a(h(r));case 8:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()}(e.match.params.userId||A))}),[e.match.params.userId]),r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile__header"},r.a.createElement("div",{className:"block profile__info"},r.a.createElement("ul",{className:"profile__info-list"},r.a.createElement("li",{className:"profile__info-item profile__info--name"},l),r.a.createElement("li",{className:"profile__info-item"},r.a.createElement(P,{status:d,userId:c,myId:A})),r.a.createElement("li",{className:"profile__info-item"},r.a.createElement("span",null,"\u041e\u0431\u043e \u043c\u043d\u0435:"),s||"\u0418\u0437\u0443\u0447\u0430\u044e React"),r.a.createElement("li",{className:"profile__info-item"},i?"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b":"\u0420\u0430\u0431\u043e\u0442\u0430\u044e \u0432 Google"),r.a.createElement("li",{className:"profile__info-item"},r.a.createElement("span",null,"Stack:"),o||"React, Redux, Hooks, axios, classnames, React thunk"),r.a.createElement("li",{className:"profile__info-item"},r.a.createElement("span",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"),r.a.createElement("a",{href:m.github&&"".concat(m.github),rel:"noopener noreferrer",target:"_blank"},m.github||"\u043d\u0435 \u0441\u0438\u0436\u0443 \u0432 \u0441\u043e\u0446.\u0441\u0435\u0442\u044f\u0445")))),r.a.createElement("div",{className:"block profile__photo"},r.a.createElement("img",{src:f.large||y.a,alt:l}))),r.a.createElement(O,{posts:v,avatar:f.large||y.a}))})),x=a(25),S=function(e){return function(t){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(x.a,null)},r.a.createElement(e,t))}},D=r.a.lazy((function(){return a.e(5).then(a.bind(null,130))})),T=r.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,129))})),Q=r.a.lazy((function(){return Promise.all([a.e(0),a.e(4),a.e(6)]).then(a.bind(null,131))}));var U=Object(o.d)(i.f)((function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.initialisation.initialized}));return Object(n.useEffect)((function(){e(function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(Object(m.a)());case 2:t({type:b.j});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),t?r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(d,null),r.a.createElement("div",{className:"container main-container"},r.a.createElement(v,null),r.a.createElement(s.b,{basename:"/"},r.a.createElement(i.b,{path:"/profile/:userId?",render:M}),r.a.createElement(i.b,{path:"/messanger",exact:!0,render:S(D)}),r.a.createElement(i.b,{path:"/users",exact:!0,render:S(T)}),r.a.createElement(i.b,{path:"/login",exact:!0,render:S(Q)}))))):r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"main-wrapper"},r.a.createElement(x.a,null)))})),B=a(1),R={userId:null,aboutMe:null,photos:{small:null,large:null},fullName:null,lookingForAJob:null,lookingForAJobDescription:null,contacts:{github:null},status:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.m:return Object(B.a)(Object(B.a)({},e),t.payload);case b.o:var a=t.payload?t.payload.trim():"";return Object(B.a)(Object(B.a)({},e),{},{status:a});default:return e}},K=a(18),F={activePosts:[{id:1,text:"Some interesting post",likeCount:0,liked:!1},{id:2,text:"Some post about pandas",likeCount:1,liked:!0}]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.l:return e;case b.a:var a={id:Date.now(),text:t.payload,likeCount:0,liked:!1};return Object(B.a)(Object(B.a)({},e),{},{activePosts:[a].concat(Object(K.a)(e.activePosts))});case b.c:return Object(B.a)(Object(B.a)({},e),{},{activePosts:e.activePosts.filter((function(e){return e.id!==t.payload}))});case b.q:return Object(B.a)(Object(B.a)({},e),{},{activePosts:e.activePosts.map((function(e){return e.id!==t.payload||e.liked?e.id===t.payload&&e.liked?Object(B.a)(Object(B.a)({},e),{},{likeCount:--e.likeCount,liked:!1}):e:Object(B.a)(Object(B.a)({},e),{},{likeCount:++e.likeCount,liked:!0})}))});default:return e}},V=a(27),W={dialogs:[{id:1,name:"Sasha"},{id:2,name:"Masha"}],messages:{1:[{id:1423342,author:"Sasha",time:"14.10.2020",text:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:2,author:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",time:"15.10.2020",text:"\u041f\u0440\u0438\u0432\u0435\u0442, \u043a\u0430\u043a \u0434\u0435\u043b\u0430?"}],2:[{id:1345,author:"Masha",time:"14.10.2020",text:"\u041f\u0440\u0438\u0432\u0435\u0442"},{id:23242,author:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",time:"16.10.2020",text:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0437\u0434\u043e\u0440\u043e\u0432\u043e \u0447\u0442\u043e \u0442\u044b \u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0448\u044c\u0441\u044f \u043c\u043e\u0435\u0439 \u0441\u043e\u0446. \u0441\u0435\u0442\u044c\u044e."}]},activeDialogId:1,newMessage:""},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.e:return Object(B.a)(Object(B.a)({},e),{},{activeDialogId:t.payload});case b.d:var a=new Date,n=a.getDate()+"."+a.getMonth()+"."+a.getFullYear(),r={id:Date.now(),author:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",time:n,text:e.newMessage};return Object(B.a)(Object(B.a)({},e),{},{messages:Object(B.a)(Object(B.a)({},e.messages),{},Object(V.a)({},e.activeDialogId,[].concat(Object(K.a)(e.messages[e.activeDialogId]),[r]))),newMessage:""});case b.b:return Object(B.a)(Object(B.a)({},e),{},{newMessage:t.payload});default:return e}},L={items:[],pageSize:24,totalUsersCount:0,currentPage:1,isLoading:null,followingInProgress:[]},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.n:return t.payload?Object(B.a)(Object(B.a)({},e),{},{items:t.payload.items,totalUsersCount:t.payload.totalCount,isLoading:!1}):e;case b.h:return Object(B.a)(Object(B.a)({},e),{},{currentPage:t.payload||e.currentPage,isLoading:!1});case b.p:return Object(B.a)(Object(B.a)({},e),{},{items:e.items.map((function(e){return e.id===t.payload?Object(B.a)(Object(B.a)({},e),{},{followed:!e.followed}):e})),followingInProgress:e.followingInProgress.filter((function(e){return e!==t.payload}))});case b.k:return Object(B.a)(Object(B.a)({},e),{},{isLoading:!0});case b.i:return Object(B.a)(Object(B.a)({},e),{},{followingInProgress:t.payload.isFetching&&[].concat(Object(K.a)(e.followingInProgress),[t.payload.id])});default:return e}},X={userId:null,email:null,login:null,isAuth:!1,captchaUrl:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.g:return Object(B.a)(Object(B.a)(Object(B.a)({},e),t.payload),{},{captchaUrl:""});case b.f:return Object(B.a)(Object(B.a)({},e),{},{captchaUrl:t.payload?t.payload:""});default:return e}},G={initialized:!1},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.j:return Object(B.a)(Object(B.a)({},e),{},{initialized:!0});default:return e}},z=Object(o.c)({profile:_,posts:J,messanger:H,users:Y,auth:Z,initialisation:q}),$=a(47),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,te=Object(o.e)(z,ee(Object(o.a)($.a)));a(75);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:te},r.a.createElement(s.a,null,r.a.createElement(U,null)))),document.getElementById("root"))}},[[76,2,3]]]);
//# sourceMappingURL=main.1ffc4520.chunk.js.map
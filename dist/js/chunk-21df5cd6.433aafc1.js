(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21df5cd6"],{"12af":function(e,t,s){},"4e8b":function(e,t,s){e.exports=s.p+"img/contact.dacca721.jpg"},"5abd":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"pure-menu pure-menu-horizontal pure-menu-scrollable social-links"},[e.socialLinks?s("ul",{staticClass:"pure-menu-list"},[!0===e.socialLinks.hasWebsite?s("li",{staticClass:"pure-menu-item"},[s("a",{staticClass:"pure-menu-link",attrs:{href:e.socialLinks.webUrl}},[s("i",{staticClass:"fas fa-globe"})])]):e._e(),!0===e.socialLinks.hasYoutube?s("li",{staticClass:"pure-menu-item"},[s("a",{staticClass:"pure-menu-link",attrs:{href:e.socialLinks.youtubeUrl}},[s("i",{staticClass:"fab fa-youtube youtube"})])]):e._e(),!0===e.socialLinks.hasTwitter?s("li",{staticClass:"pure-menu-item"},[s("a",{staticClass:"pure-menu-link",attrs:{href:e.socialLinks.twitterUrl}},[s("i",{staticClass:"fab fa-twitter twitter"})])]):e._e(),!0===e.socialLinks.hasSoundcloud?s("li",{staticClass:"pure-menu-item"},[s("a",{staticClass:"pure-menu-link",attrs:{href:e.socialLinks.soundcloudUrl}},[s("i",{staticClass:"fab fa-soundcloud soundcloud"})])]):e._e(),!0===e.socialLinks.hasFacebook?s("li",{staticClass:"pure-menu-item"},[s("a",{staticClass:"pure-menu-link",attrs:{href:e.socialLinks.facebookUrl}},[s("i",{staticClass:"fab fa-facebook facebook"})])]):e._e(),!0===e.socialLinks.hasInstagram?s("li",{staticClass:"pure-menu-item"},[s("a",{staticClass:"pure-menu-link",attrs:{href:e.socialLinks.instagramUrl}},[s("i",{staticClass:"fab fa-instagram instagram"})])]):e._e()]):e._e()])},i=[],n={name:"SocialLinksBar",props:["socialLinks"]},l=n,o=(s("894b"),s("2877")),c=Object(o["a"])(l,a,i,!1,null,"6332e71a",null);t["a"]=c.exports},"67ce":function(e,t,s){"use strict";var a=s("a331"),i=s.n(a);i.a},7892:function(e,t,s){},"894b":function(e,t,s){"use strict";var a=s("12af"),i=s.n(a);i.a},a331:function(e,t,s){},ace9:function(e,t,s){"use strict";var a=s("7892"),i=s.n(a);i.a},b8fa:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"pure-g center-content-sm center-content fullwidth-sm"},[a("img",{staticClass:"pure-img cover-img fade-in",attrs:{src:s("4e8b"),alt:"Audience Hand Wave"}}),a("div",{staticClass:"pure-u-1 pure-u-sm-1-1 fill-height fullwidth-sm fade-in"},[e._m(0),a("section",{staticClass:"pure-u-1 pure-u-sm-1-2"},[a("email-form")],1),a("section",{staticClass:"pure-u-1 pure-u-sm-1-2 social-links"},[a("h4",{staticClass:"align-text-center"},[e._v("or send me a DM on my socials")]),a("social-links-bar",{attrs:{socialLinks:e.socialLinks}})],1)])])},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("header",[s("h1",[e._v("Leave a message")])])])}],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("form",{staticClass:"pure-form"},[s("fieldset",[s("h4",[e._v("Send me an e-mail")]),s("div",{staticClass:"message"},[s("label",{attrs:{for:"subject"}},[e._v("Subject:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.model.in1,expression:"model.in1"}],staticClass:"pure-input-1-2",attrs:{type:"text",id:"subject"},domProps:{value:e.model.in1},on:{input:function(t){t.target.composing||e.$set(e.model,"in1",t.target.value)}}})]),s("div",{staticClass:"message"},[s("label",{attrs:{for:"message-body"}},[e._v("Message:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.model.in2,expression:"model.in2"}],staticClass:"pure-input-1-2",attrs:{id:"message-body"},domProps:{value:e.model.in2},on:{input:function(t){t.target.composing||e.$set(e.model,"in2",t.target.value)}}})]),s("div",{staticClass:"button-wrapper"},[s("button",{staticClass:"pure-button pure-button-primary",attrs:{id:"send-button",type:"submit",disabled:e.isDisabled},on:{click:e.sendMail}},[e._v("Send")])])])])},l=[],o={name:"EmailForm",data:function(){return{model:{in1:"",in2:""}}},methods:{sendMail:function(){var e=document.getElementById("message-body").value,t=document.getElementById("subject").value;document.location.href="mailto:d.morandarte23@gmail.com?subject="+encodeURIComponent(t)+"&body="+encodeURIComponent(e)}},computed:{isDisabled:function(){return!this.model.in1||!this.model.in2}}},c=o,r=(s("ace9"),s("2877")),u=Object(r["a"])(c,n,l,!1,null,"342828f5",null),m=u.exports,d=s("5abd"),f=s("bc3a"),p=s.n(f),b={name:"contact",components:{EmailForm:m,SocialLinksBar:d["a"]},data:function(){return{socialLinks:[]}},created:function(){var e=this;p.a.get("https://my-json-server.typicode.com/Z04P/fakendgtr/socialLinks/0").then(function(t){return e.socialLinks=t.data}).catch(function(e){return console.log(e)})}},k=b,v=(s("67ce"),Object(r["a"])(k,a,i,!1,null,"1475f4f5",null));t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-21df5cd6.433aafc1.js.map
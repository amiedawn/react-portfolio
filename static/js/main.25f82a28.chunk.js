(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{24:function(e,t,r){},29:function(e,t,r){var c={"./0.png":30,"./1.png":31,"./2.png":32,"./3.png":33,"./4.png":34,"./5.png":35};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=n,e.exports=a,a.id=29},30:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/0.0aa1c957.png"},31:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/1.64a09d50.png"},32:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/2.350bc2aa.png"},33:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/3.e22dbd8d.png"},34:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/4.0f7c4749.png"},35:function(e,t,r){"use strict";r.r(t),t.default=r.p+"static/media/5.bcb4a487.png"},36:function(e,t,r){},38:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r(18),n=r.n(a),o=(r(24),r(13)),l=r(9),s=r(10),i=r(12),d=r(11),j=r(7),b=r(0),u=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var c=arguments.length,a=new Array(c),n=0;n<c;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={clicked:!1},e.handleClick=function(){e.setState({clicked:!e.state.clicked})},e}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsx)(j.a,{fluid:!0,style:{backgroundColor:"#122240",color:"#be8180",padding:"15px"},children:Object(b.jsxs)("div",{className:"row my-5 text-center",children:[Object(b.jsx)("div",{className:"col-md-12 content"}),Object(b.jsx)("h1",{className:"navbar-logo",children:Object(b.jsxs)("span",{children:[Object(b.jsxs)("a",{className:"ml-4",style:{backgroundColor:"#122240",color:"#be8180",padding:"5px"},href:"./",children:["AMIE CARROLL"," "]}),Object(b.jsx)("i",{className:"fas fa-laptop-code"})]})}),this.props.children]})})}}]),r}(c.Component);var h=function(e){var t=e.tabs,r=void 0===t?[]:t,c=e.currentPage,a=e.handlePageChange;return Object(b.jsx)("ul",{className:"nav nav-tabs ml-auto my-1 mr-2",children:r.map((function(e){return Object(b.jsx)("li",{className:"nav-item",style:{backgroundColor:"#122240",color:"#be8180"},children:Object(b.jsx)("a",{style:{backgroundColor:"#122240",color:"#be8180"},href:"#"+e.toLowerCase(),onClick:function(){return a(e)},className:c===e?"nav-link active":"nav-link",children:e})},e)}))})},m=r.p+"static/media/bio-pic.9a6b43b3.png",p=function(){return Object(b.jsxs)("div",{className:"text-center",style:{backgroundColor:"#122240",color:"#c0a98e",padding:"35px"},children:[Object(b.jsx)("h1",{id:"about",children:"About Me"}),Object(b.jsx)("img",{src:m,style:{width:"35%",padding:"35px"},alt:"pic of author"}),Object(b.jsx)("p",{style:{fontSize:"20px"},children:"I am a former project manager, recently turned full-stack web developer. I love working on strong, collaborative teams toward a common goal. Learning new web technologies is my latest passion, and I get great satisfaction completing unique projects."}),Object(b.jsx)("p",{style:{fontSize:"20px"},children:"Though I grew up in the Midwest, I currently live in Southern Utah. When I am not in front of a computer, I enjoy spending time with my family, especially watching my kids perform their talents in singing, soccer, and gymnastics. Staying fit and serving in my church are also important to me."})]})},x=r(19);var g=r(6),O=r(8);var f=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(o.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)(""),l=Object(o.a)(n,2),s=l[0],i=l[1],d=r.name,j=r.email,u=r.message,h=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);i(t?"":"Your email is invalid.")}else e.target.value.length?i(""):i("".concat(e.target.name," is required."))};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{"data-testid":"h1tag",className:"text-center",style:{backgroundColor:"#122240",color:"#c0a98e",padding:"20px"},children:"Contact Me"}),Object(b.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),s||(a(Object(x.a)({},e.target.name,e.target.value)),console.log("Form",r))},style:{backgroundColor:"#122240",color:"#c0a98e"},children:[Object(b.jsxs)(g.a.Group,{style:{backgroundColor:"#122240",color:"#c0a98e",padding:"20px"},children:[Object(b.jsx)(g.a.Label,{htmlFor:"name",children:"Name:"}),Object(b.jsx)(g.a.Control,{type:"text",name:"name",defaultValue:d,onBlur:h})]}),Object(b.jsxs)(g.a.Group,{style:{backgroundColor:"#122240",color:"#c0a98e",padding:"20px"},children:[Object(b.jsx)(g.a.Label,{htmlFor:"email",children:"Email Address:"}),Object(b.jsx)(g.a.Control,{type:"email",name:"email",defaultValue:j,onBlur:h})]}),Object(b.jsxs)(g.a.Group,{style:{backgroundColor:"#122240",color:"#c0a98e",padding:"20px"},children:[Object(b.jsx)(g.a.Label,{htmlFor:"message",children:"Message:"}),Object(b.jsx)(g.a.Control,{as:"textarea",name:"message",rows:5,defaultValue:u,onBlur:h})]}),s&&Object(b.jsx)("div",{children:Object(b.jsx)("p",{className:"error-text",children:s})}),Object(b.jsx)(O.a,{className:"ml-4 mb-4","data-testid":"button",type:"submit",style:{backgroundColor:"#be8180",color:"#122240",padding:"10px"},children:"Submit"})]})]})},k=[{id:1,name:"Workout Planner",alt:"Workout Planner screenshot",src:"../../../../../public/workout-planner.png",deployUrl:"https://quiet-forest-44254.herokuapp.com",githubUrl:"https://github.com/amiedawn/workout-planner"},{id:2,name:"Jokinator",alt:"Jokinator screenshot",src:"../../../../../assets/projects/jokinator.png",deployUrl:"https://amiedawn.github.io/jokinator",githubUrl:"https://github.com/amiedawn/jokinator"},{id:3,name:"Weather Dashboard",alt:"Weather Dashboard screenshot",src:"../../../../../assets/projects/weather-dashboard.png",deployUrl:"https://amiedawn.github.io/weather-dashboard/",githubUrl:"https://github.com/amiedawn/weather-dashboard"},{id:4,name:"Tech Blog",alt:"Tech Blog screenshot",src:"../../../../../assets/projects/tech-blog.png",deployUrl:"https://morning-wave-37012.herokuapp.com",githubUrl:"https://github.com/amiedawn/tech-blog"},{id:5,name:"Code Quiz",alt:"Code Quiz screenshot",src:"../../../../../assets/projects/code-quiz.png",deployUrl:"https://amiedawn.github.io/quiz-app",githubUrl:"https://github.com/amiedawn/quiz-app"},{id:6,name:"Work Portfolio",alt:"Work Portfolio screenshot",src:"../../../../../assets/projects/work-portfolio.png",deployUrl:"https://amiedawn.github.io/work-portfolio",githubUrl:"https://github.com/amiedawn/work-portfolio"}],y=function(){return k.map((function(e,t){var c=r(29)("./".concat(t,".png")).default;return Object(b.jsx)(j.a,{style:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#122240",padding:"2rem"},children:Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("p",{className:"black-text text-capitalize",style:{backgroundColor:"#be8180",padding:"5px",textAlign:"center",fontSize:"35px"},children:e.name}),Object(b.jsx)("img",{className:"img-fluid",src:c,alt:e.alt,name:e.name,style:{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"center"}}),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{style:{padding:"25px",backgroundColor:"#be8180"},children:[Object(b.jsx)(O.a,{style:{backgroundColor:"#c0a98e",color:"#122240",borderColor:"#122240"},block:!0,href:e.deployUrl,target:"_blank",rel:"noopener noreferrer",children:e.deployUrl}),Object(b.jsx)(O.a,{style:{backgroundColor:"#c0a98e",color:"#122240",borderColor:"#122240"},block:!0,href:e.githubUrl,target:"_blank",rel:"noopener noreferrer",children:e.githubUrl})]})})]})]})},t)}))},v=function(e){e.images;return Object(b.jsx)(y,{})},w=r.p+"static/media/resume.5e686839.png",C=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsx)(O.a,{href:w,download:"resume.png",className:"ml-3 mr-6",style:{backgroundColor:"#be8180",color:"#122240"},children:"Download Resume Here"})}}]),r}(c.Component),N=function(e){Object(i.a)(r,e);var t=Object(d.a)(r);function r(){return Object(l.a)(this,r),t.apply(this,arguments)}return Object(s.a)(r,[{key:"render",value:function(){return Object(b.jsxs)(j.a,{style:{backgroundColor:"#122240",color:"#c0a98e"},children:[Object(b.jsx)("h1",{className:"mb-3 my-3 text-center",children:"Skills"}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-lg-4 col-md-4 col-sm-4",children:[Object(b.jsx)("h5",{children:"Front-end:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"HTML5"}),Object(b.jsx)("li",{children:"CSS"}),Object(b.jsx)("li",{children:"React"}),Object(b.jsx)("li",{children:"Bootstrap"}),Object(b.jsx)("li",{children:"jQuery"}),Object(b.jsx)("li",{children:"Handlebars"}),Object(b.jsx)("li",{children:"Bulma"})]})]}),Object(b.jsxs)("div",{className:"col-lg-4 col-md-4 col-sm-4",children:[Object(b.jsx)("h5",{children:"Back-end:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"JavaScript"}),Object(b.jsx)("li",{children:"Node.js"}),Object(b.jsx)("li",{children:"MySQL"}),Object(b.jsx)("li",{children:"Express"}),Object(b.jsx)("li",{children:"MongoDB"}),Object(b.jsx)("li",{children:"Mongoose"}),Object(b.jsx)("li",{children:"Moment.js"}),Object(b.jsx)("li",{children:"Inquirer.js"}),Object(b.jsx)("li",{children:"Sequelize"}),Object(b.jsx)("li",{children:"Dotenv"}),Object(b.jsx)("li",{children:"Express-session"}),Object(b.jsx)("li",{children:"Regex"}),Object(b.jsx)("li",{children:"IndexedDB"})]})]}),Object(b.jsxs)("div",{className:"col-lg-4 col-md-4 col-sm-4",children:[Object(b.jsx)("h5",{children:"Other:"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"GitHub / GitHub Pages"}),Object(b.jsx)("li",{children:"Insomnia Core"}),Object(b.jsx)("li",{children:"JSON"}),Object(b.jsx)("li",{children:"Webpack"}),Object(b.jsx)("li",{children:"GitLab"}),Object(b.jsx)("li",{children:"VS Code"}),Object(b.jsx)("li",{children:"Heroku"}),Object(b.jsx)("li",{children:"Webpack"}),Object(b.jsx)("li",{children:"Jest"}),Object(b.jsx)("li",{children:"Wix.com"}),Object(b.jsx)("li",{children:"Weebly.com"})]})]})]})]})}}]),r}(c.Component);var S=function(){return Object(b.jsxs)("div",{className:"mr-6",style:{backgroundColor:"#122240",color:"#c0a98e",padding:"20px"},children:[Object(b.jsx)(C,{}),Object(b.jsx)(N,{})]})};function U(){return Object(b.jsx)(j.a,{fluid:!0,children:Object(b.jsx)("div",{className:"row text-center",style:{backgroundColor:"#122240",color:"#be8180",padding:"1rem"},children:Object(b.jsxs)("div",{className:"col-md-12 content",children:[Object(b.jsx)("a",{style:{backgroundColor:"#122240",color:"#575a4b",padding:"5px"},href:"mailto:amiedawn@hotmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{className:"fa fa-envelope fa-fw fa-2x"})}),Object(b.jsx)("a",{style:{backgroundColor:"#122240",color:"#575a4b",padding:"5px"},href:"http://www.linkedin.com/in/amie-carroll-0976606",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{className:"fab fa-linkedin fa-fw fa-2x"})}),Object(b.jsx)("a",{style:{backgroundColor:"#122240",color:"#575a4b",padding:"5px"},href:"http://www.facebook.com/amie.whitecarroll",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{className:"fab fa-facebook fa-fw fa-2x"})}),Object(b.jsx)("a",{style:{backgroundColor:"#122240",color:"#575a4b",padding:"5px"},href:"https://github.com/amiedawn",target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{className:"fab fa-github fa-fw fa-2x"})}),Object(b.jsx)("div",{className:"row",id:"copyright",style:{margin:0},children:Object(b.jsx)("div",{className:"col-lg-12 ",children:Object(b.jsx)("p",{style:{backgroundColor:"#122240",color:"#575a4b"},className:"medium",children:"\xa9 2021"})})})]})})})}r(36),r(37);var I=function(){var e=["About Me","Portfolio","Contact","Resume"],t=Object(c.useState)(e[0]),r=Object(o.a)(t,2),a=r[0],n=r[1];return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(u,{children:Object(b.jsx)(h,{tabs:e,currentPage:a,handlePageChange:n})}),function(e){switch(e){case"About Me":return Object(b.jsx)(p,{});case"Portfolio":return Object(b.jsx)(v,{});case"Contact":return Object(b.jsx)(f,{});case"Resume":return Object(b.jsx)(S,{});default:return Object(b.jsx)(p,{})}}(a),Object(b.jsx)(U,{})]})};n.a.render(Object(b.jsx)(I,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.25f82a28.chunk.js.map
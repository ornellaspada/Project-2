(this["webpackJsonpproject-2-starter"]=this["webpackJsonpproject-2-starter"]||[]).push([[0],{36:function(e,t,s){},62:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(30),i=s.n(n),r=(s(36),s(8)),l=s(2),o=s(10),h=s.n(o),j=s(15),d=s(12),b=s(14),u=s(13),m=s(18),p=s.n(m),O="https://www.carboninterface.com/api/v1";function x(){return{headers:{Authorization:"Bearer ".concat("PoRJbKaz5sWFZKcKRNaw")}}}function g(e){return p.a.post("".concat(O,"/estimates"),e,x())}var v=s(0);var f=function(){var e=Object(l.f)(),t=c.a.useState(!1),s=Object(u.a)(t,2),a=s[0],n=s[1],i=c.a.useState({type:"",weight_value:0,weight_unit:"",distance_value:0,distance_unit:"",transport_method:""}),r=Object(u.a)(i,2),o=r[0],m=r[1],p=function(e){"weight_value"===e.target.name||"distance_value"===e.target.name?m(Object(b.a)(Object(b.a)({},o),{},Object(d.a)({},e.target.name,parseFloat(e.target.value)))):m(Object(b.a)(Object(b.a)({},o),{},Object(d.a)({},e.target.name,e.target.value.toLowerCase())))},O=function(){var t=Object(j.a)(h.a.mark((function t(s){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),t.prev=1,t.next=4,g(o);case 4:a=t.sent,e.push("/estimates/".concat(a.data.data.id)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n(!0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}();return Object(v.jsx)("section",{className:"hero is-fullheight-with-navbar is-success",children:Object(v.jsxs)("section",{className:"section",children:[Object(v.jsx)("h1",{className:"subtitle",children:"Please fill in the requred fields"}),Object(v.jsxs)("form",{className:"column is-half is-offset-one-quarter",onSubmit:O,children:[Object(v.jsx)("label",{className:"label",children:"Type"}),Object(v.jsx)("div",{className:"select",children:Object(v.jsxs)("select",{name:"type",onChange:p,children:[Object(v.jsx)("option",{children:" "}),Object(v.jsx)("option",{children:"Shipping"})]})}),a&&Object(v.jsx)("p",{className:"help is-danger",children:"* Type required"}),Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Weight Value"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input",placeholder:"Weight Value",name:"weight_value",type:"number",onChange:p})})]}),a&&Object(v.jsx)("p",{className:"help is-danger",children:"* Weight value required"}),Object(v.jsx)("label",{className:"label",children:"Weight Unit"}),Object(v.jsx)("div",{className:"select",children:Object(v.jsxs)("select",{name:"weight_unit",onChange:p,children:[Object(v.jsx)("option",{children:" "}),Object(v.jsx)("option",{children:"g"}),Object(v.jsx)("option",{children:"lb"}),Object(v.jsx)("option",{children:"kg"}),Object(v.jsx)("option",{children:"mt"})]})}),a&&Object(v.jsx)("p",{className:"help is-danger",children:"* Weight unit required"}),Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Distance Value"}),Object(v.jsx)("div",{className:"control",children:Object(v.jsx)("input",{className:"input",placeholder:"Distance Value",name:"distance_value",type:"number",onChange:p})})]}),a&&Object(v.jsx)("p",{className:"help is-danger",children:"* Distance value required"}),Object(v.jsx)("label",{className:"label",children:"Distance Unit"}),Object(v.jsx)("div",{className:"select",children:Object(v.jsxs)("select",{name:"distance_unit",onChange:p,children:[Object(v.jsx)("option",{children:" "}),Object(v.jsx)("option",{children:"mi"}),Object(v.jsx)("option",{children:"km"})]})}),a&&Object(v.jsx)("p",{className:"help is-danger",children:"* Distance unit required"}),Object(v.jsxs)("div",{className:"field",children:[Object(v.jsx)("label",{className:"label",children:"Transport Method"}),Object(v.jsx)("div",{className:"select",children:Object(v.jsxs)("select",{name:"transport_method",onChange:p,children:[Object(v.jsx)("option",{children:" "}),Object(v.jsx)("option",{children:"Ship"}),Object(v.jsx)("option",{children:"Train"}),Object(v.jsx)("option",{children:"Truck"}),Object(v.jsx)("option",{children:"Plane"})]})})]}),a&&Object(v.jsx)("p",{className:"help is-danger",children:"* Transportation method required"}),Object(v.jsx)("div",{className:"field",children:Object(v.jsx)("p",{className:"control",children:Object(v.jsx)("button",{className:"button is-primary is-light is-rounded",type:"submit",children:"Calculate"})})})]})]})})};var N=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("section",{className:"hero is-success is-light is-fullheight-with-navbar",children:[Object(v.jsxs)("div",{className:"hero-body",children:[Object(v.jsx)("p",{className:"title is-success",children:"About"}),Object(v.jsx)("p",{className:"subtitle",children:"The way we shop has changed dramatically over the past decade, even more so over the last year as our lives have moved exlusively online."}),Object(v.jsx)("p",{className:"subtitle",children:"Whilst we have easily adapted to this change, our planet has not!"}),Object(v.jsx)("p",{className:"subtitle",children:"Use our handy calulator to estimate the true environmental impact of that constant stream of packages arriving at your door, and choose to donate to one of our partner charities and help take care of our planet."}),Object(v.jsx)(r.b,{to:"/form",children:Object(v.jsx)("button",{className:"button is-primary is-light is-rounded is-focused is-fullwidth",children:"Estimate"})})]}),Object(v.jsx)("div",{children:Object(v.jsx)("img",{className:"co2",src:"https://i.imgur.com/E1M4mLu.png",alt:"logo"})})]})})};var w=function(){return Object(v.jsx)("nav",{className:"navbar is-primary",children:Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"navbar-brand",children:[Object(v.jsx)(r.b,{to:"/",className:"navbar-item",children:"Home"}),Object(v.jsx)(r.b,{to:"/form",className:"navbar-item",children:"Calculate my Footprint"})]})})})};var y=function(){var e=c.a.useState(null),t=Object(u.a)(e,2),s=t[0],a=t[1];return c.a.useEffect((function(){(function(){var e=Object(j.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("".concat(O,"/estimates"),x());case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(v.jsx)(v.Fragment,{children:s&&Object(v.jsx)("section",{className:"hero is-fullheight-with-navbar is-sucess",children:Object(v.jsxs)("section",{className:"resultsSection",children:[Object(v.jsxs)("section",{className:"section",children:[Object(v.jsx)("img",{className:"co2",src:"https://i.imgur.com/E1M4mLu.png",alt:"logo"}),Object(v.jsx)("h1",{children:"Your carbon footprint for this shipping would be:"}),Object(v.jsxs)("h2",{children:[s[s.length-1].data.attributes.carbon_g,"g"]}),Object(v.jsxs)("h2",{children:[s[s.length-1].data.attributes.carbon_kg,"kg"]}),Object(v.jsxs)("h2",{children:[s[s.length-1].data.attributes.carbon_lb,"lb"]}),Object(v.jsxs)("h2",{children:[s[s.length-1].data.attributes.carbon_mt,"mt"]}),Object(v.jsxs)("strong",{children:["The total cost to offset this would be \xa3",Math.ceil(7e-6*s[s.length-1].data.attributes.carbon_g)]})]}),Object(v.jsxs)("div",{className:"bottomTwo",children:[Object(v.jsxs)("section",{className:"section",children:[Object(v.jsx)("img",{className:"co2",src:"https://cdn.shopify.com/s/files/1/0502/7010/9865/files/Copy_of_Untitled_4_190x.png?v=1605188060"}),Object(v.jsx)("p",{className:"charityInfo",children:"Carbon Neutral Britain is the UK's leading Carbon Offsetting Initiative - allowing individuals and businesses to offset their carbon emissions."}),Object(v.jsx)("p",{children:"Become carbon neutral for \xa36.99 month"}),Object(v.jsx)("a",{className:"donateLink",href:"https://carbonneutralbritain.org/products/become-carbon-neutral?variant=37544813428905&selling_plan=12419241",children:Object(v.jsx)("strong",{children:"Donate"})})]}),Object(v.jsxs)("section",{className:"section",children:[Object(v.jsx)("img",{className:"co2",src:"https://cornwallinnovation.co.uk/wp-content/uploads/2019/12/Cool-Earth-logo-scaled-e1575539011735.jpg"}),Object(v.jsx)("p",{className:"charityInfo",children:"Cool Earth's vision is a world where tropical deforestation and degredation has no role in climate change."}),Object(v.jsx)("p",{children:"By supporting Cool Earth, you are protecting the rainforest, improving lives and helping to tackle the climate crisis"}),Object(v.jsx)("a",{className:"donateLink",href:"https://www.coolearth.org/get-involved/donate-cool-earth/",children:Object(v.jsx)("strong",{children:"Donate"})})]})]})]},s[0].data.id)})})};var _=function(){return Object(v.jsxs)(r.a,{children:[Object(v.jsx)(w,{}),Object(v.jsxs)(l.c,{children:[Object(v.jsx)(l.a,{exact:!0,path:"/",component:N}),Object(v.jsx)(l.a,{path:"/form",component:f}),Object(v.jsx)(l.a,{path:"/estimates/:id",component:y})]})]})};i.a.render(Object(v.jsx)(_,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.4fca836c.chunk.js.map
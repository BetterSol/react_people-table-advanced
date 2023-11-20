(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);c(28),c(29);var n=c(26),a=c.n(n),r=c(8),s=c(3),l=c(10),i=c.n(l),o=c(1),j=function(){return Object(o.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"navbar-brand",children:[Object(o.jsx)(r.c,{to:"/",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(o.jsx)(r.c,{to:"/people",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})})},d=(c(38),function(){return Object(o.jsxs)("div",{"data-cy":"app",children:[Object(o.jsx)(j,{}),Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(s.b,{})})})]})}),u=function(){return Object(o.jsx)("h1",{className:"title",children:"Home Page"})},b=c(5),h=c(0),m=c(9);function O(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];null===a?c.delete(n):Array.isArray(a)?(c.delete(n),a.forEach((function(e){c.append(n,e)}))):c.set(n,a)})),c.toString()}var x=c(24),p=c(27),f=["children","params"],v=function(e){var t=e.children,c=e.params,n=Object(p.a)(e,f),a=Object(r.d)(),s=Object(b.a)(a,1)[0];return Object(o.jsx)(r.b,Object(x.a)(Object(x.a)({to:{search:O(s,c)}},n),{},{children:t}))},N=[{All:null},{Male:"m"},{Female:"f"}],g=["16","17","18","19","20"],y=function(){var e=Object(r.d)(),t=Object(b.a)(e,2),c=t[0],n=t[1],a=c.get("sex"),s=c.get("query")||"",l=c.getAll("centuries");return Object(o.jsxs)("nav",{className:"panel",children:[Object(o.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(o.jsx)("p",{className:"panel-tabs","data-cy":"SexFilter",children:N.map((function(e){var t=Object(b.a)(Object.entries(e)[0],2),c=t[0],n=t[1];return Object(o.jsx)(v,{params:{sex:n},className:i()({"is-active":a===n}),children:c},n)}))}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("p",{className:"control has-icons-left",children:[Object(o.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",value:s,onChange:function(e){!function(e){var t=O(c,e);n(t)}({query:e.target.value.trim().toLowerCase()||null})}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(o.jsx)("div",{className:"level-left",children:g.map((function(e){return Object(o.jsx)(v,{"data-cy":"century",className:i()("button mr-1",{"is-info":l.includes(e)}),params:{centuries:l.includes(e)?l.filter((function(t){return t!==e})):[].concat(Object(m.a)(l),[e])},children:e},e)}))}),Object(o.jsx)("div",{className:"level-right ml-4",children:Object(o.jsx)(v,{"data-cy":"centuryALL",className:i()("button is-success",{"is-outlined":l.length}),params:{centuries:null},children:"All"})})]})}),Object(o.jsx)("div",{className:"panel-block",children:Object(o.jsx)(v,{className:i()("button is-link is-fullwidth",{"is-outlined":l.length}),params:{centuries:null,query:null,sort:null,order:null,sex:null},children:"Reset all filters"})})]})},w=(c(39),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})}),k=function(e){var t=e.person,c=e.motherNameLink,n=e.fatherNameLink,a=Object(s.r)().slug;return Object(o.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":a===t.slug}),children:[Object(o.jsx)("td",{children:Object(o.jsx)(r.b,{to:"/people/".concat(t.slug),className:i()({"has-text-danger":"f"===t.sex}),children:t.name})}),Object(o.jsx)("td",{children:t.sex}),Object(o.jsx)("td",{children:t.born}),Object(o.jsx)("td",{children:t.died}),Object(o.jsx)("td",{children:c?Object(o.jsx)(r.b,{to:"/people/".concat(c),className:"has-text-danger",children:t.motherName}):Object(o.jsx)(o.Fragment,{children:t.motherName||"-"})}),Object(o.jsx)("td",{children:n?Object(o.jsx)(r.b,{to:"/people/".concat(n),children:t.fatherName}):Object(o.jsx)(o.Fragment,{children:t.fatherName||"-"})})]})},L=[{Name:"name"},{Sex:"sex"},{Born:"born"},{Died:"died"}],S=function(e){var t=e.people,c=Object(r.d)(),n=Object(b.a)(c,1)[0],a=n.get("sort"),s=n.get("order"),l=function(e){var t=Object(m.a)(e),c=n.get("sex"),r=n.get("query"),l=n.getAll("centuries");return c&&(t=t.filter((function(e){return e.sex===c}))),r&&(t=t.filter((function(e){var t,c;return e.name.toLowerCase().includes(r)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(r))||(null===(c=e.fatherName)||void 0===c?void 0:c.toLowerCase().includes(r))}))),l&&l.length>0&&(t=t.filter((function(e){return null===l||void 0===l?void 0:l.includes(Math.ceil(e.born/100).toString())}))),a&&t.sort((function(e,t){switch(a){case"name":return e.name.localeCompare(t.name);case"sex":return e.sex.localeCompare(t.sex);case"born":return e.born-t.born;case"died":return e.died-t.died;default:return 0}})),"desc"===s&&t.reverse(),t}(t),j=function(e){var c;return null===(c=t.find((function(t){return t.name===e})))||void 0===c?void 0:c.slug};return Object(o.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[L.map((function(e){var t=Object(b.a)(Object.entries(e)[0],2),c=t[0],n=t[1],r=a===n&&"desc"===s?null:n,l=null;return a===n&&(l="desc"===s?null:"desc"),Object(o.jsx)("th",{children:Object(o.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:[c,Object(o.jsx)(v,{params:{sort:r,order:l},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:i()("fas",{"fa-sort":a!==n,"fa-sort-up":a===n&&!s,"fa-sort-down":a===n&&s})})})})]})},n)})),Object(o.jsx)("th",{children:"Mother"}),Object(o.jsx)("th",{children:"Father"})]})}),Object(o.jsx)("tbody",{children:l.map((function(e){return Object(o.jsx)(k,{person:e,motherNameLink:j(e.motherName),fatherNameLink:j(e.fatherName)},e.slug)}))})]})},A=c(4),F=c(7),C="https://mate-academy.github.io/react_people-table/api/people.json";function P(e){return new Promise((function(t){return setTimeout(t,e)}))}function E(){return(E=Object(F.a)(Object(A.a)().mark((function e(){return Object(A.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",P(500).then((function(){return fetch(C)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var _=function(){var e=Object(h.useState)([]),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(!1),r=Object(b.a)(a,2),s=r[0],l=r[1],i=Object(h.useState)(!1),j=Object(b.a)(i,2),d=j[0],u=j[1];Object(h.useEffect)((function(){l(!0),function(){return E.apply(this,arguments)}().then(n).catch((function(){return u(!0)})).finally((function(){return l(!1)}))}),[]);var m=!c.length&&!d&&!s;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h1",{className:"title",children:"People Page"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(o.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:!s&&Object(o.jsx)(y,{})}),Object(o.jsx)("div",{className:"column",children:Object(o.jsxs)("div",{className:"box table-container",children:[s&&Object(o.jsx)(w,{}),d&&!s&&Object(o.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!s&&(c.length?Object(o.jsx)(S,{people:c}):Object(o.jsx)("p",{children:"There are no people matching the current search criteria"})),m&&!s&&Object(o.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"})]})})]})})]})},q=function(){return Object(o.jsx)(r.a,{children:Object(o.jsx)(s.e,{children:Object(o.jsxs)(s.c,{path:"/",element:Object(o.jsx)(d,{}),children:[Object(o.jsx)(s.c,{path:"*",element:Object(o.jsx)("h1",{className:"title",children:"Page not found"})}),Object(o.jsx)(s.c,{index:!0,element:Object(o.jsx)(u,{})}),Object(o.jsx)(s.c,{path:"/home",element:Object(o.jsx)(s.a,{to:"/",replace:!0})}),Object(o.jsx)(s.c,{path:"people",children:Object(o.jsx)(s.c,{path:":slug?",element:Object(o.jsx)(_,{})})})]})})})};a.a.render(Object(o.jsx)(q,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ee1c6f7f.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(32)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(5),l=a.n(c),r=(a(14),a(16),a(2)),u=a(1);var m=o.a.createContext();function s(e){var t=function(e,t){var a=o.a.useState(!1),n=Object(u.a)(a,2),c=n[0],l=n[1],r=o.a.useState(!0),m=Object(u.a)(r,2),s=m[0],i=m[1],d=o.a.useState(t),f=Object(u.a)(d,2),p=f[0],E=f[1];return o.a.useEffect(function(){setTimeout(function(){try{var a,n=localStorage.getItem(e);n?a=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),a=[]),E(a)}catch(c){l(c)}finally{i(!1)}},1e3)},[]),{item:p,saveItem:function(t){try{var a=JSON.stringify(t);localStorage.setItem(e,a),E(t)}catch(c){l(c)}},loading:s,error:c}}("TODOS_V1",[]),a=t.item,n=t.saveItem,c=t.loading,l=t.error,s=o.a.useState(""),i=Object(u.a)(s,2),d=i[0],f=i[1],p=o.a.useState(!1),E=Object(u.a)(p,2),h=E[0],v=E[1],g=a.filter(function(e){return!0===e.completed}).length,b=a.length,O=[];O=!d.length>=1?a:a.filter(function(e){var t=e.text.toLowerCase(),a=d.toLowerCase();return t.includes(a)});return o.a.createElement(m.Provider,{value:{loading:c,error:l,totalTodos:b,completedTodos:g,addTodo:function(e){var t=Object(r.a)(a);console.log("New Todos Test: "+t),t.push({text:e,completed:!1}),n(t)},searchValue:d,setSearchValue:f,searchedTodos:O,completeTodo:function(e){var t=a.findIndex(function(t){return t.text===e}),o=Object(r.a)(a);o[t].completed=!o[t].completed,n(o)},deleteTodo:function(e){var t=a.findIndex(function(t){return t.text===e}),o=Object(r.a)(a);o.splice(t,1),n(o)},openModal:h,setOpenModal:v}},e.children)}function i(){var e=o.a.useContext(m),t=e.totalTodos,a=e.completedTodos;return o.a.createElement("h2",{className:"TodoCounter-title"},o.a.createElement("b",null,"Completed ",a)," of ",t," tasks")}a(18);function d(){var e=o.a.useContext(m),t=e.searchValue,a=e.setSearchValue;return o.a.createElement("input",{className:"todo-search",autoFocus:!0,value:t,placeholder:"Search a task...",onChange:function(e){a(e.target.value)}})}a(20);function f(e){return o.a.createElement("section",null,o.a.createElement("ul",null,e.children))}a(22);function p(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"todo-item"},o.a.createElement("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete},o.a.createElement("i",{className:"fa-solid fa-check"})),o.a.createElement("p",{className:"todo-item-p ".concat(e.completed&&"todo-item-p--complete")},e.text),o.a.createElement("span",{className:"Icon Icon-delete",onClick:e.onDelete},o.a.createElement("i",{className:"fa-solid fa-trash"}))))}a(24);function E(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"create-todo-button",onClick:function(){e.setOpenModal(function(e){return!e})}},"+"))}a(26);function h(){return o.a.createElement("header",null,o.a.createElement("h1",{className:"main-title"},"TO DO MACHINE"),o.a.createElement("i",{className:"logo fa-solid fa-pen"}))}var v=a(3),g=a.n(v);a(28);function b(e){var t=e.children;return g.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}a(30);function O(){var e=o.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1],c=o.a.useContext(m),l=c.addTodo,r=c.setOpenModal;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l(a),r(!1)}},o.a.createElement("label",{htmlFor:"text-area"},"Add your task"),o.a.createElement("textarea",{autoFocus:!0,value:a,id:"text-area",placeholder:"Your task here",onChange:function(e){n(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(l(a),r(!1))}}),o.a.createElement("div",{className:"todoForm-buttoncontainer"},o.a.createElement("button",{className:"todoForm-button todoForm-button--cancel",type:"button",onClick:function(){r(!1)}},"Cancel"),o.a.createElement("button",{className:"todoForm-button todoForm-button--add",type:"submit"},"Add")))}function N(){var e=o.a.useContext(m),t=e.error,a=e.loading,n=e.searchedTodos,c=e.completeTodo,l=e.deleteTodo,r=e.totalTodos,u=e.openModal,s=e.setOpenModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null),o.a.createElement(i,null),o.a.createElement(d,null),o.a.createElement(f,null,t&&o.a.createElement("p",null,"Error!"),a&&o.a.createElement("div",{class:"custom-loader"}),!a&&!n.length&&r>=1&&o.a.createElement("p",{className:"no-match"},"No TO DO found"),!a&&!r&&o.a.createElement("p",{className:"create-first-todo"},"\xa1Create your first TO DO!"),n.map(function(e){return o.a.createElement(p,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return c(e.text)},onDelete:function(){return l(e.text)}})})),u&&o.a.createElement(b,null,o.a.createElement(O,null)),o.a.createElement(E,{setOpenModal:s}))}var x=function(){return o.a.createElement(s,null,o.a.createElement(N,null))};l.a.createRoot(document.getElementById("root")).render(o.a.createElement(x,null))}],[[6,2,1]]]);
//# sourceMappingURL=main.b338f87b.chunk.js.map
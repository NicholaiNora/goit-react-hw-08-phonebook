"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[834],{2834:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var a=n(2791),r=n(9439),o="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",c=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;)e+=o[63&n[t]];return e},s={form:"ContactForm_form__dhl+T",formLabel:"ContactForm_formLabel__TSwxK",formInput:"ContactForm_formInput__GszVU",formButton:"ContactForm_formButton__TN6Jq"},i=n(4420),l=n(3553),u=function(t){return t.contacts.items},m=function(t){return t.contacts.isLoading},d=function(t){return t.contacts.error},f=function(t){return t.filter.filterValue},p=(0,l.P1)([u,f],(function(t,e){if(!e)return t;var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),h=n(4512),_=n(184);var x=function(){var t=(0,a.useState)(""),e=(0,r.Z)(t,2),n=e[0],o=e[1],l=(0,a.useState)(""),m=(0,r.Z)(l,2),d=m[0],f=m[1],p=(0,i.v9)(u),x=(0,i.I0)(),C=function(t){return t.toLowerCase().split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" ")},v=function(t){switch(t.target.name){case"name":o(t.target.value);break;case"phone":f(t.target.value)}},j=function(){o(""),f("")};return(0,_.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=p.find((function(t){return t.name.toLowerCase()===n.toLowerCase()||t.phone===d}));if(console.log(C(n)),e)return alert("".concat(C(n)," or ").concat(d," is already in contacts.")),void j();x((0,h.uK)({id:c(),name:n,phone:d})),j()},className:s.form,children:[(0,_.jsxs)("label",{className:s.formLabel,children:[(0,_.jsx)("span",{children:"Name"}),(0,_.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:n,onChange:v,className:s.formInput})]}),(0,_.jsxs)("label",{className:s.formLabel,children:[(0,_.jsx)("span",{className:s.formSpan,children:"Phone Number"}),(0,_.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[\\-.\\s]?\\(?\\d{1,3}?\\)?[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,4}[\\-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:d,onChange:v,className:s.formInput})]}),(0,_.jsx)("button",{type:"submit",className:s.formButton,children:"Add contact"})]})},C="SearchFilter_filterContainer__nlAPZ",v="SearchFilter_filterInput__QJcWn",j=n(2378);var b=function(){var t=(0,i.v9)(f),e=(0,i.I0)();return(0,_.jsxs)("div",{className:C,children:[(0,_.jsx)("span",{children:"Find contacts by name"}),(0,_.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,value:t,onChange:function(t){var n=t.target.value;e((0,j.T)(n))},className:v})]})},I={contactItem:"ContactListItem_contactItem__g+7xP",contactItemSpan:"ContactListItem_contactItemSpan__oV0zh",contactItemButton:"ContactListItem_contactItemButton__AS9V+"};var g=function(t){var e=t.contact,n=t.toCapitalize,a=(0,i.I0)();return(0,_.jsxs)("li",{className:I.contact,children:[(0,_.jsxs)("span",{className:I.contactItemSpan,children:[n(e.name),": ",e.phone]}),(0,_.jsx)("button",{className:I.contactItemButton,onClick:function(){return a((0,h.GK)(e.id))},children:"Delete"})]})},N="ContactList_contactList__UFVCg";var A=function(){var t=function(t){return t.toLowerCase().split(" ").map((function(t){return t.charAt(0).toUpperCase()+t.slice(1)})).join(" ")},e=(0,i.v9)(p);return console.log(e),(0,_.jsx)("ul",{className:N,children:e.map((function(e){return(0,_.jsx)(g,{toCapitalize:t,contact:e},e.id)}))})},L=n(3050);function w(){var t=(0,i.v9)(m),e=(0,i.v9)(d),n=(0,i.I0)();return(0,a.useEffect)((function(){n((0,h.yF)())}),[n]),(0,_.jsxs)("div",{children:[(0,_.jsx)(L.B6,{children:(0,_.jsx)(L.ql,{children:(0,_.jsx)("title",{children:"Contacts"})})}),(0,_.jsx)("h2",{children:"Phonebook"}),(0,_.jsx)(x,{}),(0,_.jsx)("h2",{children:"Contacts"}),(0,_.jsx)(b,{}),t&&!e&&(0,_.jsx)("b",{children:"Request in progress..."}),(0,_.jsx)(A,{})]})}}}]);
//# sourceMappingURL=834.1fca61d6.chunk.js.map
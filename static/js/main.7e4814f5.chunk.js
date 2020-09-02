(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(6),r=n.n(o),i=(n(14),n(8)),l=n(1),s=n(2),u=n(4),m=n(3),h=n(7),f=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.setState({name:"",number:""})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{className:"contact-form",onSubmit:this.handleSubmit},c.a.createElement("label",{htmlFor:"name"}," Name "),c.a.createElement("input",{value:e,name:"name",id:"name",type:"text",onChange:this.handleChange}),c.a.createElement("label",{htmlFor:"number"}," Number "),c.a.createElement("input",{value:n,name:"number",id:"number",type:"text",onChange:this.handleChange}),c.a.createElement("button",{type:"submit"}," Add contact"))}}]),n}(a.Component),d=function(t){var e=t.contacts,n=t.onRemove;return c.a.createElement("ul",{className:"contacts-list"},e.map((function(t){var e=t.id,a=t.name,o=t.number;return c.a.createElement("li",{key:e,className:"contacts-item"},c.a.createElement("span",{className:"contact-name"}," ",a," : ",o," "),c.a.createElement("button",{onClick:function(){return n(e)}},"Delet"))})))},b=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",{className:"filter-container"},c.a.createElement("label",{htmlFor:"filter"},"Find contacts by name"),c.a.createElement("input",{type:"text",id:"filter",value:e,onChange:function(t){return n(t.target.value)}}))},v=n(18),g=(n(15),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(v.a)(),name:n,number:a};t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[c])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return c.a.createElement("div",{className:"pnohebook-container"},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(f,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),e.length>1&&c.a.createElement(b,{onChangeFilter:this.changeFilter,value:n}),a.length>0&&c.a.createElement(d,{contacts:a,onRemove:this.removeContact}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.7e4814f5.chunk.js.map
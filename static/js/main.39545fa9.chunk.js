(this.webpackJsonpdirectory=this.webpackJsonpdirectory||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),s=a(12),c=a(13),m=a(16),i=a(15);var u=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for employee",id:"search"}))))};var h=function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:e.picture,alt:e.firstName})),r.a.createElement("td",null,e.firstName),r.a.createElement("td",null,e.lastName),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.phone))},p=a(14),f=a.n(p),d=function(){return console.log("route hit"),f.a.get("https://randomuser.me/api/?results=100&nat=us")},E=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={search:"",employee:[],results:[],error:""},e.searchEmployee=function(t){var a=e.state.results,n=[],r=t;console.log(r);for(var l=0;l<a.length;l++)a[l].firstName.toLowerCase().indexOf(r.toLowerCase())>-1&&(console.log(a[l].firstName),n.push(a[l]));e.setState({employee:n})},e.handleInputChange=function(t){var a=t.target.value;return e.setState({search:a}),e.searchEmployee(a)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;d().then((function(t){console.log(t);for(var a=t.data.results,n=[],r=0;r<a.length;r++)n.push({firstName:a[r].name.first,lastName:a[r].name.last,email:a[r].email,picture:a[r].picture.thumbnail,phone:a[r].cell});e.setState({employee:n,results:n}),e.sortEmployees()})).catch((function(e){return console.log(e)}))}},{key:"sortEmployees",value:function(){var e=this.state.results;e.sort((function(e,t){var a=e.firstName.toLowerCase(),n=t.firstName.toLowerCase();return a<n?-1:a>n?1:0})).then(this.setState({employee:e}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid bg-dark"},r.a.createElement("h1",null,"searching for ",this.state.search),r.a.createElement(u,{handleInputChange:this.handleInputChange}),r.a.createElement("table",{className:"table table-bordered table-striped table-dark table-responsive-sm"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Photo"),r.a.createElement("th",null,"First Name"),r.a.createElement("th",null,"Last Name"),r.a.createElement("th",null,"Email"),r.a.createElement("th",null,"Phone Number"))),r.a.createElement("tbody",null,this.state.employee.map((function(e,t){return r.a.createElement(h,{firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,picture:e.picture,key:t})})))))}}]),a}(n.Component);var v=function(){return r.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(39);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.39545fa9.chunk.js.map
(this.webpackJsonpiqm_task=this.webpackJsonpiqm_task||[]).push([[0],{19:function(e,t,a){e.exports=a(47)},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(16),s=a.n(o),r=(a(24),a(25),a(2)),c=a(3),i=a(4),m=a(6),u=a(5),d=a(17),h=a.n(d),p=(a(43),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return this.props.show?l.a.createElement("div",{className:"modalMain"},l.a.createElement("div",{className:"modalContainer"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h4",{className:"modal-title"},this.props.title),l.a.createElement("button",{type:"button",className:"close",onClick:this.props.close},"\xd7")),l.a.createElement("div",{className:"modal-body"},l.a.createElement("p",null,l.a.createElement("b",null,this.props.body)),l.a.createElement("div",null,l.a.createElement("a",{className:"button",target:"_blank",rel:"noopener noreferrer",href:this.props.link},this.props.link))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:this.props.close},"Close")))):null}}]),a}(l.a.Component)),f=a(18),E=a.n(f),b=(a(45),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).fetchList=function(){n.setState({loading:!0},(function(){h.a.get("https://api.stackexchange.com/2.2/search/advanced?site=stackoverflow",{params:{pagesize:100,order:"asc",body:"firebase"}}).then((function(e){var t=e.data.items;n.setState({hasMore:n.state.lists.length<100,lists:t,loading:!1})})).catch((function(e){n.setState({error:e.message,loading:!1})}))}))},n.showModal=function(e,t){n.setState({show:!0,temp:e,data:t})},n.closeModal=function(){n.setState({show:!1})},n.state={data:"",temp:"",lists:[],loading:!1,error:!1,hasMore:!0,show:!1},window.onscroll=E()((function(){var e=Object(i.a)(n),t=e.fetchList,a=e.state,l=a.error,o=a.loading,s=a.hasMore;l||o||!s||window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight&&t()}),1e3),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.fetchList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.error,o=t.hasMore;return l.a.createElement("div",{className:"container"},l.a.createElement("table",{className:"customers"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Author"),l.a.createElement("th",null,"Title"),l.a.createElement("th",{style:{width:"15%"}},"Creation date"))),l.a.createElement("tbody",null,this.state.lists&&this.state.lists.map((function(t){return l.a.createElement("tr",{key:t.question_id},l.a.createElement("td",null,t.owner.display_name),l.a.createElement("td",{onClick:function(a){e.showModal(t.title,t.link)}},t.title),l.a.createElement("td",null,t.creation_date))})))),n&&l.a.createElement("div",{style:{color:"#900"}},n),a&&l.a.createElement("div",null,l.a.createElement("h2",null,"Loading...")),!o&&l.a.createElement("div",null,l.a.createElement("h2",null,"You did it! You reached the end!")),l.a.createElement(p,{title:this.state.temp,show:this.state.show,close:this.closeModal,link:this.state.data,body:"firebase"}))}}]),a}(n.Component));var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h2",null,"Infinite Scroll of Questions"),l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.056967f6.chunk.js.map
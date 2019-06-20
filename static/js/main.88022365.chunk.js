(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),s=a.n(r),c=a(16),o=a(6),i=a(7),m=a(9),u=a(8),d=a(3),p=a(10),h=a(15),b=a(2),E=["light-blue","purple","light-green","red","orange-yellow"],f=a(4);function v(e){var t=e.color?"has-text-"+e.color:"",a=["icon",e.container?"is-"+e.container:"",t].join(" ");return l.a.createElement("span",{className:a},l.a.createElement(f.a,{icon:e.icon,size:e.iconSize}))}function y(e){function t(t){return{borderColor:t===e.selected?"#777":"transparent",borderWidth:"2px"}}return l.a.createElement("div",{className:"buttons is-centered"},E.map(function(a){return l.a.createElement("button",{onClick:function(t){return e.onClick(a)},className:"button is-hovered is-large",key:a,type:"button",style:t(a)},l.a.createElement(v,{icon:b.d,color:a,container:"medium",iconSize:"2x"}))}))}var N=function(e){function t(e){var a;Object(o.a)(this,t);var n=(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).props.pathways.find(function(t){return t.id===e.id});return a.state={name:n?n.name:"",color:n?n.color:void 0,duplicateNameError:!1,noNameError:!1,noColorError:!1},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.setColor=a.setColor.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=this,a=e.target.value;this.setState({name:a,noNameError:this.state.noNameError&&""===a.trim(),duplicateNameError:this.props.pathways.some(function(e){return e.id!==t.props.id&&e.name.toLowerCase()===a.trim().toLowerCase()})})}},{key:"setColor",value:function(e){this.setState({color:e,noColorError:!1})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.duplicateNameError;void 0===this.state.color&&(this.setState({noColorError:!0}),t=!0),""===this.state.name.trim()&&(this.setState({noNameError:!0}),t=!0),t||this.props.onSubmit({id:this.props.id,name:this.state.name.trim(),color:this.state.color})}},{key:"render",value:function(){var e=this;return l.a.createElement("nav",{className:"panel"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{type:"button",className:"button",onClick:this.props.goBack},l.a.createElement(v,{icon:b.a}))),l.a.createElement("div",{className:"level-item"},l.a.createElement("p",null,this.props.title))))),l.a.createElement("form",{className:"panel-block",onSubmit:this.handleSubmit,style:{display:"block"}},l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Name"),l.a.createElement("div",{className:"control"},l.a.createElement("input",{className:"input",placeholder:"Pathway name",type:"text",value:this.state.name,onChange:this.handleChange})),this.state.noNameError&&l.a.createElement("p",{className:"help is-danger"},l.a.createElement(v,{icon:b.g}),"Please enter a name for the pathway."),this.state.duplicateNameError&&l.a.createElement("p",{className:"help is-danger"},l.a.createElement(v,{icon:b.g}),"A pathway with that name already exists.")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{className:"label"},"Color"),l.a.createElement(y,{selected:this.state.color,onClick:this.setColor}),this.state.noColorError&&l.a.createElement("p",{className:"help is-danger"},l.a.createElement(v,{icon:b.g}),"Please select a color for this pathway.")),l.a.createElement("div",{className:"buttons"},l.a.createElement("button",{className:"button is-primary is-fullwidth"},l.a.createElement(v,{icon:b.i}),l.a.createElement("span",null,this.props.submitButtonText)),this.props.onDelete&&l.a.createElement("button",{className:"button is-hover is-danger is-outlined is-fullwidth",type:"button",onClick:function(){return e.props.onDelete(e.props.id)}},l.a.createElement(v,{icon:b.h}),l.a.createElement("span",null,"Delete Pathway")))))}}]),t}(l.a.Component);function k(e){return l.a.createElement("nav",{className:"panel"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{className:"button",onClick:e.goBack},l.a.createElement(v,{icon:b.a}))),l.a.createElement("div",{className:"level-item"},l.a.createElement("p",null,"Pathways"))))),e.pathways.map(function(t){return l.a.createElement(g,Object.assign({key:t.name},t,{selectPathway:e.onSelect}))}),e.onCreate&&l.a.createElement("div",{className:"panel-block"},l.a.createElement("button",{onClick:e.onCreate,type:"button",className:"button is-white is-fullwidth"},l.a.createElement(v,{icon:b.i}),l.a.createElement("span",null," Create a new pathway"))))}function g(e){return l.a.createElement("label",{className:"panel-block",onClick:function(t){return e.selectPathway(e.id)}},l.a.createElement("span",{className:"panel-icon has-text-"+e.color},l.a.createElement(f.a,{icon:b.d})),e.name)}var w=a(14),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).input=void 0,a.input=l.a.createRef(),a.handleUpload=a.handleUpload.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"handleUpload",value:function(e){var t=this,a=this.input.current.files,n=new FileReader;n.onabort=function(){return console.log("file reading was aborted")},n.onerror=function(){return console.log("file reading has failed")},n.onload=function(){console.log(n.result);var e=JSON.parse(n.result);console.log(e),t.props.setModel(e)},n.readAsText(a[0])}},{key:"importFile",value:function(e){}},{key:"render",value:function(){return l.a.createElement("nav",{className:"panel"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("div",{className:"level"},l.a.createElement("div",{className:"level-left"},l.a.createElement("div",{className:"level-item"},l.a.createElement("button",{className:"button",onClick:this.props.goBack},l.a.createElement(v,{icon:b.a}))),l.a.createElement("div",{className:"level-item"},l.a.createElement("p",null,"Import Data File"))))),l.a.createElement("div",{className:"panel-block",style:{padding:"3rem"}},l.a.createElement("div",{className:"file is-boxed is-centered is-vcentered"},l.a.createElement("label",{className:"file-label"},l.a.createElement("input",{className:"file-input",type:"file",ref:this.input,onChange:this.handleUpload}),l.a.createElement("span",{className:"file-cta"},l.a.createElement("span",{className:"file-icon"},l.a.createElement(v,{icon:b.m})),l.a.createElement("span",{className:"file-label"},"Choose a file\u2026"))))))}}]),t}(l.a.Component);function O(e){return l.a.createElement("nav",{className:"panel"},l.a.createElement("div",{className:"panel-heading"},"Select an Action"),l.a.createElement("p",{className:"panel-block",onClick:function(e){return null}},l.a.createElement("span",{className:"panel-icon"},l.a.createElement(f.a,{icon:b.c})),"Create Node"),l.a.createElement("p",{className:"panel-block",onClick:function(e){return null}},l.a.createElement("span",{className:"panel-icon"},l.a.createElement(f.a,{icon:b.b})),"Create Link"),l.a.createElement("label",{className:"panel-block",onClick:function(t){return e.become(j)}},l.a.createElement("span",{className:"panel-icon"},l.a.createElement(f.a,{icon:b.j})),"Create Pathway"),l.a.createElement("label",{className:"panel-block",onClick:function(t){return e.become(S)}},l.a.createElement("span",{className:"panel-icon"},l.a.createElement(f.a,{icon:b.f})),"Edit Pathway"),l.a.createElement("label",{className:"panel-block",onClick:function(t){return e.become(P)}},l.a.createElement("span",{className:"panel-icon"},l.a.createElement(f.a,{icon:b.m})),"Import Data"),l.a.createElement("label",{className:"panel-block",onClick:function(t){return e.become(x)}},l.a.createElement("span",{className:"panel-icon"},l.a.createElement(f.a,{icon:b.e})),"Export Data"))}function j(e){var t=e.model.pathways.map(function(e){return e.id}),a=t.length>0?1+Math.max.apply(Math,Object(h.a)(t)):1;return l.a.createElement(N,Object.assign({},e.model,{id:a,onSubmit:function(t){e.updatePathway(t),e.become(O)},goBack:function(t){return e.become(O)},title:"Create a Pathway",submitButtonText:"Create"}))}function S(e){return l.a.createElement(k,{pathways:e.model.pathways,goBack:function(t){return e.become(O)},onSelect:function(t){return e.become(function(e){return function(t){return l.a.createElement(N,Object.assign({},t.model,{id:e,onSubmit:function(e){t.updatePathway(e),t.become(S)},onDelete:function(e){t.deletePathway(e),t.become(S)},goBack:function(e){return t.become(S)},title:"Edit Pathway",submitButtonText:"Confirm changes"}))}}(t))}})}function P(e){return l.a.createElement(C,Object.assign({},e.model,{goBack:function(){return e.become(O)},setModel:function(t){e.setModel(t),e.become(O)}}))}function x(e){var t=new Blob([JSON.stringify(e.model,null,2)],{type:"application/json;charset=utf-8"});return Object(w.saveAs)(t,"atlas.json"),O(e)}var D="AppState",B={mode:O,data:{model:{assets:[],links:[],pathways:[]},undo:[],redo:[]},dirty:!1};var M=function(e){function t(e){var a;Object(o.a)(this,t),a=Object(m.a)(this,Object(u.a)(t).call(this,e));var n=localStorage.getItem(D);if(null===n&&(a.state=Object(c.a)({},B)),null!==n){var l=JSON.parse(n);a.state=Object.assign(B,{data:l})}return a.become=a.become.bind(Object(d.a)(a)),a.deletePathway=a.deletePathway.bind(Object(d.a)(a)),a.updatePathway=a.updatePathway.bind(Object(d.a)(a)),a.undo=a.undo.bind(Object(d.a)(a)),a.redo=a.redo.bind(Object(d.a)(a)),a.setModel=a.setModel.bind(Object(d.a)(a)),a.persistData=a.persistData.bind(Object(d.a)(a)),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"become",value:function(e){this.setState({mode:e})}},{key:"undo",value:function(){var e=this.state.data;if(e.undo.length>0){var t=e.redo.slice();t.push(e.model);var a=e.undo.slice(),n=a.pop();this.state.dirty||setTimeout(this.persistData,5e3),this.setState({data:{model:n,undo:a,redo:t},dirty:!0})}}},{key:"redo",value:function(){var e=this.state.data;if(e.redo.length>0){var t=e.undo.slice();t.push(e.model);var a=e.redo.slice(),n=a.pop();this.state.dirty||setTimeout(this.persistData,5e3),this.setState({data:{model:n,undo:t,redo:a},dirty:!0})}}},{key:"setData",value:function(e){var t=this.state.data,a=t.undo.slice();a.push(t.model);var n,l=(n=t.model,JSON.parse(JSON.stringify(n)));this.state.dirty||setTimeout(this.persistData,5e3),a.length>50&&a.shift(),this.setState({data:{undo:a,redo:[],model:e(l)},dirty:!0})}},{key:"persistData",value:function(){localStorage.setItem(D,JSON.stringify(this.state.data)),this.setState({dirty:!1})}},{key:"deletePathway",value:function(e){this.setData(function(t){var a=t.pathways.findIndex(function(t){return t.id===e});return t.pathways.splice(a,1),t.links=t.links.filter(function(t){return t.pathway!==e}),t})}},{key:"updatePathway",value:function(e){this.setData(function(t){var a=t.pathways.findIndex(function(t){return t.id===e.id});return-1===a?t.pathways.push(e):t.pathways[a]=e,t})}},{key:"setModel",value:function(e){this.setData(function(t){return e})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{style:{position:"fixed",top:"2rem",left:"1.5rem",maxWidth:"400px"}},this.state.mode({model:this.state.data.model,become:this.become,updatePathway:this.updatePathway,deletePathway:this.deletePathway,setModel:this.setModel})),l.a.createElement("div",{style:{position:"fixed",top:"2rem",right:"1.5rem"}},l.a.createElement("div",{className:"field has-addons"},l.a.createElement("p",{className:"control"},l.a.createElement("button",{className:"button",onClick:this.undo,disabled:0===this.state.data.undo.length},l.a.createElement("span",{className:"icon is-small"},l.a.createElement(v,{icon:b.l})),l.a.createElement("span",null,"Undo"))),l.a.createElement("p",{className:"control"},l.a.createElement("button",{className:"button",onClick:this.redo,disabled:0===this.state.data.redo.length},l.a.createElement("span",{className:"icon is-small"},l.a.createElement(v,{icon:b.k})),l.a.createElement("span",null,"Redo"))))))}}]),t}(l.a.Component);a(27);s.a.render(l.a.createElement(M,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.88022365.chunk.js.map
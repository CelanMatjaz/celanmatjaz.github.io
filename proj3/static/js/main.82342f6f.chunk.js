(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},17:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(7),c=a.n(r),d=(a(15),a(1)),s=a(2),i=a(4),l=a(3),u=a(5),h=(a(16),function(t){return o.a.createElement("div",{className:"todo"},o.a.createElement("div",{id:"text",className:t.todo.done?"done":"",onClick:function(){return t.changeState(t.todo)}},t.todo.task),o.a.createElement("button",{id:"delete",onClick:function(){return t.handleDelete(t.todo._id)}},"Delete"))}),m=a(8),f=function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={task:""},a.handleChange=function(t){a.setState(Object(m.a)({},t.target.id,t.target.value))},a.handleSubmit=function(t){t.preventDefault(),a.state.task.length>0&&(a.props.handleSubmit(a.state),a.setState({task:""}))},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"add-todo"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{type:"text",placeholder:"New task",value:this.state.task,id:"task",onChange:this.handleChange}),o.a.createElement("button",null,"Add todo")))}}]),e}(n.Component),p=function(t){return o.a.createElement("div",{className:"error-message"},t.error)},b=function(t){function e(){var t,a;Object(d.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(o)))).state={todos:[],error:null},a.handleSubmit=function(t){var e=t.task,n=a.state.todos;n.push({task:e,_id:Math.random(),done:!1}),a.setState({todos:n})},a.handleDelete=function(t){var e=a.state.todos.filter(function(e){return e._id!==t});a.setState({todos:e})},a.changeState=function(t){var e=a.state.todos;e.map(function(e){return e._id===t._id&&(e.done=!e.done),e}),a.setState({todos:e})},a.fetchTodos=function(){a.setState({todos:k})},a}return Object(u.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.fetchTodos()}},{key:"render",value:function(){var t=this,e=this.state.todos.map(function(e){return o.a.createElement(h,{key:e._id,handleDelete:t.handleDelete,changeState:t.changeState,todo:e})});return o.a.createElement("div",{className:"todo-feed"},this.state.error?o.a.createElement(p,{error:this.state.error}):"",o.a.createElement(f,{handleSubmit:this.handleSubmit}),e.length>0?e:"No todos to display")}}]),e}(n.Component),k=[{_id:Math.random(),done:!1,task:"Clean room"},{_id:Math.random(),done:!0,task:"Do the dishes"},{_id:Math.random(),done:!0,task:"Feed cat"},{_id:Math.random(),done:!1,task:"Go for a walk"}],v=function(t){function e(){return Object(d.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(u.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement("div",{className:"App container"},o.a.createElement("h1",null,"Todo app"),o.a.createElement(b,null))}}]),e}(n.Component);c.a.render(o.a.createElement(v,null),document.getElementById("root"))},9:function(t,e,a){t.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.82342f6f.chunk.js.map
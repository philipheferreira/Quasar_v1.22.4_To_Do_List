(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"8b24":function(a,e,t){"use strict";t.r(e);var i=function(){var a=this,e=a._self._c;return e("q-page",{staticClass:"container q-pa-xs bg-grey-1 column justify-center items-center"},[e("div",{staticClass:"row"},[e("q-input",{staticClass:"q-pa-md",staticStyle:{"min-width":"420px","max-width":"800px"},attrs:{filled:"",label:"Tarefa",placeholder:"adicionar nova tarefa"},on:{keyup:function(e){return!e.type.indexOf("key")&&a._k(e.keyCode,"enter",13,e.key,"Enter")?null:a.adicionarTarefa.apply(null,arguments)}},scopedSlots:a._u([{key:"append",fn:function(){return[e("q-btn",{staticClass:"q-pa-xm",attrs:{color:"white","text-color":"black",label:"Adicionar"},on:{click:a.adicionarTarefa}})]},proxy:!0}]),model:{value:a.novaTarefa,callback:function(e){a.novaTarefa=e},expression:"novaTarefa"}})],1),e("div",{staticClass:"q-pa-md",staticStyle:{"max-width":"800px"}},[e("q-list",{attrs:{bordered:"",separator:""}},a._l(a.listaTarefas,(function(t,i){return e("q-item",{key:i},[e("q-item-section",{attrs:{avatar:""}},[e("q-checkbox",{model:{value:t.feito,callback:function(e){a.$set(t,"feito",e)},expression:"listaTarefas.feito"}})],1),e("q-item-section",[a._v(a._s(i+1)+" - "+a._s(t.titulo)+" ")]),1==t.feito?e("q-item-section",[e("div",[e("q-btn",{staticClass:"q-ma-sm",attrs:{outline:"",color:"red",icon:"delete"},on:{click:function(e){return e.stopPropagation(),a.deletarTarefa(i)}}})],1)]):a._e(),0==t.feito?e("q-item-section",[e("div",{staticClass:"q-ma-sm"},[e("q-btn",{attrs:{disable:"",outline:"",color:"red",icon:"delete"}})],1)]):a._e()],1)})),1)],1)])},o=[],s=(t("14d9"),{name:"PageIndex",data(){return{novaTarefa:"",listaTarefas:[{titulo:"Estudar front",feito:!0},{titulo:"Treinar no violao",feito:!1},{titulo:"Revisar as materias do concurso",feito:!0}]}},methods:{adicionarTarefa(){0!==this.novaTarefa.length?this.listaTarefas.push({titulo:this.novaTarefa,feito:!1}):console.log("Nao tem nada escrito para cadastrar tarefa"),this.novaTarefa=""},deletarTarefa(a){this.$q.dialog({title:"confirmar",message:"Deseja realmente deletar essa tarefa?",cancel:!0,persistent:!0}).onOk((()=>{this.listaTarefas.splice(a,1),this.$q.notify("tarefa deletada com sucesso")}))}}}),n=s,r=t("2877"),l=t("9989"),c=t("27f9"),f=t("9c40"),d=t("1c1c"),u=t("66e5"),p=t("4074"),m=t("8f8e"),q=t("eebe"),v=t.n(q),h=Object(r["a"])(n,i,o,!1,null,null,null);e["default"]=h.exports;v()(h,"components",{QPage:l["a"],QInput:c["a"],QBtn:f["a"],QList:d["a"],QItem:u["a"],QItemSection:p["a"],QCheckbox:m["a"]})}}]);
<template>
  <q-page class="container q-pa-xs bg-grey-1 column justify-center items-center">
      <div class="row">
        <q-input class="q-pa-md" style="min-width: 420px; max-width: 800px;" filled v-model="novaTarefa" @keyup.enter="adicionarTarefa" label="Tarefa" placeholder="adicionar nova tarefa" >
          <template v-slot:append>
            <q-btn color="white" text-color="black" label="Adicionar" class="q-pa-xm" @click="adicionarTarefa"/>
          </template>
        </q-input>
      </div>

      <div class="q-pa-md" style="max-width: 800px;">
        <q-list bordered separator>
          <q-item v-for="(listaTarefas, index) in listaTarefas" :key="index">
            <q-item-section avatar>
              <q-checkbox v-model="listaTarefas.feito"></q-checkbox>
            </q-item-section>
            <q-item-section>{{ index + 1 }} - {{ listaTarefas.titulo }} </q-item-section>
            <q-item-section v-if="listaTarefas.feito == true">
              <div>
                <q-btn outline class="q-ma-sm" color="red" icon="delete" @click.stop="deletarTarefa(index)"></q-btn>
              </div>
            </q-item-section>
            <q-item-section v-if="listaTarefas.feito == false">
              <div class="q-ma-sm">
                <q-btn disable outline color="red" icon="delete"></q-btn>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex', 
  data () {
    return {
      novaTarefa: '',
      listaTarefas: [
        {
          titulo: 'Estudar front', 
          feito: true
        }, 
        {
          titulo: 'Treinar no violao', 
          feito: false
        },
        {
          titulo: 'Revisar as materias do concurso', 
          feito: true
        }
      ]
    }
  }, 
  methods: { 
    adicionarTarefa () { 
      if(this.novaTarefa.length !== 0){
      this.listaTarefas.push({
        titulo: this.novaTarefa, 
        feito: false
      })
    }else{ 
      console.log('Nao tem nada escrito para cadastrar tarefa')
    }
      this.novaTarefa = ''
    }, 
    deletarTarefa (index) { 
      this.$q.dialog({
          title: 'confirmar',
          message: 'Deseja realmente deletar essa tarefa?',
          cancel: true, 
          persistent: true
        }).onOk(() => { 
          this.listaTarefas.splice(index, 1)
          this.$q.notify('tarefa deletada com sucesso')
      })
    }
  }
}
</script>

<template>
  <q-page class="container q-pa-xs bg-grey-1">
    <div class="row">
      <q-input class="q-pa-md" style="max-width: 500px" filled v-model="novaTarefa" label="Tarefa" placeholder="adicionar nova tarefa" />
    </div>
    <q-btn color="white" text-color="black" label="Standard" class="q-pa-xm" @click="adicionarTarefa"/>

    <div class="q-pa-md" style="max-width: 600px">
      <q-list bordered separator>
        <q-item v-for="(listaTarefas, index) in listaTarefas" :key="index">
          <q-item-section> {{ listaTarefas.titulo }} </q-item-section>
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
          titulo: 'Almoçar direitinho', 
          feito: false
        },
        {
          titulo: 'Lembrar de fazer as atividades de tester', 
          feito: true
        }
      ]
    }
  }, 
  methods: { 
    adicionarTarefa () { 
      this.listaTarefas.push({
        titulo: this.novaTarefa, 
        feito: false
      })
      this.novaTarefa = ''
    }
  }
}
</script>

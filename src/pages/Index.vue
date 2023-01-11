<template>
  <q-page class="flex flex-center">
    <q-list bordered separator>
      <q-item v-for="(listaTarefas, index) in listaTarefas" :key="index">
        <q-item-section>{{ listaTarefas.titulo }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex', 
  data () {
    return {
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
  }
}
</script>

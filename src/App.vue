<template>
  <div class="app">
    <ColumnsList :columns = "columns"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ColumnsList from './components/Columns.vue'
import Columns from './types/Columns'

export default defineComponent({
  name: 'App',
  components: { ColumnsList },
  setup() {
    const columns = ref<Columns[]>([
      { id: 1, title: "Open" },
      { id: 2, title: "In progress" },
      { id: 3, title: "In review" },
      { id: 4, title: "Testing" },
      { id: 5, title: "Done" },
    ])

    return { columns }
  },
  data() {
    return {
      name: 'Daulet'
    }
  },
  
  methods: {
    changeName(name: string) {
      this.name = name
    }
  }
})
</script>

<template>
  <div class="app">
    <ColumnsList/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ColumnsList from './components/Columns.vue'
import Status from './types/Status'

export default defineComponent({
  name: 'App',
  components: { ColumnsList },
  setup() {
    const statuses = ref<Status[]>([
      { id: 1, title: "Open" },
      { id: 2, title: "In progress" },
      { id: 3, title: "In review" },
      { id: 4, title: "Testing" },
      { id: 5, title: "Done" },
    ])

    return { statuses }
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
</script>./types/Status

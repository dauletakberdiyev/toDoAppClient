<template>
    <div class="columns">
        <div class="column" v-for="column in columns" :key="column.id">
            <div class="title">{{ column.title }}</div>
            <div class="description">some text</div>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import Columns from '../types/Columns';

export default defineComponent({
    props: {
        columns: {
            required: true,
            type: Array as PropType<Columns[]>
        }
    }
})
</script>

<style scoped>
    .columns {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .column{
        width: 250px;
        border: 1px solid #000;
    }   
    .column .title{
        padding: 5px 20px;
        background: #eff1f4;
    }
</style>
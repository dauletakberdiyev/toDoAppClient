<template>
    <div class="columns">
        <div class="column" v-for="stat in status" :key="stat.id">
            <div class="title">{{ stat.title }}</div>
            <div class="description">some text</div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Status from '../types/Status';
import axios from 'axios';
import { StatusService } from '../apiServices/StatusService';

export default defineComponent({
    // props: {
    //     statuses: {
    //         required: true,
    //         type: Array as PropType<Status[]>
    //     }
    // },
    data () {
        return {
            status: new Array as Status[]
        }
    },
    setup() {
    },
    async created() {
        const axiosInstance = axios.create({
            baseURL: "http://localhost:8000/api"
        });

        const userService = new StatusService(axiosInstance)
        
        const [error, status] = await userService.getAllStatuses() 

        if (error) {
            console.log(error);
        }
        else {
            this.status = status.data
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
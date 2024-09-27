<script lang="ts" setup>
    import { useUserStore,type User } from '@/stores/userStore'
    import {ref} from "vue"
    import { useRouter } from 'vue-router';
    const {back} = useRouter();
    const { addUser } = useUserStore();
    const userParams = ref<User>({id:0,name:"",email:""})
</script>

<template>
    <h1>create view</h1>
    <br>
    <input type="number" placeholder="number" v-model="userParams.id">
    <br>
    <input type="text" placeholder="name" v-model="userParams.name">
    <br>
    <input type="text" placeholder="email" v-model="userParams.email">
    <br>
    <button @click="addUser(userParams);back()">Create</button>
</template>
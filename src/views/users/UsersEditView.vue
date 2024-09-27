<script lang="ts" setup>
import {useUserStore,type User} from "@/stores/userStore";
import {useRouter,useRoute} from "vue-router"
const {params} = useRoute();
const {back} = useRouter();
const {getUser,editUser} = useUserStore();
const userParam = getUser(Number(params.id));
</script>
<template>
    <h1>Edit view</h1>
    <br>
    <input type="number" v-model="userParam.id">
    <br>
    <input type="text" v-model="userParam.name">
    <br>
    <input type="text" v-model="userParam.email">
    <br>
    <button @click="editUser(userParam);back()">Modify</button>
</template>
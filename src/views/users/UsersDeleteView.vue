<script lang="ts" setup>
import {ref} from "vue";
import { useUserStore, type User } from "@/stores/userStore";
import { useRouter,useRoute } from "vue-router";
const {getUser,deleteUser} = useUserStore();
const {params} = useRoute();
const {back} = useRouter()
const userParams = getUser(Number(params.id));
</script>
<template>
    <h1>delete view</h1>
    <br>
    <input type="number" placeholder="id" v-model="userParams.id">
    <br>
    <input type="text" placeholder="name" v-model="userParams.name">
    <br>
    <input type="email" placeholder="email" v-model="userParams.email">
    <br>
    <button @click="deleteUser(userParams);back()">Töröl</button>
</template>
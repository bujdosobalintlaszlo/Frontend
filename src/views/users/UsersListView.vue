<script lang="ts" setup>
    import { useUserStore } from '@/stores/userStore'
    import {useRouter} from "vue-router";
    const {usersList} = useUserStore();

    const {push} =  useRouter();

    const handleCreate= () => {
    push({name:"users_create"});
    }
    
    const handleUpdate= (id:number) => {
    push({name:"users_edit",params:{id:id}});
    }
</script>

<template>
    <h1>user_list_vue</h1>
    <br>
    <button @click="handleCreate()">Létrehozás</button>
    <br>
    <v-table class="dark-table">
        <thead>
          <tr>
            <th class="text-left">
                Gombok
              </th>
            <th class="text-left">
              Id
            </th>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in usersList"
            :key="item.id"
          >
          <td>
            <button @click="handleUpdate(item.id)">Módosítás</button>
            <button @click="() => {push({name:'users_delete',params:{id:item.id}})}">Töröl</button>
          </td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
    </v-table>
</template>

<style scoped>
.dark-table {
  background-color: black   ;
  color: white;
  border-collapse: collapse;
}

.dark-table th,
.dark-table td {
  border: 1px solid white;
  padding: 8px;
}
</style>



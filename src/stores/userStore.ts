import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
type User =  {
  id:number,
  name:string,
  email:string
};
export const useUserStore = defineStore('userStore', () => {
  const usersList = ref<User[]>([
    {id:1,name:"Felhasználó1",email:"felhasznalo1@gmail.com"},
    {id:2,name:"Felhasználó2",email:"felhasznalo2@gmail.com"}
  ]);
  const addUser = (userParam:User) =>{
    usersList.value.push(userParam);
  }
  const getUser = (id: number) =>{
      const user = usersList.value.find((user) => user.id === id);
      return user;
  }
  const editUser = (userParam:User) =>{
    const index = usersList.value.findIndex(elem => elem.id === userParam.id)
    if(index !== -1){
      usersList.value[index].name = userParam.name;
      usersList.value[index].email = userParam.email;
    }
  }
  const deleteUser = (userParam: User) => {
    const index = usersList.value.findIndex(elem => elem.id === userParam.id);
    if (index !== -1) {
      usersList.value.splice(index, 1);
    }
  }; 
  return {usersList,addUser,getUser,editUser,deleteUser}
})

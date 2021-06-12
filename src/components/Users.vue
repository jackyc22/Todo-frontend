<template>
  <div>
    <h1>Menampilkan dan Menambahkan Data User</h1>
    <div>Berikut daftar user kita:</div>
     <ul>
      <li v-for="item in users" :key="item.ID" >{{item.username}} <button @click="hapus(item.ID)">X</button></li>
    </ul>
    <div>
      <label>Username </label>
      <input v-model="username" type ="text">
      &nbsp;
       <label>Password </label>
      <input v-model="password" type="password">
       <button @click="tambahkan">Add</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data:()=>{
    return {
        users:[],
      username:'',
      password:''
    }
  },
  mounted(){
    this.data()
  },
  methods:{
      data:function(){
      const username=localStorage.getItem('usr')
      const password=localStorage.getItem('pwd')
      axios.get('http://localhost:3000/user',{headers:{username,password}})
      .then(result=>{
        this.users=result.data
        this.username=''
        this.password=''
      })
    },
    tambahkan:function(){
      const username=localStorage.getItem('usr')
      const password=localStorage.getItem('pwd')
      let newUser={username:this.username,password:this.password}
      axios.post('http://localhost:3000/user',newUser,{headers:{username,password}})
      .then(()=>this.data())
    },
    hapus:function(id){
      const username=localStorage.getItem('usr')
      const password=localStorage.getItem('pwd')
      axios.delete(`http://localhost:3000/user/${id}`,{headers:{username,password}})
       .then(result=>{
        this.data()
      })
    } 
  }
}
</script>


<template>
  <div>
    <h1>Selamat Datang</h1>
    <div>
      <label>Username </label>
      <input v-model="username" type ="text">
    </div>
    <br>
    <div>
      <label>Password </label>
      <input v-model="password" type="password">
    </div>
    <br>
    <button @click="simpan">Login</button>
    &nbsp;
    <button @click="hapus">Clear</button>
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
 created:function () {
   this.username=localStorage.getItem('usr')
   this.password=localStorage.getItem('pwd')
 },
 methods:{
    simpan:function() {
      localStorage.setItem('usr',this.username)
      localStorage.setItem('pwd',this.password)
    },
    hapus:function() {
      localStorage.removeItem('usr',this.username)
      localStorage.removeItem('pwd',this.password)
      this.username=''
      this.password=''
    }
  }
}
</script>


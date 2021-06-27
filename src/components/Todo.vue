<template>
  <div>
    <h1>Menampilkan dan Menambahkan Data Item</h1>
    <div>Berikut daftar item kita:</div>
    <ul>
      <li v-for="item in todos" :key="item.ID" >{{item.Description}} <button @click="hapus(item.ID)">X</button></li>
    </ul>
    <input v-model="myText">
    <button @click="tambahkan">Klik me</button>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data:()=>{
    return{
      todos:[ ],
      myText:''
    }
  },
  mounted(){
    this.data()
  },
  methods:{
    data:function(){
      const username=localStorage.getItem('usr')
      const password=localStorage.getItem('pwd')
      axios.get('http://localhost:3000/todo',{headers:{username,password}})
      .then(result=>{
        this.todos=result.data
        console.log(result)
      })
    },
    tambahkan:function(){
      const username=localStorage.getItem('usr')
      const password=localStorage.getItem('pwd')
      let newItem={Description:this.myText}
      axios.post('http://localhost:3000/todo',newItem,{headers:{username,password}})
      .then(()=>{
          this.data()
          this.myText=''
      })  
    },
    hapus:function(id){
      const username=localStorage.getItem('usr')
      const password=localStorage.getItem('pwd')
      axios.delete(`http://localhost:3000/todo/${id}`,{headers:{username,password}})
      .then(result=>{
        this.data()
      })
      .catch(err=>{
        console.log(err)
      })
    } 
  }
}
</script>

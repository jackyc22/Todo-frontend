<template>
  <!-- Bagian pertama -->
  <!-- <div>
    Apa kabar {{nama}}
    <h1>Nilai {{nilai}}</h1>
    <button @click="nilai++">klik me</button>
    <button @click="addAll">tambah semua</button>
  </div> -->

  <!-- Bagian kedua -->
  <div>
    <h1>Selamat Datang</h1>
    <div>Berikut daftar kerja kita:</div>
    <ul>
      <li v-for="item in todos" :key="item.ID" >{{item.Description}} <button @click="hapus(item.ID)">X</button></li>
    </ul>
    <input v-model="myText">
    <button @click="tambahkan">Klik me</button>
    <div><button @click="data">Refresh</button></div>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  //Bagian pertama
//   data:()=>{
//     return{
//       nilai:0,
//       nama:'Hore',
//     }
//   },
//   methods:{
//     addAll:function(){
//       this.nilai++
//     }
//   }
// }

  //Bagian kedua
  data:()=>{
    return{
      todos:[
        // {desc:'Makan Pisang'},
        // {desc:'Masak Sayur'}
      ],
      myText:'hello'
    }
  },
  mounted(){
    this.data()
  },
  methods:{
    data:function(){
      axios.get('http://localhost:3000/todo')
      .then(result=>{
        this.todos=result.data
        console.log(result)
      })
    },
    tambahkan:function(){
      let newItem={Description:this.myText}
      axios.post('http://localhost:3000/todo',newItem)
      .then(()=>this.data())  
    },
    hapus:function(id){
      axios.delete(`http://localhost:3000/todo/${id}`)
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

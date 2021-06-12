import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Todo from './components/Todo.vue'
import Users from './components/Users.vue'
import Auth from './components/Auth.vue'
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/todo',component:Todo},
        {path:'/user',component:Users},
        {path:'/',component:Auth}
    ]
})
createApp(App).use(router).mount('#app')
 
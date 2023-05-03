import PageAllTasks from '@/pages/PageAllTasks.vue'
import PageMyDay from '@/pages/PageMyDay.vue'
import PageImportant from '@/pages/PageImportant.vue'
import Main from '@/pages/Main.vue'
import Task from '@/pages/Task.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {path: '/', component: Main},
    {path: '/tasks', component: PageAllTasks},
    // {path: '/tasks/:id', component: Task},
    {path: '/my-day', component: PageMyDay},
    {path: '/important', component: PageImportant}
]


const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router
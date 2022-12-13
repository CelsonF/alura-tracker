import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw} from 'vue-router'
import App from "../views/App.vue"

const basicRoutes = [
	{
		path: '/',
    name: 'App',
    component: App
	}
]


const routes = createRouter({
	history:createWebHistory(),
	routes: basicRoutes as RouteRecordRaw[]
})

export default routes

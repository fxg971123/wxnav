import { createRouter,createWebHashHistory} from "vue-router";
/* import Home from './page/Home'
import Detail from './page/Detail'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: '/', component: Home },
		{ path: '/detail', component: Detail }
	],
})
 */

// export default router;

const Home = () => import("../page/Home")
const Detail = () => import("../page/Detail")

const routes = [
	{ path: "/", redirect: "/home" },
	{
		path: "/home",
		name: "Home",
		component: Home
	},
	{
		path: "/login",
		name: "Detail",
		component: Detail
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	mode: 'history',
	routes: routes
})
export default router;

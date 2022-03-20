import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/views/HomePage.vue';
import ContactApp from '@/views/ContactApp.vue';
import ContactDetails from '@/views/ContactDetails.vue';
import ContactEdit from '@/views/ContactEdit.vue';
import StatisticsPage from '@/views/StatisticsPage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: HomePage,
		},
		{
			path: "/contact",
			name: "ContactApp",
			component: ContactApp
		},
		{
			path: "/contact/:id",
			name: "ContactDetails",
			component: ContactDetails
		},
		{
			path: "/contact/edit/:id?",
			name: "ContactEdit",
			component: ContactEdit
		},
		{
			path: "/statistics",
			name: "StatisticsPage",
			component: StatisticsPage
		},
	],
});

export default router;

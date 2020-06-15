import VueRouter, { Route, RouteConfig } from 'vue-router'
import Vue, { Component } from 'vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
	{
		path: '/',
		component: () => import('@/layouts/MainLayout.vue'),
		children: [
			{ path: 'Home', component: () => import('@/views/Home.vue') },
			{
				path: 'ContactUs',
				component: () => import('@/views/ContactUs.vue'),
			},
			{
				path: 'PrayerTime',
				component: () => import('@/views/PrayerTime.vue'),
			},
			// { path: 'Gallery', component: () => import('@/pages/Gallery.vue') },
		],
		redirect: { path: 'Home' },
	},
	// {
	// 	path: '*',
	// 	component: () => import('@/pages/Error404.vue'),
	// },
]

export const router = new VueRouter({
	// mode: 'history',
	mode: 'hash',
	routes,
})

<template>
	<v-app style="font-family: 'Varela Round', sans-serif;">
		<router-view></router-view>
	</v-app>
</template>

<script lang="ts">
	import Vue from 'vue'

	export default Vue.extend({
		name: 'App',
	})
</script>

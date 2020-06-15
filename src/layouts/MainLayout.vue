<template>
	<div>
		<v-app-bar color="#0069a4">
			<v-row class="justify-center">
				<v-img class="" src="../assets/homes.png" max-width="330px" />
			</v-row>
			<template v-slot:extension>
				<v-tabs centered grow color="white">
					<v-tab to="Home">בואו נלמד</v-tab>
					<v-tab to="PrayerTime">זמני התפילה</v-tab>
					<v-tab to="ContactUs">צרו קשר</v-tab>
				</v-tabs>
			</template>
		</v-app-bar>
		<v-content>
			<transition
				enter-active-class="animated fadeIn"
				leave-active-class="animated fadeOut"
				mode="out-in"
				:duration="{ enter: 400, leave: 400 }"
			>
				<router-view></router-view>
			</transition>
		</v-content>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component({})
	export default class MainLayout extends Vue {}
</script>

<style lang="scss" scoped></style>

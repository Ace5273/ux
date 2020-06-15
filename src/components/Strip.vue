<template>
	<v-col>
		<v-row>
			<CardLink
				style="padding-left: 20px;padding-right: 20px"
				text="אינצקלופדיה"
				url="http://www.daat.ac.il/images/icon_15.gif"
			/>
			<!-- <div min-width="200px">
				<v-img
					gradient="to top right,
				rgba(100,115,201,.7), rgba(25,32,72,.7)"
					src="http://www.daat.ac.il/images/icon_15.gif"
				/>
				<v-title>אינצקלופדיה</v-title>
			</div> -->
			<div>
				<v-img
					max-width="200px"
					src="http://www.daat.ac.il/images/icon_15.gif"
				/>
				<v-title>אינצקלופדיה</v-title>
			</div>
		</v-row>
		<v-row> </v-row>
		<v-row>
			<v-col>adsad</v-col>
		</v-row>
	</v-col>
</template>
<script lang="ts">
	import Vue from 'vue'
	import { Component, Prop } from 'vue-property-decorator'
	import CardLink from './CardLink.vue'
	@Component({ components: { CardLink } })
	export default class Strip extends Vue {}
</script>
<style scoped></style>

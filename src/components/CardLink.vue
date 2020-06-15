<template>
	<div min-width="200px">
		<v-img
			gradient="to top right,
				rgba(100,115,201,.7), rgba(25,32,72,.7)"
			:src="url"
		/>
		<v-title>{{ text }}</v-title>
	</div>
</template>
<script lang="ts">
	import Vue from 'vue'
	import { Component, Prop } from 'vue-property-decorator'

	@Component({})
	export default class CardLink extends Vue {
		@Prop() readonly url?: string
		@Prop() readonly text?: string
		@Prop() readonly gradientDirection?: [
			'to top',
			'to bottom',
			'to left',
			'to right',
			'to top right',
			'to top left',
			'to bottom right',
			'to bottom left',
			string,
		]
		// @Prop() readonly padding?: string
	}
</script>
<style scoped></style>

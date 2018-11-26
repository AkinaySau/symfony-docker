<template>
	<div>
		<h2>
			Test run VueApp
		</h2>
	</div>
</template>

<script>
	export default {
		name: 'App',
	};
</script>

<style lang="scss" scoped>
	h2 {
		color: #f39561;

		&::after, &::before {
			content: '|';
			color: #41658a;
		}
	}
</style>

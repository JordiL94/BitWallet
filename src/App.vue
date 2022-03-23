<template>
	<div class="app">
		<AppHeader />
		<RouterView />
	</div>
</template>

<script>
	import AppHeader from '@/components/AppHeader.vue';
	export default {
		components: {
			AppHeader,
		},
		async created() {
			await this.$store.dispatch({ type: 'loadContacts' });
		},
	};
</script>

<style></style>

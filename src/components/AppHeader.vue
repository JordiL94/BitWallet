<template>
	<section v-if="user" class="app-header flex space-between">
		<!-- <img src="../assets/img/logo.png" alt="" /> -->
		<h3>BitWallet</h3>
		<nav>
			<RouterLink to="/">Me</RouterLink> |
			<RouterLink to="/contact">Contacts</RouterLink> |
			<RouterLink to="/statistics">Stats</RouterLink>
		</nav>
	</section>
	<h3 v-else>DashApp</h3>
</template>

<script>
	export default {
		computed: {
			user() {
				return this.$store.getters.user;
			},
		},
	};
</script>

<style></style>

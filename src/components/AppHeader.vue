<template>
	<section v-if="user" class="app-header flex space-between main-layout">
		<!-- <img src="../assets/img/logo.png" alt="" /> -->
		<RouterLink to="/">
			<h3>
				<img src="../assets/img/cryptocurrencies.png" alt="" />
				BitWallet
			</h3>
		</RouterLink>
		<RouterLink to="/contact">Contacts</RouterLink>
	</section>
	<h3 v-else>BitWallet</h3>
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

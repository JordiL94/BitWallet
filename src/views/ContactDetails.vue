<template>
	<section v-if="contact" class="contact-details">
		<h3>{{ contact.name }}</h3>
		<p>Phone: {{ contact.phone }}</p>
		<p>E-Mail: {{ contact.email }}</p>
		<RouterLink to="/contact">Back</RouterLink>
		<RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
	</section>
	<div v-else class="loading"></div>
</template>

<script>
	export default {
		computed: {
			contact() {
				return this.$store.getters.contact;
			},
		},
		async created() {
			const { id } = this.$route.params;
			await this.$store.dispatch({ type: 'getContact', id });
		},
	};
</script>

<style></style>

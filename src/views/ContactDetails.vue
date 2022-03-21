<template>
	<section v-if="contact" class="contact-details">
		<h3>{{contact.name}}</h3>
		<p>Phone: {{contact.phone}}</p>
		<p>E-Mail: {{contact.email}}</p>
		<RouterLink to="/contact">Back</RouterLink>
		<RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
	</section>
	<div v-else class="loading"></div>
</template>

<script>
	import contactService from '@/services/contact.service.js';
	export default {
		data() {
			return {
				contact: null,
			};
		},
		async created() {
			const { id } = this.$route.params;
			this.contact = await contactService.get(id);
		},
	};
</script>

<style></style>

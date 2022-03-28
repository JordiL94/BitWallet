<template>
	<section class="contact-list">
		<ul class="clean-list flex column justify-center">
			<li
				v-for="contact in contacts"
				:key="contact._id"
				contact="contact-preview-container flex"
			>
				<ContactPreview :contact="contact" />
			</li>
		</ul>
		<RouterLink to="/contact/edit" class="add-contact">+</RouterLink>
	</section>
</template>

<script>
	import ContactPreview from './ContactPreview.vue';
	export default {
		props: {
			contacts: Array,
		},
		components: {
			ContactPreview,
		},
	};
</script>

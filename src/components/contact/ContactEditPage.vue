<template>
	<section class="contact-edit">
		<h2>{{ pageTitle }}</h2>
		<div class="edit-actions flex space between">
			<RouterLink to="/contact">Back</RouterLink>
			<button v-if="contactToEdit?._id" @click="remove">Delete</button>
		</div>
		<form
			v-if="contactToEdit"
			@submit.prevent="save"
			class="flex column align-center"
		>
			<input
				v-model="contactToEdit.name"
				type="text"
				placeholder="Name"
			/>
			<input
				v-model="contactToEdit.phone"
				type="text"
				placeholder="Phone"
			/>
			<input
				v-model="contactToEdit.email"
				type="text"
				placeholder="E-Mail"
			/>
			<button>Save</button>
		</form>
	</section>
</template>

<script>
	import contactService from '@/services/contact.service.js';
	export default {
		data() {
			return {
				contactToEdit: null,
			};
		},
		async created() {
			const { id } = this.$route.params;
			if (id) this.contactToEdit = await contactService.get(id);
			else this.contactToEdit = contactService.getEmptyContact();
		},
		methods: {
			async save() {
				console.log('contactToEdit:', this.contactToEdit._id);
				await contactService.save(this.contactToEdit);
				this.$router.push('/contact');
			},
			async remove() {
				await contactService.remove(this.contactToEdit._id);
				this.$router.push('/contact');
			},
		},
		computed: {
			pageTitle() {
				const { id } = this.$route.params;
				return id ? 'Edit Contact' : 'Add Contact';
			},
		},
	};
</script>

<style></style>

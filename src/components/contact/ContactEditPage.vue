<template>
	<section class="contact-edit main-layout flex column align-center">
		<h2>{{ pageTitle }}</h2>
		<div class="edit-actions flex space-between align-center">
			<RouterLink to="/contact">← Back</RouterLink>
			<button
				v-if="contactToEdit?._id"
				@click="remove(contactToEdit._id)"
			>
				<img src="../../assets/img/trash.png" />
			</button>
		</div>
		<form
			v-if="contactToEdit"
			@submit.prevent="save(contactToEdit)"
			class="flex column"
		>
			<label class="flex space-between"><h4>Name:</h4>
				<input
					v-model="contactToEdit.name"
					type="text"
					placeholder="Name"
			/></label>
			<label class="flex space-between"><h4>Phone:</h4>
			<input
				v-model="contactToEdit.phone"
				type="text"
				placeholder="Phone"
			/></label>
			<label class="flex space-between"><h4>eMail:</h4>
			<input
				v-model="contactToEdit.email"
				type="text"
				placeholder="E-Mail"
			/>
			</label>
			<button>Save</button>
		</form>
	</section>
</template>

<script>
	export default {
		async created() {
			const { id } = this.$route.params;
			if (id) await this.$store.dispatch({ type: 'getContact', id });
			else await this.$store.dispatch({ type: 'getEmptyContact', id });
		},
		methods: {
			async save(contactToSave) {
				try {
					await this.$store.dispatch({
						type: 'saveContact',
						contactToSave,
					});
					this.$router.push('/contact');
				} catch (err) {
					console.log('Could not save successfully', err);
				}
			},
			async remove(id) {
				try {
					await this.$store.dispatch({ type: 'removeContact', id });
					this.$router.push('/contact');
				} catch (err) {
					console.log('Could not delete successfully', err);
				}
			},
		},
		computed: {
			contactToEdit() {
				return { ...this.$store.getters.contact };
			},
			pageTitle() {
				const { id } = this.$route.params;
				return id ? 'Edit Contact' : 'Add Contact';
			},
		},
	};
</script>

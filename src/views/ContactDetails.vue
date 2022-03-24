<template>
	<section v-if="contact" class="contact-details">
		<h3>{{ contact.name }}</h3>
		<p>Phone: {{ contact.phone }}</p>
		<p>E-Mail: {{ contact.email }}</p>
		<RouterLink to="/contact">Back</RouterLink>
		<RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
		<MoveList :moves="moves" />
	</section>
	<div v-else class="loading"></div>
</template>

<script>
	import MoveList from '@/components/transfer/MoveList.vue';
	export default {
		async created() {
			const { id } = this.$route.params;
			await this.$store.dispatch({ type: 'getContact', id });
		},
		components: {
			MoveList
		},
		computed: {
			contact() {
				return this.$store.getters.contact;
			},
			moves() {
				const user = this.$store.getters.user;
				const moves = user.moves.filter(move => move.toId === this.contact._id );
				return moves;
			},
		},
	};
</script>

<style></style>

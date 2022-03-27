<template>
	<section v-if="contact" class="contact-details main-layout">
		<RouterLink to="/contact">Back</RouterLink>
		<RouterLink :to="`/contact/edit/${contact._id}`">Edit</RouterLink>
		<h3>{{ contact.name }}</h3>
		<p>Phone: {{ contact.phone }}</p>
		<p>E-Mail: {{ contact.email }}</p>
		<TransferFund :contact="contact" :maxCoins="user.coins" @transferCoins="transferCoins" />
		<MoveList :moves="moves" :title="`All moves to ${contact.name}`"/>
	</section>
	<div v-else class="loading"></div>
</template>

<script>
	import MoveList from '@/components/transfer/MoveList.vue';
	import TransferFund from '@/components/transfer/TransferFund.vue';
	export default {
		async created() {
			const { id } = this.$route.params;
			await this.$store.dispatch({ type: 'getContact', id });
		},
		components: {
			MoveList,
			TransferFund,
		},
		methods: {
			async transferCoins(amount) {
				await this.$store.dispatch({type: 'addMove', contact: this.contact, amount});
				this.$router.push('/');
			},
		},
		computed: {
			contact() {
				return this.$store.getters.contact;
			},
			moves() {
				const moves = this.user.moves.filter(
					(move) => move.toId === this.contact._id
				);
                moves.sort((a, b) => b.at - a.at);
				return moves;
			},
			user() {
				return this.$store.getters.user;
			},
            title() {
                return `Last 5 moves to ${this.contact.name}`;
            }
		},
	};
</script>
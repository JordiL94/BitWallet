<template>
	<section class="home-page main-layout flex width-all space-around">
		<div class="bitcoin-user-info flex column">
			<h1>Hello {{ user.name }}</h1>
			<h3>You currently have {{ user.coins }} bitcoins</h3>
			<h4>Bitcoin value range for the past 5 months:</h4>
			<Chart v-if="chartdata" :coins="user.coins" :chartdata="chartdata" />
		</div>
		<MoveList :moves="moves" :title="title" />
	</section>
</template>

<script>
	import bitcoinService from '@/services/bitcoin.service.js';
	import MoveList from '@/components/transfer/MoveList.vue';
	import Chart from '@/components/Chart.vue';
	export default {
		components: {
			MoveList,
			Chart,
		},
		data() {
			return {
				rate: null,
				chartdata: null
			};
		},
		async created() {
			this.chartdata = await bitcoinService.getMarketPrice();
		},
		computed: {
			user() {
				return this.$store.getters.user;
			},
			moves() {
				const movesToShow = [...this.user.moves];
				movesToShow.sort((a, b) => b.at - a.at);
				return movesToShow.splice(0, 5);
			},
			title() {
				return 'Last 5 moves';
			},
		},
		methods: {},
	};
</script>

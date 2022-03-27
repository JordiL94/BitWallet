<template>
	<section v-if="user" class="home-page main-layout">
        <h1>Hello {{user.name}}</h1>
        <h3>You currently have {{user.coins}} bitcoins</h3>
        <Chart :coins="user.coins" />
        <MoveList :moves="moves" :title="title"/>
	</section>
</template>

<script>
	import bitcoinService from '@/services/bitcoin.service.js';
    import MoveList from '@/components/transfer/MoveList.vue';
    import Chart from '@/components/Chart.vue';
	export default {
        components: {
            bitcoinService,
            MoveList,
            Chart
        },
        data() {
            return {
                rate: null
            };
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
            }
        },
        methods: {
        }
    };
</script>
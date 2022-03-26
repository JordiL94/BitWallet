<template>
	<section v-if="user" class="home-page">
		<h1>Home Page</h1>
        <p>Hello {{user.name}}</p>
        <p>You currently have {{user.coins}} bitcoins</p>
        <MoveList :moves="moves" :title="title"/>
	</section>
</template>

<script>
	import bitcoinService from '@/services/bitcoin.service.js';
    import MoveList from '@/components/transfer/MoveList.vue';
	export default {
        components: {
            bitcoinService,
            MoveList
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
				const movesToShow = this.user.moves.filter((move, idx) => idx < 5);
				return movesToShow;
			},
            title() {
                return 'Last 5 moves';
            }
        },
        methods: {
        }
    };
</script>

<style></style>

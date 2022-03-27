<template>
	<section v-if="user" class="home-page main-layout">
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
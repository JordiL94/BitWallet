<template>
	<section v-if="moves" class="move-list flex column">
		<h4>{{ title }}</h4>
		<ul class="clean-list">
			<li v-for="(move, idx) in moves" :key="move.toId + ':' + idx" class="flex column space-around">
				<div class="flex space-between">
					<h5>{{ move.to }}</h5>
					<p>{{ move.amount }}</p>
				</div>
				<h6>Status: approved</h6>
				<p>{{ getDate(move.at) }}</p>
			</li>
		</ul>
	</section>
</template>

<script>
	import { utils } from '@/services/utils.service';
	export default {
		props: {
			title: String,
			moves: Array,
		},
		methods: {
			getDate(timestamp) {
				return utils.getDate(timestamp);
			},
		},
	};
</script>

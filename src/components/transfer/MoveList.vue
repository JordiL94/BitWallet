<template>
    <section v-if="moves" class="move-list">
        <!-- <h4>{{title}}</h4> -->
        <ul>
            <li v-for="(move, idx) in moves" :key="move.toId + ':' + idx">
                <h5>{{move.to}}</h5>
                <h6>{{move.amount}}</h6>
                <p>{{getDate(move.at)}}</p>
            </li>
        </ul>
    </section>
</template>

<script>
import { utils } from "@/services/utils.service";
export default {
    props: {
        // title: String,
        moves: Array
    },
    methods: {
        getDate(timestamp) {
            return utils.getDate(timestamp);
        }
    }

}
</script>

<style>

</style>
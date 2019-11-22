<template>
    <v-container>
        <v-row
        v-for="n in 2"
        :key="n"
        :class="n === 1 ? 'mb-6' : ''"
        no-gutters
        >
        <v-col
            v-for="k in n + 1"
            :key="k"
        >
            <v-card
            class="pa-2"
            outlined
            tile
            >
            {{ k }} of {{ n + 1 }}
            </v-card>
        </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { mapState } from "vuex";

export default {
    name: "SecondPage",
    computed: {
        ...mapState({
            pageOne: state => state.pageOne.ApiReq,
        })
    }
}
</script>
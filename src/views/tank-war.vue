<template>
    <div>
        甚都没有
        <LevelOne />
    </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import LevelOne from '@/components/level-one.vue';

@Options({
    name:'TankWar',
    components: {
        LevelOne,
    },
})

export default class TankWar extends Vue {

}
</script>
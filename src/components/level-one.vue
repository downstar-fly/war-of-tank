<template>
    <div class="level-content" >
        <div>
            <div v-for="(row, index) in map" :key="index" style="display: flex">
                <div v-for="(col, colIndex) in row.col" :key="colIndex" :style="{ height: '40px', width: '40px', background: col?.background}">

                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { initMap } from '../config/index';

@Options({
    name:'LevelOne',
    components: {

    },
})

export default class LevelOne extends Vue {
    map: any[] = initMap();

    created() {
        this.createMainTank();
        
    }

    onUp() {
        console.log('上');
    }

    onDown() {
        console.log('下');
    }

    onLeft() {
        console.log('左');
    }

    onRight() {
        console.log('右');
    }

    onKeyWords(e: any) {
        switch(e.key) {
            case 'ArrowUp': 
                this.onUp();
                break;
            case 'ArrowDown':
                this.onDown();
                break;
            case 'ArrowRight':
                this.onRight();
                break;
            case 'ArrowLeft':
                this.onLeft();
                break;
            default:
                break;
        }
    }

    createMainTank() {
        const target = this.map[this.map.length-2].col[4];
        target.background = 'red';

        addEventListener('keydown' , this.onKeyWords);
    }

    onTankMove() {
        
    }

    mainTankUp(tank: any, row: number, col: number) {
        tank.background = '';
        const target = this.map[row-1].col[col];
        target.background = 'red';
    }
}
</script>
<style lang="less" scoped>
.level-content {
    display: flex;
    justify-content: center;
}
</style>
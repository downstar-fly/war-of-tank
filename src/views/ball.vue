<template>
    <button @click="getData">查询数据</button>
    <div>
        <button @click="goTankWar">war of tank</button>
        <button @click="clear">清除</button>
    </div>

    <table style="width: 100%">
        <thead>user</thead>
        <tbody>
            <tr>
                <th style="width: 35%">id</th>
                <th >name</th>
                <th>phone</th>
            </tr>
            <tr>
                <td>{{ userInfo?.id ?? 0 }}</td>
                <td>{{ userInfo?.userName ?? '空数据' }}</td>
                <td>{{ userInfo?.phone ?? '空数据' }}</td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>
    <div class="ball-content">
        <div class="ban">
            <div id="ball" :style="{top: `${ballTop}px`,left: `${ballLeft}px` }" class="ball-body ball_1"></div>
        </div>
        <div class="ban">
            <div id="ball" :style="{top: `${ballTop}px`,left: `${ballLeft}px` }" class="ball-body ball_2"></div>
        </div>
    </div>
</template>
<script lang="ts">
// import { Prop }  from 'vue-property-decorator';
import { Options, Vue } from "vue-class-component";
import { getData } from '@/apis/index.api';

@Options({
    name: 'Ball',
    components: {

    },
})

export default class Ball extends Vue {

    userInfo: any = null;

    ballTop: number = 170;

    maxBallTop: number = 370;

    ballLeft: number = 185;

    timer: any = null;

    g: number = 10;

    async getData () {
        const res = await getData();
        if(res){
            this.userInfo = res;
        }
    }

    goTankWar() {
        this.$router.push('/tankWar');
    }

    created () {
        // this.ballMove();
    }

    ballMove () {
        if(this.ballTop < this.maxBallTop ){
            
            this.timer = setInterval(()=>{
                console.log(this.ballTop);
                this.ballTop += 2;
                if(this.ballTop >= this.maxBallTop){
                    clearInterval(this.timer);
                }
            } , 100);
        }
    }

    clear () {
        this.userInfo = null;
    }

}
</script>
<style lang="less" scoped>
.ball-content {
    display: flex;
    justify-content: space-between;
    .ban {
        height: 400px;
        width: 400px;
        background: white;
        animation: ball 1s;
        animation-iteration-count: infinite !important;
        animation-direction: alternate !important;
        -webkit-animation-direction: alternate !important;
        -webkit-animation-iteration-count: infinite !important;
        -webkit-animation: ball 1s;
        .ball-body {
            position: relative;
            top: 370px;
            left: 185px;
            height: 30px;
            width: 30px;
            background: black;
            border-radius: 50%;
            
        }
        .ball_1 {
            animation-name: ball_1 1s;
            animation-iteration-count: infinite !important;
            animation-timing-function: ease-in !important;
            animation-direction: alternate !important;
            -webkit-animation-direction: alternate !important;
            -webkit-animation-timing-function: ease-in !important;
            -webkit-animation-iteration-count: infinite ;
            -webkit-animation: ball_1 1s;
        }
        .ball_2 {
            animation-name: ball_2 1s;
            animation-iteration-count: infinite !important;
            animation-timing-function: ease-in !important;
            animation-direction: alternate !important;
            -webkit-animation-direction: alternate !important;
            -webkit-animation-timing-function: ease-in !important;
            -webkit-animation-iteration-count: infinite ;
            -webkit-animation: ball_2 1s;
        }
    }
}

@keyframes ball_1 {
    from {
        top: 170px;
    }
    to {
        top: 370px;
        background: white;
    }
}

@keyframes ball_2 {
    from {
        top: 170px;
    }
    to {
        top: 0px;
        background: white;
    }
}

@keyframes ball {
    from {
        background: white;
    }
    to {
        background: black;
    }
}
</style>
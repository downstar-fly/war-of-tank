const map_one = [
    {
        index: 1,
        col: [{
            index: 1,
            type: '',
            background: 'gray'
        }],
    },
]

export function initMap() {
    map_one.length = 20;
    for(let i = 0; i < map_one.length; i++){
        map_one[i] = {
            index: i,
            col: [],
        }
        map_one[i].col.length = 14;
        
        for(let j = 0; j < map_one[i].col.length; j++) {
            //四周墙壁
            if (i === 0 || i === map_one.length-1 || j === 0 || j === map_one[i].col.length -1 ) {
                map_one[i].col[j] = {
                    index: j,
                    type: WallType.STATIC,
                    background: 'gray'
                };
            }
            
            homeWall.forEach(wall => {
                if(wall.row === i && wall.col === j){
                    map_one[i].col[j] = {
                        index: j,
                        type: WallType.STATIC,
                        background: 'gray'
                    };
                }
            });
            if(!map_one[i].col[j]) {
                map_one[i].col[j] = {
                    index: j,
                    type: WallType.NONE,
                    background: '',
                };
            }
        }
    }

    return map_one;
}

export enum WallType {
    STATIC = 'static',
    NONE = 'none',

}

//家
const homeWall = [
    {
        row: 19,
        col: 5
    },
    {
        row: 18,
        col: 5
    },
    {
        row: 17,
        col: 5
    },
    {
        row: 17,
        col: 8
    },
    {
        row: 18,
        col: 8
    },
    {
        row: 19,
        col: 8
    },
    {
        row: 17,
        col: 6
    },
    {
        row: 17,
        col: 7
    },
]
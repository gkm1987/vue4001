<template>
    <div>
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a class="mui-control-item " 
                        v-for="(item,index) in categoryList" :key="index"
                        :class="['mui-control-item', item.id==0? 'mui-active':'']"
                        @tap="getImageListByCategoryId(item.id)"
                        >
                        {{item.catename}}
                    </a>
                </div>
            </div>

        </div>

          <!-- 图片列表 -->
        <ul class="photo-list">
            <router-link v-for="(item,index) in list" :key="index" :to="'/home/photoinfo/'+item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="dex">
                    <h1>{{item.title}}</h1>
                    <p>{{item.zhaiyao}}</p>
                </div>
                
            </router-link >
        </ul>

        <!-- <ul class="photo-list">
            <li v-for="(item,index) in list" :key="index" >
                <img :src="item.img_url">
                <div class="dex">
                    <h1>{{item.title}}</h1>
                    <p>{{item.zhaiyao}}</p>
                </div>
                
            </li >
        </ul> -->
    </div>
</template>
<script>
import mui from '../../assets/mui/js/mui.min.js'

export default {
    data(){
        return {
            categoryList:[],
            list:[],
        }
    },
    created(){ 
        this.getCategory() 
        this.getImageListByCategoryId(0)
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            // scrollY: true, //是否竖向滚动
            // scrollX: true, //是否横向滚动
            // indicators: true, //是否显示滚动条
        });
    },
    methods:{
        getCategory:function(){
            this.axios.get("/json/category.json").then((res)=>{
                var categoryList = res.data;
                
                categoryList.unshift({id:0,catename:"全部"})
                this.categoryList = categoryList
                // console.log(this.categoryList)
            })
        },


        getImageListByCategoryId:function(categoryId){
           this.axios.get("/json/allimage"+categoryId+".json").then(
                (res)=>{
                    // console.log(res.data)
                    this.list = res.data
                }
            )
        } 
    }
}
</script>
<style lang="less" scoped>
*{
    touch-action: pan-y;
}


.photo-list {
    padding: 10px ;
    margin: 0px;
    // margin-bottom: -10px;
    padding-bottom: 0px;
    // overflow-y: auto;
    li{
        list-style: none;
        background-color: #ccc;
        // border-radius: 10px;
        margin-bottom: 10px;
        position: relative;
        text-align: center;
        // vertical-align: middle;
        box-shadow: 0 0 6px #999;
        .dex{
                max-height: 85px;
                width: 100%;
                color: white;
                position: absolute;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.3);
                text-align: left;

            h1{
                font-size: 14px;
            }
            p{
                color: white;
                font-size: 12px;
            
            }
        }
       

        img{
            width: 100%;
            border-radius: 10px;
            // display: block;
            vertical-align: middle;
        }
        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
    }
    
}

</style>
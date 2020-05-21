<template>
    <div>

        <ul class="mui-table-view">
            <li v-for="(item,index) in newsList" :key="index" class="mui-table-view-cell mui-media">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        <h1>幸福</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间:{{item.add_time | dateFormat}}</span>
                            <span>点击:{{item.click}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>

      
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsList:[],
            
        }
    },
    created:function(){
        this.getNewList()
        
    },
    methods:{
        getNewList:function(){
            this.axios.get("/json/newsList.json").then(
                (res)=>{
                    console.log(res.data)
                    this.newsList = res.data
                }
            )
        },

        
    },

}
</script>

<style lang="less" scoped>

.mui-media-body{
    h1{
        font-size: 14px;
        text-align: left;
    }
    .mui-ellipsis{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: #226aff;
    }

}
</style>
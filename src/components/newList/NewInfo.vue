<template>
    <div class="newsinfo-content">
        <h3 class="title">{{newInfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{newInfo.add_time | dateFormat}}</span>
            <span>点击:{{newInfo.click}}次</span>
        </p>
        <hr/>

        <div class="content" v-html="newInfo.content"></div>
        <coment :id="id"></coment>
    </div>
</template>
<script>

import coment from "../subcomponets/coment.vue"
export default {
    data(){
        return{
            id:this.$route.params.id,
            content:"<p>111</p>",
            newInfo:{}
        }
    },
    created:function(){
       this.getNewsInfo()
    },
    methods:{
        getNewsInfo(){
            this.axios.get("/json/newsInfo.json").then((res)=>{
               this.newInfo = res.data
            })
        }
    },
    components:{
        coment
    }
}
</script>

<style lang="less" >
.newsinfo-content{
    padding: 0 4px;
    .title{
        font-size: 16px;
        margin: 15px 0;
        color: red;
        text-align: center;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%;
        }
    }
}
</style>
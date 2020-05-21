<template>
    <div class="cmt-content">
        <h3>发表评论</h3>
        <hr>
        <textarea v-model="msg" maxlength="120" placeholder="请输入bb的内容(最多吐槽120字)">

        </textarea>

        <mt-button type="primary" size="large" @click="postComent">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,index) in compentList" :key="index">
                <div class="cmt-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time |dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            pageIndex:1,
            compentList:[],
            msg:''
        }
    },
    // id 是文章详情的id 通过id 来获取评论的具体数据
    //pageIndex 是获取的第几页的评论 默认是1页
    props:["id"]
    ,
    created:function(){
        console.log(this.id)
        this.getcomments()
    },
    methods:{
        getcomments:function(){
            this.axios.get("/json/compent.json").then((res)=>{
                this.compentList = res.data
                console.log(res.data)
            })
        },

        getMore:function(){
            this.axios.get("/json/compent-more.json").then((res)=>{
                this.compentList = this.compentList.concat(res.data)
               
            })
        },

        postComent:function(){
            // console.log(this.msg)
            if(this.msg.trim().length == 0){
                Toast("崩为空")
            }else{
                //这里模拟 实应该发送请求到服务器 成功后在操作
                var cmt = {
                    "user_name":"匿名用户",
                    "add_time":new Date(),
                    "content":this.msg
                }
                this.compentList.unshift(cmt)
                this.msg = ''
            }


        }
    }
}
</script>

<style lang="less" scoped>
.cmt-content{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin:5px 0;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                background-color: #ccc;
                line-height: 30px;
            }
            .cmt-body{
                line-height: 40px;
                text-indent: 2em;
            }
        }
     
    }
}
</style>
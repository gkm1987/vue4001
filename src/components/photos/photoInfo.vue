<template>
    <div class="photoinfo-container">
        <h3>{{phpotoinfo.title}}</h3>
        <p class="subtitle">
            <span>发表时间:{{phpotoinfo.add_time | dateFormat}}</span>
            <span>点击:{{phpotoinfo.click}}次</span>
        </p>
        <hr>

        <!-- 缩略图 -->
        <div class="preview">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
        <!-- 图片内容 -->
        <div class="content">
            {{phpotoinfo.content}}
        </div>

        <!-- 放置一个 评论子组件 -->
        <cmt-box :id="id"></cmt-box>
    </div>
</template>
<script>
import comment from "../subcomponets/coment.vue"
export default {
    data(){
        return {
            id:this.$route.params.id,
            phpotoinfo:{},
            slide1: [
                {
                    src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                    msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                    alt: 'picture1',
                    title: 'Image Caption 1',
                    w: 600,
                    h: 400
                },
                {
                    src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                    msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                    alt: 'picture2',
                    title: 'Image Caption 2',
                    w: 1200,
                    h: 900
                }
                ]
             }
    },
    created(){
        this.getPhotoInfo()
    },
    methods:{
        getPhotoInfo(){
            this.axios.get("/json/phptoinfo.json").then((res)=>{
                this.phpotoinfo = res.data;
                console.log(res)
            })
        },
        handleClose () {
            console.log('close event')
        }
    },
    components:{
        "cmt-box":comment
    }
}
</script>

<style lang="less" scoped>
.photoinfo-container{
    padding: 5px;
    h3{
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        padding:  15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
}
</style>
<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="/img/demoimg.jpg" alt="">
            <h1 class="title">小米</h1>
            <div class="info">
                <p class="price">
                    <span class="now">$$11</span>
                    <span class="old">$22</span>
                </p>
                <p class="sell">
                    <span class="hot">热卖中</span>
                    <span class="residue">剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="/img/demoimg.jpg" alt="">
            <h1 class="title">小米小米小米小米小米小米小米小米小米小米小米</h1>
            <div class="info">
                <p class="price">
                    <span class="now">$$11</span>
                    <span class="old">$22</span>
                </p>
                <p class="sell">
                    <span class="hot">热卖中</span>
                    <span class="residue">剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="/img/demoimg.jpg" alt="">
            <h1 class="title">小米</h1>
            <div class="info">
                <p class="price">
                    <span class="now">$$11</span>
                    <span class="old">$22</span>
                </p>
                <p class="sell">
                    <span class="hot">热卖中</span>
                    <span class="residue">剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content:space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 230px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            p{
                margin: 0;
                padding: 5px;
            }
            background-color: #eee;
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 12px;
            }
        }
    }
}
</style>
<template>
    <div class="footer">
        <div class="footer_header">
            <div class="container">
                <img src="../assets/img/jiagou.png" alt="">
                <img src="../assets/img/icon.png" alt="" class="icon">
            </div>
        </div>
        <div class="footer_bottom">
            <div class="container">
                <div class="footerLeft">
                    <div class="item">
                        <span>友情链接</span>
                        <router-link to="###">易盾链动</router-link>
                    </div>
                    <div class="item">
                        <span>解决方案</span>
                        <router-link to="###">区块链供应链金融</router-link>
                        <router-link to="###">区块链存证</router-link>
                        <router-link to="###">区块链电商</router-link>
                        <router-link to="###">区块链服务网络</router-link>
                    </div>
                    <div class="item">
                        <span>常见问题</span>
                        <router-link to="###">BSN知识库</router-link>
                        <router-link to="###">培训</router-link>
                    </div>
                </div>
                <div class="footerRight">
                    <div class="img">
                        <img src="../assets/img/icon.png" alt="">
                    </div>
                    <span>微信公众号</span>
                </div>
            </div>
        </div>
        <div class="copyright">
            <span>©2021 All Rights Reserved   ICP备123456789号</span>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .footer{
        padding-top:60px;
    }
    .footer_header{
        padding-bottom:45px;
    }
    .footer_header>.container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .icon{
        margin-top:70px;
    }

    /*最底部 */
    .footer_bottom{
        padding-top:46px;
        height: 281px;
        background:#333333;
    }
    .footer_bottom .container{
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }
    .footerLeft{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .footerLeft .item{
        display: flex;
        flex-direction: column;
       
        margin-right:99px;
    }
    .footerLeft .item>span{

        font-size:18px;
        color:#E6E6E6;
        font-family: 'SourceHanSansCN-Regular';
    }
    .footerLeft .item>a{
        font-size:14px;
        color:#999999;
        font-family: 'SourceHanSansCN-Regular';
        margin-top:18px;

    }
    .footerRight{
        display: flex;
        flex-direction: column;
        align-items: center;
        border-left:1px solid rgba(153, 153, 153, 1);
         padding-left:105px;
    }
    .footerRight .img{
        width:97px;
        height:97px;
        object-fit: cover;
        margin-bottom:10px;
    }
    .img>img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .footerRight span{
        font-size:14px;
        color:#fff;
        font-family: 'SourceHanSansCN-Regular';
    }

    /*版权 */
    .copyright{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 39px;
        background: #282828;
    }
    .copyright span{
        font-size:14px;
        color:#fff;
        font-family: 'SourceHanSansCN-Regular';
    }
</style>
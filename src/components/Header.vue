<template>
    <div class="header">
        <div class="container">
       
              <img src="../assets/img/logo.png" alt="" @click="skip" style="cursor:pointer">
         
         
            <div class="right">
                <div class="nav">
                    <router-link to="/">网站首页</router-link>
                    <router-link to="/about" @mouseover.native="isOpen = true" @mouseleave.native="isOpen = false" >
                        关于BSN
                        <img src="../assets/img/arrow.png" alt="">
                        <transition name="fade" appear v-if="isOpen">
                            <div class="menu" @mouseleave="isOpen = false">
                                <router-link :to="item.path"  v-for="(item,index) in lists" :key="index"  >
                                    {{item.title}}
                                </router-link>
                            </div>
                        </transition>
                    </router-link>
                    <router-link to="/product" @mouseover.native="isOpen2 = true" @mouseleave.native="isOpen2 = false" >
                        BSN产品
                        <img src="../assets/img/arrow.png" alt="">
                        <transition name="fade" appear v-if="isOpen2">
                            <div class="menu" @mouseleave="isOpen2 = false">
                                <router-link :to="item.path"  v-for="(item,index) in lists" :key="index"  >
                                    {{item.title}}
                                </router-link>
                            </div>
                        </transition>
                    </router-link>
                    <router-link to="/activity" @mouseover.native="isOpen3 = true" @mouseleave.native="isOpen3 = false" >
                        BSN活动
                        <img src="../assets/img/arrow.png" alt="">
                        <transition name="fade" appear v-if="isOpen3">
                            <div class="menu" @mouseleave="isOpen3 = false">
                                <router-link :to="item.path"  v-for="(item,index) in lists" :key="index" >
                                    {{item.title}}
                                </router-link>
                            </div>
                        </transition>
                    </router-link>
                    <router-link to="/consult">资讯中心</router-link>
                    <router-link to="/cochain" @mouseover.native="isOpen4 = true" @mouseleave.native="isOpen4 = false">
                        企业上链
                        <img src="../assets/img/arrow.png" alt="">
                        <transition name="fade" appear v-if="isOpen4">
                            <div class="menu" @mouseleave="isOpen4 = false">
                                <router-link :to="item.path"  v-for="(item,index) in lists" :key="index" >
                                    {{item.title}}
                                </router-link>
                            </div>
                        </transition>
                    </router-link>
                    <router-link to="/contact">联系我们</router-link>
                     
                </div>
                <div class="register">快速注册</div>
                <div class="login">登录</div>
            </div>
        </div>
    </div>
</template>


<script>
export default{

    data(){
        return{
            isOpen:false,
            isOpen2:false,
            isOpen3:false,
            isOpen4:false,
            // changeStatus:0,//点击子菜单让导航栏选中
            lists:[
                {title:'bsn介绍',path:'/about'},
                {title:'节点运行情况',path:'###'},
                {title:'适配框架',path:'###'},
                {title:'资费运算器',path:'###'},
                {title:'知识库',path:'###'},
                {title:'白皮书',path:'###'},
            ],
        
        }
    },
    methods:{
        skip(){
            this.$router.push('/')
        }
        // change(){
        //     this.changeStatus = 1
        // },

    }

}

</script>

<style scoped>
.header{
    position: fixed;
    top:0;
    width: 100%;
    padding-top:32px;
    z-index: 1001;
}
.nav>.router-link-exact-active{
    border-bottom:2px solid #fff;
}

.container{
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left:10px;
}
.right>.nav{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}
.nav>a{
    position:relative;
    font-size: 16px;
    color:#fff;
    margin-right:0.210rem;
    padding-bottom:9px;
    white-space: nowrap;
    transition: .4s;
    font-family: 'SourceHanSansCN-Regular';
}
.nav>a:hover img{
    transition: .4s;
    transform: rotate(180deg);
}
/*下拉菜单 */
.menu{
    position: absolute;
    top: 30px;
    right: 50%;
    transform: translateX(50%);
    width: 120px;
    background: rgba(0, 0, 0, .3);
    padding-top:13px;
}
.menu>a{
    display: flex;
    flex-direction: column;
    height:40px;
    font-size:16px;
    text-align: center;
    color:#fff;
    line-height: 40px;
    font-family: 'SourceHanSansCN-Regular';
}
.menu>a:hover{
    background: #08134B;
    /* opacity: .5; */
}
.fade-enter-active,
.fade-leave-active{
    transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to{
    opacity: 0;
}
/*下拉菜单结束 */
.register{
    width: 130px;
    height: 38px;
    background: #FFFFFF;
    border-radius: 19px;
    text-align: center;
    font-size: 16px;
    line-height: 38px;
    margin-right:13px;
    cursor: pointer;
    font-family: 'SourceHanSansCN-Regular';
  
}
.login{
    width: 110px;
    height: 38px;
    border: 1px solid #FFFFFF;
    border-radius: 19px;
    text-align: center;
    font-size: 16px;
    line-height: 38px;
    color:#fff;
    cursor: pointer;
    font-family: 'SourceHanSansCN-Regular';
  
}
@media screen  and (max-width:1024px){
    .nav>a{
        white-space: inherit;
    }
}
</style>

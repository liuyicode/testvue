<template>
    <div class="box">
        <Header></Header>
        <div class="content">
            <div class="container">
                <div class="left">
                    <div class="item" v-for="(item,index) in lists" :key="index" @click="select(index)" :class="bg==index?'select':''">
                       <div>{{item.title}}</div>
                    </div>
                </div>
                <div class="right">
                    <div class="item">
                        <h3>重庆门户网-BSN介绍</h3>
                        <p>
                         2020年11月3日，《中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议》发布。建议提出，坚持创新在我国现代化建设全局中的核心地位，把科技自立自强作为国家发展的战略支撑。自中央学习讲话发表以来，区块链技术已上升至国家战略，并被国家发改委列入“新基建”范围。BSN和区块链技术的发展，有利于中国在全球区块链行业发展浪潮中保持领先地位。
                        </p>
                        <p>
                            中共中央政治局就区块链技术发展现状和趋势进行第十八次集体学习。中共中央总书记习近平在主持学习时强调，“区块链技术的集成应用在新的技术革新和产业变革中起着重要作用”，“要把区块链作为核心技术自主创新的重要突破口，明确主攻方向，加大投入力度，着力攻克一批关键核心技术，加快推动区块链技术和产业创新发展”习近平总书记的讲话给区块链产业带来重大影响，会加速区块链行业的变革，加速区块链的应用推广，加速区块链行业的创新发展。
                        </p>
                        <p>
                            区块链服务网络（Blockchain-based Service Network）是一个跨云服务、跨门户、跨底层框架，用于部署和运行区块链应用的全球性公共基础设施网络；将云服务、区块链底层架构、Baas服务商集成在一起，标准化区块链开发。BSN与其他网络相比，在成本效益和稳定性上更具优势，解决区块链行业“成链成本高、技术门槛高、监管难度高”的固有问题。
                        </p>
                        <p>
                           BSN是由国家信息中心、中国移动通信集团有限公司、中国银联股份有限公司、北京红枣科技有限公司共同发起，是全球规模最大的区块链底层基础服务环境，目前已在全球建立了一百二十余个公共城市节点。通过BSN，一个应用每年仅需2000-3000元人民币即可成链并开始运行。中小微企业、甚至学生在内的个人都可以通过BSN进行创新、创业。
                        </p>
                        <p>
                           重庆市政府对区块链产业发展也是高度重视，在出台区块链政策规划方面，产业整体规划思路清晰，更加重视通过招商引资、打造产业集聚效应来推进产业链的协同发展。重庆BSN主干网项目建设将在区块链服务网络发展联盟 (BSN)的指导下进行，易盾链动（重庆）数字科技有限公司负责重庆市场整体运营维护，重庆BSN主干网将率先成为10个BSN省级主干网门户之一，力争发展成为辐射西南地区的区域级主干网门户。

                        </p>
                    
                    </div>
                   
                </div>
            </div>
        </div>
       
    </div>    
</template>


<script>
  import Header from '../components/Header'
  import Footer from '../components/Footer'
  export default{
    data(){
        return{
            bg:0,
            show:0,
            lists:[
                {title:'BSN介绍',path:'/a'},
                {title:'节点运行情况',path:'/b'},
                {title:'适配框架',path:'/c'},
                {title:'资费计算器',path:'/d'},
                {title:'知识库',path:'/e'},
                {title:'白皮书',path:'/f'},
            ]
        }
    },
    methods:{
        select(i){
          
           this.bg = i
        }
    },
    components: { 
      Header,
      Footer
    },

  }
</script>


<style scoped>
.header{
    position:static;
    background:#164AA1;
    padding-bottom:32px;
}
.content{
    padding-top:89px;
    margin-bottom:110px;
}
.content >.container{
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
.left{
    margin-right:70px;
}
.left>.item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 168px;
    height: 60px;
    background: #FFFFFF;
    box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.05);
    margin-bottom:12px;
    cursor: pointer;
}
.left>.item>div{
    font-size:18px;
    color:#999;
    font-family: 'SourceHanSansCN-Regular';
}
.left>.select>div{
     color:#fff !important;
}
.select{
    background:#164AA1 !important;
    box-shadow: 0px 1px 13px 0px rgba(22, 74, 161, 0.61) !important;
}
.right>.item{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
    width: 754px;
}
.right h3{
    font-size:30px;
    font-weight: 500;
    margin-bottom:20px;
    font-family: 'SourceHanSansCN-Regular';
    font-weight: 600;
}
.right p{
    font-size: 16px;
    font-weight: 400;
    color: #000000;
    line-height: 36px;
     font-family: 'SourceHanSansCN-Regular';
     text-indent: 37px;
}
</style>
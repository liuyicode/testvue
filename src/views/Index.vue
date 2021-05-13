<template>
  <div class="about">
      <Header></Header>
      <div class="content">
        <video autoplay muted loop>
          <source src="../assets/video/index2.mp4">
        </video>
          <div class="loginBox">
              <div class="item">
                  <label for="user">用户名:</label>
                  <input type="text" id="user" placeholder="请输入用户名">
              </div>
              <div class="item">
                <label for="password">密码:</label>
                <input type="password" id="password" placeholder="请输入密码">
              </div>
              <div class="item last">
                <label for="code">验证码:</label>
                <input type="text" id="code">
                <div class="codeBox"></div>
              </div>
              <div class="change">
                  <div class="cLeft">
                      <input type="checkbox">
                      <span>记住密码</span>
                  </div>
                  <div class="cRight">
                      <span>忘记密码</span>
                  </div>
              </div>
              <div class="loginBtn">
                登录
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  export default{
    components: { 
      Header,
    },

  }
</script>

<style scoped>
  .content{
    position:relative;
  }
  .content video{
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .loginBox{
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    position:absolute;
    top: 50%;
    right:1.579rem;
    transform: translateY(-50%);
    width: 420px;
    color:#fff;

    background: #fff;
    opacity: .7;
    padding:47px 35px 47px 0px;
    font-size:0;
    border: 1px solid rgba(255,255,255,.3);
  }
   .loginBox .item{
      margin-bottom:27px;
   }
  .loginBox .item>label{
    color:#000;
    font-size:17px;
    margin-right:17px;
    font-family: 'SourceHanSansCN-Regular';
  }
  .item input{
    width: 278px;
    height: 39px;
    background: transparent;
    border: 1px solid rgba(255,255,255,.3);

    color:#fff;
    font-size:14px;
    text-indent: 10px;
  }
  .last{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .last >input{
    width:auto !important;
  }
  .last .codeBox{
    width: 102px;
    height: 100%;
  }
  .change{
    width:278px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .change span{
    font-size:15px;
    color:#000;
    margin-left:11px;
    cursor: pointer;
      font-family: 'SourceHanSansCN-Regular';
  }
  .change .cLeft{
    display: flex;
    align-items: center;
      font-family: 'SourceHanSansCN-Regular';
  }
  .loginBtn{
    
    width: 352px;
    height: 38px;
        background:#013893;
    box-shadow: 0px 5px 9px 0px rgba(48, 206, 253, 0.14);
    border-radius: 3px;
    margin-top:38px;
    color:#fff;
    font-size:20px;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
      font-family: 'SourceHanSansCN-Regular';
  }
</style>

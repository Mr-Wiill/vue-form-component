<template>
  <div class="home">
    <div class="tab">
      <router-link to="/form"><el-button type="primary">动态生成表单项</el-button></router-link>
      <!--<router-link to="/table"><el-button type="success">动态增删表头</el-button></router-link>-->
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to My App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #fff;
    text-decoration: none;
  }
  .home{
    padding: 50px;
  }
  .main{
    width: 920px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
  }
</style>

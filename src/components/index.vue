<template>
    <el-container v-if="$store.getters.getUsers!=null">
  <el-header>
      <el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <!-- <el-avatar style="margin:0px auto;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar >
  ：{{$store.state.login.users.username}} -->
  
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
  <div style="float:right"><el-button type="danger" round style="line-height:0px;width:65px;font-size:10px;" @click="logOut">退出</el-button>
  </div>
</el-menu>
  </el-header>

  
  <el-container>
       <el-aside width="280px">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#D3D3D3"
      >

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>考勤管理</span>
        </template>
        <!-- <el-menu-item-group> -->
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1">请假审批</el-menu-item>
          <el-menu-item index="1-2">加班详情</el-menu-item>
        <!-- </el-menu-item-group> -->
        <!-- <el-menu-item-group title="分组2"> -->
          <el-menu-item index="1-3">考勤统计</el-menu-item>
        <!-- </el-menu-item-group> -->
        <!-- <el-submenu index="1-4"> -->
          <!-- <template slot="title">出差信息</template> -->
          <el-menu-item index="1-4-1">出差信息</el-menu-item>
        <!-- </el-submenu>-->
      </el-submenu> 

       <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>薪资管理</span>
        </template>
          <el-menu-item index="2-1">发放工资</el-menu-item>
          <el-menu-item index="2-2">员工福利</el-menu-item>
          <el-menu-item index="2-3">工资图</el-menu-item>
      </el-submenu> 

 <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>项目管理</span>
        </template>
          <el-menu-item index="3-1">项目立项申请</el-menu-item>
          <el-menu-item index="3-2">项目立项审批</el-menu-item>
          <el-menu-item index="3-3">查询项目</el-menu-item>
          <el-menu-item index="3-4">项目跟踪</el-menu-item>
          <el-menu-item index="3-5">项目奖金</el-menu-item>
          <el-menu-item index="3-6">项目经费报表</el-menu-item>
      </el-submenu> 

 <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>任务中心</span>
        </template>
          <el-menu-item index="4-1">创建任务</el-menu-item>
          <el-menu-item index="4-2">分配任务</el-menu-item>
          <el-menu-item index="4-3">查询任务</el-menu-item>
          <el-menu-item index="4-4">任务交接</el-menu-item>
          <el-menu-item index="4-5">进度跟踪</el-menu-item>
          <el-menu-item index="4-6">任务奖金</el-menu-item>
      </el-submenu> 

       <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>人事管理</span>
        </template>
          <el-menu-item index="5-1">员工部门</el-menu-item>
          <el-menu-item index="5-2">用户管理</el-menu-item>
          <el-menu-item index="5-3">权限管理</el-menu-item>
      </el-submenu> 
           <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>公告通知</span>
        </template>
          <el-menu-item index="6-1">公告拟稿</el-menu-item>
          <el-menu-item index="6-2">查看公告</el-menu-item>
      </el-submenu> 
    </el-menu>
     </el-aside>
 
    <el-main>
      <!-- <component :is="$store.getters.getAppview"></component> -->
      <h1 style="font-size:75px;color:red;">欢迎登录</h1>
    </el-main>
  </el-container>
  <el-footer>
          <a target="_blank" href="https://element.eleme.cn/#/zh-CN">Element-UI</a>
      </el-footer>
</el-container>
</template>

<script>
import {mapActions,mapMutations} from 'vuex';
export default {
    name: "",
    data() {
        return {}
    },
    components: {},
    methods: { 
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      logOut(){
        this.$confirm('您确定退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.dispatch("logOut",null);
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });          
        });
      },
      }
}
</script>

<style  scoped>
.el-header {
    background-color:  rgb(84, 92, 100);
    color: #333;
    text-align: center;
    line-height: 50px;
  }
  .el-footer {
    background-color:  rgb(84, 92, 100);
    color: #333;
    text-align: center;
    height: 20px;
  }
  .el-menu-item{
    color: slateblue;
    text-align: center;
  }
  
  .el-aside {
    background-color:
#D3D3D3;
    color: #333;
    min-height: 450px;
  }
  
  .el-main {
    background-color: white;
    color: #333;
    text-align: center;
    line-height: 405px;
  }
  
  
  body > .el-container {
    
    margin-bottom: 40px;
  }
  

</style>

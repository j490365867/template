<template>
  <el-container>
    <el-header height="93px">
      <app-header />
    </el-header>
    <div ref="appMain">
      <el-main>
        <app-main />
      </el-main>
    </div>
    <el-footer height="120px">
      <app-footer />
    </el-footer>
  </el-container>
</template>

<script>
import { appHeader, appMain, appFooter } from './components';

export default {
  name: 'Layout',
  components: {
    appHeader,
    appMain,
    appFooter
  },
  mounted() {
    this.$refs.appMain.style.minHeight = (window.innerHeight - 70) * 1280 / window.screen.width + 'px';
  }
};
</script>

<style lang="scss" scoped>
  .el-main {
    margin-bottom: -5px;
    min-height: 736px;
  }
  .el-header, .el-main, .el-footer{
    padding: 0;
    overflow: hidden;
  }
</style>

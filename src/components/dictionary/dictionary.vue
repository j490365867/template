<template>
  <div>
    <el-option
      v-for="(item,index) in dictList"
      :key="index"
      :value="item.dictValue"
      :label="item.dictDest"></el-option>
  </div>
</template>
<script>
export default {
  props: {
    dictCode: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      lang: this.$Cookies.get('locale'),
      dictList: []
    };
  },
  created() {
    this.doInitData();
  },
  methods: {
    doInitData() {
      this.$http({
        url: '/common/dictionary/findByCode',
        method: 'get',
        params: { dictCode: this.dictCode, lang: this.lang }
      }).then(res => {
        if (res.code === 200) {
          this.dictList = res.object;
        }
      });
    }
  }
};
</script>

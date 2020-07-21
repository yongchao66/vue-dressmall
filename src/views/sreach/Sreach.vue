<template>
	<div class="sreach">
    <nav-bar navbarColor='#666'>
      <i slot='left' class="back iconfont icon-fanhui" @click="backClick"></i>
      <div slot="center" class="sreach-box">
        <input type="text" v-model="value" @keyup.enter="sreachClick($event)">
      </div>
      <span slot='right' @click="sreachClick(value)">搜索</span>
    </nav-bar>
    <div class="sreach-list">
      <div class="histroy align-items">
        <span class="flex">历史记录</span>
        <i class="iconfont icon-delete" @click="delClick"></i>
      </div>
      <ul class="list clearfix">
        <li v-for="(item, index) in histroy.slice(0,9)" :key='index' class="items">{{item}}</li>
      </ul>
    </div>
	</div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
	export default {
		name: 'Sreach',
    components: {
      NavBar
    },
    data() {
      return {
        value: "春季新款",
        histroy: ["春季新款", "短裤"]
      }
    },
    methods: {
      backClick() {
        this.$router.back()
      },
      sreachClick(e) {
        let val = e.target.value
        if (val !== null) {
          this.value = val

          let flag = this.histroy.find( item => item == val)

          if (!flag) {
            this.histroy.push(val)
          }
        }
      },
      delClick() {
        this.histroy.splice(0,this.histroy.length)
      }
    }
	}
</script>

<style lang="scss" scoped>
  .sreach {
    height: 100vh;
    background-color: #f2f2f2;
  }
  .sreach-box {
    >input {
      width: 100%;
      height: 32px;
      color: #666;
      text-indent: 10px;
      background-color: #f2f2f2;
      border-radius: 8px;
    }
  }

  .sreach-list {
    margin-top: 44px;
    .histroy {
      padding: 0 12px;
      height: 36px;
      border-bottom: 1px solid #ccc;

      i {
        font-size: 24px;
      }
    }

    .list {
      padding: 12px;

      .items {
        float: left;
        padding: 8px;
      }
    }
  }
</style>

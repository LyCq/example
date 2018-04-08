<template>
  <div>

      这是商品列表页面
      <span> {{$route.params.GoodsId}}</span><br>
      <span>{{$route.params.userName}}</span>
      <router-link to="/goods/title">点击获取商品的标题</router-link>
      <router-link to="/goods/img">点击获取商品的图片</router-link>
      <div><router-view></router-view></div>
      <router-link to="/cart/ksjkdjkasjdk">跳转到购物车页面</router-link>
      <button @click="jump">button-跳转到购物车页面</button>
      
  </div>
</template>
<style>

</style>
<script>
export default{
    data () {
        return {
            msg:'hello, vue'
        }
    },
    methods: {
        jump(){
            // this.$router.push({path:'/cart', query:{goodsId:'123456', name:'admin'}})
            this.$router.go(-2)
        }
    }
}
</script>

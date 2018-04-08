<template>
  <div>
      这是购物车页面 
      <span>{{$route.query.goodsId}}</span><br>
      <span>{{$route.query.name}}</span>

      <hr>
      <div>
        通过url获取的参数:
        <span>{{$route.params.user}}</span>
      </div>
  </div>
</template>

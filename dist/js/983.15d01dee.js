"use strict";(self["webpackChunksc"]=self["webpackChunksc"]||[]).push([[983],{8287:function(t,s,a){a.d(s,{A:function(){return u}});a(4114);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"goods-item",on:{click:function(s){return t.$router.push(`/prodetail/${t.item.goods_id}`)}}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.item.goods_image,alt:""}})]),s("div",{staticClass:"right"},[s("p",{staticClass:"tit text-ellipsis-2"},[t._v(" "+t._s(t.item.goods_name)+" ")]),s("p",{staticClass:"count"},[t._v("已售"+t._s(t.item.goods_sales)+"件")]),s("p",{staticClass:"price"},[s("span",{staticClass:"new"},[t._v("¥"+t._s(t.item.goods_price_min))]),s("span",{staticClass:"old"},[t._v("¥"+t._s(t.item.goods_price_max))])])])])},o=[],r={data(){return{}},props:{item:{type:Object,default:()=>{}}}},i=r,n=a(1656),c=(0,n.A)(i,e,o,!1,null,"3a2aea24",null),u=c.exports},9983:function(t,s,a){a.r(s),a.d(s,{default:function(){return l}});a(4114);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.querySearch||"搜索商品","show-action":""},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("van-icon",{staticClass:"tool",attrs:{name:"apps-o"}})]},proxy:!0}])}),t._m(0),s("div",{staticClass:"goods-list"},t._l(t.ProList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)],1)},o=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"sort-btns"},[s("div",{staticClass:"sort-item"},[t._v("综合")]),s("div",{staticClass:"sort-item"},[t._v("销量")]),s("div",{staticClass:"sort-item"},[t._v("价格 ")])])}],r=a(7867),i=a(8287),n={name:"SearchIndex",data(){return{page:1,ProList:[]}},components:{GoodsItem:i.A},async created(){this.getList()},methods:{async getList(){const t=await(0,r.Cd)({categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.ProList=t.data.data.list.data}},computed:{querySearch(){return this.$route.query.search}}},c=n,u=a(1656),d=(0,u.A)(c,e,o,!1,null,"3568a36e",null),l=d.exports},7867:function(t,s,a){a.d(s,{B7:function(){return r},Cd:function(){return o},Yv:function(){return i}});var e=a(5720);const o=t=>{const{categoryId:s,goodsName:a,page:o}=t;return e.A.get("/goods/list",{params:{categoryId:s,goodsName:a,page:o}})},r=t=>e.A.get("/goods/detail",{params:{goodsId:t}}),i=(t,s)=>e.A.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=983.15d01dee.js.map
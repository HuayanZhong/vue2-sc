"use strict";(self["webpackChunksc"]=self["webpackChunksc"]||[]).push([[210],{8287:function(t,a,s){s.d(a,{A:function(){return l}});s(4114);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"goods-item",on:{click:function(a){return t.$router.push(`/prodetail/${t.item.goods_id}`)}}},[a("div",{staticClass:"left"},[a("img",{attrs:{src:t.item.goods_image,alt:""}})]),a("div",{staticClass:"right"},[a("p",{staticClass:"tit text-ellipsis-2"},[t._v(" "+t._s(t.item.goods_name)+" ")]),a("p",{staticClass:"count"},[t._v("已售"+t._s(t.item.goods_sales)+"件")]),a("p",{staticClass:"price"},[a("span",{staticClass:"new"},[t._v("¥"+t._s(t.item.goods_price_min))]),a("span",{staticClass:"old"},[t._v("¥"+t._s(t.item.goods_price_max))])])])])},e=[],n={data(){return{}},props:{item:{type:Object,default:()=>{}}}},r=n,o=s(1656),c=(0,o.A)(r,i,e,!1,null,"3a2aea24",null),l=c.exports},9210:function(t,a,s){s.r(a),s.d(a,{default:function(){return p}});s(4114);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"home"},[a("van-nav-bar",{attrs:{title:"智慧商城",fixed:""}}),a("van-search",{attrs:{readonly:"",shape:"round",background:"#f1f1f2",placeholder:"请在此输入搜索关键词"},on:{click:function(a){return t.$router.push("/search")}}}),a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.bannerList,(function(t){return a("van-swipe-item",{key:t.imgName},[a("img",{attrs:{src:t.imgUrl,alt:""}})])})),1),a("van-grid",{attrs:{"column-num":"5","icon-size":"40"}},t._l(t.navList,(function(s,i){return a("van-grid-item",{key:i,attrs:{icon:s.imgUrl,text:s.text},on:{click:function(a){return t.$router.push("/category")}}})})),1),t._m(0),a("div",{staticClass:"guess"},[a("p",{staticClass:"guess-title"},[t._v("—— 猜你喜欢 ——")]),a("div",{staticClass:"goods-list"},t._l(t.proList,(function(t){return a("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)])],1)},e=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"main"},[a("img",{attrs:{src:s(8823),alt:""}})])}],n=s(8287),r=s(5720);const o=()=>r.A.get("/page/detail",{params:{pageId:0}});var c={name:"HomePage",data(){return{bannerList:[],navList:[],proList:[]}},components:{GoodsItem:n.A},async created(){const t=await o();this.bannerList=t.data.data.pageData.items[1].data,this.navList=t.data.data.pageData.items[3].data,this.proList=t.data.data.pageData.items[6].data}},l=c,d=s(1656),u=(0,d.A)(l,i,e,!1,null,"644d0d45",null),p=u.exports},8823:function(t,a,s){t.exports=s.p+"img/main.95d4fe07.png"}}]);
//# sourceMappingURL=210.f5a69b0b.js.map
"use strict";(self["webpackChunkvue2_0"]=self["webpackChunkvue2_0"]||[]).push([[67],{4067:function(t,s,e){e.r(s),e.d(s,{default:function(){return m}});var a=function(){var t=this,s=t._self._c;return s("div",[s("iframe",{staticStyle:{display:"none"},attrs:{id:"geoPage",width:"0",height:"0",frameborder:"0",scrolling:"no",src:"https://apis.map.qq.com/tools/geolocation?key=DRSBZ-WO43X-OLO4S-ZOVE5-AB6RV-5WFH2&referer=111"}}),s("div",{staticClass:"search"},[s("el-input",{staticClass:"search-inp",attrs:{placeholder:"请输入要搜索的地名"},model:{value:t.address,callback:function(s){t.address=s},expression:"address"}}),s("div",{staticClass:"search-btn",on:{click:t.search}},[t._v("搜索")])],1),s("div",{staticStyle:{height:"400px",width:"100%","text-align":"center","line-height":"500px","font-size":"20px"},attrs:{id:"container"}}),s("div",{staticClass:"list"},t._l(t.list,(function(e,a){return s("div",{key:a,staticClass:"list-item",on:{click:function(s){return t.listClick(e)}}},[s("div",{staticClass:"list-item-left"},[s("div",{staticClass:"list-item-name"},[t._v(t._s(e.name||""))]),s("div",{staticClass:"list-item-address"},[t._v(t._s(e.addr||""))])]),s("div",{staticClass:"list-item-btn"},[t._v("发送")])])})),0)])},i=[],n=e(8848);const r=window.qq;var l={data(){return{str:"",list:[],address:""}},created(){document.title="地图"},mounted(){n.Z.loading({duration:0,forbidClick:!0,message:"加载地图中..."}),this.type=!1;this.geolocation=new r.maps.Geolocation("DRSBZ-WO43X-OLO4S-ZOVE5-AB6RV-5WFH2","111"),this.getLocation()},methods:{initAddress(t,s){n.Z.clear(),this.isOk=!0;const e=this;this.lat=t,this.lng=s;const a=new TMap.service.Geocoder,i=new TMap.LatLng(t,s);a.getAddress({location:i}).then((a=>{const{status:i,result:n}=a;0==i&&(e.list=[{addr:n.address,name:n.formatted_addresses.recommend,latLng:{lat:t,lng:s}}])})).catch((t=>{console.log(t,"err")})),this.initMap()},search(){if(!this.isOk)return;if(!this.address)return;const t=this,s=new r.maps.SearchService({complete:function(e){if("CITY_LIST"===e.type)return s.setLocation(e.detail.cities[0].cityName),void(t.address&&s.search(t.address));const a=e.detail.pois;t.list=a.map((t=>({addr:t.address,latLng:t.latLng,name:t.name})));const i=new r.maps.LatLngBounds;for(let t=0,s=a.length;t<s;t++){const s=a[t];i.extend(s.latLng)}t.map.fitBounds(i),t.marker&&(t.marker.setMap(null),t.marker=new r.maps.Marker({position:a[0].latLng,map:t.map}))}});s.search(this.address)},getLocation(){this.str="获取中";const t=this,s=s=>{n.Z.clear(),this.isOk=!0;const{lat:e,lng:a,nation:i,province:r,city:l,addr:o}=s;this.str=JSON.stringify(s),this.lat=e,this.lng=a,this.lat&&(this.type=!0);const c=new TMap.service.Geocoder,d=new TMap.LatLng(e,a);c.getAddress({location:d}).then((s=>{const{status:i,result:n}=s;0==i&&(t.list=[{addr:n.address,name:n.formatted_addresses.recommend,latLng:{lat:e,lng:a}}])})).catch((t=>{console.log(t,"err")})),this.initMap()},e=t=>{console.log(t,"test==>"),this.getLocation()};this.geolocation.getLocation(s,e,{timeout:3e4})},initMap(){const t=this,s=new r.maps.LatLng(this.lat,this.lng),e={zoom:15,center:s,mapTypeId:r.maps.MapTypeId.ROADMAP};setTimeout((()=>{const a=this,i=new r.maps.Map(document.getElementById("container"),e);this.map=i;let n=null;this.lat&&(n=new r.maps.Marker({position:s,map:i})),this.map=i,this.marker=n,this.location={lat:this.lat,lng:this.lng},r.maps.event.addListener(i,"click",(function(s){if(this.disabled)return;const e=new r.maps.Geocoder({complete:s=>{t.list=s.detail.nearPois.map((t=>({addr:t.address,latLng:t.latLng,name:t.name})))}});a.marker&&a.marker.setMap(null),a.marker=new r.maps.Marker({position:s.latLng,map:i}),i.setZoom(20),i.setCenter(s.latLng),new r.maps.LatLng;const n=new r.maps.LatLng(s.latLng.getLat(),s.latLng.getLng());e.getAddress(n)}))}),500)},listClick(t){try{const s=new r.maps.LatLngBounds;s.extend(t.latLng),this.map.fitBounds(s),this.marker&&(this.marker.setMap(null),this.marker=new r.maps.Marker({position:t.latLng,map:this.map}))}catch(s){console.log(s)}alert(t.addr)}}},o=l,c=e(1001),d=(0,c.Z)(o,a,i,!1,null,"0eabad9a",null),m=d.exports}}]);
//# sourceMappingURL=67.10be75e2.js.map
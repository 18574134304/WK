
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/content/content","pages/mine/mine","pages/index/newTeam","pages/index/checkPlay","pages/mine/carlist","pages/index/pendList/pendList","pages/index/pendList/systemMessage","pages/index/shopManage/shopManage","pages/index/shopManage/children/shopInfo","pages/index/shopManage/children/shopName","pages/index/shopManage/children/shopMobile/shopMobile","pages/index/shopManage/children/shopMobile/addMobile","pages/index/shopManage/children/shopAddress/shopAddress","pages/index/shopManage/children/shopAddress/checkAddress","pages/index/shopManage/children/shopTime","pages/index/shopManage/children/roomManage","pages/mine/setup","pages/mine/orderDetauls","pages/mine/aboutMy","pages/mine/editPassword","pages/mine/bindingMobile","pages/mine/dmStration","pages/mine/dmInfo","pages/mine/sale","pages/mine/ranking","pages/mine/scriptRanking","pages/scriptDetails/details"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"玩咖商家版","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#5F6672","selectedColor":"#09BCAF","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index-active.png","text":"当日"},{"pagePath":"pages/content/content","iconPath":"static/tabbar/content.png","selectedIconPath":"static/tabbar/content-active.png","text":"车队预约"},{"pagePath":"pages/mine/mine","iconPath":"static/tabbar/mine.png","selectedIconPath":"static/tabbar/mine-active.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"玩咖联盟","compilerVersion":"3.1.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/content/content","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/index/newTeam","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"新建车队"}},{"path":"/pages/index/checkPlay","meta":{},"window":{"titleNView":false}},{"path":"/pages/mine/carlist","meta":{},"window":{"titleNView":false}},{"path":"/pages/index/pendList/pendList","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"待办事项"}},{"path":"/pages/index/pendList/systemMessage","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","navigationBarTitleText":"系统消息"}},{"path":"/pages/index/shopManage/shopManage","meta":{},"window":{"titleNView":false}},{"path":"/pages/index/shopManage/children/shopInfo","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"门店资料"}},{"path":"/pages/index/shopManage/children/shopName","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"门店名称"}},{"path":"/pages/index/shopManage/children/shopMobile/shopMobile","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"门店电话"}},{"path":"/pages/index/shopManage/children/shopMobile/addMobile","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"添加电话"}},{"path":"/pages/index/shopManage/children/shopAddress/shopAddress","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"门店地址"}},{"path":"/pages/index/shopManage/children/shopAddress/checkAddress","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"选择地址"}},{"path":"/pages/index/shopManage/children/shopTime","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"营业时间"}},{"path":"/pages/index/shopManage/children/roomManage","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTitleText":"房间管理"}},{"path":"/pages/mine/setup","meta":{},"window":{"navigationBarTitleText":"设置","navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages/mine/orderDetauls","meta":{},"window":{"titleNView":false}},{"path":"/pages/mine/aboutMy","meta":{},"window":{"navigationBarTitleText":"关于我们","navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages/mine/editPassword","meta":{},"window":{"navigationBarTitleText":"修改密码","navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages/mine/bindingMobile","meta":{},"window":{"navigationBarTitleText":"绑定手机","navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages/mine/dmStration","meta":{},"window":{"titleNView":false}},{"path":"/pages/mine/dmInfo","meta":{},"window":{"navigationBarTitleText":"DM信息","navigationBarBackgroundColor":"#FFFFFF"}},{"path":"/pages/mine/sale","meta":{},"window":{"titleNView":false}},{"path":"/pages/mine/ranking","meta":{},"window":{"titleNView":false}},{"path":"/pages/mine/scriptRanking","meta":{},"window":{"titleNView":false}},{"path":"/pages/scriptDetails/details","meta":{},"window":{"titleNView":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
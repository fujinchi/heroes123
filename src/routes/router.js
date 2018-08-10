import VueRouter from 'vue-router';
import Vue from 'vue';

// 注册 VueRouter 插件  this.$router   this.$route
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({
    // 路由规则
    routes: [
        { name: 'heroes', path: '/heroes', component: HeroesList },
        { name: 'euqips', path: '/euqips', component: EuqipsList },
        { name: 'weapons', path: '/weapons', component: WeaponsList },
    ]
});

// 模块中导出路由对象
export default router;
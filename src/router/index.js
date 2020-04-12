import Vue from 'vue';
import Router from 'vue-router';
import App from "@/App";
import PaintBricks from "@/components/PaintBricks";
import SmashBricks from "@/components/SmashBricks";

Vue.config.publicPath = process.env.publicPath;

Vue.use(Router);

const router = new Router({
    mode: 'history',
    linkActiveClass: 'active',
    base: Vue.config.publicPath,
    routes: [
        {
            path: '/bricks',
            name: 'home',
            component: App,
            children: [
                {
                    path: '/bricks/paint-bricks',
                    name: 'paint-bricks',
                    component: PaintBricks
                },
                {
                    path: '/bricks/smash-bricks',
                    name: 'smash-bricks',
                    component: SmashBricks
                },
            ]
        },
    ],
});


export default router;

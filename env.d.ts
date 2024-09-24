/// <reference types="vite/client" />

//解决any隐式,找不到类型
declare module "*.vue"{
    import {Component} from "vue";
    const component: Component;
    export default component;
}
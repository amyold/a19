import axios from './axios'
import {
    Message,
    MessageBox
} from 'element-ui'
/**
 * 表单请求拦截
 */
axios.interceptors.request.use(
    config => {
        if (
            config.headers["Content-Type"].includes("x-www-form-urlencoded") ||
            config.headers["Content-Type"].includes("multipart/form-data")
        ) {
            let formData = new FormData();
            for (let item in config.data) {
                if (config.data[item])
                    if (
                        typeof config.data[item] == "object" &&
                        Array.isArray(config.data[item])
                    ){
                        for (let index in config.data[item]){
                            let i = config.data[item][index];
                            formData.append(item+'['+index+']',i);
                        }
                    }
                    else formData.append(item, config.data[item]);
            }
            config.data = formData;
        }
        else
        {
            config.headers["Content-Type"]="application/json"
        }
        return config;
    },
    error=>{
        return Promise.reject(error)
    }
)
export class util{
    static showMessage(type,mess){
        Message({
            message : mess,
            type: type
        });
    }
}
//权限相关api
export class Admin {

    /**
     * @summary 修改管理员端用户表
     */
    static async updateHmsAdminUsingPOST(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/admin',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 添加管理员端用户表
     */
    static async addHmsAdminUsingPUT(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'put',
                url:'/auth/admin',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 获取权限人员及其对应的角色名
     * @param {object} [username] username
     */
    static async loadUserByUsernameUsingGET(username){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/auth/admin/loadByUsername',
                data:{},
                params:{username},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 登录接口
     */
    static async adminLoginUsingPOST(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/admin/login',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端用户表分页列表
     */
    static async getHmsAdminPageListUsingPOST(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/admin/page',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":"application/json"
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端用户表详情
     * @param {object} [pathid] id
     */
    static async getHmsAdminUsingGET(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/auth/admin/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 删除管理员端用户表
     * @param {object} [pathid] id
     */
    static async deleteHmsAdminUsingDELETE(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'delete',
                url:'/auth/admin/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }
}
export class AdminRole {

    /**
     * @summary 修改管理员端用户和角色关系表
     */
    static async updateHmsAdminRoleUsingPOST(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/adminRole',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 添加管理员端用户和角色关系表
     */
    static async addHmsAdminRoleUsingPUT_1(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'put',
                url:'/auth/adminRole',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 批量添加管理员端用户和角色关系表
     */
    static async addHmsAdminRoleUsingPUT(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'put',
                url:'/auth/adminRole/batch',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端用户和角色关系表分页列表
     */
    static async getHmsAdminRolePageListUsingPOST(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/adminRole/page',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端用户和角色关系表详情
     * @param {object} [pathid] id
     */
    static async getHmsAdminRoleUsingGET(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/auth/adminRole/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 删除管理员端用户和角色关系表
     * @param {object} [pathid] id
     */
    static async deleteHmsAdminRoleUsingDELETE(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'delete',
                url:'/auth/adminRole/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }
}
export class Resource {

    /**
     * @summary 修改管理员端权限表
     */
    static async updateHmsResourceUsingPOST(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/resource',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 添加管理员端权限表
     */
    static async addHmsResourceUsingPUT(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'put',
                url:'/auth/resource',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端权限表分页列表
     */
    static async getHmsResourcePageListUsingPOST(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/resource/page',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端权限表详情
     * @param {object} [pathid] id
     */
    static async getHmsResourceUsingGET(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/auth/resource/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 删除管理员端权限表
     * @param {object} [pathid] id
     */
    static async deleteHmsResourceUsingDELETE(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'delete',
                url:'/auth/resource/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }
}
export class ResourceCategory {

    /**
     * @summary 修改管理员端资源分类表
     */
    static async updateHmsResourceCategoryUsingPOST(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/resourceCategory',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 添加管理员端资源分类表
     */
    static async addHmsResourceCategoryUsingPUT(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'put',
                url:'/auth/resourceCategory',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端资源分类表分页列表
     */
    static async getHmsResourceCategoryPageListUsingPOST(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/resourceCategory/page',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 资源分类树形形态
     */
    static async getHmsResourceTreeUsingGET(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/auth/resourceCategory/tree',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端资源分类表详情
     * @param {object} [pathid] id
     */
    static async getHmsResourceCategoryUsingGET(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/auth/resourceCategory/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 删除管理员端资源分类表
     * @param {object} [pathid] id
     */
    static async deleteHmsResourceCategoryUsingDELETE(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'delete',
                url:'/auth/resourceCategory/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }
}
export class Role {

    /**
     * @summary 修改管理员端角色表
     */
    static async updateHmsRoleUsingPOST(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/role',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 添加管理员端角色表
     */
    static async addHmsRoleUsingPUT(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'put',
                url:'/auth/role',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端角色表分页列表
     */
    static async getHmsRolePageListUsingPOST(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/role/page',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端角色表详情
     * @param {object} [pathid] id
     */
    static async getHmsRoleUsingGET(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/auth/role/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 删除管理员端角色表
     * @param {object} [pathid] id
     */
    static async deleteHmsRoleUsingDELETE(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'delete',
                url:'/auth/role/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }
}
export class RoleResource {

    /**
     * @summary 修改管理员端角色表资源关联表
     */
    static async updateHmsRoleResourceUsingPOST(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/roleResoruce',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 添加管理员端角色表资源关联表
     */
    static async addHmsRoleResourceUsingPUT_1(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'put',
                url:'/auth/roleResoruce',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 批量添加管理员端角色表资源关联表
     */
    static async addHmsRoleResourceUsingPUT(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'put',
                url:'/auth/roleResoruce/batch',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 管理员端角色表资源关联表分页列表
     */
    static async getHmsRoleResourcePageListUsingPOST(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/auth/roleResoruce/page',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 根据roleId获取其对应的resourceId
     * @param {object} [pathid] id
     */
    static async getHmsRoleResourceUsingGET(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/auth/roleResoruce/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 删除管理员端角色表资源关联表
     * @param {object} [pathid] id
     */
    static async deleteHmsRoleResourceUsingDELETE(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'delete',
                url:'/auth/roleResoruce/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }
}
//商家api
export class Merchant {

    /**
     * @summary 修改商家表
     */
    static async updateHmsMerchantUsingPOST(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/merchant',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 添加商家表
     */
    static async addHmsMerchantUsingPUT(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'put',
                url:'/merchant',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 商家表分页列表
     */
    static async getHmsMerchantPageListUsingPOST(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/merchant/page',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 商家表详情
     * @param {object} [pathid] id
     */
    static async getHmsMerchantUsingGET(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/merchant/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 删除商家表
     * @param {object} [pathid] id
     */
    static async deleteHmsMerchantUsingDELETE(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'delete',
                url:'/merchant/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }
}

//订单纠纷api
export class OrderDispute {

    /**
     * @summary 修改订单纠纷表
     */
    static async updateHmsDisputeOrderUsingPOST(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/order/dispute',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 添加订单纠纷表
     */
    static async addHmsDisputeOrderUsingPUT(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'put',
                url:'/order/dispute',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 订单纠纷表分页列表
     */
    static async getHmsDisputeOrderPageListUsingPOST(){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/order/dispute/page',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 订单纠纷表详情
     * @param {object} [pathid] id
     */
    static async getHmsDisputeOrderUsingGET(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/order/dispute/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 删除订单纠纷表
     * @param {object} [pathid] id
     */
    static async deleteHmsDisputeOrderUsingDELETE(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'delete',
                url:'/order/dispute/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }
}
export class OrderDisputeItem {

    /**
     * @summary 审批订单纠纷
     */
    static async updateHmsDisputeOrderItemUsingPOST(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/order/dispute/item',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 订单纠纷处理者表分页列表
     */
    static async getHmsDisputeOrderItemPageListUsingPOST(datas){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'post',
                url:'/order/dispute/item/page',
                data:datas,
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 订单纠纷处理者表详情
     * @param {object} [pathid] id
     */
    static async getHmsDisputeOrderItemUsingGET(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'get',
                url:'/order/dispute/item/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }

    /**
     * @summary 删除订单纠纷处理者表
     * @param {object} [pathid] id
     */
    static async deleteHmsDisputeOrderItemUsingDELETE(pathid){
        return await new Promise((resolve,reject)=>{
            let responseType = "json";
            let options = {
                method:'delete',
                url:'/order/dispute/item/'+pathid+'',
                data:{},
                params:{},
                headers:{
                    "Content-Type":""
                }
            }
            if (responseType != "json"){
                options.responseType = responseType;
            }
            axios(options)
                .then(res=>{
                    if (res.config.responseType=="blob"){
                        resolve(new Blob([res.data],{
                            type: res.headers["content-type"].split(";")[0]
                        }))
                    }else{
                        resolve(res.data);
                        return res.data
                    }
                }).catch(err=>{
                if (err.response.data)
                    reject(err.response.data)
                else
                    reject(err.response);
            })
        })
    }
}
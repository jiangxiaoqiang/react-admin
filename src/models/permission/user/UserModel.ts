import { Effect, Reducer, Subscription } from 'umi';
import { addNewUser, changePassword, getUserRoles, saveUserRoles, userPage } from '@/services/ant-design-pro/permission/user/user';
import { roleList } from '@/services/ant-design-pro/permission/role/role';
import { Pagination } from 'rdjs-wheel';

export interface IUserState {
    data: API.AdminUserItem[],
    roles: API.RoleItem[],
    orgs: API.OrgItem[],
    userRoles: API.UserRole[],
    pagination: Pagination
}

interface IUserModel {
    namespace: 'users'
    state: IUserState
    reducers: {
        getPage: Reducer<IUserState>,
        getRoleList: Reducer<IUserState>,
        getOrgList: Reducer<IUserState>,
        getUserRoles: Reducer<IUserState>,
        saveUserRoles: Reducer<IUserState>,
        clearUserState: Reducer<IUserState>,
        addUser: Reducer<IUserState>,
        changePwd: Reducer<IUserState>,
    }
    effects: {
        getUserPage: Effect,
        getSysRoleList: Effect,
        getSysOrgList: Effect,
        getCurrentUserRoles: Effect,
        saveCurrentUserRoles: Effect,
        clearCurrentUser: Effect,
        addNewUser: Effect,
        changeUserPwd: Effect,
    }
    subscriptions: {
        setup: Subscription
    }
}

const UserModel: IUserModel = {
    namespace: 'users',
    state: {
        data: [],
        roles: [],
        orgs: [],
        userRoles:[],
        pagination: {} as Pagination
    },
    reducers: {
        getPage(state, action) {
            return action.payload
        },
        getRoleList(state, action){
            action.payload = {
                ...state,
                roles: action.payload.roles,
            };
            return action.payload
        },
        getOrgList(state, action){
            action.payload = {
                ...state,
                orgs: action.payload.orgs,
            };
            return action.payload
        },
        getUserRoles(state, action){
            action.payload = {
                ...state,
                userRoles: action.payload.userRoles,
            };
            return action.payload
        },
        saveUserRoles(state, action){
            action.payload = {
                ...state,
            };
            return action.payload
        },
        clearUserState(state, action){
            action.payload = {
                ...state,
                userRoles:[]
            };
            return action.payload
        },
        addUser(state, action){
            action.payload = {
                ...state,
            };
            return action.payload
        },
        changePwd(state, action){
            action.payload = {
                ...state,
            };
            return action.payload
        }
    },
    effects: {
        *getUserPage({payload: params}, effects) {
            if(!params) return;            
            const data = yield effects.call(userPage,  params)
            if (data) {
                yield effects.put({
                    type: 'getPage',
                    payload: {
                        data: data.data,
                        pagination: data.pagination
                    }
                })
            }
        },
        *getSysRoleList({payload: params}, effects){
            if(!params) return;            
            const data = yield effects.call(roleList,  params)
            if (data) {
                yield effects.put({
                    type: 'getRoleList',
                    payload: {
                        roles: data
                    }
                })
            }
        },
        *getSysOrgList({payload: params}, effects){
            if(!params) return;            
            const data = yield effects.call(roleList,  params)
            if (data) {
                yield effects.put({
                    type: 'getOrgList',
                    payload: {
                        orgs: data
                    }
                })
            }
        },
        *getCurrentUserRoles({payload: params}, effects){
            const data = yield effects.call(getUserRoles,  params)
            if (data) {
                yield effects.put({
                    type: 'getUserRoles',
                    payload: {
                        userRoles: data
                    }
                })
            }
        },
        *saveCurrentUserRoles({payload: params}, effects){
            const data = yield effects.call(saveUserRoles,  params)
            if (data) {
                yield effects.put({
                    type: 'saveUserRoles',
                    payload: {
                        
                    }
                })
            }
        },
        *clearCurrentUser({payload: params}, effects){
            yield effects.put({
                type: 'clearUserState',
                payload: {
                    
                }
            })
        },
        *addNewUser({payload: params}, effects){
            const data = yield effects.call(addNewUser,  params)
            if (data) {
                yield effects.put({
                    type: 'addUser',
                    payload: {
                        
                    }
                })
            }
        },
        *changeUserPwd({payload: params}, effects){
            const data = yield effects.call(changePassword,  params)
            if (data) {
                yield effects.put({
                    type: 'addUser',
                    payload: {
                        
                    }
                })
            }
        }
    },
    subscriptions: {
        setup({ dispatch, history }, done) {
            return history.listen((location, action) => {
                if(location.pathname === '/users' || location.pathname === '/my') {
                    dispatch({
                        type: 'getRemove',
                        payload: {
                            page: 1,
                            per_page: 5
                        }
                    })
                }
            })
        }
    }
};
export default UserModel;

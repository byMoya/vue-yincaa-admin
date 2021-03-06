import Vue from 'vue'
import Router from 'vue-router'
// import IndexPage from '../pages/Index'
// import EarlyIndex from '../pages/EarlyWarning/EarlyIndex'
// import ComprenensiveD from '../pages/EarlyWarning/ComprenensiveD'
// import DirverD from '../pages/EarlyWarning/DirverD'
// import VehicleD from '../pages/EarlyWarning/VehicleD'
// import AlarmIndex from '../pages/Alarm/AlarmIndex'
// import AlarmS  from '../pages/Alarm/AlarmS'
// import DriverAS  from '../pages/Alarm/DriverAS'
// import FarltAS  from '../pages/Alarm/FarltAS'
// import VehicleAS  from '../pages/Alarm/VehicleAS'
// import BasicIndex from '../pages/BasicSkills/BasicIndex'
// import BasicM  from '../pages/BasicSkills/BasicM'
// import InstallatilM  from '../pages/BasicSkills/InstallatilM'
// import RoadSafetyM  from '../pages/BasicSkills/RoadSafetyM'
// import SeniorM  from '../pages/BasicSkills/SeniorM'
// import GreenIndex  from '../pages/GreenDriving/GreenIndex'
// import GDSParementerS  from '../pages/GreenDriving/GDSParementerS'
// import KanBanS  from '../pages/GreenDriving/KanBanS'
// import OBDcu  from '../pages/GreenDriving/OBDcu'
// import OperationsIndex  from '../pages/Operations/OperationsIndex'
// import ImageS  from '../pages/Operations/ImageS'
// import OperationsS  from '../pages/Operations/OperationsS'
// import StateS  from '../pages/Operations/StateS'
// import UserS  from '../pages/Operations/UserS'
// import { resolve } from 'upath';

Vue.use(Router)

// router.beforeEach((to, from, next) => {
//   // to and from are both route objects

// })


export default new Router({
  mode:"history",
  routes: [
    {
      path:'/',
      redirect:'/login',
      component: r => require.ensure([], () => r(require('../pages/login.vue')), 'login'),
      meta:{
        breadcrumb:'登录'
      }
    },
    {
      path:'/login',
      component: r => require.ensure([], () => r(require('../pages/login.vue')), 'login'),
      meta:{
        breadcrumb:'登录'
      }
    },
    {
      path:'/indM',
      component: r => require.ensure([], () => r(require('../pages/indM.vue')), 'indM'),
      meta:{
        breadcrumb:'首页',
        requireAuth: true
      }
    },
    {
      path:'/IndexPage',
      redirect:'/ComprenensiveD',
      component: r => require.ensure([], () => r(require('../pages/Index.vue')), 'IndexPage'),
      children:[
        {
          path:'/AlarmIndex',
          redirect:'/AlarmS',
          component:  r => require.ensure([], () => r(require('../pages/Alarm/AlarmIndex.vue')), 'AlarmSIndex'),
          meta:{
            breadcrumb:'警报数据分析'
          },
          children:[
            {
              path:'/AlarmS',
              
              component: r => require.ensure([], () => r(require('../pages/Alarm/AlarmIndex.vue')), 'AlarmS'),
              meta:{
                breadcrumb:'一键报表上报'
              }
            },
            {
              path:'/VehicleAS',
              
              component: r => require.ensure([], () => r(require('../pages/Alarm/VehicleAS.vue')), 'VehicleAS'),
              meta:{
                breadcrumb:'车辆报警分析'
              }
            },       
            {
              path:'/DriverAS',
              component: r => require.ensure([], () => r(require('../pages/Alarm/DriverAS.vue')), 'DriverAS'),
              meta:{
                breadcrumb:'驾驶员行为分析'
              }
            }
          ]
        },
        {
          path:'/BasicIndex',
          redirect:'/BasicM',
          component: r => require.ensure([], () => r(require('../pages/BasicSkills/BasicIndex.vue')), 'BasicMIndex'),
          meta:{
            breadcrumb:'报警统计'
          },
          children:[
            {
              path:'/BasicM',
              component: r => require.ensure([], () => r(require('../pages/BasicSkills/BasicM.vue')), 'BasicM'),
              meta:{
                breadcrumb:'综合报警统计'
              }
            },
            {
              path:'/SeniorM',
              component: r => require.ensure([], () => r(require('../pages/BasicSkills/SeniorM.vue')), 'SeniorM'),
              meta:{
                breadcrumb:'车辆报警统计'
              }
            },
            {
              path:'/RoadSafetyM',
              component: r => require.ensure([], () => r(require('../pages/BasicSkills/RoadSafetyM.vue')), 'RoadSafetyM'),
              meta:{
                breadcrumb:'驾驶员报警统计'
              }
            }
          ]
        },
        {
          path:'/EarlyIndex',
          redirect:'/ComprenensiveD',
          component: r => require.ensure([], () => r(require('../pages/EarlyWarning/EarlyIndex.vue')), 'ComprenensiveDIndex'),
          meta:{
            breadcrumb:'预警统计'
          },
          children:[
            {
              path:'/ComprenensiveD',
              component: r => require.ensure([], () => r(require('../pages/EarlyWarning/ComprenensiveD.vue')), 'ComprenensiveD'),
              meta:{
                breadcrumb:'综合预警统计'
              },
              children:[
                {
                  path:'details/:id',
                  name:'CDdetail',
                  // component:require.ensure([], () => r(require('../pages/DetailPage.vue')), 'DetailPage'),
                  component: r => require.ensure([], () => r(require('../pages/DetailPage.vue')), 'CDdetail'),
                  // meta:{
                  //   breadcrumb:'预警详情'
                  // }
                }
              ]
            },
            {
              path:'/DirverD',
              component: r => require.ensure([], () => r(require('../pages/EarlyWarning/DirverD.vue')), 'DirverD'),
              meta:{
                breadcrumb:'驾驶员预警统计'
              },
              children:[
                {
                  path:'details/:id',
                  name:'DDdetail',
                  // component:require.ensure([], () => r(require('../pages/DetailPage.vue')), 'DetailPage'),
                  component: r => require.ensure([], () => r(require('../pages/DetailPage.vue')), 'DDdetail'),
                  // meta:{
                  //   breadcrumb:'预警详情'
                  // }
                }
              ]
            },
            {
              path:'/VehicleD',
              component: r => require.ensure([], () => r(require('../pages/EarlyWarning/VehicleD.vue')), 'VehicleD'),
              meta:{
                breadcrumb:'车辆预警统计'
              },
              children:[
                {
                  path:'details/:id',
                  name:'VDdetail',
                  // component:require.ensure([], () => r(require('../pages/DetailPage.vue')), 'DetailPage'),
                  component: r => require.ensure([], () => r(require('../pages/DetailPage.vue')), 'VDdetail'),
                  // meta:{
                  //   breadcrumb:'预警详情'
                  // }
                }
              ]
            }
          ]
        },
        {
          path:'/GreenIndex',
          redirect:'/GDSParementerS',
          component: r => require.ensure([], () => r(require('../pages/GreenDriving/GreenIndex.vue')), 'GDSParementerSIndex'),
          meta:{
            breadcrumb:'企业运营分析'
          },
          children:[
            {
              path:'/GDSParementerS',
              component: r => require.ensure([], () => r(require('../pages/GreenDriving/GDSParementerS.vue')), 'GDSParementerS'),
              meta:{
                breadcrumb:'报警数据分析'
              }
            },
            {
              path:'/OBDcu',
              component: r => require.ensure([], () => r(require('../pages/GreenDriving/OBDcu.vue')), 'OBDcu'),
              meta:{
                breadcrumb:'驾驶员数据分析'
              }
            },
            {
              path:'/KanBanS',
              component: r => require.ensure([], () => r(require('../pages/GreenDriving/KanBanS.vue')), 'KanBanS'),
              meta:{
                breadcrumb:'车辆数据分析'
              }
            }
            // {
            //   path:'/KanBanS',
            //   component: r => require.ensure([], () => r(require('../pages/GreenDriving/KanBanS.vue')), 'KanBanS'),
            //   meta:{
            //     breadcrumb:'运营管理分析'
            //   }
            // }
          ]
        },
        {
          path:'/OperationsIndex',
          redirect:'/OperationsS',
          component: r => require.ensure([], () => r(require('../pages/Operations/OperationsIndex.vue')), 'OperationsSIndex'),
          meta:{
            breadcrumb:'资料档案库'
          },
          children:[
            {
              path:'/OperationsS',
              component:  r => require.ensure([], () => r(require('../pages/Operations/OperationsS.vue')), 'OperationsS'),
              meta:{
                breadcrumb:'驾驶员资料管理'
              }
            },
            {
              path:'/StateS',
              component: r => require.ensure([], () => r(require('../pages/Operations/StateS.vue')), 'StateS'),
              meta:{
                breadcrumb:'车辆资料管理'
              }
            }
          ]
        }
      ]
    },
    {
      path:'/indM',
      component: r => require.ensure([], () => r(require('../pages/indM.vue')), 'indM'),
      
    },
  ]
  
})


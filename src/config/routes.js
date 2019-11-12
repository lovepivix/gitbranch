import Login from '@/routes/Login'
import dynamic from '@/utils/dynamic.js'

// layouts
// import BaseLayout from '@/layouts/BaseLayout'
export default [
    {
        path:'/default',
        component:dynamic(['user'],()=>import('@/layouts/DefaultLayout')),
        children:[
            {
                path:'/default/login',
                component:dynamic(['user'],()=>import('@/routes/Login')),
            },
        ]
    },
    
    {
        path:'/',
        component:dynamic(['user'],()=>import('@/layouts/BaseLayout')),
        redirect:'/question',
      
        children:[
            {
                path:'/main',
                component:dynamic(['user'],()=>import('@/routes/Main')),
                meta:{
                    title:'首页'
                }
            },
            {
                path:'/question',
                component:dynamic(['question'],()=>import('@/routes/Question')),
                redirect:'/question/questionList',
                meta:{
                    title:'试题管理',
                  
                },
                children:[
                    {
                        path:'/question/questionList',
                        component:dynamic(['question'],()=>import('@/routes/Question/QuestionList/index.jsx')),
                        meta:{
                            title:'添加试题',
                         
                        },
                    },
                    {
                        path:'/question/questionType',
                        component:dynamic(['question'],()=>import('@/routes/Question/QuestionType/index.jsx')),
                        meta:{
                            title:'试题分类',
                           
                        },
                    },
                    {
                        path:'/question/questionEdit',
                        component:dynamic(['question'],()=>import('@/routes/Question/QuestionEdit/index.jsx')),
                        meta:{
                            title:'查看试题',
                        },
                    },
                ]
            },
            {
                path:'/user',
                component:dynamic(['user'],()=>import('@/routes/User')),
                redirect:'/user/addUser',
                meta:{
                    title:'用户管理',
                  
                },
                children:[
                    {
                        path:'/user/addUser',
                        component:dynamic(['user'],()=>import('@/routes/User/AddUser/index.jsx')),
                        meta:{
                            title:'添加用户',
                         
                        },
                    },
                    {
                        path:'/user/userManagement',
                        component:dynamic(['user'],()=>import('@/routes/User/UserManagement/index.jsx')),
                        meta:{
                            title:'角色管理',
                           
                        },
                    },
                    {
                        path:'/user/userView',
                        component:dynamic(['user'],()=>import('@/routes/User/UserView/index.jsx')),
                        meta:{
                            title:'用户展示',
                        },
                    },
                ]
            },
            {
                path:'/exam',
                component:dynamic(['exam'],()=>import('@/routes/Exam')),
                redirect:'/exam/addExam',
                meta:{
                    title:'考试管理',
                  
                },
                children:[
                    {
                        path:'/exam/addExam',
                        component:dynamic(['exam'],()=>import('@/routes/Exam/AddExam/index.jsx')),
                        meta:{
                            title:'添加考试',
                         
                        },
                    },
                    {
                        path:'/exam/paperList',
                        component:dynamic(['exam'],()=>import('@/routes/Exam/PaperList/index.jsx')),
                        meta:{
                            title:'试卷列表',
                           
                        },
                    },
                  
                ]
            },
            {
                path:'/class',
                component:dynamic(['class'],()=>import('@/routes/Class')),
                redirect:'/class/addclass',
                meta:{
                    title:'班级管理',
                  
                },
                children:[
                    {
                        path:'/class/classManagement',
                        component:dynamic(['class'],()=>import('@/routes/Class/ClassManagement/index.jsx')),
                        meta:{
                            title:'班级管理',
                         
                        },
                    },
                    {
                        path:'/class/roomManagement',
                        component:dynamic(['class'],()=>import('@/routes/Class/RoomManagement/index.jsx')),
                        meta:{
                            title:'教室管理',
                           
                        },
                    },
                    {
                        path:'/class/studentManagement',
                        component:dynamic(['class'],()=>import('@/routes/Class/StudentManagement/index.jsx')),
                        meta:{
                            title:'学生管理',
                           
                        },
                    },
                  
                ]
            },
            {
                path:'/paperInspection',
                component:dynamic(['paperInspection'],()=>import('@/routes/PaperInspection')),
                redirect:'/paperInspection/awaitingApproval',
                meta:{
                    title:'班级管理',
                  
                },
                children:[
                    {
                        path:'/paperInspection/awaitingApproval',
                        component:dynamic(['PaperInspection'],()=>import('@/routes/PaperInspection/AwaitingApproval/index.jsx')),
                        meta:{
                            title:'班级管理',
                         
                        },
                    },
                   
                  
                ]
            },
            
        ]
    },
    // {
    //     path:'/',
    //     redirect:'/question',
    // }
  
   
]
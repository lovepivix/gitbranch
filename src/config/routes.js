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
        ]
    },
    // {
    //     path:'/',
    //     redirect:'/question',
    // }
  
   
]
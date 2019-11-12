import dynamic from '@/utils/dynamic';

import Main from '@/routes/main';

const localLayout = dynamic(["workbench"], () =>
  require("@/layout/LocalLayout")
);

const Login = dynamic(["user"], () => 
  require("@/routes/login"));

const QuestionCreate = dynamic(["questionCreate"], () =>
  require("@/routes/question/questionCreate")
);

const QuestionType = dynamic(["questionType"], () =>
  require("@/routes/question/questionType")
);

const QuestionLook = dynamic(["questionLook"], () =>
  require("@/routes/question/questionLook")
);

const UserCreate = dynamic(["UserCreate"], () =>
  require("@/routes/user/userCreate")
);

const UserManager = dynamic(["UserManager"], () =>
  require("@/routes/user/userManager")
);

const UserShow = dynamic(["UserShow"], () => 
  require("@/routes/user/userShow"));
 
 const ExamCreate = dynamic(["ExamCreate"], () =>
  require("@/routes/exam/ExamCreate")
);
const ExamList = dynamic(["ExamList"], () =>
require("@/routes/exam/ExamList")
);

const ClassManager = dynamic(["ClassManager"], () =>
require("@/routes/class/ClassManager")
);

const ClassTeach = dynamic(["ClassTeach"], () =>
require("@/routes/class/ClassTeach")
);
const ClassStudent = dynamic(["ClassStudent"], () =>
require("@/routes/class/ClassStudent")
);
const LookExamWait = dynamic(["LookExamWait"], () =>
require("@/routes/lookExam/LookExamWait")
);

const Routes = [
  {
    path: "/login",
    component: Login,
    meta: {
      title: "工作台"
    }
  },
  {
    path: "/",
    component: localLayout,
    // redirect:'/question',
    meta: {
      title: "工作台"
    },
    children: [
      {
        path: "/question",
        component: Main,
        // redirect:'/question/create',
        meta: {
          title: "试题管理",
          icon: "property-safety"
        },
        children: [
          {
            path: "/question/create",
            component: QuestionCreate,
            meta: {
              title: "添加试题"
            }
          },
          {
            path: "/question/type",
            component: QuestionType,
            meta: {
              title: "试题分类"
            }
          },
          {
            path: "/question/look",
            component: QuestionLook,
            meta: {
              title: "查看试题"
            }
          }
        ]
      },
      {
        path: "/user",
        component:Main,
        // redirect:'/user/create',
        meta: {
          title: "用户管理",
          icon: "file-add"
        },
        children: [
          {
            path: "/user/create",
            component: UserCreate,
            meta: {
              title: "添加用户"
            }
          },
          {
            path: "/user/manager",
            component: UserManager,
            meta: {
              title: "角色管理"
            }
          },
          {
            path: "/user/show",
            component: UserShow,
            meta: {
              title: "用户展示"
            }
          }
        ]
      },
      {
        path: "/exam",
        component:Main,
        // redirect:'/exam/create',
        meta: {
          title: "考试管理",
          icon: "profile"
        },
        children: [
          {
            path: "/exam/create",
            component: ExamCreate,
            meta: {
              title: "添加考试"
            }
          },
          {
            path: "/exam/list",
            component: ExamList,
            meta: {
              title: "试题列表"
            }
          }
        ]
      },
      {
        path: "/class",
        component: Main,
        // redirect:'/class/Manager',
        meta: {
          title: "班级管理",
          icon: "gitlab"
        },
        children: [
          {
            path: "/class/Manager",
            component: ClassManager,
            meta: {
              title: "班级管理"
            }
          },
          {
            path: "/class/teach",
            component: ClassTeach,
            meta: {
              title: "教师管理"
            }
          },
          {
            path: "/class/student",
            component: ClassStudent,
            meta: {
              title: "学生管理"
            }
          }
        ]
      },
      {
        path: "/lookExam",
        component: Main,
        // redirect:'/lookExam/waite',
        meta: {
          title: "阅卷管理",
          icon: "profile"
        },
        children: [
          {
            path: "/lookExam/waite",
            component: LookExamWait,
            meta: {
              title: "待批管理"
            }
          }
        ]
      }
    ]
  }
];

export default Routes;

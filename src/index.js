import dva from 'dva';
import './index.css';
import 'antd/dist/antd.less'
<<<<<<< HEAD
import { message } from 'antd';
// import createHistory from 'history/createBrowserHistory';

// 1. Initialize
export const app = dva({
    // history: createHistory(),
    onError(e) {
        message.error(e.msg, /* duration */);
      },
});

// 2. Plugins
// app.use(storage);

// 3. Model
// app.model(require('./models/question').default);
=======
import './utils/rem'
import createLoading from 'dva-loading';
import { message } from 'antd';



// 1. Initialize
export const app = dva(
    {
        onError(e,dispatch) {
          message.error(e.message, /* duration */3);
        },
      }
);

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example').default);
>>>>>>> origin/dev

// 4. Router
app.router(require('./router').default);

// 5. Start
<<<<<<< HEAD
app.start('#root');
=======
app.start('#root');
>>>>>>> origin/dev

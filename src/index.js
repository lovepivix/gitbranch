import dva from 'dva';
import './index.css';
import 'antd/dist/antd.less'
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

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
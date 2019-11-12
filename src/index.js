import dva from 'dva';
import './index.css';
import 'antd/dist/antd.less'
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

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

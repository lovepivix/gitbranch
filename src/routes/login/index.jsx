import React from 'react';
import { connect } from 'dva';
import Logins from '@/components/login'

function Login() {
  return (
    <div>
        <Logins />
    </div>
  );
}



export default connect()(Login);

import React ,{Component} from 'react'
function Islogin(Com){
    return class islogin extends Component{
        state={
            isShow:false
        }
        componentDidMount(){
            let data=localStorage.getItem('token') || ''
            const {history}=this.props
            if(data){
                this.setState({
                    isShow:true
                })
            }else{
                history.replace('/login')
            }
        }
        render(){
            const {isShow}=this.state
            return isShow?<Com {...this.props}/>:<></>
        }
    }
} 
export default Islogin;
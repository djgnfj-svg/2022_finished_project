import React from 'react'

class ModalMain extends React.Component {
    constructor() {
        super()

        this.state ={
            userName:"",
            userMemo:"",
            userPassword : "",
        }

    }
    

      handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSave(this.state)
        //상태값을 onSave를 통해서 부모에게 전달했습니다.
        this.setState({
          dataList: [],
          userName: "",
          userMemo: "",
          userPassword: "",
    
        }) //상태값 초기화 시켜주기
      }

    render() {
        const [submit , onSave] = this.props
        return (
            <>  
            <form onSubmit={this.handleSubmit}>
                
            </form>
            </>
        )
    }
}

export default ModalMain

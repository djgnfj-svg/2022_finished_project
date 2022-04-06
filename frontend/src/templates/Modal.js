import React, { useState, Component } from 'react';
import './css/modal.css'
import axios from 'axios'

export class Modal extends Component {
  constructor() {
    super()

    this.state = {
      userName: "",
      userMemo: "",
      userPassword: "",
      dataList: [],
    }
  }
  

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
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

    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header, submit } = this.props;

    return (
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button type="button" className="close" onClick={close}>
                &times;
              </button>
            </header>
            <form onSubmit={this.handleSubmit}>
              <main>
                <div>소환사 이름</div>
                <input className='userName' name='userName' value={this.state.userName} onChange={this.handleChange} placeholder="Input Name" />
                <div>메모</div>
                <input className='memo' name='userMemo' value={this.state.userMemo} onChange={this.handleChange} placeholder="Input memo" />
                <div>패스워드</div>
                <input className='removePasword' maxLength='4' name='userPassword' value={this.state.userPassword} onChange={this.handleChange} placeholder="Input memo" />
              </main>
              <footer>
                <button type="submit" className="close">
                  submit
                </button>
                <button type="button" className="close" onClick={close}>
                  close
                </button>
              </footer>
            </form>
          </section>
        ) : null
        }
      </div>
    );
  }
}

export default Modal
import React from 'react'
import './css/Base2.css'
import Modal from './Modal.js';
import axios from 'axios';
import Dropdown from './Dropdown.js'

class Base extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            userInfo: [],
            name: "",
            memo: "",
            _password: "",
            _data: [],
            showMenu: false,
        }

    }
    //페이지 로드시 
    componentDidMount() {
        this.loadItem();
        console.log("로드")
    }

    //this.state 값이 변경될 시 * 무한루프가 발생함으로 if문 변경전값 !== 변경값 해줘야함
    componentDidUpdate() {
        if (this.state.name !== "") {
            this.postData();
            console.log(" component didmount ")
        }
    }

    openModal = () => {
        this.setState({ modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ modalOpen: false })
        console.log("서브밋");
    }


    handleCreate = (data) => {
        const { userInfo } = this.state;
        this.setState({
            userInfo: userInfo.concat({
                ...data
            }),
            modalOpen: false,
            name: data.userName,
            memo: data.userMemo,
            _password: data.userPassword,

        })
        console.log("성공")
    }

    postData = async () => {
        const { _data } = this.state;
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/Userdata/',
                {
                    nickname: this.state.name,
                    memo: this.state.memo,
                    remove_password: this.state._password,
                });
            console.log(response)
            this.setState({
                _data: _data.concat({
                    ...response
                }),
                name: ""
            })
        } catch (error) {
            console.error(error);
        }
    }
    loadItem = async () => {
        axios
            .get("http://127.0.0.1:8000/api/Userdata/")
            .then(({ data }) => {
                this.setState({
                    _data: data
                });
                console.log(data)
            })
            .catch(e => {  // API 호출이 실패한 경우
                console.error(e);  // 에러표시
                this.setState({
                    userName: "false"
                });
            });
    }
    showMenu = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({
            showMenu: true,
        })
    }

    closeMenu = () => {
        this.setState({
            showMenu: false,
        })
    }

    Change = () => {
        this.setState({
            showMenu: false,
        })
    }


    render() {
        const { _data } = this.state

        const add_user = (
            <React.Fragment>
                <button type="button" onClick={this.openModal}>모달팝업</button>
                <Modal open={this.state.modalOpen}
                    close={this.closeModal}
                    header="Input UserName"
                    submit={this.handleSubmit}
                    onSave={this.handleCreate}>
                </Modal>
            </React.Fragment>
        )

        const title = (
            <>
                <div className='Duo_topbar'>
                    <div className='Name'>인게임 닉네임</div>
                    <div className='Subject'>서브젝트</div>
                    <div className='Most_Char'>모스트 캐릭터</div>
                    <div className='Top_Rank'>평균 순위</div>
                    <div className='Memo'>메모</div>
                    <div className='add_Date'>등록 일시</div>
                </div>
            </>
        )

        const lie = (
            <div className='menu_option'>
                <div onClick={(index) => this.Change(index)}>수정</div>
                <div>삭제</div>
                <div>신고</div>
            </div>
        )

        const duo_list = _data.map(
            (item, index) => (
                <>
                    {console.log(item.id)}
                    <div key={item.id} className='Duo_userInfo'>
                        <div key={item.nickname}>{item.nickname}</div>
                        <div key={item.soloTier}>{item.soloTier}</div>
                        <div key={item.memo}>{item.memo}</div>
                        <div key={item.averageKills}>{item.averageKills}</div>
                        <div key={item.remove_password}>{item.memo}</div>
                        <div key={item.most_pick}>{item.winning_rate}</div>
                        <div key={index}>
                            <button onClick={this.showMenu}>
                                Show menu
                            </button>
                        </div>
                    </div>
                </>

            )
        )

        return (
            <>
                <div className='add_user'>
                    {add_user}
                </div>
                <div className='contain2'>
                    {title}
                    <div className='content_duo'>
                        <ul>
                            {duo_list}
                        </ul>
                        {this.state.showMenu ? (
                            <>
                                {lie}
                            </>
                        )
                            : null
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default Base
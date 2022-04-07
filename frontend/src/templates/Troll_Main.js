import React from 'react'
import './css/troll.css'
import Modal from './Modal.js';
import axios from 'axios';

class Troll_Main extends React.Component {

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
            trolls_ven: true,
            title: "타이틀임"
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
            console.log("component didmount ")
        }
    }

    openModal = () => {
        this.setState({ modalOpen: true })
    }
    closeModal = () => {
        this.setState({ modalOpen: false })
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
        this.postData()
    }

    postData = async () => {
        const { _data } = this.state;
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/Userdata/',
                {
                    nickname: "흥부릉",
                    memo: "김밥",
                    remove_password: "1234",
                    trolls_ven: ""
                });
            console.log(response)
            console.log("포스트 성공")
            this.setState({
                _data: _data.concat({
                    ...response
                }),
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
                    _data: data.userlist
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
            <>
            <div className='addTroll'>
                <header className='title'>
                    <p>트롤 등록하기</p>
                </header>
                <form>
                    <div className='report_content'>
                        <div>
                            <input className='input_userName' name='userName' placeholder='사용자 이름' />
                            <input className='input_report' placeholder='사용자를 신고하는 이유를 알려주세요' />
                        </div>
                        <div>
                            <ul>
                                <li>이것저것</li>
                                <li>이것저것</li>
                                <li>이것저것</li>
                                <li>이것저것</li>
                                </ul>
                            
                        </div>
                        <button type='submit'>트롤 등록하기</button>
                    </div>
                </form>
            </div>
            </>
        )

        const title = (
            <>
                <div className='Duo_topbar'>
                    <div className='Name'>인게임 닉네임</div>
                    <div className='Subject'>서브젝트</div>
                    <div className='Most_Char'>신고 횟수</div>
                    <div className='Memo'>메모</div>
                    <div className='Top_Rank'>트롤 태그</div>
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


        const duo_list = (
            <>
                <div className='Duo_userInfo'>
                    <div>김밥님</div>
                    <div className='tier' dataToolTip='챌린저'>Challange</div>
                    <div>1회</div>
                    <div className='winningRate' dataToolTip={"메모 정보임"}>대리임 개잘함</div>
                    <div>김대리</div>
                    <div>1분전</div>
                    <div>
                        <button onClick={this.showMenu}>
                            Show menu
                        </button>
                    </div>
                </div>
            </>
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

export default Troll_Main
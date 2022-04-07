import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Duo_Main from './Duo_Main.js'
import Troll_Main from './Troll_Main.js'
import './css/TopBar.css'


class TopBar extends React.Component {
    constructor() {
        super()

        this.state = {
            selected: "false",
        }

    }

    handleClick(event) {
        event.preventDefault();
        this.setState({
            selected: "true"
        })
    }

    render() {

        return (
            <>
                <Router>
                    <div className='contain'>
                        <nav>
                            <header className="logo" >
                                <div className='container'>
                                    <img src="https://duo.op.gg/duo.svg" />
                                    <span className='sub_title'> 지겹다 이제 코딩하자 !</span>
                                </div>
                            </header>
                            <div className='container'>
                                <ul className='menu'>
                                    <li>
                                        <Link to="/">듀오찾기</Link>
                                    </li>
                                    <li>
                                        <Link to="/troll_box">트롤신고</Link>
                                    </li>
                                    <li>
                                        <Link to="/find_gud">길드찾기</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div>
                            <Routes>
                                <Route path="" exact={true}  element={<Duo_Main />} />
                                <Route path="/troll_box" element={<Troll_Main />} />
                            </Routes>
                        </div>
                    </div>
                </Router>
            </>
        )
    }

}

export default TopBar
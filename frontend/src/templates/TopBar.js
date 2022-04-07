import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import DuoMain from './DuoMain.js'
import TrollMain from './TrollMain.js'
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

                        <div className='allData'>
                        <nav>
                            <header className="logo" >
                                <div className='container'>
                                    <img alt='mainLogo' src="https://duo.op.gg/duo.svg" />
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
                        </div>
                        <div>
                            <Routes>
                                <Route path="" exact={true} element={<DuoMain />} />
                                <Route path="/troll_box" element={<TrollMain />} />
                            </Routes>
                        </div>
                    </Router>
            </>
        )
    }

}

export default TopBar
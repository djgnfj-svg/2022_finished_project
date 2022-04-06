import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Base from './Base.js'
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
            <div className='contain'>
                <nav>
                    <header className="title" >
                        <div className='container'>
                            <img src="https://duo.op.gg/duo.svg" />
                            <span className='sub_title'> 지겹다 이제 코딩하자 !</span>
                        </div>
                    </header>
                    <div className='container'>
                        <ul className='menu'>
                            <li>
                                듀오찾기
                            </li>
                            <li>
                                트롤신고
                            </li>
                            <li>
                                클랜 찾기
                            </li>
                        </ul>
                    </div>
                </nav>
                <div>
                    <Base />
                </div>
            </div>
            </>
        )
    }

}

export default TopBar
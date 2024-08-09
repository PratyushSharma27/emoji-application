import React from 'react'
import { Link } from 'react-router-dom'

import a from './Starter.module.css'

import Image5 from '../../assets/6.png'
import Image6 from '../../assets/7.png'
import Image7 from '../../assets/8.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Toggle from '../../components/toggle/Toggle';

function Starter() {
    return (
        <div className={a.container}>
            <div className={a.right}>
                <Link to="/" className='title gradient-text'>
                    Emoji finder
                </Link>

                <div className={a.text}>
                    <b>Review, Search, Play Game with Emojies</b>
                </div>
                <br />

                <div className={a.btn_box}>
                    <Link to="Emoji" className={a.link_btn}>
                        <button className={a.btn}>
                            Search
                        </button>
                    </Link>

                    
                </div>
            </div>

            <div className={a.center}>
                <div>
                    <img src={Image7} className={a.third} />
                </div>
            </div>

            <div className={a.left} style={{ alignItems: "flex-end", paddingRight: "5rem" }}>

                <img className={a.first} src={Image5} />
                <img className={a.second} src={Image6} />

            </div>

            

            <div className={a.toggle}>
                <Toggle />
            </div>

        </div>
    )
}

export default Starter
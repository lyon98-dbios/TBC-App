import React from 'react';
import logo from '../Logo/WhiteLogo.png';
import './Home2.css';


function Home2() {
    return(
        <>
            <div className='logo-container'>
                <img src={logo} alt="Logo" height={500} width={450} />
            </div>
            <ul>
                
                <div classname='write-up-container'>
                <li>
                    <h2>
                        The Beacon Centre at A Glance
                    </h2>
                </li><li>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adi, tincidunt purus.
                        Vivamus nec dui id massa egestas volutpat.
                        Aliquam eget lorem nec sapien ornare egestas.
                        Nulla vitae justo nulla.
                        Etiam viverra leo sed mi accumsan vulputate nec eu eros.
                    </h3></li>
                </div>
            </ul>
        </>
    )
}

export default Home2;

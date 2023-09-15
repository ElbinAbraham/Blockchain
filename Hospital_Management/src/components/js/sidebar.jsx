import React from 'react';
import '../css/sidebar.css';

const Sidebar = () => {
    const name='Siddharth';
    const age=20;
    const Gender = 'Male';
    const contact = '1234567890';
    const address = '0x1234567890';
    const id = '1234567890';
    return (
        <>
            <div className='sidebar-container'>
                <div className='general-info'>
                    <div className='general-info-title'>User Details</div>
                    <div className='general-info-body'>
                        <div className='general-info-body-item'>Id:{id} </div>
                        <div className='general-info-body-item'>Address:{address} </div>
                        <div className='general-info-body-item'>Name:{name} </div>
                        <div className='general-info-body-item'>Age:{age} </div>
                        <div className='general-info-body-item'>Gender:{Gender} </div>
                        <div className='general-info-body-item'>Contact:{contact} </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Sidebar;

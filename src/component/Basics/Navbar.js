

import React from 'react'

export const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {
                        menuList.map((item) => {
                            return (
                                <button className='btn-group__item' 
                                onClick={() => filterItem(item)}>{item}</button>
                            )
                        })
                    }

                </div>
            </nav>
        </>
    )
}



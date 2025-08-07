import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Images from './Images'
// import Logo from '/src/assets/Logo (21).png'
import logo from '/src/assets/Logo (20).png'
import { Link } from 'react-router-dom'
import { FaBarsStaggered, FaCartArrowDown } from 'react-icons/fa6'
import { BsSearchHeart } from 'react-icons/bs'
import { FaUserAlt, FaCaretDown, } from "react-icons/fa";
const Header = () => {
  return (
    <> 
    <div className="bg-[#FFFFFF]-400 py-4">
        <Container>
            <Flex>
                <div className="">
                    <Images imgSrc={logo}/>
                   
        
                </div>
                <div className="m-auto">
                    <ul className='flex gap-x-[40px] font-medium text-[#767676]
                    text-[14px]'>
                     <Link to="/">   <li className='hover:font-bold hover:text-[#262626]'>Home</li>
                     </Link>
                        <Link to="shop"><li className='hover:font-bold hover:text-[#262626]'>Shop</li></Link>
                        <Link to="about"><li className='hover:font-bold hover:text-[#262626]'>About</li></Link>
                        <Link to="contact"><li className='hover:font-bold hover:text-[#262626]'>Contacts</li></Link>
                        <Link><li className='hover:font-bold hover:text-[#262626]'>Journal</li></Link>
                    </ul>
                    
                </div>
            </Flex>
        </Container>
        
    </div>
    <div className="py-4 bg-[#F5F5F3]">
        <Container>
            <Flex className={`justify-between`}>
                <div className="flex gap-x-2 items-center">
                    <FaBarsStaggered />
                    <h4 className='text-[14px] text-[#262626]'>Shop by Category</h4>
                </div>
                <div className="relative">

                    <input type="text" placeholder='Search Products' className='bg-white p-[16px] w-[500px] border-none outline-none'  />
                    <BsSearchHeart className="absolute top-1/2 -translate-1/2 right-3" />
                </div>
                <div className="flex gap-3">
                    <div className="flex">
                        <FaUserAlt/>
                    < FaCaretDown/>
                    </div>
                    <FaCartArrowDown />
                  
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Header





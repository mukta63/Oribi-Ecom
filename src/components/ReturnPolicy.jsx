import React from 'react'
import Container from './pages/Container'
import Flex from './pages/Flex'
import { RiNumber2 } from 'react-icons/ri'
import { FaTruck, FaUndo } from 'react-icons/fa'

const ReturnPolicy = () => {
  return (
   <>

   <div className="py-[40px] bg-[#FFFFFF]">
    <Container>
        <Flex className={`justify-between `}>
            <div className="flex gap-x-2.5 text-[16px] text-[#6D6D6D] items-center">
                <RiNumber2  className='text-black'/>
                Two years warranty
 
            </div>
            <div className="flex gap-x-2.5 text-[16px] text-[#6D6D6D] items-center">
                <FaTruck  className='text-black'/>
                Free shipping
            </div>
            <div className="flex gap-x-2.5 text-[16px] text-[#6D6D6D] items-center">
                <FaUndo className='text-black'/>
                Return policy in 30 days
            </div>
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default ReturnPolicy
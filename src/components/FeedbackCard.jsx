import React from 'react'
import { quotes } from '../assets'

const FeedbackCard = ({ content, name, title, img }) => (
    <div className='flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm-mr-5 mr-0 my-5 feedback-card'>

        <img src={quotes} alt="double_quotes" className='object-contain w-[42px] h-[27px]' />
        <p className='font-poppins font-normal text-[18px] leading-[32px] text-white m-10'>{content}</p>
        <div className='flex flex-row' >
            <img src={img} alt={name} className='rounded-full h-[48px] w-[48px]' />

            <div className='flex-col flex ml-4'>
                <h4 className='font-poppins font-semibold text-[20px] leading-[32px] text-white '>{name}</h4>
                <h4 className='font-poppins font-normal text-[16px] leading-[24px] text-dimWhite '>{title}</h4>


            </div>
        </div>
    </div>
)

export default FeedbackCard

import React from 'react'
import { logo } from '../assets'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (

    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col mt-6`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className='flex-1 flex flex-col mr-10 justify-start'>
                <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain' />
                <p className={`${styles.paragraph} max-w-[312px] mt-4`}>
                    A new way to make the payments easy, reliable and secure.
                </p>
            </div>

            <div className='flex flex-[1.5] flex-row justify-between flex-wrap md:mt-0 mt-10'>
                {footerLinks.map((cartegoy) => (
                    <div key={cartegoy.key} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                        <h4 className={`font-poppins font-medium text-white text-[18px] leading-[27px]`}>{cartegoy.title}</h4>
                        <ul className='list-none mt-4'>
                            {cartegoy.links.map((link, index) => (
                                <li key={link.name} className={`${index === cartegoy.links.length - 1 ? 'mb-0' : 'mb-4'} font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer`}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>

        <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6  border-t-[1px] border-t-[#3F3E45]'>
            <p className='font-poppins font-normal text-center text-white text-[18px] leading-[27px]'>
                Copyright @ 2021 HooBank. All Rights Reserved
            </p>
            <div className='flex flex-row md:mt-0 mt-6'>
                {
                    socialMedia.map((social, index) => (
                        <img src={social.icon} alt={social.id} key={social.id} className={` w-[21px] h-[21px] object-contain cursor-pointer  ${index === socialMedia.length - 1 ? 'mr-0' : 'mr-6'}`} />
                    ))
                }
            </div>
        </div>
    </section>
)
export default Footer

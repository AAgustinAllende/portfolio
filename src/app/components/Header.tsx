import React from 'react'
import MotionTransition from './TransitionComponent'
import { socialNetworks } from '../../../data'
import  Link  from 'next/link'

const Header = () => {
  return (
    <MotionTransition position='bottom' className='absolute z-40 inline-block w-full top-5 md:top-10 px-20'>
        <header className='container justify-between max-w-6xl mx-auto md:flex'>
            <Link href="/">
            <h1 className='my-3 text-4xl font-bold text-center md:text-left'>
                Agustin
                <span className='text-secondary'>
                     Allende
                </span>
            </h1>
            
            </Link>
            <div className='flex items-center justify-center gap-7'>
                {socialNetworks.map(({logo,src, id})=>(
                    <Link key={id} 
                    href={src}
                    target='_blank'
                    className='transition-all duration-300'
                    >
                        {logo}
                    </Link>
                ))}

            </div>
        </header>
    </MotionTransition>
    )
}

export default Header
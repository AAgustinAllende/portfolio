import Avatar from '@/app/components/Avatar'
import ContainerPage from '@/app/components/Container'
import CounterServices from '@/app/components/CounterServices'
import TimeLine from '@/app/components/TimeLine'
import TransitionPage from '@/app/components/TransitionPage'
import React from 'react'

const PageAboutMe = () => {
  return (
    <>
    <TransitionPage/>
    <ContainerPage>
        <Avatar/>
        <h1 className='text-2xl leading-tight text-center 
        md:text-left md:text-5xl md:mt-10'>Formación y  {' '}
            <span className='font-bold text-blue-300'>
                habilidades
            </span>
        </h1>
        <CounterServices/>
        <TimeLine/>
    </ContainerPage>
    </>
  )
}

export default PageAboutMe
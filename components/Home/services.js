'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCard from '../ui/ServiceCard'
import { ArrowRight } from '@/components/icons/social'
import TitleCard from '../ui/title'
import CardSection from '../ui/CardSection'
const projects = ({ services }) => {
  return (
    <div className='relative my-20'>
      {/*Works Title */}
      <TitleCard titles='Our Services' allTitles='Look All Services' />

      {/* Works List*/}
      <CardSection post={services} />
    </div>
  )
}

export default projects

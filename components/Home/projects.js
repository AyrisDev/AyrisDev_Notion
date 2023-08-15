'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/icons/social'
import CardSection from '../ui/projectCard'
import TitleCard from '../ui/title'
const projects = ({ projects, title }) => {
  return (
    <div className='relative my-20'>
      {/*Works Title */}

      <TitleCard titles='Our Works' allTitles='All Works' link='projects' />

      {/* Works List*/}
      <CardSection post={projects} title='projects' />
    </div>
  )
}

export default projects

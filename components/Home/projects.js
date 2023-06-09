'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from '@/components/icons/social'
import CardSection from '../ui/CardSection'
import TitleCard from '../ui/title'
const projects = ({ projects, title }) => {
  return (
    <div className='relative my-20'>
      {/*Works Title */}

      <TitleCard titles='Latest Work' allTitles='All Works' />

      {/* Works List*/}
      <CardSection post={projects} title='projects' />
    </div>
  )
}

export default projects

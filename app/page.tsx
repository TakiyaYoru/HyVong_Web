"use client"

import Banner from '@/components/home/banner'
import Intro from '@/components/home/intro'
import Donation from '@/components/home/donation'
import Activities from '@/components/home/activities'
import Students from '@/components/home/students'
import Gallery from '@/components/home/gallery'
import Footer from '@/components/layout/footer'

export default function Home() {
  return (
    <main>
      <Banner />
      <Intro />
      <Donation />
      <Activities />
      <Students />
      <Gallery />
      <Footer />
    </main>
  )
}
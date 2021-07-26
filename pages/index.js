import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import MobileCard from '../components/MobileCard'
import Navbar from '../components/NavBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <Box display={["flex", "grid"]} gridTemplateColumns={[ 'none', "repeat(2, 1fr)", "repeat(3, 1fr)"]} flexDirection={['column', 'none']} >
      <MobileCard company="Samsung" name="Galaxy M20" />
      <MobileCard company="Xiaomi OnePlus" name="Poco x3" />
      <MobileCard company="Xiaomi" name="Poco F3 GT" />
      <MobileCard company="OnePlus" name="Nord 2 5G" />
      <MobileCard company="Samsung" name="Galaxy M20" />
      <MobileCard company="Xiaomi OnePlus" name="Poco x3" />
      <MobileCard company="Xiaomi" name="Poco F3 GT" />
      <MobileCard company="OnePlus" name="Nord 2 5G" />
      <MobileCard company="Samsung" name="Galaxy M20" />
      <MobileCard company="Xiaomi OnePlus" name="Poco x3" />
      <MobileCard company="Xiaomi" name="Poco F3 GT" />
      <MobileCard company="OnePlus" name="Nord 2 5G" />

      </Box>
    </React.Fragment>
  )
}

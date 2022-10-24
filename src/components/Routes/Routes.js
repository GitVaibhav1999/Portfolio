import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AboutPage } from '../../containers/AboutPage/AboutPage'
import BlogPage from '../../containers/BlogPage/BlogPage'
import { ContactPage } from '../../containers/ContactPage/ContactPage'
import { HeroPage } from '../../containers/HeroPage'

export const NavigationRoutes = () => {
  return (
    <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="contacts" element={<ContactPage />} />

    </Routes>
  )
}

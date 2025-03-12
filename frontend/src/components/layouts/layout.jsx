import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = ({children, title, description, keywords, author}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout
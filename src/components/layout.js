import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as Styles from './layout.module.css'
import Header from './header/header'
import Footer from './footer/footer'

const Layout = ({children}) => {
    return (
        <div className={Styles.layoutMain}>
            <Header></Header>
            <section className={Styles.layoutContainer}>
                { children }
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Layout
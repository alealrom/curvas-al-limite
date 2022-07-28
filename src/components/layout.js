import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as Styles from './layout.module.css'
import Header from './header/header'
import Footer from './footer/footer'

const Layout = ({ pageTitle, children}) => {
    return (
        <div className={Styles.layoutMain}>
            <title>{ pageTitle }</title>
            <Header></Header>
            <section className={Styles.layoutContainer}>
                { children }
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Layout
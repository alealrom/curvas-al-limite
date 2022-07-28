import * as React from 'react'
import * as Styles from './header.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            currentBuildDate {
            currentDate
            }
        }
    `)

    return (
        <div className={Styles.containerHeader}>
            <div>
                <div className={Styles.textDate}>{data.currentBuildDate.currentDate}</div>
            </div>
            <header>
            <nav>
                <ul className={Styles.navLinks}>
                    <li><Link to='/'><StaticImage src='../../images/icon.png' alt='Logo Formula M' placeholder='tracedSVG' layout='fixed' width={50} height={50}/></Link></li>
                    <li className={Styles.navLinkItem}><Link to="#" className={Styles.navLinkText}>Sobre Mí</Link></li>
                    <li className={Styles.navLinkItem}><Link to="/blog" className={Styles.navLinkText}>Blog</Link></li>
                    <li className={Styles.navLinkItem}><Link to="#" className={Styles.navLinkText}>Podcast</Link></li>
                </ul>
            </nav>
            </header>
        </div>
    )
}

export default Header
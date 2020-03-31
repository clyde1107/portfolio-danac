import React from 'react';
import Link from 'next/link';
import {Link as NextLink} from '../../routes'
import '../../styles/main.scss'

class Header extends React.Component {

    render() {
        const title = this.props.title;
        return (
            <React.Fragment>
                <p> { title } </p>
                <Link href = "/">
                    <a className = "customClassFromFile"> Home</a>
                </Link>

                <Link href = "/about">
                    <a> About</a>
                </Link>

                <Link href = "/blogs">
                    <a> Blogs</a>
                </Link>
                
                <Link href = "/portfolios">
                    <a> Porfolios</a>
                </Link>

                <Link href = "/cv">
                    <a> Cv</a>
                </Link>
                <NextLink route='/test/1'>Test 1</NextLink>
                <NextLink route='/test/2'>Test 2</NextLink>
            </React.Fragment>
        )
    }
}

export default Header;
import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';

import '../styles/main.scss'

class Portfolios extends React.Component {

    static async getInitialProps() {
        let posts = [];
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        }catch (err) {
            console.error(err)
        }

        return {posts: posts.splice(0,10)};
    }

    renderPosts(posts) {
        return posts.map((post,index) => {
            return (
            <li key={index}>
            <Link as = {`/portfolio/${post.id}`} href="/portfolio/[id]">
                <a className= "customClassForPosts"> {post.title} </a>
            </Link>
            </li>
            )
        })
    }

    render() {
        console.log(this.props)
        const {posts} = this.props;
        return (
            <BaseLayout>
                <h1> This is Portfolios</h1>
                <ul>
                    { this.renderPosts(posts)}
                </ul>
            </BaseLayout>
        )
    }
}

export default Portfolios;
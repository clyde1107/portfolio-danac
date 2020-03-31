import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';

class Index extends React.Component {

    static async getInitialProps() {
        let userData = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData = response.data;
        }catch (err) {
            console.error(err)
        }

        return {initialData: [1,2,3,4], userData};
    }

    constructor(props) {
        super(props);

        this.state = {
            title: 'I am state from index page'
        }
    }

    componentDidUpdate () {
        console.log('componentDidUpdate')
    }

    updateTitle = () => {
        this.setState({title: 'updated title from index page'});
    }

    render() {
        const {title} = this.state
        const {initialData , userData} = this.props;
        return (
            <BaseLayout>
                <h1> This is Index from Component </h1>
                <h2> {title} </h2>
                <h2> {userData.id + userData.title} </h2>
                <button onClick = {this.updateTitle}>Update Title</button>         
            </BaseLayout>
        )
    }
}

export default Index;
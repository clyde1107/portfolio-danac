import React from 'react';
import BaseLayout from '../layouts/BaseLayout';
import BasePage from '../BasePage';

const nameSpace = 'http://localhost:3000';

export default role => Component => {
    return class withAuth extends React.Component {

        static async getInitialProps(args) {
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args);

            return {...pageProps};
        }

        renderProtectedPage() {
            const { isAuthenticated, user } = this.props.auth;
            const userRole = user && user[`${nameSpace}role`];
            let isAuthorized = false;

            if (role) {
                if(userRole && userRole === role) {isAuthorized = true};
            }else {
                isAuthorized = true;
            }

            if (!isAuthenticated) {
                return (
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1> Your are not authenticated on this page. Please login</h1>
                    </BasePage>
                </BaseLayout>
                )
            } else if (!isAuthorized) {
                return(
                <BaseLayout {...this.props.auth}>
                    <BasePage>
                        <h1> Your are not authorized on this page. You need special permission to access this page.</h1>
                    </BasePage>
                </BaseLayout>
                )
            }else {
                return ( <Component {...this.props} />)
            }
        }

        render() {
            return this.renderProtectedPage();
        }
    }
}
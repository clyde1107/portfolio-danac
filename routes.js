const routes = require('next-routes')

module.exports = routes()
// .add('about')
// .add('home','/')
.add('test', '/test/:id')
.add('portfolios', '/portfolios')
.add('Cv', '/cv')
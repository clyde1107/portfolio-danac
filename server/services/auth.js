const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost:3000';

exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestPerMinute: 15,
        jwksUri: 'https://dev-nubkr2fh.auth0.com/.well-known/jwks.json'
      }),

    audience: '1zFAv5hTrOHI4pWwDX16Kw0df3t799PZ',
    issuer: 'https://dev-nubkr2fh.auth0.com/',
    algorithms: ['RS256']
  })

  exports.checkRole = role => (req, res, next) => {
  const user = req.user;
    if (user && (user[namespace + 'role'] === role)) {
      next();
    } else {
      return res.status(401).send({title: 'Not Authorized', detail: 'You are not Authorized to access this site'})
    }
}
'use strict';
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
class Auth {
    constructor() {
        this.generateToken = (jsonToSign) => {
            var token = jwt.sign({
                data: jsonToSign
            }, SECRET_KEY, { expiresIn: '24h' });
            return token;
        };
        this.decodeToken = (token) => {
            try {
                var decoded = jwt.verify(token, SECRET_KEY);
                return decoded;
            }
            catch (error) {
                return null;
            }
        };
        this.verificarToken = (req, res, next) => {
            let token = req.headers.authorization;
            jwt.verify(token, SECRET_KEY, (err, decoded) => {
                if (err) {
                    return res.status(401).json({
                        hasError: true,
                        errors: [{
                                mensaje: 'Las credenciales no son correctas'
                            }]
                    });
                }
                else {
                    let usuario = this.decodeToken(token);
                    req.body.usuario = usuario.data;
                    req.body.refreshToken = this.generateToken(usuario.data);
                    next();
                }
            });
        };
    }
}
module.exports = Auth;

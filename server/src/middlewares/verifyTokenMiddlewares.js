import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken'
import { env } from '~/config/environment';

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(StatusCodes.FORBIDDEN).json("Token is not valid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(StatusCodes.UNAUTHORIZED).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.role ==='host') {
      next();
    } else {
      res.status(StatusCodes.FORBIDDEN).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(StatusCodes.FORBIDDEN).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};
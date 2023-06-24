import validApiKeys from '../models/apiKeys.js';

const apiKeyAuth = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey && validApiKeys.includes(apiKey)) {
    next();
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export default apiKeyAuth;

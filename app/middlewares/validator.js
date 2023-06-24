import validator from 'validator';

const updateValidator = (req, res, next) => {
    const userData = req.body;
    const {email, name} = userData;

    if(  email && (!validator.isEmail(email) )  ) {
        res.status(400).json( { error: 'Please enter a valid email'} );
    } else if ( name && ( !validator.isAlpha(name) ) ) {
        res.status(400).json( { error: 'Name should only contain Alphabets'} );
    }else {
        next();
    }
}

const createValidator = (req, res, next) => {
    const userData = req.body;
    const {email, name} = userData;

    if( validator.isEmpty(email) || ( !validator.isEmail(email) ) ) {
        res.status(400).json( { error: 'Please enter a valid email'} );
    } else if ( validator.isEmpty(name) || ( !validator.isAlpha(name) ) ) {
        res.status(400).json( { error: 'Name should only contain Alphabets'} );
    }else {
        next();
    }
}

export { updateValidator, createValidator};
const logRequest = (req, res, next) => {
    console.log('ini adalah log dari path:', req.path)
    next(); 
}

module.exports = {
    logRequest
}
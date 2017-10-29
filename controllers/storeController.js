
exports.myMiddleware=(req,res,next) =>{
    req.name='wes';

    if(req.name==='wes'){
        throw Error('that is a stupid name');
    }
    next();
}


exports.homePage = (req,res) => {
    console.log(req.name);
    res.render('index');

}
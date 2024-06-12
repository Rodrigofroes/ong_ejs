class loginController{
    screenLogin(req, res){
        res.render('login/login', {layout: "login/login"});
    }

    screenCadastro(req, res){
        res.render('login/cadastro', {layout: "login/cadastro"});
    }
}

module.exports = loginController;
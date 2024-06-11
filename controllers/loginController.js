class loginController{
    screenLogin(req, res){
        res.render('login/login');
    }

    screenCadastro(req, res){
        res.render('login/cadastro');
    }
}

module.exports = loginController;
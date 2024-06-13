const DoadorModel = require("../model/doadorModel");

class AuthMiddleware {

    async verificarUsuarioLogado(req, res, next) {
        if(req.cookies != undefined && req.cookies.doadorLogado != null){
            let doadorId = req.cookies.doadorLogado;
            let doador = new DoadorModel();
            doador = await doador.obter(doadorId);
            if(doador != null) {
                next();
            }
            else{
                res.redirect("/login");
            }
        }
        else{
            res.redirect("/login");
        }
    }

}

module.exports = AuthMiddleware;
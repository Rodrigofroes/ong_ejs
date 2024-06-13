const Database = require("../utils/database");

const banco = new Database();

class ProjetoModel {
    
    #projetoId;
    #projetoNome;
    #projetoDescricao;
    #projetoDataInic;
    #projetoDataFim;
    #projetoObjetivo;
    #projetoOrcamento;
    #projetoStatu;

    constructor(projetoId, projetoNome, projetoDescricao, projetoDataInic, projetoDataFim, projetoObjetivo, projetoOrcamento, projetoStatu) {
        this.#projetoId = projetoId;
        this.#projetoNome = projetoNome;
        this.#projetoDescricao = projetoDescricao;
        this.#projetoDataInic = projetoDataInic;
        this.#projetoDataFim = projetoDataFim;
        this.#projetoObjetivo = projetoObjetivo;
        this.#projetoOrcamento = projetoOrcamento;
        this.#projetoStatu = projetoStatu;
    }

    get projetoId() { return this.#projetoId; }
    set projetoId(novoprojetoId) { this.#projetoId = novoprojetoId; }

    get projetoNome() { return this.#projetoNome; }
    set projetoNome(novoprojetoNome) { this.#projetoNome = novoprojetoNome; }

    get projetoDescricao() { return this.#projetoDescricao; }
    set projetoDescricao(novoprojetoDescricao) { this.#projetoDescricao = novoprojetoDescricao; }

    get projetoDataInic() { return this.#projetoDataInic; }
    set projetoDataInic(novoprojetoDataInic) { this.#projetoDataInic = novoprojetoDataInic; }

    get projetoDataFim() { return this.#projetoDataFim; }
    set projetoDataFim(novoprojetoDataFim) { this.#projetoDataFim = novoprojetoDataFim; }

    get projetoObjetivo() { return this.#projetoObjetivo; }
    set projetoObjetivo(novoprojetoObjetivo) { this.#projetoObjetivo = novoprojetoObjetivo; }

    get projetoOrcamento() { return this.#projetoOrcamento; }
    set projetoOrcamento(novoprojetoOrcamento) { this.#projetoOrcamento = novoprojetoOrcamento; }

    get projetoStatu() { return this.#projetoStatu; }
    set projetoStatu(novoprojetoStatu) { this.#projetoStatu = novoprojetoStatu; }


    //função listar tudo
    async listar() {

        let sql = `select * from projetos`;
        let lista = [];

        let rows = await banco.ExecutaComando(sql)

        for (let i = 0; i < rows.length; i++) {
            lista.push(new ProjetoModel(rows[i]['id_projeto'], rows[i]['nome'], rows[i]['descricao'], rows[i]['data_inicio'], rows[i]['data_fim'], rows[i]['objetivo'], rows[i]['orcamento'], rows[i]['status']))
        }
        return lista;
    }

}

module.exports = ProjetoModel;

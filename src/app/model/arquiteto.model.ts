export class ArquitetoModel {

    id?: string;
    nome?: string;
    cpf?: string;
    cau?: string;
    endereco?: string;
    telefone?: string;
    email?: string;

    constructor(id?: string,
        nome?: string,
        cpf?: string,
        cau?: string,
        endereco?: string,
        telefone?: string,
        email?: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.cau = cau;
        this.endereco = endereco;
        this.telefone = telefone;
        this.email = email;
    }
}
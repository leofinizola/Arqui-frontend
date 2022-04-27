import { ArquitetoModel } from "./arquiteto.model";
import { ClienteModel } from "./cliente.model";

export class ProjetoModel {

    id?: string;
    cliente?: ClienteModel;
    arquiteto?: ArquitetoModel;
    url?: string;
    endereco?: string;
    rrt?: string;

    constructor(id?: string,
        url?: string,
        rrt?: string,
        endereco?: string,
        arquiteto?: ArquitetoModel,
        cliente?: ClienteModel) {
        this.id = id;
        this.endereco = endereco;
        this.url = url;
        this.rrt = rrt;
        this.arquiteto = arquiteto;
        this.cliente = cliente;
    }
}
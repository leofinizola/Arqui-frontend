import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArquitetoService } from '../arquiteto/service/arquiteto.service';
import { ClienteService } from '../cliente/service/cliente.service';
import { ArquitetoModel } from '../model/arquiteto.model';
import { ClienteModel } from '../model/cliente.model';
import { ProjetoModel } from '../model/projeto.model';
import { ProjetoService } from './service/projeto.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.css']
})
export class ProjetoComponent implements OnInit {

  constructor(private clienteService: ClienteService, private arquitetoService: ArquitetoService, private service: ProjetoService) { }

  displayedColumns: string[] = ['nome', 'cpf'];
  displayedColumnsPrincipal: string[] = ['url', 'rrt','endereco','cliente','cpfCliente','arquiteto', 'cpfArquiteto','remover'];
  dataClientes: ClienteModel[] = [];
  dataArquitetos: ArquitetoModel[] = [];
  clickedArquiteto: ArquitetoModel | undefined; 
  clickedCliente: ClienteModel | undefined; 

  dataSource: ProjetoModel[] = [];

  form = new FormGroup({
    url: new FormControl(),
    rrt: new FormControl(),
    endereco: new FormControl(),
  });

  ngOnInit(): void {
    this.atualizarArquitetos();
    this.atualizarClientes();
    this.atualizar();
  }

  atualizar() {
    this.service.getAll().subscribe(res => {
      this.dataSource = res as ProjetoModel[];
    })
  }

  deletar(projeto: ProjetoModel) {
    this.service.delete(projeto).subscribe(res => {
      this.atualizar();
    })
  }

  salvarProjeto(){
    const obj = this.form.value;
    obj['cliente'] = this.clickedCliente;
    obj['arquiteto'] = this.clickedArquiteto;
    this.service.save(obj).subscribe(res => {
      this.atualizar();
    });
    this.clickedArquiteto = undefined;
    this.clickedCliente = undefined;
    this.form.reset();
  }

  setClickedArquiteto(element:ArquitetoModel){
    this.clickedArquiteto = element;
  }

  setClickedCliente(element:ClienteModel){
    this.clickedCliente = element;
  }

  atualizarArquitetos() {
    this.arquitetoService.getAll().subscribe(res => {
      this.dataArquitetos = res as ArquitetoModel[];
    });
  }

  atualizarClientes() {
    this.clienteService.getAll().subscribe(res => {
      this.dataClientes = res as ClienteModel[];
    })
  }
}

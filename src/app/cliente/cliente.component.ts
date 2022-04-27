import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClienteModel } from '../model/cliente.model';
import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  
  constructor(private service: ClienteService) { }
  displayedColumns: string[] = ['nome', 'cpf', 'endereco', 'telefone', 'email', 'remover'];

  dataSource: ClienteModel[] = [];

  form = new FormGroup({
    nome: new FormControl(),
    cpf: new FormControl(),
    cau: new FormControl(),
    endereco: new FormControl(),
    telefone: new FormControl(),
    email: new FormControl()
  });

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar() {
    this.service.getAll().subscribe(res => {
      this.dataSource = res as ClienteModel[];
    })
  }

  deletar(cliente: ClienteModel) {
    this.service.delete(cliente).subscribe(res => {
      this.atualizar();
    })
  }

  salvar() {
    this.service.save(this.form.value).subscribe(res => {
      this.atualizar();
    });
    this.form.reset();
  }

}

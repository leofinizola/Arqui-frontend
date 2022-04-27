import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ArquitetoModel } from '../model/arquiteto.model';
import { ArquitetoService } from './service/arquiteto.service';

@Component({
  selector: 'app-arquiteto-component',
  templateUrl: './arquiteto.component.html',
  styleUrls: ['./arquiteto.component.css']
})
export class ArquitetoComponent implements OnInit {

  constructor(private service: ArquitetoService) { }
  displayedColumns: string[] = ['nome', 'cpf', 'cau', 'endereco', 'telefone', 'email', 'remover'];

  dataSource: ArquitetoModel[] = [];

  form = new FormGroup({
    nome: new FormControl(),
    cpf: new FormControl(),
    cau: new FormControl(),
    endereco: new FormControl(),
    telefone: new FormControl(),
    email: new FormControl()
  });

  ngOnInit(): void {
    this.atualizarArquitetos();
  }

  atualizarArquitetos() {
    this.service.getAll().subscribe(res => {
      this.dataSource = res as ArquitetoModel[];
    })
  }

  deletarArquiteto(arquiteto: ArquitetoModel) {
    this.service.delete(arquiteto).subscribe(res => {
      this.atualizarArquitetos();
    })
  }

  salvarArquiteto() {
    this.service.save(this.form.value).subscribe(res => {
      this.atualizarArquitetos();
    });
    this.form.reset();
  }

}

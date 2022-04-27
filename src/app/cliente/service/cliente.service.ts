import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClienteModel } from 'src/app/model/cliente.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(environment.api + '/cliente');
  }

  delete(cliente: ClienteModel) {
    return this.http.delete(environment.api + '/cliente', { body: cliente });
  }

  save(cliente: ClienteModel) {
    return this.http.post(environment.api + '/cliente', cliente);
  }
}

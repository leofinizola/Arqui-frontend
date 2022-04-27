import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjetoModel } from 'src/app/model/projeto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(environment.api + '/projeto');
  }

  delete(projeto: ProjetoModel) {
    return this.http.delete(environment.api + '/projeto', { body: projeto });
  }

  save(projeto: ProjetoModel) {
    return this.http.post(environment.api + '/projeto', projeto);
  }
}

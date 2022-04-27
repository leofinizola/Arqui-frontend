import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArquitetoModel } from 'src/app/model/arquiteto.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArquitetoService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(environment.api + '/arquiteto');
  }

  delete(arquiteto: ArquitetoModel) {
    return this.http.delete(environment.api + '/arquiteto', { body: arquiteto });
  }

  save(arquiteto: ArquitetoModel) {
    return this.http.post(environment.api + '/arquiteto', arquiteto);
  }
}

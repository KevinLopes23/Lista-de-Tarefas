import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) {}

  obterTarefas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  adicionarTarefa(tarefa: any): Observable<any> {
    return this.http.post(this.apiUrl, tarefa);
  }

  concluirTarefa(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, {});
  }

  removeTarefa(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

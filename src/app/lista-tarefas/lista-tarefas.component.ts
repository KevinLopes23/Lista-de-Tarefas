import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-tarefas',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-tarefas.component.html',
  styleUrl: './lista-tarefas.component.css',
})
export class ListaTarefasComponent implements OnInit {
  tarefas: any[] = [];
  novaTarefa = { id: '', titulo: '', concluida: false };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.apiService.obterTarefas().subscribe((dados: any) => {
      this.tarefas = dados;
    });
  }

  adicionarTarefas(): void {
    this.novaTarefa.id = Date.now().toString();
    this.apiService.adicionarTarefa(this.novaTarefa).subscribe(() => {
      this.carregarTarefas();
      this.novaTarefa = { id: '', titulo: '', concluida: false };
    });
  }

  concluirTarefa(id: string): void {
    this.apiService.concluirTarefa(id).subscribe(() => {
      this.carregarTarefas();
    });
  }

  removerTarefas(id: string): void {
    this.apiService.removeTarefa(id).subscribe(() => {
      this.carregarTarefas();
    });
  }
}

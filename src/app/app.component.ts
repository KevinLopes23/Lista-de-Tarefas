import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component'; // Ajuste o caminho conforme necessário

@Component({
  selector: 'app-root',
  standalone: true, // Marca o componente como standalone
  imports: [RouterOutlet, ListaTarefasComponent], // Importa o componente lista-tarefas aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
}

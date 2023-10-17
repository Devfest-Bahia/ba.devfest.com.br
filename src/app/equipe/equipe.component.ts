import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent {
  @Input() organizer: any; // Adapte conforme necessário
  isHovered = false;
public name =[" ana", "joao"];
public position=['teste1', 'teste2'];
  onMouseOver() {
    this.isHovered = true;
  }

  onMouseOut() {
    this.isHovered = false;
  }
}

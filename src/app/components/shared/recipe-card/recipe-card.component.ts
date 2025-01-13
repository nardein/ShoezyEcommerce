import { Component,Input,Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../models/recipes.model';
@Component({
  selector: 'app-recipe-card',
  standalone: false,

  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})

export class RecipeCardComponent {
  @Input() recipes: Recipe[] | undefined;
  @Output() messaggio = new EventEmitter();

  inviaTitolo(titolo: string){
    this.messaggio.emit(titolo);
  }

}

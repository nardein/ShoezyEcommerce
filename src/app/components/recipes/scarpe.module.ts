import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //modulo con le funzioni piu usate
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ScarpeRoutingModule } from './scarpe-routing.module';

//PrimeNg Module
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { RatingModule } from 'primeng/rating';

//Componenti
import { RecipesComponent } from './scarpe.component';
import { RecipeCardComponent } from '../shared/recipe-card/scarpe-card.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeCardComponent,
    RecipesListComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DatePipe,
    ScarpeRoutingModule,
    PaginatorModule,
    ButtonModule,
    EditorModule,
    RatingModule,
  ],
  exports: [RecipeCardComponent], // i componenti condivisi
})
export class ScarpeModule {}

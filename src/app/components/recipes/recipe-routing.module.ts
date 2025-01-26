import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loggedInGuard } from '../../guards/logged-in.guard';
import { isAdminGuard } from '../../guards/is-admin.guard';
import { DatePipe } from '@angular/common';

//Components
import { RecipesComponent } from './recipes.component';
import { DetailComponent } from './detail/detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    children: [
      { path: 'dettaglio/:title/:_id', component: DetailComponent },
      { path: 'dettaglio/:_id', component: DetailComponent },
      { path: '', component: RecipesListComponent, pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), DatePipe], //tutti i moduli figlio di app module devono avere forChild
  exports: [RouterModule],
})
export class RecipeRoutingModule {}

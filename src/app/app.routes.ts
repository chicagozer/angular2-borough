import { Routes, RouterModule } from '@angular/router';
import { BoroughComponent } from './borough';
import { GridComponent } from './grid';



export const ROUTES: Routes = [
  { path: '',      component: BoroughComponent }
  ,{ path: 'borough', component: BoroughComponent }
  ,{ path: 'grid', component: GridComponent }

];

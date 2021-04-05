import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PartListComponent} from './part-list/part-list.component';


const routes: Routes = [
  {path: 'order', component: PartListComponent}
  ];

// const routes2: Routes = [
//   {path: 'cars', components: CarsComponent,
//     children : [
//       {path: ':id', components: FullCarComponent}
//     ]
//   },
//   {path: 'all-cars', redirectTo: 'cars', pathMatch: 'full'}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

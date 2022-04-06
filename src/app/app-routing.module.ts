import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { MaterialComponent } from './material/material.component';
import { MaterialChildComponent } from './material-child/material-child.component';
import { CryptoComponent } from './crypto/crypto.component';

const routes: Routes = [
  { path: 'maps', component: MapsComponent },
  {
    path: 'material',
    component: MaterialComponent,
    children: [{ path: 'm-child', component: MaterialChildComponent }],
  },
  { path: 'crypto-prices', component: CryptoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const ArrayOfRoutes = [
  MaterialComponent,
  MapsComponent,
  MaterialChildComponent,
  CryptoComponent,
];

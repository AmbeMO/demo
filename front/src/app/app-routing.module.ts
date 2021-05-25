import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './signIn/signIn.component';
import {SignUpComponent} from './signUp/signUp.component';
import {OrderComponent} from "./order/order.module";
import {CatalogComponent} from "./catalog/catalog.component";
import {AdminComponent} from "./admin/admin.component";

// http:...4200/ -> SignUpComponent
// http:....4200/registry -> signInComp
const routes: Routes = [
  {path: '', component: SignInComponent}, // можна просто індекс прописати
  {path: 'registry', component: SignUpComponent},
  {path: '', component: CatalogComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin', component: AdminComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)], // registry входящие величчины
  exports: [RouterModule] // открывает входящий апи

})
export class AppRoutingModule {

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShelfComponent } from './shelf/shelf.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path:'shelf', component:ShelfComponent },
    { path:'book', component:BookComponent },
    { path:'login', component:LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ShelfComponent, BookComponent, LoginComponent]
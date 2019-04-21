import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./reducers/challenge.reducers";
import { ReadComponent } from "./read/read.component";
import { CreateComponent } from "./create/create.component";
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      challenge: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

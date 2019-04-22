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
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from "./footer/footer.component";
//import { RlTagInputModule } from "angular2-tag-input";

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    //RlTagInputModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      challenge: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

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
import { FormsModule } from "@angular/forms";
import { NoteFilterPipe } from "./read/read-filter.pipe";
import { ListNotesComponent } from "./list-notes/list-notes.component";
import { FaqComponent } from "./faq/faq.component";
import { ContactComponent } from "./contact/contact.component";

//import { RlTagInputModule } from "angular2-tag-input";

const appRoutes: Routes = [
  {
    path: "create",
    component: CreateComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "list",
    component: ReadComponent
  },
  {
    path: "faq",
    component: FaqComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    CreateComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    NoteFilterPipe,
    ListNotesComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
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

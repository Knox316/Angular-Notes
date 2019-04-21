import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Model } from "./../models/models.model";
import { AppState } from "./../app.state";
import { Observable } from "rxjs";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  models: Observable<Model[]>;
  constructor(private store: Store<AppState>) {
    this.models = store.select("challenge");
  }

  ngOnInit() {}
}

import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Model } from "./../models/models.model";
import { AppState } from "./../app.state";
import { Observable } from "rxjs";
//import * as jsPDF from "jspdf";

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

  //incomplete
  //disabled until finished
  /*downloadPdf() {
    let doc = new jsPDF();
    doc.addHTML(document.getElementById("contain"), function() {
      doc.save("note.pdf");
    });
  }*/
  ngOnInit() {}
}

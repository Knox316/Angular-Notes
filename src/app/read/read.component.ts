import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Model } from "./../models/models.model";
import { AppState } from "./../app.state";
import { Observable } from "rxjs";
import * as ChallengeActions from "./../actions/challenge.actions";
import { store } from "@angular/core/src/render3";
import * as jsPDF from "jspdf";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  models: Observable<Model[]>;
  @ViewChild("container") container: ElementRef;
  constructor(private store: Store<AppState>) {
    this.models = store.select("challenge");
  }

  searchTerm: string;

  deleteNote(i) {
    this.store.dispatch(new ChallengeActions.RemoveNotes(i));
  }

  public downloadPdf() {
    let doc = new jsPDF();
    let specialElementHandlers = {
      "#editor": function(element, renderer) {
        return true;
      }
    };

    let container = this.container.nativeElement;
    doc.fromHTML(container.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers
    });

    doc.save("notes.pdf");
  }

  updateNote(index) {}
  ngOnInit() {}
}

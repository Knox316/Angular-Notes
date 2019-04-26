import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { Model } from "./../models/models.model";
import { AppState } from "./../app.state";
import { Observable } from "rxjs";
import * as ChallengeActions from "./../actions/challenge.actions";
import { store } from "@angular/core/src/render3";
import * as jsPDF from "jspdf";
import * as html2canvas from "html2canvas";

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
    let container = this.container.nativeElement;
    let data = document.querySelector("#getPic");

    console.log(data);
    let imgData;
    let specialElementHandlers = {
      "#editor": function(element, renderer) {
        return true;
      }
    };

    html2canvas(data).then(canvas => {
      imgData = canvas.toDataURL("/image/png");
    });
    doc.fromHTML(container.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHandlers
    });
    //doc.addImage(imgData, "JPEG", 45, 45, 150, 150);
    doc.save("notes.pdf");
  }

  updateNote(index) {}
  ngOnInit() {}
}

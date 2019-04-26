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

  //incomplete
  //printing the entire page and not only the notes
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById("print").innerHTML;
    popupWin = window.open("", "_blank", "top=0,left=0,height=100%,width=auto");
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Cocus Challenge</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`);
    popupWin.document.close();
  }

  updateNote(index) {}
  ngOnInit() {}
}

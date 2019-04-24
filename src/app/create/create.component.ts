import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./../app.state";
import { Model } from "./../models/models.model";
import * as ChallengeActions from "./../actions/challenge.actions";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  constructor(private http: HttpClient, private store: Store<AppState>) {}
  selectedFile = null;
  addNote(title, body, tag) {
    this.store.dispatch(
      new ChallengeActions.AddNotes({ title: title, body: body, tag: tag })
    );
  }

  deleteNote(index) {
    this.store.dispatch(new ChallengeActions.RemoveNotes(index));
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {}
  ngOnInit() {}
}

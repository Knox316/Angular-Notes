import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./../app.state";
import { Model } from "./../models/models.model";
import * as ChallengeActions from "./../actions/challenge.actions";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  addNote(title, body) {
    this.store.dispatch(
      new ChallengeActions.AddNotes({ title: title, body: body })
    );
  }

  deleteNote(index) {
    this.store.dispatch(new ChallengeActions.RemoveNotes(index));
  }
  ngOnInit() {}
}
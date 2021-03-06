import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./../app.state";
import { Model } from "./../models/models.model";
import * as ChallengeActions from "./../actions/challenge.actions";
import { HttpClient } from "@angular/common/http";
import { identifierModuleUrl } from "@angular/compiler";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.css"]
})
export class CreateComponent implements OnInit {
  constructor(private http: HttpClient, private store: Store<AppState>) {}
  previewPic = false;
  addNote(title, body, tag, photo) {
    this.store.dispatch(
      new ChallengeActions.AddNotes({
        title: title,
        body: body,
        tag: tag,
        photo: photo
      })
    );
    alert(`Note ${title} added with sucess!`);
  }

  deleteNote(index) {
    this.store.dispatch(new ChallengeActions.RemoveNotes(index));
  }

  togglePicPreview() {
    this.previewPic = !this.previewPic;
  }

  onUpload() {}
  ngOnInit() {}
}

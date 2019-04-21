import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Model } from "../models/models.model";

export const ADD_NOTES = "[MODEL] Add";
export const REMOVE_NOTES = "[MODEL] Remove";
export const UPDATE_NOTES = "[MODEL] Update";

export class AddNotes implements Action {
  readonly type = ADD_NOTES;

  constructor(public payload: Model) {}
}

export class RemoveNotes implements Action {
  readonly type = REMOVE_NOTES;

  constructor(public payload: number) {}
}

export class UpdateNotes implements Action {
  readonly type = UPDATE_NOTES;

  constructor(
    public payload: {
      index: number;
      note: Model;
    }
  ) {}
}

export type Actions = AddNotes | RemoveNotes | UpdateNotes;

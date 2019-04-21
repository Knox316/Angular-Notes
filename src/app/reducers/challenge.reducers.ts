import { Action, ActionsSubject } from "@ngrx/store";
import { Model } from "../models/models.model";
import * as ChallengeActions from "./../actions/challenge.actions";

const initialState: Model = {
  title: "First Note",
  body: "www.google.pt"
};

export function reducer(
  state: Model[] = [initialState],
  action: ChallengeActions.Actions
) {
  switch (action.type) {
    //Add notes
    case ChallengeActions.ADD_NOTES:
      let count: number = 0;
      return [...state, action.payload];
    //Remove Notes
    case ChallengeActions.REMOVE_NOTES:
      state.splice(action.payload, 1);
      return state;
    //Delete Notes
    case ChallengeActions.UPDATE_NOTES:
      const model = state[action.payload.index];
      const upgradeState = {
        ...state,
        ...action.payload.note
      };
      const notes = [...state];
      notes[action.payload.index] = upgradeState;
      return {
        ...state,
        notes: notes
      };
    default:
      return state;
  }
}

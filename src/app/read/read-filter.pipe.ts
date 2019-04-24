import { PipeTransform, Pipe } from "@angular/core";
import { Model } from "./../models/models.model";

@Pipe({
  name: "noteFilter"
})
export class NoteFilterPipe implements PipeTransform {
  transform(models: Model[], searchTerm: string): Model[] {
    if (!models || !searchTerm) {
      return models;
    }

    return models.filter(
      model =>
        model.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}

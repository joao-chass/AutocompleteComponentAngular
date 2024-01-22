import { Component, EventEmitter, Input, Output } from '@angular/core';
import { programmingLanguagesModel } from '../model/programmingLanguagesModel';

@Component({
  selector: 'app-list-auto-complete',
  standalone: true,
  imports: [],
  templateUrl: './list-auto-complete.component.html',
  styleUrl: './list-auto-complete.component.scss'
})
export class ListAutoCompleteComponent {
  @Input() autoCompleteValue: programmingLanguagesModel[] = [];
  @Input() tagsSelected: programmingLanguagesModel[] = [];

  @Output() selectTag: EventEmitter<programmingLanguagesModel> = new EventEmitter();


  getStyle(programmingLanguage: programmingLanguagesModel) {
    return this.tagsSelected.find(
      (objeto) =>
        objeto.programingLanguageName?.toLocaleLowerCase() ===
        programmingLanguage.programingLanguageName?.toLocaleLowerCase()
    );
  }

  selectTags(programmingLanguage: programmingLanguagesModel) {
    this.selectTag.emit(programmingLanguage);
  }

}

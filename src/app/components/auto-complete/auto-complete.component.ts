import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Subject,
  debounceTime,
} from 'rxjs';
import { ListAutoCompleteComponent } from './list-auto-complete/list-auto-complete.component';
import { programmingLanguagesModel } from './model/programmingLanguagesModel';

@Component({
  selector: 'app-auto-complete',
  standalone: true,
  imports: [FormsModule, CommonModule, ListAutoCompleteComponent],
  templateUrl: './auto-complete.component.html',
  styleUrl: './auto-complete.component.scss',
})
export class AutoCompleteComponent {
  @Input() descriptionAutoComplete = '';
  subject: Subject<any> = new Subject();

  inputAutoComplete = '';
  showList: boolean = false;
  showClearButton: boolean = false;
  alert = '';
  showAlert:boolean = false;
  programmingLanguages: programmingLanguagesModel[] = [
    {  programingLanguageName: 'Assembly' },
    {  programingLanguageName: 'C' },
    {  programingLanguageName: 'C++' },
    {  programingLanguageName: 'C#' },
    {  programingLanguageName: 'Clojure' },
    {  programingLanguageName: 'Dart' },
    {  programingLanguageName: 'Elixir' },
    {  programingLanguageName: 'Elm' },
    {  programingLanguageName: 'Erlang' },
    {  programingLanguageName: 'Fortran' },
    {  programingLanguageName: 'Go' },
    {  programingLanguageName: 'Groovy' },
    {  programingLanguageName: 'Haskell' },
    {  programingLanguageName: 'HTML' },
    {  programingLanguageName: 'Java' },
    {  programingLanguageName: 'JavaScript' },
    {  programingLanguageName: 'Kotlin' },
    {  programingLanguageName: 'Lua' },
    {  programingLanguageName: 'Objective-C' },
    {  programingLanguageName: 'Pascal' },
    {  programingLanguageName: 'Perl' },
    {  programingLanguageName: 'PHP' },
    {  programingLanguageName: 'Python' },
    {  programingLanguageName: 'Ruby' },
    {  programingLanguageName: 'Rust' },
    {  programingLanguageName: 'Scala' },
    {  programingLanguageName: 'Shell' },
    {  programingLanguageName: 'SQL' },
    {  programingLanguageName: 'Swift' },
    {  programingLanguageName: 'TypeScript' },
    {  programingLanguageName: 'VBScript' },
    {  programingLanguageName: 'Visual Basic' },
    {  programingLanguageName: 'XML' },
    {  programingLanguageName: 'YAML' },
  ];
  autoCompleteValue: programmingLanguagesModel[] = [];
  tagsSelected: programmingLanguagesModel[] = [];
  typeAlert = ''

  ngOnInit(): void {
    this.subject.pipe(debounceTime(400)).subscribe(() => {
      this.filterAutoComplete();
    });
  }

  searchprogrammingLanguage() {
    this.subject.next(true);
  }

  getStyle(programmingLanguage: programmingLanguagesModel) {
    return this.searchTag(programmingLanguage.programingLanguageName);
  }

  findTagSelected(programingLanguageName: string) {
    return this.searchTag(programingLanguageName);
  }

  searchTag(programmingLanguage: string) {
    return this.tagsSelected.find(
      (objeto) =>
        objeto.programingLanguageName?.toLocaleLowerCase() ===
        programmingLanguage.toLocaleLowerCase()
    );
  }

  selectTag(programmingLanguage: programmingLanguagesModel) {
    const tagFound = this.searchTag(programmingLanguage.programingLanguageName);

    if (tagFound) {
      this.alertControl('Tag already added ❕', 'warning');
    } else {
      this.showClearButton = false;
      this.showList = false;
      this.inputAutoComplete = '';
      this.tagsSelected.push(programmingLanguage);
      this.alertControl('Tag add success ✔️', 'success');
    }
  }

  removeTag(itemToRemove: string) {
    this.tagsSelected = this.tagsSelected.filter(
      (item) => item.programingLanguageName?.toLocaleLowerCase() !== itemToRemove.toLocaleLowerCase()
    );
    this.alertControl('Tag removed 🗑️', 'delete');
  }

  clickShowList() {
    if(this.inputAutoComplete.length <= 0){
      this.showClearButton = true;
      this.showList = true;
      this.autoCompleteValue = this.programmingLanguages;
    }
  }

  onEnterKeyPress(event: any): void {
    if(this.inputAutoComplete.trim().length > 0) {
      if (
        this.findTagSelected(this.inputAutoComplete) == undefined
      ) {
        const createNewTag = {
          programingLanguageName: this.inputAutoComplete,
        };
        this.tagsSelected.push(createNewTag);
        this.clearInput();
        this.alertControl('Tag add success ✔️', 'success');
      } else {
        this.alertControl('Tag already added ❕', 'warning');
      }
    } else {
      this.alertControl('Invalid value ❕', 'warning');
    }
  }

  clearInput() {
    this.showList = false;
    this.inputAutoComplete = '';
    this.showClearButton = false;
  }

  alertControl(menssage: string, typeAlert: string) {
      this.typeAlert = typeAlert;
      this.alert = menssage;
      this.showAlert = true;
      setTimeout(() => {
        this.alert = '';
        this.typeAlert = '';
        this.showAlert = false;
      }, 2000);
  }

  filterAutoComplete() {
    if (this.inputAutoComplete.length > 0) {
      this.showList = true;
      this.autoCompleteValue = this.programmingLanguages.filter((f) =>
        f.programingLanguageName
          ?.toLowerCase()
          .includes(this.inputAutoComplete.toLowerCase())
      );
    } else {
      this.showList = false;
    }
  }
}


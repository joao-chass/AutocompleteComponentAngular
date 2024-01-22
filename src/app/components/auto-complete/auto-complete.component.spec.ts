import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { AutoCompleteComponent } from './auto-complete.component';
import { programmingLanguagesModel } from './model/programmingLanguagesModel';

describe('AutoCompleteComponent', () => {
  let component: AutoCompleteComponent;
  let fixture: ComponentFixture<AutoCompleteComponent>;
  let tagsSelected: programmingLanguagesModel[] =  [{programingLanguageName: 'JavaScript'}];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoCompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search Tag with diferents case', () => {
    component.tagsSelected = tagsSelected;
    let result = component.searchTag('JAVASCRIPT');
    expect(result).toEqual({programingLanguageName: 'JavaScript'});
  });

  it('should add the tag and return the Tag messages', () => {
    component.tagsSelected = tagsSelected;

    component.selectTag({programingLanguageName: 'JavaScript'});
    expect(component.typeAlert).toEqual('warning');
    expect(component.alert).toEqual('Tag already added ❕');
    expect(component.tagsSelected).toEqual([{programingLanguageName: 'JavaScript'}]);

    component.selectTag({programingLanguageName: 'C#'});
    expect(component.typeAlert).toEqual('success');
    expect(component.alert).toEqual('Tag add success ✔️');
    expect(component.tagsSelected).toEqual([{programingLanguageName: 'JavaScript'}, {programingLanguageName: 'C#'}]);
  });

  it('should remove the tag and show the message', () => {
    component.tagsSelected = [{programingLanguageName: 'JavaScript'}, {programingLanguageName: 'C#'}];
    component.removeTag('Javascript');

    expect(component.tagsSelected).toEqual([{programingLanguageName: 'C#'}]);
    expect(component.typeAlert).toEqual('delete');
    expect(component.alert).toEqual('Tag removed 🗑️');

  });


  it('should add a tag when pressing enter and show the message', () => {
    component.inputAutoComplete = '  ';
    component.onEnterKeyPress('');

    expect(component.alert).toEqual('Invalid value ❕');

    component.inputAutoComplete = 'test';
    component.onEnterKeyPress('');
    expect(component.alert).toEqual('Tag add success ✔️');
    expect(component.tagsSelected).toEqual([{programingLanguageName: 'test'}]);

    component.inputAutoComplete = 'test';
    component.onEnterKeyPress('');
    expect(component.alert).toEqual('Tag already added ❕');
    expect(component.tagsSelected).toEqual([{programingLanguageName: 'test'}]);

  });

  it('should controlar os alertas', fakeAsync(() => {
    component.alertControl('Tag add success ✔️', 'success');

    expect(component.alert).toEqual('Tag add success ✔️');
    expect(component.showAlert).toBeTruthy();
    expect(component.typeAlert).toEqual('success');

    tick(2000);
    expect(component.showAlert).toBeFalsy();
    expect(component.alert).toEqual('');
    expect(component.typeAlert).toEqual('');

  }));

  it('should clear search information', () => {
    component.inputAutoComplete = 'C#';
    component.showList = true;
    component.showClearButton = true;

    component.clearInput();
    expect(component.inputAutoComplete).toEqual('');
    expect(component.showList).toBeFalsy();
    expect(component.showClearButton).toBeFalsy();
  });

  it('should filter auto complete', () => {
    component.inputAutoComplete = 'c';
    component.programmingLanguages = [{programingLanguageName: 'Dart'}, {programingLanguageName: 'C#'}, {programingLanguageName: 'C++'}];
    component.filterAutoComplete();

    component.clearInput();
    expect(component.autoCompleteValue).toEqual([{programingLanguageName: 'C#'}, {programingLanguageName: 'C++'}]);

  });

  it('should show List when call click Show List ', () => {
    component.clickShowList();
    expect(component.showList).toBe(true);
  });

});

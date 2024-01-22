# AutocompleteComponentAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Important Choices When Using Angular 17

Using Angular 17, I chose to leverage the new features, such as Integrated Control Flow, utilizing Conditional Statements:

For the clear button:

```html
@if(showClearButton){
    <span class="input-group-clear" (click)="clearInput()">
      <div class="icon-tag">X</div>
    </span>
}
```

Instead of:

```html
<span class="input-group-clear" (click)="clearInput()" *ngIf="showClearButton">
    <div class="icon-tag">X</div>
</span>
```

I also opted to use `@for` instead of `*ngFor`:

```html
@for (tag of tagsSelected; track $index) {
    <div class="tag-selected" (click)="removeTag(tag.programmingLanguageName)">
        {{tag.programmingLanguageName}}
        <div class="icon-tag">X</div>
    </div>
}
```

One of the features that I used and find particularly exciting is `@defer`, which allows lazy loading for components as well. In this case, I used `@defer (when showList)`:

```html
@defer (when showList) {
  <app-list-auto-complete [autoCompleteValue]="autoCompleteValue" [tagsSelected]="tagsSelected" (selectTag)="selectTag($event)"/>
}
```

I understand that these new Angular features may not be immediately applicable to legacy applications, but I found it important to use them for improved performance and learning.

Much of the information was taken from https://blog.angular.io/introducing-angular-v17-4d7033312e4b.


## Architecture Considerations

- File Size Limit: Keep each code file under 400 lines to maintain manageability.

- Function Size Limit: Aim to limit functions to 75 lines or less for better readability and easier debugging.

- Reusable components


## Installation

Make sure you have Node.js and npm installed on your machine. Clone the repository and run the following command:


Run `npm install`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

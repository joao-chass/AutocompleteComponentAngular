import { Component } from '@angular/core';
import { AutoCompleteComponent } from '../../components/auto-complete/auto-complete.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AutoCompleteComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

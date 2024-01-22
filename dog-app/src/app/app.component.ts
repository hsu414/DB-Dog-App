import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreedListComponent } from './breed-list/breed-list.component';
import { BreedDetailComponent } from './breed-detail/breed-detail.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BreedListComponent, BreedDetailComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dog-app';
}

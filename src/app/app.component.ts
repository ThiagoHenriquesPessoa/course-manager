import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { TelaMenuComponent } from './Courses/tela.menu/tela.menu.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, FormsModule, TelaMenuComponent]
})

export class AppComponent {
  title = 'course-manager';

  name: string = 'Thiago Henriques';
}

import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-errorpages',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './errorpages.component.html',
  styleUrl: './errorpages.component.css'
})
export class ErrorpagesComponent {

}

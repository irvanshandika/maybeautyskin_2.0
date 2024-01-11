import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
  productList = [
    {
      name: "Parfum",
      url: "pages/parfum",
    },
    {
      name: "Pakaian",
      url: "pages/pakaian",
    },
    {
      name: "Tas",
      url: "pages/tas",
    },
    {
      name: "Perawatan & Kecantikan",
      url: "pages/perawatan",
    },
  ];
}

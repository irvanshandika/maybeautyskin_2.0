import { Component } from "@angular/core";
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-produktas",
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: "./produktas.component.html",
  styleUrl: "./produktas.component.css",
})
export class ProduktasComponent {
  listTas = [
    {
      images: "path/to/image1.jpg",
      name: "Product 1",
      alt: "Alt Text 1",
      statusProduk: "Tersedia",
      url: "/product-details1",
    },
    {
      images: "path/to/image2.jpg",
      name: "Product 2",
      alt: "Alt Text 2",
      statusProduk: "Tidak Tersedia",
      url: "/product-details2",
    },
    // Add more products as needed
  ];

  getColorClass(status: string): string {
    return status === "Tersedia" ? "bg-green-500 text-white" : "bg-red-500 text-white";
  }
}

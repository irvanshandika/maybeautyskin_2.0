import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-productlist",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./productlist.component.html",
  styleUrl: "./productlist.component.css",
})
export class ProductlistComponent {
  productList = [
    {
      image: "https://down-id.img.susercontent.com/file/fd11907f0c04d1e254effeffd1b64ab4",
      name: "Parfum",
      alt: "Image Parfume",
      category: "Parfum",
      url: "pages/parfum",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lnojnt9um77l33",
      name: "Pakaian",
      alt: "Image Pakaian",
      category: "Pakaian",
      url: "pages/pakaian",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r992-lmirbwmwmjace4",
      name: "Tas",
      alt: "Image Tas",
      category: "Tas",
      url: "pages/tas",
    },
    {
      image: "https://down-id.img.susercontent.com/file/id-11134207-7r98v-ln9mq5s2fgen3a",
      name: "Perawatan & Kecantikan",
      alt: "Image Perawatan & Kecantikan",
      category: "Perawatan & Kecantikan",
      url: "pages/perawatan",
    }
  ];
}

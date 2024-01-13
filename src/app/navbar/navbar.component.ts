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
      url: "parfum",
    },
    {
      name: "Pakaian",
      url: "pakaian",
    },
    {
      name: "Tas",
      url: "tas",
    },
    {
      name: "Perawatan & Kecantikan",
      url: "perawatan",
    },
  ];
  layananKami = [
    {
      images: "https://res.cloudinary.com/dszhlpm81/image/upload/v1705079441/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/customer_service_yy3jfj.png",
      alt: "Customer Service",
      description: "Customer Service 24 Jam Siap Melayani Anda",
    },
    {
      images: "https://res.cloudinary.com/dszhlpm81/image/upload/v1705080985/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/shipping_lmfkdd.png",
      alt: "Shipping",
      description: "Pengiriman Cepat dan Aman",
    },
    {
      images: "https://res.cloudinary.com/dszhlpm81/image/upload/v1705079380/assets/phKFNpB7tMHUeEMuMCiMoTyH4rJTs3vp/delivery_chffqb.png",
      alt: "Keselamatan Produk",
      description: "Paket Selamat Sampai Ke Tangan Konsumen",
    },
  ];
}

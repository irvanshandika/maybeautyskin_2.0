import { Component } from "@angular/core";
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-produkpakaian",
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: "./produkpakaian.component.html",
  styleUrl: "./produkpakaian.component.css",
})
export class ProdukpakaianComponent {
  listPakaian = [
    {
      images: "https://down-id.img.susercontent.com/file/id-11134207-7r98v-ln5mna8hktljaa",
      name: "Zara Bambu Bimboo Kemeja Zara Wanita",
      alt: "Zara Bambu Bimboo Kemeja Zara Wanita",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/zara-bimbo-zara-bambu-bimboo-kemeja-zara-kemeja-wanita-i.296344657.12799276625?sp_atk=b5c75c67-b656-4038-9273-a37a70586a45",
    },
    {
      images: "https://down-id.img.susercontent.com/file/id-11134207-7r98z-lmu0x2hhfiqzf6",
      name: "Daster Cringkle Viral Daster Fuji",
      alt: "Daster Cringkle Viral Daster Fuji",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/Daster-Cringkle-Viral-Daster-Fuji-i.296344657.18385238490?sp_atk=96358832-4687-4762-8db6-b07e758ffde4",
    },
    // Add more products as needed
  ];

  getColorClass(status: string): string {
    return status === "Tersedia" ? "bg-green-500 text-white" : "bg-red-500 text-white";
  }
}

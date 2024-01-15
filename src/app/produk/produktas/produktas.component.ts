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
  title = "Tas";
  listTas = [
    {
      images: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lmisz5afs8x041",
      name: "ZARA BAG PREMIUM CLASSIC",
      alt: "ZARA BAG PREMIUM CLASSIC",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/ZARA-BAG-PREMIUM-CLASSIC-i.296344657.20393869410?sp_atk=bb83c0c0-4162-479b-90b5-2941b89a0b2e&xptdk=bb83c0c0-4162-479b-90b5-2941b89a0b2e",
    },
  ];

  getColorClass(status: string): string {
    return status === "Tersedia" ? "bg-green-500 text-white" : "bg-red-500 text-white";
  }
}

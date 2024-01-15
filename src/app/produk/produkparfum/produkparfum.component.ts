// produkparfum.component.ts
import { Component } from "@angular/core";
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from "@angular/common";
import { NzCardModule } from "ng-zorro-antd/card";

@Component({
  selector: "app-produkparfum",
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule, NzCardModule],
  templateUrl: "./produkparfum.component.html",
  styleUrls: ["./produkparfum.component.css"],
})
export class ProdukparfumComponent {
  title = "Parfum";
  listParfum = [
    {
      images: "https://down-id.img.susercontent.com/file/id-11134207-7r990-lmr9pwceva5g4a",
      name: "[SUPER PREMIUM] Inspired Parfum BS Bodymist 30ml",
      alt: "[SUPER PREMIUM] Inspired Parfum BS Bodymist 30ml",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/-SUPER-PREMIUM-Inspired-Parfum-BS-Bodymist-30ml-i.296344657.23357633182?xptdk=7f649863-5011-44c5-93ac-9f4e857ea530",
    },
    {
      images: "https://down-id.img.susercontent.com/file/2c031903150411fd89aafeb57eecffe8",
      name: "[Premium Quality] PART 1 inspired parfum thailand parfum murah 30ml 35ml",
      alt: "[Premium Quality] PART 1 inspired parfum thailand parfum murah 30ml 35ml",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/-Premium-Quality-PART-1-inspired-parfum-thailand-parfum-murah-30ml-35ml-i.296344657.3755287971?xptdk=9c06ba1a-68cf-4e8b-bfa8-979b3ee080b5",
    },
    {
      images: "https://down-id.img.susercontent.com/file/id-11134207-7r98x-lmor1to1grsb18",
      name: "[SUPER PREMIUM] Parfum Bulat Byredo 30ml",
      alt: "[SUPER PREMIUM] Parfum Bulat Byredo 30ml",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/-SUPER-PREMIUM-Parfum-Bulat-Byredo-30ml-i.296344657.21185068157",
    },
    {
      images: "https://down-id.img.susercontent.com/file/fd11907f0c04d1e254effeffd1b64ab4",
      name: "INSPIRED PARFUM LELABO LE LABO 30ml",
      alt: "INSPIRED PARFUM LELABO LE LABO 30ml",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/INSPIRED-PARFUM-LELABO-LE-LABO-30ml-i.296344657.16683656598?sp_atk=8586c394-34a5-49f3-bbbc-fcf2a18f4eeb",
    },
    {
      images: "https://down-id.img.susercontent.com/file/id-11134207-7r98u-lmor1to1kzhnfd",
      name: "[SUPER PREMIUM] Parfum Korea BTS 30ml Premium / Parfum Korea BTS Limited Edition 30ml",
      alt: "[SUPER PREMIUM] Parfum Korea BTS 30ml Premium / Parfum Korea BTS Limited Edition 30ml",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/-SUPER-PREMIUM-Parfum-Korea-BTS-30ml-Premium-Parfum-Korea-BTS-Limited-Edition-30ml-i.296344657.23957425491",
    },
  ];
  items: any;

  getColorClass(status: string): string {
    return status === "Tersedia" ? "bg-green-500 text-white" : "bg-red-500 text-white";
  }
}

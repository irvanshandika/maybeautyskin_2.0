import { Component } from "@angular/core";
import { NavbarComponent } from "../../navbar/navbar.component";
import { FooterComponent } from "../../footer/footer.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-perawatan",
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: "./perawatan.component.html",
  styleUrl: "./perawatan.component.css",
})
export class PerawatanComponent {
  title = "Perawatan Dan Kecantikan";
  listPerawatan = [
    {
      images: "https://down-id.img.susercontent.com/file/id-11134207-7r98p-ln9mq5s2fg3l61",
      name: "100% ORIGINAL PIXY PAKET LIPTINT DAN BLUSH ON",
      alt: "100% ORIGINAL PIXY PAKET LIPTINT DAN BLUSH ON",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/100-ORIGINAL-PIXY-PAKET-LIPTINT-DAN-BLUSH-ON-i.296344657.22284530314?xptdk=954dfb9a-bfaf-4748-aef0-8bfe6740e12e",
    },
    {
      images: "https://down-id.img.susercontent.com/file/id-11134207-7r990-lm0hyv7bqxl852",
      name: "DAZZLE ME Holy Moly Volume Mascara | Eyelash Lengthening Hyper Curl Bulu Mata Maskara Makeup 18h Lash Lock",
      alt: "DAZZLE ME Holy Moly Volume Mascara | Eyelash Lengthening Hyper Curl Bulu Mata Maskara Makeup 18h Lash Lock",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/DAZZLE-ME-Holy-Moly-Volume-Mascara-Eyelash-Lengthening-Hyper-Curl-Bulu-Mata-Maskara-Makeup-18h-Lash-Lock-i.296344657.23681275276",
    },
    {
      images: "https://down-id.img.susercontent.com/file/3ee20c0e83883e9b53227da81ec44b1a",
      name: "SCARLETT WHITENING LENGKAP | Serum | Lotion | Scrub | Scarlett Happy",
      alt: "SCARLETT WHITENING LENGKAP | Serum | Lotion | Scrub | Scarlett Happy",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/SCARLETT-WHITENING-LENGKAP-serum-lotion-scrub-scarlett-happy-i.296344657.20631453854?sp_atk=77fb4e0b-5dea-4ff7-a8b0-b1b4a2a504c6",
    },
    {
      images: "https://down-id.img.susercontent.com/file/id-11134207-7r98y-ln9kae6m45459c",
      name: "Eyeliner Wardah Hi-Black Waterproof Eyepert Optimum Liner",
      alt: "Eyeliner Wardah Hi-Black Waterproof Eyepert Optimum Liner",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/Eyeliner-Wardah-Hi-Black-Waterproof-Eyepert-optimum-liner-i.296344657.22684525987?sp_atk=fbe5fec0-1161-44dd-a148-cd3fa15c6558&xptdk=fbe5fec0-1161-44dd-a148-cd3fa15c6558",
    },
    {
      images: "https://down-id.img.susercontent.com/file/0327377d8911360e577133a379d7cab0",
      name: "[TERMURAH] Saffron Facemist Glowing Saffron Rose Water Saffron Toner Saffron Spray",
      alt: "[TERMURAH] Saffron Facemist Glowing Saffron Rose Water Saffron Toner Saffron Spray",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/-TERMURAH-Saffron-Facemist-Glowing-Saffron-Rose-Water-Saffron-Toner-Saffron-Spray-i.296344657.6054703980?sp_atk=0b0e7d91-2868-4ccc-a81c-224c36fdec9b&xptdk=0b0e7d91-2868-4ccc-a81c-224c36fdec9b",
    },
    {
      images: "https://down-id.img.susercontent.com/file/id-11134207-7r992-lnh7uy1v5ym411",
      name: "Wardah UV Shield Essential Sunscreen Gel SPF 30 PA +++ 40 ml - Sunscreen Wajah 0% Alkohol - Tekstur Ringan - Tidak Lengket",
      alt: "Wardah UV Shield Essential Sunscreen Gel SPF 30 PA +++ 40 ml - Sunscreen Wajah 0% Alkohol - Tekstur Ringan - Tidak Lengket",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/Wardah-UV-Shield-Essential-Sunscreen-Gel-SPF-30-PA-40-ml-Sunscreen-Wajah-0-Alkohol-Tekstur-Ringan-Tidak-Lengket-i.296344657.18284864249?sp_atk=28db67e8-5676-41ef-a357-3bb2cab57d00&xptdk=28db67e8-5676-41ef-a357-3bb2cab57d00",
    },
    {
      images: "https://down-id.img.susercontent.com/file/sg-11134201-22100-7ru8utweccivdb",
      name: "Paket Saffron",
      alt: "Paket Saffron",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/paket-saffron-i.296344657.16687054304?sp_atk=2f48930a-0f9b-44de-9b17-5193cbacb082&xptdk=2f48930a-0f9b-44de-9b17-5193cbacb082",
    },
    {
      images: "https://down-id.img.susercontent.com/file/5869b045eef9521023b59ea22289aa1f",
      name: "[BPOM] Hair Treatment Buah / Hair mask / Hair Creambath / Hair Spa",
      alt: "[BPOM] Hair Treatment Buah / Hair mask / Hair Creambath / Hair Spa",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/-BPOM-Hair-Treatment-Buah-Hair-mask-Hair-Creambath-Hair-Spa-i.296344657.7279718435?sp_atk=65b18124-5923-4ddb-bf20-733204ca5432&xptdk=65b18124-5923-4ddb-bf20-733204ca5432",
    },
    {
      images: "https://down-id.img.susercontent.com/file/b54d581c3b7a8f41b6c5c2b11ddfd08a",
      name: "Forever Electric Facial Cleansing Brush",
      alt: "Forever Electric Facial Cleansing Brush",
      statusProduk: "Tersedia",
      url: "https://shopee.co.id/Forever-Electric-Facial-Cleansing-Brush-i.296344657.3646607362?sp_atk=5b09872f-8fef-4270-a80d-bb7f62b5e523&xptdk=5b09872f-8fef-4270-a80d-bb7f62b5e523",
    },
  ];

  getColorClass(status: string): string {
    return status === "Tersedia" ? "bg-green-500 text-white" : "bg-red-500 text-white";
  }
}

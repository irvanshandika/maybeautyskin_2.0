import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ErrorpagesComponent } from "./errorpages/errorpages.component";
import { PerawatanComponent } from "./perawatan/perawatan.component";
import { ProdukparfumComponent } from "./produk/produkparfum/produkparfum.component";
import { ProdukpakaianComponent } from "./produk/produkpakaian/produkpakaian.component";
import { ProduktasComponent } from "./produk/produktas/produktas.component";

export const routes: Routes = [
  {
    path: "perawatan",
    component: PerawatanComponent,
  },
  {
    path: "tas",
    component: ProduktasComponent,
  },
  {
    path: "parfum",
    component: ProdukparfumComponent,
  },
  {
    path: "pakaian",
    component: ProdukpakaianComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "**",
    component: ErrorpagesComponent,
  },
];

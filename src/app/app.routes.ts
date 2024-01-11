import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ErrorpagesComponent } from "./errorpages/errorpages.component";
import { ProdukparfumComponent } from "./produk/produkparfum/produkparfum.component";
import { ProdukpakaianComponent } from "./produk/produkpakaian/produkpakaian.component";
import { ProduktasComponent } from "./produk/produktas/produktas.component";
import { PerawatanComponent } from "./produk/perawatan/perawatan.component";

export const routes: Routes = [
  {
    path: "pages/perawatan",
    component: PerawatanComponent,
  },
  {
    path: "pages/tas",
    component: ProduktasComponent,
  },
  {
    path: "pages/parfum",
    component: ProdukparfumComponent,
  },
  {
    path: "pages/pakaian",
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

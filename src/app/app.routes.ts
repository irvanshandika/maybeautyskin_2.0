import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ErrorpagesComponent } from "./errorpages/errorpages.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "**",
    component: ErrorpagesComponent,
  }
];

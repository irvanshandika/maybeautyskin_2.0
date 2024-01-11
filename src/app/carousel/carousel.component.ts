import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-carousel",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.css",
})
export class CarouselComponent {
  title = "May Beauty Skin";
  carouselItems = [
    {
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lmr9pwcelg6cb3",
      alt: "Parfum",
    },
    {
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r98v-ln5mna8hktljaa",
      alt: "Baju",
    },
    {
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r98w-lmisz5afs8x041",
      alt: "Tas",
    },
    {
      imageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7r98y-lnojnt9um77l33",
      alt: "Celana Joger",
    },
    {
      imageUrl: "https://down-id.img.susercontent.com/file/5869b045eef9521023b59ea22289aa1f",
      alt: "Hair Treatment",
    },
  ];
}

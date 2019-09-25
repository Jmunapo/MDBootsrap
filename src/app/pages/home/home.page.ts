import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"]
})
export class HomePage implements OnInit {
  images = [1, 2, 3].map(
    () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  );
  currentRate = 8;

  constructor() {}

  ngOnInit() {}
}

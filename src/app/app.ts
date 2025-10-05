import { Component, inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private readonly title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle('Angular Vite Starter');
  }
}

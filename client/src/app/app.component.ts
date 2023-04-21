import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
  }

  ngOnInit(): void {
    this.router.navigate(['public', 'generator'], {relativeTo: this.route});
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, tap } from 'rxjs/operators';
@Component({
  selector: 'app-talk',
  templateUrl: './talk.component.html',
  styleUrls: ['./talk.component.css']
})
export class TalkComponent implements OnInit {
  pageId$ = this.activeRoute.params.pipe(
    pluck('id'),
  );
  constructor(private readonly activeRoute: ActivatedRoute, private router: Router) {


  }

  ngOnInit(): void {
    this.activeRoute.url.subscribe(console.error)
    console.error(this.activeRoute.snapshot)
  }

}

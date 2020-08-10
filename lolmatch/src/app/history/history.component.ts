import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SummaryComponent } from "src/app/summary/summary.component"

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  name : String
  summaries: String[] = [
    "a","b","c"
  ]

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.name = params['name']);
  }

}

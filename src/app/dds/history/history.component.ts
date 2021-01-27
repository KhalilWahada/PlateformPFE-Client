import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DdsService } from 'src/app/_services/dds.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ddsService: DdsService) { }

  ngOnInit(): void {
  }

}

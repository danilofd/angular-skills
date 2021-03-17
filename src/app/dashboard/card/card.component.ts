import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private httpClient: HttpClient, private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  onLike(card: any){
    card.likes = card.likes+1;
    this.httpClient.put('/api/skills', card).subscribe(() => {
    });
  }

  onShare(card: any){
    let url = 'https://www.linkedin.com/in/danilofd/';
    window.open(url, '_blank');
  }

}

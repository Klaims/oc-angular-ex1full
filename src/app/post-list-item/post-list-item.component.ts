import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDate: Date; // On récupère les données d'un post grâce au décorateur input

  constructor() {}

  ngOnInit() {
  }

  incrLoveIts() { // Ajoute un LoveIt

    this.postLoveIts++;
  }

  decrLoveIts() { // Retire un LoveIt

    this.postLoveIts--;
  }
}

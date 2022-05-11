import { Component, OnInit } from '@angular/core';
// En +
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  // En +
  public folder: string;

  // constructor() { }
  // Remplacé par :
  constructor(private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    // En + :
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

  }

}

// Ou CC du Code entier de FOLDER.PAGE.TS de la version SIDE


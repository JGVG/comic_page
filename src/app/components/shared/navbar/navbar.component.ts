import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../../services/heroes.services";
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router, _heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    this._router.navigate( ['/heroes', termino] );
  }

}

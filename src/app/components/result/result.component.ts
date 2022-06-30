import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from "../../services/heroes.services"
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
})
export class ResultComponent{

  heroesArr:Heroe[] = [];

  constructor(private activatedRoute: ActivatedRoute, _heroesService:HeroesService, private _router:Router) { 

    this.activatedRoute.params.subscribe( params =>  {
      this.heroesArr = _heroesService.buscarHeroes(params['termino']);
    });

   }

   verHeroe(termino:string){
    this._router.navigate( ['/heroe', termino] );
  }


}

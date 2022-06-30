import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from "../../services/heroes.services"


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
  
})
export class HeroeComponent {

  heroe:Heroe = {
    nombre: "",
    bio: "",
    img: "",
    aparicion: "",
    casa: "",
  };

  constructor(private activatedRoute: ActivatedRoute, _heroesService:HeroesService) { 

    this.activatedRoute.params.subscribe( params =>  {
      this.heroe = _heroesService.getHeroe(params['id']);
    })

   }



}

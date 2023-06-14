import { Component } from '@angular/core';
import { ApiServiceService } from '../../shared/api-service.service';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  pokemonArray = [];
  api_obj?: object;
  objJson: string = '';
  pokemon_number = 1;

  constructor(private apiServe: ApiServiceService, private http: HttpClient) {}

  ngOnInit() {}

  getPokemon(value: any ) {

    this.apiServe.getPokemon(this.pokemon_number, value).subscribe((response) => {
      // this.objJson = JSON.stringify(response);
      this.objJson = response;

      /* const tempObj = JSON.parse(this.objJson);
      Object.keys(response).forEach((k) => {
        response[k] = tempObj[k];
      });
      console.log(tempObj); */
    });
  }

  getRawPokemon(value: any){
    this.pokemon_number = value;

    this.apiServe.getRawPokemon(value).subscribe((response) => {
      this.api_obj = response;
    });

    console.log(value); 
  }

  setFormatter(value: any) {
    console.log(value)
  }
}

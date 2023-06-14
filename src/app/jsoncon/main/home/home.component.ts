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

  constructor(private apiServe: ApiServiceService, private http: HttpClient) {}

  ngOnInit() {}

  getPokemon(value: any) {
    this.apiServe.getRawPokemon(value.value).subscribe((response) => {
      this.api_obj = response;
    });
    this.apiServe.getPokemon(value.value).subscribe((response) => {
      // this.objJson = JSON.stringify(response);
      this.objJson = response;

      /* const tempObj = JSON.parse(this.objJson);
      Object.keys(response).forEach((k) => {
        response[k] = tempObj[k];
      });
      console.log(tempObj); */
    });
  }

  setFormatter() {
    throw new Error('Method not implemented.');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  pokemon: any;
  formatter: string = "this.processApi"

  url : string = "https://pokeapi.co/api/v2/pokemon/"

  constructor(private http: HttpClient) { }


  getRawPokemon(pokemonId: number, ): Observable<any>{
    return this.http.get<any>(this.url + pokemonId);
  }

  getPokemon(pokemonId: number, selectvalue:number): Observable<any>{

    /* return this.http.get<any>(this.url + pokemonId).pipe(
      map(response => this.processApi(response))
    ); */
      console.log(pokemonId, selectvalue)
    if(selectvalue == 1 ){
      return this.http.get<any>(this.url + pokemonId).pipe(
        map(response => this.processApi(response))
      );
      
     } else if(selectvalue == 2 ){
      return this.http.get<any>(this.url + pokemonId).pipe(
        map(response => this.processApi2(response))
      );
      
     } else if(selectvalue == 3){
      return this.http.get<any>(this.url + pokemonId).pipe(
        map(response => this.processApi3(response))
      );
     } else {
      return this.http.get<any>(this.url + pokemonId).pipe(
        map(response => this.processApi4(response))
      );
     }
  }

  getPokemonList(limit : number, offset : number): Observable<any>{
    return this.http.get<any>(`${this.url}?limit=${limit}&offset=${offset}`).pipe(
      map(response => this.processList(response))
    );
  }

  private processApi(response: any){
    return {
      id: response.id,
      name: response.name,
      types: response.types,
      height: response.height,
      weight: response.weight,
      stats: response.stats,
      abilities: response.abilities,
      url: ''
    };
  }

  private processApi2(response: any){
    return {
      poke_id: response.id,
      poke_name: response.name,
      types: response.types,
      height: response.height,
      weight: response.weight,
      stats: response.stats,
      abilities: response.abilities,
      url: ''
    };
  }
  private processApi3(response: any){
    return {
      monster_id: response.id,
      monster_name: response.name,
      types: response.types,
      height: response.height,
      weight: response.weight,
      stats: response.stats,
      abilities: response.abilities,
      url: ''
    };
  }
  private processApi4(response: any){
    return {
      id: response.id,
      name: response.name,
      types: response.types,
      height: response.height,
      weight: response.weight,
      stats: response.stats,
      abilities: response.abilities,
      url: ''
    };
  }

  private processList(response: any){
    return {
      count: response.count,
      results: response.results.map((poke: any) => (<any>{
        name: poke.name,
        url: poke.url
      }))
    }
  }
}

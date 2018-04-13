import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {environment} from '../../environments/environment'
import {ProdInv} from '../models/prod-inv';

const API_URL= environment.apiUrl;
let headers = new Headers({'Access-Control-Allow-Origin':  '*'});
let options = new RequestOptions({headers:headers});

@Injectable()
export class ProdInvService {

  prodInv : ProdInv[];
  

  constructor(private http: Http) { }

    public getProductByName(name: string): Observable<ProdInv[]> {
    
    return Observable.forkJoin([
      this.http.get(API_URL + '/products/'+name, options).map(res=>res.json()),
      this.http.get(API_URL+'/inventory/'+name, options).map(resp =>resp.json())  
    ]).map(
      (data: ProdInv[]) => {
        let product : any = data[0];
        let inventory : any = data[1];

        if(product.product.length > 0) {
          product.product.forEach(function(element,index){
            element.inventory = inventory.inventory[index].inventory;
          })
          
          return product.product;
        }
        else {
          product.product = [{error:'Product not found'}];

          return product.product;
        }
        
      }
    ).catch(this.handleError) 
    
  }
  public loadData() {
    
  }

  public getInventory(): Observable<ProdInv[]> {
    return this.http.get(API_URL + '/inventory', options).map(
      response => {
        const inv = response.json();
        console.log(inv);
        return inv.inventory.map((inv) => new ProdInv(inv))
      }
    )
  }

  public getAllProductsWithInventory() : Observable<ProdInv[]> {
    return Observable.forkJoin(
      [
        this.http.get(API_URL+'./products',options).map(res => res.json()),
        this.http.get(API_URL + '/inventory',options).map(resp => resp.json())
      ]
    ).map(
      (data : ProdInv[]) => {
        let products :any= data[0];
        
        let inventory : any = data[1].inventory;
        let inv : number[] = [];
        for(var i=0; i< inventory.length;i++)
        {
          inv.push(inventory[i].inventory);
        }
        
          products.forEach(function(element,index) {
            element.inventory = inv[index];
          });
        
        return products;
      }
    ).catch(this.handleError)
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
}
}

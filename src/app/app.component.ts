import { Component, OnInit } from '@angular/core';
import {ProdInv} from './models/prod-inv';
import {ProdInvService} from './service/prod-inv.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [ProdInvService]
})
export class AppComponent {
  /*
  prodInv : ProdInv[];
  param: {};
  constructor(private prodInvService : ProdInvService, private router: ActivatedRoute){

  }
  public ngOnInit(){
   
    this.prodInvService.getAllProductsWithInventory().subscribe(
      prodInv =>{
        this.prodInv = prodInv;
        console.log(this.prodInv);
      }
    )
    
    this.router.params.subscribe((params: Params) =>{
      this.param = params['prodName'];
      console.log("params:" + params.toString());
    })
    //console.log(prodName);
    
  }

  getAllProducts() {
    this.prodInvService.getAllProductsWithInventory().subscribe(
      prodInv =>{
        this.prodInv = prodInv;
        console.log(this.prodInv);
      }
    )
  }

  getProductByName(prodName) {
    //var prodName = this.router.snapshot.params.prodName;
    this.prodInvService.getProductByName(prodName).subscribe(
      prodInv => {
        this.prodInv = prodInv;
        console.log(this.prodInv);
      }
    )
  }
  */
}

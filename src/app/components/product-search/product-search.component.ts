import { Component, OnInit } from '@angular/core';
import {ProdInv, Prod} from '../../models/prod-inv';
import {ProdInvService} from '../../service/prod-inv.service';
import {ActivatedRoute, Params} from '@angular/router';



var ins = {} as Prod;

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css'],
  providers: [ProdInvService]
})
export class ProductSearchComponent implements OnInit {
  public productInv : ProdInv = new ProdInv(ins);
  prodInv :  ProdInv[];
  clickedGetAll: boolean = false;
  constructor(private prodInvService : ProdInvService) { }

  ngOnInit () {

  }




  getAllProducts()  {
    //this.clickedGetAll = true;
     this.prodInvService.getAllProductsWithInventory().subscribe(
      prodInvToo =>{
        console.log(prodInvToo);
        this.prodInv = prodInvToo;
        console.log(this.prodInv);
      }
    )
  }

  getProductByName(prodName) {
    //prodName = this.activatedRoute.snapshot.params.name;
    //this.clickedGetAll = true;
    this.prodInvService.getProductByName(prodName).subscribe(
      prodInvTo => {
        this.prodInv = prodInvTo;
        console.log(this.prodInv);
      }
      
    )
  }
  

}

console.log(this.productInv);
console.log(ins);
console.log(this.prodInv);
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpRequestService } from 'src/app/common-services/http-request.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private http:HttpRequestService,private route: ActivatedRoute,
              private router:Router
  ) { }
  selectedProduct: any=[];
  products:any = [];

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    console.log('productId',productId)
      if (productId) {
        this.getProductDetails(productId);
        console.log(productId)
        
      }
    }

   getProductDetails(productId:any) {
   
    this.http.getProduct(productId).subscribe((product: any) => {
      this.selectedProduct = product;
      console.log('product',product)
     
    });
 }
 
 
productList(){
 this.router.navigateByUrl('/products')
}

}

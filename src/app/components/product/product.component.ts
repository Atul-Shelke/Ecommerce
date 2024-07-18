import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpRequestService } from 'src/app/common-services/http-request.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http: HttpRequestService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }
  products: any = [];
  cart: any = [];
  selectedProduct: any = [];
  categories: string[] = [];
  selectedCategory: string | null = null;
  categoryName: any = 'all';
  searchTerm: string = '';
  filteredCategories: string[] = [];
  ngOnInit(): void {

    this.loadProducts();
    this.fetchCategories();


  }

  //get the list of Product
  loadProducts() {
    this.http.getProducts().subscribe((products: any) => {
      this.products = products;
    });
  }

  //Product added to the cart
  addToCart(product: any) {
    this.cart.push(product);
    console.log('product', this.cart);
    this.toastr.success('Product Added to the cart');

  }

  //get all categories
  fetchCategories() {
    this.http.getCategories().subscribe((categories: string[]) => {
      this.categories = categories;
      this.filteredCategories = categories;

    });
  }
  //  filter data by category
  filterByCategory() {
    this.selectedCategory = this.categoryName;
    console.log('selected', this.selectedCategory)
    if (this.categoryName === 'all') {
      this.fetchCategories();
      this.loadProducts();
    } else {
      this.http.getProductsByCategory(this.categoryName).subscribe((products: any) => {
        this.products = products;
      });
    }
  }

}







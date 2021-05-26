import {Pipe, PipeTransform} from '@angular/core';
import {Product, ProductService} from './catalog/catalog.service';
import {CatalogComponent} from './catalog/catalog.component';

@Pipe({
  name: 'searchProducts'
})
export class SearchPipe implements PipeTransform{
  transform(products: Product[], search = ''): Product[] {
    if (!search.trim()) {

      // console.log('filter');
      return products;
    }
    return products.filter(product => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
  }

}

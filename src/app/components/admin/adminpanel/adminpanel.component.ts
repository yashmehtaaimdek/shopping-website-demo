import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../service/product-model';
import { AdminpanelService } from '../../../service/admin/adminpanel.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {
  products : ProductModel;
  constructor(private adminpanelService : AdminpanelService) { }

  ngOnInit(): void {
  }

}

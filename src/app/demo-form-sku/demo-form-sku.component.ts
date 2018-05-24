import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {
  myForm: FormGroup;
  sku: AbstractControl;
  productName: string;

  constructor(fbuilder: FormBuilder) {
    this.myForm = fbuilder.group({
      'sku': ['abc', Validators.compose([Validators.required, this.skuValidator])],
      'productName': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed to: ', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to: ', form);
    });
  }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log('Form onSubmit called. Value submitted: ', value['sku']);
  }

  skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match('123')) {
      return { invalidSku: true };
    }
  }
}

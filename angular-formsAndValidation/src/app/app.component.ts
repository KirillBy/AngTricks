import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  appState = 'on';
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required, MyValidators.restrictedEmails], [MyValidators.uniqEmail]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit(): void{
    if (this.form.valid){
      console.log('Form Submitted: ', this.form);
      const formData = {...this.form.value};
      console.log('FormData Submitted: ', formData);
      this.form.reset();
    }
  }
  setCapital(): void {
    const cityMap = {
      ru: 'Moskow',
      ua: 'Kiev',
      by: 'Minsk'
    };
    const cityKey = this.form.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.form.patchValue({
      address: {city}
    });
  }
  addSkill(): void{
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
  }
  handleChange(): void {
    console.log(this.appState);
  }
}

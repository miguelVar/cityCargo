import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import decode from 'jwt-decode';
import { LoginService } from 'src/app/services/login.service';

let cargando = false;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  condition: number = 0;
  tokenPayload;

  // constructor(private loginService: LoginService, private toastr: ToastrService, private router: Router, private fb: FormBuilder)

  constructor(private loginService: LoginService, private router: Router, private fb: FormBuilder) {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.fb.group({

    });
  }

  ngOnInit() {
    cargando = true;
  }

  login(form?: NgForm) {
    cargando = false;
    console.log("datossss",form.value);
    this.loginService.authentication(form.value)
      .subscribe((data) => {
        console.log(data);
        localStorage.setItem('usuario', data['token']);
        this.router.navigate(['home']);
        this.tokenPayload = decode(data['token']);
        this.loginService.validarAdmin(this.tokenPayload.id_usuario)
        .subscribe(res => {
          console.log("--------->",res[0].ROL_ID_ROL);
          localStorage.setItem('rol',res[0].ROL_ID_ROL);
          const tokenid = localStorage.getItem('rol');
        })
      });
  }

  yaCargo(){
    if(cargando == false){
      return false;
    }else{
      return true;
    }
  }

}

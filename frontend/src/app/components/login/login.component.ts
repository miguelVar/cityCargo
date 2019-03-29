import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import decode from 'jwt-decode';
import { LoginService } from 'src/app/services/login.service';

let cargando = false;
declare var M:any;

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
        console.log('erorr',data);
        if(data=='Correo incorrecto' || data =='Correo o contraseña no son correctos'){
          M.toast({
            html: `<div class="alert alert-danger" style="position: fixed; top: 100px; right: 50px; z-index: 7000;" role="alert">
                  <h4 class="alert-heading">DATOS INCORRECTOS!!</h4>
                  <p>El correo o la contraseña son incorrectos</p>
                  <hr>
              </div>`});

              cargando=true;
              
        }else{
          localStorage.setItem('usuario', data['token']);
        this.router.navigate(['home']);

        }
        
        // this.tokenPayload = decode(data['token']);
        // this.loginService.validarAdmin(this.tokenPayload.id_usuario)
        // .subscribe(res => {
        //   console.log("--------->",res[0].ROL_ID_ROL);
        //   localStorage.setItem('rol',res[0].ROL_ID_ROL);
        //   const tokenid = localStorage.getItem('rol');
        // })
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

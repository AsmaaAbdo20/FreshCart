"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[94],{6094:(x,c,i)=>{i.r(c),i.d(c,{ForgotpasswordComponent:()=>C});var p=i(6814),r=i(95),t=i(4769),u=i(9862);let l=(()=>{class o{constructor(e){this._HttpClient=e,this.baseUrl="https://ecommerce.routemisr.com/api/v1/auth/"}forgotPassword(e){return this._HttpClient.post(this.baseUrl+"forgotPasswords",e)}resetCode(e){return this._HttpClient.post(this.baseUrl+"verifyResetCode",e)}resetPassword(e){return this._HttpClient.put(this.baseUrl+"resetPassword",e)}static#t=this.\u0275fac=function(s){return new(s||o)(t.LFG(u.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var m=i(1120);function g(o,a){if(1&o&&(t.TgZ(0,"p",8),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.userMsg)}}function f(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"section",2)(1,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.forgotPassword())}),t.TgZ(2,"label",4),t._uU(3,"please enter your login email"),t.qZA(),t._UZ(4,"input",5),t.TgZ(5,"button",6),t._uU(6,"Verfiy"),t.qZA(),t.YNc(7,g,2,1,"p",7),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.forgotForm),t.xp6(6),t.Q6J("ngIf",e.userMsg)}}function d(o,a){if(1&o&&(t.TgZ(0,"p",8),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.userMsg)}}function w(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"section",2)(1,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.resetCode())}),t.TgZ(2,"label",9),t._uU(3,"please enter your verification code"),t.qZA(),t._UZ(4,"input",10),t.TgZ(5,"button",6),t._uU(6,"Verfiy"),t.qZA(),t.YNc(7,d,2,1,"p",7),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.resetCodeForm),t.xp6(6),t.Q6J("ngIf",e.userMsg)}}function h(o,a){if(1&o&&(t.TgZ(0,"p",8),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.userMsg)}}function _(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"section",2)(1,"form",3),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.newPassword())}),t.TgZ(2,"label",11),t._uU(3,"reset your account password"),t.qZA(),t._UZ(4,"input",12),t.TgZ(5,"button",6),t._uU(6,"reset password"),t.qZA(),t.YNc(7,h,2,1,"p",7),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.resetPassword),t.xp6(6),t.Q6J("ngIf",e.userMsg)}}let C=(()=>{class o{constructor(e,s){this._ForgotpassService=e,this._Router=s,this.step1=!0,this.step2=!1,this.step3=!1,this.email="",this.userMsg="",this.forgotForm=new r.cw({email:new r.NI("")}),this.resetCodeForm=new r.cw({resetCode:new r.NI("")}),this.resetPassword=new r.cw({newPassword:new r.NI("")})}forgotPassword(){let e=this.forgotForm.value;this.email=e.email,this._ForgotpassService.forgotPassword(e).subscribe({next:s=>{this.userMsg=s.message,this.step1=!1,this.step2=!0},error:s=>{console.log(s,"From forgotPasswor Function"),this.userMsg=s.error.message}})}resetCode(){this._ForgotpassService.resetCode(this.resetCodeForm.value).subscribe({next:s=>{this.userMsg=s.status,this.step2=!1,this.step3=!0},error:s=>{console.log(s,"From resetCode Function"),this.userMsg=s.error.message}})}newPassword(){let e=this.resetPassword.value;console.log(e),e.email=this.email,console.log(e.email),this._ForgotpassService.resetPassword(e).subscribe({next:s=>{this.userMsg="password changed seccessfuly",s.token&&(localStorage.setItem("eToken",s.token),this._Router.navigate(["/home"]))},error:s=>{console.log(s,"From newPassword Function"),this.userMsg=s.error.message}})}static#t=this.\u0275fac=function(s){return new(s||o)(t.Y36(l),t.Y36(m.F0))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-forgotpassword"]],standalone:!0,features:[t.jDz],decls:4,vars:3,consts:[[1,"container"],["class","py-5",4,"ngIf"],[1,"py-5"],[3,"formGroup","ngSubmit"],["for","email"],["formControlName","email","placeholder","Email","type","email","id","email",1,"form-control","my-3","p-3"],[1,"py-2","btn","btn-outline-success"],["class","alert alert-danger w-75 mx-auto p-1 mb-0",4,"ngIf"],[1,"alert","alert-danger","w-75","mx-auto","p-1","mb-0"],["for","resetCode"],["formControlName","resetCode","placeholder","resetCode","type","text","id","resetCode",1,"form-control","my-3","p-3"],["for","newPasswor"],["formControlName","newPassword","placeholder","new password","type","password","id","newPassword",1,"form-control","my-3","p-3"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0),t.YNc(1,f,8,2,"section",1),t.YNc(2,w,8,2,"section",1),t.YNc(3,_,8,2,"section",1),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngIf",n.step1),t.xp6(1),t.Q6J("ngIf",n.step2),t.xp6(1),t.Q6J("ngIf",n.step3))},dependencies:[p.ez,p.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u]})}return o})()}}]);
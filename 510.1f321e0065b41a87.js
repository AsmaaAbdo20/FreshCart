"use strict";(self.webpackChunkfreshCart=self.webpackChunkfreshCart||[]).push([[510],{9510:(g,u,r)=>{r.r(u),r.d(u,{ProductsComponent:()=>f});var n=r(6814),d=r(1120),p=r(8129),t=r(4769),_=r(0),c=r(6286),s=r(2425);const l=function(i){return["/productdetails",i]};function m(i,C){if(1&i){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"header",6),t._UZ(3,"img",7),t.TgZ(4,"h4",8),t._uU(5),t.qZA(),t.TgZ(6,"h3",9),t._uU(7),t.ALo(8,"cuttext"),t.qZA(),t.TgZ(9,"div",10)(10,"span",11),t._uU(11),t.qZA(),t.TgZ(12,"span"),t._UZ(13,"i",12),t._uU(14),t.qZA()()(),t.TgZ(15,"footer",13)(16,"button",14,15),t.NdJ("click",function(){const h=t.CHM(e).$implicit,E=t.MAs(17),P=t.oxw(2);return t.KtG(P.addProduct(h._id,E))}),t._uU(18,"+ Add"),t.qZA(),t._UZ(19,"i",16),t.qZA()()()}if(2&i){const e=C.$implicit;t.xp6(2),t.Q6J("routerLink",t.VKq(11,l,e._id)),t.xp6(1),t.Q6J("src",e.imageCover,t.LSH)("alt",e.title)("title",e.title),t.xp6(2),t.Oqu(e.category.name),t.xp6(2),t.Oqu(t.xi3(8,8,e.title,3)),t.xp6(4),t.hij("",e.price," EGP"),t.xp6(3),t.hij("",e.ratingsAverage," ")}}function v(i,C){if(1&i&&(t.TgZ(0,"section",1)(1,"div",2),t.YNc(2,m,20,13,"div",3),t.qZA()()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngForOf",e.products)}}let f=(()=>{class i{constructor(e,o,a,h){this._ProductService=e,this._CartService=o,this._ToastrService=a,this._Renderer2=h,this.products=[]}ngOnInit(){this._ProductService.getProducts().subscribe({next:e=>{console.log(e),this.products=e.data},error:e=>{console.log(e)}})}addProduct(e,o){this._Renderer2.setStyle(o,"visibility","hidden"),this._CartService.addToCart(e).subscribe({next:a=>{this._ToastrService.success(a.message),this._Renderer2.removeStyle(o,"visibility"),this._CartService.cartNumber.next(a.numOfCartItems)},error:a=>{this._Renderer2.removeStyle(o,"visibility")}})}static#t=this.\u0275fac=function(o){return new(o||i)(t.Y36(_.M),t.Y36(c.N),t.Y36(s._W),t.Y36(t.Qsj))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-products"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","products","class","py-4",4,"ngIf"],[1,"py-4"],[1,"row","g-4"],["class","col-sm-6 col-md-3",4,"ngFor","ngForOf"],[1,"col-sm-6","col-md-3"],[1,"product"],["role","button",3,"routerLink"],[1,"w-100",3,"src","alt","title"],[1,"h6","text-main"],[1,"h6"],[1,"d-flex","align-items-center","justify-content-between"],[1,"small"],[1,"fas","fa-star","rating-color"],[1,"text-center","py-3"],[1,"main-btn","w-75","me-1",3,"click"],["btnAdd",""],[1,"fa-solid","fa-heart","fa-2xl"]],template:function(o,a){1&o&&t.YNc(0,v,3,1,"section",0),2&o&&t.Q6J("ngIf",a.products.length>0)},dependencies:[n.ez,n.sg,n.O5,d.rH,p.r]})}return i})()},6286:(g,u,r)=>{r.d(u,{N:()=>t});var n=r(5619),d=r(4769),p=r(9862);let t=(()=>{class _{constructor(s){this._HttpClient=s,this.baseUrl="https://ecommerce.routemisr.com/api/v1/",this.cartNumber=new n.X(0)}addToCart(s){return this._HttpClient.post(this.baseUrl+"cart",{productId:s})}getCartUser(){return this._HttpClient.get(this.baseUrl+"cart")}removeCartItem(s){return this._HttpClient.delete(this.baseUrl+`cart/${s}`)}updateCartCount(s,l){return this._HttpClient.put(this.baseUrl+`cart/${s}`,{count:l})}clearCart(){return this._HttpClient.delete(this.baseUrl+"cart")}checkOut(s,l){return this._HttpClient.post(this.baseUrl+`orders/checkout-session/${s}?url=https://github.com/AsmaaAbdo20/FreshCart`,{shippingAddress:l})}static#t=this.\u0275fac=function(l){return new(l||_)(d.LFG(p.eN))};static#e=this.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},0:(g,u,r)=>{r.d(u,{M:()=>p});var n=r(4769),d=r(9862);let p=(()=>{class t{constructor(c){this._HttpClient=c,this.baseUrls="https://ecommerce.routemisr.com/api/v1/"}getProducts(){return this._HttpClient.get(this.baseUrls+"products")}getCategories(){return this._HttpClient.get(this.baseUrls+"categories")}getProductDetails(c){return this._HttpClient.get(this.baseUrls+`products/${c}`)}getAllSpecificSubCategory(c){return this._HttpClient.get(this.baseUrls+`categories/${c}/subcategories`)}getAllBrands(){return this._HttpClient.get(this.baseUrls+"brands")}getSpecificBrands(c){return this._HttpClient.get(this.baseUrls+`brands/${c}`)}static#t=this.\u0275fac=function(s){return new(s||t)(n.LFG(d.eN))};static#e=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()}}]);
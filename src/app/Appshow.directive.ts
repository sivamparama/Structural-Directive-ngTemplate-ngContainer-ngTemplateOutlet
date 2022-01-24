import { Directive, Input,TemplateRef,ViewContainerRef } from "@angular/core";





@Directive({
  selector:'[show]',
})
export class Appshow{
  rendered = false;
  @Input()set show (value){
   if(value && !this.rendered){
    this.container.createEmbeddedView(this.template);
    this.rendered=true;
   }else if(!value && this.rendered){
     this.container.clear();
     this.rendered=false;
   }
  }
  constructor(public template:TemplateRef<any>,public container:ViewContainerRef){

  }

}
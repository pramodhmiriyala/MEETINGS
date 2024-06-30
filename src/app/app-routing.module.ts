import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { AppComponent } from './app.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';

const routes: Routes = [

 //{path:'content',component:ContentComponent},
 //{path:'tempp',component:Template1Component},
  
 {
  path: 'temp1',
  component:Template1Component,
  children: [
    { path: 'content', component:ContentComponent },
   
  ]
},
{
  path: 'temp2',
  component:Template2Component,
  children: [
    { path: 'content', component:ContentComponent },
   
  ]
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

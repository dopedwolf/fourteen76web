/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../../assets/app/subscribe/subscribeElement.component';
import * as i2 from '@angular/forms';
import * as i3 from '../../../../../assets/app/subscribe/email.service';
import * as i4 from '@angular/common';
const styles_SubscribeElement:any[] = ([] as any[]);
export const RenderType_SubscribeElement:i0.RendererType2 = i0.ɵcrt({encapsulation:2,
    styles:styles_SubscribeElement,data:{}});
export function View_SubscribeElement_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵted(-1,(null as any),['\n  '])),(_l()(),i0.ɵeld(1,
      0,(null as any),(null as any),55,'div',[['class','subscribeElementContainer']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(3,0,(null as any),(null as any),
      6,'div',[['class','closePopup']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),(_l()(),i0.ɵeld(5,
      0,(null as any),(null as any),3,'button',[['type','button']],(null as any),[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        var _co:i1.SubscribeElement = _v.component;
        if (('click' === en)) {
          const pd_0:any = ((<any>_co.backClicked()) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),
      (_l()(),i0.ɵeld(7,0,(null as any),(null as any),0,'img',[['alt',''],['class',
          'navBarLogo hvr-buzz'],['src','/images/icons/closex.png']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['\n      '])),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(11,0,(null as any),
          (null as any),20,'form',[['novalidate','']],[[2,'ng-untouched',(null as any)],
              [2,'ng-touched',(null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',
                  (null as any)],[2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],
              [2,'ng-pending',(null as any)]],[[(null as any),'ngSubmit'],[(null as any),
              'submit'],[(null as any),'reset']],(_v,en,$event) => {
            var ad:boolean = true;
            var _co:i1.SubscribeElement = _v.component;
            if (('submit' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,13).onSubmit($event)) !== false);
              ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,13).onReset()) !== false);
              ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
              const pd_2:any = ((<any>_co.onSubmit(i0.ɵnov(_v,13))) !== false);
              ad = (pd_2 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(12,16384,(null as any),0,i2.ɵbf,
          ([] as any[]),(null as any),(null as any)),i0.ɵdid(13,16384,[['f',4]],0,
          i2.NgForm,[[8,(null as any)],[8,(null as any)]],(null as any),{ngSubmit:'ngSubmit'}),
      i0.ɵprd(2048,(null as any),i2.ControlContainer,(null as any),[i2.NgForm]),i0.ɵdid(15,
          16384,(null as any),0,i2.NgControlStatusGroup,[i2.ControlContainer],(null as any),
          (null as any)),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(17,0,(null as any),(null as any),1,'label',[['for','email']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['Sign up to receive our (infrequent) newsletter'])),(_l()(),
          i0.ɵted(-1,(null as any),['\n        '])),(_l()(),i0.ɵeld(20,0,(null as any),
          (null as any),7,'input',[['class','form-control'],['id','email'],['name',
              'email'],['ngModel',''],['required',''],['type','email']],[[8,'placeholder',
              0],[1,'required',0],[2,'ng-untouched',(null as any)],[2,'ng-touched',
              (null as any)],[2,'ng-pristine',(null as any)],[2,'ng-dirty',(null as any)],
              [2,'ng-valid',(null as any)],[2,'ng-invalid',(null as any)],[2,'ng-pending',
                  (null as any)]],[[(null as any),'input'],[(null as any),'blur'],
              [(null as any),'compositionstart'],[(null as any),'compositionend']],
          (_v,en,$event) => {
            var ad:boolean = true;
            if (('input' === en)) {
              const pd_0:any = ((<any>i0.ɵnov(_v,21)._handleInput($event.target.value)) !== false);
              ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
              const pd_1:any = ((<any>i0.ɵnov(_v,21).onTouched()) !== false);
              ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
              const pd_2:any = ((<any>i0.ɵnov(_v,21)._compositionStart()) !== false);
              ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
              const pd_3:any = ((<any>i0.ɵnov(_v,21)._compositionEnd($event.target.value)) !== false);
              ad = (pd_3 && ad);
            }
            return ad;
          },(null as any),(null as any))),i0.ɵdid(21,16384,(null as any),0,i2.DefaultValueAccessor,
          [i0.Renderer2,i0.ElementRef,[2,i2.COMPOSITION_BUFFER_MODE]],(null as any),
          (null as any)),i0.ɵdid(22,16384,(null as any),0,i2.RequiredValidator,([] as any[]),
          {required:[0,'required']},(null as any)),i0.ɵprd(1024,(null as any),i2.NG_VALIDATORS,
          (p0_0:any) => {
            return [p0_0];
          },[i2.RequiredValidator]),i0.ɵprd(1024,(null as any),i2.NG_VALUE_ACCESSOR,
          (p0_0:any) => {
            return [p0_0];
          },[i2.DefaultValueAccessor]),i0.ɵdid(25,671744,(null as any),0,i2.NgModel,
          [[2,i2.ControlContainer],[2,i2.NG_VALIDATORS],[8,(null as any)],[2,i2.NG_VALUE_ACCESSOR]],
          {name:[0,'name'],model:[1,'model']},(null as any)),i0.ɵprd(2048,(null as any),
          i2.NgControl,(null as any),[i2.NgModel]),i0.ɵdid(27,16384,(null as any),
          0,i2.NgControlStatus,[i2.NgControl],(null as any),(null as any)),(_l()(),
          i0.ɵted(-1,(null as any),['\n      '])),(_l()(),i0.ɵeld(29,0,(null as any),
          (null as any),1,'button',[['class','hvr-shrink'],['type','submit']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,
          (null as any),['SUBSCRIBE'])),(_l()(),i0.ɵted(-1,(null as any),['\n    '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵeld(33,0,(null as any),
          (null as any),22,'div',[['class','subfollowus']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n      '])),(_l()(),i0.ɵeld(35,0,(null as any),(null as any),1,'p',([] as any[]),
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i0.ɵted(-1,(null as any),['Follow Us'])),(_l()(),i0.ɵted(-1,(null as any),
          ['\n      '])),(_l()(),i0.ɵeld(38,0,(null as any),(null as any),16,'div',
          [['class','subsocial']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(40,0,(null as any),(null as any),3,'a',[['href','https://www.instagram.com/fourteen76/'],
              ['target','_blank']],(null as any),(null as any),(null as any),(null as any),
              (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n          '])),
      (_l()(),i0.ɵeld(42,0,(null as any),(null as any),0,'img',[['alt',''],['class',
          'hvr-shrink'],['src','/images/icons/instaw.png']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(45,0,(null as any),(null as any),3,'a',[['href','https://www.facebook.com/fourteen76/'],
              ['target','_blank']],(null as any),(null as any),(null as any),(null as any),
              (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n          '])),
      (_l()(),i0.ɵeld(47,0,(null as any),(null as any),0,'img',[['alt',''],['class',
          'hvr-shrink'],['src','/images/icons/facebookw.png']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n        '])),(_l()(),
          i0.ɵeld(50,0,(null as any),(null as any),3,'a',[['href','https://www.youtube.com/channel/UCJuuS2dtebtGiL_Cs2ywk3Q'],
              ['target','_blank']],(null as any),(null as any),(null as any),(null as any),
              (null as any))),(_l()(),i0.ɵted(-1,(null as any),['\n          '])),
      (_l()(),i0.ɵeld(52,0,(null as any),(null as any),0,'img',[['alt',''],['class',
          'hvr-shrink'],['src','/images/icons/youtubew.png']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i0.ɵted(-1,(null as any),
          ['\n        '])),(_l()(),i0.ɵted(-1,(null as any),['\n      '])),(_l()(),
          i0.ɵted(-1,(null as any),['\n    '])),(_l()(),i0.ɵted(-1,(null as any),['\n  '])),
      (_l()(),i0.ɵted(-1,(null as any),['\n']))],(_ck,_v) => {
    const currVal_16:any = '';
    _ck(_v,22,0,currVal_16);
    const currVal_17:any = 'email';
    const currVal_18:any = '';
    _ck(_v,25,0,currVal_17,currVal_18);
  },(_ck,_v) => {
    var _co:i1.SubscribeElement = _v.component;
    const currVal_0:any = i0.ɵnov(_v,15).ngClassUntouched;
    const currVal_1:any = i0.ɵnov(_v,15).ngClassTouched;
    const currVal_2:any = i0.ɵnov(_v,15).ngClassPristine;
    const currVal_3:any = i0.ɵnov(_v,15).ngClassDirty;
    const currVal_4:any = i0.ɵnov(_v,15).ngClassValid;
    const currVal_5:any = i0.ɵnov(_v,15).ngClassInvalid;
    const currVal_6:any = i0.ɵnov(_v,15).ngClassPending;
    _ck(_v,11,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_7:any = i0.ɵinlineInterpolate(1,'',_co.emailPlaceholder,'');
    const currVal_8:any = (i0.ɵnov(_v,22).required? '': (null as any));
    const currVal_9:any = i0.ɵnov(_v,27).ngClassUntouched;
    const currVal_10:any = i0.ɵnov(_v,27).ngClassTouched;
    const currVal_11:any = i0.ɵnov(_v,27).ngClassPristine;
    const currVal_12:any = i0.ɵnov(_v,27).ngClassDirty;
    const currVal_13:any = i0.ɵnov(_v,27).ngClassValid;
    const currVal_14:any = i0.ɵnov(_v,27).ngClassInvalid;
    const currVal_15:any = i0.ɵnov(_v,27).ngClassPending;
    _ck(_v,20,0,currVal_7,currVal_8,currVal_9,currVal_10,currVal_11,currVal_12,currVal_13,
        currVal_14,currVal_15);
  });
}
export function View_SubscribeElement_Host_0(_l:any):i0.ɵViewDefinition {
  return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,(null as any),(null as any),1,'app-subscribe-element',
      ([] as any[]),(null as any),(null as any),(null as any),View_SubscribeElement_0,
      RenderType_SubscribeElement)),i0.ɵdid(1,49152,(null as any),0,i1.SubscribeElement,
      [i3.EmailService,i4.Location],(null as any),(null as any))],(null as any),(null as any));
}
export const SubscribeElementNgFactory:i0.ComponentFactory<i1.SubscribeElement> = i0.ɵccf('app-subscribe-element',
    i1.SubscribeElement,View_SubscribeElement_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21hdGVvbW9udG95YS9mb3VydGVlbjc2aW8ud2ViMi9hc3NldHMvYXBwL3N1YnNjcmliZS9zdWJzY3JpYmVFbGVtZW50LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9tYXRlb21vbnRveWEvZm91cnRlZW43NmlvLndlYjIvYXNzZXRzL2FwcC9zdWJzY3JpYmUvc3Vic2NyaWJlRWxlbWVudC5jb21wb25lbnQudHMiLCJuZzovLy9Vc2Vycy9tYXRlb21vbnRveWEvZm91cnRlZW43NmlvLndlYjIvYXNzZXRzL2FwcC9zdWJzY3JpYmUvZW1haWwuY29tcG9uZW50Lmh0bWwiLCJuZzovLy9Vc2Vycy9tYXRlb21vbnRveWEvZm91cnRlZW43NmlvLndlYjIvYXNzZXRzL2FwcC9zdWJzY3JpYmUvc3Vic2NyaWJlRWxlbWVudC5jb21wb25lbnQudHMuU3Vic2NyaWJlRWxlbWVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjwhLS0gPGRpdiBjbGFzcz1cInN1YnNjcmliZUVsZW1lbnRDb250YWluZXJcIj5cbiAgPHAgY2xhc3M9XCJzdWJzY3JpYmVFbGVtZW50SGVhZGluZ1wiPktlZXAgVXAgV2l0aCBGb3VydGVlbjc2PC9wPlxuICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIiAjZj1cIm5nRm9ybVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImNvbnRlbnRcIiBuYW1lPVwiZW1haWxcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cInN1YnNjcmliZUJ1dHRvblwiPlN1YnNjcmliZTwvYnV0dG9uPlxuICA8L2Zvcm0+XG48L2Rpdj4gLS0+XG4gIDxkaXYgY2xhc3M9XCJzdWJzY3JpYmVFbGVtZW50Q29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNsb3NlUG9wdXBcIj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJiYWNrQ2xpY2tlZCgpXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9pY29ucy9jbG9zZXgucG5nXCIgYWx0PVwiXCIgY2xhc3M9XCJuYXZCYXJMb2dvIGh2ci1idXp6XCI+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8Zm9ybSAobmdTdWJtaXQpPVwib25TdWJtaXQoZilcIiAjZj1cIm5nRm9ybVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5TaWduIHVwIHRvIHJlY2VpdmUgb3VyIChpbmZyZXF1ZW50KSBuZXdzbGV0dGVyPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIG5nTW9kZWxcbiAgICAgICAgcGxhY2Vob2xkZXI9e3tlbWFpbFBsYWNlaG9sZGVyfX1cbiAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgcmVxdWlyZWQ+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImh2ci1zaHJpbmtcIj5TVUJTQ1JJQkU8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG4gICAgPGRpdiBjbGFzcz1cInN1YmZvbGxvd3VzXCI+XG4gICAgICA8cD5Gb2xsb3cgVXM8L3A+XG4gICAgICA8ZGl2IGNsYXNzPVwic3Vic29jaWFsXCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2ZvdXJ0ZWVuNzYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL2luc3Rhdy5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cImh2ci1zaHJpbmtcIj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ZvdXJ0ZWVuNzYvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2ljb25zL2ZhY2Vib29rdy5wbmdcIiBhbHQ9XCJcIiBjbGFzcz1cImh2ci1zaHJpbmtcIj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ0p1dVMyZHRlYnRHaUxfQ3MyeXdrM1FcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaWNvbnMveW91dHViZXcucG5nXCIgYWx0PVwiXCIgY2xhc3M9XCJodnItc2hyaW5rXCI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiIsIjxhcHAtc3Vic2NyaWJlLWVsZW1lbnQ+PC9hcHAtc3Vic2NyaWJlLWVsZW1lbnQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDTVUsNENBQ1I7TUFBQTtNQUFBLHdFQUF1QzthQUFBLCtCQUNyQztNQUFBO01BQUEsZ0JBQXdCLGdEQUN0QjtNQUFBO1VBQUE7UUFBQTtRQUFBO1FBQXNCO1VBQUE7VUFBQTtRQUFBO1FBQXRCO01BQUEsZ0NBQThDO01BQzVDO1VBQUE7VUFBQSwwREFBdUU7VUFBQSw2QkFDaEU7TUFDTCw4Q0FDTjtVQUFBO2NBQUE7a0JBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBTTtjQUFBO2NBQUE7WUFBQTtZQUFOO1VBQUEsdUNBQUE7VUFBQSxrREFBQTtvQkFBQTthQUFBLDBFQUFBO1VBQUE7VUFBQSxlQUEyQyxrREFDdkM7aUJBQUE7Y0FBQSwwREFBbUI7VUFBQSxtRUFBc0Q7aUJBQUEsbUNBQ3pFO1VBQUE7Y0FBQTtjQUFBO2NBQUE7Y0FBQTtrQkFBQTtjQUFBO1VBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtjQUFBO1lBQUE7WUFBQTtjQUFBO2NBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsc0JBQUE7VUFBQSxnREFBQTtVQUFBO1lBQUE7VUFBQTtVQUFBO1lBQUE7VUFBQSxvQ0FBQTtVQUFBO1VBQUEsMERBQUE7dUJBQUEsbUNBQUE7VUFBQSxpRUFPUztpQkFBQSxpQ0FDWDtVQUFBO1VBQUEsMERBQXlDO1VBQUEsOEJBQWtCO01BQ3RELDhDQUNQO1VBQUE7VUFBQSw0Q0FBeUI7VUFBQSxlQUN2QjtVQUFBO01BQUcsaURBQWE7VUFBQSxlQUNoQjtVQUFBO1VBQUEsZ0JBQXVCLGtEQUNyQjtpQkFBQTtjQUFBO2NBQUEsZ0JBQWdFO01BQzlEO1VBQUE7VUFBQSw0Q0FBOEQ7VUFBQSxpQkFDNUQsa0RBQ0o7aUJBQUE7Y0FBQTtjQUFBLGdCQUErRDtNQUM3RDtVQUFBO1VBQUEsNENBQWlFO1VBQUEsaUJBQy9ELGtEQUNKO2lCQUFBO2NBQUE7Y0FBQSxnQkFBbUY7TUFDakY7VUFBQTtVQUFBLDRDQUFnRTtVQUFBLGlCQUM5RCxnREFDQTtpQkFBQSwrQkFDRjtNQUNGO0lBakJBO0lBUEEsWUFPQSxVQVBBO0lBTUE7SUFGQTtJQUpBLFlBTUEsV0FGQSxVQUpBOzs7SUFGSjtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFlBQUEscUVBQUE7SUFPSTtJQUxBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxZQUtBLFVBTEEsVUFBQTtRQUFBLHFCQUFBOzs7O29CQ2ZSO01BQUE7aUNBQUEsVUFBQTtNQUFBOzs7In0=

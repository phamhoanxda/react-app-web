(this["webpackJsonpredux-photo-appp"]=this["webpackJsonpredux-photo-appp"]||[]).push([[4],{157:function(e,t,a){e.exports=a.p+"static/media/orange-bg.e6624e7e.jpg"},174:function(e,t,a){},175:function(e,t,a){e.exports=a.p+"static/media/blue-bg.146c36c8.jpg"},176:function(e,t,a){e.exports=a.p+"static/media/colorful-bg.cb9ae265.jpg"},177:function(e,t,a){},178:function(e,t,a){},185:function(e,t,a){},196:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(6),r=a(26),c=a(122);a(174);var i=function(e){var t=e.title,a=e.backgroundUrl,n=a?{backgroundImage:"url(".concat(a,")")}:{};return o.a.createElement("section",{className:"banner",style:n},o.a.createElement("h1",{className:"banner__title"},t))},u=a(157),m=a.n(u),s=a(175),d=a.n(s),p=a(176),h=a.n(p),v={ORANGE_BG:m.a,BLUE_BG:d.a,COLORFUL_BG:h.a,PINK_BG:m.a},E=a(35),b=a(123),f=a(124),g=a(190);a(177);function k(e){var t=e.photo,a=e.onEditClick,n=e.onRemoveClick;return o.a.createElement("div",{className:"photo"},o.a.createElement("img",{src:t.photo,alt:t.title}),o.a.createElement("div",{className:"photo__overlay"},o.a.createElement("h3",{className:"photo__title"},t.title),o.a.createElement("div",{className:"photo__actions"},o.a.createElement("div",null,o.a.createElement(g.a,{outline:!0,size:"sm",color:"light",onClick:function(){a&&a(t)}},"Edit")),o.a.createElement("div",null,o.a.createElement(g.a,{outline:!0,size:"sm",color:"danger",onClick:function(){n&&n(t)}},"Remove")))))}k.defaultProps={photo:{},onEditClick:null,onRemoveClick:null};var C=k;function y(e){var t=e.photoList,a=e.onPhotoEditClick,n=e.onPhotoRemoveClick;return o.a.createElement(b.a,null,t.map((function(e){return o.a.createElement(f.a,{key:e.title,xs:"12",md:"6",lg:"3"},o.a.createElement(C,{photo:e,onEditClick:a,onRemoveClick:n}))})))}y.defaultProps={photoList:[],onPhotoEditClick:null,onPhotoRemoveClick:null};var N=y,_=a(34);var B=function(e){var t=Object(E.c)((function(e){return e.photos})),a=Object(E.b)(),n=Object(l.g)();return console.log("List: ",t),o.a.createElement("div",{className:"photo-main"},o.a.createElement(i,{title:"Your awesome photos",backgroundUrl:v.PINK_BG}),o.a.createElement(c.a,{className:"text-center"},o.a.createElement(r.b,{class:"btn btn-primary add-btn",to:"/photos/add"},"Add new photo"),o.a.createElement(N,{photoList:t,onPhotoEditClick:function(e){console.log("Edit: ",e),n.push("/photos/".concat(e.id))},onPhotoRemoveClick:function(e){console.log("Remove: ",e);var t=e.id,n=Object(_.c)(t);a(n)}})))},O=(a(178),a(191)),j=a(195),P=[{value:1,label:"Technology"},{value:2,label:"Education"},{value:3,label:"Nature"},{value:4,label:"Animals"},{value:5,label:"Styles"}],R=a(139),x=a(192),I=a(193),U=a(194);var w=function(e){var t=e.field,a=e.form,n=e.type,l=e.label,r=e.placeholder,c=e.disabled,i=t.name,u=t.value,m=t.onChange,s=t.onBlur,d=a.errors,p=a.touched,h=d[i]&&p[i];return o.a.createElement(O.a,null,l&&o.a.createElement(x.a,{for:"titleId"},l),o.a.createElement(I.a,{id:i,name:i,value:u,onChange:m,onBlur:s,type:n,disabled:c,placeholder:r,invalid:h}),o.a.createElement(R.a,{name:i,component:U.a}))},A=a(189);var L=function(e){var t=e.field,a=e.form,n=e.options,l=(e.type,e.label),r=e.placeholder,c=e.disabled,i=t.name,u=t.value,m=(t.onChange,t.onBlur),s=a.errors,d=a.touched,p=s[i]&&d[i];return n.find((function(e){return e.value===u})),o.a.createElement(O.a,null,l&&o.a.createElement(x.a,{for:i},l),o.a.createElement(A.a,{id:i,name:i,value:u,onChange:function(e){var a=e?e.value:e,n={target:{name:i,value:a}};t.onChange(n)},onBlur:m,options:n,disabled:c,placeholder:r,className:p?"is-invalid":""}),o.a.createElement(R.a,{name:i,component:U.a}))},q=a(16),G=a.n(q),S=a(23),T=(a(185),function(){var e=Math.trunc(2e3*Math.random());return"https://picsum.photos/id/".concat(e,"/300/300")});var z=function(e){var t=e.name,a=e.imageUrl,n=e.onImageUrlChange,l=e.onRanDomButtonBlur,r=function(){var e=Object(S.a)(G.a.mark((function e(){var t;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&(t=T(),n(t));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"random-photo"},o.a.createElement("div",{className:"random-photo__button"},o.a.createElement(g.a,{outline:!0,name:t,color:"primary",onBlur:l,onClick:r},"Random Photo")),o.a.createElement("div",{className:"random-photo__photo"},a&&o.a.createElement("img",{src:a,alt:"Oops ... not found. Please click again",onError:r})))};var M=function(e){var t=e.field,a=e.form,n=e.label,l=t.name,r=t.value,c=t.onBlur,i=a.errors,u=a.touched,m=i[l]&&u[l];return o.a.createElement(O.a,null,n&&o.a.createElement(x.a,{for:l},n),o.a.createElement(z,{name:l,imageUrl:r,onImageUrlChange:function(e){a.setFieldValue(l,e)},onRanDomButtonBlur:c}),o.a.createElement("div",{className:m?"is-invalid":""}),o.a.createElement(R.a,{name:l,component:U.a}))},V=a(188);var D=function(e){var t=e.initialValues,a=e.isAddMode,n=V.b().shape({title:V.c().required("This field is required."),categoryId:V.a().required("This field is required").nullable(),photo:V.c().required("This field is required")});return o.a.createElement(R.d,{initialValues:t,validationSchema:n,onSubmit:e.onSubmit},(function(e){var t=e.values,n=e.errors,l=e.touched,r=e.isSubmitting;return console.log({values:t,errors:n,touched:l}),o.a.createElement(R.c,null,o.a.createElement(R.b,{name:"title",component:w,label:"Title",placeholder:"Eg: Wow nature ..."}),o.a.createElement(R.b,{name:"categoryId",component:L,label:"Category",placeholder:"What ' your photo category?",options:P}),o.a.createElement(R.b,{name:"photo",component:M,label:"Photo"}),o.a.createElement(O.a,null,o.a.createElement(g.a,{type:"submit",color:a?"primary":"success"},r&&o.a.createElement(j.a,{size:"sm"}),a?"Add to Album":"Update your photo")))}))};var F=function(e){var t=Object(E.b)(),a=Object(l.g)(),n=Object(l.h)().photoId,r=!n,c=Object(E.c)((function(e){return e.photos.find((function(e){return e.id===+n}))})),u=r?{title:"",categoryId:null,photo:""}:c;return o.a.createElement("div",{className:"photo-edit"},o.a.createElement(i,{title:"Pick your amazing photo"}),o.a.createElement("div",{className:"photo-edit__form"},o.a.createElement(D,{isAddMode:r,initialValues:u,onSubmit:function(e){return new Promise((function(n){console.log("values: "+e),setTimeout((function(){if(r){var o=Object(_.a)(e);console.log(o),t(o)}else{var l=Object(_.d)(e);t(l)}a.push("/photos"),n(!0)}),2e3)}))}})))},J=(a(187),a(48));t.default=function(e){var t=Object(l.i)();return console.log({match:t}),o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:t.url,component:B}),o.a.createElement(l.b,{exact:!0,path:"".concat(t.url,"/add"),component:F}),o.a.createElement(l.b,{exact:!0,path:"".concat(t.url,"/:photoId"),component:F}),o.a.createElement(l.b,{component:J.a}))}}}]);
//# sourceMappingURL=4.38141983.chunk.js.map
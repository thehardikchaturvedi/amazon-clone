(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{1353:function(e,a,t){},1354:function(e,a,t){},1356:function(e,a,t){},1358:function(e,a,t){},1364:function(e,a,t){},1365:function(e,a,t){},1366:function(e,a,t){},1368:function(e,a,t){},1370:function(e,a,t){},1388:function(e,a,t){},1389:function(e,a,t){},1391:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(13),r=t.n(c),i=(t(67),t(2)),o=(t(68),t(4)),m=t(3),s=(t(69),t(70),t(26)),u=t.n(s),d=t(8),p=t(28),E=t.n(p),g=t(51),h=t.n(g),_=Object(n.createContext)(),v=function(e){var a=e.reducer,t=e.initialState,c=e.children;return l.a.createElement(_.Provider,{value:Object(n.useReducer)(a,t)},c)},f=function(){return Object(n.useContext)(_)};var N=function(e){var a=e.id,t=e.title,n=e.price,c=e.rating,r=e.image,o=f(),m=Object(i.a)(o,2),s=(m[0].cart,m[1]),p=10*(c-Math.floor(c)),g=0;return g=p>0?5-Math.ceil(c):5-Math.floor(c),l.a.createElement("div",{className:"product"},l.a.createElement("img",{src:r,alt:t}),l.a.createElement("div",{className:"product__info"},l.a.createElement("p",null,t),l.a.createElement("div",{className:"product__group"},l.a.createElement("p",{className:"product__price"},l.a.createElement("small",null,"\u20b9."),l.a.createElement("strong",null,n)),l.a.createElement("div",{className:"product__rating"},Array(Math.floor(c)).fill().map((function(e,a){return l.a.createElement(u.a,{key:a})})),p>0?l.a.createElement(E.a,null):l.a.createElement(l.a.Fragment,null),g>0?Array(g).fill().map((function(e,a){return l.a.createElement(h.a,{key:a})})):""))),l.a.createElement("button",{onClick:function(){s({type:"ADD_TO_CART",payload:{id:a,title:t,price:n,rating:c,image:r}}),d.b.info("".concat(t," added worth \n \u20b9").concat(n))}},"Add to Cart"))};t(31);var b=function(){return Object(n.useEffect)((function(){return function(e){var a=document.querySelectorAll(".home__image");a.forEach((function(a,t){t!==e&&(a.style.visibility="hidden",a.classList.add("image-".concat(t)))})),function e(a,t,n){t&&(a>=n-1?a=0:a+=1,t.forEach((function(e,t){e.style.visibility=t===a?"visible":"hidden"})));setTimeout((function(){e(a,t,n)}),5e3)}(e,a,a.length)}(0)}),[]),l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"home__container"},l.a.createElement("div",{className:"home__toast-container"},l.a.createElement(d.a,null)),l.a.createElement("div",{className:"home__slider-container"},l.a.createElement("div",{className:"home__slide"},l.a.createElement("img",{className:"home__image ",src:"https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_3000x1200._CB405585145_.jpg",alt:"image0"})),l.a.createElement("div",{className:"home__slide"},l.a.createElement("img",{className:"home__image ",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/GW_Echo_PC_2x_V2._CB405879256_.jpg",alt:"image1"})),l.a.createElement("div",{className:"home__slide"},l.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg",alt:"image2"})),l.a.createElement("div",{className:"home__slide"},l.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg",alt:"image3"})),l.a.createElement("div",{className:"home__slide"},l.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg",alt:"image4"})),l.a.createElement("div",{className:"home__slide"},l.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/Pre_Launch/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_M51_tallhero_1500x600_1._CB405468917_.jpg",alt:"image5"})),l.a.createElement("div",{className:"home__slide"},l.a.createElement("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg",alt:"image6"}))),l.a.createElement("div",{className:"home__row"},l.a.createElement(N,{id:12320,title:"The Lean Startup",price:10,rating:4.5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}),l.a.createElement(N,{id:12321,title:"Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band",price:20,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"}),l.a.createElement(N,{id:12334,title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:3.5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})),l.a.createElement("div",{className:"home__row"},l.a.createElement(N,{id:12323,title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),l.a.createElement(N,{id:12324,title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:2,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),l.a.createElement(N,{id:3254354345,title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})),l.a.createElement("div",{className:"home__row"},l.a.createElement(N,{id:90829332,title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})),l.a.createElement("div",{className:"home__row"},l.a.createElement(N,{id:12326,title:"Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band",price:20,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"}),l.a.createElement(N,{id:12328,title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"}),l.a.createElement(N,{id:12327,title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),l.a.createElement(N,{id:12329,title:"The Lean Startup",price:10,rating:4.5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}))))},S=(t(1353),t(1354),function(e){var a=e.id,t=e.title,n=e.price,c=e.rating,r=e.image,o=e.hideButton,m=f(),s=Object(i.a)(m,2),d=(s[0].cart,s[1]),p=10*(c-Math.floor(c));return l.a.createElement("div",{className:"checkoutProduct"},l.a.createElement("img",{src:r,alt:"",className:"checkoutProduct__image"}),l.a.createElement("div",{className:"checkoutProduct__info"},l.a.createElement("p",{className:"checkoutProduct__title"},t),l.a.createElement("p",{className:"checkoutProduct__price"},l.a.createElement("small",null,"\u20b9."),l.a.createElement("strong",null,n)),l.a.createElement("div",{className:"checkoutProduct__rating"},Array(Math.floor(c)).fill().map((function(e,a){return l.a.createElement(u.a,{key:a})})),p>0?l.a.createElement(E.a,null):l.a.createElement(l.a.Fragment,null)),!o&&l.a.createElement("button",{onClick:function(){d({type:"REMOVE_FROM_CART",payload:a})}},"Remove From Cart")))}),A=t(19),O=t.n(A),C=(t(1356),t(30)),j=t(10),y=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,a){return a.price+e}),0)},k=function(e,a){switch(a.type){case"ADD_TO_CART":return Object(j.a)(Object(j.a)({},e),{},{cart:[].concat(Object(C.a)(e.cart),[a.payload])});case"EMPTY_BASKET":return Object(j.a)(Object(j.a)({},e),{},{cart:[]});case"REMOVE_FROM_CART":var t=Object(C.a)(e.cart),n=e.cart.findIndex((function(e){return e.id===a.payload}));return n>=0?t.splice(n,1):console.warn("can't remove product as ID ".concat(a.payload," is not available")),Object(j.a)(Object(j.a)({},e),{},{cart:t});case"ADD_TO_PRODUCTS":return Object(j.a)(Object(j.a)({},e),{},{products:[].concat(Object(C.a)(e.products),[a.payload])});case"SET_USER":return Object(j.a)(Object(j.a)({},e),{},{user:a.user});case"SET_PROFILE":return Object(j.a)(Object(j.a)({},e),{},{profile:a.userName});default:return e}};var L=function(){var e=Object(m.f)(),a=f(),t=Object(i.a)(a,1)[0].cart;return l.a.createElement("div",{className:"subtotal"},l.a.createElement("div",{className:"subtotal__head"},l.a.createElement("img",{src:"https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png",alt:""})),l.a.createElement("div",{className:"subtotal__body"},l.a.createElement(O.a,{renderText:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Subtotal (",t.length," items) : ",l.a.createElement("strong",null,"".concat(e))),l.a.createElement("small",{className:"subtotal__gift"},l.a.createElement("input",{type:"checkbox"})," This order contains a gift"))},decimalScale:2,value:y(t),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),l.a.createElement("button",{onClick:function(a){return e.push("/payment")}},"Proceed to Checkout")))},T=t(52);var x=function(){var e=f(),a=Object(i.a)(e,1)[0].cart;return l.a.createElement("div",{className:"checkout"},l.a.createElement("div",{className:"checkout__left"},l.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg",alt:"",className:"checkout__ad"}),0===(null===a||void 0===a?void 0:a.length)?l.a.createElement("div",null,l.a.createElement("h2",null,"Your Cart is Empty"),l.a.createElement("img",{src:"data:image/png;base64,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",alt:""})):l.a.createElement("div",null,l.a.createElement("h2",{className:"checkout__title"},"Your Cart"),l.a.createElement(T.a,{appearAnimation:"fade",enterAnimation:"fade",leaveAnimation:"fade"},null===a||void 0===a?void 0:a.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement(S,{id:e.id,title:e.title,price:e.price,rating:e.rating,image:e.image}))}))))),a.length>0&&l.a.createElement("div",{className:"checkout__right"},l.a.createElement(L,null)))},z=(t(1358),t(29)),w=t.n(z),P=(t(1359),t(1362),w.a.initializeApp({apiKey:"AIzaSyDTxvOJqkbrAudCtlN-ffozImciXZhNmUA",authDomain:"https://thehardikchaturvedi.github.io/amazon-clone/",projectId:"clone-93bf2",storageBucket:"clone-93bf2.appspot.com",messagingSenderId:"1030329283038",appId:"1:1030329283038:web:22e6bcb78055029f0b6d4f",measurementId:"G-X81ZCWLBKK"}).firestore()),G=w.a.auth(),R=new w.a.auth.GoogleAuthProvider;var W=function(){var e=Object(m.f)(),a=Object(n.useState)(""),t=Object(i.a)(a,2),c=t[0],r=t[1],s=Object(n.useState)(""),u=Object(i.a)(s,2),p=u[0],E=u[1];return l.a.createElement("div",{className:"login"},l.a.createElement(d.a,null),l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:""})),l.a.createElement("div",{className:"login__container"},l.a.createElement("h1",null,"Sign In"),l.a.createElement("form",null,l.a.createElement("h5",null,"Email"),l.a.createElement("input",{type:"email",value:c,onChange:function(e){return r(e.target.value)}}),l.a.createElement("h5",null,"password"),l.a.createElement("input",{type:"password",value:p,onChange:function(e){return E(e.target.value)}}),l.a.createElement("button",{onClick:function(a){a.preventDefault(),G.signInWithEmailAndPassword(c,p).then((function(a){d.b.success("Login Successful, redirecting to homepage"),setTimeout((function(){e.push("/")}),1e3)})).catch((function(a){d.b.error("unable to login, please check your credentials"),setTimeout((function(){e.push("/login")}),4e3),console.warn(a.message)}))},className:"login__signInButton"},"Sign In")),l.a.createElement("p",null,"By continuing, you agree to Amazon's Conditions of Use and Privacy Notice."),l.a.createElement("button",{onClick:function(a){a.preventDefault(),G.createUserWithEmailAndPassword(c,p).then((function(a){d.b.success("Registration Successful, redirecting to homepage"),setTimeout((function(){e.push("/")}),1e3)})).catch((function(a){d.b.error("unable to register, please check your credentials"),setTimeout((function(){e.push("/login")}),4e3),console.warn(a.message)}))},className:"login__registerButton"},"Create your amazon account"),l.a.createElement("br",null),l.a.createElement("p",{style:{textAlign:"center"}},"Login With :"),l.a.createElement("a",{className:"login__signInGoogleButton",onClick:function(a){a.preventDefault(),G.signInWithPopup(R).then((function(a){d.b.success("Login Successful, redirecting to homepage"),setTimeout((function(){e.push("/")}),1e3)})).catch((function(a){d.b.error("unable to login, please check your credentials"),setTimeout((function(){e.push("/login")}),4e3),console.warn(a.message)}))}},l.a.createElement("img",{className:"login__signInGoogleIcon",src:"https://elearnam.com/assets/frontend/elegant/images/gicon.png",alt:"google login"}))))},M=(t(1364),t(53)),V=t.n(M),B=t(54),D=t.n(B),F=t(56),I=t.n(F),Y=t(55),U=t.n(Y);var X=function(){var e=f(),a=Object(i.a)(e,1)[0],t=a.cart,c=a.user,r=a.profile,m=Object(n.useState)(""),s=Object(i.a)(m,2),u=s[0],d=s[1],p=function(){c&&G.signOut()};return Object(n.useEffect)((function(){fetch("https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91").then((function(e){return e.json()})).then((function(e){return d(e)}))}),[]),l.a.createElement("nav",{className:"header"},l.a.createElement("div",{className:"header__top"},l.a.createElement("div",{className:"header__left-nav"},l.a.createElement(V.a,null)),l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""})),l.a.createElement("div",{className:"header__search"},l.a.createElement("input",{type:"search",className:"header__searchInput"}),l.a.createElement(D.a,{className:"header__searchIcon"})),l.a.createElement("div",{className:"header__flag"}),l.a.createElement("div",{className:"header__nav"},c?l.a.createElement(o.b,{to:"/",className:"header__link"},l.a.createElement("div",{onClick:p,className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Hello, ",c?null===r||void 0===r?void 0:r.userName:"Guest"),l.a.createElement("span",{className:"header__optionLineTwo"},c?"Sign Out":"Sign In"))):l.a.createElement(o.b,{to:"/login",className:"header__link"},l.a.createElement("div",{onClick:p,className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Hello, ",c?null===r||void 0===r?void 0:r.userName:"User"),l.a.createElement("span",{className:"header__optionLineTwo"},c?"Sign Out":"Sign In"))),l.a.createElement(o.b,{to:"/orders",className:"header__link"},l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Return"),l.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),l.a.createElement(o.b,{to:"/",className:"header__link"},l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Try"),l.a.createElement("span",{className:"header__optionLineTwo"},"Prime"))),l.a.createElement(o.b,{to:"/profile",className:"header__link"},l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Your"),l.a.createElement("span",{className:"header__optionLineTwo"},"Profile"))),l.a.createElement(o.b,{to:"/cart",className:"header__link"},l.a.createElement("div",{className:"header__optionBasket"},l.a.createElement(U.a,null),l.a.createElement("span",{className:"header__optionLineTwo basket__count"},null===t||void 0===t?void 0:t.length))))),l.a.createElement("div",{className:"header__bottom"},l.a.createElement("div",{className:"header__address"},l.a.createElement("div",{className:"header__address-icon"},l.a.createElement(I.a,null)),l.a.createElement("div",{className:"header__option"},l.a.createElement("span",{className:"header__optionLineOne"},"Deliver to"),l.a.createElement("span",{className:"header__optionLineTwo"},null===u||void 0===u?void 0:u.city,"(",null===u||void 0===u?void 0:u.country_code,")"))),l.a.createElement("div",{className:"header__bottom-nav"},l.a.createElement("span",null,l.a.createElement(o.b,{to:"/products",className:"header__link"},"All Products")),l.a.createElement("span",null,"Mobile"),l.a.createElement("span",null,"Best Sellers"),l.a.createElement("span",null,"Today's Deak"),l.a.createElement("span",null,"Prime"),l.a.createElement("span",null,"Computers"),l.a.createElement("span",null,"Pantry"),l.a.createElement("span",null,"Electronics")),l.a.createElement("div",{className:"header__bottom-app"},l.a.createElement("img",{className:"header__bottom-image",alt:"Amazon App",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/MAI/Sweepstakes/June20/SWM_DownloadApp._CB410314483_.jpg"}))))},q=(t(1365),t(1366),t(57)),H=t.n(q);var Z=function(e){var a,t=e.order;return l.a.createElement("div",{className:"order"},l.a.createElement("h2",null,"Order"),l.a.createElement("p",null,H.a.unix(t.data.created).format("MMMM DD YYYY, h:mma")),l.a.createElement("p",{className:"order__id"},l.a.createElement("small",null,t.id)),null===(a=t.data.cart)||void 0===a?void 0:a.map((function(e,a){return l.a.createElement(S,{key:a,id:e.id,title:e.title,price:e.price,rating:e.rating,image:e.image,hideButton:!0})})),l.a.createElement(O.a,{renderText:function(e){return l.a.createElement("h3",{className:"order__total"},"Order Total : ",e)},decimalScale:2,value:t.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}))};var K=function(){var e=f(),a=Object(i.a)(e,2),t=a[0],c=(t.cart,t.user),r=(a[1],Object(n.useState)([])),o=Object(i.a)(r,2),m=o[0],s=o[1];return Object(n.useEffect)((function(){c?P.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return s(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):s([])}),[c]),l.a.createElement("div",{className:"orders"},l.a.createElement("h1",null,"Your Orders"),l.a.createElement("div",{className:"orders__order"},null===m||void 0===m?void 0:m.map((function(e,a){return l.a.createElement(Z,{order:e,key:a})}))))};t(1368);var Q=function(){var e=Object(m.f)(),a=f(),t=Object(i.a)(a,2),c=t[0],r=c.user,s=c.profile,u=(t[1],Object(n.useState)(null===s||void 0===s?void 0:s.userName)),d=Object(i.a)(u,2),p=d[0],E=d[1],g=Object(n.useState)(null===s||void 0===s?void 0:s.phone),h=Object(i.a)(g,2),_=h[0],v=h[1];return l.a.createElement("div",{className:"profile"},l.a.createElement(o.b,{to:"/"},l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",className:"profile__logo",alt:""})),l.a.createElement("div",{className:"profile__container"},l.a.createElement("h1",null,"Profile"),l.a.createElement("form",null,l.a.createElement("h5",null,"Email"),l.a.createElement("input",{type:"email",defaultValue:null===r||void 0===r?void 0:r.email,disabled:!0}),l.a.createElement("h5",null,"Name"),l.a.createElement("input",{type:"text",placeholder:"Please Enter Your Name",value:p,onChange:function(e){return a=e.target.value,void E(a);var a}}),l.a.createElement("h5",null,"Mobile"),l.a.createElement("input",{type:"text",placeholder:"Please Enter Your Contact Number",value:_,onChange:function(e){return a=e.target.value,void v(a);var a}}),l.a.createElement("button",{onClick:function(a){a.preventDefault(),console.log("name -> ",p);var t=null===r||void 0===r?void 0:r.uid;P.collection("users").doc(t).collection("profile").doc("profile".concat(t)).set({userName:p,phone:_,email:null===r||void 0===r?void 0:r.email}),e.push("/")},className:"profile__signInButton"},"Update Profile"))))},J=t(22),$=t.n(J),ee=t(36),ae=(t(1370),t(18)),te=t(58),ne=t.n(te).a.create({baseURL:"https://us-central1-clone-36782.cloudfunctions.net/api"});var le=function(){var e=f(),a=Object(i.a)(e,2),t=a[0],c=t.cart,r=t.user,s=a[1],u=Object(m.f)(),d=Object(ae.useStripe)(),p=Object(ae.useElements)(),E=Object(n.useState)(null),g=Object(i.a)(E,2),h=g[0],_=g[1],v=Object(n.useState)(!0),N=Object(i.a)(v,2),b=N[0],A=N[1],C=Object(n.useState)(""),j=Object(i.a)(C,2),k=j[0],L=j[1],T=Object(n.useState)(!1),x=Object(i.a)(T,2),z=x[0],w=x[1],G=Object(n.useState)(!0),R=Object(i.a)(G,2),W=R[0],M=R[1];Object(n.useEffect)((function(){(function(){var e=Object(ee.a)($.a.mark((function e(){var a;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne({method:"post",url:"/payments/create?total=".concat(100*y(c))});case 2:a=e.sent,M(a.data.clientSecret),console.log("secret is -> ",W);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]);var V=function(){var e=Object(ee.a)($.a.mark((function e(a){return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),L(!0),e.next=4,d.confirmCardPayment(W,{payment_method:{card:p.getElement(ae.CardElement)}}).then((function(e){var a=e.paymentIntent;P.collection("users").doc(null===r||void 0===r?void 0:r.uid).collection("orders").doc(a.id).set({cart:c,amount:a.amount,created:a.created}),w(!0),_(null),L(!1),s({type:"EMPTY_BASKET"}),u.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"payment"},l.a.createElement("div",{className:"payment__container"},l.a.createElement("h1",null,"Checkout(",l.a.createElement(o.b,{to:""},null===c||void 0===c?void 0:c.length," items"),")"),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Delivery Address")),l.a.createElement("div",{className:"payment__address"},l.a.createElement("p",null,null===r||void 0===r?void 0:r.email),l.a.createElement("p",null,"123, React Lane"),l.a.createElement("p",null,"Magarpatta, Pune"))),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Review Items and Delivery")),l.a.createElement("div",{className:"payment__items"},c.map((function(e,a){return l.a.createElement(S,{key:a,id:e.id,title:e.title,price:e.price,rating:e.rating,image:e.image})})))),l.a.createElement("div",{className:"payment__section"},l.a.createElement("div",{className:"payment__title"},l.a.createElement("h3",null,"Payment Method")),l.a.createElement("div",{className:"payment__details"},l.a.createElement("form",{onSubmit:V},l.a.createElement(ae.CardElement,{onChange:function(e){A(!1)}}),l.a.createElement("div",{className:"payment__priceContainer"},l.a.createElement(O.a,{renderText:function(e){return l.a.createElement("h3",null,"Order Total : ",e)},decimalScale:2,value:y(c),displayType:"text",thousandSeparator:!0,prefix:"\u20b9"}),l.a.createElement("button",{disabled:k||b||z},l.a.createElement("span",null,k?l.a.createElement("p",null,"Processing"):l.a.createElement("p",null,"Buy Now")))),h&&l.a.createElement("div",null,"error"))))))},ce=t(59),re=(t(1387),t(1388),t(60)),ie=t.n(re);var oe=function(){return l.a.createElement("div",{className:"Footer"},l.a.createElement("a",{onClick:function(){window.scrollTo(0,0)}},l.a.createElement("div",{className:"Footer__Back-To-Top"},l.a.createElement(ie.a,{className:"Footer__Back-To-Top-Text"}))),l.a.createElement("div",{className:"Footer__Vertical-Row"},l.a.createElement("div",{className:"Footer__Vertical-Col"},l.a.createElement("div",{className:"Footer__Vertical-Col-Head"},"Get to Know Us"),l.a.createElement("ul",null,l.a.createElement("li",null,"About"),l.a.createElement("li",null,"Career"),l.a.createElement("li",null,"Press"),l.a.createElement("li",null,"Amazon Cares"),l.a.createElement("li",null,"Gift a smile"))),l.a.createElement("div",{className:"Footer__Vertical-Col"},l.a.createElement("div",{className:"Footer__Vertical-Col-Head"},"Connect with us"),l.a.createElement("ul",null,l.a.createElement("li",null,"Facebook"),l.a.createElement("li",null,"Twitter"),l.a.createElement("li",null,"Instagram"))),l.a.createElement("div",{className:"Footer__Vertical-Col"},l.a.createElement("div",{className:"Footer__Vertical-Col-Head"},"Make Money with Us"),l.a.createElement("ul",null,l.a.createElement("li",null,"Sell on fake Amazon"),l.a.createElement("li",null,"Sell under fake Amazon"),l.a.createElement("li",null,"Become an Affiliate"),l.a.createElement("li",null,"Fulfilment by Amazon"),l.a.createElement("li",null,"Amazon Pay"))),l.a.createElement("div",{className:"Footer__Vertical-Col"},l.a.createElement("div",{className:"Footer__Vertical-Col-Head"},"Connect with us"),l.a.createElement("ul",null,l.a.createElement("li",null,"COVID-19 and Amazon"),l.a.createElement("li",null,"Your Account"),l.a.createElement("li",null,"Returns Centre"),l.a.createElement("li",null,"100% Purchase Protection"),l.a.createElement("li",null,"Amazon App Download"),l.a.createElement("li",null,"Amazon Assistant Download"),l.a.createElement("li",null,"Help")))),l.a.createElement("hr",null),l.a.createElement("div",{className:"Footer__Line"},l.a.createElement("img",{className:"Footer__Line-logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:""}),l.a.createElement("span",{className:"Footer__Line-message"},"Amazon clone developed by \xa9"," ",l.a.createElement("a",{href:"#",target:"_blank"},"Hardik Chaturvedi"))))};t(1389);var me=function(){return l.a.createElement("div",{className:"productList"},l.a.createElement("div",{className:"productList__row"},l.a.createElement(N,{id:12320,title:"The Lean Startup",price:10,rating:4.5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}),l.a.createElement(N,{id:12320,title:"The Lean Startup",price:10,rating:4.5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}),l.a.createElement(N,{id:12321,title:"Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band",price:20,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"}),l.a.createElement(N,{id:12334,title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:3.5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})),l.a.createElement("div",{className:"productList__row"},l.a.createElement(N,{id:12321,title:"Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band",price:20,rating:5,image:"https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"}),l.a.createElement(N,{id:12320,title:"The Lean Startup",price:10,rating:4.5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}),l.a.createElement(N,{id:12320,title:"The Lean Startup",price:10,rating:4.5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"}),l.a.createElement(N,{id:12334,title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:3.5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"})))},se=Object(ce.a)("pk_test_51HPvTZEm4kUlkaUGOprKB6CIt1RW7nlhHhINLYNBJCTM2m2eSwsML1Lq6eEJmHadidUcmUAP1Rbtq45kC4EW9Iv200K0HUq19q");var ue=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)([]),s=Object(i.a)(r,2),u=s[0],d=s[1],p=f(),E=Object(i.a)(p,2),g=E[0].user,h=E[1];return Object(n.useEffect)((function(){var e=G.onAuthStateChanged((function(e){h({type:"SET_USER",user:e||null})}));return function(){e()}}),[]),Object(n.useEffect)((function(){g&&t?P.collection("users").doc(null===g||void 0===g?void 0:g.uid).collection("profile").onSnapshot((function(e){return c(e.docs.map((function(e){return e.data()})))})):c([]),g&&u?P.collection("products").doc().collection("products").onSnapshot((function(e){return d(e.docs.map((function(e){return e.data()})))})):d([])}),[g]),Object(n.useEffect)((function(){h({type:"SET_PROFILE",userName:t[0]})}),[t]),console.log(t),l.a.createElement(o.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/cart"},l.a.createElement(X,null),l.a.createElement(x,null)),l.a.createElement(m.a,{path:"/login"},l.a.createElement(W,null)),l.a.createElement(m.a,{path:"/profile"},l.a.createElement(Q,null)),l.a.createElement(m.a,{path:"/orders"},l.a.createElement(X,null),l.a.createElement(K,null)),l.a.createElement(m.a,{path:"/products"},l.a.createElement(X,null),l.a.createElement(me,null)),l.a.createElement(m.a,{path:"/payment"},l.a.createElement(X,null),l.a.createElement(ae.Elements,{stripe:se},l.a.createElement(le,null))),l.a.createElement(m.a,{path:"/"},l.a.createElement(X,null),l.a.createElement(b,null))),l.a.createElement(oe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(v,{initialState:{cart:[],user:null,profile:null,products:[],categories:["Phones","Laptops"]},reducer:k},l.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,a,t){e.exports=t(1391)},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){}},[[62,1,2]]]);
//# sourceMappingURL=main.cdf95f6e.chunk.js.map
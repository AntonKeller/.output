import{C,S as k,P as S,N as A}from"./carousel.es.XDQf1JH1.js";import{_ as w,q as u,o as t,c as i,b as v,w as _,F as b,s as x,u as y,a as s,t as g,v as I,p as L,f as q,x as E,y as d,d as $}from"./entry.KK7znyb5.js";const G=[{id:1,title:"Наши преимущества",description:"Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими международными аудиторскими компаниями. Эверест Консалтинг имеет лицензию на проведение работ, связанных с использованием сведений, составляющих государственную тайну ГТ 0103356."},{id:2,title:"Наши специалисты",description:'Специалисты Эверест Консалтинг являются членами таких профессиональных организаций, как СМАО, РОО, НП СРО "ДСО", МСНО-НП "ОПЭО", Восточно-Европейский союз экспертов (OSV), а также получили квалификации и аккредитацию Американского общества оценщиков (ASA)'},{id:3,title:"Цель компании",description:"Наша цель – оказание полного комплекса консультационных услуг в области оценки и консалтинга (финансового, управленческого, налогового и строительного) специалистами, обладающими международными квалификациями и значительным опытом выполнения подобных проектов как в России, так и за рубежом."}];function z(){return[{id:1,title:"80+",subtitle:"Lorem ipsum dolor",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"},{id:2,title:"5",subtitle:"Lorem ipsum dolor",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"},{id:3,title:"15",subtitle:"Lorem ipsum dolor",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"},{id:4,title:"10",subtitle:"Lorem ipsum dolor",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"},{id:5,title:"12",subtitle:"Lorem ipsum dolor",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dignissimos, dolor, doloremque eum explicabo ipsum iusto libero molestiae, nam nostrum officiis quas rem suscipit totam velit! Architecto nihil similique ut!"}]}const B={name:"ev-tabloid",components:{Carousel:C,Slide:k,Pagination:S,Navigation:A},data:()=>({p640:!0,p1024:!0,m1024:!0,windowWidth:0}),methods:{getSlides:()=>z()},created(){const e=()=>{this.width=window.innerWidth,this.p640=window.innerWidth<=640,this.p1024=window.innerWidth>640&&window.innerWidth<=1024,this.m1024=window.innerWidth>1024};e(),window.addEventListener("resize",e)}},W=e=>(L("data-v-8ec3cfbe"),e=e(),q(),e),D={class:"slide-content w-fit"},P={class:"slide-content--wrapper w-fit"},j=W(()=>s("div",{class:"slide-mark"},"everest",-1)),M={class:"tabloid--title"},V={class:"tabloid--subtitle"},H={class:"tabloid--description"};function R(e,o,c,f,h,r){const n=u("slide"),m=u("carousel");return t(),i("div",null,[v(m,{"items-to-show":2.3,class:I(["tabloid",{hidden:!e.m1024}]),transition:"100",autoplay:"4000",wrapAround:"",mouseDrag:"",pauseAutoplayOnHover:""},{default:_(()=>[(t(!0),i(b,null,x(r.getSlides(),p=>(t(),y(n,{key:p.id,class:"w-fit"},{default:_(()=>[s("div",D,[s("div",P,[j,s("div",M,g(p.title),1),s("div",V,g(p.subtitle),1),s("div",H,g(p.text),1)])])]),_:2},1024))),128))]),_:1},8,["class"])])}const T=w(B,[["render",R],["__scopeId","data-v-8ec3cfbe"]]),F={name:"ev-banner-section",components:{evTabloid:T},data(){return{serviceList:[{id:1,txt:"Оценка бизнеса",classes:""},{id:2,txt:"Финансовый консалтинг",classes:""},{id:3,txt:"Строительный консалтинг",classes:""}],infoBannerContentCards:G}}},U=e=>(L("data-v-cbe47cd9"),e=e(),q(),e),J={class:"banner-container"},K={class:"z-10 flex flex-col items-center"},Q={class:"flex flex-col md:flex-row items-center space-y-1.5"},X={class:"banner-title txt-shadow",initial:{y:15,opacity:.001},enter:{y:0,opacity:1,transition:{mass:.5}},delay:1e3},Y={class:"banner-subtitle txt-shadow self-end ml-2",initial:{y:-15,opacity:.001},enter:{y:0,opacity:1,transition:{mass:.5}},delay:1e3},Z={class:"flex justify-center items-center mt-6 sm:mt-8 lg:mt-10 xl:mt-12 gap-y-1.5 sm:gap-y-2 sm:gap-2 flex-wrap"},ee=U(()=>s("i",{class:"pi pi-arrow-right ml-3 text-gray-400 font-extrabold"},null,-1));function te(e,o,c,f,h,r){const n=E("motion");return t(),i("div",J,[s("div",K,[s("div",Q,[d((t(),i("div",X,[$(" Эверест ")])),[[n]]),d((t(),i("div",Y,[$(" На рынке с 2010 года ")])),[[n]])]),s("div",Z,[(t(!0),i(b,null,x(h.serviceList,m=>(t(),i("div",{key:m.id,class:I(["b-btn",m.classes])},[$(g(m.txt)+" ",1),ee],2))),128))])])])}const se=w(F,[["render",te],["__scopeId","data-v-cbe47cd9"]]),N=[{id:1,img:"inter-rao",services:[{id:1,title:"Оценка бизнеса",cssClasses:"bg-red-700"},{id:2,title:"Оценка имущественных активов",cssClasses:"bg-cyan-700"}]},{id:2,img:"rosatom",services:[{id:1,title:"Оценка бизнеса",cssClasses:"bg-red-700"},{id:2,title:"Оценка имущественных активов",cssClasses:"bg-cyan-700"}]},{id:3,img:"moskowkiy-bank",services:[{id:1,title:"Оценка",cssClasses:"bg-blue-700"}]},{id:4,img:"rosekim-bank",services:[{id:1,title:"Оценка",cssClasses:"bg-blue-700"}]},{id:5,img:"rosselhoz-bank",services:[{id:1,title:"Оценка",cssClasses:"bg-blue-700"}]},{id:6,img:"afk-systema",services:[{id:1,title:"Оценка",cssClasses:"bg-blue-700"}]},{id:7,img:"web-rf",services:[{id:1,title:"Оценка",cssClasses:"bg-blue-700"}]},{id:8,img:"sber",services:[{id:1,title:"Оценка",cssClasses:"bg-blue-700"}]},{id:9,img:"mkb",services:[{id:1,title:"Оценка",cssClasses:"bg-blue-700"}]},{id:10,img:"novikom-bank",services:[{id:1,title:"Оценка",cssClasses:"bg-blue-700"}]},{id:11,img:"pcb",services:[{id:1,title:"Строительный аудит",cssClasses:"bg-violet-700"},{id:2,title:"Финансово-технический надзор",cssClasses:"bg-fuchsia-700"}]},{id:12,img:"otkritie-bank",services:[{id:1,title:"Строительный аудит",cssClasses:"bg-violet-700"},{id:2,title:"Строительная экспертиза",cssClasses:"bg-emerald-700"},{id:3,title:"Технологическая экспертиза",cssClasses:"bg-gray-700"}]},{id:13,img:"cb-rf",services:[{id:1,title:"Строительный аудит",cssClasses:"bg-violet-700"},{id:2,title:"Строительная экспертиза",cssClasses:"bg-emerald-700"},{id:3,title:"Технологическая экспертиза",cssClasses:"bg-gray-700"}]},{id:14,img:"almaz-antay",services:[{id:1,title:"Строительный аудит",cssClasses:"bg-violet-700"},{id:2,title:"Строительная экспертиза",cssClasses:"bg-emerald-700"},{id:3,title:"Технологическая экспертиза",cssClasses:"bg-gray-700"}]},{id:15,img:"turizm-rf",services:[{id:1,title:"Строительный аудит",cssClasses:"bg-violet-700"},{id:2,title:"Строительная экспертиза",cssClasses:"bg-emerald-700"},{id:3,title:"Технологическая экспертиза",cssClasses:"bg-gray-700"}]},{id:16,img:"frp",services:[{id:1,title:"Строительный аудит",cssClasses:"bg-violet-700"},{id:2,title:"Строительная экспертиза",cssClasses:"bg-emerald-700"},{id:3,title:"Технологическая экспертиза",cssClasses:"bg-gray-700"}]},{id:17,img:"rosteh",services:[{id:1,title:"Строительный аудит",cssClasses:"bg-violet-700"},{id:2,title:"Строительная экспертиза",cssClasses:"bg-emerald-700"},{id:3,title:"Технологическая экспертиза",cssClasses:"bg-gray-700"}]}],ie={name:"ev-experience-section",components:{Carousel:C,Slide:k,Pagination:S,Navigation:A},methods:{},data(){return{companies:N,chips:[{text:"Международный опыт",theme:""},{text:"Оценка",theme:"dark"},{text:"Оценка бизнеса",theme:""},{text:"Оценка имущественных активов",theme:"dark"},{text:"Финансово-тухнический надзор",theme:"dark"},{text:"Технологическая экспертиза",theme:""},{text:"Строительная экспертиза",theme:""}],cards:[{id:1,text:"Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга «Крупнейшие компании России» (рейтинг Эксперт-400), совокупная выручка которых за 2008 год превысила 9.3 трлн. руб."},{id:2,text:"Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими международными аудиторскими компаниями."},{id:2,text:"Специалисты Компании EverestConsulting являются членами таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков (СМАО), Восточно-Европейский союз экспертов (OSV), а также получили квалификации Американского общества оценщиков(ASA)."}]}}},O=e=>(L("data-v-9af72c0f"),e=e(),q(),e),oe={class:"experience-container"},ae={class:"content-wrapper"},ne={class:"text-container"},ce={class:"text-gray-100 px-2.5 text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold py-2 px-4 bg-gray-800 rounded-2xl max-w-fit",initial:{opacity:0},enter:{opacity:1},delay:250},le={class:"ml-2.5 text-base lg:text-lg border-b-2 border-b-gray-800/10 pb-3.5 mt-3.5 font-bold font-sans",initial:{opacity:0},enter:{opacity:1},delay:450},de={initial:{opacity:0},enter:{opacity:1},delay:450},re=O(()=>s("p",{class:"ml-2.5 mt-6 font-sans"}," Наши специалисты успешно осуществили и завершили проекты для 45 компаний из рейтинга «Крупнейшие компании России» (рейтинг Эксперт-400), совокупная выручка которых за 2008 год превысила 9.3 трлн. руб. ",-1)),me=[re],ue={initial:{opacity:0},enter:{opacity:1},delay:650},pe=O(()=>s("p",{class:"text-gray-50 bg-red-950/80 rounded ml-2 p-3 mt-6 font-sans"}," Основным деловым преимуществом нашей компании является высокий профессионализм сотрудников, а также опыт выполнения проектов в сфере оценки и консалтинга с последующим согласованием результатов с крупнейшими международными аудиторскими компаниями. ",-1)),_e=[pe],ge={initial:{opacity:0},enter:{opacity:1},delay:850},he=O(()=>s("p",{class:"ml-2.5 mt-4"}," Специалисты Компании EverestConsulting являются членами таких профессиональных организаций, как Саморегулируемая Межрегиональная Ассоциация Оценщиков (СМАО), Восточно-Европейский союз экспертов (OSV), а также получили квалификации Американского общества оценщиков(ASA). ",-1)),ve=[he],be={class:"md:hidden text-gray-600 px-2 text-lg font-bold py-1 px-4 bg-gray-300 rounded-3xl max-w-full",initial:{opacity:0},enter:{opacity:1},delay:250},xe={class:"md:hidden bg-gray-200/75 rounded-2xl p-4 mt-3.5"},fe={class:"text-gray-600"};function ye(e,o,c,f,h,r){const n=u("slide"),m=u("Pagination"),p=u("carousel"),l=E("motion");return t(),i("div",oe,[s("div",ae,[s("div",ne,[d((t(),i("div",ce,[$("О компании ")])),[[l]]),d((t(),i("div",le,[$("We’re a dynamic group of individuals who are passionate about what we... ")])),[[l]]),d((t(),i("div",de,me)),[[l]]),d((t(),i("div",ue,_e)),[[l]]),d((t(),i("div",ge,ve)),[[l]])]),d((t(),i("div",be,[$("О компании ")])),[[l]]),s("div",xe,[d((t(),y(p,{initial:{opacity:0},enter:{opacity:1},delay:250,"items-to-show":1,autoplay:"4000",wrapAround:"true",mouseDrag:"true",pauseAutoplayOnHover:"true"},{addons:_(()=>[v(m)]),default:_(()=>[(t(!0),i(b,null,x(h.cards,a=>(t(),y(n,{key:a.id},{default:_(()=>[s("p",fe,g(a.text),1)]),_:2},1024))),128))]),_:1})),[[l]])])])])}const $e=w(ie,[["render",ye],["__scopeId","data-v-9af72c0f"]]),we={name:"ev-customers-section",data:()=>({companies:N,selectedGroups:{"Строительный аудит":null,"Строительная экспертиза":null}}),components:{Carousel:C,Slide:k,Pagination:S,Navigation:A},methods:{isSelected(e){return this.selectedGroups.hasOwnProperty(e)||!1},unselect(e){let o={};Object.keys(this.selectedGroups).forEach(c=>{e!==c&&(o[c]=null)}),this.selectedGroups=o},chipCLick(e){let o=this.isSelected(e);console.log("status:",o),console.log("arr size:",Object.keys(this.selectedGroups).length),o?this.unselect(e):this.selectedGroups[e]=null},getGroups(){let e={};return this.companies.forEach(o=>{o.services.forEach(c=>{e[c.title]=c})}),Object.keys(e).map((o,c)=>({name:o,id:c+1}))},getCompaniesLogo(){const e=[];return this.companies.forEach(o=>{o.services.find(f=>this.selectedGroups.hasOwnProperty(f.title))||e.push(o.img)}),e.map((o,c)=>({id:c+1,img:o}))}}},Ce={class:"customers-container"},ke={class:"customers-sub-container"},Se={class:"customer-title",initial:{opacity:0},enter:{opacity:1},delay:250},Ae={initial:{opacity:0},enter:{opacity:1},class:"chips",delay:450},Le=["onClick"],qe={class:"logotype-images-wrapper"},Ie=["src","delay"],Ee=["src"],Oe=["src"];function Ne(e,o,c,f,h,r){const n=u("slide"),m=u("Navigation"),p=u("carousel"),l=E("motion");return t(),i("div",Ce,[s("div",ke,[d((t(),i("div",Se,[$("Работаем с лидерами рынка ")])),[[l]]),d((t(),i("div",Ae,[(t(!0),i(b,null,x(r.getGroups(),a=>(t(),i("div",{key:a.id,onClick:Xe=>r.chipCLick(a.name),class:I({chip:!r.isSelected(a.name),"chip-active":r.isSelected(a.name)})},g(a.name),11,Le))),128))])),[[l]]),s("div",qe,[(t(!0),i(b,null,x(r.getCompaniesLogo(),a=>d((t(),i("img",{key:a.id,src:`/assets/experience_logotypes/${a.img}.png`,class:"logotype-img",alt:"err",initial:{opacity:0},enter:{opacity:1},delay:30*a.id},null,8,Ie)),[[l]])),128))])]),d((t(),y(p,{initial:{opacity:0},enter:{opacity:1},delay:250,"items-to-show":1,class:"slider sm:hidden min-h-[128px]",transition:"100",autoplay:"4000",wrapAround:"",mouseDrag:"",pauseAutoplayOnHover:""},{addons:_(()=>[v(m)]),default:_(()=>[(t(!0),i(b,null,x(r.getCompaniesLogo(),a=>(t(),y(n,{key:a.id,class:"slide"},{default:_(()=>[s("img",{class:"slide-img",src:`/assets/experience_logotypes/${a.img}.png`,alt:"err"},null,8,Ee)]),_:2},1024))),128))]),_:1})),[[l]]),d((t(),y(p,{initial:{opacity:0},enter:{opacity:1},delay:250,"items-to-show":3,class:"slider hidden sm:block md:hidden min-h-[128px]",autoplay:"4000",wrapAround:"",mouseDrag:"",pauseAutoplayOnHover:""},{addons:_(()=>[v(m)]),default:_(()=>[(t(!0),i(b,null,x(r.getCompaniesLogo(),a=>(t(),y(n,{key:a.id},{default:_(()=>[s("img",{class:"slide-img",src:`/assets/experience_logotypes/${a.img}.png`,alt:"err"},null,8,Oe)]),_:2},1024))),128))]),_:1})),[[l]])])}const Ge=w(we,[["render",Ne],["__scopeId","data-v-1c8d46cb"]]),ze=[{id:1,img:"avatar-1",fullName:"Иванов Генадий Викторович",post:"Исполнительный директор",area:"Moskow"},{id:2,img:"avatar-2",fullName:"Иванов Генадий Викторович",post:"Генеральный директор",area:"Moskow"},{id:3,img:"avatar-3",fullName:"Иванов Генадий Викторович",post:"Директор по развитию",area:"Moskow"}],Be={name:"ev-managers",components:{Carousel:C,Slide:k,Pagination:S,Navigation:A},data(){return{employees:ze}},methods:{getImageURL:e=>new URL(Object.assign({})[`../../assets/avatars/${e}.png`],import.meta.url).href}},We=e=>(L("data-v-35d76f9c"),e=e(),q(),e),De={class:"managers-section"},Pe=We(()=>s("div",{class:"manager-section-title"},[s("h2",{class:"text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold"}," Состав директоров "),s("p",{class:"text-lg font-light"}," We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients. ")],-1)),je={class:"cards"},Me=["src"],Ve={class:"card-description"},He={class:"text-gray-700 inline-block font-bold"},Re={class:"text-red-700 inline-block font-medium"},Te={class:"text-gray-500 inline-block font-light"};function Fe(e,o,c,f,h,r){return t(),i("div",De,[Pe,s("div",je,[(t(!0),i(b,null,x(h.employees,n=>(t(),i("div",{key:n.id,class:"card"},[s("img",{class:"manager-ava blur",src:`/assets/avatars/${n.img}.png`,alt:"no img"},null,8,Me),s("div",Ve,[s("span",He,g(n.fullName),1),s("span",Re,g(n.post),1),s("span",Te,g(n.area),1)])]))),128))])])}const Ue=w(Be,[["render",Fe],["__scopeId","data-v-35d76f9c"]]),Je={name:"IndexPage",components:{evBannerSection:se,evExperienceSection:$e,evCustomersSection:Ge,evManagerSection:Ue},data(){return{}}},Ke={class:"scroll-hidden bg-gray-50 px-2 pt-2 md:px-4 md:pt-3.5 pb-4 md:pb-6"};function Qe(e,o,c,f,h,r){const n=u("evBannerSection"),m=u("evExperienceSection"),p=u("evCustomersSection"),l=u("evManagerSection");return t(),i("div",Ke,[v(n),v(m),v(p),v(l)])}const et=w(Je,[["render",Qe],["__scopeId","data-v-da677320"]]);export{et as default};

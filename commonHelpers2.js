import{c as H}from"./assets/exercises-modal-35c32130.js";import{a as p,i as T}from"./assets/vendor-8cce9181.js";let R=document.querySelector(".quote-text"),B=document.querySelector(".quote-author");p.defaults.baseURL="https://energyflow.b.goit.study/api";const U="info",h=JSON.parse(localStorage.getItem(U)),A=new Date().getDate(),W=new Date().getMonth();h===null||A!==h.date||W!==h.month?E("quote"):(R.textContent=h.quote,B.textContent=h.author);async function E(e){try{const t=await p.get(`${e}`),{data:{author:s,quote:n}}=t,a={author:s,quote:n,date:A,month:W};localStorage.setItem(U,JSON.stringify(a)),R.textContent=a.quote,B.textContent=a.author}catch(t){console.log(t.message)}}const N="https://energyflow.b.goit.study/api/exercises",b="formValusForSearch",D=document.querySelector(".title-container"),j=document.querySelector(".placeholder-container"),u=document.querySelector(".placeholder-container"),m=document.querySelector(".training-search-form"),l=document.createElement("ul"),L=document.querySelector(".cansel-button-ex"),J=document.querySelector(".exercises-container"),f="sessionResultOfSearch",y="pastSearchParams";let z=Number(sessionStorage.getItem("activeSearchPage"))??0,i={group:"",item:"",keyWord:""};L.addEventListener("click",()=>{L.classList.add("display-none"),m.firstElementChild.value="",sessionStorage.removeItem(b)});l.classList.add("search-result-list");j.addEventListener("click",X);m.addEventListener("submit",G);m.addEventListener("input",Q);m.querySelector('[name="exercise-name"]').value=sessionStorage.getItem(b)??"";function K(){sessionStorage.removeItem(f),sessionStorage.removeItem(y),sessionStorage.removeItem("activeSearchPage")}function _(){J.classList.add("styles-for-ex-search-results")}function V(){J.classList.remove("styles-for-ex-search-results")}function Z(){m.classList.add("display-none"),D.innerHTML='<h2 class="exercises-title">Exercises</h2>'}function Q(e){L.classList.remove("display-none"),sessionStorage.setItem(b,e.target.value)}async function G(e){e.preventDefault(),L.classList.add("display-none"),i.keyWord=m.querySelector('[name="exercise-name"]').value.trim().toLowerCase().replace(/\s/g,""),m.querySelector('[name="exercise-name"]').value="",sessionStorage.removeItem(b),u.innerHTML='<p><span class="exercises-modal-loader"></span></p>';const{data:t}=await q(i,1);if(t.results.length===0){u.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}sessionStorage.setItem(f,JSON.stringify(t)),sessionStorage.setItem(y,JSON.stringify(i)),k(t,i)}async function X(e){if(i.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;i.group=t.lastElementChild.textContent,i.item=t.firstChild.textContent,u.innerHTML='<p><span class="exercises-modal-loader"></span></p>';const{data:s}=await q(i);if(!s.results){u.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}sessionStorage.setItem(f,JSON.stringify(s)),sessionStorage.setItem(y,JSON.stringify(i)),k(s,i)}async function q({group:e,item:t,keyWord:s},n=1){let a=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await p.get(`${N}?${e.toLowerCase()}=${t.toLowerCase()}&page=${n}&limit=${a}`):await p.get(`${N}?${e.toLowerCase()}=${t.toLowerCase()}&keyword=${s}&page=${n}&limit=${a}`)}catch(o){T.error({position:"topRight",message:"Something went wrong. Our top bodybuilder scientists are already working on it."}),console.log(o)}}function F({results:e}){return e.map(({bodyPart:t,rating:s,name:n,target:a,burnedCalories:o,time:r,_id:c})=>`<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
                <p class="rating-num">${s.toFixed(1)}</p>
                <svg class="rating-star-svg" width="16" height="16">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#rating-star"></use>
                </svg>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${c} data-exercise-modal-open>Start
                <svg class="start-svg" width="18" height="18">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-arrow-right"></use>
                </svg>
            </button>
        </div>
      </div>
      <div class="info-about-exercise">
        <div class="exercise-name">
            <svg class="runnig-svg" width="24" height="24">
                <use href="/project-dev-hunters/assets/sprite-f8222074.svg#running-man"></use>
            </svg>
            <h2>${n[0].toUpperCase()+n.slice(1)}</h2>
        </div>
        <div class="additional-information">
            <p class=>Burned calories: <span class="info-from-back">${o} / ${r} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${a[0].toUpperCase()+a.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function Y(e,{totalPages:t},s=0,n=7){if(t===1)return;const a=document.createElement("ul");a.classList.add("pagination-counter"),a.addEventListener("click",P);let o;s==1?o=Number(s)-1:s==2?o=Number(s)-2:Number(s)==3?o=Number(s)-3:Number(s)>3?o=Number(s)-4:o=Number(s);let r=0;for(let c=o;c<n+Number(s);c++){r+=1;const g=document.createElement("li");if(g.textContent=c+1,g.classList.add("one-count"),a.append(g),(c+1==s||s===0&&c===0)&&g.classList.add("active-count"),c+1===t)break;if(r===7)break;sessionStorage.setItem("activeSearchPage",s)}e.after(a),e.classList.add("exercises-margin-for-pagin")}async function P(e){if(e.target.nodeName==="UL")return;i.group===""&&(i={...JSON.parse(sessionStorage.getItem(y))}),u.innerHTML='<p><span class="exercises-modal-loader"></span></p>';const{data:t}=await q(i,e.target.textContent);ee(t,e)}function ee(e,t){l.innerHTML=F(e),u.innerHTML="",u.appendChild(l),Y(l,e,t.target.textContent),_(),H()}function k(e,t,s){l.innerHTML=F(e),u.innerHTML="",u.appendChild(l),m.classList.remove("display-none"),D.innerHTML=`<h2 class="exercises-title">Exercises /</h2><p>${t.item[0].toUpperCase()+t.item.slice(1,t.item.length)}</p>`,Y(l,e,s),e.totalPages>1?l.classList.add("additional-margin"):l.classList.remove("additional-margin"),_(),H()}function te(){const e=JSON.parse(sessionStorage.getItem(f));if(e===null)return;const t=JSON.parse(sessionStorage.getItem(y));k(e,t,z)}const se=localStorage.getItem("active-category"),S=document.getElementById(se),O=document.querySelectorAll(".choose-category-button"),d=document.querySelector(".placeholder-container"),ae="https://energyflow.b.goit.study/api/filters";let M=1;async function v(e,t){function s(){return window.innerWidth<768?8:12}try{const n=s(),a=await p.get(`${ae}?filter=${e}&page=${t}&limit=${n}`);return a.data.results.length?a.data:(console.error("No results found for this filter."),null)}catch(n){console.error("Error fetching images:",n)}}function oe({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function w(e){if(e){let t="";e.results.forEach(n=>{t+=oe(n)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,d.innerHTML="",d.appendChild(s),d.insertAdjacentHTML("beforeend","<div id='pagination' class='tui-pagination'></div>")}else d.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}O.forEach(e=>{e.addEventListener("click",async()=>{Z(),V(),K(),O.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;d.innerHTML='<p class="loader"><span class="exercises-modal-loader"></span></p>',(async()=>{const s=await v(t,M);s&&(w(s),x(s))})()})});S&&sessionStorage.getItem(f)===null?(S.classList.add("active-category"),d.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const e=await v(S.innerText,M);e&&(w(e),x(e))})()):sessionStorage.getItem(f)!==null?(S.classList.add("active-category"),te()):(document.getElementById("muscles").classList.add("active-category"),d.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const t=await v("Muscles",M);t&&(w(t),x(t))})());function x({page:e,results:t,totalPages:s}){if(s!==1){const n=document.querySelector("#pagination");for(let o=1;o<=s;o++){const r=document.createElement("a");r.href="#",o==e?r.classList.add("tui-page-btn","tui-is-selected"):r.classList.add("tui-page-btn"),r.textContent=o,r.addEventListener("click",c=>{const g=c.target.textContent;d.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const C=await v(t[0].filter,g);C&&(w(C),x(C))})()}),n.appendChild(r)}const a=document.querySelectorAll(".tui-page-btn");a.forEach(o=>{o.addEventListener("click",r=>{r.preventDefault(),a.forEach(c=>{c.classList.remove("tui-is-selected")}),o.classList.add("tui-is-selected")})})}}p.defaults.baseURL="https://energyflow.b.goit.study/api";const $={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};$.form.addEventListener("submit",ne);async function ne(e){e.preventDefault();const t=$.form.email.value.trim();try{if(!t){I("Oooops! You forgot to enter the email!");return}ie(t);const s=await re(t);ce("Thank you for subscribing! We're excited to have you on board! 🎉"),$.form.reset()}catch(s){s.response.status===409&&I("Sorry! This email has already been declarated!")}}async function re(e){return(await p.post("subscription",{email:e})).data}function ie(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(e.match(t)===null)return I("Please, enter the correct email!")}function ce(e){T.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.9)",messageColor:"rgba(0, 0, 0, 0.7)",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}function I(e){T.show({message:e,backgroundColor:"rgba(205, 92, 92, 0.5)",messageColor:"rgba(0, 0, 0, 0.8)",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}
//# sourceMappingURL=commonHelpers2.js.map
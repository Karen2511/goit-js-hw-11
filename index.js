import{a as p,S as m,i as a}from"./assets/vendor-D8hBcPQM.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="52398872-c12541878b4eb59882334d5d5";function h(o){return p.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader");let b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
        <li class="gallery-item">
          <a href="${s}" class="gallery-link">
            <img src="${i}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t}</p>
            <p><b>Views:</b> ${n}</p>
            <p><b>Comments:</b> ${d}</p>
            <p><b>Downloads:</b> ${f}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){l.innerHTML=""}function q(){c.classList.remove("hidden")}function v(){c.classList.add("hidden")}const u=document.querySelector(".form"),w=u.querySelector("input[name='search-text']");u.addEventListener("submit",P);function P(o){o.preventDefault();const r=w.value.trim();if(!r){a.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}S(),q(),h(r).then(i=>{if(i.hits.length===0){a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(i.hits)}).catch(()=>{a.error({title:"Error",message:"Something went wrong. Try again later.",position:"topRight"})}).finally(()=>{v()})}
//# sourceMappingURL=index.js.map

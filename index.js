import{a as p,S as y,i as n}from"./assets/vendor-C9vNCoLC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const h="https://pixabay.com/api/",g="50678059-acab6cb55d047f5aae1276b93";async function b(s){try{return(await p.get(h,{params:{key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(t){throw t}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),L=new y(".gallery a");function w(s){const t=s.map(({webformatURL:o,largeImageURL:i,tags:e,likes:r,views:a,comments:d,downloads:m})=>`
        <li class="photo-card">
          <a href="${i}">
            <img src="${o}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info-item"><b>Likes</b><br>${r}</p>
            <p class="info-item"><b>Views</b><br>${a}</p>
            <p class="info-item"><b>Comments</b><br>${d}</p>
            <p class="info-item"><b>Downloads</b><br>${m}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",t),L.refresh()}function v(){l.innerHTML=""}function S(){u.classList.add("active")}function c(){u.classList.remove("active")}const f=document.querySelector(".form"),q=f.querySelector('input[name="search-text"]');f.addEventListener("submit",async s=>{s.preventDefault();const t=q.value.trim();if(!t){n.error({message:"Enter a search query!"});return}v(),S();try{const o=await b(t);if(c(),o.hits.length===0){n.error({id:"error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"fadeInDown"});return}w(o.hits)}catch{c(),n.error({title:"Error",message:"Something went wrong. Please try again later."})}});
//# sourceMappingURL=index.js.map

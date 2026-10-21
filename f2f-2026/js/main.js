'use strict';
const day1 = [
['10:00–10:15 AM','Registration and welcome','Welcome'],
['10:15–10:45 AM','Inaugural session: welcome address; symposium introduction; Head of Department and Principal/Director addresses; guest-of-honour address; inaugural address; presidential remarks','Inaugural'],
['10:45–11:00 AM','High tea','Break'],
['11:00–11:40 AM','Plenary Talk — Thematic Area I: Physics','Plenary'],
['11:40 AM–12:30 PM','Oral Presentations — Thematic Area I: Physics (5 × 10 minutes)','Oral'],
['12:30–1:15 PM','Lunch break','Break'],
['1:15–1:55 PM','Plenary Talk — Thematic Area II: Chemistry','Plenary'],
['1:55–2:45 PM','Oral Presentations — Thematic Area II: Chemistry (5 × 10 minutes)','Oral'],
['2:45–3:00 PM','Tea break','Break'],
['3:00–3:35 PM','Poster Flash Talks — Thematic Area I: Physics (7 × 5 minutes)','Poster flash'],
['3:35–4:10 PM','Poster Flash Talks — Thematic Area II: Chemistry (7 × 5 minutes)','Poster flash'],
['4:10–4:30 PM','Day 1 summary and announcements','Closing']
];
const day2 = [
['10:00–10:15 AM','Welcome and overview of the day','Welcome'],
['10:15–11:00 AM','Plenary Talk — Thematic Area III: Mathematics','Plenary'],
['11:00–11:15 AM','Morning tea','Break'],
['11:15 AM–12:05 PM','Oral Presentations — Thematic Area III: Mathematics (5 × 10 minutes)','Oral'],
['12:05–12:45 PM','Plenary Talk — Thematic Area IV: Human–Technology Interaction','Plenary'],
['12:45–1:30 PM','Lunch','Break'],
['1:30–2:20 PM','Oral Presentations — Thematic Area IV: Human–Technology Interaction (5 × 10 minutes)','Oral'],
['2:20–2:35 PM','Evening tea','Break'],
['2:35–3:10 PM','Poster Flash Talks — Thematic Area III: Mathematics (7 × 5 minutes)','Poster flash'],
['3:10–3:45 PM','Poster Flash Talks — Thematic Area IV: Human–Technology Interaction (7 × 5 minutes)','Poster flash'],
['3:45–4:30 PM','Valedictory session: rapporteur’s report; symposium highlights; acknowledgements; valedictory address','Valedictory']
];
function renderSchedule(id, rows){const root=document.getElementById(id);rows.forEach(([time,title,type])=>{const row=document.createElement('div');row.className='schedule-row'+(type==='Plenary'?' plenary':'');for(const [cls,value] of [['schedule-time',time],['schedule-title',title],['schedule-type',type]]){const el=document.createElement('div');el.className=cls;el.textContent=value;row.appendChild(el)}root.appendChild(row)})}
renderSchedule('schedule-day1',day1);renderSchedule('schedule-day2',day2);
const tabs=[...document.querySelectorAll('[role="tab"]')];function activateTab(i,focus=true){tabs.forEach((tab,j)=>{const active=i===j;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;document.getElementById(tab.getAttribute('aria-controls')).hidden=!active});if(focus)tabs[i].focus()}
tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activateTab(i,false));tab.addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)){event.preventDefault();const next=event.key==='Home'?0:event.key==='End'?tabs.length-1:(i+(event.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;activateTab(next)}})});
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.site-nav');toggle.addEventListener('click',()=>{const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));toggle.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');nav.classList.toggle('open',!expanded)});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus()}});
window.addEventListener('scroll',()=>document.querySelector('.site-header').classList.toggle('scrolled',window.scrollY>15),{passive:true});
const config=window.F2F_CONFIG||{};for(const [action,key,label] of [['register','registrationUrl','Open registration ↗'],['abstract','abstractSubmissionUrl','Submit abstract / Apply ↗']]){const wrapper=document.querySelector(`[data-action="${action}"]`),url=config[key];if(typeof url==='string'&&/^https:\/\//i.test(url)){const a=document.createElement('a');a.className='button button-primary';a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=label;wrapper.replaceChildren(a)}}
const optional=document.getElementById('optional-links');for(const [key,label] of [['mapsUrl','Directions ↗'],['instituteWebsite','Institute website ↗']]){const url=config[key];if(typeof url==='string'&&/^https:\/\//i.test(url)){const a=document.createElement('a');a.className='inline-link';a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=label;optional.appendChild(a)}}if(config.contactEmail&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(config.contactEmail)){const a=document.createElement('a');a.className='inline-link';a.href='mailto:'+config.contactEmail;a.textContent='Contact organisers ↗';optional.appendChild(a)}if(config.canonicalUrl&&/^https:\/\//.test(config.canonicalUrl)){const canonical=document.createElement('link');canonical.rel='canonical';canonical.href=config.canonicalUrl;document.head.appendChild(canonical)}

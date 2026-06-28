(()=>{
  const data=window.NEPAL_STUDY_DATA;
  const deck=document.getElementById('deck');
  const grammarBtn=document.getElementById('grammarBtn');
  const wordBtn=document.getElementById('wordBtn');
  const backdrop=document.getElementById('panelBackdrop');
  const grammarPanel=document.getElementById('grammarPanel');
  const wordPanel=document.getElementById('wordPanel');
  let current=0,startX=0,startY=0;
  let nepaliVoice=null;

  const esc=s=>String(s??'').replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));

  function pickVoice(){
    if(!('speechSynthesis' in window)) return null;
    const voices=speechSynthesis.getVoices ? speechSynthesis.getVoices() : [];
    nepaliVoice=voices.find(v=>/^ne/i.test(v.lang)) || voices.find(v=>/nepali|nepal/i.test(v.name)) || voices.find(v=>/^hi/i.test(v.lang)) || voices.find(v=>/hindi|हिन्दी/i.test(v.name)) || voices.find(v=>/^en-IN/i.test(v.lang)) || null;
    return nepaliVoice;
  }

  function flash(el){
    if(!el) return;
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
  }

  function speak(text,el){
    flash(el);
    if(!text || !('speechSynthesis' in window)) return;
    try{
      speechSynthesis.cancel();
      const voice=pickVoice();
      const u=new SpeechSynthesisUtterance(text);
      if(voice){u.voice=voice;u.lang=voice.lang;}else{u.lang='ne-NP';}
      u.rate=.82;
      u.pitch=1;
      u.volume=1;
      speechSynthesis.speak(u);
    }catch(e){}
  }

  if('speechSynthesis' in window){
    pickVoice();
    speechSynthesis.onvoiceschanged=pickVoice;
  }

  function renderDeck(){
    deck.innerHTML=data.slides.map((slide,idx)=>{
      const blocks=slide.blocks.map(b=>{
        if(slide.kind==='answer'){
          return `<button class="answer-block" type="button" data-audio="${esc(b.audio)}"><span class="label">${esc(b.tag)}</span><div class="devanagari">${esc(b.dev)}</div><div class="roman">${esc(b.rom)}</div><div class="kana">${esc(b.kana)}</div><div class="answer-jp">${esc(b.jp)}</div></button>`;
        }
        return `<button class="prompt-block" type="button" data-audio="${esc(b.audio)}"><span class="label">${esc(b.tag)}</span><div class="jp">${esc(b.jp)}</div><div class="en">(${esc(b.en)})</div></button>`;
      }).join('');
      const funcs=(slide.functions||[]).map(f=>`<div class="function-chip">${esc(f.main)}<small>${esc(f.sub)}</small></div>`).join('');
      return `<article class="slide"><div class="card"><div class="card-head"><div class="lesson-title">${esc(slide.title)}</div><div class="page-pill">${idx+1}/${data.slides.length}</div></div><div class="blocks ${slide.practice?'practice':''}">${blocks}</div>${funcs?`<div class="function-box">${funcs}</div>`:''}</div></article>`;
    }).join('');
    deck.querySelectorAll('[data-audio]').forEach(btn=>btn.addEventListener('click',()=>speak(btn.dataset.audio,btn)));
    applyTransform();
    renderWords();
  }

  function applyTransform(){deck.style.transform=`translateX(${-current*100}%)`;}
  function go(n){current=(n+data.slides.length)%data.slides.length;applyTransform();renderWords();}

  function renderGrammar(){
    const verb=data.grammar.verb.map(x=>`<div class="grammar-item"><div class="g-ne">${esc(x[0])}</div><div class="g-ro">${esc(x[1])}</div><div class="g-ja">${esc(x[2])}</div></div>`).join('');
    const cases=data.grammar.cases.map(x=>`<div class="grammar-item"><div class="g-ne">${esc(x[0])}</div><div class="g-ro">${esc(x[1])}</div><div class="g-ja">${esc(x[2])}</div></div>`).join('');
    grammarPanel.innerHTML=`<div class="panel-head"><h2 class="panel-title">GRAMMAR MAP</h2><button class="close-panel" type="button" data-close>×</button></div><p class="mini-note">たまに確認する用。プレイヤーに被っても、一画面でざっと見られる地図です。</p><div class="section-label">VERB SHAPE</div><div class="grammar-grid">${verb}</div><div class="section-label">NOUN CASE / POSTPOSITIONS</div><div class="grammar-grid">${cases}</div><p class="mini-note" style="margin-top:12px">近音カタカナ：ㇵ=息を出す印、下点=反り舌、ン=鼻に抜ける音。</p>`;
    grammarPanel.querySelector('[data-close]').onclick=closePanels;
  }

  function renderWords(){
    if(!wordPanel.dataset.ready){
      wordPanel.innerHTML=`<div class="panel-head"><h2 class="panel-title">WORD MAP</h2><button class="close-panel" type="button" data-close>×</button></div><p class="mini-note">単語をタップするとネパール語音声。黄色は今のカードに出る語です。</p><div class="word-list" id="wordList"></div>`;
      wordPanel.dataset.ready='1';
      wordPanel.querySelector('[data-close]').onclick=closePanels;
    }
    const text=JSON.stringify(data.slides[current]);
    const list=document.getElementById('wordList');
    list.innerHTML=data.words.map(w=>`<button class="word-row ${text.includes(w[0])?'current':''}" type="button" data-audio="${esc(w[4])}"><div class="word-ne">${esc(w[0])}</div><div><div class="word-main">${esc(w[1])} / ${esc(w[2])}</div><div class="word-sub">${esc(w[3])}</div></div></button>`).join('');
    list.querySelectorAll('[data-audio]').forEach(btn=>btn.addEventListener('click',()=>speak(btn.dataset.audio,btn)));
  }

  function openPanel(panel){
    closePanels(false);
    backdrop.classList.add('open');
    panel.classList.add('open');
    if(panel===grammarPanel) grammarBtn.classList.add('panel-on');
    if(panel===wordPanel) wordBtn.classList.add('panel-on');
  }
  function closePanels(hideBackdrop=true){
    grammarPanel.classList.remove('open');wordPanel.classList.remove('open');grammarBtn.classList.remove('panel-on');wordBtn.classList.remove('panel-on');
    if(hideBackdrop) backdrop.classList.remove('open');
  }

  grammarBtn.addEventListener('click',e=>{e.stopPropagation();openPanel(grammarPanel);});
  wordBtn.addEventListener('click',e=>{e.stopPropagation();openPanel(wordPanel);});
  backdrop.addEventListener('click',closePanels);

  document.addEventListener('touchstart',e=>{
    if(e.target.closest('.side-panel')) return;
    const t=e.touches[0];startX=t.clientX;startY=t.clientY;
  },{passive:true});
  document.addEventListener('touchend',e=>{
    if(e.target.closest('.side-panel')) return;
    const t=e.changedTouches[0],dx=t.clientX-startX,dy=t.clientY-startY;
    if(Math.abs(dx)>30 && Math.abs(dx)>Math.abs(dy)*1.05) go(current+(dx<0?1:-1));
  },{passive:true});
  document.addEventListener('contextmenu',e=>e.preventDefault());

  renderGrammar();
  renderDeck();
})();

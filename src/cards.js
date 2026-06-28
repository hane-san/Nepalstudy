window.NEPAL_STUDY_DATA={
  slides:[
    {title:'PRESENT · PROMPT',kind:'prompt',blocks:[
      {tag:'一人称・平叙',jp:'ぼくはネパール語を話します。',en:'I speak Nepali.',audio:'म नेपाली बोल्छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはネパール語を話しますか？',en:'Do you speak Nepali?',audio:'तपाईं नेपाली बोल्नुहुन्छ?'}
    ]},
    {title:'PRESENT · ANSWER',kind:'answer',functions:[
      {main:'主語 → 動詞の形',sub:'ma → bol-chu / tapāī̃ → bol-nu-huncha'},
      {main:'平叙 / 疑問 → 語順',sub:'疑問でも語順はほぼそのまま。音と「？」で確認する。'}
    ],blocks:[
      {tag:'一人称・平叙',dev:'म नेपाली बोल्छु।',rom:'ma nepālī bol-chu',kana:'マ ネパーリー ボルチュ',jp:'ぼくはネパール語を話します。',audio:'म नेपाली बोल्छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं नेपाली बोल्नुहुन्छ?',rom:'tapāī̃ nepālī bol-nu-huncha?',kana:'タパイン ネパーリー ボルヌフンチャ？',jp:'あなたはネパール語を話しますか？',audio:'तपाईं नेपाली बोल्नुहुन्छ?'}
    ]},
    {title:'PRESENT · PRACTICE',kind:'prompt',practice:true,blocks:[
      {tag:'三人称男性・平叙',jp:'ラーマは市場へ行きます。',en:'Rama goes to the market.',audio:'राम बजार जान्छ।'},
      {tag:'三人称女性・疑問',jp:'シータは歌を歌いますか？',en:'Does Sita sing a song?',audio:'सीता गीत गाउँछिन्?'},
      {tag:'一人称・平叙',jp:'ぼくはお茶を飲みます。',en:'I drink tea.',audio:'म चिया पिउँछु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは本を読みますか？',en:'Do you read a book?',audio:'तपाईं किताब पढ्नुहुन्छ?'}
    ]},
    {title:'PRESENT · PRACTICE ANSWER',kind:'answer',practice:true,functions:[
      {main:'同じ現在形関数を転用',sub:'動詞と名詞を入れ替えても、主語から語尾を決める。'},
      {main:'三人称の差',sub:'Rām は -cha、Sītā は -chin が見える。'}
    ],blocks:[
      {tag:'三人称男性・平叙',dev:'राम बजार जान्छ।',rom:'Rām bajār jān-cha',kana:'ラーム バザール ジャンチャ',jp:'ラーマは市場へ行きます。',audio:'राम बजार जान्छ।'},
      {tag:'三人称女性・疑問',dev:'सीता गीत गाउँछिन्?',rom:'Sītā gīt gāũ-chin?',kana:'シーター ギート ガウンチン？',jp:'シータは歌を歌いますか？',audio:'सीता गीत गाउँछिन्?'},
      {tag:'一人称・平叙',dev:'म चिया पिउँछु।',rom:'ma chiyā piũ-chu',kana:'マ チヤー ピウンチュ',jp:'ぼくはお茶を飲みます。',audio:'म चिया पिउँछु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं किताब पढ्नुहुन्छ?',rom:'tapāī̃ kitāb paḍh-nu-huncha?',kana:'タパイン キターブ パルヌフンチャ？',jp:'あなたは本を読みますか？',audio:'तपाईं किताब पढ्नुहुन्छ?'}
    ]}
  ],
  words:[
    ['म','ma','ぼく','I','म'],['तपाईं','tapāī̃','あなた 丁寧','you','तपाईं'],['राम','Rām','ラーマ','Rama','राम'],['सीता','Sītā','シータ','Sita','सीता'],['नेपाली','nepālī','ネパール語','Nepali','नेपाली'],['बोल्नु','bolnu','話す','to speak','बोल्नु'],['बजार','bajār','市場','market','बजार'],['जानु','jānu','行く','to go','जानु'],['गीत','gīt','歌','song','गीत'],['गाउनु','gāunu','歌う','to sing','गाउनु'],['चिया','chiyā','お茶','tea','चिया'],['पिउनु','piunu','飲む','to drink','पिउनु'],['किताब','kitāb','本','book','किताब'],['पढ्नु','paḍhnu','読む・勉強する','to read; to study','पढ्नु'],['भात','bhāt','ご飯','rice','भात'],['खानु','khānu','食べる','to eat','खानु'],['घर','ghar','家','home','घर'],['पानी','pānī','水','water','पानी'],['साथी','sāthī','友達','friend','साथी'],['विद्यालय','vidyālaya','学校','school','विद्यालय']
  ],
  grammar:{
    verb:[
      ['म बोल्छु','ma bol-chu','私は話します'],['तपाईं बोल्नुहुन्छ','tapāī̃ bol-nu-huncha','あなたは話します'],['राम बोल्छ','Rām bol-cha','ラーマは話します'],['सीता बोल्छिन्','Sītā bol-chin','シータは話します'],['म बोल्दिनँ','ma bol-dinã','私は話しません'],['म बोल्दै छु','ma bol-dai chu','私は話しています'],['बोल्न सक्छु','bol-na sak-chu','話せます'],['बोल्नुपर्छ','bol-nu-parcha','話さなければなりません']
    ],
    cases:[
      ['Ø','subject','〜は / が'],['लाई','lāī','〜を / に'],['ले','le','〜が / で'],['को / की / का','ko / kī / kā','〜の'],['मा','mā','〜に / で'],['बाट','bāṭa','〜から'],['सँग','sãga','〜と / 持つ'],['सम्म','samma','〜まで'],['देखि','dekhi','〜から'],['लागि','lāgi','〜のために']
    ]
  }
};

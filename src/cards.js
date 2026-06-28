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
    ]},

    {title:'NEGATIVE · PROMPT',kind:'prompt',blocks:[
      {tag:'一人称・平叙',jp:'ぼくはネパール語を話しません。',en:'I do not speak Nepali.',audio:'म नेपाली बोल्दिनँ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは肉を食べませんか？',en:'Do you not eat meat?',audio:'तपाईं मासु खानुहुन्न?'}
    ]},
    {title:'NEGATIVE · ANSWER',kind:'answer',functions:[
      {main:'否定 → 動詞の中に din / hunna が入る',sub:'ma は bol-dinã、tapāī̃ は khā-nu-hunna。'},
      {main:'疑問でも語順はほぼ同じ',sub:'否定疑問も、まずは音と「？」で処理する。'}
    ],blocks:[
      {tag:'一人称・平叙',dev:'म नेपाली बोल्दिनँ।',rom:'ma nepālī bol-dinã',kana:'マ ネパーリー ボルディナン',jp:'ぼくはネパール語を話しません。',audio:'म नेपाली बोल्दिनँ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं मासु खानुहुन्न?',rom:'tapāī̃ māsu khā-nu-hunna?',kana:'タパイン マース カㇵーヌフンナ？',jp:'あなたは肉を食べませんか？',audio:'तपाईं मासु खानुहुन्न?'}
    ]},
    {title:'NEGATIVE · PRACTICE',kind:'prompt',practice:true,blocks:[
      {tag:'三人称男性・平叙',jp:'ラーマはお茶を飲みません。',en:'Rama does not drink tea.',audio:'राम चिया पिउँदैन।'},
      {tag:'三人称女性・疑問',jp:'シータは市場へ行きませんか？',en:'Does Sita not go to the market?',audio:'सीता बजार जाँदिनन्?'},
      {tag:'一人称・平叙',jp:'ぼくは牛乳を飲みません。',en:'I do not drink milk.',audio:'म दूध पिउँदिनँ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはこの本を読みませんか？',en:'Do you not read this book?',audio:'तपाईं यो किताब पढ्नुहुन्न?'}
    ]},
    {title:'NEGATIVE · PRACTICE ANSWER',kind:'answer',practice:true,functions:[
      {main:'否定形も主語で変わる',sub:'ma は -dinã、Rām は -daina、Sītā は -dinan。'},
      {main:'丁寧な否定',sub:'tapāī̃ は 動詞 + nu-hunna 型で丁寧に否定する。'}
    ],blocks:[
      {tag:'三人称男性・平叙',dev:'राम चिया पिउँदैन।',rom:'Rām chiyā piũ-daina',kana:'ラーム チヤー ピウンダイナ',jp:'ラーマはお茶を飲みません。',audio:'राम चिया पिउँदैन।'},
      {tag:'三人称女性・疑問',dev:'सीता बजार जाँदिनन्?',rom:'Sītā bajār jā̃-din-an?',kana:'シーター バザール ジャンディナン？',jp:'シータは市場へ行きませんか？',audio:'सीता बजार जाँदिनन्?'},
      {tag:'一人称・平叙',dev:'म दूध पिउँदिनँ।',rom:'ma dūdh piũ-dinã',kana:'マ ドゥードㇵ ピウンディナン',jp:'ぼくは牛乳を飲みません。',audio:'म दूध पिउँदिनँ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं यो किताब पढ्नुहुन्न?',rom:'tapāī̃ yo kitāb paḍh-nu-hunna?',kana:'タパイン ヨ キターブ パルヌフンナ？',jp:'あなたはこの本を読みませんか？',audio:'तपाईं यो किताब पढ्नुहुन्न?'}
    ]},

    {title:'PROGRESSIVE · PROMPT',kind:'prompt',blocks:[
      {tag:'一人称・平叙',jp:'ぼくはネパール語を勉強しています。',en:'I am studying Nepali.',audio:'म नेपाली पढ्दै छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはご飯を作っていますか？',en:'Are you cooking food?',audio:'तपाईं खाना पकाउँदै हुनुहुन्छ?'}
    ]},
    {title:'PROGRESSIVE · ANSWER',kind:'answer',functions:[
      {main:'進行 → 動詞 + dai + いる',sub:'ma は paḍh-dai chu、tapāī̃ は paka-ũ-dai hunu-huncha。'},
      {main:'今している動作',sub:'習慣の現在形ではなく、「いま進行中」を作る。'}
    ],blocks:[
      {tag:'一人称・平叙',dev:'म नेपाली पढ्दै छु।',rom:'ma nepālī paḍh-dai chu',kana:'マ ネパーリー パルダイ チュ',jp:'ぼくはネパール語を勉強しています。',audio:'म नेपाली पढ्दै छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं खाना पकाउँदै हुनुहुन्छ?',rom:'tapāī̃ khānā paka-ũ-dai hunu-huncha?',kana:'タパイン カㇵーナー パカウンダイ フヌフンチャ？',jp:'あなたはご飯を作っていますか？',audio:'तपाईं खाना पकाउँदै हुनुहुन्छ?'}
    ]},
    {title:'PROGRESSIVE · PRACTICE',kind:'prompt',practice:true,blocks:[
      {tag:'三人称男性・平叙',jp:'ラーマは家へ行っています。',en:'Rama is going home.',audio:'राम घर जाँदै छ।'},
      {tag:'三人称女性・疑問',jp:'シータは手紙を書いていますか？',en:'Is Sita writing a letter?',audio:'सीता पत्र लेख्दै छिन्?'},
      {tag:'一人称・平叙',jp:'ぼくは写真を見ています。',en:'I am looking at a photo.',audio:'म तस्वीर हेर्दै छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは友達に会っていますか？',en:'Are you meeting a friend?',audio:'तपाईं साथीलाई भेट्दै हुनुहुन्छ?'}
    ]},
    {title:'PROGRESSIVE · PRACTICE ANSWER',kind:'answer',practice:true,functions:[
      {main:'dai は進行の目印',sub:'jā̃-dai / lekh-dai / her-dai / bheṭ-dai のように動詞へ付く。'},
      {main:'いる部分も主語で変わる',sub:'ma は chu、Rām は cha、Sītā は chin、tapāī̃ は hunu-huncha。'}
    ],blocks:[
      {tag:'三人称男性・平叙',dev:'राम घर जाँदै छ।',rom:'Rām ghar jā̃-dai cha',kana:'ラーム ガㇵル ジャンダイ チャ',jp:'ラーマは家へ行っています。',audio:'राम घर जाँदै छ।'},
      {tag:'三人称女性・疑問',dev:'सीता पत्र लेख्दै छिन्?',rom:'Sītā patra lekh-dai chin?',kana:'シーター パトラ レクㇵダイ チン？',jp:'シータは手紙を書いていますか？',audio:'सीता पत्र लेख्दै छिन्?'},
      {tag:'一人称・平叙',dev:'म तस्वीर हेर्दै छु।',rom:'ma tasbīr her-dai chu',kana:'マ タスビール ヘルダイ チュ',jp:'ぼくは写真を見ています。',audio:'म तस्वीर हेर्दै छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं साथीलाई भेट्दै हुनुहुन्छ?',rom:'tapāī̃ sāthī-lāī bheṭ-dai hunu-huncha?',kana:'タパイン サーティーライ ベㇵタ̣ダイ フヌフンチャ？',jp:'あなたは友達に会っていますか？',audio:'तपाईं साथीलाई भेट्दै हुनुहुन्छ?'}
    ]},

    {title:'WANT · PROMPT',kind:'prompt',blocks:[
      {tag:'一人称・平叙',jp:'ぼくはネパール語を学びたいです。',en:'I want to learn Nepali.',audio:'म नेपाली सिक्न चाहन्छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはカトマンズへ行きたいですか？',en:'Do you want to go to Kathmandu?',audio:'तपाईं काठमाडौं जान चाहनुहुन्छ?'}
    ]},
    {title:'WANT · ANSWER',kind:'answer',functions:[
      {main:'したい → 動詞 + na + चाहनु',sub:'sik-na chāhan-chu / jān-a chāha-nu-huncha。'},
      {main:'「〜することを望む」感覚',sub:'動詞を少し名詞っぽくして चाहनु に接続する。'}
    ],blocks:[
      {tag:'一人称・平叙',dev:'म नेपाली सिक्न चाहन्छु।',rom:'ma nepālī sik-na chāhan-chu',kana:'マ ネパーリー シクナ チャーハンチュ',jp:'ぼくはネパール語を学びたいです。',audio:'म नेपाली सिक्न चाहन्छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं काठमाडौं जान चाहनुहुन्छ?',rom:'tapāī̃ Kāṭhmāḍaũ jān-a chāha-nu-huncha?',kana:'タパイン カートマーダウン ジャナ チャーハヌフンチャ？',jp:'あなたはカトマンズへ行きたいですか？',audio:'तपाईं काठमाडौं जान चाहनुहुन्छ?'}
    ]},
    {title:'WANT · PRACTICE',kind:'prompt',practice:true,blocks:[
      {tag:'三人称男性・平叙',jp:'ラーマは本を買いたいです。',en:'Rama wants to buy a book.',audio:'राम किताब किन्न चाहन्छ।'},
      {tag:'三人称女性・疑問',jp:'シータはお茶を飲みたいですか？',en:'Does Sita want to drink tea?',audio:'सीता चिया पिउन चाहन्छिन्?'},
      {tag:'一人称・平叙',jp:'ぼくは名前を書きたいです。',en:'I want to write my name.',audio:'म नाम लेख्न चाहन्छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは映画を見たいですか？',en:'Do you want to watch a film?',audio:'तपाईं फिल्म हेर्न चाहनुहुन्छ?'}
    ]},
    {title:'WANT · PRACTICE ANSWER',kind:'answer',practice:true,functions:[
      {main:'目的の動詞は na 形へ',sub:'kin-na / piu-na / lekh-na / her-na を चाहनु の前に置く。'},
      {main:'主語の語尾を忘れない',sub:'chāhan-chu / chāhan-cha / chāhan-chin / chāha-nu-huncha。'}
    ],blocks:[
      {tag:'三人称男性・平叙',dev:'राम किताब किन्न चाहन्छ।',rom:'Rām kitāb kin-na chāhan-cha',kana:'ラーム キターブ キンナ チャーハンチャ',jp:'ラーマは本を買いたいです。',audio:'राम किताब किन्न चाहन्छ।'},
      {tag:'三人称女性・疑問',dev:'सीता चिया पिउन चाहन्छिन्?',rom:'Sītā chiyā piu-na chāhan-chin?',kana:'シーター チヤー ピウナ チャーハンチン？',jp:'シータはお茶を飲みたいですか？',audio:'सीता चिया पिउन चाहन्छिन्?'},
      {tag:'一人称・平叙',dev:'म नाम लेख्न चाहन्छु।',rom:'ma nām lekh-na chāhan-chu',kana:'マ ナーム レクㇵナ チャーハンチュ',jp:'ぼくは名前を書きたいです。',audio:'म नाम लेख्न चाहन्छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं फिल्म हेर्न चाहनुहुन्छ?',rom:'tapāī̃ film her-na chāha-nu-huncha?',kana:'タパイン フィルム ヘルナ チャーハヌフンチャ？',jp:'あなたは映画を見たいですか？',audio:'तपाईं फिल्म हेर्न चाहनुहुन्छ?'}
    ]},

    {title:'CAN · PROMPT',kind:'prompt',blocks:[
      {tag:'一人称・平叙',jp:'ぼくはネパール語を話せます。',en:'I can speak Nepali.',audio:'म नेपाली बोल्न सक्छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはフォームに記入できますか？',en:'Can you fill in the form?',audio:'तपाईं फारम भर्न सक्नुहुन्छ?'}
    ]},
    {title:'CAN · ANSWER',kind:'answer',functions:[
      {main:'できる → 動詞 + na + सक्नु',sub:'bol-na sak-chu / bhar-na sak-nu-huncha。'},
      {main:'能力・可能を作る',sub:'英語の can に近いが、前の動詞は na 形にする。'}
    ],blocks:[
      {tag:'一人称・平叙',dev:'म नेपाली बोल्न सक्छु।',rom:'ma nepālī bol-na sak-chu',kana:'マ ネパーリー ボルナ サクチュ',jp:'ぼくはネパール語を話せます。',audio:'म नेपाली बोल्न सक्छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं फारम भर्न सक्नुहुन्छ?',rom:'tapāī̃ phāram bhar-na sak-nu-huncha?',kana:'タパイン パㇵーラム バㇵルナ サクヌフンチャ？',jp:'あなたはフォームに記入できますか？',audio:'तपाईं फारम भर्न सक्नुहुन्छ?'}
    ]},
    {title:'CAN · PRACTICE',kind:'prompt',practice:true,blocks:[
      {tag:'三人称男性・平叙',jp:'ラーマはバスに乗れます。',en:'Rama can get on the bus.',audio:'राम बस चढ्न सक्छ।'},
      {tag:'三人称女性・疑問',jp:'シータは手紙を読めますか？',en:'Can Sita read the letter?',audio:'सीता पत्र पढ्न सक्छिन्?'},
      {tag:'一人称・平叙',jp:'ぼくは市場へ行けます。',en:'I can go to the market.',audio:'म बजार जान सक्छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはネパール語を書けますか？',en:'Can you write Nepali?',audio:'तपाईं नेपाली लेख्न सक्नुहुन्छ?'}
    ]},
    {title:'CAN · PRACTICE ANSWER',kind:'answer',practice:true,functions:[
      {main:'saknu の前は na 形',sub:'chaḍh-na / paḍh-na / jān-a / lekh-na。'},
      {main:'できる内容を名詞で増やす',sub:'bus, patra, bajār, nepālī などを目的語・場所に入れる。'}
    ],blocks:[
      {tag:'三人称男性・平叙',dev:'राम बस चढ्न सक्छ।',rom:'Rām bas chaḍh-na sak-cha',kana:'ラーム バス チャダ̣ㇵナ サクチャ',jp:'ラーマはバスに乗れます。',audio:'राम बस चढ्न सक्छ।'},
      {tag:'三人称女性・疑問',dev:'सीता पत्र पढ्न सक्छिन्?',rom:'Sītā patra paḍh-na sak-chin?',kana:'シーター パトラ パルナ サクチン？',jp:'シータは手紙を読めますか？',audio:'सीता पत्र पढ्न सक्छिन्?'},
      {tag:'一人称・平叙',dev:'म बजार जान सक्छु।',rom:'ma bajār jān-a sak-chu',kana:'マ バザール ジャナ サクチュ',jp:'ぼくは市場へ行けます。',audio:'म बजार जान सक्छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं नेपाली लेख्न सक्नुहुन्छ?',rom:'tapāī̃ nepālī lekh-na sak-nu-huncha?',kana:'タパイン ネパーリー レクㇵナ サクヌフンチャ？',jp:'あなたはネパール語を書けますか？',audio:'तपाईं नेपाली लेख्न सक्नुहुन्छ?'}
    ]}
  ],
  words:[
    ['म','ma','ぼく','I','म'],['तपाईं','tapāī̃','あなた 丁寧','you','तपाईं'],['राम','Rām','ラーマ','Rama','राम'],['सीता','Sītā','シータ','Sita','सीता'],['यो','yo','これ','this','यो'],
    ['नेपाली','nepālī','ネパール語','Nepali','नेपाली'],['काठमाडौं','Kāṭhmāḍaũ','カトマンズ','Kathmandu','काठमाडौं'],['बजार','bajār','市場','market','बजार'],['घर','ghar','家','home','घर'],['विद्यालय','vidyālaya','学校','school','विद्यालय'],
    ['चिया','chiyā','お茶','tea','चिया'],['पानी','pānī','水','water','पानी'],['दूध','dūdh','牛乳','milk','दूध'],['भात','bhāt','ご飯','rice','भात'],['खाना','khānā','食事・ご飯','food','खाना'],['मासु','māsu','肉','meat','मासु'],
    ['किताब','kitāb','本','book','किताब'],['पत्र','patra','手紙','letter','पत्र'],['नाम','nām','名前','name','नाम'],['तस्वीर','tasbīr','写真','photo','तस्वीर'],['फिल्म','film','映画','film','फिल्म'],['फारम','phāram','フォーム','form','फारम'],['बस','bas','バス','bus','बस'],['साथी','sāthī','友達','friend','साथी'],
    ['बोल्नु','bolnu','話す','to speak','बोल्नु'],['जानु','jānu','行く','to go','जानु'],['गाउनु','gāunu','歌う','to sing','गाउनु'],['पिउनु','piunu','飲む','to drink','पिउनु'],['पढ्नु','paḍhnu','読む・勉強する','to read; to study','पढ्नु'],['खानु','khānu','食べる','to eat','खानु'],
    ['पकाउनु','pakāunu','料理する','to cook','पकाउनु'],['लेख्नु','lekhnu','書く','to write','लेख्नु'],['हेर्नु','hernu','見る','to look; watch','हेर्नु'],['भेट्नु','bheṭnu','会う','to meet','भेट्नु'],['सिक्नु','siknu','学ぶ','to learn','सिक्नु'],['किन्नु','kinnu','買う','to buy','किन्नु'],['भर्नु','bharnu','記入する','to fill in','भर्नु'],['चढ्नु','chaḍhnu','乗る','to get on','चढ्नु'],['चाहनु','chāhanu','欲する','to want','चाहनु'],['सक्नु','saknu','できる','can; to be able','सक्नु']
  ],
  grammar:{
    verb:[
      ['म बोल्छु','ma bol-chu','私は話します'],['तपाईं बोल्नुहुन्छ','tapāī̃ bol-nu-huncha','あなたは話します'],['राम बोल्छ','Rām bol-cha','ラーマは話します'],['सीता बोल्छिन्','Sītā bol-chin','シータは話します'],
      ['म बोल्दिनँ','ma bol-dinã','私は話しません'],['तपाईं बोल्नुहुन्न','tapāī̃ bol-nu-hunna','あなたは話しません'],['राम बोल्दैन','Rām bol-daina','ラーマは話しません'],['सीता बोल्दिनन्','Sītā bol-din-an','シータは話しません'],
      ['म पढ्दै छु','ma paḍh-dai chu','私は勉強しています'],['तपाईं पढ्दै हुनुहुन्छ','tapāī̃ paḍh-dai hunu-huncha','あなたは勉強しています'],['राम पढ्दै छ','Rām paḍh-dai cha','ラーマは勉強しています'],['सीता पढ्दै छिन्','Sītā paḍh-dai chin','シータは勉強しています'],
      ['सिक्न चाहन्छु','sik-na chāhan-chu','学びたいです'],['बोल्न सक्छु','bol-na sak-chu','話せます'],['बोल्नुपर्छ','bol-nu-parcha','話さなければなりません']
    ],
    cases:[
      ['Ø','subject','〜は / が'],['लाई','lāī','〜を / に'],['ले','le','〜が / で'],['को / की / का','ko / kī / kā','〜の'],['मा','mā','〜に / で'],['बाट','bāṭa','〜から'],['सँग','sãga','〜と / 持つ'],['सम्म','samma','〜まで'],['देखि','dekhi','〜から'],['लागि','lāgi','〜のために']
    ]
  }
};

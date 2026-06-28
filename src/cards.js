(()=>{
const P=(title,blocks,practice=false)=>({title,kind:'prompt',practice,blocks});
const A=(title,functions,blocks,practice=false)=>({title,kind:'answer',practice,functions,blocks});
const F=(main,sub)=>({main,sub});
window.NEPAL_STUDY_DATA={
  slides:[
    P('PRESENT · PROMPT',[
      {tag:'一人称・平叙',jp:'ぼくはネパール語を話します。',en:'I speak Nepali.',audio:'म नेपाली बोल्छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはネパール語を話しますか？',en:'Do you speak Nepali?',audio:'तपाईं नेपाली बोल्नुहुन्छ?'}
    ]),
    A('PRESENT · ANSWER',[F('主語 → 動詞の形','ma → bol-chu / tapāī̃ → bol-nu-huncha'),F('平叙 / 疑問 → 語順','疑問でも語順はほぼそのまま。音と「？」で確認する。')],[
      {tag:'一人称・平叙',dev:'म नेपाली बोल्छु।',rom:'ma nepālī bol-chu',kana:'マ ネパーリー ボルチュ',jp:'ぼくはネパール語を話します。',audio:'म नेपाली बोल्छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं नेपाली बोल्नुहुन्छ?',rom:'tapāī̃ nepālī bol-nu-huncha?',kana:'タパイン ネパーリー ボルヌフンチャ？',jp:'あなたはネパール語を話しますか？',audio:'तपाईं नेपाली बोल्नुहुन्छ?'}
    ]),
    P('PRESENT · PRACTICE',[
      {tag:'三人称男性・平叙',jp:'ラーマは市場へ行きます。',en:'Rama goes to the market.',audio:'राम बजार जान्छ।'},
      {tag:'三人称女性・疑問',jp:'シータは歌を歌いますか？',en:'Does Sita sing a song?',audio:'सीता गीत गाउँछिन्?'},
      {tag:'一人称・平叙',jp:'ぼくはお茶を飲みます。',en:'I drink tea.',audio:'म चिया पिउँछु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは本を読みますか？',en:'Do you read a book?',audio:'तपाईं किताब पढ्नुहुन्छ?'}
    ],true),
    A('PRESENT · PRACTICE ANSWER',[F('同じ現在形関数を転用','動詞と名詞を入れ替えても、主語から語尾を決める。'),F('三人称の差','Rām は -cha、Sītā は -chin が見える。')],[
      {tag:'三人称男性・平叙',dev:'राम बजार जान्छ।',rom:'Rām bajār jān-cha',kana:'ラーム バザール ジャンチャ',jp:'ラーマは市場へ行きます。',audio:'राम बजार जान्छ।'},
      {tag:'三人称女性・疑問',dev:'सीता गीत गाउँछिन्?',rom:'Sītā gīt gāũ-chin?',kana:'シーター ギート ガウンチン？',jp:'シータは歌を歌いますか？',audio:'सीता गीत गाउँछिन्?'},
      {tag:'一人称・平叙',dev:'म चिया पिउँछु।',rom:'ma chiyā piũ-chu',kana:'マ チヤー ピウンチュ',jp:'ぼくはお茶を飲みます。',audio:'म चिया पिउँछु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं किताब पढ्नुहुन्छ?',rom:'tapāī̃ kitāb paḍh-nu-huncha?',kana:'タパイン キターブ パルヌフンチャ？',jp:'あなたは本を読みますか？',audio:'तपाईं किताब पढ्नुहुन्छ?'}
    ],true),

    P('NEGATIVE · PROMPT',[
      {tag:'一人称・平叙',jp:'ぼくはネパール語を話しません。',en:'I do not speak Nepali.',audio:'म नेपाली बोल्दिनँ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは肉を食べませんか？',en:'Do you not eat meat?',audio:'तपाईं मासु खानुहुन्न?'}
    ]),
    A('NEGATIVE · ANSWER',[F('否定 → 動詞の中に din / hunna が入る','ma は bol-dinã、tapāī̃ は khā-nu-hunna。'),F('疑問でも語順はほぼ同じ','否定疑問も、まずは音と「？」で処理する。')],[
      {tag:'一人称・平叙',dev:'म नेपाली बोल्दिनँ।',rom:'ma nepālī bol-dinã',kana:'マ ネパーリー ボルディナン',jp:'ぼくはネパール語を話しません。',audio:'म नेपाली बोल्दिनँ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं मासु खानुहुन्न?',rom:'tapāī̃ māsu khā-nu-hunna?',kana:'タパイン マース カㇵーヌフンナ？',jp:'あなたは肉を食べませんか？',audio:'तपाईं मासु खानुहुन्न?'}
    ]),
    P('NEGATIVE · PRACTICE',[
      {tag:'三人称男性・平叙',jp:'ラーマはお茶を飲みません。',en:'Rama does not drink tea.',audio:'राम चिया पिउँदैन।'},
      {tag:'三人称女性・疑問',jp:'シータは市場へ行きませんか？',en:'Does Sita not go to the market?',audio:'सीता बजार जाँदिनन्?'},
      {tag:'一人称・平叙',jp:'ぼくは牛乳を飲みません。',en:'I do not drink milk.',audio:'म दूध पिउँदिनँ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはこの本を読みませんか？',en:'Do you not read this book?',audio:'तपाईं यो किताब पढ्नुहुन्न?'}
    ],true),
    A('NEGATIVE · PRACTICE ANSWER',[F('否定形も主語で変わる','ma は -dinã、Rām は -daina、Sītā は -dinan。'),F('丁寧な否定','tapāī̃ は 動詞 + nu-hunna 型で丁寧に否定する。')],[
      {tag:'三人称男性・平叙',dev:'राम चिया पिउँदैन।',rom:'Rām chiyā piũ-daina',kana:'ラーム チヤー ピウンダイナ',jp:'ラーマはお茶を飲みません。',audio:'राम चिया पिउँदैन।'},
      {tag:'三人称女性・疑問',dev:'सीता बजार जाँदिनन्?',rom:'Sītā bajār jā̃-din-an?',kana:'シーター バザール ジャンディナン？',jp:'シータは市場へ行きませんか？',audio:'सीता बजार जाँदिनन्?'},
      {tag:'一人称・平叙',dev:'म दूध पिउँदिनँ।',rom:'ma dūdh piũ-dinã',kana:'マ ドゥードㇵ ピウンディナン',jp:'ぼくは牛乳を飲みません。',audio:'म दूध पिउँदिनँ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं यो किताब पढ्नुहुन्न?',rom:'tapāī̃ yo kitāb paḍh-nu-hunna?',kana:'タパイン ヨ キターブ パルヌフンナ？',jp:'あなたはこの本を読みませんか？',audio:'तपाईं यो किताब पढ्नुहुन्न?'}
    ],true),

    P('PROGRESSIVE · PROMPT',[
      {tag:'一人称・平叙',jp:'ぼくはネパール語を勉強しています。',en:'I am studying Nepali.',audio:'म नेपाली पढ्दै छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはご飯を作っていますか？',en:'Are you cooking food?',audio:'तपाईं खाना पकाउँदै हुनुहुन्छ?'}
    ]),
    A('PROGRESSIVE · ANSWER',[F('進行 → 動詞 + dai + いる','ma は paḍh-dai chu、tapāī̃ は paka-ũ-dai hunu-huncha。'),F('今している動作','習慣の現在形ではなく、「いま進行中」を作る。')],[
      {tag:'一人称・平叙',dev:'म नेपाली पढ्दै छु।',rom:'ma nepālī paḍh-dai chu',kana:'マ ネパーリー パルダイ チュ',jp:'ぼくはネパール語を勉強しています。',audio:'म नेपाली पढ्दै छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं खाना पकाउँदै हुनुहुन्छ?',rom:'tapāī̃ khānā paka-ũ-dai hunu-huncha?',kana:'タパイン カㇵーナー パカウンダイ フヌフンチャ？',jp:'あなたはご飯を作っていますか？',audio:'तपाईं खाना पकाउँदै हुनुहुन्छ?'}
    ]),
    P('PROGRESSIVE · PRACTICE',[
      {tag:'三人称男性・平叙',jp:'ラーマは家へ行っています。',en:'Rama is going home.',audio:'राम घर जाँदै छ।'},
      {tag:'三人称女性・疑問',jp:'シータは手紙を書いていますか？',en:'Is Sita writing a letter?',audio:'सीता पत्र लेख्दै छिन्?'},
      {tag:'一人称・平叙',jp:'ぼくは写真を見ています。',en:'I am looking at a photo.',audio:'म तस्वीर हेर्दै छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは友達に会っていますか？',en:'Are you meeting a friend?',audio:'तपाईं साथीलाई भेट्दै हुनुहुन्छ?'}
    ],true),
    A('PROGRESSIVE · PRACTICE ANSWER',[F('dai は進行の目印','jā̃-dai / lekh-dai / her-dai / bheṭ-dai のように動詞へ付く。'),F('いる部分も主語で変わる','ma は chu、Rām は cha、Sītā は chin、tapāī̃ は hunu-huncha。')],[
      {tag:'三人称男性・平叙',dev:'राम घर जाँदै छ।',rom:'Rām ghar jā̃-dai cha',kana:'ラーム ガㇵル ジャンダイ チャ',jp:'ラーマは家へ行っています。',audio:'राम घर जाँदै छ।'},
      {tag:'三人称女性・疑問',dev:'सीता पत्र लेख्दै छिन्?',rom:'Sītā patra lekh-dai chin?',kana:'シーター パトラ レクㇵダイ チン？',jp:'シータは手紙を書いていますか？',audio:'सीता पत्र लेख्दै छिन्?'},
      {tag:'一人称・平叙',dev:'म तस्वीर हेर्दै छु।',rom:'ma tasbīr her-dai chu',kana:'マ タスビール ヘルダイ チュ',jp:'ぼくは写真を見ています。',audio:'म तस्वीर हेर्दै छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं साथीलाई भेट्दै हुनुहुन्छ?',rom:'tapāī̃ sāthī-lāī bheṭ-dai hunu-huncha?',kana:'タパイン サーティーライ ベㇵタ̣ダイ フヌフンチャ？',jp:'あなたは友達に会っていますか？',audio:'तपाईं साथीलाई भेट्दै हुनुहुन्छ?'}
    ],true),

    P('WANT · PROMPT',[
      {tag:'一人称・平叙',jp:'ぼくはネパール語を学びたいです。',en:'I want to learn Nepali.',audio:'म नेपाली सिक्न चाहन्छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはカトマンズへ行きたいですか？',en:'Do you want to go to Kathmandu?',audio:'तपाईं काठमाडौं जान चाहनुहुन्छ?'}
    ]),
    A('WANT · ANSWER',[F('したい → 動詞 + na + चाहनु','sik-na chāhan-chu / jān-a chāha-nu-huncha。'),F('「〜することを望む」感覚','動詞を少し名詞っぽくして चाहनु に接続する。')],[
      {tag:'一人称・平叙',dev:'म नेपाली सिक्न चाहन्छु।',rom:'ma nepālī sik-na chāhan-chu',kana:'マ ネパーリー シクナ チャーハンチュ',jp:'ぼくはネパール語を学びたいです。',audio:'म नेपाली सिक्न चाहन्छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं काठमाडौं जान चाहनुहुन्छ?',rom:'tapāī̃ Kāṭhmāḍaũ jān-a chāha-nu-huncha?',kana:'タパイン カートマーダウン ジャナ チャーハヌフンチャ？',jp:'あなたはカトマンズへ行きたいですか？',audio:'तपाईं काठमाडौं जान चाहनुहुन्छ?'}
    ]),
    P('WANT · PRACTICE',[
      {tag:'三人称男性・平叙',jp:'ラーマは本を買いたいです。',en:'Rama wants to buy a book.',audio:'राम किताब किन्न चाहन्छ।'},
      {tag:'三人称女性・疑問',jp:'シータはお茶を飲みたいですか？',en:'Does Sita want to drink tea?',audio:'सीता चिया पिउन चाहन्छिन्?'},
      {tag:'一人称・平叙',jp:'ぼくは名前を書きたいです。',en:'I want to write my name.',audio:'म नाम लेख्न चाहन्छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは映画を見たいですか？',en:'Do you want to watch a film?',audio:'तपाईं फिल्म हेर्न चाहनुहुन्छ?'}
    ],true),
    A('WANT · PRACTICE ANSWER',[F('目的の動詞は na 形へ','kin-na / piu-na / lekh-na / her-na を चाहनु の前に置く。'),F('主語の語尾を忘れない','chāhan-chu / chāhan-cha / chāhan-chin / chāha-nu-huncha。')],[
      {tag:'三人称男性・平叙',dev:'राम किताब किन्न चाहन्छ।',rom:'Rām kitāb kin-na chāhan-cha',kana:'ラーム キターブ キンナ チャーハンチャ',jp:'ラーマは本を買いたいです。',audio:'राम किताब किन्न चाहन्छ।'},
      {tag:'三人称女性・疑問',dev:'सीता चिया पिउन चाहन्छिन्?',rom:'Sītā chiyā piu-na chāhan-chin?',kana:'シーター チヤー ピウナ チャーハンチン？',jp:'シータはお茶を飲みたいですか？',audio:'सीता चिया पिउन चाहन्छिन्?'},
      {tag:'一人称・平叙',dev:'म नाम लेख्न चाहन्छु।',rom:'ma nām lekh-na chāhan-chu',kana:'マ ナーム レクㇵナ チャーハンチュ',jp:'ぼくは名前を書きたいです。',audio:'म नाम लेख्न चाहन्छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं फिल्म हेर्न चाहनुहुन्छ?',rom:'tapāī̃ film her-na chāha-nu-huncha?',kana:'タパイン フィルム ヘルナ チャーハヌフンチャ？',jp:'あなたは映画を見たいですか？',audio:'तपाईं फिल्म हेर्न चाहनुहुन्छ?'}
    ],true),

    P('CAN · PROMPT',[
      {tag:'一人称・平叙',jp:'ぼくはネパール語を話せます。',en:'I can speak Nepali.',audio:'म नेपाली बोल्न सक्छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはフォームに記入できますか？',en:'Can you fill in the form?',audio:'तपाईं फारम भर्न सक्नुहुन्छ?'}
    ]),
    A('CAN · ANSWER',[F('できる → 動詞 + na + सक्नु','bol-na sak-chu / bhar-na sak-nu-huncha。'),F('能力・可能を作る','英語の can に近いが、前の動詞は na 形にする。')],[
      {tag:'一人称・平叙',dev:'म नेपाली बोल्न सक्छु।',rom:'ma nepālī bol-na sak-chu',kana:'マ ネパーリー ボルナ サクチュ',jp:'ぼくはネパール語を話せます。',audio:'म नेपाली बोल्न सक्छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं फारम भर्न सक्नुहुन्छ?',rom:'tapāī̃ phāram bhar-na sak-nu-huncha?',kana:'タパイン パㇵーラム バㇵルナ サクヌフンチャ？',jp:'あなたはフォームに記入できますか？',audio:'तपाईं फारम भर्न सक्नुहुन्छ?'}
    ]),
    P('CAN · PRACTICE',[
      {tag:'三人称男性・平叙',jp:'ラーマはバスに乗れます。',en:'Rama can get on the bus.',audio:'राम बस चढ्न सक्छ।'},
      {tag:'三人称女性・疑問',jp:'シータは手紙を読めますか？',en:'Can Sita read the letter?',audio:'सीता पत्र पढ्न सक्छिन्?'},
      {tag:'一人称・平叙',jp:'ぼくは市場へ行けます。',en:'I can go to the market.',audio:'म बजार जान सक्छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはネパール語を書けますか？',en:'Can you write Nepali?',audio:'तपाईं नेपाली लेख्न सक्नुहुन्छ?'}
    ],true),
    A('CAN · PRACTICE ANSWER',[F('saknu の前は na 形','chaḍh-na / paḍh-na / jān-a / lekh-na。'),F('できる内容を名詞で増やす','bus, patra, bajār, nepālī などを目的語・場所に入れる。')],[
      {tag:'三人称男性・平叙',dev:'राम बस चढ्न सक्छ।',rom:'Rām bas chaḍh-na sak-cha',kana:'ラーム バス チャダ̣ㇵナ サクチャ',jp:'ラーマはバスに乗れます。',audio:'राम बस चढ्न सक्छ।'},
      {tag:'三人称女性・疑問',dev:'सीता पत्र पढ्न सक्छिन्?',rom:'Sītā patra paḍh-na sak-chin?',kana:'シーター パトラ パルナ サクチン？',jp:'シータは手紙を読めますか？',audio:'सीता पत्र पढ्न सक्छिन्?'},
      {tag:'一人称・平叙',dev:'म बजार जान सक्छु।',rom:'ma bajār jān-a sak-chu',kana:'マ バザール ジャナ サクチュ',jp:'ぼくは市場へ行けます。',audio:'म बजार जान सक्छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं नेपाली लेख्न सक्नुहुन्छ?',rom:'tapāī̃ nepālī lekh-na sak-nu-huncha?',kana:'タパイン ネパーリー レクㇵナ サクヌフンチャ？',jp:'あなたはネパール語を書けますか？',audio:'तपाईं नेपाली लेख्न सक्नुहुन्छ?'}
    ],true),

    P('NEED · PROMPT',[
      {tag:'一人称・平叙',jp:'ぼくには水が必要です。',en:'I need water.',audio:'मलाई पानी चाहिन्छ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたにはパスポートが必要ですか？',en:'Do you need a passport?',audio:'तपाईंलाई पासपोर्ट चाहिन्छ?'}
    ]),
    A('NEED · ANSWER',[F('必要 → 〜लाई + 名詞 + चाहिन्छ','malāī pānī chāhincha / tapāī̃-lāī pāsaporṭ chāhincha。'),F('主語というより「〜に必要」','日本語の「私には〜が必要」にかなり近い。')],[
      {tag:'一人称・平叙',dev:'मलाई पानी चाहिन्छ।',rom:'ma-lāī pānī chāhincha',kana:'マライ パーニー チャーヒンチャ',jp:'ぼくには水が必要です。',audio:'मलाई पानी चाहिन्छ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईंलाई पासपोर्ट चाहिन्छ?',rom:'tapāī̃-lāī pāsaporṭ chāhincha?',kana:'タパインライ パースポルタ̣ チャーヒンチャ？',jp:'あなたにはパスポートが必要ですか？',audio:'तपाईंलाई पासपोर्ट चाहिन्छ?'}
    ]),
    P('NEED · PRACTICE',[
      {tag:'三人称男性・平叙',jp:'ラーマには薬が必要です。',en:'Rama needs medicine.',audio:'रामलाई औषधि चाहिन्छ।'},
      {tag:'三人称女性・疑問',jp:'シータには写真が必要ですか？',en:'Does Sita need a photo?',audio:'सीतालाई फोटो चाहिन्छ?'},
      {tag:'一人称・平叙',jp:'ぼくには住所が必要です。',en:'I need an address.',audio:'मलाई ठेगाना चाहिन्छ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたには領収書が必要ですか？',en:'Do you need a receipt?',audio:'तपाईंलाई रसिद चाहिन्छ?'}
    ],true),
    A('NEED · PRACTICE ANSWER',[F('人 + lāī が目印','Rām-lāī / Sītā-lāī / ma-lāī / tapāī̃-lāī。'),F('物はそのまま置く','medicine, photo, address, receipt などを चाहिन्छ の前に置く。')],[
      {tag:'三人称男性・平叙',dev:'रामलाई औषधि चाहिन्छ।',rom:'Rām-lāī auṣadhi chāhincha',kana:'ラームライ アウサディ チャーヒンチャ',jp:'ラーマには薬が必要です。',audio:'रामलाई औषधि चाहिन्छ।'},
      {tag:'三人称女性・疑問',dev:'सीतालाई फोटो चाहिन्छ?',rom:'Sītā-lāī phoṭo chāhincha?',kana:'シーターライ フォタ̣ チャーヒンチャ？',jp:'シータには写真が必要ですか？',audio:'सीतालाई फोटो चाहिन्छ?'},
      {tag:'一人称・平叙',dev:'मलाई ठेगाना चाहिन्छ।',rom:'ma-lāī ṭhegānā chāhincha',kana:'マライ タ̣ㇵェガーナー チャーヒンチャ',jp:'ぼくには住所が必要です。',audio:'मलाई ठेगाना चाहिन्छ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईंलाई रसिद चाहिन्छ?',rom:'tapāī̃-lāī rasid chāhincha?',kana:'タパインライ ラシド チャーヒンチャ？',jp:'あなたには領収書が必要ですか？',audio:'तपाईंलाई रसिद चाहिन्छ?'}
    ],true),

    P('MUST · PROMPT',[
      {tag:'一人称・平叙',jp:'ぼくは書類を提出しなければなりません。',en:'I have to submit the documents.',audio:'मैले कागजात बुझाउनुपर्छ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたはフォームに記入しなければなりませんか？',en:'Do you have to fill in the form?',audio:'तपाईंले फारम भर्नुपर्छ?'}
    ]),
    A('MUST · ANSWER',[F('義務 → 動詞 + nu-parcha','bujhāu-nu-parcha / bhar-nu-parcha。'),F('行為者には le が出やすい','maile / tapāī̃-le のように、やる人を le で置く。')],[
      {tag:'一人称・平叙',dev:'मैले कागजात बुझाउनुपर्छ।',rom:'mai-le kāgajāt bujhāu-nu-parcha',kana:'マイレ カーガジャート ブジャウヌパルチャ',jp:'ぼくは書類を提出しなければなりません。',audio:'मैले कागजात बुझाउनुपर्छ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईंले फारम भर्नुपर्छ?',rom:'tapāī̃-le phāram bhar-nu-parcha?',kana:'タパインレ パㇵーラム バㇵルヌパルチャ？',jp:'あなたはフォームに記入しなければなりませんか？',audio:'तपाईंले फारम भर्नुपर्छ?'}
    ]),
    P('MUST · PRACTICE',[
      {tag:'三人称男性・平叙',jp:'ラーマは切符を買わなければなりません。',en:'Rama has to buy a ticket.',audio:'रामले टिकट किन्नुपर्छ।'},
      {tag:'三人称女性・疑問',jp:'シータは事務所に電話しなければなりませんか？',en:'Does Sita have to phone the office?',audio:'सीताले कार्यालयमा फोन गर्नुपर्छ?'},
      {tag:'一人称・平叙',jp:'ぼくは今日、仕事をしなければなりません。',en:'I have to work today.',audio:'मैले आज काम गर्नुपर्छ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは明日、病院へ行かなければなりませんか？',en:'Do you have to go to hospital tomorrow?',audio:'तपाईंले भोलि अस्पताल जानुपर्छ?'}
    ],true),
    A('MUST · PRACTICE ANSWER',[F('nu-parcha は義務の強い型','kin-nu-parcha / gar-nu-parcha / jān-u-parcha。'),F('実務語彙と相性がよい','書類、フォーム、事務所、病院などと組みやすい。')],[
      {tag:'三人称男性・平叙',dev:'रामले टिकट किन्नुपर्छ।',rom:'Rām-le ṭikaṭ kin-nu-parcha',kana:'ラームレ ティカタ̣ キンヌパルチャ',jp:'ラーマは切符を買わなければなりません。',audio:'रामले टिकट किन्नुपर्छ।'},
      {tag:'三人称女性・疑問',dev:'सीताले कार्यालयमा फोन गर्नुपर्छ?',rom:'Sītā-le kāryālaya-mā phon gar-nu-parcha?',kana:'シーターレ カーリャーラヤマー フォン ガルヌパルチャ？',jp:'シータは事務所に電話しなければなりませんか？',audio:'सीताले कार्यालयमा फोन गर्नुपर्छ?'},
      {tag:'一人称・平叙',dev:'मैले आज काम गर्नुपर्छ।',rom:'mai-le āja kām gar-nu-parcha',kana:'マイレ アージャ カーム ガルヌパルチャ',jp:'ぼくは今日、仕事をしなければなりません。',audio:'मैले आज काम गर्नुपर्छ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईंले भोलि अस्पताल जानुपर्छ?',rom:'tapāī̃-le bholi aspatal jān-u-parcha?',kana:'タパインレ ボリ アスパタル ジャーヌパルチャ？',jp:'あなたは明日、病院へ行かなければなりませんか？',audio:'तपाईंले भोलि अस्पताल जानुपर्छ?'}
    ],true),

    P('PAST · PROMPT',[
      {tag:'一人称・平叙',jp:'ぼくはお茶を飲みました。',en:'I drank tea.',audio:'मैले चिया पिएँ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは名前を書きましたか？',en:'Did you write your name?',audio:'तपाईंले नाम लेख्नुभयो?'}
    ]),
    A('PAST · ANSWER',[F('過去 → 行為者 + le が出やすい','maile / tapāī̃-le + 動詞の過去形。'),F('丁寧な過去','tapāī̃ では lekh-nu-bhayo 系が出る。')],[
      {tag:'一人称・平叙',dev:'मैले चिया पिएँ।',rom:'mai-le chiyā pi-ẽ',kana:'マイレ チヤー ピエン',jp:'ぼくはお茶を飲みました。',audio:'मैले चिया पिएँ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईंले नाम लेख्नुभयो?',rom:'tapāī̃-le nām lekh-nu-bhayo?',kana:'タパインレ ナーム レクㇵヌバヨ？',jp:'あなたは名前を書きましたか？',audio:'तपाईंले नाम लेख्नुभयो?'}
    ]),
    P('PAST · PRACTICE',[
      {tag:'三人称男性・平叙',jp:'ラーマはご飯を食べました。',en:'Rama ate rice.',audio:'रामले भात खायो।'},
      {tag:'三人称女性・疑問',jp:'シータは手紙を書きましたか？',en:'Did Sita write a letter?',audio:'सीताले पत्र लेखिन्?'},
      {tag:'一人称・平叙',jp:'ぼくは市場へ行きました。',en:'I went to the market.',audio:'म बजार गएँ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは書類を提出しましたか？',en:'Did you submit the documents?',audio:'तपाईंले कागजात बुझाउनुभयो?'}
    ],true),
    A('PAST · PRACTICE ANSWER',[F('他動詞過去は le を意識','khāyo / lekhin / bujhāu-nu-bhayo。'),F('移動の過去は le なしも自然','ma bajār ga-ẽ のように「行きました」を作る。')],[
      {tag:'三人称男性・平叙',dev:'रामले भात खायो।',rom:'Rām-le bhāt khā-yo',kana:'ラームレ バㇵート カㇵーヨ',jp:'ラーマはご飯を食べました。',audio:'रामले भात खायो।'},
      {tag:'三人称女性・疑問',dev:'सीताले पत्र लेखिन्?',rom:'Sītā-le patra lekh-in?',kana:'シーターレ パトラ レクㇵイン？',jp:'シータは手紙を書きましたか？',audio:'सीताले पत्र लेखिन्?'},
      {tag:'一人称・平叙',dev:'म बजार गएँ।',rom:'ma bajār ga-ẽ',kana:'マ バザール ガエン',jp:'ぼくは市場へ行きました。',audio:'म बजार गएँ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईंले कागजात बुझाउनुभयो?',rom:'tapāī̃-le kāgajāt bujhāu-nu-bhayo?',kana:'タパインレ カーガジャート ブジャウヌバヨ？',jp:'あなたは書類を提出しましたか？',audio:'तपाईंले कागजात बुझाउनुभयो?'}
    ],true),

    P('PLACE · PROMPT',[
      {tag:'一人称・平叙',jp:'ぼくは家にいます。',en:'I am at home.',audio:'म घरमा छु।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは市場にいますか？',en:'Are you at the market?',audio:'तपाईं बजारमा हुनुहुन्छ?'}
    ]),
    A('PLACE · ANSWER',[F('場所 → 名詞 + mā','ghar-mā / bajār-mā のように「〜に」を作る。'),F('いる → chu / hunu-huncha','主語の丁寧さで「いる」の部分が変わる。')],[
      {tag:'一人称・平叙',dev:'म घरमा छु।',rom:'ma ghar-mā chu',kana:'マ ガㇵルマー チュ',jp:'ぼくは家にいます。',audio:'म घरमा छु।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं बजारमा हुनुहुन्छ?',rom:'tapāī̃ bajār-mā hunu-huncha?',kana:'タパイン バザールマー フヌフンチャ？',jp:'あなたは市場にいますか？',audio:'तपाईं बजारमा हुनुहुन्छ?'}
    ]),
    P('PLACE · PRACTICE',[
      {tag:'三人称男性・平叙',jp:'ラーマは学校にいます。',en:'Rama is at school.',audio:'राम विद्यालयमा छ।'},
      {tag:'三人称女性・疑問',jp:'シータは病院にいますか？',en:'Is Sita at the hospital?',audio:'सीता अस्पतालमा छिन्?'},
      {tag:'一人称・平叙',jp:'ぼくは日本から来ました。',en:'I came from Japan.',audio:'म जापानबाट आएको हुँ।'},
      {tag:'二人称丁寧・疑問',jp:'あなたは寺院へ行きますか？',en:'Do you go to the temple?',audio:'तपाईं मन्दिरमा जानुहुन्छ?'}
    ],true),
    A('PLACE · PRACTICE ANSWER',[F('mā は「に / で」','vidyālaya-mā / aspatal-mā / mandir-mā。'),F('bāṭa は「から」','jāpān-bāṭa のように出発点を作る。')],[
      {tag:'三人称男性・平叙',dev:'राम विद्यालयमा छ।',rom:'Rām vidyālaya-mā cha',kana:'ラーム ヴィディヤーラヤマー チャ',jp:'ラーマは学校にいます。',audio:'राम विद्यालयमा छ।'},
      {tag:'三人称女性・疑問',dev:'सीता अस्पतालमा छिन्?',rom:'Sītā aspatal-mā chin?',kana:'シーター アスパタルマー チン？',jp:'シータは病院にいますか？',audio:'सीता अस्पतालमा छिन्?'},
      {tag:'一人称・平叙',dev:'म जापानबाट आएको हुँ।',rom:'ma jāpān-bāṭa ā-e-ko hũ',kana:'マ ジャパーンバータ̣ アーエコ フン',jp:'ぼくは日本から来ました。',audio:'म जापानबाट आएको हुँ।'},
      {tag:'二人称丁寧・疑問',dev:'तपाईं मन्दिरमा जानुहुन्छ?',rom:'tapāī̃ mandir-mā jā-nu-huncha?',kana:'タパイン マンディルマー ジャーヌフンチャ？',jp:'あなたは寺院へ行きますか？',audio:'तपाईं मन्दिरमा जानुहुन्छ?'}
    ],true)
  ],
  words:[
    ['म','ma','ぼく','I','म'],['मलाई','ma-lāī','ぼくには','to me','मलाई'],['मैले','mai-le','ぼくが / ぼくは','I did','मैले'],['तपाईं','tapāī̃','あなた 丁寧','you','तपाईं'],['तपाईंलाई','tapāī̃-lāī','あなたには','to you','तपाईंलाई'],['तपाईंले','tapāī̃-le','あなたが / あなたは','you did','तपाईंले'],['राम','Rām','ラーマ','Rama','राम'],['रामलाई','Rām-lāī','ラーマには','to Rama','रामलाई'],['रामले','Rām-le','ラーマが / ラーマは','Rama did','रामले'],['सीता','Sītā','シータ','Sita','सीता'],['सीतालाई','Sītā-lāī','シータには','to Sita','सीतालाई'],['सीताले','Sītā-le','シータが / シータは','Sita did','सीताले'],['यो','yo','これ','this','यो'],
    ['नेपाली','nepālī','ネパール語','Nepali','नेपाली'],['काठमाडौं','Kāṭhmāḍaũ','カトマンズ','Kathmandu','काठमाडौं'],['जापान','jāpān','日本','Japan','जापान'],['बजार','bajār','市場','market','बजार'],['घर','ghar','家','home','घर'],['विद्यालय','vidyālaya','学校','school','विद्यालय'],['अस्पताल','aspatal','病院','hospital','अस्पताल'],['मन्दिर','mandir','寺院','temple','मन्दिर'],['कार्यालय','kāryālaya','事務所','office','कार्यालय'],
    ['चिया','chiyā','お茶','tea','चिया'],['पानी','pānī','水','water','पानी'],['दूध','dūdh','牛乳','milk','दूध'],['भात','bhāt','ご飯','rice','भात'],['खाना','khānā','食事・ご飯','food','खाना'],['मासु','māsu','肉','meat','मासु'],
    ['किताब','kitāb','本','book','किताब'],['पत्र','patra','手紙','letter','पत्र'],['नाम','nām','名前','name','नाम'],['तस्वीर','tasbīr','写真','photo','तस्वीर'],['फोटो','phoṭo','写真','photo','फोटो'],['फिल्म','film','映画','film','फिल्म'],['फारम','phāram','フォーム','form','फारम'],['कागजात','kāgajāt','書類','documents','कागजात'],['पासपोर्ट','pāsaporṭ','パスポート','passport','पासपोर्ट'],['ठेगाना','ṭhegānā','住所','address','ठेगाना'],['रसिद','rasid','領収書','receipt','रसिद'],['औषधि','auṣadhi','薬','medicine','औषधि'],['टिकट','ṭikaṭ','切符','ticket','टिकट'],['बस','bas','バス','bus','बस'],['साथी','sāthī','友達','friend','साथी'],['आज','āja','今日','today','आज'],['भोलि','bholi','明日','tomorrow','भोलि'],
    ['बोल्नु','bolnu','話す','to speak','बोल्नु'],['जानु','jānu','行く','to go','जानु'],['आउनु','āunu','来る','to come','आउनु'],['गाउनु','gāunu','歌う','to sing','गाउनु'],['पिउनु','piunu','飲む','to drink','पिउनु'],['पढ्नु','paḍhnu','読む・勉強する','to read; to study','पढ्नु'],['खानु','khānu','食べる','to eat','खानु'],['पकाउनु','pakāunu','料理する','to cook','पकाउनु'],['लेख्नु','lekhnu','書く','to write','लेख्नु'],['हेर्नु','hernu','見る','to look; watch','हेर्नु'],['भेट्नु','bheṭnu','会う','to meet','भेट्नु'],['सिक्नु','siknu','学ぶ','to learn','सिक्नु'],['किन्नु','kinnu','買う','to buy','किन्नु'],['भर्नु','bharnu','記入する','to fill in','भर्नु'],['चढ्नु','chaḍhnu','乗る','to get on','चढ्नु'],['बुझाउनु','bujhāunu','提出する','to submit','बुझाउनु'],['फोन गर्नु','phon garnu','電話する','to phone','फोन गर्नु'],['काम गर्नु','kām garnu','仕事する','to work','काम गर्नु'],['चाहनु','chāhanu','欲する','to want','चाहनु'],['सक्नु','saknu','できる','can; to be able','सक्नु'],['चाहिनु','chāhinu','必要である','to be needed','चाहिनु']
  ],
  grammar:{
    verb:[
      ['म बोल्छु','ma bol-chu','私は話します'],['तपाईं बोल्नुहुन्छ','tapāī̃ bol-nu-huncha','あなたは話します'],['राम बोल्छ','Rām bol-cha','ラーマは話します'],['सीता बोल्छिन्','Sītā bol-chin','シータは話します'],
      ['म बोल्दिनँ','ma bol-dinã','私は話しません'],['तपाईं बोल्नुहुन्न','tapāī̃ bol-nu-hunna','あなたは話しません'],['राम बोल्दैन','Rām bol-daina','ラーマは話しません'],['सीता बोल्दिनन्','Sītā bol-din-an','シータは話しません'],
      ['म पढ्दै छु','ma paḍh-dai chu','私は勉強しています'],['तपाईं पढ्दै हुनुहुन्छ','tapāī̃ paḍh-dai hunu-huncha','あなたは勉強しています'],['राम पढ्दै छ','Rām paḍh-dai cha','ラーマは勉強しています'],['सीता पढ्दै छिन्','Sītā paḍh-dai chin','シータは勉強しています'],
      ['मलाई पानी चाहिन्छ','ma-lāī pānī chāhincha','私には水が必要です'],['मैले काम गर्नुपर्छ','mai-le kām gar-nu-parcha','私は仕事をしなければなりません'],['मैले चिया पिएँ','mai-le chiyā pi-ẽ','私はお茶を飲みました'],['म घरमा छु','ma ghar-mā chu','私は家にいます'],
      ['सिक्न चाहन्छु','sik-na chāhan-chu','学びたいです'],['बोल्न सक्छु','bol-na sak-chu','話せます'],['बोल्नुपर्छ','bol-nu-parcha','話さなければなりません']
    ],
    cases:[
      ['Ø','subject','〜は / が'],['लाई','lāī','〜を / に / には'],['ले','le','〜が / で / は'],['को / की / का','ko / kī / kā','〜の'],['मा','mā','〜に / で'],['बाट','bāṭa','〜から'],['सँग','sãga','〜と / 持つ'],['सम्म','samma','〜まで'],['देखि','dekhi','〜から'],['लागि','lāgi','〜のために']
    ]
  }
};
})();

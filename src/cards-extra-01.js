(()=>{
const D=window.NEPAL_STUDY_DATA;
const P=(title,blocks,practice=false)=>({title,kind:'prompt',practice,blocks});
const A=(title,functions,blocks,practice=false)=>({title,kind:'answer',practice,functions,blocks});
const F=(main,sub)=>({main,sub});
D.slides.push(
  P('TIME · PROMPT',[
    {tag:'一人称・平叙',jp:'ぼくは今日、学校へ行きます。',en:'I go to school today.',audio:'म आज विद्यालय जान्छु।'},
    {tag:'二人称丁寧・疑問',jp:'あなたは明日、事務所へ行きますか？',en:'Are you going to the office tomorrow?',audio:'तपाईं भोलि कार्यालय जानुहुन्छ?'}
  ]),
  A('TIME · ANSWER',[F('時間語は文の前寄りに置きやすい','āja / bholi / hijo を主語の後ろに置いて、いつの話かを先に出す。'),F('未来っぽさは時間語で出せる','まずは भोलि + 現在形で「明日〜します」と処理する。')],[
    {tag:'一人称・平叙',dev:'म आज विद्यालय जान्छु।',rom:'ma āja vidyālaya jān-chu',kana:'マ アージャ ヴィディヤーラヤ ジャンチュ',jp:'ぼくは今日、学校へ行きます。',audio:'म आज विद्यालय जान्छु।'},
    {tag:'二人称丁寧・疑問',dev:'तपाईं भोलि कार्यालय जानुहुन्छ?',rom:'tapāī̃ bholi kāryālaya jā-nu-huncha?',kana:'タパイン ボリ カーリャーラヤ ジャーヌフンチャ？',jp:'あなたは明日、事務所へ行きますか？',audio:'तपाईं भोलि कार्यालय जानुहुन्छ?'}
  ]),
  P('TIME · PRACTICE',[
    {tag:'三人称男性・平叙',jp:'ラーマは朝にお茶を飲みます。',en:'Rama drinks tea in the morning.',audio:'राम बिहान चिया पिउँछ।'},
    {tag:'三人称女性・疑問',jp:'シータは夜に本を読みますか？',en:'Does Sita read a book at night?',audio:'सीता राति किताब पढ्छिन्?'},
    {tag:'一人称・平叙',jp:'ぼくは今、仕事をしています。',en:'I am working now.',audio:'म अहिले काम गर्दै छु।'},
    {tag:'二人称丁寧・疑問',jp:'あなたは昨日、病院へ行きましたか？',en:'Did you go to hospital yesterday?',audio:'तपाईं हिजो अस्पताल जानुभयो?'}
  ],true),
  A('TIME · PRACTICE ANSWER',[F('時間語を増やす','bihān / rāti / ahile / hijo で、文の場面を一気に広げる。'),F('過去・進行とも接続できる','ahile + gardai chu、hijo + jānu-bhayo のように組む。')],[
    {tag:'三人称男性・平叙',dev:'राम बिहान चिया पिउँछ।',rom:'Rām bihān chiyā piũ-cha',kana:'ラーム ビハーン チヤー ピウンチャ',jp:'ラーマは朝にお茶を飲みます。',audio:'राम बिहान चिया पिउँछ।'},
    {tag:'三人称女性・疑問',dev:'सीता राति किताब पढ्छिन्?',rom:'Sītā rāti kitāb paḍh-chin?',kana:'シーター ラーティ キターブ パルチン？',jp:'シータは夜に本を読みますか？',audio:'सीता राति किताब पढ्छिन्?'},
    {tag:'一人称・平叙',dev:'म अहिले काम गर्दै छु।',rom:'ma ahile kām gar-dai chu',kana:'マ アヒレ カーム ガルダイ チュ',jp:'ぼくは今、仕事をしています。',audio:'म अहिले काम गर्दै छु।'},
    {tag:'二人称丁寧・疑問',dev:'तपाईं हिजो अस्पताल जानुभयो?',rom:'tapāī̃ hijo aspatal jā-nu-bhayo?',kana:'タパイン ヒジョ アスパタル ジャーヌバヨ？',jp:'あなたは昨日、病院へ行きましたか？',audio:'तपाईं हिजो अस्पताल जानुभयो?'}
  ],true),

  P('QUESTION · PROMPT',[
    {tag:'一人称・平叙',jp:'ぼくは理由を知っています。',en:'I know the reason.',audio:'म कारण थाहा पाउँछु।'},
    {tag:'二人称丁寧・疑問',jp:'あなたはどこへ行きますか？',en:'Where are you going?',audio:'तपाईं कहाँ जानुहुन्छ?'}
  ]),
  A('QUESTION · ANSWER',[F('疑問詞は聞きたい場所に置く','कहाँ = どこ、किन = なぜ、कहिले = いつ。'),F('疑問文でも語順は大きく崩さない','英語みたいに助動詞を前に出すより、疑問詞を差し込む感覚。')],[
    {tag:'一人称・平叙',dev:'म कारण थाहा पाउँछु।',rom:'ma kāraṇ thāhā pā-ũ-chu',kana:'マ カーラン̣ タㇵーハー パウンチュ',jp:'ぼくは理由を知っています。',audio:'म कारण थाहा पाउँछु।'},
    {tag:'二人称丁寧・疑問',dev:'तपाईं कहाँ जानुहुन्छ?',rom:'tapāī̃ kahā̃ jā-nu-huncha?',kana:'タパイン カハン ジャーヌフンチャ？',jp:'あなたはどこへ行きますか？',audio:'तपाईं कहाँ जानुहुन्छ?'}
  ]),
  P('QUESTION · PRACTICE',[
    {tag:'三人称男性・平叙',jp:'ラーマは答えを知っています。',en:'Rama knows the answer.',audio:'रामलाई उत्तर थाहा छ।'},
    {tag:'三人称女性・疑問',jp:'シータはなぜ泣いていますか？',en:'Why is Sita crying?',audio:'सीता किन रुँदै छिन्?'},
    {tag:'一人称・平叙',jp:'ぼくは質問があります。',en:'I have a question.',audio:'मेरो प्रश्न छ।'},
    {tag:'二人称丁寧・疑問',jp:'あなたはいつ来ますか？',en:'When are you coming?',audio:'तपाईं कहिले आउनुहुन्छ?'}
  ],true),
  A('QUESTION · PRACTICE ANSWER',[F('知っているは lāī + thāhā も便利','Rām-lāī uttar thāhā cha = ラーマには答えが分かる。'),F('質問語を会話の入口にする','kin / kahile / kahā̃ を先に使えるようにする。')],[
    {tag:'三人称男性・平叙',dev:'रामलाई उत्तर थाहा छ।',rom:'Rām-lāī uttar thāhā cha',kana:'ラームライ ウッタル タㇵーハー チャ',jp:'ラーマは答えを知っています。',audio:'रामलाई उत्तर थाहा छ।'},
    {tag:'三人称女性・疑問',dev:'सीता किन रुँदै छिन्?',rom:'Sītā kin rũ-dai chin?',kana:'シーター キン ルンダイ チン？',jp:'シータはなぜ泣いていますか？',audio:'सीता किन रुँदै छिन्?'},
    {tag:'一人称・平叙',dev:'मेरो प्रश्न छ।',rom:'mero praśna cha',kana:'メロ プラシュナ チャ',jp:'ぼくは質問があります。',audio:'मेरो प्रश्न छ।'},
    {tag:'二人称丁寧・疑問',dev:'तपाईं कहिले आउनुहुन्छ?',rom:'tapāī̃ kahile āu-nu-huncha?',kana:'タパイン カヒレ アウヌフンチャ？',jp:'あなたはいつ来ますか？',audio:'तपाईं कहिले आउनुहुन्छ?'}
  ],true),

  P('FROM-TO · PROMPT',[
    {tag:'一人称・平叙',jp:'ぼくは駅からホテルまで行きます。',en:'I go from the station to the hotel.',audio:'म स्टेशनबाट होटलसम्म जान्छु।'},
    {tag:'二人称丁寧・疑問',jp:'あなたは空港から来ますか？',en:'Are you coming from the airport?',audio:'तपाईं विमानस्थलबाट आउनुहुन्छ?'}
  ]),
  A('FROM-TO · ANSWER',[F('बाट = から / सम्म = まで','station-bāṭa hotel-samma で移動の幅を作る。'),F('場所語を連結する','出発点 + 到達点 + 動詞で旅行会話が作りやすい。')],[
    {tag:'一人称・平叙',dev:'म स्टेशनबाट होटलसम्म जान्छु।',rom:'ma sṭeśan-bāṭa hoṭel-samma jān-chu',kana:'マ ステーションバータ̣ ホタ̣ルサンマ ジャンチュ',jp:'ぼくは駅からホテルまで行きます。',audio:'म स्टेशनबाट होटलसम्म जान्छु।'},
    {tag:'二人称丁寧・疑問',dev:'तपाईं विमानस्थलबाट आउनुहुन्छ?',rom:'tapāī̃ vimānasthal-bāṭa āu-nu-huncha?',kana:'タパイン ヴィマーナスタルバータ̣ アウヌフンチャ？',jp:'あなたは空港から来ますか？',audio:'तपाईं विमानस्थलबाट आउनुहुन्छ?'}
  ]),
  P('FROM-TO · PRACTICE',[
    {tag:'三人称男性・平叙',jp:'ラーマは家から学校まで歩きます。',en:'Rama walks from home to school.',audio:'राम घरबाट विद्यालयसम्म हिँड्छ।'},
    {tag:'三人称女性・疑問',jp:'シータは店から寺院まで行きますか？',en:'Does Sita go from the shop to the temple?',audio:'सीता पसलबाट मन्दिरसम्म जान्छिन्?'},
    {tag:'一人称・平叙',jp:'ぼくはここから近くの病院へ行きます。',en:'I go from here to a nearby hospital.',audio:'म यहाँबाट नजिकको अस्पताल जान्छु।'},
    {tag:'二人称丁寧・疑問',jp:'あなたはどこから来ましたか？',en:'Where did you come from?',audio:'तपाईं कहाँबाट आउनुभयो?'}
  ],true),
  A('FROM-TO · PRACTICE ANSWER',[F('बाट を疑問詞にも付ける','kahā̃-bāṭa = どこから。'),F('सम्म は終点を作る','ghar-bāṭa vidyālaya-samma のように範囲が見える。')],[
    {tag:'三人称男性・平叙',dev:'राम घरबाट विद्यालयसम्म हिँड्छ।',rom:'Rām ghar-bāṭa vidyālaya-samma hĩḍ-cha',kana:'ラーム ガㇵルバータ̣ ヴィディヤーラヤサンマ ヒンダ̣チャ',jp:'ラーマは家から学校まで歩きます。',audio:'राम घरबाट विद्यालयसम्म हिँड्छ।'},
    {tag:'三人称女性・疑問',dev:'सीता पसलबाट मन्दिरसम्म जान्छिन्?',rom:'Sītā pasal-bāṭa mandir-samma jān-chin?',kana:'シーター パサルバータ̣ マンディルサンマ ジャンチン？',jp:'シータは店から寺院まで行きますか？',audio:'सीता पसलबाट मन्दिरसम्म जान्छिन्?'},
    {tag:'一人称・平叙',dev:'म यहाँबाट नजिकको अस्पताल जान्छु।',rom:'ma yahā̃-bāṭa najik-ko aspatal jān-chu',kana:'マ ヤハンバータ̣ ナジクコ アスパタル ジャンチュ',jp:'ぼくはここから近くの病院へ行きます。',audio:'म यहाँबाट नजिकको अस्पताल जान्छु।'},
    {tag:'二人称丁寧・疑問',dev:'तपाईं कहाँबाट आउनुभयो?',rom:'tapāī̃ kahā̃-bāṭa āu-nu-bhayo?',kana:'タパイン カハンバータ̣ アウヌバヨ？',jp:'あなたはどこから来ましたか？',audio:'तपाईं कहाँबाट आउनुभयो?'}
  ],true),

  P('GIVE · PROMPT',[
    {tag:'一人称・平叙',jp:'ぼくは友達に本をあげます。',en:'I give a book to a friend.',audio:'म साथीलाई किताब दिन्छु।'},
    {tag:'二人称丁寧・疑問',jp:'あなたは私に領収書をくれますか？',en:'Will you give me a receipt?',audio:'तपाईं मलाई रसिद दिनुहुन्छ?'}
  ]),
  A('GIVE · ANSWER',[F('あげる / くれる → दिनु','人-lāī + 物 + dinu で「人に物を渡す」。'),F('लाई は相手にも使える','sāthī-lāī / ma-lāī が受け取り手になる。')],[
    {tag:'一人称・平叙',dev:'म साथीलाई किताब दिन्छु।',rom:'ma sāthī-lāī kitāb din-chu',kana:'マ サーティーライ キターブ ディンチュ',jp:'ぼくは友達に本をあげます。',audio:'म साथीलाई किताब दिन्छु।'},
    {tag:'二人称丁寧・疑問',dev:'तपाईं मलाई रसिद दिनुहुन्छ?',rom:'tapāī̃ ma-lāī rasid di-nu-huncha?',kana:'タパイン マライ ラシド ディヌフンチャ？',jp:'あなたは私に領収書をくれますか？',audio:'तपाईं मलाई रसिद दिनुहुन्छ?'}
  ]),
  P('GIVE · PRACTICE',[
    {tag:'三人称男性・平叙',jp:'ラーマはシータに花をあげます。',en:'Rama gives flowers to Sita.',audio:'राम सीतालाई फूल दिन्छ।'},
    {tag:'三人称女性・疑問',jp:'シータは子どもに水をあげますか？',en:'Does Sita give water to the child?',audio:'सीता बच्चालाई पानी दिन्छिन्?'},
    {tag:'一人称・平叙',jp:'ぼくは先生から答えをもらいます。',en:'I receive the answer from the teacher.',audio:'म शिक्षकबाट उत्तर पाउँछु।'},
    {tag:'二人称丁寧・疑問',jp:'あなたは事務所で書類を受け取りますか？',en:'Do you receive the documents at the office?',audio:'तपाईं कार्यालयमा कागजात पाउनुहुन्छ?'}
  ],true),
  A('GIVE · PRACTICE ANSWER',[F('渡す相手は lāī','Sītā-lāī / baccā-lāī のように置く。'),F('もらうは pāunu が便利','teacher-bāṭa uttar pāũchu = 先生から答えをもらう。')],[
    {tag:'三人称男性・平叙',dev:'राम सीतालाई फूल दिन्छ।',rom:'Rām Sītā-lāī phūl din-cha',kana:'ラーム シーターライ プㇵール ディンチャ',jp:'ラーマはシータに花をあげます。',audio:'राम सीतालाई फूल दिन्छ।'},
    {tag:'三人称女性・疑問',dev:'सीता बच्चालाई पानी दिन्छिन्?',rom:'Sītā baccā-lāī pānī din-chin?',kana:'シーター バッチャーライ パーニー ディンチン？',jp:'シータは子どもに水をあげますか？',audio:'सीता बच्चालाई पानी दिन्छिन्?'},
    {tag:'一人称・平叙',dev:'म शिक्षकबाट उत्तर पाउँछु।',rom:'ma śikṣak-bāṭa uttar pā-ũ-chu',kana:'マ シクシャクバータ̣ ウッタル パウンチュ',jp:'ぼくは先生から答えをもらいます。',audio:'म शिक्षकबाट उत्तर पाउँछु।'},
    {tag:'二人称丁寧・疑問',dev:'तपाईं कार्यालयमा कागजात पाउनुहुन्छ?',rom:'tapāī̃ kāryālaya-mā kāgajāt pāu-nu-huncha?',kana:'タパイン カーリャーラヤマー カーガジャート パウヌフンチャ？',jp:'あなたは事務所で書類を受け取りますか？',audio:'तपाईं कार्यालयमा कागजात पाउनुहुन्छ?'}
  ],true)
);
D.words.push(
  ['हिजो','hijo','昨日','yesterday','हिजो'],['बिहान','bihān','朝','morning','बिहान'],['राति','rāti','夜に','at night','राति'],['अहिले','ahile','今','now','अहिले'],['कहाँ','kahā̃','どこ','where','कहाँ'],['कहाँबाट','kahā̃-bāṭa','どこから','from where','कहाँबाट'],['कहिले','kahile','いつ','when','कहिले'],['किन','kin','なぜ','why','किन'],['कारण','kāraṇ','理由','reason','कारण'],['उत्तर','uttar','答え','answer','उत्तर'],['प्रश्न','praśna','質問','question','प्रश्न'],['थाहा पाउनु','thāhā pāunu','知る・分かる','to know','थाहा पाउनु'],['रुनु','runu','泣く','to cry','रुनु'],
  ['स्टेशन','sṭeśan','駅','station','स्टेशन'],['होटल','hoṭel','ホテル','hotel','होटल'],['विमानस्थल','vimānasthal','空港','airport','विमानस्थल'],['पसल','pasal','店','shop','पसल'],['यहाँ','yahā̃','ここ','here','यहाँ'],['नजिक','najik','近く','near','नजिक'],['हिँड्नु','hĩḍnu','歩く','to walk','हिँड्नु'],
  ['दिनु','dinu','あげる・くれる','to give','दिनु'],['पाउनु','pāunu','もらう・得る','to receive','पाउनु'],['फूल','phūl','花','flower','फूल'],['बच्चा','baccā','子ども','child','बच्चा'],['शिक्षक','śikṣak','先生','teacher','शिक्षक']
);
D.grammar.verb.push(
  ['म आज जान्छु','ma āja jān-chu','私は今日行きます'],['तपाईं कहाँ जानुहुन्छ?','tapāī̃ kahā̃ jā-nu-huncha?','あなたはどこへ行きますか'],['घरबाट विद्यालयसम्म','ghar-bāṭa vidyālaya-samma','家から学校まで'],['मलाई रसिद दिनुहुन्छ?','ma-lāī rasid di-nu-huncha?','私に領収書をくれますか']
);
})();

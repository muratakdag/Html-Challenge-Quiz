//file quiz_controller.js
function Quiz(questions) {
  this.score = 0
  this.questions = questions
  this.questionIndex = 0
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex]
}

Quiz.prototype.guess = function (answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++
  }

  this.questionIndex++
}

Quiz.prototype.isEnded = function () {
  return this.questionIndex === this.questions.length
}

//file questions.js

function Question(text, choices, answer) {
  this.text = text
  this.choices = choices
  this.answer = answer
}

Question.prototype.isCorrectAnswer = function (choice) {
  return this.answer === choice
}

// file app.js
function populate() {
  if (quiz.isEnded()) {
    showScores()
  } else {
    // show question
    let element = document.getElementById('question')
    element.innerHTML = quiz.getQuestionIndex().text

    // show options
    let choices = quiz.getQuestionIndex().choices
    for (let i = 0; i < choices.length; i++) {
      let element = document.getElementById('choice' + i)
      element.innerHTML = choices[i]
      guess('btn' + i, choices[i])
    }

    showProgress()
  }
}

function guess(id, guess) {
  let button = document.getElementById(id)
  button.onclick = function () {
    quiz.guess(guess)
    populate()
  }
}

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1
  let element = document.getElementById('progress')
  element.innerHTML =
    quiz.questions.length + ' sorudan ' + currentQuestionNumber + '. soru '
}

function showScores() {
  let gameOverHTML = '<h1>Sonuç</h1>'
  gameOverHTML += "<h2 id='score'> Skorun: " + quiz.score + '</h2>'
  let element = document.getElementById('quiz')
  element.innerHTML = gameOverHTML
}

// create questions

let questions = [
  new Question(
    '1. HTML açılımı nedir?',
    [
      'Hyperlinks and Text Markup Language',
      'Hyper Text Markup Language',
      'Home Tool Markup Language',
      'Hiçbiri',
    ],
    'Hyper Text Markup Language'
  ),
  new Question(
    '2. Web standartlarını kim belirliyor?',
    ['Moxilla', 'Google', 'The World Wide Web Consortium', 'Microsoft'],
    'The World Wide Web Consortium'
  ),
  new Question(
    '3. En büyük başlık için doğru HTML öğesini seçin:',
    [
      '<pre><code class=html tag start-tag>&lt;h1&gt;&lt;/h1&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;head&gt;&lt/head&gt</code></pre>',
      '<pre><code class=html tag start-tag>&lt;h6&gt;&lt;/h6&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;heading&gt;&lt;/heading&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;h1&gt;&lt;/h1&gt;</code></pre>'
  ),
  new Question(
    '4. Satırdan bir satır aşağı geçmek için hangi HTML öğesini kullanırız? ',
    [
      '<pre><code class=html tag start-tag>&lt;break&gt;&lt/break&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;lb&gt;&lt/lb&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;br&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;heading&gt;&lt</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;br&gt;</code></pre>'
  ),
  new Question(
    '5. Arka plan rengi eklemek için doğru HTML nedir?',
    [
      '<pre><code class=html tag start-tag>&lt;background&gt;yellow&lt;/background&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;body&ensp;style&equals;&apos;background&hyphen;color&colon;&ensp;yellow&apos;&semi;&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;body&ensp;bg&equals;&apos;yellow&apos;&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&period;background&hyphen;color&colon;&ensp;yellow</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;body&ensp;style&equals;&apos;background&hyphen;color&colon;&ensp;yellow&apos;&semi;&gt;</code></pre>'
  ),
  new Question(
    '6. Önemli bir metni tanımlamak için doğru HTML öğesini seçin',
    [
      '<pre><code class=html tag start-tag>&lt;important&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;i&gt;&lt;&sol;i&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;b&gt;&lt;&sol;b&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>'
  ),
  new Question(
    '7. Hyperlink oluşturmak için doğru HTML nedir?',
    [
      '<pre><code class=html tag start-tag>&lt;a&gt;http&colon;&sol;&sol;www&period;w3schools&period;com&lt;&sol;a&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;a&ensp;name&equals;&quot;http&colon;&sol;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&period;com&lt;&sol;a&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;a&ensp;url&equals;&quot;http&colon;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&period;com&lt;&sol;a&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;http&colon;&sol;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&lt;&sol;a&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;http&colon;&sol;&sol;www&period;w3schools&period;com&quot;&gt;W3Schools&lt;&sol;a&gt;</code></pre>'
  ),
  new Question(
    '8. Vurgulanan metni tanımlamak için doğru HTML öğesini seçin',
    [
      '<pre><code class=html tag start-tag>&lt;i&gt;&lt;&sol;i&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;em&gt;&lt;&sol;em&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;italic&gt;&lt;&sol;italic&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;em&gt;&lt;&sol;em&gt;</code></pre>'
  ),
  new Question(
    '9. Bir hyperlink oluşturmak için hangi etiketi kullanırsınız?',
    [
      '<pre><code class=html tag start-tag>&lt;a&gt;&lt;&sol;a&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;img&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;dl&gt;&lt;&sol;dl&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;strong&gt;&lt;&sol;strong&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;a&gt;&lt;&sol;a&gt;</code></pre>'
  ),
  new Question(
    '10. Kapanış etiketini belirtmek için hangi karakter kullanılır?',
    [
      '<pre><code class=html tag start-tag>&lt;</code></pre>',
      '<pre><code class=html tag start-tag>&Hat;</code></pre>',
      '<pre><code class=html tag start-tag>&ast;</code></pre>',
      '<pre><code class=html tag start-tag>&sol;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&sol;</code></pre>'
  ),
  new Question(
    '11. Bir bağlantıyı yeni bir sekmede/tarayıcı penceresinde nasıl açabilirsiniz?',
    [
      '<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;target&equals;&quot;new&quot;></code></pre>',
      '<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;new&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;target&equals;&quot;&UnderBar;blank&quot;&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;new&ensp;blank&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;a&ensp;href&equals;&quot;url&quot;&ensp;target&equals;&quot;&UnderBar;blank&quot;&gt;</code></pre>'
  ),
  new Question(
    '12. Satır içi/inline elementler normalde yeni bir satır başlatılmadan görüntülenir.',
    ['Doğru', 'Yanlış', 'Bilmiyorum', 'Yetersiz Bilgi '],
    'Doğru'
  ),
  new Question(
    '13. Hangi input türünde max ve min özelliği aralığında kaydırma kontrolü gösterilir?',
    ['range', 'slider', 'search', 'controls'],
    'range'
  ),
  new Question(
    "14. HTML'de <pre><code class=html tag start-tag>&lt;aside&gt;</code></pre> öğesi neyi tanımlar?",
    [
      'Sayfanın ana içeriği dışındaki içerik',
      'Sayfanın sol tarafında gösterilecek bir gezinme listesi',
      'ASCII karakter seti. İnternetteki bilgisayarlar arasında bilgi göndermek için',
      'Hiçbiri',
    ],
    'Sayfanın ana içeriği dışındaki içerik'
  ),
  new Question(
    '15. HTML global özniteliği "contenteditable" şu amaçlarla kullanılır:',
    [
      'Bir öğe için bir menü içeriği belirtir. Kullanıcı öğeye sağ tıkladığında menü görünür',
      'Bir etiketin değerini düzenlenebilir yapmak için kullanılır',
      'Bir dize içindeki içeriğin ilk bulunan oluşumun konumunu döndürür',
      'Sunucudan gelen içeriği günceller',
    ],
    'Bir etiketin değerini düzenlenebilir yapmak için kullanılır'
  ),
  new Question(
    "16. HTML'de onblur ve onfocus:",
    ['Stil nitelikleri', 'Olay nitelikleri', 'HTML elementleri', 'Hiçbiri'],
    'Olay nitelikleri'
  ),
  new Question(
    '17. SVG tarafından tanımlanan grafikler hangi metin formatında tanımlıdır?',
    ['XML', 'HTML', 'CSS', 'JS'],
    'XML'
  ),
  new Question(
    '18. HTML canvas öğesi şunlar için kullanılır:',
    [
      'Sürüklenebilir öğeler oluşturur',
      'Grafiksel şekiller çizmek için',
      "MySQL'deki verileri işlemede",
      'Veritabanı kayıtlarını göstermek için',
    ],
    'Grafiksel şekiller çizmek için'
  ),
  new Question(
    "19. HTML'de, bir giriş alanının doldurulması gerektiğini belirtmek için hangi nitelik kullanılır?",
    ['placeholder', 'required', 'validate', 'formvalidate'],
    'required'
  ),
  new Question(
    "20. HTML'de SVG öğelerini doğrudan bir HTML sayfasına gömebilirsiniz.",
    ['Doğru', 'Yanlış', 'Bilmiyorum', 'Yetersiz Bilgi'],
    'Doğru'
  ),
  new Question(
    '21. Resim görüntülenemiyorsa hangi HTML özelliği  resim için alternatif bir metin belirtir?',
    ['src', 'alt', 'title', 'longdesc'],
    'alt'
  ),
  new Question(
    '22. Blok elementleri normalde yeni bir satıra başlamadan görüntülenir.',
    ['Yanlış', 'Doğru', 'İkisi de ', 'Emin Değilim'],
    'Yanlış'
  ),
  new Question(
    '23. Bir <pre><code class=html tag start-tag>&lt;iframe&gt;</code></pre>  etiketi web sayfasını diğer web sayfası içinde görüntülemek için kullanılır.',
    ['iframe diye etiket yoktur', 'Doğru', 'Yanlış', 'Emin Değilim'],
    'Doğru'
  ),
  new Question(
    '24. Numaralandırılmış bir listeyi nasıl yapabilirsiniz?',
    [
      '<pre><code class=html tag start-tag>&lt;h1&gt;&lt;&sol;h1&gt;&hyphen;&lt;h6&gt;&lt;&sol;h6&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;ul&gt;&lt;&sol;ul&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;ol&gt;&lt;&sol;ol&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;list&gt;&lt;&sol;list&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;ol&gt;&lt;&sol;ol&gt;</code></pre>'
  ),
  new Question(
    '25. HTML ________ öğesi, bir tablo içindeki bir sütunu tanımlar ve tüm ortak hücrelerde ortak semantik tanımlamak için kullanılır.',
    [
      '<pre><code class=html tag start-tag>&lt;th&gt;&lt;&sol;th&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;tfoot&gt;&lt;&sol;tfoot&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;col&gt;&lt;&sol;col&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;article&gt;&lt;&sol;article&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;col&gt;&lt;&sol;col&gt;</code></pre>'
  ),
  new Question(
    '26. HTML _________ öğesi, tablonun sütunlarını özetleyen bir dizi satır tanımlar.',
    [
      '<pre><code class=html tag start-tag>&lt;tbody&gt;&lt;&sol;tbody&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;tfoot&gt;&lt;&sol;tfoot&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;thead&gt;&lt;&sol;thead&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;tr&gt;&lt;&sol;tr&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;tfoot&gt;&lt;&sol;tfoot&gt;</code></pre>'
  ),
  new Question(
    '27. Açılır liste oluşturmak için doğru HTML nedir?',
    [
      '<pre><code class=html tag start-tag>&lt;label&gt;&lt;&sol;label&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;input&gt;&lt;&sol;input&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;select&gt;&lt;&sol;select&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;form&gt;&lt;&sol;form&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;select&gt;&lt;&sol;select&gt;</code></pre>'
  ),
  new Question(
    '28. Bir metin alanı oluşturmak için doğru HTML nedir?',
    [
      '<pre><code class=html tag start-tag>&lt;progress&gt;&lt;&sol;progress&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;option&gt;&lt;&sol;option&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;output&gt;&lt;&sol;output&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;textarea&gt;&lt;&sol;textarea&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;textarea&gt;&lt;&sol;textarea&gt;</code></pre>'
  ),
  new Question(
    '29. HTML _____________ öğesi kullanıcı arabirimindeki öğenin başlığını temsil eder.',
    [
      '<pre><code class=html tag start-tag>&lt;label&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;progress&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;input&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;form&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;label&gt;</code></pre>'
  ),
  new Question(
    '30. HTML5 için hangi doküman türü doğrudur?',
    [
      '<pre><code class=html tag start-tag>&lt;!DOCTYPE&ensp;html&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;doctype&ensp;HTML&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;DOCTYPE&ensp;HTML&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;!DOCTYPE&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;!DOCTYPE&ensp;html&gt;</code></pre>'
  ),
  new Question(
    '31. Video dosyalarını oynatmak için doğru HTML öğesi nedir?',
    [
      '<pre><code class=html tag start-tag>&lt;!DOCTYPE&ensp;html&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;video&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;audio&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;track&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;video&gt;</code></pre>'
  ),
  new Question(
    '32. Sırasız bir liste(madde işaretli) nasıl tanımlanır?',
    [
      '<pre><code class=html tag start-tag>&lt;h1&gt;&lt;&sol;h1&gt;&hyphen;&lt;h6&gt;&lt;&sol;h6&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;ul&gt;&lt;&sol;ul&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;ol&gt;&lt;&sol;ol&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;list&gt;&lt;&sol;list&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;ul&gt;&lt;&sol;ul&gt;</code></pre>'
  ),
  new Question(
    '33. Ses dosyalarını oynatmak için doğru HTML öğesi nedir?',
    [
      '<pre><code class=html tag start-tag>&lt;video&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;audio&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;mp3&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;sound&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;audio&gt;</code></pre>'
  ),
  new Question(
    '34. HTML _____________ kullanır',
    [
      'Kullanıcı tanımlı etiketler',
      'Önceden belirlenmiş etiketler',
      'Dil tarafından tanımlanan sabit etiketler',
      'Yalnızca bağlantı için etiketler',
    ],
    'Dil tarafından tanımlanan sabit etiketler'
  ),
  new Question(
    '35. Temel HTML Bloğu ________ olarak bilinir.',
    ['HTML Body', 'HTML Tag', 'HTML Attribute', 'HTML Element'],
    'HTML Tag'
  ),
  new Question(
    '36. Sayfada doğrudan görüntülenmeyen etiketler ve testler ______ bölümüne yazılır.',
    [
      '<pre><code class=html tag start-tag>&lt;head&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;title&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;body&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;html&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;head&gt;</code></pre>'
  ),
  new Question(
    '37. Hangisi sayfa yüklendiğinde  tanımlanan metin alanının otomatik olarak odaklanması gerektiğini belirtir?',
    [
      '<pre><code class=html tag start-tag>&lt;dirname&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;autofocus&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;placeholder&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;maxlength&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;autofocus&gt;</code></pre>'
  ),
  new Question(
    '38. Hangisi doküman içeriği kullanıcı tarafından yazdırılmak istendiğinde yazdırma işlemi başladıktan sonra script ile fonksiyonellik sağlar?',
    [
      '<pre><code class=html tag start-tag>&lt;onbeforeunload&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;onafterprint&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;onerror&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;onload&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;onafterprint&gt;</code></pre>'
  ),
  new Question(
    '39. HTML nedir?',
    [
      'HTML, Hiper Metin İşaretleme Dili anlamına gelir ve HTML, işaretleme kullanan Web sayfalarının yapısını tanımlar',
      'HTML öğeleri, HTML sayfalarının yapı taşlarıdır ve HTML öğeleri etiketlerle temsil edilir.',
      "HTML etiketleri, 'heading', 'paragraph' gibi içerik parçalarını etiketler ve Tarayıcılar HTML etiketlerini görüntülemez. ",
      'Hepsi',
    ],
    'Hepsi'
  ),
  new Question(
    '40. HTML Paragrafları ______ etiketi ile tanımlanır: ',
    [
      '<pre><code class=html tag start-tag>&lt;h1&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;p&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;a&gt;</code></pre>',
      '<pre><code class=html tag start-tag>&lt;src&gt;</code></pre>',
    ],
    '<pre><code class=html tag start-tag>&lt;p&gt;</code></pre>'
  ),
  new Question(
    '41. _______ özniteliği, renk, yazı tipi, boyut vb. gibi bir öğenin stilini belirtmek için kullanılır.',
    ['src', 'alt', 'style', 'lang'],
    'style'
  ),
]

//create quiz
let quiz = new Quiz(questions)

// display quiz
populate()

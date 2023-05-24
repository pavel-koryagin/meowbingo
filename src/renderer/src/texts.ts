type Texts = {
  title: string
  blocks: {
    title: string
    isList?: boolean
    geo: string
    eng: string
  }[]
}[]

export const texts: Texts = [
  {
    title: 'Task 2',
    blocks: [
      {
        title: 'Text',
        geo: `– ვინ არის ეს? – მე ვარ კორეელი სტუდენტი. ეს არის ქართველი სტუდენტი. – რა არის ეს? – ეს არის წიგნი. ეს არის ქართული წიგნი. – სად არის ეს წიგნი? – ეს წიგნი არის მაგიდაზე ოთახში. – სად არის კალამი? – კალამი არის წიგნზე კლასში. მე ვარ უნივერსიტეტში.`,
        eng: `– Who is this? – I am a Korean student. This is a Georgian student. – What is this? This is a book. This is a Georgian book. – Where is this book? – This book is on the table in the room. – Where is the pen? – The pen is on the book in the classroom. I'm at the university.`
      },
      {
        title: '1. Translate',
        geo: `– რა არის ეს? – ეს არის კალამი. – სად არის კალამი? – კალამი არის წიგნზე. – სად არის წიგნი? – წიგნი მაგიდაზეა. – სად არის მაგიდა? – მაგიდა ოთახშია. – სად არის ოთახი? – ოთახი კლასშია. – სად არის კლასი? – კლასი უნივერსიტეტშია. – სად არის უნივერსიტეტი? – უნივერსიტეტი სეულშია. – სად არის სეული? – სეული არის კორეაში. – სად არის კორეა? – კორეა არის აზიაში.`,
        eng: `– What is this? – This is a pen. – Where is the pen? – The pen is on the book. – Where is the book? – The book is on the table. – Where is the table? – The table is in the room. – Where is the room? – The room is in the class. – Where is the class? – The class is in the university. – Where is the university? – The university is in Seoul. – Where is Seoul? – Seoul is in Korea. – Where is Korea? – Korea is in Asia.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) – ვინ არის ეს? – ეს სტუდენტია. ეს არის კორეელი სტუდენტი. კორეელი სტუდენტი თბილისშია. ქართველი სტუდენტი კორეაშია, სეულში. სეული არის აზიაში.
b) – რა არის ეს? – ეს არის წიგნი. ეს არის ქართული წიგნი.
c) მე ვარ ოთახში. მე ვარ უნივერსიტეტში. უნივერსიტეტი თბილისშია. თბილისი
საქართველოშია. მე ვარ კორეაში სეულში.
d) – სად არის ეს წიგნი? – ეს წიგნი არის თბილისში.`,
        eng: `a) – Who is this? – This is a student. This is a Korean student. The Korean student is in Tbilisi. The Georgian student is in Korea, in Seoul. Seoul is in Asia.
b) – What is this? – This is a book. This is a Georgian book.
c) I am in the room. I am in the university. The university is in Tbilisi. Tbilisi is in
Georgia. I am in Korea, in Seoul.
d) – Where is this book? – This book is in Tbilisi.`
      },
      {
        title: '3. Translate',
        geo: `a) – რა არის ეს? – ეს არის წიგნი. ეს არის ქართული წიგნი. – სად არის ეს წიგნი? – ეს წიგნი არის მაგიდაზე. კალამი არის წიგნზე.
b) – წიგნი არის მაგიდაზე. – სად არის ეს მაგიდა? – ეს მაგიდა არის ოთახში. – სად არის ეს ოთახი? – ოთახი არის უნივერსიტეტში.
c) – მე ვარ სეულში. მე ვარ უნივერსიტეტში. – სად არის სეული? – სეული არის აზიაში.
d) – ვინ არის ეს? – ეს არის კორეელი სტუდენტი. ეს არის ქართველი სტუდენტი.
e) – ქართველი სტუდენტი არის თბილისში. – სად არის თბილისი? – თბილისი არის საქართველოში. საქართველო არის ევროპაში. კორეა არის აზიაში.
f) მე ვარ კორეელი. ეს არის ქართველი. მე ვარ აზიელი. ქართველი სტუდენტი არის ევროპელი.
g) ეს არის კორეული წიგნი. ეს არის ქართული წიგნი.
h) ეს არის ქართული ანბანი.
i) – ვინ არის ოთახში? – მე ვარ ოთახში. კორეელი სტუდენტი არის კლასში.
– სად არის ქართველი სტუდენტი? – ქართველი სტუდენტი არის ევროპაში.
j) – რა არის ოთახში? – ოთახში არის მაგიდა. – რა არის მაგიდაზე? – კალამი
არის მაგიდაზე.`,
        eng: `a) – What is this? – This is a book. This is a Georgian book. – Where is this book? – This book is on the table. The pen is on the table.
b) – The book is on the table. – Where is this table? – This table is in the room. – Where is this room? – The room is in the university.
c) – I am in Seoul. I am in the university. – Where is Seoul? – Seoul is in Asia.
d) – Who is this? – This is a Korean student. This is a Georgian student.
e) – The Georgian student is in Tbilisi. – Where is Tbilisi? – Tbilisi is in Georgia. Georgia is in Europe. Korea is in Asia.
f) I am Korean.He is a Georgian.I am Asian. The Georgian student is European.
g) This is a Korean book. This is a Georgian book.
h) This is the Georgian alphabet.
i) – Who is in the room? – I am in the room. The Korean student is in the class. – Where is the Georgian student? – The Georgian student is in Europe.
j) – What is in the room? – There is a table in the room. – What is on the table? – A pen is on the table.`
      }
    ]
  },
  {
    title: 'Task 3',
    blocks: [
      {
        title: 'Texts',
        geo: `– გამარჯობა! მე ვარ ამერიკელი სტუდენტი ნიუ იორკიდან. საქართველოში მე ვსწავლობ ქართულს. საქართველო პატარა, მაგრამ ლამაზი ქვეყანაა. თბილისი ლამაზი ქალაქია? – დიახ, ლამაზია. კავკასიონი დიდი და ლამაზია. ეს დიდი მთაა. – ეს კორეელი სტუდენტი არ არის კლასში. სად ხართ თქვენ? – შენ ხარ უნივერსიტეტში და მე ვარ სახლში. დედა და მამა სოფელში არიან. – ჩვენ ვართ ქალაქში. დედა არის გერმანიიდან, მამა არის თბილისელი. ბოდიში, ჩვენ არ ვართ სახლში. ჩვენ ვართ უნივერსიტეტში.
– გამარჯობა! შენ კორეელი ხარ?
– არა, მე გერმანიიდან ვარ. მე ვსწავლობ ქართულს თბილისში. საიდან ხართ თქვენ
და სადაურია ეს სტუდენტი?
– მე ვარ იაპონიიდან, მაგრამ ეს არის ლონდონიდან. ეს ინგლისელია.
– მადლობა. ნახვამდის.`,
        eng: `– Hello! I am an American student from New York. I'm studying Georgian in Georgia. Georgia is a small, but beautiful country. Is Tbilisi a beautiful city? – Yes, it's beautiful. The Caucasus is big and beautiful. This is a big mountain. – This Korean student is not in the classroom. Where are you? – You are at the university and I am at home. (My) mom and dad are in the village. – We are in the city. (My) mom is from Germany; dad is Tbilisian. Sorry we aren't at home. We are at the university.
– Hello! Are you Korean?
– No, I'm from Germany. I'm studying Georgian in Tbilisi. Where from are you and where
is this student from?
– I'm from Japan, but they are from London. They are English.
– Thank you. Goodbye.`
      },
      {
        title: '1. Read and translate',
        isList: true,
        geo: `a) ჩვენ ვართ მთაზე, ჩვენ ვართ კავკასიონზე.
b) ისინი არიან ამერიკიდან და თქვენ ხართ იტალიიდან. ის არის კორეელი
სეულიდან და მე ვარ თბილისელი. შენ თბილისელი ხარ? – დიახ, მე
თბილისიდან ვარ და თქვენ სადაური ხართ?
c) ბოდიში. რა არის ეს? ვინ ხარ შენ? – მე ვარ ამერიკელი. ის არის ესპანელი.
– ესპანელი მადრიდიდან არის? – არა, ის ბარსელონადან არის. ის არ არის
მადრიდელი.
d) – სად არიან დედა და მამა? – ისინი არ არიან ქალაქში. ისინი სოფელში არიან.
– საიდანაა დედა? – დედა ქართველია. – მამა? – მამა იტალიელია ვენეციიდან.`,
        eng: `a) We are on a mountain, we are on the Caucasus.
b) They are from America and you all are from Italy. He/she is Korean from Seoul and I
am Tbilisian. Are you Tbilisian? – Yes, I am Tbilisian and where are you from?
c) I'm sorry. What is this? Who are you? – I am American. He/she is Spanish. – Is the
Spaniard from Madrid? – No, he/she is from Barcelona. He/she is not Madridian.
d) – Where are mom and dad? – They are not in the city. They are in the village. – Where is your mom from? – (My) mom is Georgian. – (Your) dad? – (My) dad is
Italian, from Venice.`
      },
      {
        title: '2. Translate and try to answer',
        isList: true,
        geo: `a) ვინ ხარ შენ? შენ სტუდენტი ხარ?
b) სადაური ხართ? საიდანაა დედა? სადაურია მამა? c) ის საიდანაა?
d) ვინ არიან ისინი? სად არიან ისინი?
e) ეს სტუდენტი ვინ არის?`,
        eng: `a) Who are you? Are you a student?
b) Where are you from? Where is mom from? Where is dad from? c) Where is he from?
d) Who are they? Where are they?
e) Who is this student?`
      },
      {
        title: '3. Translate into Georgian',
        isList: true,
        geo: `a) მე ვარ კორეიდან. მე ვსწავლობ ქართულს თბილისში. საქართველო არის პატარა, მაგრამ ლამაზი ქვეყანა. სეული არის დიდი და ლამაზი ქალაქი.
b) მე არ ვარ კორეაში. მე ვარ ამერიკაში. ეს არის ამერიკელი სტუდენტი.
c) კალამი არის მაგიდაზე, ოთახში.
d) ისინი არ არიან უნივერსიტეტში, ისინი არიან სოფელში.
e) შენ ხარ მთაზე.
f) ბოდიში. მადლობა. ნახვამდის.`,
        eng: `a) I am from Korea. I study Georgian in Tbilisi. Georgia is small, but it’s a beautiful country. Seoul is a big and beautiful city.
b) I am not in Korea. I am in America. This is an American student.
c) The pen is on the table in the room.
d) They are not in the university, they are in the village.
e) You are on the mountains.
f) I’m sorry. Thank you. Goodbye.`
      },
      {
        title: '4. Translate into Georgian and answer the questions',
        isList: true,
        geo: `a) ვინ ხართ თქვენ? b) სად ხართ თქვენ? c) სადაური ხართ?
d) სადაურებიარიან? e) რა არის ის?
f) სეული დიდი ქალაქია?
g) ამერიკა არის პატარა ქვეყანა?
h) სად არის ეს გერმანელი სტუდენტი?
i) რა არის მაგიდაზე?
j) რა არის კლასში?
k) სად არის კავკასიონი?
l) სად არის თბილისი და სად არის ლონდონი?
m) რა არის ეს?
n) ვინ არის ეს?
o) ვინ არიან ისინი?`,
        eng: `a) Who are you?
b) Where are you?
c) Where are you from?
d) Where are they from?
e) What is it?
f) Is Seoul a big city?
g) Is America a small country?
h) Where is this German student?
i) What is on the table?
j) Who is in the class?
k) Where is Caucasus?
l) Where is Tbilisi and where is London?
m) What is this?
n) Who is this?
o) Who are they?`
      },
      {
        title: '',
        geo: ``,
        eng: ``
      }
    ]
  }
]

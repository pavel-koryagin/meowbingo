export type Texts = {
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
    title: 'Lesson 2',
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
        isList: true,
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
    title: 'Lesson 3',
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
d) სადაურები არიან? e) რა არის ის?
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
      }
    ]
  },
  {
    title: 'Lesson 4',
    blocks: [
      {
        title: 'Texts',
        geo: `– გამარჯობა. როგორ ხარ? – დიდი მადლობა. შენ როგორ ხარ? – კარგად. – სად არის შენი უნივერსიტეტი? – ჩემი უნივერსიტეტი არის თბილისში. – სადაურია შენი მეგობარი? – ჩემი მეგობარი კორეელია. მე ვარ იტალიიდან. აქ, საქართველოში მე ვსწავლობ ქართულს. – როგორი ქალაქია თბილისი? – თბილისი ლამაზი ქალაქია. მე აქ ვცხოვრობ. – ის არის ჩვენი დედაქალაქი. – რა არის თქვენი დედაქალაქი? თქვენ სად ცხოვრობთ? – ჩვენ ვცხოვრობთ იტალიაში და ჩვენი დედაქალაქი არის რომი. რომი არის დიდი და ლამაზი ქალაქი.
– აქ ვცხოვრობ მე. აი, ეს არის ჩვენი ქუჩა. აქ არის პატარა მდინარე. აქ არის ჩემი სახლი და ჩემი უნივერსიტეტი. აი, ეს ჩემი სურათია. სად არის ამის ფანქარი? – ამის ფანქარი მაგიდაზეა, თქვენი კალამი არის ჩანთაში. მისი რვეული მაგიდაზეა.
– სადაურია ეს კაცი? – ეს კაცი არის გერმანელი. – ვინ არის ეს ქალი? – ეს ქალი არის კაცთან და არის მისი მეგობარი. ის არ არის ჩემი მეგობარი. – თქვენი მეგობარი სად არის? – ჩემი მეგობარი აქ არ არის. ის ლონდონშია. – სად არის ის ბავშვი? – ის ბავშვი არის სახლში და ეს ბავშვი არის ქუჩაში. ის არის ტბასთან. – არის აქ ტბა? – დიახ, აქ არის პატარა და ლამაზი ტბა. აი, ეს ტბა. ეს ბავშვი აქ ცხოვრობს. – როგორ არის დედა? – კარგად. დიდი მადლობა. – ნახვამდის.`,
        eng: `– Hello. How are you? – Thank you very much. How are you? – Well. – Where is your university? – My university is in Tbilisi. – Where is your friend from? – My friend is Korean. I'm from Italy. Here, in Georgia I'm studying Georgian. – How is the city of Tbilisi? – Tbilisi is a beautiful city. I live here. – It is our capital. – What is your capital? Where do you live? – We live in Italy and our capital is Rome. Rome is a big and beautiful city.
I live here. Here, this is our street. Here is a small river. Here is my house and my university. Here, it is my picture. Where is his pencil? His/her pencil is on the table; your pen is in the bag. His/her notebook is on the table.
– Where is this man from? – This man is German. – Who is this woman? – This woman is with the man and is his friend. She is not my friend. – Where is your friend? – My friend is not here. He is in London. – Where is that child? – That child is at home and this child is in the street. He/she's by the lake. – There is a lake here? – Yes, there is a small and beautiful lake here. Here this is the lake. This child lives here. – How is your mom? – Well. Thank you very much. – Goodbye.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) სეული არის ჩვენი დედაქალაქი. სეულში არის მდინარე და არ არის ტბა.
b) ის არის იმათი პატარა, მაგრამ ლამაზი ქალაქი. თბილისი ჩვენი ლამაზი
დედაქალაქია.
c) – სად არის ჩვენი ფანქარი? – ის მაგიდაზეა ოთახში. მაგიდაზე იმისი ჩანთაა და იქ არის წიგნი და რვეული.
d) – ეს ბავშვი ჩემი პატარა მეგობარია. ვინ არის შენი მეგობარი? – ეს ქართველი კაცი ჩემი მეგობარია. ეს იმისი სურათია.
e) – სოფელში არის ტბა და მდინარე? – სოფელში არის დიდი ტბა, მაგრამ აქ არ არის მდინარე.
f) – ვინ არიან ეს ქალი და კაცი? საიდან არიან ისინი? – ისინი არიან კორეიდან. – ბოდიში, მაგრამ თქვენ საიდან ხართ?
g) რვეული არის წიგნთან. წიგნი არაა მაგიდაზე. ის არის ჩანთაში.
h) – სად ხარ შენ? – მე ვარ დედასთან სახლში. – სად ცხოვრობს დედა? კორეელი სტუდენტი არის მის მეგობართან.
i) – ეს როგორი წიგნია? – ეს ქართული წიგნია. ეს წიგნი დიდია.
j) – როგორ ხართ თქვენ? – კარგად. დიდი მადლობა. – დედა და მამა სეულში
არიან? – არა, ისინი თბილისში არიან. ისინი იქ ცხოვრობენ.`,
        eng: `a) Seoul is our capital. In Seoul there is a river and not a lake.
b) It is their small, but beautiful city. Tbilisi is our beautiful capital.
c) – Where is our pencil? – It is on the table in the room. On the table is her bag and
there is a book and notebook.
d) – This child is my small friend. Who is your friend? – This Georgian man is my
friend. This is his picture.
e) – Is there a lake and a river in the village? – There is a big lake in the village, but
there is not a river here.
f) – Who is this man and woman? Where are they from? – They are from Korea.
– Excuse me, where are you from?
g) The notebook is at the book. The book is not on the table. It is in the bag.
h) – Where are you? – I am with my mother at home. – Where does (your) mom live? The Korean student is with her friend.
i) – How is this book? – This is a Georgian book. This is a big book.
j) – How are you? – Well. Thank you very much. – Is (your) mom and dad in Seoul?
– No, they are in Tbilisi. They live there.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) – მისი მეგობარი ნიუ-იორკშია და შენი მეგობარი არის აქ სეულში. თბილისიდან ხართ? – ბოდიში, თქვენ სადაური ხართ?
b) ჩვენ ვართ ქუჩაში. ეს არის დიდი დედაქალაქი. იგი არის რომი.
c) ხე არის ქუჩაში. ტბა არა არის ამ სოფელში. სეულში დიდი მდინარეა.
d) ის არის ხეზე. ის არის ქუჩაში? ისინი არიან სახლში.
e) – გამარჯობა. როგორ ხარ? შენ ხარ საქართველოში? – არა, მე ვარ კორეაში.
f) – სად არის შენი სახლი? – ჩვენი სახლი არის მოსკოვში. – ისინი სოფელიდან
არიან? – კაცი თბილისიდან არის და ქალი (არის) ქალაქიდან. იმათი ბავშვი
არის აქ.
g) – სად ხარ შენ? – ბოდიში, მაგრამ მე არ ვარ სახლში. მე ვარ მაგიდასთან
ოთახში, უნივერსიტეტში.
h) – რა არის ეს? – ეს არის ფანქარი. – სად არის ეს ფანქარი? – ის ჩანთაშია. – სად
არის ჩანთა? – ჩანთა არის მაგიდასთან კლასში.
i) ეს არის მისი სურათი. ის არის დიდი, მაგრამ არ არის ლამაზი. შენი სურათი
არის პატარა და ლამაზი.
j) უღრმესი მადლობა. კარგად ბრძანდებოდეთ.`,
        eng: `a) – His friend is in New York and your friend is here in Soul. Are you from Tbilisi? – Excuse me (sorry), where are you from?
b) We are in the street. This is a big capital. It is Rome.
c) The tree is in the street. There is no lake in this village. There is a big river in Seoul.
d) He is on the tree. Is he in the street? They are at home.
e) – Hello. How are you? Are you in Georgia? – No, I am in Korea.
f) – Where is your house? – Our house is in Moscow. – Are they from the village? – The
man is from Tbilisi and the woman is from the city. Their child is here.
g) – Where are you? – Sorry, but I am not at home. I am at the table in the room in the
university.
h) – What is this? – This is a pencil. – Where is this pencil? – It is in the bag. – Where is
the bag? – The bag is at the table in the class.
i) This is her picture. It is big, but not beautiful. Your picture is small and beautiful.
j) Thank you very much. Goodbye.`
      },
      {
        title: '3. Translate and answer the questions',
        isList: true,
        geo: `a) ვინ არის ეს ბავშვი?
b) როგორ(ა) ხარ?
c) შენ სადაური ხარ?
d) რა არის ეს? სად არის შენი ჩანთა?
e) სად არის დედაშენი? ის ამერიკელი არის? f) სად არის მამაშენი? ის რომიდან არის?
g) როგორ არის შენი მეგობარი? სად არის ის?
h) სად არის ეს ფანქარი და სად არის ეგ კალამი? i) შენ ხარ უნივერსიტეტში?
j) ვინ არის აქ? რა არის იქ?
k) ხე არის ქუჩაში? ის არის ხესთან?
l) ეს არის ჩვენი სახლი? ეს არის შენი ოთახი? m) სად არის შენი სურათი?
n) ისინი როგორ არიან აქ?
o) როგორი წიგნი არის ეს?
p) ეს ბავშვი არის მაგიდასთან?
q) ისინი არიან აქ? სად არიან ისინი?
r) ვინ არის იქ ბავშვთან?
s) ვინ არის აქ? ვინ არის ოთახში?
t) შენ ხარ თბილისიდან?
u) სად ცხოვრობ?
v) კორეელი სტუდენტი სად ცხოვრობს? w) შენ ცხოვრობ თბილისში?
x) ეს სტუდენტი ცხოვრობს აქ?
y) ეს ბავშვი სად ცხოვრობს?`,
        eng: `a) Who is this child?
b) How are you?
c) Where are you from?
d) What is this? Where is your bag?
e) Where is your mother? Is she American?
f) Where is your father? Is he from Roma?
g) How is your friend? Where is he?
h) Where is this pencil and where is that pen? i) Are you at the University?
j) Who is here? What is there?
k) Is the tree in the street? Is he at that tree? l) Is this our house? Is this your room? m) Where is your picture?
n) How are they here?
o) What kind of book is this?
p) Is this child at the table?
q) Are they here? Where are they?
r) Who is there with (at) the child?
s) Who is here? Who is in the room?
t) Are you from Tbilisi?
u) Where do you live?
v) Where does the Korean student live?
w) Do you live in Tbilisi?
x) Does this student live here?
y) Where does this child live?`
      }
    ]
  },
  {
    title: 'Lesson 5',
    blocks: [
      {
        title: 'Texts',
        geo: `– გამარჯობა! როგორ ხართ? – გმადლობთ, კარგად და თქვენ როგორ ხართ? – სად არიან თქვენი მშობლები? – ეს დედაჩემია. მამაჩემი ინგლისიდან მოდის. – სად არის თქვენი და-ძმა? როგორ არიან ისინი? – გმადლობთ, ისინი კარგად არიან. ჩემი და სახლშია თბილისში. ჩემი ძმა მიდის ლონდონიდან სეულში. ის არ მოდის თბილისში. – ის თვითმფრინავით მიდის? – დიახ, ის მიდის თვითმფრინავით. – მე მომწონს მგზავრობა გემით. მე არ მომწონს მგზავრობა მატარებლით. მე არ მომწონს ეს მანქანა. მე მომწონს ის გემი. მე არ მომწონს მანქანით მგზავრობა. სად მიდის შენი ძმა მატარებლით? – რომში მიდის. – სად მიდის ეს მატარებელი? – ეს მატარებელი მიდის იაპონიაში. – გმადლობთ.
– რამდენი წიგნია მაგიდაზე და რამდენი რვეულია ჩანთაში? – მაგიდაზე არის რვა წიგნი და ხუთი ფანქარი. მე მომწონს ეს წიგნი.
– სად არის ბებიაჩემი? – ბებიაჩემი არის ოთახში და მამაშენი უნივერსიტეტშია. – სადაა დედამისი? – დედამისი აქაა. ეს არის ჩემი ქალიშვილი. ეს თქვენი ვაჟიშვილია? – ეს ჩემი შვილი არაა, ეს ჩემი სტუდენტია.
– სად მიდის თქვენი მატარებელი? საიდან მოდის თქვენი მატარებელი? თქვენი და მატარებლით მიდის სეულში? – დიახ.`,
        eng: `– Hello! How are you? – Thank you, I'm well and how are you? – Where are your parents? – This is my mother. My father is coming from England. – Where are your sister and brother? How are they? – Thank you, they are well. My sister is at home in Tbilisi. My brother is going from London to Seoul. He is not coming to Tbilisi. – Is he going by plane? – Yes, he is going by plane. – I like to travel by ship. I don't like to travel by train. I don't like this car. I like that ship. I don't like to travel by car. Where is your bother going by train? – He's going to Rome. – Where is this train going? – This train is going to Japan. – Thank you.
– How many books are on the table and how many notebooks are in the bag? – There are eight books on the table and five pencils. I like this book.
– Where is my grandmother? – My grandmother is in the room and your father is at the university. Where is her mother? – Her mother is here. This is my daughter. Is this your son? – This is not my child; this is my student.
– Where is your train going? Where is your train coming from? Is your sister going to Seoul by train? – Yes.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) მე არ მომწონს ეს კლასი. ეს პატარაა. ის კლასი დიდია.
b) ბებიაშენი და პაპაჩემი მიდიან სეულში.
c) ეს არის დედაჩემი. ის ლამაზი ქალია. ის არის კორეელი.
d) – მამათქვენი სად არის? – მამაჩვენი უნივერსიტეტშია.
e) ეს ჩემი და-ძმაა. ჩემი და მიდის თბილისში. ის არ მიდის მატარებლით. ის მიდის თვითმფრინავით.
f) მე არ მომწონს მატარებლით მგზავრობა. მე მომწონს მგზავრობა გემით.
g) ქალები არიან თვითმფრინავში. კაცები არიან გემზე. ისინი მიდიან გემით.
h) აქ არის რვა რვეული და ორი ფანქარი. ერთი წიგნი არის მაგიდაზე. ჩანთაში არის სამი კალამი.
i) – ბებია მისი მოდის თბილისში. – აქ მოდის? – დიახ.
j) – რამდენი სტუდენტია კლასში? – აქ არის ათი სტუდენტი. – სად არიან
კორეელი სტუდენტები? – ისინი არიან უნივერსიტეტში.`,
        eng: `a) I don't like this class. It is small. This class is big.
b) Your grandmother and my grandfather are going to Seoul.
c) This is my mother. She is a beautiful woman. She is Korean.
d) – Where is your father? – Our father is at the university.
e) This is my sister and brother. My sister is going to Tbilisi. She doesn't go by train. She
goes by plane.
f) I don't like traveling by train. I like to travel by ship.
g) The women are on the plane. The men are on the ship. They are going by ship.
h) Here are eight notebooks and two pencils. One book is on the table. There are three
pens in the bag.
i) – His/her grandmother is going to Tbilisi. – She is coming here? – Yes.
j) – How many students are in the classroom? – Here are ten students. – Where are the
Korean students? – They are at the university.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) ეს არის დედაჩემი. ის არის პაპაშენი. ისინი მოდიან თბილისში.
b) – საიდან არის მამათქვენი? – ის არის ლონდონიდან.
c) – როგორა ხარ? როგორ არიან? – გმადლობთ. კარგად.
d) ექსი კალამი არის ჩანთაში და სამი ფანქარი არის მაგიდაზე.
e) რამდენი სტუდენტი არის? სად არიან?
f) – მომწონს მანქანით მგზავრობა. – არ მომწონს ეს მატარებელი. – სად მიდის ეს
ავტობუსი? – ეს მიდის სეულში.
g) – ის მიდის თბილისში? – არა, ის მიდის მადრიდში. – პაპაშენი მიდის
ესპანეთში? – არა, მისი მშობლები მიდიან იქ. – სად მიდის შენი და? – ის არ
მიდის.
h) – ეს არის შენი ვაჟიშვილი? – დიახ, ის არის ჩემი ვაჟიშვილი. – სად არის შენი
ქალიშვილი? – ის არის გორში.
i) – როგორ თქვენი მეგობარი ჯონი? – გმადლობთ, კარგად. შენ როგორა ხარ?
j) – ბოდიში, ვინ ხარ შენ? – მე ვარ კორეელი სტუდენტი.
k) ჩვენ ვართ ბავშვები. ჩვენ ვართ მეგობრები. ეს არის ჩვენი სახლი.
l) შვიდი ხე არის ქუჩაში სახლთან.
m) მანქანა არის აქ. მე მომწონს მგზავრობა მანქანით.
n) ეს პაპაშენია. ის მოდის აქ.
o) ეს კაცები არიან ჩემი სოფელიდან. ისინი არ არიან თბილისიდან.`,
        eng: `a) This is my mother. That is your grandmother. They are coming to Tbilisi.
b) – Where is your father from? – He is from London.
c) – How are you? How are they? – Thank you. I’m OK (well).
d) There are six pens in the bag and three pencils are on the table.
e) How many students are there? Where are they?
f) – I like traveling by car. – I don’t like this train. – Where does this bus go? – It goes to
Seoul.
g) – Does it go to Tbilisi? – No it goes to Madrid. – Does your grandfather go to Spain?
– No, his parents go there. – Where does your sister go? – She doesn’t go.
h) – Is this your son? – Yes, he’s my son. – Where is your daughter? – She is in Gori.
i) –How is your friend John? – Thank you, he is OK. How are you?
j) – Excuse me, who are you? – I am a Korean student.
k) We are children. We are friends. This is our house.
l) There are seven trees in the street at the house.
m) There is a car here. I like traveling by car.
n) This is your grandfather. He comes here.
o) These men are from my village. They are not from Tbilisi.`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) ეს ქალები არიან მეგობრები. ესენი არიან კორეელები. ჩვენ ვართ მეგობრები. ჩვენ ვართ ქართველები.
b) ჩემი წიგნი ჩანთაშია. შენი რვეული მაგიდაზეა. აქ შვიდი წიგნია და ორი ფანქარი.
c) – სად არიან ბავშვები? – ბავშვები არიან ოთახში. რამდენი ბავშვია ოთახში? – აქ სამი ბავშვია და ერთი ქალი. – სად არიან ქალები? – ქალები არიან სახლთან ქუჩაში. – ეს იმათი სახლია.
d) მანქანა მიდის ქუჩაში. ის არის ხესთან. ეს ხე დიდია და ლამაზი. მე მომწონს ის.
e) სამი ძმა სოფელშია და ერთი არის თბილისში. ესენი ჩემი შვილები არიან. ეს
ჩემი მშობლებია. ჩვენ ვართ იქიდან.
f) – სად არიან თქვენი მშობლები და და-ძმა? – ისინი აქ არ არიან.
g) – როგორ არიან ისინი? – გმადლობთ კარგად. – თქვენ როგორ ხართ?
h) – აქ არის სამი ქართველი და ხუთი კორეელი სტუდენტი. რამდენი
სტუდენტია კლასში? – აქ არის რვა სტუდენტი.
i) – ჩანთაში არის ორი შენი და სამი ჩემი წიგნი. რამდენი წიგნია ჩანთაში? – იქ
არის ხუთი წიგნი.
j) – გამარჯობა! როგორ ხარ? – გმადლობთ, კარგად. თქვენ როგორ ხართ?
– კარგად, დიდი მადლობა. ნახვამდის.`,
        eng: `a) These women are friends. They are Koreans. We are friends. We are Georgians.
b) My book is in the bag. Your notebook is on the table. Here are seven books and two
pencils.
c) – Where are the children? – The children are in the room. – How many children are
in the room? – Here there are three children and one woman. – Where are the
women? – The women are at home in the street. – This is their house.
d) The car goes in the street. It is by the tree. This tree is big and beautiful. I like it.
e) Three brothers are in the village and one is in Tbilisi. These are my children. These
are my parents. We are from there.
f) – Where are your parents, sister, and bother? – They are not here.
g) – How are they? – Thank you, they are well. – How are you?
h) – Here are three Georgian and five Korean students. How many students are in the
classroom? – There are eight students here.
i) – There are two of your books and three of mine in the bag. How many books are
in the bag? – There are five books.
j) – Hello! How are you? – Thank you, I'm well. How are you? – Well, thank you very
much. Goodbye.`
      }
    ]
  },
  {
    title: 'Lesson 6',
    blocks: [
      {
        title: 'Texts',
        geo: `– გამარჯობა! როგორ ხარ? – გმადლობთ, ძალიან კარგად ვარ. შენი მშობლები როგორ არიან? – კარგად არიან. დიდი მადლობა.
– მე მაქვს ძალიან ლამაზი ცისფერი კაბა. შენ მოგწონს ცისფერი ფერი? – არა, მე არ მომწონს ეგ ფერი, მაგრამ შენი კაბა ძალიან ლამაზია. – გინდა ეს წითელი ვარდი? – გმადლობთ.
– მე ძალიან მომწონს მანქანით მგზავრობა. მე მაქვს წითელი მანქანა, მაგრამ არ მომწონს ეს ფერი. მე მინდა თეთრი მანქანა. შენი მანქანა რა ფერია? – მე არა მაქვს მანქანა.
– მწვანე ხე არის ქუჩაზე. რა ფერია ზეცა? – ზეცა ცისფერია. – არა, აქ ზეცა ლურჯია. მზე რა ფერია? – მზე ყვითელია. დედამიწა ყავისფერია. – მთვარე რა ფერია?
– მას არა აქვს ნაცრისფერი ფანქარი. თქვენი ფანქარი რა ფერია? – მე ჩანთაში მაქვს ყავისფერი, ლურჯი, მწვანე და ყვითელი ფანქრები. რა ფერი გინდა? – გმადლობთ. მე არ მინდა ეგ ფანქრები. მე მაქვს ეს ფერები.
– აქ მაგიდაზე არის ათი ვარდისფერი და ოთხი ყვითელი ვარდი. რა არის თეფშზე? – ეს კარგი დიდი წითელი ვაშლია.
– შენ არ გინდა ერთი ჭიქა ღვინო? – არა, გმადლობთ. მე არ მინდა ღვინო. – ქალს აქვს ლამაზი წითელი კაბა. არ მოგწონს ჩემი თეთრი დროშა? – დიახ, ძალიან მომწონს. თქვენი დროშა რა ფერია?`,
        eng: `– Hello! How are you? – Thank you, I'm very well. How are your parents? – They are well. Thank you very much.
– I have a very beautiful blue dress. Do you like the color blue? – No, I don't like that color, but your dress is very beautiful. – Do you want this red rose? – Thank you.
– I really like to travel by car. I have a red car, but I don't like this color. I want a white car.
What color is your car? – I don't have a car.
– There is a green tree on the street. What color is the sky? – The sky is light blue. – No, here the sky is dark blue. What color is the sun? – The sun is yellow. The ground is brown. – What color is the moon?
– He doesn't have a grey pencil. What color is your pencil? – In the bag I have brown, dark blue, green, and yellow pencils. What color do you want? – Thank you. I don't want these pencils. I have these colors.
– Here on the table are ten pink and four yellow roses. What is on the plate? – This is a big, red apple.
– Don't you want a glass of wine? – No thank you. I don't want wine. – The woman has a beautiful red dress. Don't you like my white flag? – Yes, I really like it. What color is your flag?`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) – რა ფერია შენი ფანქარი? – მე მაქვს ათი ფანქარი. მე მაქვს წითელი, ყვითელი, ლურჯი, მწვანე, ვარდისფერი და შავი ფანქრები. – ეს არ არის ათი, ეგ არის ექვსი. შენ ექვსი ფანქარი გაქვს. – დიახ, მე მაქვს ექვსი ფანქარი და ოთხი კალამი.
b) – რა ფერია თქვენი დროშა? – ქართული დროშა არის წითელი და თეთრი. – რა ფერია იმათი დროშა? რა ფერია კორეული დროშა?
c) – მე არ მაქვს წითელი კაბა. შენ გაქვს მწვანე კაბა? – არა, ეს ჩემი არ არის, ეს იმისი კაბაა.
d) – მოგწონს თვითმფრინავით მგზავრობა? – არა, მე მომწონს მატარებელი. – სად მიდის ეს მატარებელი? – ეს მიდის ლონდონში.
e) ზეცა ცისფერია და მზე ყვითელია. რა ფერია აქ მთვარე? რა ფერია თქვენი ვარდები? მოგწონს ვარდისფერი ვარდები?
f) ჭიქაში არის თეთრი ღვინო. მაგიდაზე არის ორი ჭიქა და სამი თეფში. თეფშზე არის წითელი ვაშლი.
g) მე მომწონს ქართული ღვინო. ის ძალიან კარგია. შენ არ მოგწონს?`,
        eng: `a) – What color is your pencil? – I have ten pencils. I have red, yellow, dark blue, green, pink and black pencils. – This isn't ten, that's six. You have six pencils. – Yes, I have six pencils and four pens.
b) – What color is your flag? –The Georgian flag is red and white. – What color is their flag? What color is the Korean flag?
c) – I don't have a red dress. Do you have a green dress? – No, this isn't mine, this is her dress.
d) – Do you like to travel by plane? – No, I like the train. – Where is this train going? – It's going to London.
e) The sky is light blue and the sun is yellow. What color is the moon here? What color are your roses? Do you like pink roses?
f) There is white wine in the glass. There are two glasses and three plates on the table. There is a red apple on the plate.
g) I like Georgian wine. It's very good. Don't you like it?`
      },
      {
        title: '2. Translate and answer in Georgian',
        isList: true,
        geo: `a) რა ფერია თქვენი მანქანა? ის შავია?
b) რა ფერია კორეული დროშა?
c) რა ფერია ამერიკული დროშა?
d) რა ფერია ქართული დროშა?
e) როგორა ხართ?
f) საიდანაა დედათქვენი?
g) რა ფერია მზე?
h) სად არის სეული?
i) მოგწონს ვარდისფერი ვარდები?
j) ეს ხეები მწვანე არის?
k) მოგწონს მგზავრობა მატარებლით?
l) გინდა მგზავრობა თვითმფრინავით?
m) გყავთ და?
n) გყავთ ძმა?
o) რამდენი და-ძმა გყავთ?`,
        eng: `a) What color is your car? Is it black?
b) What color is the Korean flag?
c) What color is the American flag? d) What color is the Georgian flag? e) How are you?
f) Where is your mother from? g) What color is the sun?
h) Where is Seoul?
i) Do you like pink roses?
j) Are these trees green?
k) Do you like traveling by train?
l) Do you want to travel by plane?
m) Do you have a sister?
n) Do you have a brother?
o) How many sisters and brothers do you have?`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) – მე მყავს დედა და მამა. მე მყავს და-ძმა. რამდენი ძმა გყავს? – ორი ძმა. – სად არიან ისინი? – ისინი აქ არიან თბილისში.
b) – თეფში არა გაქვს? – დიახ, მე მაქვს ერთი თეფში აქ მაგიდაზე.
c) – მას აქვს ნაცრისფერი და ლურჯი კაბები. შენ არა გაქვს? – მე მაქვს მწვანე და
წითელი კაბები.
d) – როგორ არის ბებიაშენი? – გმადლობთ, კარგად. ის მიდის სეულში
თვითმფრინავით. ჩვენი მშობლები აქ მოდიან მატარებლით.
e) – როგორა ხარ? – გმადლობთ, მე კარგად ვარ. მე არა ვარ ცუდად. პაპაჩემია
ცუდად.
f) – მას აქვს ყავისფერი ჩანთა და ჩანთაში აქვს ორი ფანქარი, სამი წიგნი და ერთი
კალამი. სად არის მისი ჩანთა? – აქ არის ოთახში მაგიდასთან.
g) – გინდა წითელი ვარდები? – არა, მე მომწონს თეთრი ვარდები. მას ყვითელი ვარდები აქვს.
h) – მე მყავს სამი მეგობარი. ერთი არის ქართველი და ორი კორეელი. შენ რამდენი მეგობარი გყავს? – მე მყავს ერთი ამერიკელი მეგობარი.
i) – კაცს აქვს წითელი ღვინო. ეს კორეული ღვინოა? – არა, ეს იტალიური ღვინოა, მას არა აქვს კორეული ღვინო. იტალიური ღვინო კარგია? – დიახ, ძალიან კარგია. მე მომწონს.
j) – მე მაქვს კარგი წიგნი. შენ არ მოგწონს ეს წიგნი? – ეს ძალიან კარგია.`,
        eng: `a) – I have a mother and father. I have a sister and brother. How many brothers do you have? – Two brothers. – Where are they? – They are here in Tbilisi.
b) – Don't you have a plate? – Yes, I have one plate here on the table.
c) – She has gray and dark blue dresses. Don't you have some? – I have green and red
dresses.
d) – How is your grandmother? – Thank you, she's well. She is going to Seoul by plane.
Our parents are coming here by train.
e) – How are you? – Thank you, I'm well. I'm not bad. My grandfather is ill.
f) – She has a brown bag and in the bag she has two pencils, three books and one pen.
Where is her bag? – It is here in the room at the table.
g) – Do you want some red roses? – No, I like white roses. She has yellow roses.
h) – I have three friends. One is Georgian and two are Koreans. How many friends do
you have? – She has one American friend.
i) – The man has red wine. Is this Korean wine? – No, this is Italian wine, he doesn't
have Korean wine. Is Italian wine good? – Yes, it's very good. I like it.
j) – I have a good book. Don't you like this book? – It's very good.`
      }
    ]
  },
  {
    title: 'Lesson 7',
    blocks: [
      {
        title: 'Text',
        geo: `– გამარჯობა! როგორ ბრძანდებით?
– გმადლობთ, კარგად. თქვენ როგორ გიკითხოთ?
– კარგად, უღრმესი მადლობა.
– დღეს რა დღეა, შაბათია?
– არა, შაბათი გუშინ იყო, დღეს კვირაა. ახლა შუადღეა.
– რა რიცხვია?
– თერთმეტი, გუშინ ათი იყო და დღეს თერთმეტია.
– ხვალ თორმეტია. თოთხმეტში მინდა სეულში წასვლა.
– სეული ლამაზი ქალაქია. მე ძალიან მომწონს ეს ქალაქი.
– დღეს კარგი ამინდია.
– დიახ, ძალიან სასიამოვნო დილაა.
– ნახვამდის.
– კარგად ბრძანდებოდეთ.`,
        eng: `– Hello! How are you?
– Thank you, I'm well. How are you?
– Well, thank you very much.
– What is today; is it Saturday?
– No, Saturday was yesterday; today is Sunday. It's afternoon now.
– What day (figure) is it?
– The eleventh, yesterday was the tenth and today is the eleventh.
– Tomorrow is the twelfth. On the fourteenth I want to go to Seoul.
– Seoul is a beautiful city. I really like this city.
– There is good weather today.
– Yes, this morning is very pleasant.
– Goodbye.
– Farewell.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) – მე ხვალ მინდა თბილისში წასვლა. შენ არ გინდა? – არა, ხვალ დედაჩემი
მოდის ლონდონიდან თვითმფრინავით.
b) – რა დღეა დღეს? – დღეს კვირაა და გვინდა სოფელში წასვლა.
c) – კლასში არის ოთხი გოგო და შვიდი ბიჭი. თამარ, დათვალე, რამდენია?
– შვიდი და ოთხი არის თერთმეტი.
d) რამდენი სტუდენტია შენს კლასში?
e) აქ არის სამი ძაღლი და ერთი კატა. კატას უნდა ჩიტი. ძაღლს არ უნდა კატა. ეს
კატა ვისია?
f) – როგორია თქვენი კატა? – ნაცრისფერია და ძალიან ლამაზი. – მე არ მომწონს
კატები. მე მომწონს დიდი ძაღლები.
g) – რომელია იმისი კატა? – ეს შავია. – ეს პატარა ყავისფერი ძაღლი ვისია?
h) ვის უნდა იქ წასვლა? ვის უნდა აქ მოსვლა? დათვალე, რამდენ სტუდენტს
უნდა აქ მოსვლა.
i) – როგორი ამინდია დღეს? – ძალიან სასიამოვნო და კარგი ამინდია. გუშინ
ცუდი ამინდი იყო.
j) ისინი გუშინ იყვნენ სოფელში და დღეს მათ არ უნდათ ჩვენთან წამოსვლა.
ისინი ხვალ ლონდონში მიდიან.`,
        eng: `a) – Tomorrow I want to go to Tbilisi. Don't you want (to go)? – No, tomorrow my mom
is coming from London by plane.
b) – What day is today? – Today is Sunday and we want to go to the village.
c) – There are four girls and seven boys in the classroom. Tamar, count, how many are
there? – Seven and four are eleven.
d) How many students are in your classroom?
e) Here there are three dogs and one cat. The cat wants a bird. The dog doesn't want the
cat. Whose cat is this?
f) – What kind of cat is yours? – It is grey and very beautiful. – I don't like cats. I like
big dogs.
g) – What kind of cat is his/her's? – It's black. – Whose is this small brown dog?
h) Who wants to go there? Who wants to come here? Count, how many students want
to come here.
i) – What kind of weather is there today? – (It's) very pleasant and good weather.
Yesterday there was bad weather.
j) Yesterday they were in the village and today they don't want to come with us.
Tomorrow they are going to London.`
      },
      {
        title: '2. Translate and answer the questions',
        isList: true,
        geo: `a) რა დროა ახლა?
b) ვისია ეს წიგნები? სად არიან?
c) რა ფერი მოგწონს – ყვითელი თუ ყავისფერი?
d) რა დღეა დღეს? რა დღე იყო გუშინ? რა დღეა ხვალ? კვირა არის ახლა?
e) სად მიდიან? სადაურები არიან შენი მშობლები? ისინი მოდიან თბილისში თუ
მათ უნდათ მგზავრობა სეულში?
f) შენს მეგობრებს მგზავრობა ავტობუსით უნდათ თუ თვითმფრნავით?
g) სად გინდა წასვლა – რომში თუ ლონდონში?
h) რომელია შენი ძაღლი?
i) როგორ მომწონს მგზავრობა?
j) კარგი ამინდია ახლა?`,
        eng: `a) What time is it now?
b) Whose are these books? Where are they?
c) What color do you like – yellow or brown?
d) What day is today? What day was yesterday? What day is tomorrow? Is it Sunday
now?
e) Where are they going? Where are you parents from? Are they coming to Tbilisi or
they want to travel to Seoul?
f) Do your friends want to travel by bus or by plane?
g) Where do you want to go – to Rome or to London?
h) Which is your dog?
i) How do you like traveling?
j) Is there good weather now?`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) – ნანა, რომელი საათია ახლა? – სამი საათია. დრო მიდის.
b) – გუშინ სად იყავი? – უნივერსიტეტში ვიყავი და თხუთმეტი სტუდენტი იყო
კლასში.
c) – რა ნომერია ეს მატარებელი? – ეს არის ნომერი ცხრამეტი. – სად მიდის ის?
– ეს მწვანე მატარებელი სეულიდან ჩონანში მიდის. – თქვენი მშობლები
მატარებლით მიდიან? – არა, მათ არ უნდათ მატარებლით მგზავრობა. ისინი
მიდიან ავტობუსით. – რომელი ავტობუსით მიდიან? – ყვითელი ავტობუსია,
ნომერი თორმეტი.
d) – გიორგი, ეს ორი კაცი ვინაა? – ისინი ჩემი მეგობრები არიან. – თამარ,
დათვალე, რამდენი სტუდენტია აქ!
e) – დავით, გინდა მანქანით წასვლა თბილისში? – ძალიან მინდა, უღრმესი
მადლობა. კარგად ბრძანდებოდეთ.
f) – სად იყვნენ ისინი გუშინ? – მე აქ ვიყავი და ის სტუდენტები სეულში არ
იყვნენ გუშინ.
g) – რომელი დრო მოგწონს: დილა, შუადღე თუ საღამო? – მე მომწონს ღამე,
ლურჯი ზეცა და ყვითელი მთვარე ცაზე.
h) – გუშინ რა რიცხვი იყო? – თვრამეტი იყო, დღეს ცხრამეტია და ხვალ – ოცი.
i) გუშინ კარგი ამინდი იყო. დღეს არ არის კარგი ამინდი.
j) გუშინ აქ არ ვიყავით და დღეს აქ ვართ სეულში. ხვალ ჩვენი ათი სტუდენტი
მატარებლით მიდის ტოკიოში.
k) – არ გინდათ ჩვენთან მოსვლა? – დიდი მადლობა. ძალიან გვინდა.
l) კაცს უნდა სტუდენტთან შეხვედრა. მას არ უნდა.
m)სასიამოვნოა თქვენთან შეხვედრა. ძალიან მინდა თქვენთან მოსვლა.
n) – როგორ გიკითხოთ? – გმადლობთ, უღრმესი მადლობა. ჩვენ კარგად ვართ და
თქვენ როგორ ბრძანდებით?
o) – მე არ მომწონს ცუდი ამინდები. – კარგია, დღეს კარგი ამინდია.`,
        eng: `a) – Nana, what time is it now? – It's three o'clock. Time flies (goes).
b) – Where were you yesterday? – I was at the university and fifteen students were in
the classroom.
c) – What number is this train? – This is number nineteen. – Where is it going? – This
green train goes from Seoul to Cheonan. – Are your parents going by train? – No, they
don't want to travel by train. They are going by bus. – Which kind of bus are they
going by? – It's a yellow bus, number twelve.
d) – Giorgi, who are these two men? – They are my friends. – Tamar, count, how many
students are here!
e) – Davit, do you want to go to Tbilisi by car? – I really want to, thank you very much.
Goodbye.
f) – Where were they yesterday? – I was here, and these students were not in Seoul
yesterday.
g) – Which time do you like: morning, afternoon, or evening? – I like night, the dark
blue sky, and the yellow moon in the sky.
h) – What date (figure) was (it) yesterday? – It was the eighteenth, today is the
nineteenth and tomorrow – the twentieth.
i) Yesterday there was good weather. Today the weather is not good.
j) Yesterday we were not here and today we are here in Seoul. Tomorrow our ten
students are going to Tokyo by train.
k) – Don’t’ you want to come with us? – Thank you very much. We really want (to).
l) The man wants to meet the students. He doesn't want to.
m)It's nice to meet you. I really want to come with you.
n) – How are you? – Thank you, thank you very much. We are well and how are you?
o) – I don't like bad weather(s). (That's) good, today there is good weather.`
      }
    ]
  },
  {
    title: 'Lesson 8',
    blocks: [
      {
        title: 'Text',
        geo: `– გამარჯობა! რა გქვია შენ?
– მე მქვია გიორგი და თქვენ რა გქვიათ?
– ჩემი სახელია დავითი.
– დავით, მე მომწონს ხორცი და ბოსტნეული. მომაწოდეთ, გეთაყვა, ცოტა პური.
– ინებეთ!
– მე ძალიან მიყვარს კარტოფილი. თქვენ არ გიყვართ?
– დიახ. მე მომწონს ბოსტნეული.
– თქვენ რას ისიამოვნებთ?
– გმადლობთ. მე ჩაი მინდა.
– შაქრით?
– დიახ, ჭიქაში ორი კოვზი შაქარი, გეთაყვა.
– აი, ინებეთ, გეთაყვა.
– დიდი მადლობა.
მაგიდაზეა დანები, ჩანგლები, თეფშები, კოვზები, ჭიქები და ხელსახოცები. აქ არის
ბოსტნეული, ხორცი, თევზი და პურის პატარა ნაჭრები. მარილი და შაქარი
მაგიდაზეა.
– ეს ჩაი ცივია. მე არ მინდა ცივი ჩაი. მე არ მიყვარს ასეთი ცივი.
– თქვენი ჩაი არც თუ ისე ცივია. ვის უყვარს და ვის მოსწონს თბილი ჩაი ან ყავა? მე
ცხელი ყავა მინდა. თქვენ ჩაი გინდათ თუ ყავა?
– მე ყავა არ მიყვარს. ჩაი მომაწოდეთ, თუ ძალიან არ შეწუხდებით, გეთაყვა.
– მიირთვით!
– მომაწოდეთ, გეთაყვა, ხორცის ეგ პატარა ნაჭერი.
– პურის ნაჭერი არ გინდათ? არა, მე არ მიყვარს პური.`,
        eng: `– Hello! What's your name?
– My name is Giorgi and what is your name?
– My name is Davit.
– Davit, I like meat and vegetables. Pass me, please, a little bread.
– Here you are!
– I really love potatoes. Don't you love it?
– Yes. I like vegetables.
– What will you have?
– Thank you. I want tea.
– With sugar?
– Yes, two spoons of sugar in a glass, please.
– Here, here you are, please.
– Thank you very much.
There are knives, forks, plates, spoons, glasses, and napkins on the table. Here are vegetables,
meat, fish and small slices of bread. Salt and sugar are on the table.
– This tea is cold. I don't want cold tea. I don't like (love) it that cold.
– Your tea isn't that cold. Who loves and who likes warm tea or coffee? I want hot coffee.
Do you want tea or coffee?
– I don't like (love) coffee. Pass me the tea if it's not too much trouble for you, please.
– Enjoy!
– Pass me, please, that small piece of meat.
– Don't you want a slice of bread? No, I don't like (love) bread.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) ზეგ ჩვენი მშობლები აქ იქნებიან. მაზეგ ბებიამისი მოდის ჩვენთან.
b) – როდის მიდიან ეს კორეელი სტუდენტები საქართველოში? – ისინი ზეგ
მიდიან თვითმფრინავით. – (მათ) მოსწონთ თვითმფრინავით მგზავრობა?
c) – როდის გინდა თბილისში წასვლა? – ხვალ ან მაზეგ. – რა მატარებელი მიდის
იქ?
d) – ინებეთ, გეთაყვა, ცხელი ყავა. ეს ძალიან კარგი მექსიკური ყავაა. მოგწონთ
მექსიკური ყავა? – არა, მე ბრაზილიური ყავა მიყვარს.
e) თუ ძალიან არ შეწუხდებით, მომაწოდეთ, გეთაყვა, ეგ თევზი. ბავშვებს არ
უყვართ თევზი. მათ მოსწონთ კარტოფილი.
f) ყავას ვინ ისიამოვნებს? თქვენ ხომ არ ინებებთ ცივ ყავას?
g) – რა არის მაგიდაზე? – დანა და ჩანგალი, კოზები და ჭიქები. – სად არის
ხელსახოცი? – ხელსახოცი აქ არის თეფშთან.
h) – მათ ბოსტნეული მოსწონთ თუ ხორცი? იმათ თევზი უყვართ თუ ხორცი?
– მას პური არ უყვარს. – უნდა მას პური?
i) – დალიე ეს ჩინური ჩაი და შეჭამე თევზი! არ გიყვარს თევზი? – არა,
გმადლობთ, არ მინდა.
j) – დალიე ქართული ღვინო. ეს ძალიან კარგი ღვინოა. თეთრი გინდა თუ შავი?
ქართველებს უყვართ შავი ღვინო? – მათ მოსწონთ ეს ღვინოები.`,
        eng: `a) The day after tomorrow our parents will be here. In two days her grandmother is
coming with us.
b) – When are these Korean students going to Georgia? – They are going the day after
tomorrow by plane. – Do they like to travel by plane?
c) – When do you want to leave for Tbilisi? – Tomorrow or in two days. – What train
goes there?
d) – Here you are, please, hot coffee. This is very good Mexican coffee. Do you like
Mexican coffee? – No, I love Brazilian coffee.
e) If it's not too much trouble, please pass me this fish. The children don't love fish.
They like potatoes.
f) Who enjoys coffee? Wouldn't you enjoy some cold coffee?
g) – What is on the table? – Knives and forks, spoons and glasses. – Where are the
napkins? – The napkins are here by the plate.
h) – Do they like vegetables or meat? Do they love fish or meat? – He(/she) doesn't like
bread. – Does (he/)she want bread?
i) – Drink this Chinese tea and eat the fish! Don't you like (love) fish? – No thank you, I
don't want it.
j) – Drink Georgian wine. This is very good wine. Do you want white or red? Do
Georgians love red wine? – They love these wines.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) – გეთაყვა, მომაწოდეთ მარილი. მე მომწონს ეს ხორცის ნაჭრები. გინდა პური?
– დიახ, გეთაყვა.
b) საქართველო ღვინის ქვეყანაა. მე მომწონს ქართული ღვინოები. მე ძალიან
მიყვარს თეთრი ღვინო.
c) ხორცი, ბოსტნეული და თევზი თეფშზეა. სად არის ჩემი ხელსახოცი?
d) გეთაყვა, მომაწოდეთ შაქარი. მე მინდა შაქრიანი ჩაი. მაგრამ ჩემი ჩაი არის
თბილი. ის არ არის ცივი ან ცხელი. არ მომწონს თბილი ჩაი. მე მიყვარს ცხელი
ჩაი.
e) შეჭამე ხორცი! დალიე ეს წყალი!
f) ხომ არ გესიამოვნებოდათ ხორცი? ხორცი მოგწონს თუ თევზი? ეს თევზი
ძალიან კარგია. ის კორეიდანაა. მე მომწონს კორეული თევზი.
g) – მიირთვით ბრაზილიური ყავა. გინდა შაქრით? – დიახ, გეთაყვა, ორი კოვზი
შაქარი.
h) – მათ უყართ მგზავრობა მანქანით? მათ როდის უნდათ მოსვლა აქ? – ზეგ.
i) – რა გქვიათ? – მე მქვია დავითი.
j) – ეს ჩაი არც ასე ცივია. კარგია. გინდათ შაქარი? – არა, გმადლობთ.
k) როდის მიდის შენი მეგობარი სეულში? მათ მგზავრობა თვითმფრინავით
მოსწონთ თუ მატარებელით?
l) – მე მინდა პური. მომაწოდეთ პურის ეგ პატარა ნაჭრები, გეთაყვა! – ინებეთ,
გეთაყვა.
m)თქვენ სეულში ცხოვრობთ თუ ლონდონში? მათ უყვართ ეს ქალაქი?
n) მადრიდი მოგწონს თუ ლონდონი? რომელი ქალაქი არის ეს?
o) – გინდათ კარტოფილი? – დიახ, გეთაყვა. მე მიყვარს ის.`,
        eng: `a) – Please, pass me the salt. I like these pieces of meat. Do you want some bread? – Yes,
please.
b) Georgia is a country of wine. I like Georgian wines. I love white wine very much.
c) There are meat, vegetables and some fish on this plate. Where is my napkin?
d) Please, pass me some sugar. I want tea with sugar. But my tea is warm. It is not cold
or hot, it’s warm. I don’t like warm tea. I love hot tea.
e) Eat the meat! Drink this water!
f) Wouldn’t you enjoy some meat? Do you like meat or fish? This fish is very good. It’s
from Korea. I like Korean fish.
g) – Enjoy the Brazilian coffee. Do you want it with sugar? – Yes, please two spoons of
sugar.
h) – Do they love traveling by car? When do they want to come here? – The day after
tomorrow.
i) – What is your name? – My name is David.
j) – This tea is not so cold. It’s Ok. Do you want some sugar? – No, thank you.
k) When do your friends go to Seoul? Do they like traveling by plane or by train?
l) – I want some bread. Pass me these small pieces of bread, please! – Here you are,
please.
m)Do you live in Seoul or in London? Do they love this city?
n) Do you like Madrid or London? Which city it this?
o) – Do you want some potatoes? – Yes, please. I love it.`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) რამდენი კოვზი შაქარი, ერთი თუ ორი? – ერთი. – აი, ინებეთ. – დიდი
მადლობა.
b) – რა გქვია შენ? რა გქვიათ თქვენ? – მე მქვია თამარი. ჩემი სახელია თამარი, და
თქვენ გქვიათ ნინო. თქვენი სახელია ნინო.
c) – რას ისიამოვნებთ? ჩაი თუ ყავა? – არა, გმადლობთ, არ გვინდა.
d) მომაწოდეთ, გეთაყვა, ეს კოვზი. მე მინდა ორი კოვზი შაქარი ჩაიში.
e) ეს არის ჩემი მეგობრის სახლი. ეს არის კაცის წიგნი. ეს არის ქალის ჩანთა.
f) – ვისია ეს რვეული? – ეს არის ჩემი მეგობრის რვეული. მომაწოდეთ, თუ
შეიძლება.
g) ინებეთ ეს დიდი ხორცის ნაჭერი, ეგ ძალიან პატარაა.`,
        eng: `a) – How many spoons of sugar, one or two? – One. – Here you are. – Thank you very
much.
b) – What is your name? What is your name? – My name is Tamar. My name is Tamar,
and your name is Nino. Your name is Nino.
c) – What would you enjoy? Tea or coffee? – No thank you, I don't want it.
d) Please pass me this spoon. I want two spoons of sugar in my tea.
e) This is my friend's house. This is a man's book. This is a woman's bag.
f) – Whose notebook is this? – This is my friend's notebook. Pass it to me, please.
g) Here is a big piece of meat; that is very small.`
      }
    ]
  },
  {
    title: 'Lesson 9',
    blocks: [
      {
        title: 'Text',
        geo: `– მოდით, დღეს ერთად ვისადილოთ. აქ მინდა სუფრის გაშლა. მაგიდაზე არის დანა-
ჩანგალი, კოვზები, თეფშები, ჭიქები და ხელსახოცები. თქვენ ხომ ისადილებთ
ჩვენთან ერთად? თქვენ რას ისიამოვნებთ, შემწვარი წიწილა გინდათ თუ მოხარშული
ხორცი? – გმადლობთ, მე უკვე გეახელით. მე მხოლოდ ბოსტნეულის სალათს
მივირთმევ. – ნაყინი ან ნამცხვარი არ გნებავთ? – დიახ, ცოტა მომაწოდეთ, თუ არ
შეწუხდებით.
– ახლა მე ვსადილობ. იმათ უკვე ისადილეს. თქვენ როდის ივახშმებთ? – საღამოს
ვივახშმებ. – ხილი მიირთვით. – გმადლობთ, უკვე გეახელით და ნუ შეწუხდებით.
– მე არ მიყვარს უშაქრო ყავა. ეს თევზი ძალიან მარილიანია. – არა, ეს არც თუ ისე
მარილიანია. ეს ნამცხვარი მეტისმეტად (ნამეტანი) შაქრიანია. – ხომ მოგწონთ ცხელი
ჩაი ნამცხვრით?
– აბა, ვინ ისადილებს ჩვენთან ერთად? ვის უნდა მოხარშული ქათამი და შემწვარი
კარტოფილი? – ჩვენ უკვე ვისადილეთ. უკვე გეახელით. ჩვენ მხოლოდ ყავა, ნაყინი
და ნამცხვარი გვინდა. – მეგობარო, მე შენ მომწონხარ.
– დედა, მე შენ ძალიან მიყვარხარ. რა გვაქვს დღეს საუზმედ? – შემწვარი კვერცხი და
ჩაი ნამცხვრით. – ძალიან კარგი და სადილად რა გვექნება? – მოხარშული თევზი,
შემწვარი წიწილა, შემწვარი კარტოფილი, ბოსტნეულის სალათი და პური. – ვახშმად
რა გვექნება? – კიტრის სალათი, ხილი, ჩაი და ნამცხვარი.
– თქვენ როგორ მოგწონთ ჩვენი ნამცხვარი? როგორია ჩვენი ნამცხვრის გემო?
გემრიელია თუ უგემური? – მე მიყვარს თქვენი ნამცხვრის გემო. ძალიან გემრიელია.
– ვინ არის აქ თამადა? ეს არის თქვენი სადღეგრძელო? – არა, ეს არის საქართველოს
და თბილისის სადღეგრძელო. – მშობლების სადღეგრძელო უკვე იყო? – დიახ. თქვენ
უკვე დალიეთ? – დიახ, უკვე მივირთვით. – ძალიან კარგი!`,
        eng: `– Let's have dinner together today. I want to set the table here. On the table are knives and
forks, spoons, plates, glasses and napkins. Won't you have dinner together with us? What
will you have, do you want roasted chicken or boiled meat? – Thank you, but I already had
some. I'll only have a vegetable salad. Wouldn't you like (want) ice cream or cake? – Yes,
pass me a little if it's not troubling.
– Now I'm having dinner. They already had dinner. When will you have supper? – I will
have supper in the evening. – Have some fruit. – Thank you, but I already had some and
don't worry (about it).
– I don't love coffee without sugar. This fish is very salty. – No, this is not too salty. This cake
is too sugary. – Don't you like hot tea with cake?
Well, who will be having dinner with us? Who wants a boiled hen and fried potatoes? – We
already had dinner. We already enjoyed it. We only want coffee, some ice cream and a cake.
– Friend, I like you.
– Mom, I really love you. What are we having for breakfast today? – A fried egg and tea with
cake. – Very good and what will we have for dinner? – Some boiled fish, a roasted chicken,
fried potatoes, some vegetable salad, and some bread. – What will we have for supper?
– Some cucumber salad, fruit, tea and a cake.
– How do you like our cake? How is the taste of our cake? Is it delicious or is it without any
taste? – I love the taste of your cake. It's very delicious.
– Who here is the toastmaster? Is this your toast? – No, this is a toast to Georgia and Tbilisi.
– Was there already a toast to parents? – Yes. Did you already drink? – Yes, we already
enjoyed it. – Very good!`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) რა გვაქვს სადილად? როდის ივახშმეთ? რა მიირთვით?
b) მე არ მიყვარს მხოლოდ ბოსტნეულის სალათი, მე მომწონს ქათმის სალათი. მე
არ მინდა კიტრი და პომიდორი საუზმედ.
c) – მე საუზმედ მინდა მხოლოდ ერთი პურის ნაჭერი ყველით და კარაქით.
ყველი მარილიანი მოგწონს თუ უმარილო? – ნაკლებ მარილიანი კარგია.
d) – რა გნებავთ სადილად? – ბოსტნეულის სალათი და შემწვარი თევზი და ერთი
ჭიქა შავი ღვინო.
e) – ჭამე ეს საჭმელი და დალიე რძე! – ეს გემო მე არ მომწონს.`,
        eng: `a) What are we having for dinner? When did you have supper? What did you enjoy?
b) I don't love only vegetable salad, I like hen salad. I don't want cucumbers and
tomatoes for breakfast.
c) – I want only one piece of bread with cheese and with butter for breakfast. Do you
like cheese with salt or without salt? – With less salt is good.
d) – What do you want for dinner? – Vegetable salad and fried fish and one glass of red
(black) wine.
e) – Eat this food and drink this milk! – I don't like this taste.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) ის გემრიელია? როგორ მოგწონს ეს წიწილა?
b) – შენ გინდა ვახშმობა ბოსტნეულის სალათით? – არა, მე მინდა ცოტა
ნამცხვარი და ჩაი ვახშმად.
c) მოდით ერთად ვისადილოთ ჩვენს სახლში. გვექნება შემწვარი ხორცი,
კარტოფილი, თევზი, ყველი და კიტრის და პომიდვრის სალათი.
d) – მე მიყვარს სალათი! – მიირთვით. – გმადლობთ. მომაწოდეთ, გეთაყვა,
მარილი (მომაწოდებთ, გეთაყვა, მარილს)? ის არ არის გემრიელი. ის
უმარილოა.
e) რა მათ ექნებათ ვახშმად? რა გვექნება სადილად? რა გქონდა სამხრად?
f) როგორ მოგწონს მისი გემო? ეს ნამცხვარი კარგია? შაქრიანია თუ უშაქრო?
g) მე მეყოლება თერთმეტი სტუდენტი ამ კლასში. მათ ექნებათ კლასი
(გაკვეთილი) აქ სეულში.
h) – აქ ისადილებ? – არა, მე ვისადილებ ჩემს სახლში.
i) ვის ექნება ვახშამი ანისთან ერთად?
j) რა გექნება საუზმედ ხვალ?
k) როგორ მოგწონს მოხარშული კვერცხვი? თევზი მოგწონს თუ ხორცი?
l) საქართველოს გაუმარჯოს! თბილისს გაუმარჯოს! ჩვენს მეგობრებს
გაუმარჯოს!
m)მე არ მინდა სუფრის გაშლა დღეს. მე არ მინდა ეს ქეიფი.
n) სად არის ხელსახოცები და ნაყინი?
o) რა სასმელი მოგწონთ? ღვინო თუ წყალი – რა გნებავთ?
p) მე შენ მიყვარხარ. მე შენ მომწონხარ.
q) ინებეთ, შემწვარი კარტოფილი ნაკლები მარილით (ნაკლებად მარილიანი).
მიირთვით, გეთაყვა.
r) ნუ შეწუხდებით. უკვე ვივახშმე. გმადლობთ.
s) – მე მხოლოდ მინდა (ერთი) ჭიქა ცხელი შავი ჩაი. – აი, ინებეთ. – უღრმესი
მადლობა.
t) მე არ მინდა ეს თევზი ლიმნით.`,
        eng: `a) Is it delicious? How do you like this chicken?
b) – Would you like to have some vegetable salad for supper? – No, I want some cake
and tea for supper.
c) Let’s have dinner together at our house. We’ll have roasted meat, potato, some fish,
cheese, salad of cucumber and tomato.
d) – I love salad! – Please enjoy it. – Thank you. Would you please pass me the salt? It’s
not delicious. It’s without salt.
e) What will they have for supper? What will we have for dinner? What did you have
for lunch?
f) How do you like its taste? Is this cake good? Is it with sugar or without sugar?
g) I’ll have eleven students in this class. They will have the class here in Seoul.
h) – Will you have your dinner here? – No, I’ll have my dinner at my house.
i) Who will have supper together with Ann?
j) What will you have for your breakfast tomorrow?
k) How do you like boiled eggs? Do you like fish or meat?
l) Cheers to Georgia! Cheers to Tbilisi! Cheers to our friends!
m)I don’t want to make a table today. I don’t want this party.
n) Where are the napkins and ice cream?
o) What drinks do you like? Wine or water – which do you want?
p) I love you. I like you.
q) Here you are some fried potatoes with less salt. Please enjoy it.
r) Don’t worry. I’ve already had my supper. Thank you.
s) – I just want a cup of black hot tea. – Here, please here you are. – Thank you very
much.
t) I don’t like this fish with lemon.`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) გაუმარჯოს ჩვენს მეგობრებს! გაუმარჯოს ჩვენს მშობლებს! გაუმარჯოს ჩვენს
შვილებს!
b) გაუმარჯოს თბილისს! გაუმარჯოს სეულს! გაუმარჯოს საქართველოს!
გაუმარჯოს კორეას!
c) – რა გვაქვს სასმელი? – თეთრი ღვინო. – მე შენ ძალიან მიყვარხარ, ჩემო
მეგობარო! შენ გაგიმარჯოს! კარგად იყავი!
d) მე მიყვარს ჩემი თბილისი! მოდით, თბილისს გაუმარჯოს! ეს არის თბილისის
სადღეგრძელო.
e) დალიეთ ჩვენი ლამაზი მეგობრების სადღეგრძელო, გეთაყვა.
f) თქვენ გნებავთ ეს მოხარშული ქათამი და თეთრი ღვინო? მოდით, ერთად
ვისადილოთ.
g) პური კარაქით და ყველით, უმარილო სალათი და ნამცხვარი გვექნება დღეს
ვახშმად.
h) – მე არ ვივახშმებ. მე არ მიყვარს ასეთი ვახშამი. – რა არ მოგწონს? – მე არ
მიყვარს უმარილო სალათი. ეს ძალიან უგემურია.
i) – თქვენ ხომ ივახშმებთ აქ ჩვენთან ერთად? – დიდი მადლობა, მაგრამ ნუ
შეწუხდებით. არ გვინდა, უკვე გეახელით.
j) – ხომ მოგწონთ ეს შემწვარი წიწილა? – ძალიან კარგია. მე არ მიყვარს ნამეტანი
მარილიანი საჭმელი. ეს ნაკლებ მარილიანია და კარგია.
k) საქართველოში ქეიფი მოსწონთ და სუფრის გაშლა. მინდა თბილისში წასვლა.
l) მე მეყოლება ერთი ძმა და ათი მეგობარი.
m)აბა, ხომ გვაქვს სადილად ქათამი და ვახშმად მოხარშული კვერცხები და
ბოსტნეული?
n) დალიე და ჭამე! ისადილე!
o) ნაკლებად მომწონხარ დღეს.`,
        eng: `a) A toast to our friends! A toast to our parents! A toast to our children!
b) A toast to Tbilisi! A toast to Seoul! A toast to Georgia! A toast to Korea!
c) – What drinks do we have? – White wine. – I love you very much, my friend! A toast
to you! Be well!
d) I love my Tbilisi! Let's toast to Tbilisi! This is toast to Tbilisi.
e) Let's drink to a toast of our beautiful friends please.
f) Do you want this boiled hen and white wine? Let's have dinner together.
g) Today we will have for supper bread with butter and with cheese, a salad without
salt, and cake.
h) – I will not have supper. I don't like (such) supper. – What don't you like? – I don't
like (love) salad without salt. This is very tasteless.
i) – Won't you have supper here together with us? – Thank you very much, but don't
worry. We don't want it, we have already enjoyed it.
j) – Don't you like this fried chicken? – It's very good. I don't like (love) overly salty
food. This is less salty and is good.
k) They like parties in Georgia and to set the table. I want to go to Tbilisi.
l) I will have one brother and ten friends.
m)Well, why don't we have hen for dinner and boiled eggs and vegetables for supper?
n) Drink and eat! Have lunch!
o) I like you less today.`
      }
    ]
  },
  {
    title: 'Lesson 10',
    blocks: [
      {
        title: 'Text',
        geo: `დღეს ჩემი პატარა ბავშვები მიდიან ზოოპარკში. ზოოპარკში მრავალი ცხოველი და
ფრინველია. ზოოპარკის გალიებში არიან საშიში გარეული ცხოველები, მაგრამ იქ
ადამიანები უსაფრთხოდ არიან. მოდით, წავიდეთ დღეს საღამოს და ვნახოთ
გარეული ცხოველები და ფრინველები.
– საქართველოს ტყეებში არის დათვი? – დიახ, საქართველოს ბუნებაში მრავალი
გარეული ცხოველია. – საშიშია ტყეში წასვლა? – მთის ტყეებში საშიშია. მოდით აქ,
თბილისის ზოოპარკში ვნახოთ ეს ცხოველები და ფრინველები.
– რომელი ცხოველები და ფრინველებია ბერლინის ზოოპარკში? – ეს ძალიან დიდი
და ლამაზი ზოოპარკია. აქ არის ვეფხვი, ლომი, დათვი, აფთარი, ლეოპარდი, ავაზა,
მგელი, მელია, სპილო, ბეჰემოტი, ზებრა, ირემი, შველის ნუკრი, ჟირაფი, კენგურუ,
მაიმუნი, ნიანგი, გველი, ბაყაყი, ზვიგენი, ვეშაპი, დელფინი, პინგვინი. – რა
ფრინველებია ზოოპარკში? – ზოოპარკის გალებში ბევრი ფრინველია: სირაქლემა,
არწივი, ფარშევანგი, თუთიყუში, წერო, თოლია, ჩხიკვი, შაშვი, მერცხალი,
ბულბული, მტრედი, ყვავი. – ბეღურა არ არის გალიაში? – არ ვარ დარწმუნებული,
რომ ბეღურები ჰყავთ ზოოპარკის გალიაში. ბეღურები ხომ ქალაქში დაფრინავენ.
– ცხოველებს მოსწონთ ზოოპარკი? – ძალიან საეჭვოა. ვის უნდა გალიაში ყოფნა?
– თუ შეგიძლია, დახატე ეს ლომი. ძალიან ლამაზია. არ შემიძლია, მეშინია. – ნუ
გეშინია! ის გალიაშია. მოდი, ვნახოთ. – ლომები ხომ საშიშია ადამიანისათვის? – ნუ
გეშინია, აქ უსაფრთხოდ ვართ. – ძალიან კარგი, არ მეშინია. – შენ ხომ არ გეშინია?
– არა. ახლა დავხატავ ლომს და ვეფხვს.
წყალი არ გინდათ? აქ კარგი ცივი წყაროა. – მომაწოდეთ, გეთაყვა ეგ ჭიქა, თუ არ
შეწუხდებით. – უღრმესი მადლობა. ძალიან გემრიელი წყალია.
– შეიძლება წასვლა სახლში? – დიახ, უკვე დროა. მოდით, ახლა სახლში წავიდეთ.
– ხვალ და ზეგ ხომ შეგვეძლება აქ მოსვლა? – დიახ. გუშინაც შეგვეძლო ზოოპარკში
წასვლა.`,
        eng: `Today my small children are going to the zoo. At the zoo there are many animals and birds.
There are dangerous, wild animals in the cages of the zoo but people are safe there. Let's go
in the evening and see the wild animals and the birds.
– Are there bears in the forests of Georgia? – Yes, there are many wild animals in the nature
of Georgia. – Is it dangerous to go to the forest? – The forests of the mountains are dangerous.
Let's see these animals and birds in Tbilisi's zoo.
– Which animals and birds are in the Berlin Zoo? – This is a very big and beautiful zoo. Here
there is: a tiger, a lion, a bear, a hyena, a leopard, a cheetah, a wolf, a fox, an elephant, a
hippopotamus, a zebra, a deer, a fawn, a giraffe, a kangaroo, a monkey, a crocodile, a snake,
a frog, a shark, a whale, a dolphin, penguin. – What birds are in the zoo? – In the zoo cages
there are many birds: an ostrich, an eagle, a peacock, a parrot, a crane, a seagull, a jay, a
blackbird, a swallow, a nightingale, a dove, a crow. – Are there sparrows in the cages? – I'm
not sure that they have the sparrows in the zoo's cages. Sparrows fly all around the city. – Do
they, the animals, like the zoo? – It's very doubtful. Who wants to be in a cage?
– If you can, paint this lion. It's very beautiful. – I can't, I'm afraid. – Don't be afraid! It's in a
cage. Let's see (it). – Aren't lions dangerous for humans? – Don't be afraid, we are safe here.
– Very good, I'm not afraid. – You're not afraid? – No. Now I will paint a lion and a tiger.
– Do you want some water? Here there is a good, cold (water) source. – Pass me, please, that
glass, if you don't mind. – Thank you very much. This is very delicious water.
– May I go home? – Yes, it's already time. Let's go home now. – Can we come here tomorrow
and the day after tomorrow? – Yes. Yesterday we also could have gone to the zoo.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) მომაწოდეთ, გეთაყვა ეგ ჭიქა, თუ არ შეწუხდებით. უღრმესი მადლობა. ძალიან
გემრიელი წყალია.
b) ხვალ და ზეგ ხომ შეგვეძლება აქ მოსვლა?
c) ზოოპარკის გალიებში არიან საშიში გარეული ცხოველები, მაგრამ იქ
ადამიანები უსაფრთხოდ არიან. მოდით, წავიდეთ და ვნახოთ ისინი.
d) გარეული ცხოველებია: ვეფხვი, ლომი, დათვი, აფთარი, ლეოპარდი, ავაზა,
მგელი, მელია, სპილო, ბეჰემოტი, ზებრა, ირემი, შველის ნუკრი, ჟირაფი,
კენგურუ, მაიმუნი, ნიანგი, გველი, ბაყაყი, ზვიგენი, ვეშაპი, დელფინი.
e) გარეული ფრინველებია: სირაქლემა, არწივი, ფარშევანგი, თუთიყუში, წერო,
თოლია, ჩხიკვი, შაშვი, მერცხალი, ბულბული, მტრედი, ყვავი, ბეღურა,
პინგვინი.
f) – შენ ხომ არ გეშინია? ნუ გეშინია, აქ უსაფრთხოდ ვართ. – ძალიან კარგი, არ
მეშინია.
g) – მოსწონთ ცხოველებს გალიაში? – ძალიან მეეჭვება.
h) გუშინ შეგვეძლო წასვლა თბილისში. დღეს შეგვიძლია წასვლა სეულში. ხვალ
შეგვეძლება წასვლა ტყეში.
i) – რა ფრინველებია ზოოპარკში? – ზოოპარკის გალებში ბევრი ფრინველია:
სირაქლემა, არწივი, ფარშევანგი, თუთიყუში, წერო, თოლია, ჩხიკვი და შაშვი.
j) – სად ვისადილებთ ხვალ და რა გვექნება სადილად? – ხვალ აქ ვისაუზმებთ და
უეჭველად თქვენთან ერთად ვისადილებთ. და სადილად გვექნება სალათი,
ქათამი და თევზი. – ძალიან კარგი!`,
        eng: `a) Please pass this glass, if you don't mind. Thank you very much. (This) water has a
very good taste.
b) Tomorrow and the day after tomorrow can we come here?
c) Dangerous wild animals are in the cages of the zoo, but the people are safe there. Let's
go and see them.
d) Wild animals are: tigers, lions, bears, hyenas, leopards, cheetahs, wolves, foxes,
elephants, hippos, zebras, dears, fawns, giraffes, kangaroos, monkeys, crocodiles,
snakes, frogs, sharks, whales, dolphins.
e) Wild birds are: ostriches, eagles, peacocks, parrots, cranes, seagulls, jays, blackbirds,
swallows, nightingales, doves, crows, sparrows, penguins.
f) – Aren't you afraid? Don't be afraid, we are safe here. – Very good, I'm not afraid.
g) – Do animals like to be in a cage? – I really doubt it.
h) Yesterday we could go to Tbilisi. Today we can go to Seoul. Tomorrow we can go to
the forest.
i) – What birds are in the zoo? – In the zoo's cages there are many birds: ostriches,
eagles, peacocks, parrots, cranes, seagulls, jays and blackbirds.
j) – Where are we having dinner tomorrow and what will we have for dinner?
– Tomorrow we will have breakfast here and we will have dinner together
undoubtedly. And for dinner we will have salad, hen, and fish. – Very good!`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) ეს არის კუ. ნუ გეშინია!
b) გეშინია მგლის? უსაფრხოდ ხარ. ეს მგელი გალიაშია.
c) – რა გეშინია? – მე მეშინია.
d) ბევრი ცხოველია ამ ზოოპარკში. აქ არიან: მგელები, მელიები, სპილოები,
ზებრები, ბეჰემოტები, ირმები, შვლის ნუკრი, სასიამოვნო ჟირაფი, კენგურუ
და ოთხი მაიმუნი.
e) საშიში ცხოველებია აფთარები, მგლები, ლეოპარდები, ავაზა, ვეფხვები,
ლომები, დათვები, გველი, ნაინგი და ზვიგენი.
f) შენ მოგწონს ბაყაყი? შენ მოგწონს ვეშაპი?
g) რომელი მოგწონს – დელფინი თუ პინგვინი?
h) გარეული ფრინველებია: არწივი, სირაქლემა, ფარშევანგი, წერო, თოლია,
ყვავი, ჩხიკვი, შაშვი, ბულბული და მერცხალი.
i) – ჩემს მეგობარს ჰყავს ოთხი თუთიყუში და ორი მტრედი. გყავს ჩიტები? – არა,
მე არ მყავს ისინი ახლა, მაგრამ მეყოლება ისინი ხვალ. მე მეყოლება
სასიამოვნო თუთიყუში.
j) ხეზე ცოტა ბეღურებია. რამდენი ბეღურა არის მაგ ხეზე? დავით, გეთაყვა,
დათვალე!`,
        eng: `a) This is a turtle. Don’t be afraid!
b) Are you afraid of wolf? You’re safe. This wolf is in the cage.
c) – What are you afraid of? – I’m afraid.
d) There are many wild animals in this zoo. Here are wolves, foxes, elephants, zebras,
hippopotamuses, deers, fawns, a nice giraffe, kangaroos and four monkeys.
e) The dangerous animals are hyenas, wolves, leopards, cheetahs, tigers, lions, bears,
snakes, crocodiles and sharks.
f) Do you like frogs? Do you like whales?
g) Which do you like a dolphin or a penguin?
h) Wild birds are eagles, ostriches, peacocks, cranes, seagulls, crows, jays, blackbirds,
nightingales and swallows.
i) – My friend has four parrots and two doves. Do you have birds? – No, I don’t have
them now, but I’ll have them tomorrow. I will have a nice parrot.
j) There are a few sparrows on the tree. How many sparrows are on that tree? David,
please count them!`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) დახატე მგელი და ზებრა. მე დავხატავ ვეფხვს. ის დახატავს ჩიტს.
b) მე დღეს არ შემიძლია მაიმუნის დახატვა. გუშინ უკვე დავხატე ერთი სპილო.
ხვალ დავხატავ გარეულ ცხოველებს.
c) გარეული ფრინველები მათ უკვე დახატეს. ისინი არ დახატავენ ჩიტებს ახლა.
d) მე შემიძლია მოსვლა. კაცს შეუძლია მოსვლა. ქალს არ შეუძლია ხატვა.
e) კაცი მგელს ხატავს დღეს. კაცმა მგელი დახატა გუშინ. კაცი მგელს დახატავს
ხვალ. ქალი არ ხატავს კატას.
f) ქალმა ნახა ზოოპარკი. ბავშვი მიდის ზოოპარკში ხვალ. კაცი ხატავს წყაროს
ახლა.
g) – როდის დახატავ ლამაზ სურათს? – ახლა ვხატავ ლამაზ სურათს. გუშინ
დავხატე ყვითელი მზე და მწვანე ნიანგი მდინარეში.
h) – რას ხატავ? – მე ვხატავ ტყეს და მთას. ჩვენ ძალიან მოგვწონს ლამაზი
ბუნების ხატვა.
i) კაცმა ყვავი დახატა. ეს ბავშვი ბულბულს ხატავს ახლა და მტრედს დახატავს
ხვალ.
j) – შეიძლება თქვენი დახატვა. რა ლამაზი ხართ! ძალიან მომწონხართ. – მოდით,
დახატეთ ჩემი სურათი თუ მოგწონთ და თუ გინდათ.`,
        eng: `a) Paint a wolf and zebra. I will paint a tiger. She will paint a bird.
b) Today I can't paint a monkey. Yesterday I already painted one elephant. Tomorrow I
will paint the wild birds.
c) They already painted the wild birds. They will not paint birds now.
d) I can come. The man can come. The woman can't paint.
e) The man is painting the wolf today. The man painted the wolf yesterday. The man
will paint the wolf tomorrow. The woman isn't painting the cat.
f) The woman saw the zoo. The children are going to the zoo tomorrow. The man is
painting the (water) source now.
g) – When will you paint a beautiful picture? – Now I am painting a beautiful picture.
Yesterday I painted the yellow sun and a green crocodile in the river.
h) – What are you painting? – I am painting a lake and a mountain. We really like to
paint beautiful nature.
i) The man painted the crow. This child is painting a nightingale now and will paint a
dove tomorrow.
j) – May I please paint you? How beautiful you are! I really like you. – Come and paint
my picture if you like and it you want.`
      }
    ]
  },
  {
    title: 'Lesson 11',
    blocks: [
      {
        title: 'Text',
        geo: `ჩვენ გვაქვს დიდი ეზო და ლამაზი ბაღი სოფელში. იქ ცხოვრობენ ბებიაჩემი და
პაპაჩემი. მათ ჰყავთ შინაური ცხოველები: ძროხა, ხბო, ღორი, ცხენი, ცხვარი, ვირი,
ორი დიდი ძაღლი და ერთი ნაცრისფერი კატა. მათ ჰყავთ შინაური ფრინველები:
ინდაური, მამალი, ბატი, ქათამი და იხვი. პაპაჩემს ჰყავს ფუტკარი.
აქ კარგი ჰაერია და ბევრი ყვავილებია. ეს არის ყაყაჩოების მინდორი, წითელი და
მწვანე ფერებით. მოდი, ვნახოთ ეს ყვავილები.
ჩვენს ეზოში ბევრი მცენარეა. იქ არის ლამაზი ყვავილები: იასამანი, ვარდი, ია, ტიტა,
ენძელა, შროშანი, ყაყაჩო და ბევრი ყვითელი მზესუმზირის ყვავილი. ჩვენს სოფელში
დიდი ხეებია: მუხა, ჭადარი, ტირიფი, ნაძვი, ფიჭვი და ვაზი. პაპაჩემს ძალიან მოსწონს
და უყვარს ქართული ღვინო. ის ძალიან კარგად უვლის ვაზს. ეს ღვინო ყურძნისგანაა.
– მე არ მენდომება ხვალ თქვენთან ამოსვლა. აქ ვიქნები პაპაჩემთან სოფელში. აქ
ყოფნა მიყვარს და მომწონს. ბებიაჩემს მოსწონს ყვავილების და ფრინველების მოვლა.
პაპაჩემს უყვარს ღვინის მოვლა, შინაური ცხოველებისა და ხეების მოვლა. პაპაშენს,
ალბათ, მოსწონს მცენარეების დარგვა და ყვავილების დათესვა. მამაშენს უყვარს
სოფელში ბაღში მუშაობა? – არა მგონია. მე მგონი, მას უნივერსიტეტში მუშაობა
მოსწონს.
– სადილი გენდომებათ, მიირთმევთ სოფლის ქათამს? – არავითარ შემთხვევაში.
– როგორ? თქვენ ხომ გიყვართ სოფლის ქათამი და სოფლის ქათმის კვერცხი? – დიახ,
მაგრამ ახლა დრო არა გვაქვს. – კარგად ბრძანდებოდეთ. – ნახვამდის.
– ვინ არიან თქვენები? – დედაჩემი ექიმია, მამაჩემი მასწავლებელია. ბებიაჩემი
მსახიობი იყო, პაპაჩემი იყო სპორტსმენი. ჩემი ძმა მწერალია. მე, ალბათ,
ჟურნალისტი ვიქნები.`,
        eng: `We have a big yard and a beautiful garden in the village. My grandmother and my
grandfather live there. They have the domestic animals: a cow, a calf, a pig, a horse a sheep, a
donkey, two big dogs and one gray cat. They have the domestic birds: a turkey, a rooster, a
goose, a hen and a duck. My grandfather has bees.
There is good air and many flowers here. This is a poppy field with red and green colors.
Let's look at these flowers.
There are many plants in our yard. There are beautiful flowers: a lilac, a rose, a violet, a tulip,
a snowdrop, a starling, a poppy and many yellow sunflowers. There are big trees in our
village: an oak, a plane tree, a willow, a spruce, a pine tree and a vine tree. My grandfather
really likes and takes care of Georgian wine. He takes care of the vine trees very well. This
wine is made from grapes.
– I won't like to go with you tomorrow. I will be here with my grandfather in the village. I
love and like to be here. My grandmother likes to take care of the flowers and the birds. My
grandfather loves to take care of the wine, the domestic animals and the trees. Your
grandfather probably likes to plant plants and to sow flowers. Does your dad like to work in
the garden in the village? – I don't think so. I think he likes to work at the university.
– Will you have dinner, would you like some village hen? – No way. – Why? Don't you love
the village hen and a village hen’s egg? – Yes, but now we don't have time. – Farewell.
– Goodbye.
Who are in your family? My mom is a doctor; my dad is a teacher. My grandma was an
actress; my grandpa was a sportsmen. My brother is a writer. I will probably be a journalist.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) – რომელი საათია ახლა? – სამი საათია.
b) ჩემი ერთი მეგობარი ცხოვრობს სოფელში. მას ჰყავს შინაური ცხოველები:
ძროხა, ხბო, ღორი, ცხენი, ცხვარი, ერთი ძაღლი, ვირი და კატა.
c) ჩემს მეგობარს ჰყავს შინაური ფრინველები: ქათამი და ინდაური, მაგრამ არა
ჰყავს ბატი და იხვი.
d) – ვისია ეს მამალი? ვის უნდა იგი? – ეს პაპაჩემის მამალია. შენ რა გინდა?
e) – ალბათ, მოგწონს მცენარეების დარგვა, ყვავილების დათესვა და მორწყვა.
– ყოველ შემთხვევაში, აქ კარგი ჰაერია.
f) – საუზმე გენდომება. რა გვექნება დღეს დილით საუზმედ? – კვერცხი და
სალათი. – ძალიან კარგი!
g) – ვინ უვლის ყვავილებს თქვენთან? – დედაჩემი. მას ძალიან მოსწონს
ყვავილების მოვლა. – ჩვენს სახლში ჩემი და უვლის მცენარეებს.
h) მოდი, ვნახოთ ეს მცენარეები. რა ლამაზი ტოტები აქვს ტირიფის ხეს. მე
მომწონს მუხის ფოთოლი.
i) – როგორი მწვანე მინდორია და კარგი ჰაერია აქ! მე მომწონს ეს სოფელი.
როდის მოდის ეს ბავშვი აქ? – ხვალ მოდის.
j) – სადილი, ალბათ, არ მენდომება. – როგორ არ გენდომება? – ყოველ
შემთხვევაში, ბევრი ხორცი არ მინდა.
k) მათ არ ენდომებათ აქ მუშაობა.
l) – ნაძვი მოგწონს თუ ფიჭვი? – მე მუხის ხე მიყვარს.
m)დედაჩემი მასწავლებელია. ის ქალი, ალბათ, მსახიობი იქნება.
n) – ვინ არის ექიმი? სად არის ექიმი? – აქ არის! მამაჩემი ექიმია.
o) ჩემი და, ალბათ, ჟურნალისტი იქნება. მე სპორტსმენი ვიქნები.`,
        eng: `a) – What time is it now? – It's three o'clock.
b) One of my friends lives in the village. She has the domestic animals: a cow, a calf, a
pig, a horse, a sheep, a dog, a donkey and a cat.
c) My friend has the domestic birds: a hen and a turkey, but she doesn't have geese or
ducks.
d) – Whose rooster is this? Who wants it? – This is my grandpa's rooster. What do you
want?
e) – Probably, you like to plant plants, to sow and water plants. – In any case, there is
good air here.
f) – Would you like to have breakfast? What will we have for breakfast today morning?
– Eggs and salad. – Very good!
g) – Who takes care of the flowers with you? – My mom does. She really likes to take
care of flowers. – In our home my sister cares for the plants.
h) Let's see these plants. What beautiful branches this willow tree has. I like oak leaves.
i) – How green the field is and what good air is here! I like the village. When is this
child coming here? – He/she's coming tomorrow.
j) – I will probably not want any dinner. – How will you not want it? – In any case, I
don't want (to have) much meat.
k) They will not want to work here.
l) – Do you like spruce (trees) or pine (trees)? – I love oak trees.
m)My mom is a teacher. This woman will probably be an actor.
n) – Who is a doctor? Where is the doctor? – Here he is! My dad is a doctor.
o) My sister, probably, will be a journalist. I will be a sportsman.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) ვინ არის შენი ძმა? ის არის – მწერალი თუ მასწავლებელი? შენ ვინ იქნები?
b) შენ გენდომება ამ ყვავლების დახატვა ხვალ საღამოს?
c) კარგი ჰაერია! რა სასიამოვნო ყვავილების მინდორია!
d) მე მიყვარს ეს ხეები. აქ არის ჭადრის ხეები და ტირიფები, მაგრამ არ არის
ფიჭვი ან ნაძვი.
e) რა ყვავილები მოგწონს? იცი ეს ყვავილები?
f) სად არის ჩემი ყვავლები? გუშინ დავხატე ვარდები, იასამანი, ყაყაჩოები და
ტიტები.
g) დღეს ის ხატავს იებს და ენძლებს. ხვალ ისინი დახატვენ შრორშანს და
მზესუმზირებს.
h) რა ფერია ჩემი ყვავლები? რა ფერია ია და იასამანი?
i) პაპაჩემი უვლის ვაზს. მას უყვარს ყურძენები.
j) – თქვენ ხართ ექიმი? მე მენდომება ექიმის ნახვა. მე ცუდად ვარ. – ნუ გეშინია.
ექიმი არის აქ.
k) – მომაწოდეთ, გეთაყვა, ეს ხის ტოტი. – გეთაყვა, ინებეთ. – რა ლამაზი
ფოთლები არის ტოტზე! ის არის მუხა?
l) – გენდომებათ ამ მინდვრის გათხრა ხვალ? – არავითარ შემთხვევაში!
m)ბოლოსდაბოლოს მე დავხატავ ამ ფუტკარს. ის ლამაზი მწერია.
n) – გენდომებათ სადილი? გექნებათ სადილად? – დიახ, გეთაყვა. უღრმესი
მადლობა.
o) – ისინი მატრებლით მიდიან სეულში მატრებლით ხვალ? – როგორც ჩანს,
მიდიან. – არა, მე მეეჭვება.
p) მე არ ვფიქრობ, რომ შენ გენდომება ის.
q) მე მეეჭვება, რომ მათ ენდომებათ ამ ხეების დახატვა.
r) სად არის ჩემი კატა? ის არის ხეზე? ხის უკან? სახლის მარცხნივ? სახლის
მარჯვნივ? მაგიდის ქვეშ? შენს ჩანთაში? ამ მუხის წინ? ამ ხის უკან?
s) – ამის მეუხედავად, მე ძალიან მიყვარხარ შენ. ამის მაგივრად შეგიძლია ხატვა.
– შემიძლია?
t) – არ ვარ დარწმუნებული, რომ შენი ძაღლი არის მაგიდის ქვეშ. – მოდი
ვნახოთ!`,
        eng: `a) Who is your brother? Is he a writer or a teacher? What (who) will you be?
b) Will you want to paint these flowers tomorrow evening?
c) What good air! What a nice field of flowers.
d) I love these trees. Here there are plane trees and willows, but no pines or spruces.
e) What kind of flowers do you like? Do you know these flowers?
f) Where are my flowers? Yesterday I painted roses, lilacs, poppies and tulips.
g) Today he is painting violets and snowdrops. Tomorrow they will paint starlings and
sunflowers.
h) What colors do these flowers have? What color is violet and lilac?
i) My grandfather takes care of the grapevine tree. He loves grapes.
j) – Are you a doctor? I’ll want to see a doctor. I'm ill. – Don’t be afraid. The doctor is
here.
k) – Would you please pass me this tree branch? – Please, here you are. – What beautiful
leaves are on this branch! Is it oak?
l) – You will want to dig this field tomorrow? – No way!
m)At least I’ll paint this bee. It’s a pretty insect.
n) – Will you want dinner? Will you have dinner? – Yes, please. Thank you very much.
o) – Are they going to Seoul tomorrow by train? – It seems they will. – No, I doubt it.
p) I don’t think that you’ll want it.
q) I doubt that they will want to paint these trees.
r) Where is my cat? Is it on the tree? Behind the tree? Left to the house? Right of the
house? Under the table? In your bag? In front of this oak? Behind this tree?
s) – In spite of it, I like you very much. Instead you can paint. – May I?
t) – I am not sure, that your dog is under the table. – Let’s see!`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) – მინდოდა მოსვლა, მაგრამ მამაჩემი ცუდად იყო. – როგორ არის ახლა?
– გმადლობთ ახლა უკვე კარგადაა. ჩვენთან ექიმი იყო.
b) – მაგიდის ირგვლივ რა არის? – ყვავილებია. – რა ყვავილებია? – ია, ვარდი და
ენძელებია.
c) მე არ მიყვარს ოთახის ყვავილები და არა მაქვს ისინი. დედაჩემს უყვარს და
აქვს ძალიან ლამაზი ოთახის იები და კარგად უვლის.
d) მაგიდიდან მარჯვნივ არის შენი მეგობრის სურათი, მარცხნივ ხარ შენ.
e) ეს მაგიდა არის ხისგან. ეს ღვინო არის ყურძნისგან. ეს რისგანაა?
f) ეს წიგნი არის სტუდენტებისთვის. ეს არის საქართველოს შესახებ. ეს ჩემგანაა.
g) ამ პატარა ბავშვების გარდა იქ მიდიან ეს სტუდენტები.
h) – ეს კატა აქ არის. – სადაა? წინ თუ უკან, ზემოთ თუ ქვემოთ? მარცხნივ თუ
მარჯვნივ? სად არის? – მაგიდის ქვეშ არის!
i) ისინი სახლისკენ მოდიან და შემდეგ ისადილებენ ამ მაგიდის ირგვლივ.
j) მიუხედავად ამისა, ის მაინც მიდის მოსკოვში.
k) ხორცის ნაცვლად თევზი მომაწოდეთ.
l) – სადილის წინ ცუდი არ იქნება ცივი წყლის დალევა. – ვახშმის წინ თეთრი
ღვინის დალევა ხომ კარგია? – ვახშამზეა კარგი თეთრი ღვინო და არა ვახშმის
წინ.
m)– ვინ დახატა ეს სურათი? – ამ კაცის მიერ არის ეს.
n) დღეს ამ ქალის გამო ვერ მიდის დედაჩემი ბებიაჩემთან სადილად.
o) – ეს წიგნი არის თბილისის შესახებ? – არა, ეს წიგნი არის მცხეთის შესახებ. ამ
წიგნის თანახმად და ამ წიგნის მიხედვით საქართველო ძალიან ლამაზი
ქვეყანაა.`,
        eng: `a) – I wanted to go, but my dad is unwell. – How is he now? – Thank you, now he is
already well. The doctor was at our house.
b) – What's around the table? – Flowers. – What flowers? – Violets, roses, and
snowdrops.
c) I don't like (love) the room flowers and I don't have them. My mom loves (them) and
she has very beautiful room violets and she takes care of them well.
d) From the table to the right is you friend's picture, to the left you are.
e) This table is (made) from wood. This wine is (made) from grapes. What is this (made)
from?
f) This book is for students. This is about Georgia. This is from me.
g) Besides these small children these students go there.
h) – This cat is here. – Where is it? In front or behind, up or down? To the left or to the
right? Where is it? – It's under the table!
i) They are coming towards the house and later they will have dinner around this table.
j) In spite of this he/she still goes to Moscow.
k) Please pass the fish instead of the meat.
l) – It will not be bad to have cold water before dinner. – Is it good to drink white wine
before supper? – The white wine is good for supper and not before it.
m)– Who painted this picture? – This is by this man.
n) Today because of this woman my mother can't go with my grandmother for dinner.
o) – Is this book about Tbilisi? – No, this book is about Mtskheta. According to this book
and according (following) to this book Georgia is a very beautiful country.`
      }
    ]
  }
  /* ,
  {
    title: 'Lesson 12',
    blocks: [
      {
        title: 'Text',
        geo: `– ვინ იცის, სად არის ჩემი მეგობარი ნანა? – შენ ხომ იცი, რომ იგი სეულშია. თქვენ
იცით რამე სეულის შესახებ? ის კორეის დედაქალაქია. ეს არის დიდი და ლამაზი
ქალაქი. – სეული თბილისიდან აღმოსავლეთით არის თუ დასავლეთით? – მე მგონია,
რომ აღმოსავლეთითაა. თბილისი კი სეულიდან დასავლეთით არის. –ვინმემ იცის,
სად არის მოსკოვი?– დიახ, კორეელმა სტუდენტებმა იციან, რომ მოსკოვი არის
რუსეთში, საქართველოდან ჩრდილოეთით.
ჩემს ოთახში არის სავარძელი, დივანი, საწოლი, ოთხი სკამი და სარკე. მე მიყვარს
რადიოს მოსმენა და ტელევიზორის ყურება. ახლა ძალიან მეზარება მუშაობა და
მინდა ტელევიზორის ყურება, თუ შეიძლება.
– არ გინდა ამის მოსმენა? – სამწუხაროდ, მას არ უნდა ამის თქმა. – იცი, რატომ არ
უნდა? – არ ვიცი. მე მგონი, ეშინია. – რატომ ეშინია ან რისი ეშინია? – ეგ მე უკვე არ
ვიცი.
– რა ხდება? – არაფერი. კაცმა არ იცის რა ხდება, ან რა ამბავია. საბედნიეროდ,
საერთოდ არ ვიცი, შიში რა არის. საზოგადოდ, ეს ძალიან ცუდი რამეა. არავის უნდა
ამის თქმა. არავის არ შეუძლია ამის ნახვა. ძნელია შიშში ცხოვრება. – ვინ ცხოვრობს
ასე? – არ ვიცი. მე მგონია, რომ აქ არავის არაფრის არ ეშინია.
– შენ, ალბათ, გეხალისება სუფრის გაშლა, ძალიან კარგი. ადვილია საჭმლის და
სასმელის მოტანა მაგიდაზე. – არა, მე კი მირჩევნია ეს ჭიქები წავიღო. რამე ხომ არ
გინდა?
– არ გინდა ახლა ამაზე ფიქრი და არ გინდა ეს ლაპარაკი! ყოყმანობ? რატომ
ყოყმანობ? არ გინდა ქართულის სწავლა? გირჩევნია ამ წიგნის წაღება. ხომ გინდა
ჩემი წიგნის წაღება თბილისში?
– ნუ შეწუხდებით! რას ბრძანებთ, ეს რა შეწუხებაა! საბედნიეროდ, მე მგონი, ეგ
წიგნი აქ მაქვს ჩანთაში. აი, ინებეთ.
– უღრმესი მადლობა.
– არაფრის. რას ბრძანებთ! ხომ კმაყოფილი ბრძანდებით?
– რას ბრძანებთ! დიდებულია, ჩინებული!
საერთოდ, ადამიანს აქვს ერთი თავი, ორი ხელი და ორი ფეხი. არა? მას ლამაზი სახე
აქვს. ის ძალიან ლამაზი ქალია.
– კორეელებს უყვართ მწარე და მჟავე საჭმელი. არავის არ მოსწონს მლაშე საჭმელი.
– დიახ. ეს კი არავის არ უყვარს. მე მიყვარს ტკბილი ნამცხვრები. შენ როგორი
ნამცხვარი მოგწონს? ქართველებს ცხარე საჭმელები გაქვთ? – არც თუ ისე.
კოსმოსში ბევრი ვარსკვლავია. ჩვენს პლანეტაზე არის წყალი. აქ ცხოვრობენ
ადამიანები და ცხოველები. ეს დიდებული სამყაროა.`,
        eng: `– Who knows where my friend Nana is? – Don't you know that she is in Seoul? Do you
know anything about Seoul? It is the capital of Korea. This is a big and beautiful city. – Is
Seoul from the east of Tbilisi or from the west? – I think that it is in the east. However Tbilisi
is west from Seoul. – Does anyone know where Moscow is? – Yes, the Korean students know
that Moscow is in Russia, north from Georgia.
In my room there is an armchair, a sofa, a bed, four chairs, and a mirror. I love to listen to
the radio and to watch television. Now I am too lazy to work and I want to watch TV, please.
– Don't you want to listen to it? – Unfortunately he/she doesn't want to talk. Do you know
why he/she doesn't want to? – I don't know. I think he/she is afraid. – Why is she afraid or
what is he/she afraid of? – This I already don't know.
– What's up? – Nothing. Nobody knows what's up. Fortunately I generally don't know what
fear is. Generally this is something very bad. Nobody wants to say it. Nobody can look at it.
It's difficult to live in fear. – Who lives this way (so)? – I don't know. I think no one is afraid
of anything here.
– You're probably excited to set the table, very good. It's very easy to bring food and drinks
to the table. No, I prefer to take these glasses away. Don't you want something?
– Now, you don’t need (want) to think about it and you don't need (want) to have this
conversation! Are you hesitating? Why are you hesitating? Don't you want to learn
Georgian? You prefer to take this book away. Don't you want to take my book to Tbilisi?
– Don't worry! What are you saying? What a problem this is! Fortunately I think I have
that book here in my bag. Here you are.
– Thank you very much.
– It was nothing. What are you saying? Aren't you satisfied (content)?
– What are you saying? It's great, great!
Generally a human has one head, two hands, and two feet. Doesn’t he/she? She has a
beautiful face. She is a very beautiful woman.
– Koreans love bitter and sour food. No one loves salty food. – Yes. Nobody loves this. I love
sweet cakes. What kind of cakes do you like? Do Georgians have spicy food? – More or less.
There are many stars in the space. There is water on our planet. Humans and animals live
here. This is a great universe.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) რამე ხომ არ გინდა?
b) – ნუ შეწუხდებით! – ეს რა შეწუხებაა? რას ბრძანებთ!
c) რატომ ყოყმანობ? არ გინდა ამის წერა? არ გინდა კორეული ენის სწავლა? რა?
ძნელია? ადვილი არაფერია, ჩემო კარგო, ამ პლანეტაზე.
d) – რამდენი ვარსკვლავია კოსმოსში? რომელ პლანეტაზე არის წყალი? ვინ იცის,
რამდენი პლანეტაა სამყაროში? – ბევრი. – სად ცხოვრობენ ადამიანები და
ცხოველები?
e) – რომელ პლანეტაზეა მცენარეები? – საბედნიეროდ, აქ არის წყალი.
f) დღეს კი კარგი ამინდია, მაგრამ კაცმა არ იცის, როგორი ამინდი იქნება ხვალ.
g) – თქვენ რა იცით ჩვენს შესახებ? – არაფერი. – კორეელი სტუდენტების შესახებ
თუ იცით რამე? ვინმემ იცის რამე აქ საერთოდ?
h) შენ მხოლოდ ტელევიზორის ყურება გინდა. რატომ არ გინდა სწავლა და
მუშაობა წიგნთან? რატომ გეზარება? ნუ გეზარება!
i) – იცის ვინმემ ვაზის მოვლა? – დიახ, ეს არაა ადვილი. – ვის შეუძლია
ყვავილების მოვლა?
j) ვის შეუძლია ვარდების მორწყვა? შეგიძლია სურათის დახატვა ან ამ წიგნის
წაკითხვა? ვის შეუძლია კორეულად დაწერა?
k) – აქ არის ცხარე, მწარე და მჟავე საჭმელები. – მე არ შემიძლია ამის ჭამა. ეს
ძალიან მლაშეა!
l) – რა გაქვს ოთახში? – მე მაქვს საწოლი, დივანი და სავარძელი, მაგრამ არა მაქვს
სარკე და სკამები.
m)ადამიანს აქვს თავი, სახე, ხელები და ფეხები. რამდენი ხელი და ფეხი აქვს
კაცს?
n) – შეგიძლია ამ ჩანთის წაღება? – მე არ შემიძლია აქ წყლის მოტანა. – რატომ?
– ეს არ არის ადვილი, ძნელია და იმიტომ.
o) ვის შეუძლია თეფშების აქ მოტანა და ამ ჭიქების იქ წაღება? არავის? ვინმე არის
აქ?`,
        eng: `a) Don't you want something?
b) – Don't worry! – What are you saying? What a problem this is!
c) Why do you hesitate? Don’t you want to write it? Don't you want to learn the Korean
language? What? Is it difficult? Nothing is easy my dear on this planet.
d) – How many stars are in the universe? On which planet is there water? Who knows
how many planets are in the universe? – Many. – Where do the people and animals
live?
e) – On which planet are there plants? – Fortunately, there is water here.
f) Today there is a good weather, but nobody knows how the weather will be
tomorrow.
g) – Do you know about me? – Nothing. – Do you know anything about the Korean
students? Does anybody know anything here at all?
h) You only want to watch television. Why don't you want to learn and to work with a
book? Why are you lazy? Don't be lazy!
i) – Does anybody know how to care for the grapevine tree? – Yes, this is not easy.
– Who can care for the flowers?
j) Who can water the roses? Can you paint a picture or read a book? Who can write in
Korean?
k) – Here is spicy, bitter and sour food. – I can't eat it. This is too salty!
l) – What do you have in the room? – I have a bed, a couch and an armchair, but I don't
have a mirror or chairs.
m)A human has a head, a face, hands, and feet. How many hands and feet does a man
have?
n) – Can you take this bag? – I can't bring water here. – Why? – This is not easy, because
it's difficult.
o) Who can bring the plates here and take these glasses there? No one can? Is anybody
here?`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) ვის შეუძლია ამ სკამების მოტანა ოთახის ჩრდილოეთით?
b) არის აქ ვინმე? თქვენ იცით რამე?
c) – უღრმესი მადლობა. – არაფრის.
d) ძნელია ქართულის სწავლა? ადვილია ქართული ანბანის სწავლა? იცი ეს?
e) რა არის სამყარო? საიდან არიან ის ვარსკვლავები?
f) ეს არის მჟავე და მწარე. არა, მეეჭვება. მე ვფიქრობ, რომ ეს არის ცხარე. ეგ
ნამცხვარი იქნება ძალიან ტკბილი.
g) მეზარება – ხატვა! მინდა ტელევიზორის ყურება და რადიოს მოსმენა.
h) მე არ მინდა შენი მეტყველების მოსმენა.
i) ვის შეუძლია კორეულად წერა? ვის შეუძლია საუბარი? ვის შეუძლია ამის
თქმა?
j) – ვიღაც არის აქ. – ოჰ, მადლობა. – რა შეწუხებაა!
k) – თქვენ გაქვთ სკამები და სავარძლები ოთახში? – დიახ, მაქვს. მაგრამ არ მაქვს
ტელევიზორი და რადიო. – გაქვთ საწოლი და სარკე? – დიახ, მაქვს.
l) ვინ იცის სად არის ჩრდილოეთი და სამხრეთი ან აღმოსავლეთი და
დასავლეთი?
m)– არაა ადვილი კორეულად საუბარი ამერიკელებისთვის. მათ არ იციან ეს ენა.
კორეელებმა იციან ინგლისური? ბევრ კორეელს შეუძლია ინგლისურად
საუბარი? – კი, მათ შეუძლიათ. მათ შეუძლიათ სწავლა/ისწავლონ.
n) – რატომ არ გეხალისება ამ წიგნის კითხვა? – არ ვიცი. მგონი, იმიტომ ძნელია
ჩემთვის.
o) – ეს კაცს აქვს თავი? – საერთოდ, ადამიანს აქვს ორი ფეხი, ორი ხელი, ერთი
თავი და ერთი სახე.`,
        eng: `a) Who can bring these chairs to the north of the room?
b) Anybody here? Do you know anything?
c) – Thank you very much. – Not at all!
d) Is it difficult to learn Georgian? Is it easy to learn Georgian alphabet? Do you know it?
e) What is the universe? Where are these stars from?
f) This is sour and hot. No, I doubt it. I think this is sharp. This cake will be very sweet.
g) I’m too lazy to paint! I want to watch TV and to listen to the radio.
h) I don’t want to listen to your speech.
i) Who can write Korean? Who can speak it? Who can say it?
j) – Somebody is here. – Oh, thank you. – Never mind! (What a problem!)
k) – Do you have chairs and armchairs in your room? – Yes I do. But I don’t have TV
and radio. – Do you have a bed and a mirror? – Yes, I do.
l) Who knows where North and South or East and West is? Anybody? Oh, nobody
knows.
m)– It’s not easy to speak Korean for Americans. They don’t know this language. Do
Koreans know English? Can many Koreans speak English? – Yes, they do. They can
study.
n) – Why aren’t you enthusiastic to read this book? – I don’t know. I think because it’s
difficult for me.
o) – Does this man have a head? – Generally a human has two feet, two hands, a head
and a face.`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) არ მინდა ამ ლაპარაკის მოსმენა.
b) საბედნიეროდ, ახლა არაფერი არ მეზარება. შემიძლია ამ წიგნის წაკითხვა.
c) სად არის ჩემი დიდი მეგობარი? სამხრეთისკენ მიდის თუ ჩრდილოეთისაკენ? ეს
კი უკვე მე არ ვიცი, სამწუხაროდ. მაგრამ ხვალ, მგონი, აქ იქნება დილით.
d) ვინ არიან ესენი? ამათ ეხალისებათ აქ წერა?
e) ის არის აღმოსავლეთიდან. ის ჩემი ვარსკვლავია. მე ძალიან მიყვარს.
f) მიყვარს ფიქრი სამყაროს შესახებ და ფიქრი ადამიანებზე.
g) არ გინდა ამის თქმა. ეს მე კარგად ვიცი.
h) რატომ გიყვარს ბევრი ლაპარაკი? ეს ცუდია, ხომ იცი.
i) რა იცოდი ჩემო, პატარა მეგობარო, ამის შესახებ?
j) ესენი ყოყმანობენ. მაგათ კი ეს არ იციან. ისინი აქ აპირებენ მუშაობას. ისინი აქ
იმუშავებენ.`,
        eng: `a) I don't want to listen to this conversation.
b) Fortunately, now nothing I'm not too lazy for. I can read this book.
c) Where is my big friend? Is he/she going (towards) south or north? And this I already
don't know, unfortunately. But tomorrow, I think, he will be here in the morning.
d) Who are these? Are they enthusiastic to write here?
e) He/she is from the east. This is my star. I really love it.
f) I love to think about the universe and to think about people.
g) You don't need (want) to say this. This I know well.
h) Why do you love to speak so much? This is bad, don't you know?
i) What did you know, my little friend, about his?
j) They are hesitating. They don't know this. They intend to work here. They will work
here.`
      }
    ]
  },
  {
    title: 'Lesson 13',
    blocks: [
      {
        title: 'Text',
        geo: `მოდი აქ და შეხედე! ეს ჩვენი ოფისია. ეს არის ჩემი სამსახური. შენ ხომ იცი, რომ მე აქ
ვმუშაობ. ამ უნივერსიტეტში მე ვარ ლექტორი. ვიცი, ძალიან მოგეწონება.
საზოგადოდ, ეს არის მწერლების ქუჩა. ნახე, როგორი ლამაზი აივანი აქვს ამ შენობას!
წითელი ხის კარები და ფანჯრები აქვს აივანს. შენ რომ მოგეწონება, ისეთი სახლია.
მას აქვს მაღალი ჭერი, ხის იატაკი, დიდი კედლები და ძალიან დიდი აბაზანა. ჩვენს
ოფისში არის წიგნების კარადა და საწერი მაგიდა. აქ გვაქვს რუკა, დაფა და სანაგვე.
ოთახში არის თეთრი ფარდები და მწვანე ხალიჩა.
– ოფისში ჭურჭელი თუ გაქვთ?
– ბატონო, რა ბრძანეთ?
– ჭურჭელი გაქვთ სადილისათვის?
– ცოტა კი გვაქვს, რა თქმა უნდა, და ბევრი რად გვინდა? ცხადია, ეს არ არის
ყველაზე მაღალი შენობა ქალაქში, მაგრამ ყველაზე ლამაზია.
– ეს სიმართლეა?
– აბა, ტყუილი რა საკადრისია, ქალბატონო. ნახეთ!
– ამ შენობას ლიფტი არა აქვს? მხოლოდ კიბეა აქ? რატომ არ არის აქ ლიფტი. ეს
არის კარგი შენობა?
– რატომ არ მოგწონს? ეს ხომ არ არის მაღალი შენობა. ეს პატარა და დაბალი
შენობაა. ამას რად უნდა ლიფტი? აქ ყველა ფეხით მოდის, რა საკვირველია.
– უკაცრავად, მომიტევეთ, ბატონო, აღარ შემიძლია წამოსვლა. სამწუხაროდ, დრო
არა მაქვს, საქმე მაქვს.
– რას ბრძანებთ! კი, ბატონო! ნახვამდის.
– კარგად ბრძანდებოდეთ.`,
        eng: `Come here and look! This is our office. This is my work. Don't you know that I work here? I
am a lecturer at this university. I know you will really like it. Generally this is a writers’
street. See, how this building has a beautiful balcony! The balcony has red wooden doors and
windows. You will like such a house. It has a high ceiling, a wooden floor, big walls, and a
very big bathroom. In our office there is a bookcase and a writing desk. Here we have a map,
a desk, and a wastebasket. In the office there are the white curtains and a green carpet.
– Do you have cookery in the office?
– Sir, what did you say?
– Do you have cookery for dinner?
– We have a little, of course and why do we need much? It's clear, this is not the tallest
building in the city, but it's the most beautiful.
– Is this the truth?
– Well, you shouldn't lie. Miss, look (see)!
– Doesn't this building have an elevator? Are there only stairs here? Why isn't an elevator
here? Is this a good building?
– Why don't you like it? This isn't a tall building. This is a small and low building. What
for (why) does it need an elevator? Everyone comes by foot here, of course.
– Excuse me, excuse me, sir, I can go no further. Unfortunately, I don't have time; I have
something to do.
– What are you saying? Of course! Goodbye.
– Farewell.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) ყველაზე მეტად არ მიყვარს ტყუილი. ყველას უნდა სიმართლის თქმა.
b) თქვენი კომპიუტერი, ალბათ, საწერ მაგიდაზეა თქვენს ოფისში.
c) ეს ოთახი არის ნათელი და ფართო. მე ადრე მქონდა ბნელი და ვიწრო ოთახი.
ის არ მომწონდა.
d) დღეს გაკვეთილი გვაქვს დილით. კორეელ სტუდენტებს კი შუადღისით აქვთ
ქართულის ლექცია. მათი ლექტორი უკვე მოდის.
e) – რა უფრო მოგწონს: გაზაფხული, ზაფხული, შემოდგომა თუ ზამთარი? – მე
მიყვარს გაზაფხული და შემოდგომა.
f) – შენ, ალბათ, შემოდგომა გეყვარება? – რატომ? – იმიტომ რომ ეს ღვინის დროა.
g) როგორი ჭერი და იატაკი აქვს შენს ოთახს?
h) შემოდგომით ბევრი საქმე მაქვს. პაპაჩემს აქვს დიდი ბაღი და უვლის მას. მე
მიყვარს იქ წასვლა და ბაღის მოვლა. საერთოდ, რა თქმა უნდა, ყველას არ
უყვარს სოფლის ეზოში და ბაღებში მუშაობა. ეს ადვილი არაა.
i) – შენ ბევრი სიცილი იცი. მას უყვარს სიცილი. აბა, ტირილი ვის მოსწონს?
– ბებიაჩემს მოსწონს – ის კარგი მსახიობია. პაპაჩემი კი კარგი სპორტსმენი იყო
ადრე.
j) – გიყვარს კომპიუტერით მუშაობა? ახლა ინტერნეტში ხარ, ალბათ. ეს რა
წერილია? – ეს წერილი არ არის. ეს ჩემმა მეგობარმა დახატა ასე.`,
        eng: `a) Most of all I don't like (love) lies. Everyone wants to say the truth.
b) Your computer probably is on the writing desk in your room.
c) This room is light and wide. Before I had dark and narrow room. I didn't like it.
d) Today we have a lesson in the morning. The Korean students have a Georgian lecture
in the afternoon. Their lecturer is already coming.
e) – What do you like more: spring, summer, autumn, or winter? – I love spring and
autumn.
f) – You will probably love autumn? – Why? – Because this wine time.
g) Which kind of ceiling and floor has you your room?
h) In autumn I have many things to do. My grandpa has a big garden and he cares for it.
I love to go there and to care for the garden. Generally, of course, not everyone loves
to work in the village yards and gardens.This is not easy.
i) – You know how to laugh a lot. He/he loves laughing. Well, who likes crying? – My
grandma likes to – she is a good artist. And my grandpa was a good sportsman before.
j) – Do you love to work on the computer? Now you are probably on the internet. What
is this letter? – This is not a letter. My friend painted it so.`
      },
      {
        title: '2. Translate and try to answer or continue',
        isList: true,
        geo: `a) რომელი უფრო მოგწონს – გაზაფხული თუ ზაფხული? რატომ?
b) გაქვს კომპიუტერი და ინტერნეტი შენს ოფისში?
c) მუშაობ თუ სწავლობ?
d) შენი ოთახის კარები ხისგანაა/ხისაა?
e) ამ შენობას აქვს ლიფტი?
f) შენი ოფისი ნათელია?
g) შენ გაქვს სამსახური?
h) ამას შეხედე, მოგწონს ეს ყვავილები? რა თქმა უნდა, მე მიყვარს ისინი!
i) მომიტევეთ, მაგრამ რა საკადრისია? ნათელია, რომ ეს არის ტყუილი! არა?
j) ეს ოთახი არის - ბნელი თუ ნათელი?
k) თქვენ მაღალი ხართ თუ დაბალი?
l) შენ გეყვარება ის? მათ მოეწონებათ ის?
m)შენ გიყვარდა ეს ოფისი? მათ მოსწონდათ ეს დივანი?
n) ეს ხალიჩა კარგია? რა ფერები აქვს?
o) სიცილი და ტირილი ძმებია.`,
        eng: `a) Which do you like more – spring or summer? Why?
b) Do you have a computer and internet in your office?
c) Do you work or study?
d) Are the doors of your room wooden?
e) Does this building have an elevator?
f) Is your office light?
g) Do you have a job?
h) Look at it, do you like these flowers? Of course, I love them!
i) Excuse me, but you shouldn’t do this. It’s clear that it’s a lie! Isn’t it?
j) Is this room dark or light?
k) Are you tall or short?
l) Will you love it? Will they like it?
m)Did you love this office? Did they like this sofa?
n) Is this carpet nice? What colors does it have?
o) Laugh and cry are brothers.`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) სიცილი და ტირილი და-ძმაა. ცხადია, სიმართლე და ტყუილი და-ძმაა!
b) – საერთოდ, საშინაო დავალება რა საჭიროა? – მე მგონია, რომ ეს ძალიან
საჭიროა.
c) ბატონებო და ქალბატონებო, ეს არის ჩვენი ოფისი. აქ თქვენ იმუშავებთ. აქ
გექნებათ კომპიუტერები და ინტერნეტი. აქაა წიგნების კარადა, საწერი მაგიდა,
რუკა, დაფა და სანაგვე.
d) მომიტევეთ, აღარ მინდა ამის წაკითხვა. ლექტორი მიდის უკვე ლექციაზე.
e) – უკაცრავად, ბატონო, რა ბრძანეთ? – კი ბატონო. აქ საიდან მოდის სინათლე
ჭერიდან თუ ფანჯრიდან? – ეს ფართო და ნათელი ოთახია.`,
        eng: `a) Laughing and crying are sister and brother. It's clear, truth and lying are sister and
brother!
b) – In general, what is necessary about homework? – I think that it is very necessary.
c) Ladies and gentlemen, this is our office. Here you will work. Here you will have
computers and internet. Here is a bookcase, a writing desk, a map, a desk, and a
wastebasket.
d) Excuse me I don't want to read this anymore. The lecturer is already going to the
lecture.
e) – Excuse me, sir, what did you say? – Yes? Where from is the light coming – from the
ceiling or from the window? – This is a wide and bright (light) room.`
      }
    ]
  },
  {
    title: 'Lesson 14',
    blocks: [
      {
        title: 'Text',
        geo: `– ზუსტად რა დროა ახლა?
– ოთხს აკლია ხუთი წუთი.
– მე სულ ერთი საათი მაქვს დრო.
– მერე ეს რა არის მარადისობაში?
– არც არაფერი. ბევრი საქმე გავაკეთე დღეს და ძალიან დავიღალე. ახლა უნდა
ვისამხრო.
– ნუ გიყვარს წუწუნი, სირცხვილია. ვიცით, რომ ძალიან დაკავებული ბიჭი ხარ.
– არ მესმის, რა გინდათ?
– არაფერი. მეც დავიღალე.
– შენც გააკეთე ეს წერილი?
– რაც შეეხება ამ წერილს, რა საკვირველია, მეც გავაკეთე. ეს ყველამ გააკეთა. ეს
გაკვეთილიც ყველამ უკვე ისწავლა.
– სასიამოვნოა. თქვენ რომელ დღეებში მუშაობთ?
– ჩვენ ორშაბათს, ოთხშაბათს და პარასკევს გვაქვს ლექციები და სამშაბათს და
ხუთშაბათს კი აქ ვმუშაობთ.
– რამდენი თვეა, აქ ხართ?
– 8 თვეა: აპრილი, მაისი, ივნისი, ივლისი, აგვისტო, სექტემბერი, ოქტომბერი და
ნოემბერი. დეკემბერში კი უკვე ყველა ერთად სეულში ვიქნებით.
– როდემდე იქნებით იქ?
– რამდენიმე თვე: დეკემბერი, იანვარი, თებერვალი და მარტი.
– მთელი ზამთარი სეულში იქნებით?
– დიახ.
– იქ ძალიან ცივა? ზამთარში იქ დიდი სიცივე არ არის. მითხარი, სეულში როგორი
ამინდი იცის ზამთარში? სეულში იცის სიცივე?
– არც თუ ისე. კი ცივა ცოტათი, მაგრამ არ წვიმს და არც თოვს ზამთარში.
– აბა, კარგად იყავი. ნახვამდის.
– კარგად!`,
        eng: `– Exactly what time is it now?
– It's five minutes to four.
– I have time for one hour (I have only one hour).
– After this what is eternity?
– Nothing at all. I have done many things to today and I became very tired. Now I must
have lunch.
– You shouldn't love to complain; it's a shame. We know that you are a very busy boy.
– I don't understand – what do you want?
– Nothing. I too became tired.
– Have you also written (done) this letter?
– Concerning this letter, of course I also wrote (did) it. Everyone did this. Everyone has
already learned this lesson.
– It's nice. On what days do you work?
– We have lectures on Monday, Wednesday and Friday and we work here on Tuesday and
Thursday.
– How many months have you been here?
– (There are) 8 months: April, May, June, July, August, September, October and November.
In December everyone will already be together in Seoul.
– How long (until when) will you be here?
– Several months: December, January, February and March.
– Will you be in Seoul all winter?
– Yes.
– Is it very cold there? It's not really (big) cold in winter. Tell me, how is the weather in
winter? Is Seoul cold?
– More or less. Yes, it's slightly cold, but it doesn't rain nor does it snow in winter.
– Well, be well. Goodbye.
– Take care! (Bye!)`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) ფეხზე ადექი და მითხარი, სად იქნები ახალ წელს?
b) – აქ წვიმს. მანდ როგორი ამინდია? – აქ კარგი დარია.
c) ზუსტად არ ვიცი, ახლა რა დროა. სამი ან სამის ნახევარი იქნება.
d) აბა, მითხარი, რას გააკეთებ ხვალ? ვეფხვს დახატავ, თუ გაკვეთილს ისწავლი?
e) მზიან ამინდში ყველაფერი მეხალისება. მაგრამ ახლა აქ წვიმს და ნისლია. მეც
ამიტომ მეზარება მანქანით ქუჩაში წასვლა.
f) – ახლა რა თვეა? დეკემბერია. – რომელი საუკუნეა, ვინ იცის? – ახლა
ოცდამეერთე საუკუნეა, ორიათას შვიდი წელი.
g) – მართლაც დავიღალე სიარულით. შეიძლება დავჯდე სადმე? – დაბრძანდით,
გეთაყვა.
h) – გავიცნოთ ერთმანეთი! – კი ბატონო, ვიცნობდეთ ერთმანეთს. მე მქვია
თამარი და თქვენ რა გქვიათ? - მე ნანა ვარ. – სასიამოვნოა.
i) – რომელ სართულზე ცხოვრობ? – მეთორმეტეზე. შენ? – მეც.
j) ზამთრის თვეებია: დეკემბერი, იანვარი და თებერვალი.
k) გაზაფხულის თვეებია: მარტი, აპრილი და მაისი.
l) ზაფხულის თვეებია: ივნისი, ივლისი და აგვისტო.
m)შემოდგომის თვეებია: სექტემბერი, ოქტომბერი და ნოემბერი.
n) კვირის დღეებია: ორშაბათი, სამშაბათი, ოთხშაბათი, ხუთშაბათი, პარასკევი,
შაბათი და კვირა.
o) ახალი წელი არის ოცდათერთმეტ დეკემბერს. ყველას უყვარს ეს დღე.`,
        eng: `a) You, stand on your feet and tell me, where will you be in the new year?
b) – It's raining here. How is the weather there? – There is good weather here.
c) I don't exactly know what time it is now. It will be three or half past two.
d) Well, tell me, what will you do tomorrow? Will you paint the tiger, or learn the
lesson?
e) I am enthusiastic about everything in sunny weather. But now it's raining here and
it's foggy. Therefore I am too lazy to go by car in the street.
f) – What month is it now? – It's December. – Who knows which century it is? – Now it
is the twenty-first century,the year 2007.
g) – Truly I have become tired by walking. May I sit somewhere? – Please sit down.
h) – Let's get to know each other! – Of course, let's get to know each other. My name is
Tamar and what is your name? – I am Nana. – It's nice to meet you.
i) – Which floor do you live on? – On the twelfth. You? – Me too.
j) The winter months are: December, January and February.
k) The spring months are: March, April and May.
l) The summer months are: June, July and August.
m)The autumn months are: September, October and November.
n) Days of the week are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday and
Sunday.
o) The new year is on December thirty-first. Everyone loves this day.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) რომელ სართულზეა შენი ოფისი?
b) ვერ გავიგე კარგად. ეს საჭმელი ძველი არის თუ ახალი?
c) მე ვერ ვისაუბრებ მასზე.
d) დაბრძანდით, გეთაყვა!
e) ადექი! ადექი, გეთაყვა.
f) – რა სირცხვილია! საერთოდ შიში არის სირცხვილი. – ნამდვილად მეშინია
გარეული ცხოველებს. – ნუ გეშინია! ისინი არიან გალიაში ზოოპარკში.
g) ძალიან დავიღალე ფეხით სიარულით. თუ შეიძლება, დავჯდები სადმე?
h) – ძალიან დაკავებული (საქმიანი) ხარ? – კი, მე ვარ ძალიან დაკავებული დღეს.
i) – გავიცნოთ ერთმანეთი. მითხარი, რა გქვია შენ? – სასიამოვნოა სასიამოვნოა
თქვენთან შეხვედრა!
j) ჩემი აზრით, თბილისი არ არის ცივი ქალაქი. არ არის ყინვა იანვარში და
დეკემბერში. ზამთარი იქ არ არის ცივი.
k) თითოეული თქვენგანი ისწავლის ამ გაკვეთილს.
l) მითხარი, გეთაყვა, კვირის დღეების სახელები!
m)მითხარი, გეთაყვა, თვეების სახელები!
n) მითხარი, გეთაყვა, წლის ოთხი დროს სახელები!
o) მითხარი, გეთაყვა – რა დროა ახლა!
p) მარადისობა რა არის სამყაროში ან კოსმოსში? შენ იცი რამე ამის შესახებ?
q) ბევრი ვარსკვლავია ზეცაზე. კარგი დარი იქნება ხვალ.
r) ნისლია ახლა. მეშინია.
s) სიცივეა (ცივა). სიცხეა (ცხელა).
t) არ წვიმს. თოვს.`,
        eng: `a) On which floor is your office?
b) I don’t understand it well. Is this old food or new?
c) I cant’ speak concerning her.
d) Please take a seat!
e) Stand up! Stand up please.
f) – What a shame! Fear is a shame in general. – I am really afraid of wild animals.
– Don’t be afraid! They are in the cages in the zoo.
g) I got very tired by walking. May I sit down somewhere?
h) – Are you very busy? – Yes, I am really very busy today.
i) – Let’s get to know each other. Tell me your name. – Nice to meet you!
j) In my opinion Tbilisi is not a cold city. There is no frost in January and December.
Winter is not cold there.
k) Each of you will learn this lesson.
l) Tell me please the names of the weekdays!
m)Tell me please the names of the months!
n) Tell me please the names of the four seasons!
o) Tell me please – what time is it now!
p) What is immortality in space or in the universe? Do you know anything about it?
q) There are many stars in the sky. It will be sunny weather tomorrow.
r) It’s foggy now. I am afraid.
s) It’s cold. It’s hot.
t) It’s not raining, it’s snowing.`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) ყველაფერი არ მესმის. მობრძანდით, გავიცნოთ ერთმანეთი.
b) რაც შეეხება ორშაბათის შეხვედრას, არა მგონია. ძალიან მეეჭვება, რომ
ორშაბათს იმდენი დრო მქონდეს.
c) – ყოველდღე დაკავებული ყოფნა ნამდვილად ძალიან ძნელია. – მართლაც!
d) ჩემი აზრით, წუწუნი სირცხვილია! დავიღალე ამდენი სიარულით. ადექი და
დაჯექი. სადმე დაბრძანდით.
e) – ვერ გავიგე, რა არის მარადისობა და სამყარო. შენ იცი? – მე ისიც არ ვიცი,
ხვალ რას გავაკეთებ.`,
        eng: `a) I don't understand/hear anything (everything). Please come, let's get to know each
other.
b) Concerning the meeting on Monday, I don't think so. I really doubt that I had enough
time on Monday.
c) – It is really, very hard to be busy everyday. – Truly!
d) In my opinion, it is a shame to complain! I became tired with so much walking. Stand
and sit down. Please sit down somewhere.
e) – I don't understand, what is eternity and the universe. Do you know? – I don't even
know what I will do tomorrow.`
      }
    ]
  },
  {
    title: 'Lesson 15',
    blocks: [
      {
        title: 'Text',
        geo: `– ჩვენ გვაქვს დიდი ოჯახი. ჩვენი გვარია დადიანი. ეს ძველი და დიდი გვარია. ჩვენს
ოჯახში ვცხოვრობთ ყველა ერთად: ჩვენ – ცოლ-ქმარი, ჩვენი შვილები და ჩემი
მეუღლის დედ-მამა, ანუ ჩემი დედამთილი და მამამთილი. ჩვენ ტყუპებიც გვყავს
ოჯახში – ნინო და რუსუდანი. – რა ასაკისა? – ორი წლის ტყუპები არიან. სიდედრი
და სიმამრი აქ არ ცხოვრობენ. არც ჩემი მული და მაზლი ცხოვრობენ აქ. მაგრამ ისინი
ხშირად მოდიან ჩვენთან. მე მყავს ბიძაშვილები და დეიდაშვილები, მაგრამ ისინი
სოფელში ცხოვრობენ და ქალაქში მაზეგ ჩამოდიან. ჩემი ქმრის ნათესავები კი
სეულში ცხოვრობენ. მე მიყვარს ნათესავებთან შეხვედრა და საუბარი.
განსაკუთრებით, ბიცოლაჩემი მომწონს. ძალიან კეთილი, კარგი და ლამაზი ქალია.
ისე, რა თქმა უნდა, აქ ბოროტი არავინაა, ყველა კეთილი ადამიანია ჩვენს ოჯახში. რაც
შეეხება ჩემს მამიდას და ბიძას, ისინი თბილისში არიან. დეიდა კი მე არა მყავს. ხვალ
აქ იქნებიან ბიძაჩემი, დეიდაშენი და მამიდაჩემი.
– ესენი ვისი ბიძაშვილები, დეიდაშვილები და მამიდაშვილები არიან? – ესენი არიან
ჩემი ცოლის ნათესავები. – ვის ჰყავს დედინაცვალი ან მამინაცვალი თქვენს
ნათესავებში? – არა, ჩემს ნათესავებს გერი არა ჰყავთ. ჩემს მულს კი ჰყავს ორი გერი.
– ეს ჩქარი მატარებელი სად მიდის? – არ ვიცი, მე მგონი, სეულში. – მე არა მცალია,
მატარებელზე მაგვიანდება და ძალიან მეჩქარება. ეს ჩანთა კი ძალიან მძიმეა, არ
შემიძლია ამისი წაღება. მე უფრო მსუბუქი მინდა აუცილებლად. – ასეთი მძიმეა შენი
წიგნები და რას იზამ? აი, ეს ჩანთა უკეთესია. – მართლაც, ეს განსაკუთრებით კარგია.
საუკეთესოა ნამდვილად. მომაწოდეთ, გეთაყვა, ეგ მოწითალო რვეული. რა ნელი
ხარ, ჯონ. ხომ გითხარი, მაგვიანდება. ჩქარა მომაწოდე ეგ რვეული. არა, მოყვითალო
კი არა, მოწითალო რვეული.
– შენ რამდენი წლის ხარ?
– მე ოცის და თქვენ რა ასაკის ბრძანდებით?
– მე ბევრის?
– მაინც? მაინც რამდენის, თუ შეიძლება, მითხარით, გეთაყვა.
– ორმოდაექვსის.
– ეს სულაც არა ბევრი.
– კეთილი. გმადლობთ.
– ხვალ და ზეგ უქმეა. რას აპირებ? – არ ვიცი ჯერ. არდადეგებზე ყველას უნდა
დასვენება და გართობა, ან ბურთის თამაში ეზოში. მეც მინდა, რა თქმა უნდა. – სადმე
წასვლა ხომ არ გინდა? – არა. მე არ ვაპირებ წასვლას. აქ ვიქნები აუცილებლად.`,
        eng: `– We have a big family. Our surname is Didiani. This is an old and big surname. Everyone
lives together in our family: we – husband and wife, our children and my spouse's mother
and father or (otherwise) my mother-in-law and father-in-law. We also have twins in our
family – Nino and Rusudan. – How old are they? – The twins are two years old. My mother-
in-law and father-in-law don't live here. Neither my sister-in-law nor my brother-in-law
live here. But they often come to visit us. I have cousins, but they live in the village and are
coming to the city in two days. But my husband's relatives live in Seoul. I love to meet and to
speak with my relatives. I especially like my aunt. She is a very kind, good and a beautiful
woman. So of course no one is evil here; everyone is a kind person in our family. Concerning
my aunt and uncle (on my father's side) they live in Tbilisi. But I don't have an aunt (on my
mother's side). Tomorrow my uncle, your aunt and my aunt (father’s sister) will be here.
– Whose cousins are these? – They (these) are my wife's relatives. – Who has a stepmother or
a stepfather among your relatives? – No, my relatives don't have a stepchild. But my sister-
in-law (husband’s sister) has two stepchildren.
– Where is this fast train going? – I don't know, I think to Seoul. – I don't have time, I am
getting late for the train and I'm really in a hurry. But this bag is very heavy; I can't take it
away. I definitely want it lighter. – Your books are so heavy, what will you do? Here, this
bag is better. Truly this is especially good. It's really the best. Pass me please that red
(reddish) notebook. How slow you are, Jon. Didn't I tell you I am getting late? Hurry, pass
me that notebook; No, not less yellow, a less red notebook.
– How old are you?
– I'm twenty and how old are you?
– Old (many)?
– Still? Please tell me at least how many years old you are.
– Forty-six.
– This isn't old (many) at all!
– So kind of you. Thank you.
– Tomorrow and the day after tomorrow are free. What do you intend to do? – I still don't
know. On holidays everyone wants to rest, be entertained or play ball in the yard. I also
want to of course. – Don't you want to go somewhere? – No, I don't intend to go anywhere.
I'll be here for sure.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) რა გქვია? რა გვარის ხარ? რამდენი წლის ხარ?
b) – რას აპირებ უქმეებზე? – ჯერ არ ვიცი.
c) ალბათ, ჩემს ბიძაშვილებთან და დეიდაშვილებთან ერთად ვიქნები იმათ
ოჯახში.
d) – სად არიან თქვენი მამიდაშვილები? ახლა ვინ არის თქვენს ოჯახში? – სიძე,
რძალი და სიმამრი. - სად არის სიდედრი?
e) დედამთილი და მამამთილი უქმეებზე მიდიან სოფელში.
f) – შენ რას აპირებ არდადეგებზე. რას იზამ? ხომ არ აპირებ ბურთის თამაშს?
– აუცილებლად.
g) უკაცრავად, შემთხვევით ჩემი ბიძაშვილები აქ ხომ არ არიან?
h) – ეს უბოროტესი კაცია. – რატომ ამბობ ასე? – მე შენ გელაპარაკები, რომ ეს
უბოროტესი ადამიანია. – მე კი შენ გეუბნები, რომ ეს საუკეთესო ადამიანია.
i) ნუ გეშინია, ეს მართლა ბოროტი კი არ არის. ეს ხომ მსახიობია.
j) ეს ტბა ძალიან ღრმაა და საშიში, აქ წყლის მცენარეებია ბევრი და ამიტომაა
საშიში.
k) ხომ არ იცით, რომელია ნაწილი და მთელი რიცხვები?
l) ეს ჩემი სიმამრის გერია, ირაკლი. ეს საუკეთესო პატარა ბიჭია თბილისში.`,
        eng: `a) What's your name? What's your surname? How old are you?
b) – What do you intend to do on the weekend? – I still don't know.
c) I will probably be together with my cousins and their family.
d) – Where are your cousins? Who's now in your family? – (My) brother-in-law, sister-
in-law, and father-in-law. – Where is your mother-in-law?
e) (My) mother-in-law and father-in-law are going to the village on the weekend.
f) – What do you intend to do on your holiday(s)/vacation(s)? What will you do? Don't
you intend to play ball? – Certainly.
g) Excuse me, by chance, are my cousins here?
h) – This is the evilest man. – Why do you say so? – I'm telling you that this is the evilest
person. – But I am telling you that this is the best person.
i) Don't be afraid, he/she is not really evil. This is an actor.
j) This lake is very deep and dangerous, here there are many water plants and are
therefore it’s dangerous.
k) Don't you know which are partial and which are whole figures?
l) This is my father-in-law's step child, Irakli. This is the best small boy in Tbilisi.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) ეს არის ნელი და ღრმა. ის ჩქარია. ეს არის უწეთლესი ვაშლი. მომაწოდეთ, თუ
შეიძლება.
b) მითხარი/მომიყევი შენი ოჯახის და ნათესავების შესახებ. გყავს მამიდები,
დეიდები და ბიძები? რამდენი ბიძაშვილი გყავს?
c) რამდენი წლის ხართ? რა გქვიათ და რა გვარის ხართ?
d) ის უკეთესია, მაგრამ ეს საუკეთესოა! მე ეს არ მომწონს. ის უარესია.
e) მარის უყვარს მისი შვილიშვილები და განსაკუთრებით მე!
f) – რას აპირებ (რის გაკეთებას აპირებ) არდადეგებისთვის (არდადეგებზე)? – მე
ჯერ არ ვიცი.
g) – ვის შეუძლია მოყოლა? – მე შენ გეტყვი. მან თქვა, რომ ის მოჰყვება
სიმართლეს (ის იტყვის სიმართლეს.).
h) საწუხაროდ, შენ მოჰყევი (თქვი) ტყუილი. ხვალ დილით დედაჩვენი შენ
მოგიყვება (გეტყვის) ამის შესახებ.
i) ჩემი დედინაცვალი და ჩემი მამინაცვალი სოფელში არიან. ჩემი სიდედრი და
სიმამრი მივლენ იქ.
j) – შენ ხომ არ მოხვალ აქ? – კი, რა თქმა უნდა, აუცილებლად!`,
        eng: `a) This is slow and deep. It’s fast. This is the reddest apple. Pass it to me, please.
b) Tell me about your family and relatives. Do you have aunts and uncles? How many
cousins do you have?
c) How old are you? What’s your name and surname?
d) That is better, but this is the best! I don’t like this. It’s the worst.
e) Mary loves her grandchildren and especially me!
f) – What do you intend to do for holidays? – I don’t know yet.
g) – Who can tell it? – I’ll tell you. She said, that he will tell the truth.
h) Unfortunately you told a lie. I know. Tomorrow morning our mother will tell you
about this.
i) My stepmother and my stepfather are in the village. My mother-in-law and father-in-
law will go there.
j) – Aren’t you going to come here? – Yes, of course, for sure!`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) რომელი ფერის ჩანთა მოგწონს – მოლურჯო თუ ის მომწვანო?
b) შემთხვევით ხომ არ იცით, სად მიდის ეს ჩქარი მატარებელი ან როდის მიდის?
c) მითხარით, თუ შეიძლება, ვინ არიან თქვენი ნათესავები?
d) მოჰყევით რამე თქვენს ოჯახზე. გვიამბეთ რამე. უამბეთ რამე თქვენს
მეგობრებს თქვენი ოჯახის შესახებ.
e) ის მე მიყვება ამბავს. მე შენ რას გელაპარაკები? რა თქვი? რა მითხარი?
f) – რას იტყვი? რას გეტყვი? რას ეტყვი მათ? – ვეტყვი სიმართლეს.
g) ის ამბობს, რომ არ იცის არაფერი. მე ვუთხარი, რომ ეს ძალიან ცუდია. მან
თქვა, რომ არ შეუძლია არაფერი. რას იზამ?
h) – რა საქმიანი ხარ დედა. მე არ მიყვარს საქმიანი ადამიანები. შენ სულ
დაკავებული ხარ. – რას იზამ? კი ვიცი, რომ გინდა ჩემთან ბურთის თამაში,
მაგრამ სამწუხაროდ, ახლა არა მცალია.`,
        eng: `a) Which color of bag do you like – less dark blue or this less green?
b) Do know by chance, where this fast train is going or when it is going?
c) Tell me, please, who are your relatives?
d) Tell something about your family. Tell us something. Tell your friends something
about your family.
e) He/she is telling me the news/a story. What about am I speaking to you? What did
you say? What did you tell me?
f) – What will you say? What will I say to you? What will you say to them? – I will say
the truth to him/her/them.
g) He says that he doesn’t know anything. I told him, that it is very bad. He said that he
can't do anything. What can/will you do?
h) – How busy you are mom. I don't like (love) busy people.You are always busy.
– What will you do? I know that you want to play a ball game with me. But
unfortunately, I am busy (don't have time) now.`
      }
    ]
  },
  {
    title: 'Lesson 16',
    blocks: [
      {
        title: 'Text',
        geo: `– გუშინ ავად ვიყავი. გამონაყარი მქონდა და პატარა სიცხე. ექიმი და ექთანი
იყვენენ აქ. ექიმმა წამალი დამინიშნა. ეს მწარე და უგემური წამალია. მაგრამ,
ალბათ, ყველა წამალი ასეთი უგემური არ არის.
– თუ ექიმმა დაგინიშნა, აუცილებლად დალიე! რა გტკივა?
– კისერი, მხარი და ზურგი. მე ხვალ საინტერესო სტუმარი მეყოლება და მოდი
ჩემთან, თუ გინდა.
– ვინ იქნება?
– ერთი საინტერესო მწერალია.
– გმადლობთ, მაგრამ ხვალ არა მცალია. სამწუხაროდ, ძალიან დაკავებული ვარ.
– არა უშავს რა.
– ცუდია ავადმყოფობა, არა? აბა, ვის უყვარს? ძნელია სულ საწოლში ყოფნა მთელი
დღე.
– რა თქმა უნდა, სასიამოვნო არ არის, მაგრამ რას იზამ? იმედი მაქვს, ხვალ ან ზეგ
უკვე კარგად ვიქნები.
– რა თქმა უნდა. აბა, გისურვებ მალე გამოჯანმრთელებას.
– დიდი მადლობა, ჩემო კარგო.
– ნახვამდის.
– კარგად იყავით.
ადამიანის სხეულის ნაწილებია: თავი, ხელები, ფეხები, კისერი, მხარი, ზურგი,
მუცელი, მკერდი, ხერხემალი. ადამიანს აქვს ორგანიზმი – ეს არის მისი სხეული, ანუ
ტვინი, გული, ფილტვი, ღვიძლი, ნაწლავი, თირკმელი, ძვალი, კუნთი, სისხლი,
ხერხემალი.
– მოგწონს ამ ქალის გარეგნობა? – დიახ. ლამაზი ტანი აქვს და ლამაზი სახე. რა
მოგწონს ამ მსახიობის გარეგნობაში? – კანი, შუბლი, თვალები, ნიკაპი, ცხვირი,
ტუჩები, კბილები, ლოყები, წარბები, წამწამები, თმები და მკერდი. მას ლამაზი
ტანი აქვს და ლამაზი სახე. ლამაზ სხეულში ლამაზი სულია, იცი? – საინტერესოა!
– ეს მსახიობიც ძალიან ლამაზია. – არა უშავს.`,
        eng: `– Yesterday I was ill. I had a rash and a small fever. The doctor and nurse were here. The
doctor prescribed medicine to me. This is bitter and bad tasting medicine. But probably
not all medicine tastes so bad.
– If the doctor prescribed it, you certainly drink it! What hurts?
– The neck, the shoulder and the back. Tomorrow I will have an interesting guest and
come at my place, if you want.
– Who will it be?
– An interesting writer.
– Thank you, but I don't have time tomorrow. Unfortunately I am very busy.
– No problem.
– Illness is bad, isn't it? Well, who loves it? It's difficult to be in bed all day long.
– Of course it's not pleasant, but what can you do? I hope tomorrow or the day after
tomorrow I will already be well.
– Of course. Well, I wish you to recover soon.
– Thank you very much, my dear.
– Goodbye.
– Be well.
The parts of the human body are: a head, hands, feet, a neck, a shoulder, a back, an abdomen,
a chest, a spine. A human has an organism – this is his body or a brain, a heart, lungs,
intestines, kidneys, bones, muscles, blood, a spine.
– Do you like this woman's appearance? – Yes. She has a beautiful body and a beautiful face.
What do you like about this artist's appearance? - Her skin, forehead, eyes, chin, nose, lips,
teeth, cheeks, eyebrows, eyelashes, hair and chest. She has a beautiful body and a beautiful
face. You know, a beautiful body has a beautiful soul. – How interesting! This artist is also
very beautiful. – She's not bad.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) ვიცი, არ გიყვარს ნემსის გაკეთება. მაგრამ თუ საჭიროა, რას იზამ?
b) რა სასიამოვნოა ჯანმრთელად ყოფნა! ხარ კარგად და აქეთ-იქით მოგზაურობა
შეგიძლია.
c) აღმა-დაღმა სიარული და აქეთ-იქით ყურება არაა კარგი. ეს სირცხვილია.
დაჯექი სახლში!
d) – უსურვე დედაჩემს სასიამოვნო მგზავრობა. – სიამოვნებით.
e) რას ისურვებ ახლა?
f) ალაგ-ალაგ თოვლი იქნება ხვალ.
g) ყველას ვუსურვებთ ჯანმრთელად ყოფნას. ჯანმრთელობას გისურვებთ!
h) გაციებს თუ გაცხელებს? გახველებს? რა გტკივა, ზუსტად მითხარი!
i) – კუჭი მტკივა და თავი. სურდოც მაქვს და პატარა სიცხეც. ავადა ვარ. დღეს
ვერ ვარ ჯანმრთელად. იყო ექიმი? – კი, იყო.
j) აქ საავადმყოფოში ავადმყოფები არიან. ერთ ახალგაზრდას აქვს ჩალურჯებული
თვალები, მეორეს ფეხზე აქვს გველის ნაკბენი. ეს ძალიან საშიშია. მესამეს
გამონაყარი აქვს და ექიმმა მაზი დაუნიშნა.`,
        eng: `a) I know you don't love injections. But if necessary, what will you do?
b) How nice it is to be healthy! You are well and you can travel here and there.
c) Walking up and down and looking here and there is not good. This is a shame. Sit
down at home!
d) – You wished my mom a pleasant journey. – With pleasure.
e) What do you wish now?
f) Snow will be at some places tomorrow.
g) We wish everyone to be healthy. We wish you all health!
h) Does it make you cold or hot? Do you have a cough? What's hurting you? Tell me
exactly!
i) – My stomach and head hurts. I also have a cold and a small fever. I am ill. Today I'm
not healthy. Was the doctor here? – Yes, he was here.
j) Here there are many sick people in the hospitable. One young person has bruised
eyes, the second has snake bites on her leg. This is very dangerous. The third person
has a rash and the doctor prescribed a cream.`
      },
      {
        title: '2. Translate and expand the sentences',
        isList: true,
        geo: `a) როგორა ხარ? ხარ ავად? მალე გამოჯანმრთელებას გისურვებთ.
b) გშია? გცივა? გცხელა?
c) მითხარი ავადმყოფების შესახებ საავადმყოფოში.
d) ადამიანის გარეგნობა: თავი და სხეული. თითოეულ ადამიანს აქვს ფეხები,
ხელები, სახე, ზურგი, მხარები, კისერი, მუცელი, კანი, ცხვირი, პირი, ტუჩები,
კბილები, ლოყები, ნიკაპი, ყურები, თვალები, წარბები, წამწამები, თმა.
e) ადამიანის ორგანიზმს აქვს ტვინი, გული, სული, ფილტვები, ღვიძლი,
ნაწლავი, ხერხამალი, თავის ქალა, ძვალები, კუნთები და სისხლი.
f) მალე გამოჯანმრთელებას ვუსურვებ შენს მეგობარს.`,
        eng: `a) How are you? Are you ill? I wish you and him to recover soon.
b) Are you hungry? Are you cold? Are you hot?
c) Tell me about ill people in the hospital.
d) The human appearance: head and body. Each human has legs, hands, a face, a back,
shoulders, a neck, stomach, skin, nose, mouth, lips, teeth, cheeks, a chin, ears, eyes,
eyebrows, eyelashes and hair. (Make a few sentences using these words.)
e) The human organism has a brain, a heart, a soul, lungs, a liver, intestines, a spine, a
skull, bones, muscles and blood.
f) I wish good health to your friend.`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) ესენი ცუდ დღეში არიან. სამ მათგანს ტანი და სახე აქვთ დამწვარი. ერთ ქალს
თირკმელი სტკივა.
b) ავადმყოფობა ძნელია და მალე გამოჯანმრთელდი!
c) – შავ დღეში ვარ! ყველაფერი მტკივა. მცივა, მშია, მწყურია და ავად ვარ. – სად
ხარ ასეთ დღეში? რატომ ხარ ასე? სად არიან შენი ნათესავები?
d) აქ ერთი სტუდენტია ცუდად. ფილტვები და ღვიძლი სტკივა. ის ძალიან ახველებს.
e) – ეს ექიმი შუა ხნის ასაკისაა. აი, ექთანი კი ახალგაზრდა და ლამაზი გარეგნობის
ქალია. – შენ, ალბათ, ავად არა ხარ. – აბა, აქ რა მინდა? – ეგ მე არ ვიცი!
f) – იქნებ ვცდები, მაგრამ არ მინდა ნემსის გაკეთება. – დიახ, ნამდვილად ძალიან
სცდებით. ეს საჭიროა თქვენთვის. – მომიტევეთ ეს შეცდომა. – არა უშავს!
g) – ეს საავადმყოფო აქედან ახლოა თუ შორს? – აქვეა. ახლოს.
h) – შორს არის თბილისი აქედან? – არც ისე.
i) კბილი მტკივა და ლოყა მაქვს გასიებული.
j) ამ მოხუც კაცს ექიმმა წვეთები და მაზი დაუნიშნა. ვუსურვებთ მალე
გამოჯანმრთელებას.
k) სამწუხაროდ, ამ ახალგაზრდა ექთანმა ნემსის გაკეთება ჯერ კარგად არ იცის.
მაგრამ ლამაზი მაინც არის.
l) ტვინი, ჭკუა, გული და სული აუცილებელია ნორმალური ჯანმრთელი
ადამიანისათვის.
m)შეიძლება, ვცდები, მაგრამ, ჩემი აზრით, ამას ოპერაცია ნამდვილად არ უნდა.
n) ერთი შეხედვით, არა უშავს, ლამაზი გარეგნობის ქალბატონია.
o) თავი ხშირად გტკივათ თუ იშვიათად?`,
        eng: `a) These people are a bad situation. Three of them have burns on their body and face.
One woman has pain in her kidney.
b) Illness is difficult, so recover soon!
c) – I'm in a bad situation! Everything hurts. I'm cold, hungry, thirsty, and I am ill.
d) – Where are you these days? Why are you so? Where are your relatives?
e) Here one student is not feeling well. Her lungs and liver hurt. She is coughing a lot.
f) – This doctor is middle aged. Here, however the nurse has a young and beautiful
woman. – You're probably not ill. – Well, what do you want here? – This I don't
know.
g) – I may be wrong, but I don't want an injection. – Yes, you are very wrong. This is
necessary for you. – Forgive me this mistake. – No problem!
h) – Is this hospitable near or far from here? – It's here. It's near.
i) – Is Tbilisi far from here? – Not really.
j) My tooth hurts and my cheek is swollen.
k) The doctor prescribed drops and cream for this old man. We wish him to recover
soon.
l) Unfortunately, this young nurse doesn't know how to give injections well. But at least
she is beautiful.
m)The brain, mind, heart, and soul are necessary for normal human health.
n) I may be wrong, but in my opinion, he really shouldn't be operated on.
o) At first glance, the lady's appearance is not bad.
p) Does your head hurt often or infrequently?`
      }
    ]
  },
  {
    title: 'Lesson 17',
    blocks: [
      {
        title: 'Text',
        geo: `ჩვენ საქართველოში გვაქვს შესანიშნავი ტრადიციები. ჩვენი ტრადიციაა სტუმარ-
მასპინძლობა და ქართული სუფრა. აქ არაჩვეულებრივი თამადები გვყავს. მათ
მშვენიერი სადღეგრძელოები იციან. სუფრაზე არის ყოველთვის კარგი გუნება-
განწყობა. აქ უყვართ სუფრასთან ხუმრობა, მომხიბვლელი სიმღერა და ლექსი, ასევე
მიმზიდველი ცეკვა და თამაში. ასეთი დიდი კულტურის ქვეყანაა საქართველო. შორი
მანძილია საქართველომდე?
სხვათაშორის, ჩვენ შესანიშნავ ხასიათზე ვართ. აქ ყველა გახარებულია, დღეს ხომ
დღესასწაულია. დღეს ჩვენს ოჯახში ბევრი სტუმარია. აქ არიან ჩვენი ნათესავები,
ბიძაშვილები, მამიდაშვილები, დეიდაშვილები და ასე შემდეგ.
– ამ პატარა ბავშვს ბურთი უნდა? – არა ზღაპარი უნდა. – ეს არის თარგმანი
ქართულიდან კორეულად. აქ არის მოთხრობები და ზღაპრები ბავშვებისთვის. აბა,
შენ იცი, ახლავე დაჯექი და ჭამე საჭმელი. რატომ არ გინდა? ეს ბავშვი რატომ არის
გაბრაზებული? რატომ ხარ ცუდ ხასიათზე? საერთოდ, ეს უხასიათო ბავშვია? – არა, ეს
კარგი ხასიათის ანუ კარგი ბუნების ბავშვია, მაგრამ ახლა, სამწუხაროდ, ცოტა ავად
არის.
– სიხარული და მწუხარება და და ძმაა. – ვინ თქვა ეს? – მე ვამბობ ამას. – არ არის
სიმართალე? ეს ხუმრობაა? – არ ვხუმრობ. ეს სიმღერაც დავიწყე და დავამთავრე უკვე.`,
        eng: `In Georgia we have remarkable traditions. Our tradition is hospitality and the Georgian table
– supra. Here we have brilliant toastmasters. They know wonderful toasts. There is always a
good mood at the supra. Here at the supra they love joking, amazing songs and poems,
attractive dancing too and games. Georgia is such a country of great culture. Is it a far
distance to Georgia?
By the way, we are in a remarkable mood. Here everyone is joyful, as today is a celebration.
Today there are many guests in our family. Here are our relatives, cousins and so on.
– Does this small child want a ball? – No he want's a fairytale. This is a translation from
Georgian in Korean. Here are stories and fairytales for children. Here we go, sit down right
now and eat your food. Why don't you want it? Why is this child angry? Why are you in a
bad mood? Is this child generally ill mannered? – No, this child is of good character or is
good natured, but now unfortunately, he is a little ill.
– Joy and sorrow are sister and brother. – Who said this? – I said this. Is this not the truth? Is
this a joke? – I'm not joking. I started and finished this song already.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) ახლა ჩვენი მასპინძელი სუფრას შლის. აქ კარგი მასპინძლობა იციან. ეს
სტუმარ-მასპინძლობა მართლაც სასიამოვნო ტრადიციაა.
b) სტუმარ-მასპინძლობა ხომ მართლაც არაჩვეულებრივი და მომხიბლავი
ტრადიციაა.
c) – რას იტყვი ქართული ტრადიციების შესახებ? – რაც შეეხება ქართულ
ტრადიციებს, მე ბევრი რამე ჯერ არ ვიცი. მხოლოდ ახლა ვსწავლობ.
d) – როგორ მოგწონს ამ ლექსის ინლისური თარგმანი? – ვინ თარგმნა ეს
კორეულიდან ინგლისურად? – ეს ინგლისურ ენაზე თარგმნა ერთმა კარგმა
პოეტმა, სხვათაშორის.
e) ეს ხილი ჩემს ჩანთაში არ ეტევა. მომაწოდე, ეგ დიდი ჩანთა.
f) ბედნიერებაა აქ ყოფნა. მძიმე ავადმყოფობა უბედურებაა.
g) – როგორია თქვენი გუნება-განწყობა? – მშვენიერი! კარგი მასპინძელი ხომ
მუდამ კარგ ხასიათზეა.
h) ნახვამდის. ყველაფერს აქვს დასაწყისი და დასასრული. – რა თქმა უნდა.
i) – რა მახინჯი სურათია? ვისია? – არ ვიცი. რატომ არ მოგწონს?
j) ეს ცხოვრებაა თუ მხოლოდ არსებობა? აღარ შემიძლია აქ ასე ყოფნა!`,
        eng: `a) Now our host set the table. Here they know good hospitality. This hospitality is a
truly pleasant tradition.
b) Hospitality is a truly unusual and amazing tradition.
c) – What did you say about Georgian traditions? – Concerning Georgian traditions,
there are many I still don't know. Only now do I am learning about them.
d) – How do you like the English translation of this poem? – Who translated this from
Korean to English? – One good poet translated this into the English language, by the
way.
e) This fruit doesn't fit in my bag. Pass me, that big bag.
f) It's fortunate to be here. A heavy illness is unfortunate (a tragedy).
g) – How is your mood? – Wonderful! A good host is always in a good mood.
h) Goodbye. Everything has its beginning and its ending. – Of course.
i) – What an ugly picture! Whose is it? – I don't know. Why don't you like it?
j) Is this living or only existence? I can no longer stay (be) here this way!`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) სასიამოვნო ტრადიციებია კორეაში.
b) იცი რამე კორეული ტრადიციების შესახებ? იცი რამე მათი კულტურიდან?
c) – ეს კარგი თარგმანია? – კი, აქ არის ინგლისური მოთხრობები და ლექსები.
d) გაქვს რაიმე ზღაპრები ბავშვებთვის?
e) ქართველი ოჯახები არიან ძალიან სტუმართმოყვარე. მათ მოსწონთ ცეკვა და
სიმღერა სუფრასთან.
f) ცუდ ხასიათზე ხარ?
g) – ვინ არის მუდამ ცუდ ხასიათზე? – მას აქვს ცუდი ხასიათი, სხვათაშორის.
h) ეს ბედნიერებაა. ბედნიერი ვარ. ბედნიერი ხარ? რატომ ხარ ასე უბედური?
i) გასაგებია, რომ უნდა წავიდე და შენ უნდა მოხვიდე.
j) გუშინწინ მან დახატა ეს სურათი. ის დახატავს მას მაზეგ/ორ დღეში.`,
        eng: `a) There are nice traditions in Korea.
b) Do you know any Korean traditions? Do you know anything from their culture?
c) – Is this a good translation? – Yes, here are English stories and poems.
d) Do you have some fairytale stories for children?
e) Georgian families are very hospitable. They like dancing and singing at the
table/party.
f) Are you in a bad mood?
g) – Who is always in a bad mood? – He has a bad character by the way.
h) It’s happiness. I’m happy. Are you happy? Why are you so unhappy?
i) It’s clear that I must go and you must come.
j) The day before yesterday she painted this picture. She will paint it in two days.`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) სხვათაშორის, ახლა კაცი ხატავს სურათს და გუშინ კი ქალმა დახატა სურათი.
b) კაცს დაუხატავს სურათი ქალისთვის. კაცი ხატავს სურათს. კაცი უხატავს
სურათს ქალს.
c) ბავშვი დედას უხატავს ვაშლს. ბავშვი ხატავს ვაშლს. დედა ხატავს ვაშლს
ბავშვისთვის. დედა უხატავს ვაშლს ბავშვს.
d) – არ შეიძლება მასპინძლის გაბრაზება! გასაგებია? – კი ბატონო. – დიდი
შეღავათი.
e) – რას იტყვი ხვალ ამის შესახებ? – რაც შეეხება თქვენს სტუმარ-მასპინძლობას,
ეს მართლაც ჩინებული ტრადიცია გაქვთ. მე მომწონს.
f) ჩემი ნათესავები სტუმართმოყვარე ადამიანები არიან და მეც მიყვარს მათი
სტუმრობა. ესენი მაღალი კულტურის ადამიანები არიან. სამწუხაროდ, მათ
სოფლამდე შორი მანძილია.
g) ჩინებულია ამ ლექსის დასაწყისი და დასასრული. არაჩვეულებრივი ლექსია.
ქართველებს უყვართ პოეზია. მათ იციან ლექსი.`,
        eng: `a) By the way, now the man is painting a picture and yesterday the woman painted a
picture.
b) The man had painted a picture for the woman. The man is painting a picture. The
man is painting a picture for the woman.
c) The child is painting an apple for (his/her) mother. The child paints an apple. The
mother is painting an apple for the child. The mother paints the apple for the child.
d) – I can't be angry with the host! Is that clear? – Of course. – (It's) a big privilege.
e) – What will you tell about it tomorrow? – Concerning your hospitality, this is truly a
great tradition you have. I like it.
f) My relatives are hospitable people and I also love to be their guest. These are high
cultured people. Unfortunately, it's a far distance to their village.
g) This poem's beginning and ending is great. It is a unique poem. Georgians love poetry.
They know the poem.`
      }
    ]
  },
  {
    title: 'Lesson 18',
    blocks: [
      {
        title: 'Text',
        geo: `– ახლა ვაპირებ ტანსაცმლის მაღაზიაში წასვლას. ჩემთვის პალტოს ყიდვა მინდა და
ჩემი ქმრისთვის კი რუხი პიჯაკის. მომაწოდეთ, გეთაყვა, ეგ თეთრი კაბა და ყვითელი
პულოვერი. ეს ულამაზესი შარფი ვისია? – ეს კეპი ხომ არ გინდათ ბავშვისთვის?
– არა, ჩემს შვილს ქუდი უნდა. აქ რა გაქვთ ტანსაცმლის კარადაში? – კოსტიუმები,
ჟაკეტი, კაბები, შარვლები, პერანგები, საცვლები, ნასკები და ასე შემდეგ. აქ ასევე არის
თქვენთვის ფეხსაცმელი. – ეს ბოტასები არ მომწონს.
– ნანა, ეგ კაბა ძალიან გიხდება.
– ეს კაბაა მოკლეა. ასეთი კაბის ჩაცმას მე არ ვაპირებ. სხვა უნდა ვიყიდო ამ
მაღაზიაში. სხვათაშორის, ეს გამყიდველი ჩემი ძველი ნაცნობია. იცის ჩემი
ხასიათი. მე მომწონს დიდი და ფერადი ტანსაცმელი. დღეს ვაპირებ შარვლისა და
ბოტასების ყიდვას? შენ რა გინდა? რას აპირებ?
– მე ხვალ უნდა ვიყიდო ფეხსაცმელი და ტანსაცმელი ჩემი ბავშვისათვის. ახლა კი
არა მცალია, მეჩქარება, მატარებელზე მაგვიანდება.
– სად მიდიხარ? ჯერ სამსახურში მივდივარ. მერე კი მე უნდა ვიყიდო ბოსტნეული
და ხილი საღამოს. სამწუხაროდ, ჩემი ქმარი შეუძლოდაა.
– ნახვამდის. შენს ქმარს ვუსურვებ მალე გამოჯანმრთელებას!
– დიდი მადლობა. კარგად იყავი.`,
        eng: `– Now I intend to go to the clothing shop. I want to buy a coat for me and a gray jacket for
my husband. Please pass me that white dress and the yellow sweater. Whose is this the most
beautiful scarf? – Don't you like this cap for (your) child? – No, my child wants a hat. What
clothes do you have here in the wardrobe? – Suits, a cardigan, dresses, pants (trousers), shirts,
underwear, socks and so on. Here, there are also some shoes for you. – I don't like these
sneakers.
– Nana, that dress really suits you.
– This dress is short. I don't intend to wear such a dress. I want to buy another one at this
shop. By the way, this salesman is an old acquaintance. He knows my character. I like big
and colorful clothing. Today I intend to buy trousers and sneakers. What do you want?
What do you intend to do?
– Tomorrow I want to buy shoes and clothes for my child. But now I don't have time, I'm
in a hurry, I'm getting late for the train.
– Where are you going? I'm going to my work. Later I need to buy (some) vegetables and
fruit this evening. Unfortunately my husband is ill.
– Goodbye. I wish your husband to recover soon!
– Thank you very much. Be well.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) – მიხდება ეს ქურთუკი? – არა. მე შენი ძველი პალტო უფრო მომწონდა.
b) როგორ გიხდებათ ეს კოსტიუმი და წითელი ჰალსტუხი!
c) თამარს არ უხდება ეს პულოვერი და ქვედა კაბა. ნამდვილად დიდია ეს
ტანსაცმელი და არც ეს ფერები არ უხდება სახეზე.
d) – როგორ მიხდება ეს პერანგი? – ძალიან გიხდება.
e) – მომაწოდეთ, თუ შეიძლება, ნემსი და შავი ძაფი. – ინებეთ, გეთაყვა.
f) ეს კაცი ჩემი ძველი ნაცნობია. ეს ქალი კი უცნობია.
g) ეს სიმღერა ჩემთვის კარგადაა ნაცნობი. ეს კარგად ნაცნობი სიმღერაა.
h) საქართველო ცნობილია თავისი სტუმარ-მასპინძლობით.
i) ეს ჩანთა იმისთვის მინდა, რომ მაღაზიაში მივდივარ.
j) – ვიცი, რომ ეს მე არ მიხდება, ამიტომ ახალი რამე უნდა ვიყიდო. – არ გიყვარს
ახალი ტანსაცმელი?`,
        eng: `a) – Does this coat suit me? – No. I liked your old coat more.
b) (Look) how this suit and red tie suits you!
c) This sweater and shirt does not suit Tamar. These are really big clothes and these
colors do not suit her face.
d) – How does this shirt suit me? – It suits you very much.
e) – Please pass me the needle and black thread. – Here you are please.
f) This man is an old acquaintance of mine. And this woman is a stranger.
g) For me this song is well known. This is a well known song.
h) Georgia is well known with its hospitality.
i) I want this bag because I'm going to the store.
j) I know that this doesn't suit me. Because of this I need to buy something new. Don't
you love new clothes?`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) სად მიდიხარ? საიდან მოდან ისინი?
b) – ტანსაცმელის მაღაზიაში მიდიხარ? – კი, უნდა ვიყიდო ტანსაცმელი.
c) – რისი გინდა ყიდვა? – უნდა ვიყიდო ახალი კოსტიუმი და ჰალსტუხი ჩემი
ძმისთვის.
d) – როგორა ხარ? – შეუძლოდ ვარ. მივდივარ ექიმთან. გუშინ მე მივედი
საავადმყოფოში, მაგრამ კვირა იყო და არავინ არ იყო იქ.
e) – მიხდება? – მომწონს ეს ფერი! კი, ეს კარგია შენთვის.
f) მომაწოდეთ, გეთაყვა, ეს ჩექმები.
g) აი, არის ნემსი და მწვანე ძაფი. გინდა?
h) ჩემი ტანსაცმელი არ ეტევა კარადაში. მეტისმეტად ბევრი ნივთია.
i) პერანგის სახელო და საყელო არის ყავისფერი. ეს უნდა ვიყიდო!
j) მაქვს სამი ღილი ჯიბეში. რა გაქვს ჯიბეში?`,
        eng: `a) Where are you go? Where are they coming from?
b) – Are you going to the clothing shop? – Yes, I must buy some clothes.
c) – What do you want to buy? – I must buy a new suit and a tie for my brother.
d) – How are you? – I’m ill. I’m going to the doctor. Yesterday I went to the hospital, but
it was Sunday and nobody was there.
e) – Does it suit me? – I like this color! Yes, it’s good for you.
f) Please, pass me these boots.
g) Here is a needle and a green thread. Do you want it?
h) My clothes don’t fit my cupboard. There are too many things.
i) The sleeves and collar of this shirt are brown. I must buy this!
j) I have three buttons in my pocket. What do you have in your pocket?`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) ეს ამ კაცის პალტოა. მას უყვარს კარგი ჩაცმა-დახურვა. ნახე, რა ლამაზი
კოსტუმი აცვია.
b) – სად მიდის ეს ქალი? – ეს ქალი აქ მოდის.
c) – რა დახატა ამ ბავშვმა გუშინ? – არ ვიცი. მე მგონი, ქალის ტანსაცმელი
დახატა.
d) ეს კაბა იმაზე უკეთესია. ამიტომ ეს უნდა ვიყიდო. სად არის გამყიდველი? არ
მოდის?
e) ამ გოგოს უმეტესად შარვალი აცვია. ის უმეტესად შარვლით დადის. მას
ხშირად აცვია შარვალი, მას არ მოსწონს კაბით სიარული. მას მაინცადამაინც
არ უყვარს კაბის ტარება.
f) – ის მიდის თუ მოდის? – ეს მივიდა იქ და ის მოვიდა აქ. ეგ მოვა აქ. ეს კაცი
მივა იქ.
g) – შენ სად მიდიხარ? – მე უნივერსიტეტში მივდივარ. ის კი მაღაზიაში მიდის
და მერე ჩვენთან მოვა.
h) მე ლურჯი ჯინსები მინდა ვიყიდო. არ მინდა ამ თეთრი ჯინსების ყიდვა.
მითხარით, რა ღირს ეს შარვალი?
i) რა უწესრიგობაა აქ? ეს მცდარი აზრია. ეს არასწორი აზრია.
j) მაწვნის ჭამა არ მინდა. მივდივარ.`,
        eng: `a) This is this man's coat. He loves to dress well. See, what a handsome suit he wears.
b) – Where is this woman going? – This woman is coming here.
c) – What did this child paint yesterday? – I don't know. I think, he/she painted the
woman's clothing.
d) This dress is better than that. I must buy it because of this. Where is the salesman?
Isn't he coming?
e) This girl wears trousers mostly. She mostly walks in trousers. She often wears
trousers. She doesn't actually like to walk in a dress.
f) – Is he/she coming or going? – He(/she) went there and (he/)she came here. He/she
will come here. This man will go there.
g) – Where are you going? – I'm going to the university. He/she is going to the store and
after he/she will come with us.
h) I want to buy dark blue jeans. I don't want to buy these white jeans. Tell me, how
much do these trousers cost?
i) What, there is disorder is here? This is a wrong idea. This is an incorrect idea.
j) I don't want to eat yogurt. I'm leaving.`
      }
    ]
  },
  {
    title: 'Lesson 19',
    blocks: [
      {
        title: 'Text',
        geo: `ქართულ ენაში არის ასეთი რთული სიტყვები: შარვალ-კოსტიუმი, წვერ-ულვაში,
პირი-სახე, ცხვირ-პირი, დანა-ჩანგალი, ტყე-ველი, მთა-ბარი, ავ-კარგი, სიკვდილ-
სიცოცხლე, შიშველ-ტიტველი, მშიერ-მწყურვალი, კარ-ფანჯარა, სახლ-კარი. ეს
მარტივი წინადადებაა თუ რთული?
– გაღიმება გიხდება. ღიმილი ხომ ყოველთვის სასიამოვნოა. ხომ კარგ გუნებაზე ხარ?
– ცხოვრება რთულია, მაგრამ სიყვარული მაინც მარადიულია. – შენ რას იტყვი? – მე
არაფერს ვიტყვი, ისე დავჯდები, სიჩუმე გიყვარს?
– მე მიმაჩნია, რომ ეს ახალგაზრდა ქალი ცოტა მსუქანია, მაგრამ ძალიან
მოხერხებულია. შენ კი მოუხერხებელი ხარ. შენ თუმცა გამხდარი ხარ, მაინც აშკარად
მოუხერხებელი ხარ. შეხედე, ეს ახალგაზრდა ქალი როგორ დაჯდა დაბალ სკამზე და
რა ლამაზად ზის. – ნუ მოდიხარ აქ. არა უშავს რა. იდექი, სადაც დგახარ. აქ სკამები
დაკავებულია და ვერ დაჯდები. – ის ქალი, რომელიც აქ იდგა, ახლა სად ზის? – არ
ვიცი, აქ სხვები სხედან. – ძალიან საწყენია, თუ უკვე წავიდა. მე ხომ მასთან საქმე
მაქვს.
– ის დაბალი და მსუქანი კაცი რა პროფესიისაა, თუ იცით?
– მე მგონი, ექიმია და როგორც ამბობენ, ძალიან კარგი სპეციალისტია.
– არ ვიცი, თუ როგორი სპეციალისტია, მაგრამ ის ვიცი, რომ ძალიან კარგი მამაა და
შესანიშნავი შვილები ჰყავს.
– ზრდილობა განსაკუთრებით კარგი თვისებაა ადამიანში. არ მიყვარს უზრდელი
ბავშვები.
– რა თქმა უნდა.`,
        eng: `In the Georgian language there are such complex words: a trouser and a suit, mustaches and
beards, a face (a mouth and a face), a face (nose and a mouth), a knife and a fork, a forest and
a valley, a mountain and a valley, bad and good, death and life, naked, hungry and thirsty, a
door and a window, a house and a yard. Is this a simple or complex sentence?
– A smile suits you (with a smile you look nice). A smile is always pleasant. Are you in a
good mood? – Life is complex, but love at least is immortal. – What will you say? – I'll not
say anything, I will sit down so. Do you love silence?
– I consider that this young lady is a little fat, but she is is very comfortable with her body
and you are awkward (uncomfortable). Although you are thin, however you are obviously
very uncomfortable (awkward). Look how this young woman sat down on the low chair and
how beautifully she sits. – Don't come here. It's OK. Stay where you are standing. The chairs
are occupied here and you can't sit here. – That woman who stood here, where is she sitting
now? – I don't know, the others are sitting here. – It’s a pity, if she already left. I have a deal
with her.
– If you know, what's the profession of that short and a bit fat man?
– I think he is a doctor and as they say, he's a very good specialist.
– I don't know, what kind of specialist he is, but I know that he's a very good father and
has remarkable children.
– Politeness is an especially good trait in people. I don't like (love) impolite children.
– Of course.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) ესენი თქვენი მეზობლები არიან? სად მიდიან? რატომ დგანან აქ?
b) – ეს ნივთი იმ ბავშვს მივეცი და მან კი ეს საგნები მომცა. – რა საგნებია?
c) ეს გამხდარი მაღალი გოგო აშკარად უზრდელია. როგორ დგას?
d) ლომი წევს გალიაში მშიერ-მწყურვალი, მე კი ჩემს სახლში მივდივარ
სადილად. მგელივით მშია და ცუდ ხასიათზე ვარ.
e) ჩემი მასწავლებელი კლასში მიდის. გაბრაზებულია ჩემზე. მან გუშინ მომცა
საშინაო დავალება და მე კი არ გავაკეთე. ახლა ძალიან ვწუხვარ ამის გამო.
f) – რას იზამ, ახლა გვიანია. – მე კი გუშინ მთელი დღე ვიჯექი და ყველაფერი
გავაკეთე.
g) ეს საინტერესო წიგნი მომცა ჩემმა მეზობელმა ქალმა.
h) მე მგონია, რომ მას არ მოსწონს წიგნის თხოვება.
i) რა საწყენია, რომ ჩემი მიზეზით წევხართ საავადმყოფოში. ძალიან ვწუხვარ.
j) მითხარით ამის მიზეზი?
k) ვერ გავიგე, რა მიზანი გაქვთ, ამას რომ აკეთებთ? მართლაც ძალიან საწყენია.
l) რა უჩვეულო ქაოსია შენთან. შენ ხომ წესრიგი გიყვარს და ახლა რა ხდება?
m)ეს ძალიან უჩვეულო ამბავია, მაგრამ რას იზამ?
n) – მე აბსოლუტურად არ მომწონს ამ ბავშვის ქცევა. მას აშკარად ზრდილობა არა
აქვს. თქვენი აზრით, ეს ბავშვი უზრდელია? – დიახ! მე ის უზრდელად
მიმაჩნია.
o) არავითარ შემთხვევაში არ დავჯდები მასთან. მე ის ძალიან არ მომწონს. ის
უზრდელი ადამიანია. ყოველ შემთხვევაში, მე ასე მიმაჩნია.`,
        eng: `a) Are these your neighbors? Where are they going? Why are they standing here?
b) – I gave this thing to that child, and he/she gave me these things. – What are these
things?
c) This thin, tall girl obviously is impolite. (Look) how she is standing!
d) The lion lays in the cage hungry and thirsty and I'm going to my house to have
dinner. I'm as hungry as a wolf and am in a bad mood.
e) My teacher is going to the classroom. He/she is angry at me. Yesterday he/she gave
me homework and I didn't do it. Now I'm very sorry because of that.
f) – What will you do now that it is late. – Yesterday I on the other hand sat all day and
did everything.
g) – My neighbor (woman) gave me this interesting book
h) I think, that he/she doesn't like to lend out books.
i) What a pity, that it's my fault (by my reason) that you're lying in a hospital. I am very
sorry.
j) Tell me is (this) his/her reason?
k) I don't understand what goal you have for doing this. Truly it is very much a pity.
l) What an unusual mess is at your place. Don't you love order and what's up?
m)This is very unusual news, but what will you do?
n) – I absolutely do not like this child's behavior. He/she obviously does not have good
manners. In your opinion, is this child ill mannered? – Yes! I consider him/her ill
mannered.
o) No way, I will not sit next him/her. I really don't like him/her. He/she is an impolite
person. In any case, I consider it so.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) მან მე მომცა წიგნი. ის მე მომცემს მას ხვალ.
b) ქართულში რთული სიტყვებია: წვერ-ულვაში, თვალ-წარბი, დანა-ჩანგალი,
ტყე-ველი, სიკვდილ-სიცოცხლე, სახლ-კარი, კარ-ფანჯარა, მთა-ბარი, ავ-კარგი,
შიშველ-ტიტველი, მშიერ-მწყურვალი, შარვალ-კოსტიუმი და ასე შემდეგ.
c) მე ის მიმაჩნია ის უზრდელად. მოგწონს იმისი ქცევა?
d) აბსოლუტური სიჩუმეა! მითხარი ერთი წინადადება. მითხარი ერთი სიტყვა!
გააკეთე ეს ერთხელ ან ორჯერ!
e) არ მივდვარ იქ. მე ვიწვები საწოლში ხვალ. მე ვარ ავად.
f) რა არის შენი მიზანი?
g) რა არის ამის მიზეზი?
h) მიმაჩნია, რომ შენ ხარ ძალიან მსუქანი, თუმცა შენ ხარ სასიამოვნო.
i) მე მომცა მისი საგანების უმეტესი ნაწილი, მაგრამ მინდა მეტი.
j) სად მიდიან? სად მივიდნენ?`,
        eng: `a) He gave me the book. She’ll give it to me tomorrow.
b) Complex words in Georgian are: beards and mustaches, eyes and eyebrows, a knife
and fork, forests and valleys, death and life, house and yard, doors and windows,
mountains and valleys, bad and good, bare-naked, hungry and thirsty, suit and
trousers and etc.
c) I consider him impolite. Do you like his behavior?
d) It’s absolute silence! Tell me one sentence. Tell me one word! Do it once or twice!
e) I won’t go there. I’ll lie in my bed tomorrow, I'm ill.
f) What is your goal?
g) What is the reason for this?
h) I consider that you are very fat, although you are nice.
i) He gave me the most part of his things, but I want more.
j) Where do they go? Where did they go?`
      },
      {
        title: '3. Translate',
        isList: true,
        geo: `a) ეს რთული სიტყვებია: წვერ-ულვაში, თვალ-წარბი, დანა-ჩანგალი, ტყე-ველი,
მთა-ბარი, ავ-კარგი, შიშველ-ტიტველი, მშიერ-მწყურვალი, შარვალ-
კოსტიუმი, კარ-ფანჯარა, სახლ-კარი, სიკვდილ-სიცოცხლე.
b) – იცით თუ არა, რა არის სიკვდილ-სიცოცხლე? – მე მიმაჩნია, რომ ეს მთელი
ცხოვრებაა. ეს ხომ ერთი ლამაზი სიზმარია. – ზღაპრებს ჰყვები? – არა, მე
აბსოლუტურ სიმართლეს ვამბობ.
c) – სად ცხოვრობენ ვარსკვლავები და სად მიდის ქარი? – ეგ, აბა, ვინ იცის.
d) სად მიდის მზე? რატომ მოდის მთვარე ზეცაზე? რა არის ჩვენი სამყარო? ვინ
არის ადამიანი? როგორც ამბობენ, რა არის ჩვენი ცხოვრება?
e) რა საწყენია, რომ შეუძლოდ ხართ. ღიმილი ხომ ძალიან გიხდებათ.
f) ქალმა, რომელიც აქეთკენ მოდის, სხვათაშორის, იცის ამ ცხოვრების ავ-კარგი.
g) ეს მარტივი არაა. ბიძაჩვენი აქ მოდის და თანაც გაბრაზებულია ჩვენზე.`,
        eng: `a) These are complex words: beards and mustaches, eyes and eyebrows, a knife and fork,
forests and valleys, mountains and valleys, bad and good, bare-naked, hungry and
thirsty, suit and tie, doors and windows, house and yard, death and life.
b) – Do you know or not, what is life and death? – I consider, that this all life. This is
one beautiful dream. – Are you telling the fairytale stories? – No, I’m saying the
absolute truth.
c) – Where do the stars live and where does the wind go? – This, well, who knows.
d) Where is the sun going? Why does the moon come upon the sky? What is our
universe? What is a human? As they say, what is our life?
e) What a pity, that you are ill. This smile really suits you.
f) The woman coming here, by the way, knows bad and good of life.
g) This is not simple. Our uncle is coming here and in addition he is angry at us.`
      }
    ]
  },
  {
    title: 'Lesson 20',
    blocks: [
      {
        title: 'Text',
        geo: `– დავწერ ლექსს და დავხატავ რამეს. მაგიდაზე ხილია. ყველაფერი აქ არის, რაც
გინდა, მსახლი, ატამი, გარგარი, ქლიავი, ლეღვი, ბალი, ალუბალი, მარწყვი, ჟოლო,
მაყვალი, ფორთოხალი, მანდარინი, ბანანი, საზამთრო, ნესვი, ქოქოსი, თხილი,
ნიგოზი, კაკალი, წაბლი, მიწის თხილი, ქიშმიში, ნუში, ანანასი და ვაშლი. ერთნაირი
ხილი ერთ ადგილასაა. – მე ამას ვერ დავხატავ. ჩემთვის ცოტა ძნელია, აქ ბევრი
ხილია და ამ ყველაფრის დახატვა მართლაც ადვილი არაა.
– ამ მხატვრის ნახატები სულაც არ მომწონს, თუმცა მომხიბლავი ფერები აქვს, მაგრამ
არ ვიცი, ეს რას ნიშნავს. ვერ ვიგებ, რას ნიშნავს ეს სივრცე აქ? – ალბათ, ეს
სერიოზული მხატვრობაა და სერიოზული საკითხებია აქ, როგორც ჩანს. –
სამწუხაროდ, მე კი ვერ ვიგებ ვერაფერს. – ნუ ღელავ, არა უშავს, თუ არ მოგწონს. ისე,
ეს ჩემი ნახატებია. – რად გინდოდათ ამდენი ფილოსოფია?
– ეს წერილი, მე რომ მოგეცი, სად არის? ამის შინაარსი ჩემთვის ჯერაც უცნობია. მე
მაქვს ორი ბილეთი და ამაღამ მივდივარ კინოში. ვინ მოდის ჩემთან ერთად?
არავის უნდა წამოსვლა?
– სიამოვნებით წავალ კინოში თქვენთან ერთად. რა ფილმია?
– ზუსტად არ ვიცი, მაგრამ საინტერესოა. ამ ცხოვრების ფილოსოფიაზეა.
– გასაგებია.`,
        eng: `– I will write a poem and I will paint something. There are fruit on the table. Everything is
here that every you can wish: a pear, a peach, an apricot, a plum, a fig, a cherry, a sour
cherry, a strawberry, a raspberry, a blackberry, an orange, a tangerine, a banana, a
watermelon, a melon, a coconut, a hazelnut, a walnut, a chestnut, a peanut, a raisin, an
almond, a pineapple and an apple. The same kind of fruit are in one place. – I can't paint it.
It's a little difficult for me as there are many fruit here and it’s not truly easy to paint
everything.
– I don't like this artist's paintings at all although they have the amazing colors, but I don't
know what does this means. I can't understand, what is the meaning of this space here?
– This is probably a serious painting and here is a serious question, as it seems. – But
unfortunately I can’t understand everything. – Don't worry if you don't like it. As it is (so),
these are my paintings. – Why for did you need such philosophy?
– Where is this letter that I gave you? Its content is still unknown to me. I have two tickets
and tonight I'm going to the cinema. Who's coming with me? Nobody wants to go?
– It would be a pleasure to go with you to the cinema. What is the film?
– I don't know exactly, but it is interesting. It's about the philosophy of life.
– It's clear.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) – ეს საკითხი, როგორც ჩანს, ფილოსოფიურია. – ეტყობა, ასეა.
b) რომელი ხილი გიყვართ – ვაშლი, ჟოლო, მაყვალი, ფორთოხალი, მანდარინი,
ბანანი, საზამთრო, ნესვი, მსახლი, ატამი, გარგარი, ქლიავი, ლეღვი, კაკალი,
ბალი, ალუბალი, მარწყვი?
c) საერთოდ მე მომწონს ქოქოსი, თხილი, ნიგოზი, წაბლი, მიწის თხილი,
ქიშმიში, ნუში და ანანასი.
d) აქ რა ხმაურია? ეს ძალიან უხერხული ადგილია ჩვენთვის.
e) ამ სიტყვებს ერთნაირი მნიშვნელობა აქვთ.
f) მითხარი, რა შინაარსი ჰქონდა ფილმს? მომიყევი.
g) – ვისა აქვს ბილეთი? – ეს რთული საკითხია.
h) გუშინწინ კინოში ვიყავით და საინტერსო ფილმი ვნახეთ, დღეს კი ისეთი
უინტერესო ფილმია, რომ ვერ გავიგე დასაწყისი და დასასრული. არ მესმის
ამის მნიშვნელობა და შინაარსი. რა ხდება და რატომ ხდება?
i) ეს სერიოზული ფილოსოფიაა. არასერიოზულია თუ უსერიოზულესი?
j) – ჩემი აზრით, ამაღამ ხმაური უხერხულია. – ნუ ნერვიულობთ.`,
        eng: `a) – This matter, it seems, is philosophic. – It seems, it is so.
b) Which fruit do you love – apples, raspberries, blackberries, oranges, tangerines,
bananas, watermelons, melons, pears, peaches, apricots, plums, figs, walnuts, cherries,
sour cherries, strawberries?
c) Generally I like coconuts, hazelnuts, walnuts, chestnuts, peanuts, raisins, almonds and
pineapples.
d) What is noisy here? This is a very awkward place for us.
e) These words have the same meaning.
f) Tell me, what content did the film have? Tell me about it.
g) – Who has the ticket? – This is a complex matter.
h) The day before yesterday we were at the cinema and we saw an interesting film,
today however I saw such an uninteresting film, that I don't understand the
beginning and ending. I don’t understand its meaning and content. What is
happening and why is it happening?
i) This is serious philosophy. Is it not serious or the most serious?
j) – In my opinion, the noise tonight is uncomfortable (awkward). – Don't be nervous.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) I love fruit – walnuts, hazelnuts, peanuts, almonds, chestnuts, raisins, tangerines,
watermelons, melons, coconuts, bananas and apples.
b) Do you have some nuts or walnuts?
c) Did they paint this wide space and the sea?
d) I don’t understand the meaning and the content of this film. It’s not serious.
e) It was a very uninteresting film, but I had the ticket and we went to the cinema.
f) Don’t worry, I’ll write a letter to you and I’ll come to you.
g) It seems, they didn’t write their homework.
h) This means, that it’s awkward.
i) This place has much space. I like it.
j) You don’t need much philosophy. Sit down and eat this food.
3. Please conjugate the verb “to make” კეთება in the I series. Example: ვაკეთებ,
ვაკეთებდი, ვაკეთებდე, etc...`,
        eng: `a) მე მიყვარს ხილი – ნიგოზი, თხილი, მიწის თხილი, ნუში, წაბლი, ქიშმიში,
მანდარინი, საზამთრო, ნესვი, ქოქოსი, ბანანი და ვაშლი.
b) შენ კაკალები გაქვს თუ ნიგოზი?
c) მათ დახატეს ეს ფართო სივრცე და ზღვა?
d) ვერ გავიგე ფილმის მნიშვნელობა და შინაარსი. ეს არა სერიოზულია.
e) ძალიან უინტერესო ფილმია, მაგრამ მე მაქვს ბილეთი და წავედით კინოში.
f) ნუ ღელავ, მე მოგწერ წერილს შენ და მოვალ შენთან.
g) როგორც ჩანს, მათ არ დაწერეს მათი საშინაო დავალება.
h) ეს ნიშნავს, რომ ეს უხერხულია.
i) ამ ადგილს აქვს ასეთი სივრცე. მე ეს მომწონს.
j) არ საჭირო ასეთი ფილოსოფია. დაჯექი და ეს საჭმელი შეჭამე.
3. Please conjugate the verb “to make” კეთება in the I series. Example: ვაკეთებ,
ვაკეთებდი, ვაკეთებდე, etc...
ვაკეთებ აკეთებ აკეთებს ვაკეთებთ აკეთებთ აკეთებენ
ვაკეთებდი აკეთებდი აკეთებდა ვაკეთებდით აკეთებდით აკეთებდნენ
ვაკეთებდე აკეთებდე აკეთებდეს ვაკეთებდეთ აკეთებდეთ აკეთებდნენ
გავაკეთებ გააკეთებ გააკეთებს გავაკეთებთ გააკეთებთ გააკეთებენ
გავაკეთებდი გააკეთებდი გააკეთებდა გავაკეთებდით გააკეთებდით გააკეთებდნენ
გავაკეთებდე გააკეთებდე გააკეთებდეს გავაკეთებდეთ გააკეთებდეთ გააკეთებდნენ`
      }
    ]
  },
  {
    title: 'Lesson 21',
    blocks: [
      {
        title: 'Text',
        geo: `– მინდა გავაკეთო დღეს რამე საინტერესო! შენ რა უნდა აკეთო? გინდათ დახატოთ
შინაური ცხოველები? – მას შეუძლია არ დახატოს შინაური ფრინველები და
ცხოველები და თუ უნდა, თავისი ბინა დახატოს. ასე ჯობია. მან დახატა თავისი
სახლი ეზოთი და მაღალი ღობით. მისი სახლი არის ქალაქის დიდ მოედანთან. მას
ეზოში აქვს ავტოფარეხიც. მისი ბინა კი არის სამოთახიანი. მას აქვს საძინებელი,
კაბინეტი და მისაღები, აგრეთვე იქ არის სამზარეულო და აბაზანა ტუალეტით. – მან
რომელი ოთახი დახატა? – გუშინწინ მან ჯერ დახატა საძინებელი, სადაც არის
საწოლი ლეიბით, საბნითა და ორი ბალიშით. იქვეა ტანსაცმლის კარადა და იატაკზე
ლამაზი ფერადი ხალიჩა. გუშინ ის მთელი დღე ხატავდა მისაღებ ოთახს როიალზე
შანდლებით, შანდლებში სანთლებით, ბუხრით, ჭერზე დიდი ჭაღით და ფერადი
ვაზებით ფანჯრებთან. ახლა ის ხატავს მარანს, სადაც არის დიდი ხილით სავსე
კალათა, ღვინით სავსე ქვევრები და მაგიდაზეა ცარიელი ყანწები. ხვალ მან უნდა
დახატოს სამზარეულო და აბაზანა ან სასადილო ოთახი. – რას დახატავს ის ხვალ?
– ის ხვალ, ალბათ, დახატავს თავის მშობლებსა და ნათესავებს. – კარგი იქნება, მეც
რომ ასე ვხატავდე. ნეტავ ასე ვხატავდე, ან ლექსებს მაინც ვწერდე შენსავით.`,
        eng: `– I want to do something interesting today! What do you want to do? Do you want to paint
the domestic animals? – He/she may not paint the domestic birds and animals and if he
wants he can paint his own apartment. This is better. He painted his own house with a yard
and a tall fence. His house is by the city's big square. He also has a garage in the yard. But his
apartment is a three-room apartment. It has a bedroom, a study and living room, also a
kitchen and a bathroom with a toilet. – Which room did he paint? – The day before
yesterday he painted the bedroom, where there is a bed with a mattress, with a blanket and
with two pillows. Nearby there is a wardrobe and on the floor there is a colorful carpet.
Yesterday all day long he was painting the living room with candlesticks on the grand piano,
with candles in the candlesticks, with a fireplace, with a big chandelier on the ceiling and
with colorful vases at the windows. Now he is painting the wine room where there is a big
basket full of fruit, wine jars with wine and empty horns on the table. Tomorrow he must
paint the kitchen and the bathroom or the dinning room. – What will he paint tomorrow?
– Tomorrow he probably will paint his own parents and relatives. – It would be nice (good)
if I too were painting so. I wish I were painting so or at least writing poems just like you.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) შემიძლია ამ კარების დაკეტვა და გაღება ამ გასაღებით.
b) ჩემს ავტოფარეხს აქვს ახალი ბოქლომი.
c) განა ყველაფერი შემიძლია? ყოვლისშემძლე ხომ არ ვარ!
d) რატომ შეწუხდით? არ იყო საჭირო. არ გეთანხმები.
e) – მითხარი, რა გქვია? მითხარი, რა დავხატო შენთვის? გინდა, ლექსი დავწერო
შენზე? – ასე ჯობია. უმჯობესია, ერთი კარგი ლექსი დაწერო ბუნებაზე,
საერთოდ, ლექსების წერა თუ შეგიძლია, რა თქმა უნდა.
f) მათ უნდა დაწერონ სერიოზული მოთხრობები სიყვარულზე და საერთოდ, ამ
სამყაროზე. უმჯობესია, ეს არ დაწერონ.
g) – შეგიძლია, დაწერო საშინაო დავალება? – რა საკვირველია, შემიძლია და
ახლავე დავწერ.
h) უთხარი, წეროს და ხატოს! მათ წერონ! არ წერონ! არ დაწერონ არაფერი თქვენს
შესახებ, რომ დაწერონ, განა ეს საწყენი იქნება?
i) დახატეთ ეს ხილით სავსე მაგიდა. არ დახატოთ ცარიელი კალათა, მირჩევნია,
ხილით ან ბოსტნეულით სავსე დახატოთ. უმჯობესია, ასე დახატოთ.
j) ეს სტუდენტები დახატავენ ყველაფერს, რასაც თქვენ იტყვით. მათ არ დაწერეს
საშინაო დავალება. ეს კი საწყენია. ახლა თუ უნდათ, დახატონ რამე.`,
        eng: `a) I can open and close these doors with this key.
b) My garage has a new key.
c) I can really do everything? I'm not one who can do everything!
d) Why did you bother? It was not necessary. I don't agree with you.
e) – Tell me, what is your name? Tell me, what should I paint for you? Do you want me
to write a poem about you? – That's better. It's better to write one good poem about
nature, generally, if you can write poems, of course.
f) They must write a serious story about love and in general, about this universe. It's
better, if they don't write this.
g) – Can you write your homework? – Of course I can, and right now I will write it.
h) Tell him to write and to paint! Let them write! Don’t let them write! They won't
write anything about you. If they write, will this really be offensive?
i) Paint this table full of fruit. Don't paint an empty basket; I prefer to paint it full of
fruit or vegetables. It's better, to paint it so.
j) These students will paint anything what you say. They didn't write the homework.
And this is deplorable. Now if they want, let them paint something.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) დახატე ეს სურათი! დაწერონ ეს წერილი.
b) – მე არ შემიძლია ყველაფერი. მე არ შემიძლია ამ კარების გაღება. – აი,
გასაღები.
c) შენი ბინა დახატე? რა დახატე?
d) ისინი რას დახატავენ ხვალ? რა უნდათ დახატონ?
e) – მე უნდა მივწერო წერილი დედაჩემს. – გეთანხმები.
f) შეგიძლია წასვლა ან შეგიძლია დახატო ამ პატარა ბავშვისთვის.
g) შემიძლია ლექსის დაწერა. ასევე შემიძლია სურათის დახატვა შენთვის.
h) ვის შეუძლია მოთხრობის დაწერა ამის შესახებ?
i) მე ვწერდი მთელი დღის განმავლობაში. მე დავწერ ხვალაც.
j) – ეს კალათა საჭმლით დახატე თუ ცარიელი? – მირჩევნია საჭმლით
დახატვა/დავხატო. – კარგი. ასე ჯობია. გეთანხმები.`,
        eng: `a) Paint this picture! Let them write this letter.
b) – I can’t do anything. I can’t open this door. – Here is the key.
c) Did you paint your flat? What did you paint?
d) What will they paint tomorrow? What they want to paint?
e) – I must write a letter to my mother. – I agree with you.
f) You can go, or you can paint it for this small child.
g) I can write a poem. I can also paint a picture for you.
h) Who can write a story about it?
i) I was writing it all day long. I will write it tomorrow too.
j) – Did you paint this basket empty or with food? – I prefer to paint it with food. – OK.
That’s better. I agree.`
      },
      {
        title: '3. Conjugate these verbs in the I and II series',
        isList: true,
        geo: `a) Conjugate like the verb ვხატავ:
(და)ვმარხავ (bury) (და)ვხურავ (close) (მო)ვხარშავ (boil)
(და)ვხუჭავ (close eyes) (მო)ვზიდავ (carry) (და)ვმალავ (hide)
(მი)ვბაძავ (imitate) (მო)ვპარავ (steal) (და)ვყნოსავ (sniff)
(გადა) ვყლაპავ (swallow) (და) ვხედავ (look) (მო)ვნახავ (see)
(გა)ვფლანგავ (waste money/time)
b) Conjugate like the verb ვწერ:
(შე)ვჭამ (eat) (გა)ვტეხ (break) (გა)ვრეცხ (wash)
(მო)ვთხოვ (ask for) (და)ვბან (wash somebody)`,
        eng: `a) Conjugate like the verb ვხატავ:
(და)ვმარხავ (bury) (და)ვხურავ (close) (მო)ვხარშავ (boil)
(და)ვხუჭავ (close eyes) (მო)ვზიდავ (carry) (და)ვმალავ (hide)
(მი)ვბაძავ (imitate) (მო)ვპარავ (steal) (და)ვყნოსავ (sniff)
(გადა) ვყლაპავ (swallow) (და) ვხედავ (look) (მო)ვნახავ (see)
(გა)ვფლანგავ (waste money/time)
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვმარხავ
მარხავ
მარხავს
ვმარხავთ
მარხავთ
მარხავენ
ვმარხავდი
მარხავდი
მარხავდა
ვმარხავდით
მარხავდით
მარხავდნენ
ვმარხავდე
მარხავდე
მარხავდეს
ვმარხავდეთ
მარხავდეთ
მარხავდნენ
დავმარხავ
დამარხავ
დამარხავს
დავმარხავთ
დამარხავთ
დამარხავენ
დავმარხავდი
დამარხავდი
დამარხავდა
დავმარხავდით
დამარხავდით
დამარხავდნენ
დავმარხავდე
დამარხავდე
დამარხავდეს
დავმარხავდეთ
დამარხავდეთ
დამარხავდნენ
წყვეტილი / აორისტი II კავშირებითი
(და)ვმარხე
(და)მარხე
(და)მარხა
(და)ვმარხეთ
(და)მარხეთ
(და)მარხეს
(და)ვმარხო
(და)მარხო
(და)მარხოს
(და)ვმარხოთ
(და)მარხოთ
(და)მარხონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვხურავ
ხურავ
ხურავს
ვხურავთ
ხურავთ
ხურავენ
ვხურავდი
ხურავდი
ხურავდა
ვხურავდით
ხურავდით
ხურავდნენ
ვხურავდე
ხურავდე
ხურავდეს
ვხურავდეთ
ხურავდეთ
ხურავდნენ
დავხურავ
დახურავ
დახურავს
დავხურავთ
დახურავთ
დახურავენ
დავხურავდი
დახურავდი
დახურავდა
დავხურავდით
დახურავდით
დახურავდნენ
დავხურავდე
დახურავდე
დახურავდეს
დავხურავდეთ
დახურავდეთ
დახურავდნენ
წყვეტილი / აორისტი II კავშირებითი
(და)ვხურე
(და)ხურე
(და)ხურა
(და)ვხურეთ
(და)ხურეთ
(და)ხურეს
(და)ვხურო
(და)ხურო
(და)ხუროს
(და)ვხუროთ
(და)ხუროთ
(და)ხურონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვხარშავ
ხარშავ
ხარშავს
ვხარშავთ
ხარშავთ
ხარშავენ
ვხარშავდი
ხარშავდი
ხარშავდა
ვხარშავდით
ხარშავდით
ხარშავდნენ
ვხარშავდე
ხარშავდე
ხარშავდეს
ვხარშავდეთ
ხარშავდეთ
ხარშავდნენ
მოვხარშავ
მოხარშავ
მოხარშავს
მოვხარშავთ
მოხარშავთ
მოხარშავენ
მოვხარშავდი
მოხარშავდი
მოხარშავდა
მოვხარშავდით
მოხარშავდით
მოხარშავდნენ
მოვხარშავდე
მოხარშავდე
მოხარშავდეს
მოვხარშავდეთ
მოხარშავდეთ
მოხარშავდნენ
წყვეტილი / აორისტი II კავშირებითი
(მო)ვხარშე
(მო)ხარშე
(მო)ხარშა
(მო)ვხარშეთ
(მო)ხარშეთ
(მო)ხარშეს
(მო)ვხარშო
(მო)ხარშო
(მო)ხარშოს
(მო)ვხარშოთ
(მო)ხარშოთ
(მო)ხარშონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვხუჭავ
ხუჭავ
ხუჭავს
ვხუჭავთ
ხუჭავთ
ხუჭავენ
ვხუჭავდი
ხუჭავდი
ხუჭავდა
ვხუჭავდით
ხუჭავდით
ხუჭავდნენ
ვხუჭავდე
ხუჭავდე
ხუჭავდეს
ვხუჭავდეთ
ხუჭავდეთ
ხუჭავდნენ
დავხუჭავ
დახუჭავ
დახუჭავს
დავხუჭავთ
დახუჭავთ
დახუჭავენ
დავხუჭავდი
დახუჭავდი
დახუჭავდა
დავხუჭავდით
დახუჭავდით
დახუჭავდნენ
დავხუჭავდე
დახუჭავდე
დახუჭავდეს
დავხუჭავდეთ
დახუჭავდეთ
დახუჭავდნენ
წყვეტილი / აორისტი II კავშირებითი
(და)ვხუჭე
(და)ხუჭე
(და)ხუჭა
(და)ვხუჭეთ
(და)ხუჭეთ
(და)ხუჭეს
(და)ვხუჭო
(და)ხუჭო
(და)ხუჭოს
(და)ვხუჭოთ
(და)ხუჭოთ
(და)ხუჭონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვზიდავ
ზიდავ
ზიდავს
ვზიდავთ
ზიდავთ
ზიდავენ
ვზიდავდი
ზიდავდი
ზიდავდა
ვზიდავდით
ზიდავდით
ზიდავდნენ
ვზიდავდე
ზიდავდე
ზიდავდეს
ვზიდავდეთ
ზიდავდეთ
ზიდავდნენ
მოვზიდავ
მოზიდავ
მოზიდავს
მოვზიდავთ
მოზიდავთ
მოზიდავენ
მოვზიდავდი
მოზიდავდი
მოზიდავდა
მოვზიდავდით
მოზიდავდით
მოზიდავდნენ
მოვზიდავდე
მოზიდავდე
მოზიდავდეს
მოვზიდავდეთ
მოზიდავდეთ
მოზიდავდნენ
წყვეტილი / აორისტი II კავშირებითი
(მო)ვზიდე
(მო)ზიდე
(მო)ზიდა
(მო)ვზიდეთ
(მო)ზიდეთ
(მო)ზიდეს
(მო)ვზიდო
(მო)ზიდო
(მო)ზიდოს
(მო)ვზიდოთ
(მო)ზიდოთ
(მო)ზიდონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვმალავ
მალავ
მალავს
ვმალავთ
მალავთ
მალავენ
ვმალავდი
მალავდი
მალავდა
ვმალავდით
მალავდით
მალავდნენ
ვმალავდე
მალავდე
მალავდეს
ვმალავდეთ
მალავდეთ
მალავდნენ
დავმალავ
დამალავ
დამალავს
დავმალავთ
დამალავთ
დამალავენ
დავმალავდი
დამალავდი
დამალავდა
დავმალავდით
დამალავდით
დამალავდნენ
დავმალავდე
დამალავდე
დამალავდეს
დავმალავდეთ
დამალავდეთ
დამალავდნენ
წყვეტილი / აორისტი II კავშირებითი
(და)ვმალე
(და)მალე
(და)მალა
(და)ვმალეთ
(და)მალეთ
(და)მალეს
(და)ვმალო
(და)მალო
(და)მალოს
(და)ვმალოთ
(და)მალოთ
(და)მალონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვბაძავ
ბაძავ
ბაძავს
ვბაძავთ
ბაძავთ
ბაძავენ
ვბაძავდი
ბაძავდი
ბაძავდა
ვბაძავდით
ბაძავდით
ბაძავდნენ
ვბაძავდე
ბაძავდე
ბაძავდეს
ვბაძავდეთ
ბაძავდეთ
ბაძავდნენ
მივბაძავ
მიბაძავ
მიბაძავს
მივბაძავთ
მიბაძავთ
მიბაძავენ
მივბაძავდი
მიბაძავდი
მიბაძავდა
მივბაძავდით
მიბაძავდით
მიბაძავდნენ
მივბაძავდე
მიბაძავდე
მიბაძავდეს
მივბაძავდეთ
მიბაძავდეთ
მიბაძავდნენ
წყვეტილი / აორისტი II კავშირებითი
(მი)ვბაძე
(მი)ბაძე
(მი)ბაძა
(მი)ვბაძეთ
(მი)ბაძეთ
(მი)ბაძეს
(მი)ვბაძო
(მი)ბაძო
(მი)ბაძოს
(მი)ვბაძოთ
(მი)ბაძოთ
(მი)ბაძონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვპარავ
პარავ
პარავს
ვპარავთ
პარავთ
პარავენ
ვპარავდი
პარავდი
პარავდა
ვპარავდით
პარავდით
პარავდნენ
ვპარავდე
პარავდე
პარავდეს
ვპარავდეთ
პარავდეთ
პარავდნენ
მოვპარავ
მოპარავ
მოპარავს
მოვპარავთ
მოპარავთ
მოპარავენ
მოვპარავდი
მოპარავდი
მოპარავდა
მოვპარავდით
მოპარავდით
მოპარავდნენ
მოვპარავდე
მოპარავდე
მოპარავდეს
მოვპარავდეთ
მოპარავდეთ
მოპარავდნენ
წყვეტილი / აორისტი II კავშირებითი
(მო)ვპარე
(მო)პარე
(მო)პარა
(მო)ვპარეთ
(მო)პარეთ
(მო)პარეს
(მო)ვპარო
(მო)პარო
(მო)პაროს
(მო)ვპაროთ
(მო)პაროთ
(მო)პარონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვყნოსავ
ყნოსავ
ყნოსავს
ვყნოსავთ
ყნოსავთ
ყნოსავენ
ვყნოსავდი
ყნოსავდი
ყნოსავდა
ვყნოსავდით
ყნოსავდით
ყნოსავდნენ
ვყნოსავდე
ყნოსავდე
ყნოსავდეს
ვყნოსავდეთ
ყნოსავდეთ
ყნოსავდნენ
დავყნოსავ
დაყნოსავ
დაყნოსავს
დავყნოსავთ
დაყნოსავთ
დაყნოსავენ
დავყნოსავდი
დაყნოსავდი
დაყნოსავდა
დავყნოსავდით
დაყნოსავდით
დაყნოსავდნენ
დავყნოსავდე
დაყნოსავდე
დაყნოსავდეს
დავყნოსავდეთ
დაყნოსავდეთ
დაყნოსავდნენ
წყვეტილი / აორისტი II კავშირებითი
(და)ვყნოსე
(და)ყნოსე
(და)ყნოსა
(და)ვყნოსეთ
(და)ყნოსეთ
(და)ყნოსეს
(და)ვყნოსო
(და)ყნოსო
(და)ყნოსოს
(და)ვყნოსოთ
(და)ყნოსოთ
(და)ყნოსონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვყლაპავ
ყლაპავ
ყლაპავს
ვყლაპავთ
ყლაპავთ
ყლაპავენ
ვყლაპავდი
ყლაპავდი
ყლაპავდა
ვყლაპავდით
ყლაპავდით
ყლაპავდნენ
ვყლაპავდე
ყლაპავდე
ყლაპავდეს
ვყლაპავდეთ
ყლაპავდეთ
ყლაპავდნენ
გადავყლაპავ
გადაყლაპავ
გადაყლაპავს
გადავყლაპავთ
გადაყლაპავთ
გადაყლაპავენ
გადავყლაპავდი
გადაყლაპავდი
გადაყლაპავდა
გადავყლაპავდით
გადაყლაპავდით
გადაყლაპავდნენ
გადავყლაპავდე
გადაყლაპავდე
გადაყლაპავდეს
გადავყლაპავდეთ
გადაყლაპავდეთ
გადაყლაპავდნენ
წყვეტილი / აორისტი II კავშირებითი
(და)ვყნოსე
(და)ყნოსე
(და)ყნოსა
(და)ვყნოსეთ
(და)ყნოსეთ
(და)ყნოსეს
(და)ვყნოსო
(და)ყნოსო
(და)ყნოსოს
(და)ვყნოსოთ
(და)ყნოსოთ
(და)ყნოსონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვხედავ
ხედავ
ხედავს
ვხედავთ
ხედავთ
ხედავენ
ვხედავდი
ხედავდი
ხედავდა
ვხედავდით
ხედავდით
ხედავდნენ
ვხედავდე
ხედავდე
ხედავდეს
ვხედავდეთ
ხედავდეთ
ხედავდნენ
დავხედავ
დახედავ
დახედავს
დავხედავთ
დახედავთ
დახედავენ
დავხედავდი
დახედავდი
დახედავდა
დავხედავდით
დახედავდით
დახედავდნენ
დავხედავდე
დახედავდე
დახედავდეს
დავხედავდეთ
დახედავდეთ
დახედავდნენ
წყვეტილი / აორისტი II კავშირებითი
(და)ვხედე
(და)ხედე
(და)ხედა
(და)ვხედეთ
(და)ხედეთ
(და)ხედეს
(და)ვხედო
(და)ხედო
(და)ხედოს
(და)ვხედოთ
(და)ხედოთ
(და)ხედონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვნახავ
ნახავ
ნახავს
ვნახავთ
ნახავთ
ნახავენ
ვნახავდი
ნახავდი
ნახავდა
ვნახავდით
ნახავდით
ნახავდნენ
ვნახავდე
ნახავდე
ნახავდეს
ვნახავდეთ
ნახავდეთ
ნახავდნენ
მოვნახავ
მონახავ
მონახავს
მოვნახავთ
მონახავთ
მონახავენ
მოვნახავდი
მონახავდი
მონახავდა
მოვნახავდით
მონახავდით
მონახავდნენ
მოვნახავდე
მონახავდე
მონახავდეს
მოვნახავდეთ
მონახავდეთ
მონახავდნენ
წყვეტილი / აორისტი II კავშირებითი
(მო)ვნახე
(მო)ნახა
(მო)ვნახეთ
(მო)ნახე
(მო)ნახეთ
(მო)ნახეს
(მო)ვნახო
(მო)ნახო
(მო)ნახოს
(მო)ვნახოთ
(მო)ნახოთ
(მო)ნახონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვფლანგავ
ფლანგავ
ფლანგავს
ვფლანგავთ
ფლანგავთ
ფლანგავენ
ვფლანგავდი
ფლანგავდი
ფლანგავდა
ვფლანგავდით
ფლანგავდით
ფლანგავდნენ
ვფლანგავდე
ფლანგავდე
ფლანგავდეს
ვფლანგავდეთ
ფლანგავდეთ
ფლანგავდნენ
გავფლანგავ
გაფლანგავ
გაფლანგავს
გავფლანგავთ
გაფლანგავთ
გაფლანგავენ
გავფლანგავდი
გაფლანგავდი
გაფლანგავდა
გავფლანგავდით
გაფლანგავდით
გაფლანგავდნენ
გავფლანგავდე
გაფლანგავდე
გაფლანგავდეს
გავფლანგავდეთ
გაფლანგავდეთ
გაფლანგავდნენ
წყვეტილი / აორისტი II კავშირებითი
(მო)ვნახე
ნახა
ვნახეთ
ნახე
ნახეთ
ნახეს
(მო)ვნახო
ნახო
ნახოს
ვნახოთ
ნახოთ
ნახონ
c) Conjugate like the verb ვწერ:
(შე)ვჭამ (eat) (გა)ვტეხ (break) (გა)ვრეცხ (wash)
(მო)ვთხოვ (ask for) (და)ვბან (wash somebody)
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვჭამ
ჭამ
ჭამს
ვჭამთ
ჭამთ
ჭამენ
ვჭამდი
ჭამდი
ჭამდა
ვჭამდით
ჭამდით
ჭამდნენ
ვჭამდე
ჭამდე
ჭამდეს
ვჭამდეთ
ჭამდეთ
ჭამდნენ
შევჭამ
შეჭამ
შეჭამს
შევჭამთ
შეჭამთ
შეჭამენ
შევჭამდი
შეჭამდი
შეჭამდა
შევჭამდით
შეჭამდით
შეჭამდნენ
შევჭამდე
შეჭამდე
შეჭამდეს
შევჭამდეთ
შეჭამდეთ
შეჭამდნენ
წყვეტილი / აორისტი II კავშირებითი
(შე)ვჭამე
(შე)ჭამე
(შე)ჭამა
(შე)ვჭამეთ
(შე)ჭამეთ
(შე)ჭამეს
(შე)ვჭამო
(შე)ჭამო
(შე)ჭამოს
(შე)ვჭამოთ
(შე)ჭამოთ
(შე)ჭამო
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვტეხ
ტეხ
ტეხს
ვტეხთ
ტეხთ
ტეხენ
ვტეხდი
ტეხდი
ტეხდა
ვტეხდით
ტეხდით
ტეხდნენ
ვტეხდე
ტეხდე
ტეხდეს
ვტეხდეთ
ტეხდეთ
ტეხდნენ
გავტეხ
გატეხ
გატეხს
გავტეხთ
გატეხთ
გატეხენ
გავტეხდი
გატეხდი
გატეხდა
გავტეხდით
გატეხდით
გატეხდნენ
გავტეხდე
გატეხდე
გატეხდეს
გავტეხდეთ
გატეხდეთ
გატეხდნენ
წყვეტილი / აორისტი II კავშირებითი
(გა)ვტეხე
(გა)ტეხე
(გა)ტეხა
(გა)ვტეხეთ
(გა)ტეხეთ
(გა)ტეხეს
(გა)ვტეხო
(გა)ტეხო
(გა)ტეხოს
(გა)ვტეხოთ
(გა)ტეხოთ
(გა)ტეხონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვრეცხავ
რეცხავ
რეცხავს
ვრეცხავთ
რეცხავთ
რეცხავენ
ვრეცხავდი
რეცხავდი
რეცხავდა
ვრეცხავდით
რეცხავდით
რეცხავდნენ
ვრეცხავდე
რეცხავდე
რეცხავდეს
ვრეცხავდეთ
რეცხავდეთ
რეცხავდნენ
გავრეცხავ
გარეცხავ
გარეცხავს
გავრეცხავთ
გარეცხავთ
გარეცხავენ
გავრეცხავდი
გარეცხავდი
გარეცხავდა
გავრეცხავდით
გარეცხავდით
გარეცხავდნენ
გავრეცხავდე
გარეცხავდე
გარეცხავდეს
გავრეცხავდეთ
გარეცხავდეთ
გარეცხავდნენ
წყვეტილი / აორისტი II კავშირებითი
(გა)ვრეცხე
(გა)რეცხე
(გა)რეცხა
(გა)ვრეცხეთ
(გა)რეცხეთ
(გა)რეცხეს
(გა)ვრეცხო
(გა)რეცხო
(გა)რეცხოს
(გა)ვრეცხოთ
(გა)რეცხოთ
(გა)რეცხონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვთხოვ
თხოვ
თხოვს
ვთხოვთ
თხოვთ
თხოვენ
ვთხოვდი
თხოვდი
თხოვდა
ვთხოვდით
თხოვდით
თხოვდნენ
ვთხოვდე
თხოვდე
თხოვდეს
ვთხოვდეთ
თხოვდეთ
თხოვდნენ
მოვთხოვ
მოთხოვ
მოთხოვს
მოვთხოვთ
მოთხოვთ
მოთხოვენ
მოვთხოვდი
მოთხოვდი
მოთხოვდა
მოვთხოვდით
მოთხოვდით
მოთხოვდნენ
მოვთხოვდე
მოთხოვდე
მოთხოვდეს
მოვთხოვდეთ
მოთხოვდეთ
მოთხოვდნენ
წყვეტილი / აორისტი II კავშირებითი
(მო)ვთხოვე
(მო)თხოვე
(მო)თხოვა
(მო)ვთხოვეთ
(მო)თხოვეთ
(მო)თხოვეს
(მო)ვთხოვო
(მო)თხოვო
(მო)თხოვოს
(მო)ვთხოვოთ
(მო)თხოვოთ
(მო)თხოვონ
აწმყო უწყვეტელი
აწმყოს
კავშირებითი
მყოფადი ხოლმეობითი
მყოფადის
კავშირებითი
ვბან
ბან
ბანს
ვბანთ
ბანთ
ბანენ
ვბანდი
ბანდი
ბანდა
ვბანდით
ბანდით
ბანდნენ
ვბანდე
ბანდე
ბანდეს
ვბანდეთ
ბანდეთ
ბანდნენ
დავბან
დაბან
დაბანს
დავბანთ
დაბანთ
დაბანენ
დავბანდი
დაბანდი
დაბანდა
დავბანდით
დაბანდით
დაბანდნენ
დავბანდე
დაბანდე
დაბანდეს
დავბანდეთ
დაბანდეთ
დაბანდნენ
წყვეტილი / აორისტი II კავშირებითი
(და)ვბანე
(და)ბანე
(და)ბანა
(და)ვბანეთ
(და)ბანეთ
(და)ბანეს
(და)ვბანო
(და)ბანო
(და)ბანოს
(და)ვბანოთ
(და)ბანოთ
(და)ბანონ`
      }
    ]
  },
  {
    title: 'Lesson 22',
    blocks: [
      {
        title: 'Text',
        geo: `– მე დღეს ძალიან ბევრი საქმე მაქვს. სახლი უნდა დავალაგო, უნდა გავრეცხო
სარეცხი და დავაუთოვო ჩემი ტანსაცმელი. – როგორ უნდა გარეცხო ამდენი სარეცხი?
– სარეცხი მანქანით და ფხვნილით გავრეცხავ. ეს ყველაზე ადვილია. სახლის
დალაგება კი ძნელია. ეს ხომ ძალიან დიდი სახლია. შენი დახმარება მინდა. თუ არა
გცალია, არა უშავს, საღამოს მაინც მოდი. ახლა კი შუადღისით უნდა გავწმინდო
აბაზანის ნიჟარა და იატაკი ამ საღამომდე.
– რა გაქვს აბაზანაში? – კბილის ჯაგრისი, კბილის პასტა, ტუალეტის ქაღალდი,
საპონი, შამპუნი და პირსახოცები. იქვეა ცოცხი, აქანდაზი და მტვერსასრუტი.
– ლოგინი აალაგე?
– რა საკვირველია! ჩემი ლოგინი დილით ავალაგე. მე დილაობით ყოველთვის
ვალაგებ ჩემს ლოგინს. ახლა ვაპირებ, რომ ჯერ დავხვეტო იატაკი, მერე კი
გავწმინდო ფანჯრები და გავაპრიალო ეს ვაზები. თუმცა, ჯერ მტვერი უნდა
გადავწმინდო მაგიდიდან და კარადებიდან. ამ როიალზეც მტვერია. ესეც უნდა
გავწმინდო.
– ეს ბუხარიც მტვრიანია. ამას მე გავწმენდ და გავაპრიალებ, თუ შეიძლება?
– რატომაც არა!`,
        eng: `– Today I am very busy (today I have a lot of things to do). I need to organize the house, and
I need to wash the laundry and to iron my clothes. – How do you wash so much laundry? – I
wash it with a washing machine and detergent. This is the easiest. But organizing the house
is difficult. This is a big house. I want your help. If you don't have time, it's not a problem,
come in the evening at least. Now by afternoon I must clean the bathroom sink and the floor
until this evening.
– What do you have in your bathroom? – A toothbrush, toothpaste, toilet paper, soap,
shampoo, and towels. There is a broom, dustpan and vacuum cleaner.
– Did you make your bed?
– Of course! I made my bed in the morning. I make my bed every morning. Now I intend
to sweep the floor, however after I clean the windows and polish these vases. Though, I
still need to clean the dust from the table and from the cabinets. This grand piano is also
dusty. I also need to clean it.
– This fireplace is dusty. May I clean and polish it?
– Why not?`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) – როგორ გარეცხე ამდენი სარეცხი? – სარეცხი მანქანით და ფხვნილით
გავრეცხე.
b) – შეიძლება, დავკეცო ეს ტანსაცმელი და აქ დავკიდო ქუდი? – რატომაც არა!
c) აუცილებელია, ხელების საპნით დაბანა და პირსახოცით გამშრალება.
d) აქ მტვერია. ეს წიგნის თარო მტვრით არის სავსე. ძალიან მტვრიანია.
e) ნანას გრძელი თმა აქვს და არ მოსწონს თმის დავარცხნა. ამიტომ მისთვის
საჭიროა თმის შეჭრა. აუცილებელია.
f) – სად არის დავითის საპარსი? – აბაზანაშია ნიჟარასთან.
g) ვინ დააწკრიალა ეს სახლი?
h) – ვინ დახატა ეს სურათი? – მე არ დამიხატავს. – იცით, გუშინ ნანას დაუხატავს
დიდი ლომი.
i) სამწუხაროდ, საშინაო დავალება არ დამიწერია. დიდი ბოდიში.
j) გაგიმარჯოთ, ჩემო მეგობრებო, სულ კარგი სურათები დაგეხატოთ და
ულამაზესი ლექსები დაგეწეროთ!
k) კარგი იქნებოდა, რომ დამეწერა წერილი გუშინ, მაგრამ რატომღაც ვერ
დავწერე.
l) – იქნებ ეს მაინც დაგეხატა ბავშვისთვის?– ვერ დავხატავ ამას. არ დავხატავ!
m)– შემთხვევით ნანასთვის წერილი ხომ არ დაგიწერია? – არა, არ დამიწერია და
არც დავწერ.
n) ნეტავ დაეხტა ეს სახლი და არ დაეხატა ეგ ქუჩა.
o) უნდა სკამზე დავკიდო ჩემი ჩანთა და დავკეცო ტანსაცმელი.`,
        eng: `a) – How did you wash so much laundry? – I washed it with a washing machine and
detergent.
b) – May I fold these clothes and hang the hat here? – Why not?
c) It's necessary to wash your hands with soap and to dry with a towel.
d) There is dust here. This bookshelf is full of dust. It's very dusty.
e) Nana has long hair and she doesn't like to comb it. Therefore it is necessary for her to
cut her hair. It's necessary.
f) – Where is Davit's razor? – It's in the bathroom next to the sink.
g) Who polished this house?
h) – Who painted this picture? – I didn't paint it. – You know, it seems yesterday Nana
painted a big lion.
i) Unfortunately, I haven't written my homework. I'm very sorry.
j) Hello, my friends, I wish you would all paint good pictures and write very beautiful
poems!
k) It would be nice if I wrote the letter yesterday, but somehow I couldn't write it.
l) – Perhaps you would at least paint this for a child? – I won't be able to paint it. I will
not paint it!
m)– By chance, have you not written the letter for Nana? – No, I haven't written it and I
will not write it.
n) I wish he/she would paint this house and he didn't paint that street.
o) I must hang my bag on the chair and fold the clothes.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) ნეტავ ვხატავდე როგორც შენ ხატავ.
b) მე არ დავხატე. მე არ დამიხატავს.
c) წერილი დაწერე!
d) ეს დახატე ჩემი მეგობრისთვის. ჩემი მეგობრისთვის დაწერე ან ჩემთვის.
e) შეგიძლია, ეს დახატო ჩემთვის?
f) უნდა ჩემი ლოგინი ავალაგო.
g) უნდა გავწმინდო ჩემი სახლი და სარეცხი გავრეცხო.
h) უნდა გაწმინდო ეს ოთახი. აქ მტვერია.
i) აქ არის ეს ნივთები: ცოცხი, აქანდაზი და მტვერსასრუტი.
j) – სად გაქვს საპონი, შამპუნი, კბილის პასტა, კბილის ჯაგრისი, ჯაგრისი,
სავარცხელი, ტუალეტის ქაღალდი და პირსახოცები? – ჩემს აბაზანაშია.
k) ნიჟარა, ონკანი და დუში ტუალეტშია.
l) შენ უნდა გარეცხო ტანსაცმელი სარეცხის მანქანაში. მერე უნდა დააუთოვო და
დაკეცო.
m)შენი ქუდი აქ დაკიდე, თუ შეიძლება. შეგიძლია, დაკიდო აქ.
n) შეგიძლია, გახეხო აქ.
o) – შენ ხომ არ დაგიხატავს? – არა, არ დამიხატავს/არ დავხატე.`,
        eng: `a) I wish I could paint as you are painting.
b) I didn’t paint it. I haven’t painted it.
c) Write this letter!
d) Paint it for my friend. Write it for my friend or for me.
e) Would you please, paint it for me?
f) I must make my bed.
g) I have to clean my house and wash my laundry.
h) You must clean this room. It’s dusty here.
i) Here are these things: a broom, a dustpan and a vacuum cleaner.
j) – Where do you have the soap, the shampoo, the tooth paste, the toothbrush, the
brush, the comb, the toilet paper and the towels? – In my bath.
k) There is a sink, a faucet and a shower in the bathroom.
l) You must wash your clothes in the washing machine. Then you must iron and fold
them.
m)Hang your cap here, please. You may hang it here.
n) You may brush it here.
o) – Didn’t you paint it? – No, I didn’t paint it.`
      },
      {
        title: '3. Conjugate the following verbs in the III series',
        isList: true,
        geo: `a) Conjugate like the verb ვხატავ – დამიხატავს:
(და)ვმარხავ (bury) (და)ვხურავ (close) (მო)ვხარშავ (boil)
(და)ვხუჭავ (close eyes) (მო)ვზიდავ (carry) (და)ვმალავ (hide)
(მი)ვბაძავ (imitate) (მო)ვპარავ (steal) (და)ვყნოსავ (sniff)
(გადა) ვყლაპავ (swallow) (და) ვხედავ (look) (მო)ვნახავ (see)
(გა)ვფლანგავ (waste money/time)
b) Conjugate like the verb ვწერ – დამიწერია:
(შე)ვჭამ (eat) (გა)ვტეხ (break) (გა)ვრეცხ (wash)
(მო)ვთხოვ (ask for) (და)ვბან (wash somebody)`,
        eng: `a) Conjugate like the verb ვხატავ – დამიხატავს:
(და)ვმარხავ (bury) (და)ვხურავ (close) (მო)ვხარშავ (boil)
(და)ვხუჭავ (close eyes) (მო)ვზიდავ (carry) (და)ვმალავ (hide)
(მი)ვბაძავ (imitate) (მო)ვპარავ (steal) (და)ვყნოსავ (sniff)
(გადა) ვყლაპავ (swallow) (და) ვხედავ (look) (მო)ვნახავ (see)
(გა)ვფლანგავ (waste money/time)
I თურმეობითი II თურმეობითი III კავშირებითი
დამიმარხავს
დაგიმარხავს
დაუმარხავს
დაგვიმარხავს
დაგიმარხავთ
დაუმარხავთ
დამემარხა
დაგემარხა
დაემარხა
დაგვემარხა
დაგემარხათ
დაემარხათ
დამემარხოს
დაგემარხოს
დაემარხოს
დაგვემარხოს
დაგემარხოთ
დაემარხოთ
I თურმეობითი II თურმეობითი III კავშირებითი
დამიხურავს
დაგიხურავს
დაუხურავს
დაგვიხურავს
დაგიხურავთ
დაუხურავთ
დამეხურა
დაგეხურა
დაეხურა
დაგვეხურა
დაგეხურათ
დაეხურათ
დამეხუროს
დაგეხუროს
დაეხუროს
დაგვეხუროს
დაგეხუროთ
დაეხუროთ
I თურმეობითი II თურმეობითი III კავშირებითი
მომიხარშავს
მოგიხარშავს
მოუხარშავს
მოგვიხარშავს
მოგიხარშავთ
მოუხარშავთ
მომეხარშა
მოგეხარშა
მოეხარშა
მოგვეხარშა
მოგეხარშათ
მოეხარშათ
მომეხარშოს
მოგეხარშოს
მოეხარშოს
მოგვეხარშოს
მოგეხარშოთ
მოეხარშოთ
I თურმეობითი II თურმეობითი III კავშირებითი
დამიხუჭავს
დაგიხუჭავს
დაუხუჭავს
დაგვიხუჭავს
დაგიხუჭავთ
დაუხუჭავთ
დამეხუჭა
დაგეხუჭა
დაეხუჭა
დაგვეხუჭა
დაგეხუჭათ
დაეხუჭათ
დამეხუჭოს
დაგეხუჭოს
დაეხუჭოს
დაგვეხუჭოს
დაგეხუჭოთ
დაეხუჭოთ
I თურმეობითი II თურმეობითი III კავშირებითი
მომიზიდავს
მოგიზიდავს
მოუზიდავს
მოგვიზიდავს
მოგიზიდავთ
მოუზიდავთ
მომეზიდა
მოგეზიდა
მოეზიდა
მოგვეზიდა
მოგეზიდათ
მოეზიდათ
მომეზიდოს
მოგეზიდოს
მოეზიდოს
მოგვეზიდოს
მოგეზიდოთ
მოეზიდოთ
I თურმეობითი II თურმეობითი III კავშირებითი
დამიმალავს
დაგიმალავს
დაუმალავს
დაგვიმალავს
დაგიმალავთ
დაუმალავთ
დამემალა
დაგემალა
დაემალა
დაგვემალა
დაგემალათ
დაემალათ
დამემალოს
დაგემალოს
დაემალოს
დაგვემალოს
დაგემალოთ
დაემალოთ
I თურმეობითი II თურმეობითი III კავშირებითი
მიმიბაძავს
მიგიბაძავს
მიუბაძავს
მიგვიბაძავს
მიგიბაძავთ
მიუბაძავთ
მიმებაძა
მიგებაძა
მიებაძა
მიგვებაძა
მიგებაძათ
მიებაძათ
მიმებაძოს
მიგებაძოს
მიებაძოს
მიგვებაძოს
მიგებაძოთ
მიებაძოთ
I თურმეობითი II თურმეობითი III კავშირებითი
მომიპარავს
მოგიპარავს
მოუპარავს
მოგვიპარავს
მოგიპარავთ
მოუპარავთ
მომეპარა
მოგეპარა
მოეპარა
მოგვეპარა
მოგეპარათ
მოეპარათ
მომეპაროს
მოგეპაროს
მოეპაროს
მოგვეპაროს
მოგეპაროთ
მოეპაროთ
I თურმეობითი II თურმეობითი III კავშირებითი
დამიყნოსავს
დაგიყნოსავს
დაუყნოსავს
დაგვიყნოსავს
დაგიყნოსავთ
დაუყნოსავთ
დამეყნოსა
დაგეყნოსა
დაეყნოსა
დაგვეყნოსა
დაგეყნოსათ
დაეყნოსათ
დამეყნოსოს
დაგეყნოსოს
დაეყნოსოს
დაგვეყნოსოს
დაგეყნოსოთ
დაეყნოსოთ
I თურმეობითი II თურმეობითი III კავშირებითი
გადამიყლაპავს
გადაგიყლაპავს
გადაუყლაპავს
გადაგვიყლაპავს
გადაგიყლაპავთ
გადაუყლაპავთ
გადამეყლაპა
გადაგეყლაპა
გადაეყლაპა
გადაგვეყლაპა
გადაგეყლაპათ
გადაეყლაპათ
გადამეყლაპოს
გადაგეყლაპოს
გადაეყლაპოს
გადაგვეყლაპოს
გადაგეყლაპოთ
გადაეყლაპოთ
I თურმეობითი II თურმეობითი III კავშირებითი
დამიხედავს
დაგიხედავს
დაუხედავს
დაგვიხედავს
დაგიხედავთ
დაუხედავთ
დამეხედა
დაგეხედა
დაეხედა
დაგვეხედა
დაგეხედათ
დაეხედათ
დამეხედოს
დაგეხედოს
დაეხედოს
დაგვეხედოს
დაგეხედოთ
დაეხედოთ
I თურმეობითი II თურმეობითი III კავშირებითი
მომინახავს
მოგინახავს
მოუნახავს
მოგვინახავს
მოგინახავთ
მოუნახავთ
მომენახა
მოგენახა
მოენახა
მოგვენახა
მოგენახათ
მოენახათ
მომენახოს
მოგენახოს
მოენახოს
მოგვენახოს
მოგენახოთ
მოენახოთ
I თურმეობითი II თურმეობითი III კავშირებითი
გამიფლანგავს
გაგიფლანგავს
გაუფლანგავს
გაგვიფლანგავს
გაგიფლანგავთ
გაუფლანგავთ
გამეფლანგა
გაგეფლანგა
გაეფლანგა
გაგვეფლანგა
გაგეფლანგათ
გაეფლანგათ
გამეფლანგოს
გაგეფლანგოს
გაეფლანგოს
გაგვეფლანგოს
გაგეფლანგოთ
გაეფლანგოთ
b) Conjugate like the verb ვწერ – დამიწერია:
(შე)ვჭამ (eat) (გა)ვტეხ (break) (გა)ვრეცხ (wash)
(მო)ვთხოვ (ask for) (და)ვბან (wash somebody)
I თურმეობითი II თურმეობითი III კავშირებითი
შემიჭამია
შეგიჭამია
შეუჭამია
შეგვიჭამია
შეგიჭამიათ
შეუჭამიათ
შემეჭამა
შეგეჭამა
შეეჭამა
შეგვეჭამა
შეგეჭამათ
შეეჭამათ
შემეჭამოს
შეგეჭამოს
შეეჭამოს
შეგვეჭამოს
შეგეჭამოთ
შეეჭამოთ
I თურმეობითი II თურმეობითი III კავშირებითი
გამიტეხია
გაგიტეხია
გაუტეხია
გაგვიტეხია
გაგიტეხიათ
გაუტეხიათ
გამეტეხა
გაგეტეხა
გაეტეხა
გაგვეტეხა
გაგეტეხათ
გაეტეხათ
გამეტეხოს
გაგეტეხოს
გაეტეხოს
გაგვეტეხოს
გაგეტეხოთ
გაეტეხოთ
I თურმეობითი II თურმეობითი III კავშირებითი
გამირეცხია
გაგირეცხია
გაურეცხია
გაგვირეცხია
გაგირეცხიათ
გაურეცხიათ
გამერეცხა
გაგერეცხა
გაერეცხა
გაგვერეცხა
გაგერეცხათ
გაერეცხათ
გამერეცხოს
გაგერეცხოს
გაერეცხოს
გაგვერეცხოს
გაგერეცხოთ
გაერეცხოთ
I თურმეობითი II თურმეობითი III კავშირებითი
მომითხოვია
მოგითხოვია
მოუთხოვია
მოგვითხოვია
მოგითხოვიათ
მოუთხოვიათ
მომეთხოვა
მოგეთხოვა
მოეთხოვა
მოგვეთხოვა
მოგეთხოვათ
მოეთხოვათ
მომეთხოვოს
მოგეთხოვოს
მოეთხოვოს
მოგვეთხოვოს
მოგეთხოვოთ
მოეთხოვოთ
I თურმეობითი II თურმეობითი III კავშირებითი
დამიბანია
დაგიბანია
დაუბანია
დაგვიბანია
დაგიბანიათ
დაუბანიათ
დამებანა
დაგებანა
დაებანა
დაგვებანა
დაგებანათ
დაებანათ
დამებანოს
დაგებანოს
დაებანოს
დაგვებანოს
დაგებანოთ
დაებანოთ`
      }
    ]
  },
  {
    title: 'Lesson 23',
    blocks: [
      {
        title: 'Text',
        geo: `მე ვიყავი ბაზარში და ვიყიდე ბევრი ხილი და ბოსტნეული. შენ ახლა მიდიხარ. დღეს
ძალიან იაფია ყველაფერი: არაჟანი, ხაჭო, რძე, ხახვი, ნიორი, სტაფილო, კომბოსტო,
ლობიო, მწვანე ლობიო, წიწაკა, ყავავილოვანი კომბოსტო, სიმინდი, გოგრა, ჭარხალი,
ბადრიჯანი, სოკო, სალათის ფოთოლი, მწვანილი, ბოლოკი და ასე შემდეგ. დღეს
ბევრი ხალხია ბაზარში. დღეს ხომ კვირაა. სხვა დროს ხალხი უფრო დაკავებულია.
– მაპატიეთ, მაგრამ ეს ჭუჭყიანი ქილაა და თუ შეიძლება, ის სუფთა ყუთი
მომაწოდეთ.
– ეს სხვისია. აი, ინებეთ ახალი და სუფთა პარკი.
– მომეცით ერთი ცალი ყუთი. მადლობელი დაგრჩებით, იმ ქილას თუ
მომაწოდებთ.
– ინებეთ.
– მე უნდა ვიყიდო ერთი კოლოფი სიგარეტი და ასანთი. მან უნდა იყიდოს
ალკოჰოლიანი სასმელი. – კი, მაგრამ აქ მოწევა არ შეიძლება. აქ არავინ არ ეწევა. განა
არ იცით, რომ მოწევა მავნებელია თქვენი ჯანმრთელობისათვის? თქვენ ხომ
არამწეველი ბრძანდებით? უკაცრავად, ეს მაგიდა არამწეველებისთვისაა. ნუ
დარჩებით ნაწყენი. მე არ მინდოდა თქვენი წყენა.`,
        eng: `I was at the farmers' market and I bought many fruit and vegetables. You're going now.
Today everything is very cheap: sour cream, cottage cheese, milk, onions, garlic, a carrot, a
cabbage, beans, string beans, peppers, cauliflower, corn, pumpkin, beats, eggplant,
mushrooms, lettuce, greens, radishes and so on. Today there are many people at the farmers'
market. Today is Sunday. Other times people are busier.
– Excuse me, but this jar is dirty and please pass me that clean box.
– This is someone else's. Here, here you are – a new and clean packet.
– Give me one box. I'll be thankful if you'll pass me that jar.
– Here you are.
– I want to buy one pack of cigarettes and matches. He wants to buy alcoholic beverages.
– Yes, but please no smoking here. Here nobody smokes. Don't you know that smoking is
dangerous for your health? Are you a nonsmoker? Excuse me, this is a table for nonsmokers.
Don't be offended. I didn't want to offend you.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) კვირა დღეს ბევრი ხალხია ბაზარში.
b) – რამდენი კილოა ეს ხახვი? – სამი კილო იქნება. – მე ოთხ-ნახევარი კილო
ხახვი და ნიორი მინდა ვიყიდო.
c) – შენ რამდენი კილო ხარ? რამდენი ვიქნები, შენი აზრით? – მე მგონი, არც ისე
მძიმე არ უნდა იყო. – შენ ხომ გამხდარი გოგო ხარ.
d) აუცილებელია ამ ხილის სუფთა კალათებში ჩაწყობა. ეს უსარგებლო ყუთია.
e) წიგნის თაროზე ირაკლის წიგნები და რვეულები აწყვია. ჩემი წიგნები კი
მაგიდაზე ალაგია და არ აალაგო!
f) ორი რულონი ტუალეტის ქაღალდი და ერთი ბოთლი თეთრი ღვინო მომეცით.
g) არაჟანი, ხაჭო და რძე ძვირია, ცეცხლი უკიდია.
h) სიგარეტის მოწევა მავნებელია თქვენი ჯანმრთელობისათვის! აქ არ ეწევიან!
i) – მადლიერი დარჩა, კომბოსტო რომ უყიდეთ? – ყოველ შემთხვევაში, ნაწყენი
არ დარჩა.
j) ხილი და ბოსტნეული სასარგებლოა ადამიანის ორგანიზმისათვის.`,
        eng: `a) On sunday many people are at the farmer's market.
b) – How many kilos are these onions? – It will be three kilos. – I want to buy four and a
half kilos of onions and garlic.
c) – How many kilos are you? How many can (will) I be in your opinion? – I think you
were not heavy at all. You are a thin girl.
d) It's necessary to put these fruit in the clean baskets. This box is useless.
e) Irakli's books and notebooks are arranged on the bookshelf. My books are organized
on the table and don't you reorganize them!
f) Give me two rolls of toilet paper and one bottle of wine.
g) Sour cream, cottage cheese, and milk are expensive, very expensive.
h) Smoking cigarettes is dangerous for your health! Don't smoke here! (This is a non-
smoking place.)
i) – Does he remain grateful, for the cabbage you bought him? – In any case, he was not
offended.
j) Fruit and vegetables are useful for the human organism.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) მინდა ვიყიდო: კარტოფილი, ხახვი, ნიორი, სტაფილო, კომბოსტო,
ყავავილოვანი კომბოსტო, ბადრიჯანი, წიწაკა, გოგრა, სიმინდი, ლობიო,
სალათის ფოთოლი, მწვანილი, ჭარხალი, მწვანე ლობიო და სოკოები.
b) გინდა მწვანილი?
c) ერთი ბოთლი ღვინო და ერთი ქილა არაჟანი მომეცით.
d) აქ ცოტა სუფთა შეკვრები და ყუთები არის.
e) მომაწოდეთ, გეთაყვა, ერთი რულონი ქაღალდი და ეს სასწორი.
f) მას ცეცხლი უკიდია (ძალიან ძვირია). მაგრამ ნაწყენი არ დარჩეთ, გეთაყვა.
g) ბევრი ხალხი იყო ბაზარში გუშინ.`,
        eng: `a) I want to buy some vegetables: potatoes, onions, garlic, carrots, cabbages, cauliflower,
eggplants, peppers, pumpkins, corns, beans, radishes, lettuces, greens, beets, string
beans and mushrooms.
b) Do you want some greens?
c) Give me a bottle of wine and a jar of sour cream.
d) Here are a few clean packages and boxes.
e) Pass me please a roll of paper and these scales.
f) This is very expensive. Don't be offended, please.
g) Many people were in the market yesterday.`
      },
      {
        title: '3. Conjugate the following verbs with the different forms of version',
        isList: true,
        geo: `a) Conjugate like the verb ვხატავ – ვიხატავ – ვუხატავ:
(და)ვმარხავ (bury) (და)ვხურავ (close) (მო)ვხარშავ (boil)
(და)ვხუჭავ (close eyes) (მო)ვზიდავ (carry) (და)ვმალავ (hide)
(გა)ვფლანგავ (waste money/time)
b) Conjugate like the verb ვწერ – ვიწერ – ვუწერ:
(გა)ვტეხ (break) (გა)ვრეცხ (wash)
(და)ვბან (wash somebody)`,
        eng: `a) Conjugate like the verb ვხატავ – ვიხატავ – ვუხატავ:
(და)ვმარხავ (bury) (და)ვხურავ (close) (მო)ვხარშავ (boil)
(და)ვხუჭავ (close eyes) (მო)ვზიდავ (carry) (და)ვმალავ (hide)
(გა)ვფლანგავ (waste money/time)
S./O.i. I s. II s. III s. I pl. II pl. III pl.
I s. ----- გიმარხავ ვუმარხავ ----- გიმარხავთ ვუმარხავ
II s. მიმარხავ ----- უმარხავ გვიმარხავ ----- უმარხავ
III s. მიმარხავს გიმარხავს უმარხავს გვიმარხავს გიმარხავთ უმარხავს
I pl. ----- გიმარხავთ ვუმარხავთ ----- გიმარხავთ ვუმარხავთ
II pl. მიმარხავთ ----- უმარხავთ გვიმარხავთ ----- უმარხავთ
III pl. მიმარხავენ გიმარხავენ უმარხავენ გვიმარხავენ გიმარხავენ უმარხავენ
S. ver. ვიმარხავ იმარხავ იმარხავს ვიმარხავთ იმარხავთ იმარხავენ
S./O.i. I s. II s. III s. I pl. II pl. III pl.
I s. ----- გიხურავ ვუხურავ ----- გიხურავთ ვუხურავ
II s. მიხურავ ----- უხურავ გვიხურავ ----- უხურავ
III s. მიხურავს გიხურავს უხურავს გვიხურავს გიხურავთ უხურავს
I pl. ----- გიხურავთ ვუხურავთ ----- გიხურავთ ვუხურავთ
II pl. მიხურავთ ----- უხურავთ გვიხურავთ ----- უხურავთ
III pl. მიხურავენ გიხურავენ უხურავენ გვიხურავენ გიხურავენ უხურავენ
S. ver. ვიხურავ იხურავ იხურავს ვიხურავთ იხურავთ იხურავენ
S./O.i. I s. II s. III s. I pl. II pl. III pl.
I s. ----- გიხარშავ ვუხარშავ ----- გიხარშავთ ვუხარშავ
II s. მიხარშავ ----- უხარშავ გვიხარშავ ----- უხარშავ
III s. მიხარშავს გიხარშავს უხარშავს გვიხარშავს გიხარშავთ უხარშავს
I pl. ----- გიხარშავთ ვუხარშავთ ----- გიხარშავთ ვუხარშავთ
II pl. მიხარშავთ ----- უხარშავთ გვიხარშავთ ----- უხარშავთ
III pl. მიხარშავენ გიხარშავენ უხარშავენ გვიხარშავენ გიხარშავენ უხარშავენ
S. ver. ვიხარშავ იხარშავ იხარშავს ვიხარშავთ იხარშავთ იხარშავენ
S./O.i. I s. II s. III s. I pl. II pl. III pl.
I s. ----- გიხუჭავ ვუხუჭავ ----- გიხუჭავთ ვუხუჭავ
II s. მიხუჭავ ----- უხუჭავ გვიხუჭავ ----- უხუჭავ
III s. მიხუჭავს გიხუჭავს უხუჭავს გვიხუჭავს გიხუჭავთ უხუჭავს
I pl. ----- გიხუჭავთ ვუხუჭავთ ----- გიხუჭავთ ვუხუჭავთ
II pl. მიხუჭავთ ----- უხუჭავთ გვიხუჭავთ ----- უხუჭავთ
III pl. მიხუჭავენ გიხუჭავენ უხუჭავენ გვიხუჭავენ გიხუჭავენ უხუჭავენ
S. ver. ვიხუჭავ იხუჭავ იხუჭავს ვიხუჭავთ იხუჭავთ იხუჭავენ
S./O.i. I s. II s. III s. I pl. II pl. III pl.
I s. ----- გიზიდავ ვუზიდავ ----- გიზიდავთ ვუზიდავ
II s. მიზიდავ ----- უზიდავ გვიზიდავ ----- უზიდავ
III s. მიზიდავს გიზიდავს უზიდავს გვიზიდავს გიზიდავთ უზიდავს
I pl. ----- გიზიდავთ ვუზიდავთ ----- გიზიდავთ ვუზიდავთ
II pl. მიზიდავთ ----- უზიდავთ გვიზიდავთ ----- უზიდავთ
III pl. მიზიდავენ გიზიდავენ უზიდავენ გვიზიდავენ გიზიდავენ უზიდავენ
S. ver. ვიზიდავ იზიდავ იზიდავს ვიზიდავთ იზიდავთ იზიდავენ
S./O.i. I s. II s. III s. I pl. II pl. III pl.
I s. ----- გიმალავ ვუმალავ ----- გიმალავთ ვუმალავ
II s. მიმალავ ----- უმალავ გვიმალავ ----- უმალავ
III s. მიმალავს გიმალავს უმალავს გვიმალავს გიმალავთ უმალავს
I pl. ----- გიმალავთ ვუმალავთ ----- გიმალავთ ვუმალავთ
II pl. მიმალავთ ----- უმალავთ გვიმალავთ ----- უმალავთ
III pl. მიმალავენ გიმალავენ უმალავენ გვიმალავენ გიმალავენ უმალავენ
S. ver. ვიმალავ იმალავ იმალავს ვიმალავთ იმალავთ იმალავენ
S./O.i. I s. II s. III s. I pl. II pl. III pl.
I s. ----- გიფლანგავ ვუფლანგავ ----- გიფლანგავთ ვუფლანგავ
II s. მიფლანგავ ----- უფლანგავ გვიფლანგავ ----- უფლანგავ
III s. მიფლანგავს გიფლანგავს უფლანგავს გვიფლანგავს გიფლანგავთ უფლანგავს
I pl. ----- გიფლანგავთ ვუფლანგავთ ----- გიფლანგავთ ვუფლანგავთ
II pl. მიფლანგავთ ----- უფლანგავთ გვიფლანგავთ ----- უფლანგავთ
III pl. მიფლანგავენ გიფლანგავენ უფლანგავენ გვიფლანგავენ გიფლანგავენ უფლანგავენ
S. ver. ვიფლანგავ იფლანგავ იფლანგავს ვიფლანგავთ იფლანგავთ იფლანგავენ
b) Conjugate like the verb ვწერ – ვიწერ – ვუწერ:
(გა)ვტეხ (break) (გა)ვრეცხ (wash)
(და)ვბან (wash somebody)
S./O.i. I s. II s. III s. I pl. II pl. III pl.
I s. ----- გიტეხ ვუტეხ ----- გიტეხთ ვუტეხ
II s. მიტეხ ----- უტეხ გვიტეხ ----- უტეხ
III s. მიტეხს გიტეხს უტეხს გვიტეხს გიტეხთ უტეხს
I pl. ----- გიტეხთ ვუტეხთ ----- გიტეხთ ვუტეხთ
II pl. მიტეხთ ----- უტეხთ გვიტეხთ ----- უტეხთ
III pl. მიტეხენ გიტეხენ უტეხენ გვიტეხენ გიტეხენ უტეხენ
S. ver. ვიტეხ იტეხ იტეხს ვიტეხთ იტეხთ იტეხენ
S./O.i. I s. II s. III s. I pl. II pl. III pl.
I s. ----- გირეცხავ ვურეცხავ ----- გირეცხავთ ვურეცხავ
II s. მირეცხავ ----- ურეცხავ გვირეცხავ ----- ურეცხავ
III s. მირეცხავს გირეცხავს ურეცხავს გვირეცხავს გირეცხავთ ურეცხავს
I pl. ----- გირეცხავთ ვურეცხავთ ----- გირეცხავთ ვურეცხავთ
II pl. მირეცხავთ ----- ურეცხავთ გვირეცხავთ ----- ურეცხავთ
III pl. მირეცხავენ გირეცხავენ ურეცხავენ გვირეცხავენ გირეცხავენ ურეცხავენ
S. ver. ვირეცხავ ირეცხავ ირეცხავს ვირეცხავთ ირეცხავთ ირეცხავენ
S./O.i. I s. II s. III s. I pl. II pl. III pl.
I s. ----- გიბან ვუბან ----- გიბანთ ვუბან
II s. მიბან ----- უბან გვიბან ----- უბან
III s. მიბანს გიბანს უბანს გვიბანს გიბანთ უბანს
I pl. ----- გიბანთ ვუბანთ ----- გიბანთ ვუბანთ
II pl. მიბანთ ----- უბანთ გვიბანთ ----- უბანთ
III pl. მიბანენ გიბანენ უბანენ გვიბანენ გიბანენ უბანენ
S. ver. ვიბან იბან იბანს ვიბანთ იბანთ იბანენ`
      }
    ]
  },
  {
    title: 'Lesson 24',
    blocks: [
      {
        title: 'Text',
        geo: `მე მიყვარს ხელოვნება და ხელოვანი ხალხი. თავად შემოქმედებითი პროცესიც
ძალიან საინტერესოა. ყველა სფერო საინტერესოა. მე კი განსაკუთრებით თეატრი,
ოპერა და ბალეტი მიყვარს. როცა დირიჟორი სცენაზეა და ნიჭიერი მომღერლები
ასრულებენ სპექტაკლს, ეს შეუფასებელია! საერთოდ, ჩვენს ოჯახში ყოველთვის
ვმსჯელობთ ხელოვნებასა და კულტურაზე. ჩემი ძმა არქიტექტორია და ჩემი
დედამთილი ქორეოგრაფია. ჩემი ქმარი არის მოქანდაკე, მე კი ვარ მუსიკოსი. რა თქმა
უნდა, სულ ხელოვნებაზე ვლაპარაკობთ. ასეთი პროფესიები გვაქვს და აბა, სხვა რაზე
ვისაუბრებთ!
– მე მაქვს ოპერის ბილეთები, ჩემს შვილს კი უნდა ცირკში წასვლა. უნდა რამე
მოვიფიქრო. – იდეა მაქვს! მე მყავს ერთი ნაცნობი, რომელიც არც თუ უნიჭო
რეჟისორია და ახლა ბავშვები აინტერესებს ფილმისათვის. როგორი აზრია? – არ ვიცი,
ჩემს შვილს როგორ მოეწონება…
ამ ნაწარმოების თემა ეხება თავისუფლებას. ეს არის მოხუც ადამიანებზე. ამ
სპექტაკლში ყველაფერი კარგად არის დაფიქრებით გაკეთებული. ეტყობა, მართლაც
ნიჭიერი ხალხია აქ. ამ თეატრის მხატვარი ძალიან ცნობილი ადამიანია. მისი
ნახატები ხან მუზეუმშია, ხან – გამოფენაზე. არ გინდა, გამოფენაზე წავიდეთ? მოდი,
ჯერ მუზეუმში წავიდეთ.`,
        eng: `I love art and artistic people. The creative process itself is also very interesting. Every sphere
is interesting. I especially love theater, opera and ballet. When the conductor is on the stage
and the talented singers are performing a performance, this priceless! Generally our family
always discusses art and culture. My brother is an architect and my mother-in-law is a
choreographer. My husband is a sculptor and I'm a musician. So, of course, we talk about art.
We have such professions and well, what other things are there to talk about?
– I have opera tickets but my child wants to go to the circus. I must think of something. – I
have an idea! I have an acquaintance, a person who is not a talentless director and now he is
interested in children for (his) film. How is this idea? – I don't know how my child will like
it...
The theme of these artworks is about freedom. This is about old people. In this performance
everything is well thought out. It seems there are truly talented people here. The artist of
this theater is a very well-known person. His/her paintings always are either at the museum,
or on the exhibition. Don't you want to go to the exhibit? Let's still go to the museum.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) სასიამოვნოა ნიჭიერ ადამიანებთან ყოფნა.
b) – რა სფეროში მუშაობთ? – მე სცენარისტი ვარ და სცენარებს ვწერ
ფილმისთვის.
c) ეს უნიჭო ნაწარმოებია. უინტერესო დასაწყისი აქვს.
d) ის ასაკიანი ქალბატონი, სხვათაშორის, გემოვნებიანი ნიჭიერი მომღერალი
გახლავთ.
e) თავისუფალი შემოქმედებითი პროცესი ფიქრი გახლავთ, კამათი, მსჯელობა,
დაფიქრება, აწონ-დაწონვა.
f) უაზრო რჩევა იყო უფასო კონცერტზე წასვლა და უგემოვნო მუსიკის მოსმენა.
g) იცით ეს ქორეოგრაფიული პროგრამა?
h) ამ კომპოზიტორის მელოდიით სულაც ვერ ვისიამოვნეთ.
i) – ეს ნახატი ზეთშია? – რა თქმა უნდა. – აი, დიდი ნიჭი!
j) ეს შემოქმედი ადამიანის არჩევანია. მომწონს.`,
        eng: `a) It's nice to be with talented people.
b) – What sphere do you work in? – I'm a screenplay writer and I write scripts for films.
c) This is talentless artwork. It has an uninteresting beginning.
d) That aged lady, by the way, is a talented singer with good taste in art.
e) The free creative process is: to think, to argue, to discuss, to think over.
f) The senseless advice was to go to the concert free of charge and to listen to tasteless
music.
g) Do you know this choreographic program?
h) We couldn’t enjoy by the melody of this composer at all.
i) – Is this painting in oil? – Of course. – This here is great talent!
j) This is a creative person's choice. I like it.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) ჩემი მეგობარი ნიჭიერი რეჟისორია. მისი სპექტაკლები დიდებულია.
b) მე მიყვარს თეატრი, მაგრამ პიესებს ვერ ვუყურებ, რადგანაც მე უნდა ვიყო
სცენაზე – მე ვარ მსახიობი.
c) მოქანდაკეებს ჩვეულებრივ (საერთოდ) შეუძლიათ დახატონ კარგად. მაგრამ
არქიტექტორები უკეთესად ხატავენ. ისინი ჩვეულებრივ (საერთოდ) ხატავენ
სახლებს.
d) ვინ არის ეს ნიჭიერი მსახიობი? ოპერა მოგწონს თუ ბალეტი?
e) შეგიძლია დახატო ეს სურათები ზეთში?
f) გაქვთ პროგრამა? გაქვთ იდეა, (იცით) ახლა სად მივდივართ?
g) – შემოქმედებითი პროცესი თავისუფალია აბსოლუტურად. – დიახ, უნდა
იყოს. მაგრამ ძალიან ხშირად აქ ძალიან ხმაურია.
h) – ფიქრი და მსჯელობა, ეს შემოქმედება არის. ხომ ასე ფიქრობ? (ასე არ
ფიქრობ?) – დიახ, გეთანხმები.
i) მე მომწონს მუსიკა. შენი ნათესავი ძალიან ნიჭიერი კომპოზიტორია.
j) მუზეუმში შეგვიძლია წასვლა თუ გამოფენაზე?`,
        eng: `a) My friend is a talented producer. His performances are great.
b) I love theater, but I can’t watch the plays, as I have to be on stage – I am an artist.
c) Sculptors usually can paint well. But architects paint better. They usually paint
houses.
d) Who is this talented artist? Do you like opera or ballet?
e) Can you paint these pictures in oil?
f) Do you have a program? Do you have an idea, where are we going now?
g) – The creative process is absolutely free. – Yes, it must be. But very often it’s very
noisy here.
h) – Thinking and discussing this is creation. Don’t you think so? – Yes, I agree with
you.
i) I like music. Your relative is a very talented composer.
j) Can we go to the museum or to the exhibition?`
      },
      {
        title: '3. Produce different forms by adding preverbs to the following verbs',
        geo: `ფრენა (“to fly”) e.g. მივფრინავ
სირბილი (“to run”) e.g. მივრბივარ`,
        eng: `ფრენა (“to fly”) e.g. მივფრინავ
სირბილი (“to run”) e.g. მივრბივარ
მივფრინავ I go flying
მოვფრინავ I come flying
დავფრინავ I go flying about
მივრბივარ I go running
მოვრბივარ I come running
ავრბივარ I go running up
დავრბივარ I go running about
ჩავრბივარ I go running down
შევრბივარ I go running in
გავრბივარ I go running out/off
გადავრბივარ I go running across
ამოვრბივარ I come running up
ჩამოვრბივარ I come running down
შემოვრბივარ I come running in
გამოვრბივარ I come running out`
      }
    ]
  },
  {
    title: 'Lesson 25',
    blocks: [
      {
        title: 'Text',
        geo: `დედოფალს აქვს ბევრი სამკაული და პარფიუმერია. ოქროს ბეჭედი, ვერცხლის
სამაჯური, მძივები, საყურეები, სუნამოები, პომადები, თვალის ფანქრები,
ფრჩხილების ლაქი, მაკრატელი და ქლიბი. საერთოდ, ქალებს ძალიან უყვართ ასეთი
რამეები. მეფეს კი ქვეყანაში ომისა და მშვიდობის საქმეები ეხება.
შენ წარმოიდგინე, ეს სტუმრების განსხვავებული ჯგუფია და საკმაოდ კარგი
ურთიერთობები გვექნება უდავოდ. აი, ამ პიროვნებამ მიიღო ეს წერილები, წაიკითხა
და დაბეჭდა ტექსტები. გაამზადა ყველაფერი ჩვენი სტუმრებისათვის. ყოჩაღ! ახლა
მან უნდა გაათბოს სახლი და დაწეროს წერილები.
– წარმოგიდგენია, ერთი შეშლილ პოეტს ჰყავდა ერთი ვირთხა.
– ვირთხა თაგვია?
– საერთოდ, ვირთხები თაგვებისაგან განსხვავდებიან.
– რა განსხვავებაა?
– დიდი სხვაობაა ზომებში. ვირთხის სიმაღლე, საერთო ზომა და წონა მეტია.
– როგორც ვიცი, ვირთხას უყვარს ოქროს სამკაულები. მე ამის შესახებ ერთი
ზღაპარიც ვიცი.
– მართლა? რა საინტერესოა!`,
        eng: `The queen has a lot of jewelry and perfumery: a gold ring, a silver bracelet, beads, earrings,
perfumes, lipsticks, eyebrow pencils, nail colors, scissors, and a nail file. Generally, women
really love such things. But the king is concerned about the business of peace and war in the
country.
Imagine, these are guests of a different group and we will undoubtedly have rather good
relations. Here, this person received these letters, read and printed the texts. He prepared
everything for our guests. Good for him! Now he must warm the house and write the letters.
– Can you imagine, a crazy poet having a rat?
– Is a rat a mice?
– Generally, rats are different from mice.
– What's the difference?
– There is a big difference in size. A rat's height, general size and weight is more.
– As I know, rats loves gold jewelry. I know a fairytale about it.
– Really? How interesting!`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) ეს ჩემი უფროსი დაა, ეს კი ჩემი უმცროსი ძმა გახლავთ.
b) დედოფალი და მეფე რომელ ქვეყანაში არის ახლაც?
c) წარმოგიდგენია, მე არა მაქვს პარფიუმერია! ჩემმა შვილმა დამიმალა, ასე
მითხრა, რომ თითქოს მე ეს არ მიხდება.
d) მძივი, საყურე, ბეჭედი, სამაჯური, პომადა და თვალის ფანქარი ქალის
სამკაულებია.
e) საერთოდ, სუნამო, ფრჩხილების ლაქი, მაკრატელი და ქლიბი ქალის ნივთებია.
f) – ომი თუ მშვიდობა? – რა თქმა უნდა, მშვიდობა! ჩვენ ყველას მშვიდობა
გვინდა საქართველოში.
g) – თუ შეიძლება, ამიწონეთ ორი კილო კიტრი და კომბოსტო. რამდენი
მოგართვათ? – გადაიხადეთ სამი ლარი.
h) – ამიწონეთ ნახევარი კილო ძროხის ხორცი. რა ღირს ეს ხორცი? – ოთხი ლარი.
გადაიხადეთ!
i) ცხადია, განსხვავებული ურთიერთობები გვაქვს უმცროსებთან და
უფროსებთან.
j) ეს ზოლიანი კაბა და ვერცხლისფერი სამკაულები უდავოდ გიხდება.`,
        eng: `a) This is my elder sister, and this is my younger brother.
b) In which country are the king and queen in right now?
c) Can you imagine, I don't have (any) perfumery! My child hid it. He/she told me that
it doesn't suit me.
d) Beads, earrings, rings, bracelets, lipstick and eyebrow pencils are women's jewelry.
e) Generally perfume, nail polish, scissors and emery boards are women's things.
f) – War or peace? – Of course, peace! We all want peace in Georgia.
g) – Please weight two kilos of cucumbers and cabbage for me. How much should I give
you? – Pay three laries.
h) – Please weight for me half a kilo of beef. How much does this meat cost? – Four
laries. Pay!
i) It's clear, that we have different relations with minors and elders.
j) This stripped dress and silver jewelry undoubtedly suit you.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) How much does it cost?
b) How much should I give you?
c) – Do you have any cosmetics here? – I have lipstick, an eyebrow pencil, scissors and
perfume.
d) The king gave to the queen many golden and silver jewelry – earrings, rings,
bracelets, and necklaces. Can you imagine this!
e) Tell me something about rats and mice. Where do they live and what do they eat?
f) I am hiding from him. I would hide. I’II hide from her.
g) I wish I could warm my house. But I can not.
h) Please, pay 5 GEL for it.
i) No doubt, this is an interesting group of crazy people!
j) A special relationship between younger and elder relatives is usual in Georgia.
3. Conjugate the following verbs in all series with both one-personal and two-personal
forms:
ვიფარები / ვეფარები (cover)
ვიხატები / ვეხატები (paint)
ტკბება / უტკბება (sweet)`,
        eng: `a) რა ღირს ეს?
b) რამდენი მოგართვათ?
c) – თქვენ გაქვთ კოსმეტიკა აქ? – მე მაქვს პომადა, თვალის ფანქარი, მაკრატელი
და სუნამო.
d) მეფემ დედოფალს მისცა ბევრი ოქროს და ვერცხლის სამკაული – საყურები,
სამაჯურები და ყელსაბამები. წარმოგიდგენია!
e) მითხარი, ვირთხების და თაგვების შესახებ. სად ცხოვრობენ და რას ჭამენ?
f) მე ვემალები მას. მე დავმალულიყავ. მე დავემალები მას.
g) ნეტავ / მინდოდა მე გავმეთბო ჩემი სახლი. მაგრამ არ შემიძლია.
h) თუ შეიძლება, გადაიხადეთ 5 GEL ამისთვის (ამაში).
i) უდავოდ, ეს არის გიჟი პიროვნებების (ხალხის) საინტერესო ჯგუფი!
j) განსაკუთრებული ურთიერთობები უმცროსებთან და უფროს ნათესავებთან
ჩვეულებრივი ამბავია საქართველოში.
3. Conjugate the following verbs in all series with both one-personal and two-personal
forms:
ვიფარები / ვეფარები (cover)
ვიხატები / ვეხატები (paint)
ტკბება / უტკბება (sweet)
ვიფარები / ვეფარები (cover)
აწმყო One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
ვიფარები
იფარები
იფარება
ვიფარებით
იფარებით
იფარებიან
ვეფარები
ეფარები
ეფარება
ვეფარებით
ეფარებით
ეფარებიან
უწყვეტელი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
ვიფარებოდი
იფარებოდი
იფარებოდა
ვიფარებოდით
იფარებოდით
იფარებოდნენ
ვეფარებოდი
ეფარებოდი
ეფარებოდა
ვეფარებოდით
ეფარებოდით
ეფარებოდნენ
აწმყოს კავშირებითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
ვიფარებოდე
იფარებოდე
იფარებოდეს
ვიფარებოდეთ
იფარებოდეთ
იფარებოდნენ
ვეფარებოდე
ეფარებოდე
ეფარებოდეს
ვეფარებოდეთ
ეფარებოდეთ
ეფარებოდნენ
მყოფადი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავიფარები
დაიფარები
დაიფარება
დავიფარებით
დაიფარებით
დაიფარებიან
დავეფარები
დაეფარები
დაეფარება
დავეფარებით
დაეფარებით
დაეფარებიან
ხოლმეობითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავიფარებოდი
დაიფარებოდი
დაიფარებოდა
დავიფარებოდით
დაიფარებოდით
დაიფარებოდნენ
დავეფარებოდი
დაეფარებოდი
დაეფარებოდა
დავეფარებოდით
დაეფარებოდით
დაეფარებოდნენ
მყოფადის
კავშირებითი
One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავიფარებოდე
დაიფარებოდე
დაიფარებოდეს
დავიფარებოდეთ
დაიფარებოდეთ
დაიფარებოდნენ
დავეფარებოდე
დაეფარებოდე
დაეფარებოდეს
დავეფარებოდეთ
დაეფარებოდეთ
დაეფარებოდნენ
წყვეტილი / აორისტი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავიფარე
დაიფარე
დაიფარა
დავიფარეთ
დაიფარეთ
დაიფარნენ
დავეფარე
დაეფარე
დაეფარა
დავეფარეთ
დაეფარეთ
დაეფარნენ
II კავშირებითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავიფარო
დაიფარო
დაიფაროს
დავიფაროთ
დაიფაროთ
დაიფარონ
დავეფარო
დაეფარო
დაეფაროს
დავეფაროთ
დაეფაროთ
დაეფარონ
I თურმეობითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავფარულვარ
დაფარულხარ
დაფარულა
დავფარულვართ
დაფარულხართ
დაფარულან
დავფარვივარ
დაფარვიხარ
დაფარვია
დავფარვივართ
დაფარვიხართ
დაფარვიან
II თურმეობითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავფარულიყავ(ი)
დაფარულიყავ(ი)
დაფარულიყო
დავფარულიყავით
დაფარულიყავით
დაფარულიყვნენ
დავფარვოდი
დაფარვოდი
დაფარვოდა
დავფარვოდით
დაფარვოდით
დაფარვოდნენ
III კავშირებითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავფარულიყავ(ი)
დაფარულიყავ(ი)
დაფარულიყოს
დავფარულიყავით
დაფარულიყავით
დაფარულიყონ
დავფარვოდე
დაფარვოდე
დაფარვოდეს
დავფარვოდეთ
დაფარვოდეთ
დაფარვოდნენ
ვიხატები / ვეხატები (paint)
აწმყო One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
ვიხატები
იხატები
იხატება
ვიხატებით
იხატებით
იხატებიან
ვეხატები
ეხატები
ეხატება
ვეხატებით
ეხატებით
ეხატებიან
უწყვეტელი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
ვიხატებოდი
იხატებოდი
იხატებოდა
ვიხატებოდით
იხატებოდით
იხატებოდნენ
ვეხატებოდი
ეხატებოდი
ეხატებოდა
ვეხატებოდით
ეხატებოდით
ეხატებოდნენ
აწმყოს კავშირებითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავიხატებოდე
დაიხატებოდე
დაიხატებოდეს
დავიხატებოდეთ
დაიხატებოდეთ
დაიხატებოდნენ
დავეხატებოდე
დაეხატებოდე
დაეხატებოდეს
დავეხატებოდეთ
დაეხატებოდეთ
დაეხატებოდნენ
წყვეტილი / აორისტი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავიხატე
დაიხატე
დაიხატა
დავიხატეთ
დაიხატეთ
დაიხატნენ
დავეხატე
დაეხატე
დაეხატა
დავეხატეთ
დაეხატეთ
დაეხატნენ
II კავშირებითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავიხატო
დაიხატო
დაიხატოს
დავიხატოთ
დაიხატოთ
დაიხატონ
დავეხატო
დაეხატო
დაეხატოს
დავეხატოთ
დაეხატოთ
დაეხატონ
I თურმეობითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავხატულვარ
დახატულხარ
დახატულა
დავხატულვართ
დახატულხართ
დახატულან
დავხატვივარ
დახატვიხარ
დახატვია
დავხატვივართ
დახატვიხართ
დახატვიან
II თურმეობითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავხატულიყავ(ი)
დახატულიყავ(ი)
დახატულიყო
დავხატულიყავით
დახატულიყავით
დახატულიყვნენ
დავხატვოდი
დახატვოდი
დახატვოდა
დავხატვოდით
დახატვოდით
დახატვოდნენ
III კავშირებითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავხატულიყავ(ი)
დახატულიყავ(ი)
დახატულიყოს
დავხატულიყავით
დახატულიყავით
დახატულიყონ
დავხატვოდე
დახატვოდე
დახატვოდეს
დავხატვოდეთ
დახატვოდეთ
დახატვოდნენ
ტკბება / უტკბება (sweet)
აწმყო One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
ვიხატები
იხატები
იხატება
ვიხატებით
იხატებით
იხატებიან
ვეხატები
ეხატები
ეხატება
ვეხატებით
ეხატებით
ეხატებიან
უწყვეტელი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
ვტკბებოდი
ტკბებოდი
ტკბებოდა
ვტკბებოდით
ტკბებოდით
ტკბებოდნენ
ვუტკბებოდი
უტკბებოდი
უტკბებოდა
ვუტკბებოდით
უტკბებოდით
უტკბებოდნენ
აწმყოს კავშირებითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
ვტკბებოდე
ტკბებოდე
ტკბებოდეს
ვტკბებოდეთ
ტკბებოდეთ
ტკბებოდნენ
ვუტკბებოდე
უტკბებოდე
უტკბებოდეს
ვუტკბებოდეთ
უტკბებოდეთ
უტკბებოდნენ
მყოფადი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავტკბები
დატკბები
დატკბება
დავტკბებით
დატკბებით
დატკბებიან
დავუტკბები
დაუტკბები
დაუტკბება
დავუტკბებით
დაუტკბებით
დაუტკბებიან
ხოლმეობითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავტკბებოდი
დატკბებოდი
დატკბებოდა
დავტკბებოდით
დატკბებოდით
დატკბებოდნენ
დავუტკბებოდი
დაუტკბებოდი
დაუტკბებოდა
დავუტკბებოდით
დაუტკბებოდით
დაუტკბებოდნენ
მყოფადის
კავშირებითი
One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავტკბებოდე
დატკბებოდე
დატკბებოდეს
დავტკბებოდეთ
დატკბებოდეთ
დატკბებოდნენ
დავუტკბებოდე
დაუტკბებოდე
დაუტკბებოდეს
დავუტკბებოდეთ
დაუტკბებოდეთ
დაუტკბებოდნენ
წყვეტილი / აორისტი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავტკბი
დატკბი
დატკბა
დავტკბით
დატკბით
დატკბნენ
დავუტკბი
დაუტკბი
დაუტკბა
დავუტკბით
დაუტკბით
დაუტკბნენ
II კავშირებითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავტკბე
დატკბე
დატკბეს
დავტკბეთ
დატკბეთ
დატკბნენ
დავუტკბე
დაუტკბე
დაუტკბეს
დავუტკბეთ
დაუტკბეთ
დაუტკბნენ
I თურმეობითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავმტკბარვარ
დამტკბარხარ
დამტკბარა
დავმტკბარვართ
დამტკბარხართ
დამტკბარან
დავტკბობივარ
დატკბობიხარ
დატკბობია
დავტკბობივართ
დატკბობიხართ
დატკბობიან
II თურმეობითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავმტკბარიყავ(ი)
დამტკბარიყავ(ი)
დამტკბარიყო
დავმტკბარიყავით
დამტკბარიყავით
დამტკბარიყვნენ
დავტკბობოდი
დატკბობოდი
დატკბობოდა
დავტკბობოდით
დატკბობოდით
დატკბობოდნენ
III კავშირებითი One-Personal Two-Personal
I s.
II s.
III s.
I pl.
II pl.
III pl.
დავმტკბარიყავ(ი)
დამტკბარიყავ(ი)
დამტკბარიყოს
დავმტკბარიყავით
დამტკბარიყავით
დამტკბარიყონ
დავტკბობოდე
დატკბობოდე
დატკბობოდეს
დავტკბობოდეთ
დატკბობოდეთ
დატკბობოდნენ`
      }
    ]
  },
  {
    title: 'Lesson 26',
    blocks: [
      {
        title: 'Text',
        geo: `– ეს გუნდი ამ სტადიონზე დღეს პირველად თამაშობს. რა თქმა უნდა,
ვგულშემატკივრობ ჩემი ქვეყნის ნაკრებს. საერთოდ, ბრაზილიელები კარგად
თამაშობენ ფეხბურთს, მაგრამ იტალიელთა გუნდიც საკმაოდ კარგია. გახსოვს,
როგორ კარგად ითამაშეს ამასწინათ?
– სამწუხაროდ, ვერ ვუყურე მაგ თამაშს. ვინ არის ამათი მწვრთნელი? მე მგონი,
ფრანგია. მსაჯი კი ბელგიელია.
– რომელი სპორტი მოგწონთ: ფეხბურთი, კალათბურთი, ფრენბურთი, ცურვა,
ჩოგბურთი, ხელბურთი, ჭიდაობა, კრივი, ტანვარჯიში, ჭადრაკი, ცხენოსნობა,
თხილამურებით სრიალი, ციგურაობა?
– ყველა სპორტი კარგია.
– გახსოვდეს, სპორტი სასარგებლო და აუცილებელია შენი ჯანმრთელობისათვის.
აი, ორი ბილეთი და კალათბურთზე წავიდეთ ხვალ საღამოს. ეს ჩემი საჩუქარია
შენთვის. ხომ გაგეხარდა?
– რა საკვირველია, სასიამოვნოა. გმადლობთ.
– არაფერს.
ეს გზა გაფუჭებული იყო და გააკეთეს. ძალიან კარგი. ახლა შეიძლება მანქანით
სიარული. აქ აქამდე ვერ დადიოდა ველოსიპედის გარდა ვერაფერი, ვერც
მოტოციკლეტი და ვერც სატვირთო მანქანა. ჩვენი გამზირიც გააკეთეს ამასწინათ. ასე,
რომ როცა გინდა, მობრძანდი ჩემთან. გზაში მანქანა აღარ გაგიფუჭდება.
მანქანის ნაწილებია: საბურავი, საჭე, მოტორი, საბარგული.`,
        eng: `– Today this team plays first time at this stadium. Of course, I'm a fan of my country's
team. Generally the Brazilians play football (soccer) well, but the Italian team is also good
enough. Do you remember how well they played recently?
– Unfortunately I couldn't watch this play. Who is their coach? I think he is French. But
the referee is Belgium.
– What kind of sports do you like: soccer /football, basketball, volleyball, swimming,
tennis, handball, wrestling, boxing, gymnastics, chess, horseback riding, skiing, skating?
– All sports are good.
– Remember that sports are useful and necessary for your health. Here are two tickets, and
let's go to the basketball game tomorrow evening. This is my gift to you. Are you happy?
Don't you remember?
– Of course, it's nice of you. Thank you.
– It was nothing.
This road was damaged and they fixed it. Very good! Now it's possible to drive by car. Until
now nothing could go here except (only) a bicycle. Not even a motorcycle and not even a
truck. Our avenue was also done recently. So come to me (visit me) anytime (when your car
won't break down in the road).
The parts of a car are: tires, a steering wheel, an engine, (and) a trunk.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) ამ გუნდმა მართლა თვითონ მოიგო, თუ მსაჯმა მოაგებინა?
b) – ამასწინათ გზა გაფუჭდა და გააკეთეს. – ვინ გააკეთა? – ალბათ, ქალაქის
ხელმძღვანელობამ, ან ამ ქალაქის მთავრობამ.
c) ტაქსის ნაწილებია: საჭე, მოტორი, საბურავი, საბარგული.
d) ტაქსი, მოტოციკლეტი, ველოსიპედი, სახანძრო მანქანა, სატვირთო მანქანა,
სასწრაფო მანქანა და აღარ მახსოვს, კიდევ რა ტრანსპორტი იყო სტადიონზე.
e) ნარდი, კარტი და დომინო სერიოზული სპორტია? როგორ ფიქრობ?
f) სერიოზული სპორტია ფეხბურთი, კალათბურთი, ფრენბურთი, ცურვა,
ჩოგბურთი, ხელბურთი, ჭიდაობა, კრივი, ტანვარჯიში, ჭადრაკი, ცხენოსნობა,
თხილამურებით სრიალი, ციგურაობა.
g) რომელ სპორტულ დარბაზშია შეჯიბრი კალათბურთში? ვინ არის მსაჯი?
h) – ეს გუნდი მოიგებს თუ წააგებს? რა თქვა მწვრთნელმა, მოვიგებთო? – კი,
მოვიგებთო.
i) აქ წერია, რომ ერთი თამაში აქვს კიდევ ამ ნაკრებს და ვნახოთ, რას იზამს. რას
გააკეთებინებს ეს მწვრთნელი.
j) – რა გახატია ტანსაცმელზე? – არ ვიცი, რა მაწერია პერანგზე. – მეთერთმეტე
ნომერი.`,
        eng: `a) Did this team truly win themselves or had the referee made them win?
b) – Recently the road was damaged and they fixed it. – Who did it? – Probably the
city's leadership or this city's government.
c) Parts of a taxi are: a steering wheel, an engine, tires, and a trunk.
d) Taxis, motorcycles, bicycles, fire trucks, trucks, ambulances; I don’t remember what
other transportation was at the stadium.
e) Are backgammon, cards and dominos serious sports? What do you think?
f) Serious sports are football (soccer), basketball, volleyball, swimming, tennis, handball,
wrestling, boxing, gymnastics, chess, horseback riding, skiing, skating.
g) In which sport hall is the basketball competition? Who is the referee?
h) – Will this team win or loose? – What did the coach say – “we will win”? – Yes, he
said – “We’ll win”.
i) Here it is written that this team already has a game and we'll see what they can do.
What can this coach make them do?
j) – What is painted on (your) clothes? – I don’t know what it is written on (my) shirt.
– The eleventh number.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) რომელი სპორტი უფრო გიყვარს: კალათბურთი, ფეხბურთი, ჭადრაკი, ცურვა,
ჩოგბურთი თუ თხილამურებით სრიალი?
b) რა წერია აქ?
c) რას გააკეთებს ეს გუნდი? ისინი მოიგებენ?
d) თუ ვხატივარ შენს ტანსაცმელზე, მე უნდა ვიყო დიდებული სპორტსმენი.
e) მე ვიყურებ ჭიდაობას და ხელბურთს ამ საღამოს.
f) ტაქსი! აღარ მახსოვს, სად უნდა წავიდეთ.
g) გახსოვდეს, ეს სპორტული დარბაზი დღეს სავსე იქნება!
h) უნდა ადრე მოხვიდე, თუ სადმე გინდა დაჯდომა.
i) მე არ ვთამაშობ კარტს ან დომინოს.
j) შენი ძმა გათამაშებს ჭადრაკს?
k) მე შენ გათამაშებ ამ თამაშს ჩემთან.`,
        eng: `a) Which sport do you love more: basketball, football, chess, swimming, tennis or
skiing?
b) What is written here?
c) What will this team do? Will they win?
d) If I’m painted on your clothes, I must be a great sportsman.
e) I’m going to watch wrestling and handball tonight.
f) Taxi! I don’t remember where to go…
g) Remember this sport hall will be full today! You should come earlier if you want to
sit down somewhere.
h) I don’t play cards or dominos.
i) Will your brother make you play chess?
j) I’ll make you play this game with me.`
      },
      {
        title: '3. Conjugate the following verbs in all series',
        geo: `აფარია (covered)
ახატია (painted)
აბია (tied)`,
        eng: `აფარია (covered)
ახატია (painted)
აბია (tied)
აწმყო
ვაფარივარ
აფარიხარ
აფარია
ვაფარივართ
აფარიხართ
აფარიან
ვხატივარ
ხატიხარ
ხატია
ვხატივართ
ხატიხართ
ხატიან
ვაბივარ
აბიხარ
აბია
ვაბივართ
აბიხართ
აბიან
მყოფადი
ვეფარები
ეფარები
ეფარება
ვეფარებით
ეფარებით
ეფარებიან
ვეხატები
ეხატები
ეხატება
ვეხატებით
ეხატებით
ეხატებიან
ვებმები
ებმები
ებმება
ვებმებით
ებმებით
ებმებიან
ხოლმეობითი
ვეფარებოდი
ეფარებოდი
ეფარებოდა
ვეფარებოდით
ეფარებოდით
ეფარებოდნენ
ვეხატებოდი
ეხატებოდი
ეხატებოდა
ვეხატებოდით
ეხატებოდით
ეხატებოდნენ
ვებმებოდი
ებმებოდი
ებმებოდა
ვებმებოდით
ებმებოდით
ებმებოდნენ
მყოფადის კავშირებითი
ვეფარებოდე
ეფარებოდე
ეფარებოდეს
ვეფარებოდეთ
ეფარებოდეთ
ეფარებოდნენ
ვეხატებოდე
ეხატებოდე
ეხატებოდეს
ვეხატებოდეთ
ეხატებოდეთ
ეხატებოდნენ
ვებმებოდე
ებმებოდე
ებმებოდეს
ვებმებოდეთ
ებმებოდეთ
ებმებოდნენ
წყვეტილი / აორისტი
ვეფარე
ეფარე
ეფარა
ვეფარეთ
ეფარეთ
ეფარნენ
ვეხატე
ეხატე
ეხატა
ვეხატეთ
ეხატეთ
ეხატნენ
ვები
ები
ება
ვებით
ებით
ებნენ
II კავშირებითი
ვეფარო
ეფარო
ეფაროს
ვეფაროთ
ეფაროთ
ეფარონ
ვეხატო
ეხატო
ეხატოს
ვეხატოთ
ეხატოთ
ეხატონ
ვება
ება
ებას
ვებათ
ებათ
ებან
I თურმეობითი
1 pers. ვფარებულვარ
2 pers. ვფარებივარ
1 pers. ვხატებულვარ
2 pers. ვხატებივარ
1 pers. დავბმულვარ
2 pers. დავბმივარ
1 pers. ფარებულხარ
2 pers. ფარებიხარ
1 pers. ხატებულხარ
2 pers. ხატებიხარ
1 pers. დაბმულხარ
2 pers. დაბმიხარ
1 pers. ფარებულა
2 pers. ფარებია
1 pers. ხატებულა
2 pers. ხატებია
1 pers. დაბმულა
2 pers. დაბმია
1 pers. ვფარებულვართ
2 pers. ვფარებივართ
1 pers. ვხატებულვართ
2 pers. ვხატებივართ
1 pers. დავბმულვართ
2 pers. დავბმივართ
1 pers. ფარებულხართ
2 pers. ფარებიხართ
1 pers. ხატებულხართ
2 pers. ხატებიხართ
1 pers. დაბმულხართ
2 pers. დაბმიხართ
1 pers. ფარებულან
2 pers. ფარებიან
1 pers. ხატებულან
2 pers. ხატებიან
1 pers. დაბმულან
2 pers. დაბმიან
II თურმეობითი
1 pers. ვფარებულიყავ(ი)
2 pers. ვფარებოდი
1 pers. ვხატებულიყავ(ი)
2 pers. ვხატებოდი
1 pers. დავბმულიყავ(ი)
2 pers. დავბმოდი
1 pers. ფარებულიყავ(ი)
2 pers. ფარებოდი
1 pers. ხატებულიყავ(ი)
2 pers. ხატებოდი
1 pers. დაბმულიყავ(ი)
2 pers. დაბმოდი
1 pers. ფარებულიყო
2 pers. ფარებოდა
1 pers. ხატებულიყო
2 pers. ხატებოდა
1 pers. დაბმულიყო
2 pers. დაბმოდა
1 pers. ვფარებულიყავით
2 pers. ვფარებოდით
1 pers. ვხატებულიყავით
2 pers. ვხატებოდით
1 pers. დავბმულიყავით
2 pers. დავბმოდით
1 pers. ფარებულიყავით
2 pers. ფარებოდით
1 pers. ხატებულიყავით
2 pers. ხატებოდით
1 pers. დაბმულიყავით
2 pers. დაბმოდით
1 pers. ფარებულიყვნენ
2 pers. ფარებოდნენ
1 pers. ხატებულიყვნენ
2 pers. ხატებოდნენ
1 pers. დაბმულიყვნენ
2 pers. დაბმოდნენ
III კავშირებითი
1 pers. ვფარებულიყო
2 pers. ვფარებოდე
1 pers. ვხატებულიყავ(ი)
2 pers. ვხატებოდე
1 pers. დავბმულიყავ(ი)
2 pers. დავბმოდე
1 pers. ფარებულიყო
2 pers. ფარებოდე
1 pers. ხატებულიყავ(ი)
2 pers. ხატებოდე
1 pers. დაბმულიყავ(ი)
2 pers. დაბმოდე
1 pers. ფარებულიყოს
2 pers. ფარებოდეს
1 pers. ხატებულიყო
2 pers. ხატებოდე
1 pers. დავბმულიყო
2 pers. დაბმოდეს
1 pers. ვფარებულიყოთ
2 pers. ვფარებოდეთ
1 pers. ვხატებულიყავით
2 pers. ვხატებოდეთ
1 pers. დავბმულიყავით
2 pers. დავბმოდეთ
1 pers. ვფარებულიყოთ
2 pers. ფარებოდეთ
1 pers. ხატებულიყავით
2 pers. ხატებოდეთ
1 pers. დაბმულიყავით
2 pers. დაბმოდეთ
1 pers. ფარებულიყვნენ
2 pers. ფარებოდნენ
1 pers. ხატებულიყვნენ
2 pers. ხატებოდნენ
1 pers. დავბმულიყვნენ
2 pers. დაბმოდნენ`
      }
    ]
  },
  {
    title: 'Lesson 27',
    blocks: [
      {
        title: 'Text',
        geo: `საქართველოში ბევრი მართლმადიდებლური ეკლესიაა. ქართველები ქრისტიანი
მართლმადიდებლები არიან მეოთხე საუკუნიდან. ეს სახელწიფო რელიგიაა. ამ
ქვეყანაში განვითარებულია ხელოვნება და მეცნიერება. ჩვენს სკოლებში ასწავლიან
სხვადასხვა საგნებს. ესენია: ლიტერატურა, ფიზიკა, ქიმია, გეოგრაფია, გეომეტრია,
ისტორია, გეოლოგია, ბიოლოგია, მათემატიკა, ასტრონომია, ანატომია, ზოოლოგია,
ბოტანიკა და ხელოვნება.
თბილისში არის მრავალი სამეცნიერო კვლევითი ინსტიტუტი, სადაც მეცნიერები
მუშაობენ სხვადასხვა სფეროში. ტარდება ბევრი მნიშვნელოვანი გამოკვლევა.
ამასწინათ ძალიან საინტერესო სტატია იყო დაწერილი, თუ ნახეთ.
მე ვარ ჰუმანიტარული მეცნიერებების სპეციალისტი. ჩემი უფროსი ძმა კი გახლავთ
საბუნებისმეტყველო დარგის მეცნიერი. კერძოდ, ის ფიზიკოსია. უნდა გითხრათ,
რომ ის საკმაოდ სერიოზული მეცნიერია.
შემპირდი, რომ კარგად ისწავლი უცხო ენებს. თუ არ გინდა, რომ უცხო ენების
სპეციალისტი იყო, ენების ცოდნა მაინც აუცილებელია. ახლა კი უკვე გვიანია,
გამორთე შუქი და დაიძინე.`,
        eng: `In Georgia there are many orthodox churches. Georgians have been Orthodox Christians
since the fourth century. This is the state religion. In this country art and science is
developed. In our schools they teach various things, such as: literature, physics, chemistry,
geography, geometry, history, geology, biology, mathematics, astronomy, anatomy, zoology,
botany and art.
In Tbilisi there are many scientific research institutes, where scientists work in different
spheres. There are many important researches hold. Recently a very interesting article was
written, have you seen it?
I am a specialist of humanitarian sciences. My elder brother is a scientist of natural fields.
Namely, he is a physicist. I should tell you that he is a very serious scientist.
Promise me that you'll study foreign languages well. If don't don't wan to be a specialist of
foreign languages, the knowledge of languages is at least necessary. Now it already late, turn
off the light and go to sleep.`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) რას ასწავლიან თქვენს სკოლაში?
b) ამ სკოლა-გიმნაზიაში ისწავლება ლიტერატურა, ფიზიკა, ქიმია, გეოგრაფია,
გეომეტრია, ისტორია, გეოლოგია, ბიოლოგია, მათემატიკა, ასტრონომია,
ანატომია, ზოოლოგია და ბოტანიკა.
c) – თქვენთან უცხო ენებს არ ასწავლიან? – რა თქმა უნდა, ასწავლიან. აბა,
როგორ!
d) საქართველოში მართლმადიდებლობა სახელწიფო რელიგიაა.
e) – თქვენ არა ხართ ამ სიაში. – მერე ჩამწერეთ! – უკაცრავად, ეს ბრძანებაა თუ
თხოვნა? – ცხადია, თხოვნაა.
f) ისტორიას ბევრი გამარჯვება და დამარცხება ახსოვს.
g) თუ ამის საშუალება გაქვთ, აუცილებლად უნდა ასწავლოთ ბავშვებს უცხო
ენები საბავშვო ბაღიდან.
h) შემპირდი, რომ მოხვალ.
i) ეს მნიშვნელოვანი სტატია იყო. ყოჩაღ!
j) სამეცნიერო ინსტიტუტები და ასევე ჩვენი ყველა უნივერსიტეტიც ახალ
სისტემაზე მუშაობს.`,
        eng: `a) What are they teaching at your school?
b) At this school and gymnasium literature, physics, chemistry, geography, geometry,
history, geology, biology, mathematics, astronomy, anatomy, zoology and botany are
taught.
c) – Aren't they teaching foreign languages at yours? – Of course they are teaching
them. Why not?
d) In Georgia orthodoxy is the state religion.
e) – You are not in this list. – Then write me down (in it)! – Excuse me, is this an order
or a request? – It's clear that it's a request.
f) History remembers many victories and defeats.
g) If you have the means, you should certainly teach children foreign languages from
kindergarten.
h) Promise me that you'll come.
i) This was an important article. Bravo!
j) The scientific institutes and our universities as well are working on the new system.`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) ჩართეთ შუქი. გამორთეთ შუქი.
b) შემპირდი, რომ შენ მე დამხატავ.
c) ჩვენ ვსწავლობთ ბევრ საგანს: გეოლოგიას, გეოგრაფიას, ლიტერატურას, უცხო
ენებს და ისტორიას. ჩვენ არ ვსწავლობთ მათემატიკას, ფიზიკას და ქიმიას.
d) საქართველო არის მართლმადიდებელი ქვეყანა. ამ ქვეყანაში ეს არის
სახელწიფო რელიგია მეოთხე საუკუნიდან.
e) მომიყევით თქვენი ინსტიტუტის შესახებ, გაქვთ ახალი კვლევა?
f) გამომიგზავნეთ ეს სტატია, თუ შეიძლება. მე ვფიქრობ, ეს მნიშვნელოვანია
ჩემთვის.
g) უნდა გაიმარჯვო! არ დამარცხდე! ეს თხოვნაა თუ ბრძანება?`,
        eng: `a) Turn the light on. Turn the light off.
b) Promise me that you will paint me.
c) We study many subjects: geology, geography, literature, foreign languages and
history. We don’t study math, physics and chemistry.
d) Georgia is an orthodox country. This is the state religion in this country since the
fourth century.
e) Tell me about your institute, do you have new research?
f) Send me this article, please. I think this is important for me.
g) You must win! Don’t lose! Is it a request or an order?`
      },
      {
        title: '3. Conjugate the following verbs in all series',
        geo: `გორავს / უგორავს (“rolls”)
დუღს / უდუღს (“boils”)`,
        eng: `გორავს / უგორავს (“rolls”)
დუღს / უდუღს (“boils”)
აწმყო
ვგორავ
გორავ
გორავს
ვგორავთ
გორავთ
გორავენ
ვუგორავ
უგორავ
უგორავს
ვუგორავთ
უგორავთ
უგორავენ
ვდუღვარ
დუღხარ
დუღს
ვდუღვართ
დუღხართ
დუღან
ვუდუღვარ
უდუღხარ
უდუღს
ვუდუღვართ
უდუღხართ
უდუღან
უწყვეტელი
ვგორავდი
გორავდი
გორავდა
ვგორავდით
გორავდით
გორავდნენ
ვუგორავდი
უგორავდი
უგორავდა
ვუგორავდით
უგორავდით
უგორავდნენ
ვდუღდი
დუღდი
დუღდა
ვდუღდით
დუღდით
დუღდნენ
ვუდუღდი
უდუღდი
უდუღდა
ვუდუღდით
უდუღდით
უდუღდნენ
აწმყოს კავშირებითი
ვგორავდე
გორავდე
გორავდეს
ვგორავდეთ
გორავდეთ
გორავდნენ
ვუგორავდე
უგორავდე
უგორავდეს
ვუგორავდეთ
უგორავდეთ
უგორავდნენ
ვდუღდე
დუღდე
დუღდე
ვდუღდეთ
დუღდეთ
დუღდნენ
ვუდუღდე
უდუღდე
უდუღდეს
ვუდუღდეთ
უდუღდეთ
უდუღდნენ
მყოფადი
ვიგორებ
იგორებ
იგორებს
ვიგორებთ
იგორებთ
იგორებენ
გავუგორებ
გაუგორებ
გაუგორებს
გავუგორებთ
გაუგორებთ
გაუგორებენ
ვიდუღებ
იდუღებ
იდუღებს
ვიდუღებთ
იდუღებთ
იდუღებენ
მოვუდუღებ
მოუდუღებ
მოუდუღებს
მოვუდუღებთ
მოუდუღებთ
მოუდუღებენ
ხოლმეობითი
ვიგორებდი
იგორებდი
იგორებდა
ვიგორებდით
იგორებდით
იგორებდნენ
გავუგორებდი
გაუგორებდი
გაუგორებდა
გავუგორებდით
გაუგორებდით
გაუგორებდნენ
ვიდუღებდი
იდუღებდი
იდუღებდა
ვიდუღებდით
იდუღებდით
იდუღებდნენ
მოვუდუღებდი
მოუდუღებდი
მოუდუღებდა
მოვუდუღებდით
მოუდუღებდით
მოუდუღებდნენ
მყოფადის კავშირებითი
ვიგორებდე
იგორებდე
იგორებდეს
ვიგორებდეთ
იგორებდეთ
იგორებდნენ
გავუგორებდე
გაუგორებდე
გაუგორებდეს
გავუგორებდეთ
გაუგორებდეთ
გაუგორებდნენ
ვიდუღებდე
იდუღებდე
იდუღებდეს
ვიდუღებდეთ
იდუღებდეთ
იდუღებდნენ
მოვუდუღებდე
მოუდუღებდე
მოუდუღებდეს
მოვუდუღებდეთ
მოუდუღებდეთ
მოუდუღებდნენ
წყვეტილი / აორისტი
ვიგორე
იგორე
იგორა
ვიგორეთ
იგორეთ
იგორეს
(გა)ვუგორე
(გა)უგორე
(გა)უგორა
(გა)ვუგორეთ
(გა)უგორეთ
(გა)უგორეს
ვიდუღე
იდუღე
იდუღა
ვიდუღეთ
იდუღეთ
იდუღეს
ვუდუღე
უდუღე
უდუღა
ვუდუღეთ
უდუღეთ
უდუღეს
II კავშირებითი
ვიგორო
იგორო
იგოროს
ვიგოროთ
იგოროთ
იგორონ
(გა)ვუგორო
(გა)უგორო
(გა)უგოროს
(გა)ვუგოროთ
(გა)უგოროთ
(გა)უგორონ
ვიდუღო
იდუღო
იდუღოს
ვიდუღოთ
იდუღოთ
იდუღონ
ვუდუღო
უდუღო
უდუღოს
ვუდუღოთ
უდუღოთ
უდუღონ
I თურმეობითი
მიგორ(ავ)ია
გიგორ(ავ)ია
უგორ(ავ)ია
გვიგორ(ავ)ია
გიგორ(ავ)იათ
უგორ(ავ)იათ
(გა)მიგორებია
(გა)გიგორებია
(გა)უგორებია
(გა)გვიგორებია
(გა)გიგორებიათ
(გა)უგორებიათ
მიდუღია
გიდუღია
უდუღია
გვიდუღია
გიდუღიათ
უდუღიათ
მიდუღებია
გიდუღებია
უდუღებია
გვიდუღებია
გიდუღებიათ
უდუღებიათ
II თურმეობითი
მეგორა
გეგორა
ეგორა
გვეგორა
გეგორათ
ეგორათ
(გა)მეგორებინა
(გა)გეგორებინა
(გა)ეგორებინა
(გა)გვეგორებინა
(გა)გეგორებინათ
(გა)ეგორებინათ
მედუღა
გედუღა
ედუღა
გვედუღა
გედუღათ
ედუღათ
(მო)მედუღებინა
(მო)გედუღებინა
(მო)ედუღებინა
(მო)გვედუღებინა
(მო)გედუღებინათ
(მო)ედუღებინათ
III კავშირებითი
მეგოროს
გეგოროს
ეგოროს
გვეგოროს
გეგოროთ
ეგოროთ
(გა)მეგორებინოს
(გა)გეგორებინოს
(გა)ეგორებინოს
(გა)გვეგორებინოს
(გა)გეგორებინოთ
(გა)ეგორებინოთ
მედუღოს
გედუღოს
ედუღოს
გვედუღოს
გედუღოთ
ედუღოთ
(მო)მედუღებინოს
(მო)გედუღებინოს
(მო)ედუღებინოს
(მო)გვედუღებინოს
(მო)გედუღებინოთ
(მო)ედუღებინოთ`
      }
    ]
  },
  {
    title: 'Lesson 28',
    blocks: [
      {
        title: 'Text',
        geo: `ამ გაკვეთილში პატარა ტექსტია. ეს ბოლო გაკვეთილია და სავარჯიშოებიც ცოტაა
ამიტომ. სამაგიეროდ, ბევრი გრამატიკაა.
დღეს ჩემი დაბადების დღეა და ჩემი ბიძაშვილები და დეიდაშვილები მოვლენ.
დედაჩემმა ნაცხვარი გამოაცხო ბავშვებისათვის. შაბათს კი ქორწილში მივდივართ.
ჩემი დეიდაშვილი სხვა ეროვნების კაცს გაჰყვა ცოლად. დეიდაჩემს არ უნდოდა უცხო
ერის შვილი სიძედ, მაგრამ რა უნდა ექნა? ჩემს დეიდაშვილს შეუყვარდა. ალბათ, იმ
უცხოელსაც ძალიან ეყვარება შენი დეიდაშვილი. იცხოვრებენ ტკბილად და
ბედნიერად. მაგრამ ჯერ არ იციან, რომელ ქვეყანაში უნდა იცხოვრონ. იმედია,
შეთანხმდებიან. გილოცავთ! შენს დეიდაშვილს მიულოცე ჩემ მაგიერ! წარმატებებს
გისურვებთ!`,
        eng: `In this lesson there is a small text. This is the last lesson and therefore there are not many
exercises here. But there is a lot of grammar.
Today is my birthday and my cousins will come. My mom will bake cake for the children.
On Saturday I'm going to a wedding. My cousin marred a man of a different nation. My aunt
didn't want a child of a foreign nationality as her son-in-law, but what she could do? My
cousin felt in love with him. Probably this foreigner will really love your cousin too. They
will live sweetly and happily. But they still don't know which country to live in. It's hoped
they'll agree. Congratulations! Tell your cousin my congratulations! Good luck!
Key to the Exercises`
      },
      {
        title: '1. Translate',
        isList: true,
        geo: `a) იმხიარულე! ნუ იქნები მოწყენილი! გაერთე! ქორწილია.
b) ვინ მოიყვანა დავითმა ცოლად? ვის გაჰყვა ცოლად ნანა?
c) – რა ეროვნების სიდედრი გყავთ? – რუსი გახლავთ, ჩემო ბატონო.
d) მენატრება თბილისი. შენ არ გენატრები?
e) აი, ნამდვილად ზედმეტი მოგივიდა! არ უნდა გეთქვა ასე, შეიძლება ეწყინოს.
სიმართლე ნუ ეწყინება.
f) – სადა ხარ, სად დაიკარგე? – შენგან განსხვავებით შევეცდები არ დაგეკარგო.
– წარმატებებს გისურვებ!
g) – რა იპოვე? – რაც დავკარგე, ის ვიპოვე. – ძალიანაც კარგი!
h) არ მიყვარს ზედმეტი მხიარულება, არც ზედმეტი სევდა ან დარდი.
i) უ ხარ მოწყენილი, მე მჯერა მისი, სულერთია, ის მაინც დაბრუნდება. იმედია!
j) დაბრუნდი! არ გამაგონოთ გაყრა! იმედია, ახალგაზრდები შეთანხმდებიან, ნუ
ხარ ასე სევდიანი!`,
        eng: `a) Enjoy! Don't be sad! Enjoy! There's a wedding outside.
b) Whom did Davit marry? Whom did Nana marry?
c) – What nationality is your mother-in-law? – She's Russian, my dear sir.
d) I miss Tbilisi. Don't you miss me?
e) Here, you shouldn't do this! You shouldn’t say it so, he/she may be offended. Let
him/her not be offended with the truth.
f) – Where are you; where did you disappear? – Unlike you I’ll try not to get lost.
– Good luck!
g) – What did you find? – What I have lost, I found it. – Also very good!
h) You don't like (love) useless joy, nor useless sadness or grief.
i) Don't be sad, I believe him/her. All the same he/she will come back. There's hope!
j) He/she came back! Don't think of getting a divorce! There's hope, young people will
agree, don't be so sad!`
      },
      {
        title: '2. Translate',
        isList: true,
        geo: `a) შენ ხომ გენატრები?
b) შეთანხმდებიან. იმხიარულე!
c) გილოცავთ. იმედი მაქვს, რომ ყველაფერი კარგად იქნება.
d) ჩემი დეიდაშვილი ცოლად ითხოვა ქართველმა კაცმა. ბიძაჩემი ბედნიერია.
e) – შეთანხმდებიან? – აუცილებლად. წარმატებებს გისურვებთ!
f) ნუ ხარ ასე სევდიანი. ყველაფერი კარგად იქნება.
g) მე მჯერა ეს! წარმატებებს გისურვებთ!
3. Conjugate the medio-passive verbs from both groups A and B in all series.
აწმყო
მძინავს
გძინავს
ძინავს
გვძინავს
გძინავთ
ძინავთ
მშია
გშია
შია
გვშია
გშიათ
შიათ
ვზივარ
ზიხარ
ზის
ვსხდვართ
სხედხართ
სხედან
უწყვეტელი
მეძინა
გეძინა
ეძინა
გვეძინა
გეძინათ
ეძინათ
მშიოდა
გშიოდა
შიოდა
გვშიოდა
გშიოდათ
შიოდათ
-----
-----
-----
-----
-----
-----
აწმყოს კავშირებითი
მეძინოს
გეძინოს
ეძინოს
გვეძინოს
გეძინოთ
ეძინოთ
მშიოდეს
გშიოდეს
შიოდეს
გვშიოდეს
გშიოდეთ
შიოდეთ
-----
-----
-----
-----
-----
-----
მყოფადი
დავიძინებ
დაიძინებ
დაიძინებს
დავიძინებთ
დაიძინებთ
დაიძინებენ
მეშიება
გეშიება
ეშიება
გვეშიება
გეშიებათ
ეშიებათ
ვიჯდები
იჯდები
იჯდება
ვისხდებით
ისხდებით
ისხდებიან
ხოლმეობითი
დავიძინებდი
დაიძინებდი
დაიძინებდა
დავიძინებდით
დაიძინებდით
დაიძინებდნენ
მეშიებოდა
გეშიებოდა
ეშიებოდა
გვეშიებოდა
გეშიებოდათ
ეშიებოდათ
ვიჯდებოდი
იჯდებოდი
იჯდებოდა
ვისხდებოდით
ისხდებოდით
ისხდებოდნენ
მყოფადის კავშირებითი
დავიძინებდე
დაიძინებდე
დაიძინებდეს
დავიძინებდეთ
დაიძინებდეთ
დაიძინებდნენ
მეშიებოდეს
გეშიებოდეს
ეშიებოდეს
გვეშიებოდეს
გეშიებოდეთ
ეშიებოდეთ
ვიჯდებოდე
იჯდებოდე
იჯდებოდეს
ვისხდებოდეთ
ისხდებოდეთ
ისხდებოდნენ
წყვეტილი / აორისტი
დავიძინე
დაიძინე
დაიძინა
დავიძინეთ
დაიძინეთ
დაიძინეს
-----
-----
-----
-----
-----
-----
ვიჯექი
იჯექი
იჯდა
ვისხედით
ისხედით
ისხდნენ
II კავშირებითი
დავიძინო
დაიძინო
დაიძინოს
დავიძინოთ
დაიძინოთ
დაიძინონ
-----
-----
-----
-----
-----
-----
ვიჯექე
იჯექე
იჯდეს
ვისხედეთ
ისხედეთ
ისხდნენ
I თურმეობითი
მძინებია
გძინებია
სძინებია
გვძინებია
გძინებიათ
სძინებიათ
მშიებია
გშიებია
შიებია
გვშიებია
გშიებიათ
შიებიათ
ვმჯდარვარ
მჯდარხარ
მჯდარა
ვმსხდარვართ
მსხდარხართ
მსხდარან
II თურმეობითი
მძინებოდა
გძინებოდა
სძინებოდა
გვძინებოდა
გძინებოდათ
სძინებოდათ
მშიებოდა
გშიებოდა
შიებოდა
გვშიებოდა
გშიებოდათ
შიებოდათ
ვმჯდარიყავ(ი)
მჯდარიყავ(ი)
მჯდარიყო
ვმსხდარიყავით
მსხდარიყავით
მსხდარიყვნენ
III კავშირებითი
მძინებოდეს
გძინებოდეს
სძინებოდეს
გვძინებოდეს
გძინებოდეთ
სძინებოდეთ
მშიებოდეს
გშიებოდეს
შიებოდეს
გვშიებოდეს
გშიებოდეთ
შიებოდეთ
ვმჯდარიყავ(ი)
მჯდარიყავ(ი)
მჯდარიყოს
ვმსხდარიყავით
მსხდარიყავით
მსხდარიყონ

The Author’s Main Publications
Books
2012 – THE GEORGIAN VERB. LINCOM.DE, Germany. ISBN 9783862882960. LINCOM
Studies in Caucasian Linguistics 20. 656 pp.
2012 – BREVE GRAMÁTICA DE GEORGIANO (tradusco por R. Serrano) LINCOM.DE;
Germany. ISBN 9783862883127. Edición lingüística 90. 146 pp.
2012 – ქართული ჟესტური ენა. საქართველოს განათლებისა და მეცნიერების
სამინისტრო. USIAD, Save Children International. თბილისი. 620 pp.
2010 – ლინგვისტური წერილები II. [Linguistic Papers II.] The St. Andrew University of
the Patriarchy of Georgia, Tbilisi. ISBN 978-9941-416-21-7. 183 pp.
2009 – A Short Grammar of Georgian. LINCOM.DE, Germany. ISBN 9783895861512. 126
pp.
2009 – Basic Georgian. LINCOM.DE, Germany. LINCOM Practical Language Courses. 2nd
printing 2009. ISBN 9783895861154. 200 pp.
2008 – Basic Georgian. LINCOM.DE, Germany. ISBN 9783895861512. LINCOM Studies in
Caucasian Linguistics 16. ref. no.: ISBN 978-3-89586-151-2. 204 pp.
2009 – ლინგვისტური წერილები I. [Linguistic Papers I.] The St. Andrew University of the
Patriarchy of Georgia, Tbilisi. ISBN 978-9941-404-50-4. 173 pp.
2008 – Learning Grammar of Georgian. “Georgian For Foreigners”. The St. Andrew
University of the Patriarchy of Georgia, Tbilisi. ISBN 978-9941-9018-8-1. 110 pp.
2007 – ბასკური და ქართველური დესტინაციური სისტემების ტიპოლოგია. [The
Typography of Basque and Georgian Destination Systems.] The Arnold Chikobava
Institute of Linguistics, Tbilisi. ISBN 978-99940-911-5-7. 225 pp.
2007 – ქართული – როგორც მეორე ენა. [Georgian – as a Second Language.] For teaching
in non-Georgian schools. The Arnold Chikobava Institute of Linguistics, Tbilisi. ISSN
978-99940-911-4-0. 44 pp.
2005 – ბასკური ზმნის ადრესატობის კატეგორიის ტიპოლოგიური ანალიზი. [A
Typographical Analysis of Addressing in Basque Verbs.] Tbilisi State University (TSU)
Press, Tbilisi. ISSN 99940-0-685-1, 127 pp.
`,
        eng: `a) Don’t you miss me?
b) They will agree. Enjoy!
c) Congratulations. I hope all will be OK.
d) My cousin married a Georgian man. My uncle is happy.
e) – Will they agree? – Sure. Good luck to you!
f) Don’t be so sad. Everything will be OK.
g) I believe this! Good luck to you!
3. Conjugate the medio-passive verbs from both groups A and B in all series.
4. Create a few new sentences using the new words and phrases.`
      }
    ]
  } */
]

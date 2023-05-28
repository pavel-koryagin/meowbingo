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
  }
]

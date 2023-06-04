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
  }
]

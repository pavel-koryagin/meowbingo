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
Georgia. I am in Seoul, Korea.
d) – Where is this book? – This book is in Tbilisi.`
      },
      {
        title: '3. Translate',
        geo: `a) – რა არის ეს? – ეს არის წიგნი. ეს არის ქართული წიგნი. – სად არის ეს წიგნი? – ეს წიგნი არის მაგიდაზე. კალამი არის წიგნზე.
b) – წიგნი არის მაგიდაზე. – სად არის ეს მაგიდა? – ეს მაგიდა არის ოთახში. – სად არის ეს ოთახი? – ოთახი არის უნივერსიტეტში.
c) – მე ვარ სეულში. მე ვარ უნივერსიტეტში. – სად არის სეული? – სეული არის აზიაში.
d) – ვინ არის ეს? – ეს არის კორეელი სტუდენტი. ეს არის ქართველი სტუდენტი.
e) – ქართველი სტუდენტი არის თბილისში. – სად არის თბილისი? – თბილისი არის საქართველოში. საქართველო არის ევროპაში. კორეა არის აზიაში.
f) მევარკორეელი.ესარისქართველი.მევარაზიელი.ქართველისტუდენტი არის ევროპელი.
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
j) – What is in the room?–There is a table in the room.–What is on the table? – A pen is on the table.`
      }
    ]
  }
]

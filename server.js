var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles = {
 'article-one': {
    title: "Article One | Kiran Abburi",
    heading: "Article One",
    date: "Aug 7, 2017",
    content: `
    <p>
          This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
      </p>
      <p>
          This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
      </p>
      <p>
          This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.
      </p>`
    
},
 'article-two': {
      title: "Article Two | Kiran Abburi",
    heading: "Article Two",
    date: "Aug 7, 2017",
    content: `
    <p>
          This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
      </p>
      <p>
          This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
      </p>
      <p>
          This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article. This is the content for my second article.
      </p>`
 },
 'article-three': {
     title: "Article Three | Kiran Abburi",
    heading: "Article Three",
    date: "Aug 7, 2017",
    content: `
    <p>
          This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article.
      </p>`
 }
};

function createTemplate (data){
    
    title = data.title;
    date = data.date;
    heading = data.heading;
    content = data.content;
    
var htmlTemplate = `<html>
    
  <head>
      <title>
          ${title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/ui/style.css" rel="stylesheet" />
     </head>  
  
  <body>
      <div class="Container">
        <div>
                <a href="/">Home</a>
        </div>
        <hr/>
      <h3>
          ${heading}
      </h3>
      <div>
          ${date}
      </div>
      <div>
          ${content}
      </div>
  </div>
</html>
`;
return htmlTemplate;
}
   
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res){
    counter = counter + 1;
    res.send(counter.toString());
});


app.get('/:ArticleName', function (req, res) {
    // ArticleName = article-one
    // Articles[ArticleName] = content object for Article one
    var ArticleName = req.params.ArticleName
  res.send(createTemplate(Articles[ArticleName]));
});

app.get('/article-two', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var crypto = require('crypto');

function hash (input, salt){
    // How do we hash the input?
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return [ "pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
}

app.get('/hash/:input', function (req, res) {
    var hashedString = hash(req.params.input, 'this-is-some-random-string');
    res.send(hashedString);
    
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

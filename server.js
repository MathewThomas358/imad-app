var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1 = {
	title: article1;
	heading: article1;
	content: '<p>This is a test. This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.</p>

		<div>
			<p>This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.This is a test.</p>
		</div>'
};
function createTemp(data) {
	var title= data.title;
	var heading= data.heading;
	var content= data.content;
	var htmlTemp = {'
		<html>
		<head>
			<title>${title}</title>
			<link rel="stylesheet" type="text/css" href="/style.css">
		</head>
		<body>
			<div class="container">
				<h1>${heading}</h1>
				<hr>
			<div>
			<a href="/">Home</a>
			</div>
				${content}
			</div>
		</body>
		</html>
		'
	}
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1', function (req, res) {
  res.send(createTemp(article1));
});

app.get('/article2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});


app.get('/article3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

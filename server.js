var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var _und = require("underscore");

var json = [];


app.get('/', function (req, res) {

    url = 'http://globoesporte.globo.com/placar-ge/hoje/';
    request(url, function (error, response, html) {

        if (!error) {
            var $ = cheerio.load(html);
            $('[class=secao-campeonato]').each(function ( index , element) {
                var data = $(this);
                //console.log(data )
               var liga =  $(this).find('article > header > h1.titulo > span').text()  ;
               var time1 =  $(this).find('.time.mandante').text()  ;
               var time2 =  $(this).find('.time.visitante').text()  ;

               //console.log(liga)

                var dados = {
                    liga:liga,
                    time1:time1,
                    time2:time2
                }

                json.push(dados);
            });

            fs.writeFile('times.json', JSON.stringify(json, null, 4), function (err) {
                if (err)
                    console.log('Error on updating');
                else {
                    console.log('Writen/Updated json data.');
                }
            });
        }

    });
});

app.listen('8081');
console.log('Please, open your browser on http://localhost:8081 ');
exports = module.exports = app;

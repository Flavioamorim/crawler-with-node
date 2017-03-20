var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var _und = require("underscore");

var json = [];
var jsonGalo = [];


app.get('/', function (req, res) {

    url = 'https://esporte.uol.com.br/futebol/central-de-jogos/jogos-do-dia/';
    urlGalo = 'https://esporte.uol.com.br/futebol/times/atletico-mg/proximos-jogos/';
    request(url, function (error, response, html) {

        if (!error) {
            var $ = cheerio.load(html);
            $('[class=vevent]').each(function ( index , element) {
                var data = $(this);
                //console.log(data )
               var dia =  $(this).find('.data').text()   ;
               var league =  $(this).find('.league').text()   ;
               //var  time1 =  $(this).find('abbr').attr('title')  ;
               var  time1 =  $(this).find('.time1 > abbr').attr('title')   ;
               var  time2 =  $(this).find('.time2 > abbr').attr('title')   ;
               var  img1 =  $(this).find('.time1 > img').attr('src')   ;
               var  img2 =  $(this).find('.time2 > img').attr('src')   ;
               var  gol1 =  $(this).find('.time1 > .gols').text() ;
               var  gol2 =  $(this).find('.time2 > .gols').text() ;
               //var  gol2 =  $(this).find('.time2 > .gols').text ;
               //var time1 =  $(this).find('.time.mandante').text()  ;
               //var time2 =  $(this).find('.time.visitante').text()  ;

              //console.log(gol1)
 

                var dados = {
                    dia:dia,
                    league:league,
                    time1: time1 ,
                    gol1: gol1 ,
                    img1: img1 ,
                    img2: img2 ,
                    gol2: gol2 ,
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

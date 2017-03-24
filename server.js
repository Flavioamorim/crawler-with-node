var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();
var _und = require("underscore");

var json = [];
var jsonGalo = [];
var jsonCruzeiro = [];
var jsonProximos = [];



app.get('/', function (req, res) {

    url = 'https://esporte.uol.com.br/futebol/central-de-jogos/jogos-do-dia/'; //jogos
    urlProximos = 'https://esporte.uol.com.br/futebol/central-de-jogos/proximos-jogos/'; //proximos

    urlGalo = 'https://esporte.uol.com.br/futebol/times/atletico-mg/proximos-jogos/'; //galo
    urlZeiro = 'https://esporte.uol.com.br/futebol/times/cruzeiro/proximos-jogos/'; //cruzeiro


    setInterval(function() { 
        console.log("Buscando ... ");    

              request(url, function (error, response, html) {

                  if (!error) {
                      var $ = cheerio.load(html);
                      $('[class=vevent]').each(function ( index , element) {
                          var data = $(this);
           
                         var dia =  $(this).find('.data').text()   ;
                         var hora =  $(this).find('.hora').text() ;
                         var league =  $(this).find('.league').text()   ;
           
                         var  time1 =  $(this).find('.time1 > abbr').attr('title')   ;
                         var  time2 =  $(this).find('.time2 > abbr').attr('title')   ;
                         var  img1 =  $(this).find('.time1 > img').attr('src')   ;
                         var  img2 =  $(this).find('.time2 > img').attr('src')   ;
                         var  gol1 =  $(this).find('.time1 > .gols').text() ;
                         var  gol2 =  $(this).find('.time2 > .gols').text() ;
                         
                          var dados = {
                              dia:dia,
                              hora:hora,
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

                      fs.writeFile('jogos.json', JSON.stringify(json, null, 4), function (err) {
                          if (err)
                              console.log('Error on updating');
                          else {
                              console.log('Todos jogos ok.');
                          }
                      });
                  }
              });

              request(urlGalo, function (error, response, html) {

                  if (!error) {
                      var $ = cheerio.load(html);
                      $('[class=vevent]').each(function ( index , element) {
                          var data = $(this);
           
                         var dia =  $(this).find('.data').text()   ;
                         var hora =  $(this).find('.hora').text() ;
                         var league =  $(this).find('.league').text()   ;
           
                         var  time1 =  $(this).find('.time1 > abbr').attr('title')   ;
                         var  time2 =  $(this).find('.time2 > abbr').attr('title')   ;
                         var  img1 =  $(this).find('.time1 > img').attr('src')   ;
                         var  img2 =  $(this).find('.time2 > img').attr('src')   ;
                         var  gol1 =  $(this).find('.time1 > .gols').text() ;
                         var  gol2 =  $(this).find('.time2 > .gols').text() ;
                         
                          var dados = {
                              dia:dia,
                              hora:hora,
                              league:league,
                              time1: time1 ,
                              gol1: gol1 ,
                              img1: img1 ,
                              img2: img2 ,
                              gol2: gol2 ,
                              time2:time2
                          }

                          jsonGalo.push(dados);
                      });

                      fs.writeFile('galo.json', JSON.stringify(jsonGalo, null, 4), function (err) {
                          if (err)
                              console.log('Error on updating');
                          else {
                              console.log('Galo jogos ok.');
                          }
                      });
                  }
              });

              request(urlProximos, function (error, response, html) {

                  if (!error) {
                      var $ = cheerio.load(html);
                      $('[class=vevent]').each(function ( index , element) {
                          var data = $(this);
           
                         var dia =  $(this).find('.data').text()   ;
                         var hora =  $(this).find('.hora').text() ;
                         var league =  $(this).find('.league').text()   ;
           
                         var  time1 =  $(this).find('.time1 > abbr').attr('title')   ;
                         var  time2 =  $(this).find('.time2 > abbr').attr('title')   ;
                         var  img1 =  $(this).find('.time1 > img').attr('src')   ;
                         var  img2 =  $(this).find('.time2 > img').attr('src')   ;
                         var  gol1 =  $(this).find('.time1 > .gols').text() ;
                         var  gol2 =  $(this).find('.time2 > .gols').text() ;
                         
                          var dados = {
                              dia:dia,
                              hora:hora,
                              league:league,
                              time1: time1 ,
                              gol1: gol1 ,
                              img1: img1 ,
                              img2: img2 ,
                              gol2: gol2 ,
                              time2:time2
                          }

                          jsonProximos.push(dados);
                      });

                      fs.writeFile('proximos.json', JSON.stringify(jsonProximos, null, 4), function (err) {
                          if (err)
                              console.log('Error on updating');
                          else {
                              console.log('Proximos jogos ok');
                          }
                      });
                  }
              });

              request(urlZeiro, function (error, response, html) {

                  if (!error) {
                      var $ = cheerio.load(html);
                      $('[class=vevent]').each(function ( index , element) {
                          var data = $(this);
           
                         var dia =  $(this).find('.data').text()   ;
                         var hora =  $(this).find('.hora').text() ;
                         var league =  $(this).find('.league').text()   ;
           
                         var  time1 =  $(this).find('.time1 > abbr').attr('title')   ;
                         var  time2 =  $(this).find('.time2 > abbr').attr('title')   ;
                         var  img1 =  $(this).find('.time1 > img').attr('src')   ;
                         var  img2 =  $(this).find('.time2 > img').attr('src')   ;
                         var  gol1 =  $(this).find('.time1 > .gols').text() ;
                         var  gol2 =  $(this).find('.time2 > .gols').text() ;
                         
                          var dados = {
                              dia:dia,
                              hora:hora,
                              league:league,
                              time1: time1 ,
                              gol1: gol1 ,
                              img1: img1 ,
                              img2: img2 ,
                              gol2: gol2 ,
                              time2:time2
                          }

                          jsonCruzeiro.push(dados);
                      });

                      fs.writeFile('cruzeiro.json', JSON.stringify(jsonCruzeiro, null, 4), function (err) {
                          if (err)
                              console.log('Error on updating');
                          else {
                              console.log('Cruzeiro ok ');
                          }
                      });
                  }
              });

    },30000);     
   // }, 60 * 60 * 1000);     

});

app.listen('8081');
console.log('Please, open your browser on http://localhost:8081 ');
exports = module.exports = app;

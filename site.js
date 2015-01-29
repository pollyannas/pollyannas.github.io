// google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-47455110-1');
ga('send', 'pageview');

// old disqus ids (as of 2014-10-08 we don't use ids anymore, but disqus needs
// these to know where to put the comments from old threads)
var old_disqus_ids = {
  '/26/aprender-sem-escola/': 'cb579084',
  '/26/que-mensagem-a-sua-escolarizacao-passou-para-voce/': 'bf8711d756a1ca0b383ef11b22297094',
  '/26/a-mae-e-seus-dois-filhos-confianca/': '4c21e91da9c90f9ba789af3930fab3fd',
  '/26/liberdade-sem-medo/': 'b66279b54a25bba420a3d9fec57d168f',
  '/26/respostas-para-minhas-indagacoes-john-taylor-gatto/': 'ac307e5c98ffb792e6db097d0f560e6d',
  '/26/sobre-criancas-adultos-responsabilidade-e-poder/': '72f323fe3e0b0feffb921eda2be3adc8',
  '/26/minha-primeira-expressao-fluxo-natural-de-palavras/': '9594db1c9d8e5bc69622a10bbdfdc5e3',
  '/26/a-escola-e-bela/': '88faa355',
  '/26/yes-i-can-write/': '987b98d8',
  '/26/ana-thomaz-e-a-desescolarizacao/': '7a715bfa3ac39d77573ec8e52e445e70',
  '/26/como-as-criancas-aprendem/': '099c9017',
}

// dom ready
hack = document.documentElement.doScroll
loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(document.readyState)

if (!loaded) {
  document.addEventListener('DOMContentLoaded', function () {

    // disqus
    var text = document.querySelector('.text')
    var paragraphs = text.querySelectorAll('p')
    if (paragraphs.length > 2) {
      // insert div.disqus_thread
      var div = document.createElement('div')
      div.id = 'disqus_thread'
      text.parentNode.insertBefore(div, text.nextSibling)
    
      // disqus code:
      window.disqus_shortname = '26pollyannas';
      window.disqus_title = document.title.split('|')[0].trim();
      if (location.pathname in old_disqus_ids) {
        window.disqus_identifier = old_disqus_ids[location.pathname]
      }
      (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] ||
         document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
    }

  })
}

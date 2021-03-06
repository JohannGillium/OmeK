---

---

//Fichier du 6 mars 2016 : objectif de créer avec elasticlunr un index suffisamment puissant pour faire des recherches avancées.
// 10 mars 2016 : cette version fonctionne très bien, il nous faut donc la garder précieusement et la chérir. Je fais donc une copie pour expérimenter avec mon histoire de requêtes dont les champs sont sélectionnés d'après les choix de l'utilisateur
//Ce fichier search_advanced2 est là pour servir d'expérimentation concernant la question des requêtes dynamiques


// console.log( jQuery.type(index) );

var index = elasticlunr(function () {
    this.addField('title');
    this.addField('subject');
    this.addField('description');
    this.addField('creator');
    this.addField('source');
    this.addField('type');
    this.addField('body');
    this.setRef('id');
})

//On peuple d'abord l'index avec les collections 

{% assign count = 0 %}{% for collection in site.collections %}
    {% unless collection.label == 'posts' %}   
    
 var doc{{count}} = {
 "id" : {{count}},
 "title" : {{ collection.title | jsonify }},
 "subject" : {{ doc.subject | jsonify }},
 "description" : {{ collection.description | jsonify }},
 "creator" : {{ doc.creator | jsonify }},
 "type" : "collection"
 }
 
 index.addDoc(doc{{count}});
{% assign count = count | plus: 1 %}
 {% endunless %}
 {% endfor %} 
 
 //Puis on peuple l'index avec les documents dans les collections
 
{% for collection in site.collections %}

    {% unless collection.label == 'posts' %}      

  {% for doc in collection.docs %}

var doc{{count}} = {
  "id" : {{count}},
  "title" : {{ doc.title | jsonify }},
  "subject" : {{ doc.subject | jsonify }},
  "description" : {{ doc.description | jsonify }},
  "creator" : {{ doc.creator | jsonify }},
  "type" : "item"
}

index.addDoc(doc{{count}});

{% assign count = count | plus: 1 %}{% endfor %}
 {% endunless %}

 {% endfor %} 
 
 //On construit ensuite la variable store avec les informations de référence pour les collections
 
 var store = [{% for collection in site.collections %}
    {% unless collection.label == 'posts' %}  {
  "title": {{ collection.title | jsonify}},
  "subject": {{ collection.description | jsonify}},
  "layout": {{ doc.layout | jsonify }},
  "link": {{ doc.url | jsonify}},
  "type": "collection"
},
{% endunless %}{% endfor %}
//On met ensuite dans la variable store les informations des items
{% for collection in site.collections %}

    {% unless collection.label == 'posts' %}      

  {% for doc in collection.docs %}

{
  "title": {{ doc.title | jsonify}},
  "subject": {{ doc.subject | jsonify}},
  "layout": {{ doc.layout | jsonify }},
  "link": {{ doc.url | jsonify}},
  "author": {{ doc.creator | jsonify}},
  "type": "item"
},


{% assign count = count | plus: 1 %}{% endfor %}{% endunless %}

 {% endfor %} ]
 
 
 //Ci-dessous script pour la recherche avancée 
 
  
 $(document).ready(function() {
  $('button#search').on('click', function () {
    resultats = [];
    resultdiv = $('#results');
    $(".fieldwrapper").each(function() {
        var query = $(this).find('input.keyword-search').val();
        var fieldName = $(this).find('optgroup#optgroupDublinCore option:selected').text();
        var userConfig = null;
        var configStr = null;
        if (userConfig != null) {
        configStr = JSON.stringify(userConfig);
        }
        //var config = {fields: {title: {boost: 1, bool: "OR", expand: false }}};
        var config = new elasticlunr.Configuration(configStr, index.getFields()).get();
        //var config = configuration.buildDefaultConfig(fieldName);
        var queryTokens = index.pipeline.run(elasticlunr.tokenizer(query));
        var result = index.fieldSearch(queryTokens, fieldName, config); 
        console.log(result);
        alert(Object.keys(result));
        keys = [];
        //Below, for each query we add the result to the keys array
        for (var k in result) keys.push(k);
        alert("test");
        console.log(keys);
        arrayLength = keys.length;
        resultats.push(keys);
        })
          console.log(resultats);
          var final = resultats.shift().filter(function(v) {
                return resultats.every(function(a) {
                return a.indexOf(v) !== -1;
                });
                });
          console.log(final);
          resultdiv.append('<p class="">Found '+final.length+' result(s)</p>');
          for (var i = 0; i < arrayLength; i++) {
  	        alert("dans la boucle");
  	        alert(final[i]);
  	        var ref = final[i];
	        //var ref = result[item].ref;
            var searchitem = '<div class="result"><p><a href="{{ site.baseurl }}'+store[ref].link+'">'+store[ref].title+'</a> by '+store[ref].author+' type :'+store[ref].type+'</p></div>';
            resultdiv.append(searchitem);
            }
        });


  })

	
 
  //The search is then launched on the index built with Lunr
  
 


        
 
  
 
 

---

---

//Fichier du 6 mars 2016 : objectif de créer avec elasticlunr un index suffisamment puissant pour faire des recherches avancées.


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
  "type": "item"
},


{% assign count = count | plus: 1 %}{% endfor %}{% endunless %}

 {% endfor %} ]
 
 
 //Ci-dessous script pour la recherche avancée 
 
  
 $(document).ready(function() {
  $('input#submit_search_advanced').on('click', function () {
var query = $("input#keyword-search").val();
var dropdown = $('#optgroupDublinCore option:selected').text();
console.log(dropdown);
alert(query);
alert(dropdown);
if (typeof dropdown !='undefined' && dropdown == 'Title') {
	alert("dans la boucle");
	 var result = index.search(query, {
    fields: {
        title: {boost: 2},    
    }
});
  alert(result);
  var resultdiv = $('#results');
  resultdiv.empty();
  resultdiv.append('<p class="">Found '+result.length+' result(s)</p>');

  for (var item in result) {
	var ref = result[item].ref;
	alert(ref);
    var searchitem = '<div class="result"><p><a href="{{ site.baseurl }}'+store[ref].link+'">'+store[ref].title+'</a> by '+store[ref].author+'type :'+store[ref].type+'</p></div>';
    resultdiv.append(searchitem);
   }

}})});

	
 
  //The search is then launched on the index built with Lunr
  
 


        
 
  
 
 

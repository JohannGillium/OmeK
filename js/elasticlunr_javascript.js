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
 "creator" : {{ doc.creator | jsonify }}
 "type" : "collection"
 }
 
 index.addDoc(doc{{count}});
{% assign count = count | plus: 1 %}
 {% endunless %}
 {% endfor %} 
 
{% for collection in site.collections %}

    {% unless collection.label == 'posts' %}      

  {% for doc in collection.docs %}

var doc{{count}} = {
  "id" : {{count}},
  "title" : {{ doc.title | jsonify }},
  "subject" : {{ doc.subject | jsonify }},
  "description" : {{ doc.description | jsonify }},
  "creator" : {{ doc.creator | jsonify }}
  "type" : "item"
}

index.addDoc(doc{{count}});

{% assign count = count | plus: 1 %}{% endfor %}


 {% endunless %}

 {% endfor %} 

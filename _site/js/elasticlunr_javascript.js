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


       
    
 var doc0 = {
 "id" : 0,
 "title" : "The Riverside Church",
 "subject" : null,
 "description" : "A collection of materials related to the founding, construction and early years of the Riverside Church.",
 "creator" : null
 "type" : "collection"
 }
 
 index.addDoc(doc0);

 
 
       
    
 var doc1 = {
 "id" : 1,
 "title" : "Lion Brewery",
 "subject" : null,
 "description" : "Materials relating to the Lion Brewery of Morningside Heights.",
 "creator" : null
 "type" : "collection"
 }
 
 index.addDoc(doc1);

 
 
       
    
 var doc2 = {
 "id" : 2,
 "title" : "Cathedral of St. John the Divine",
 "subject" : null,
 "description" : "A collection of published images and documents relating to the early architectural history (1887-1913) of the Cathedral of Saint John the Divine.",
 "creator" : null
 "type" : "collection"
 }
 
 index.addDoc(doc2);

 
 
    
  
 


          

  

var doc3 = {
  "id" : 3,
  "title" : "Riverside Church Construction",
  "subject" : "Riverside church (New York, N.Y.)",
  "description" : "This photograph documents the construction of the church, notably the modern steel framework that would be encased by stone to preserve the architects' Gothic vision.",
  "creator" : "George L. Balgue"
  "type" : "item"
}

index.addDoc(doc3);




 

 

          

  

var doc4 = {
  "id" : 4,
  "title" : "Cathedral heights",
  "subject" : "College campuses",
  "description" : "Cathedral Heights",
  "creator" : null
  "type" : "item"
}

index.addDoc(doc4);




 

 

          

  

var doc5 = {
  "id" : 5,
  "title" : "Cathedral Church of Saint John the Divine",
  "subject" : "Cathedral of St. John the Divine (New York, N.Y.)",
  "description" : "An illustrated historical overview of the cathedral. Includes its charter; the names of trustees,  officers, and staff; as well as accounts of the Choir School, the Cathedral League, and other affiliated groups. Covers the earliest planning, the selection of architects, and the development of the cathedral as a building and an institution. Access the document in the HathiTrust Digital Library here.\n",
  "creator" : "Episcopal Church. Diocese of New York. Cathedral League"
  "type" : "item"
}

index.addDoc(doc5);



var doc6 = {
  "id" : 6,
  "title" : "A Julia de Burgos",
  "subject" : null,
  "description" : null,
  "creator" : null
  "type" : "item"
}

index.addDoc(doc6);



var doc7 = {
  "id" : 7,
  "title" : "L'albatros",
  "subject" : null,
  "description" : null,
  "creator" : null
  "type" : "item"
}

index.addDoc(doc7);



var doc8 = {
  "id" : 8,
  "title" : "Delayed till she had ceased to know",
  "subject" : null,
  "description" : null,
  "creator" : null
  "type" : "item"
}

index.addDoc(doc8);



var doc9 = {
  "id" : 9,
  "title" : "Dreams",
  "subject" : null,
  "description" : null,
  "creator" : null
  "type" : "item"
}

index.addDoc(doc9);



var doc10 = {
  "id" : 10,
  "title" : "Narrative of the Life of Frederick Douglass",
  "subject" : null,
  "description" : null,
  "creator" : null
  "type" : "item"
}

index.addDoc(doc10);




 

 

    

  

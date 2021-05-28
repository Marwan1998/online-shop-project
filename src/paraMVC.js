model = (function(){
    var texts = {
        h3Text: "Sorry, Cart is under construction ..  ",
        backhome: "back to home",
    };
    var classes = {
        h3Class: "center containerImage",
        btnClass: "btn",
    };

    var backhref = {
        href: "../index.html",
    };

    return{
        texts: texts,
        classes: classes,
        backhref: backhref,
    }

})();

view = (function(){
    var DOMStrings = {
        h3id: "h3id",
        btnid: "btnid",
        divid: "divid",
    };
    var h3 = document.getElementById(DOMStrings.h3id);
    
    return{
        setText: function(text){
            h3.innerHTML = text;
        },
        setClass: function(className){
            // h3.className.replace("", className);
            h3.className = className;
        },
        backhome: function(text, href, className){
            var createBack = document.createElement("a");

            createBack.text = text;
            createBack.id = DOMStrings.btnid;
            createBack.className = className; 
            createBack.href = href;
            document.getElementById(DOMStrings.divid).appendChild(createBack);
        },
    }
})();

controle = (function(model, view){
    var text = model.texts;
    var className = model.classes;
    
    view.setText(text.h3Text);
    view.setClass(className.h3Class);

    var hrf = model.backhref;
    view.backhome(text.backhome, hrf.href, className.btnClass);

})(model, view);

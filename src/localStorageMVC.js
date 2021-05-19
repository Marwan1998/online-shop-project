
function Data() {

    var name;
    var name1;

    return {

        getName: function() {
            
            return name;
        },
        setName: function(sentName) {
            name=sentName;
        }
    }

};


function UI() {

    
  
    var DOMstrings = {

        p1: "p1",
        input: "input",
        btn: "btn"

    }

    
    return {

        getDOMstrings: function () {
            return DOMstrings;
        },

        getInput: function () {

            return document.getElementById(DOMstrings.input).value;

        },
        setPara: function(name){

           
            localStorage.setItem('UserName',name); 
            name1="Great!,we will inform you about the newest collection on your E-Mail: "
            +localStorage.getItem('UserName');
            
            document.getElementById(DOMstrings.p1).textContent=name1;
        }
       


    }
};

  
function Controller(data, view) {

   
    var setupEventListeners = function () {
       
        var DOM = view.getDOMstrings();        
        
        document.getElementById(DOM.btn).addEventListener('click', setP);
       


    }

    
    var setP = function () {
    
       
        var input;
        input = view.getInput();
        var Dom1=view.getDOMstrings();

        if ( input == '') {


            alert('you must write something ' );


        } else {

        
         data.setName(input);
         view.setPara(data.getName());
         
        }
        

    }

   
    
    return {

        init: function () {

            setupEventListeners();
        }

    }

}

controller = new Controller(new Data(), new UI());
controller.init();

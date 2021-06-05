import model from './M.js';
import view from './V.js';
import controle from './C.js'

var Data = new model();
var View = new view();
var Controle = new controle(Data, View);


// console.log(Controle);
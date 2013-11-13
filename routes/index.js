
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' , name: 'Teh SoTo super duper app !'});
};
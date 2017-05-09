(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['submitquestion'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Submit your question</h1>\r\n<input class=\"form-control\" id=\"question-title\" type=\"text\" placeholder=\"Title\" title=\"Submit your question title here!\">\r\n<textarea class=\"form-control\" rows=\"3\" id=\"question-body\" placeholder=\"Question\"></textarea>\r\n\r\n<input type=\"radio\" id=\"javascript-radio\" name=\"category\">\r\n<label for=\"javascript-radio\">Javascript</label>\r\n<input type=\"radio\" id=\"c-sharp-radio\" name=\"category\">\r\n<label for=\"c-sharp-radio\">C#</label>\r\n\r\n<a href=\"#/processSubmitQuestion\" class=\"btn btn-success\">Submit Question</a>\r\n";
},"useData":true});
})();
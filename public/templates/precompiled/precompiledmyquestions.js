(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['myquestions'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <li>\r\n        <div class=\"well\">\r\n            <h2><a href=\"#/home/question/"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2>\r\n            <p>Category: "
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + " | <a href=\"#/processQuestionLike/"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-xs btn-primary\">Likes:</a> "
    + alias4((helpers.likesCount || (depth0 && depth0.likesCount) || alias2).call(alias1,depth0,{"name":"likesCount","hash":{},"data":data}))
    + " | <a href=\"#/processQuestionDislike/"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-xs btn-danger\">Dislikes</a>: "
    + alias4((helpers.dislikesCount || (depth0 && depth0.dislikesCount) || alias2).call(alias1,depth0,{"name":"dislikesCount","hash":{},"data":data}))
    + " | Author: "
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + " | Date: "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + " | Answers: "
    + alias4((helpers.answersCount || (depth0 && depth0.answersCount) || alias2).call(alias1,depth0,{"name":"answersCount","hash":{},"data":data}))
    + "</p>\r\n\r\n            <ul class=\"answers\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.answers : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </ul>\r\n        </div>\r\n    </li>\r\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "                <li>\r\n                    <h4>"
    + alias2(alias1((depth0 != null ? depth0.body : depth0), depth0))
    + "</h4>\r\n                    <p><a href=\"#/processAnswerLike/"
    + alias2(alias1((depths[1] != null ? depths[1].category : depths[1]), depth0))
    + "/"
    + alias2(alias1((container.data(data, 1) && container.data(data, 1).key), depth0))
    + "/"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"label label-info\">Likes:</a> "
    + alias2((helpers.likesCount || (depth0 && depth0.likesCount) || alias4).call(alias3,depth0,{"name":"likesCount","hash":{},"data":data}))
    + " | <a href=\"#/processAnswerDislike/"
    + alias2(alias1((depths[1] != null ? depths[1].category : depths[1]), depth0))
    + "/"
    + alias2(alias1((container.data(data, 1) && container.data(data, 1).key), depth0))
    + "/"
    + alias2(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"key","hash":{},"data":data}) : helper)))
    + "\" class=\"label label-info\">Dislikes:</a> "
    + alias2((helpers.dislikesCount || (depth0 && depth0.dislikesCount) || alias4).call(alias3,depth0,{"name":"dislikesCount","hash":{},"data":data}))
    + " | Author: "
    + alias2(alias1((depth0 != null ? depth0.author : depth0), depth0))
    + " | Date: "
    + alias2(alias1((depth0 != null ? depth0.date : depth0), depth0))
    + "</p>\r\n                </li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<h1>My Questions!</h1>\r\n<ul class=\"allQuestions\">\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\r\n";
},"useData":true,"useDepths":true});
})();
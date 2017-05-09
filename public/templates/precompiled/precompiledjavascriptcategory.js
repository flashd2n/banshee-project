(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['javascriptCategory'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n    <li>\r\n        <div class=\"well\">\r\n            <h2><a href=\"#/home/question/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2>\r\n            <p>Category: "
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + " | <a href=\"#/processQuestionLike/"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-xs btn-primary\">Likes:</a> "
    + alias4((helpers.likesCount || (depth0 && depth0.likesCount) || alias2).call(alias1,depth0,{"name":"likesCount","hash":{},"data":data}))
    + " | <a href=\"#/processQuestionDislike/"
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" class=\"btn btn-xs btn-danger\">Dislikes</a>: "
    + alias4((helpers.dislikesCount || (depth0 && depth0.dislikesCount) || alias2).call(alias1,depth0,{"name":"dislikesCount","hash":{},"data":data}))
    + " | Author: "
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + " | Date: "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + " | Answers: "
    + alias4((helpers.answersCount || (depth0 && depth0.answersCount) || alias2).call(alias1,depth0,{"name":"answersCount","hash":{},"data":data}))
    + "</p>\r\n        </div>\r\n    </li>\r\n    ";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return " "
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " ";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "\r\n    <li>\r\n        <div class=\"well\">\r\n            <h2><a href=\"#/home/question/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2>\r\n            <p>Category: "
    + alias4(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"category","hash":{},"data":data}) : helper)))
    + " | <a href=\"javascript:void(0)\">Likes:</a> "
    + alias4((helpers.likesCount || (depth0 && depth0.likesCount) || alias2).call(alias1,depth0,{"name":"likesCount","hash":{},"data":data}))
    + " | <a href=\"javascript:void(0)\">Dislikes</a>: "
    + alias4((helpers.dislikesCount || (depth0 && depth0.dislikesCount) || alias2).call(alias1,depth0,{"name":"dislikesCount","hash":{},"data":data}))
    + " | Author: "
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + " | Date: "
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + " | Answers: "
    + alias4((helpers.answersCount || (depth0 && depth0.answersCount) || alias2).call(alias1,depth0,{"name":"answersCount","hash":{},"data":data}))
    + "</p>\r\n        </div>\r\n    </li>\r\n    ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = 
  "<h1>Here you can view all javascript questions!</h1>\r\n<div>Sort by: <span class=\"btn btn-xs btn-warning\" id=\"most-liked\">Most Liked</span> | <span class=\"btn btn-xs btn-warning\" id=\"most-disliked\">Most Disliked</span> | <span class=\"btn btn-xs btn-warning\" id=\"newest\">Newest</span> | <span class=\"btn btn-xs btn-warning\" id=\"oldest\">Oldest</span></div>\r\n<ul id=\"questions\">\r\n\r\n    ";
  stack1 = ((helper = (helper = helpers.ifUser || (depth0 != null ? depth0.ifUser : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"ifUser","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(4, data, 0),"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.ifUser) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\r\n</ul>\r\n";
},"useData":true});
})();
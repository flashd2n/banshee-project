(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['signin'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container\">\r\n    <form class=\"form-signin\">\r\n        <h2 class=\"form-signin-heading\">Please sign in</h2>\r\n        <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n        <input type=\"email\" id=\"input-email-signin\" class=\"form-control\" placeholder=\"Email address\" required=\"\" autofocus=\"\">\r\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n        <input type=\"password\" id=\"input-password-signin\" class=\"form-control\" placeholder=\"Password\" required=\"\">\r\n        <a href=\"#/processSignin\" class=\"btn btn-lg btn-primary btn-block\">Sign In</a>\r\n    </form>\r\n</div>\r\n";
},"useData":true});
})();
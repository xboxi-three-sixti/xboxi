(function() {
  var loc;

  loc = window.location.href;

  $(document).ready(function() {
    var URLindex;
    URLindex = loc.indexOf("#");
    if (URLindex > 0) {
      window.location = loc.substring(0, URLindex);
    }
    $("body").removeClass("invisible");
    $(".global-nav-list-item-link").click(function(e) {
      var thisID;
      thisID = $(this).attr("href");
      $(".global-nav-list-item-link").removeClass("-active");
      $(this).addClass("-active");
      if (thisID === "tv & movies") {
        thisID = "tv-movies";
      }
      $(".global-panel-list-item").removeClass("-active").filter(thisID).toggleClass("-active");
      $(".global-panel-list-item").parent().attr("data-position", thisID);
      return e.preventDefault();
    });
    return $(window).keypress(function(event) {
      var currentPanel;
      currentPanel = $(".global-panel-list").attr("data-position");
      if (event.which === 91) {
        $(".global-nav-list").find("li a[href=" + currentPanel + "]").parent().prev().find("a").trigger("click");
      }
      if (event.which === 93) {
        return $(".global-nav-list").find("li a[href=" + currentPanel + "]").parent().next().find("a").trigger("click");
      }
    });
  });

}).call(this);

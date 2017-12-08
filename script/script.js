    $(document).ready( function() {

		//Initializes Variables
		var vHeight = $(window).height();
		var vWidth = $(window).width();
		var resourceSectionNo = 0;

		var scrollHeight = 0;

		// Makes square project containers
		var projectContainerWidthSmall = $(".project-container-link").width();
        var projectContainerWidthLarge = $(".project-container-link").width();
        $(".project-container-link").css({"height" : projectContainerWidthSmall});
        $(".project-container-link").css({"height" : projectContainerWidthLarge});

        $(".project-name-small-container").css({"margin-top": projectContainerWidthSmall - 30});
        $(".project-name-large-container").css({"margin-top": projectContainerWidthLarge - 30});

        var carouselWidth = $(".scrolling-carousel-thumbnail").outerWidth();

        if (vWidth < 768) {
            $(".scrolling-carousel-thumbnail").css({"height" : carouselWidth * 0.50});
        } else {
            $(".scrolling-carousel-thumbnail").css({"height" : carouselWidth * 0.30});
        }


        $(".project-container-link").on("click", function(e){
            e.preventDefault();
            $("#project-img-master-container").html("");
            $("#project-content-project-name").html("");
            $("#project-content-project-desc").html("");

            var projectID = $(this).attr("id");
            populateProject(projectID);
            $("nav").hide();
            $(".page").hide();
            $("#project-modal-container").show();
        });


        function populateProject(projectID) {

            $.getJSON('project-resources/projects-db.json', function(data) {

                $.each(data, function( index, project){

                    if (project.projectID == projectID) {

                        var buffPicMarkup = "";

                        $("#project-content-project-name").html(project.projectName);
                        $("#project-content-project-desc").html(project.projectDetails.projectDesc);

                        $.each( project.projectDetails.projectPicsFilenames,function( index, projectPics){
                            buffPicMarkup = buffPicMarkup + '<div class="project-img-container"> <img src="' + projectPics + '" class="project-images"/> </div>';
                        });
                        $('html, body').scrollTop(0);
                        $("#project-img-master-container").html(buffPicMarkup);
                    }
                });
            });
        }


        $("#project-modal-close").on("click", function(e){
           e.preventDefault();
            $("#project-modal-container").fadeOut(0, function(){
                $("nav").show();
                $(".page").show();
            });
            $("#project-content-project-name").html("");
            $("#project-content-project-desc").html("");
            $("#project-img-master-container").html("");
        });

        $(document).keyup(function(e) {
            if (e.keyCode === 27) {
                $("#project-content-project-name").html("");
                $("#project-content-project-desc").html("");
                $("#project-img-master-container").html("");
                $("#project-modal-container").hide(function(){
                    $("nav").show();
                    $(".page").show();
                    $("#projects-container").filterizr(projectFilterOptions);
                });
            }
        });


        $(window).scroll(function(){
            scroll = $(window).scrollTop();
            if (scroll >= 70) {

                $("#research-domain-list").addClass("fixit");
                $("#projects-list").addClass("fixit");

                $(".top-gradient-2").show();
                $(".top-gradient-3").show();

                if (vWidth < 768) {
                    $(".publication-list").css({"padding-top":"0px"});
                    $("#projects-container").css({"padding-top":"0px"});
                } else {
                    $(".publication-list").css({"padding-top":"95px"});
                    $("#projects-container").css({"padding-top":"95px"});
                }
            } else {
                $("#research-domain-list").removeClass("fixit");
                $(".top-gradient-2").hide();
                $(".publication-list").css({"padding-top":"0px"});

                $("#projects-list").removeClass("fixit");
                $(".top-gradient-3").hide();
                $("#projects-container").css({"padding-top":"0px"});
            }
        });


        $("#resource-selector").change(function(e){
            e.preventDefault();
            if ($(this).val() == "devanagari") {
                $('html, body').scrollTop($("#resources-section-1").offset().top - 90);
                $("#resource-selector").val("devanagari");
            } else if ($(this).val() == "typography-history") {
                $('html, body').scrollTop($("#resources-section-2").offset().top - 90);
                $("#resource-selector").val("typography-history");
            } else if ($(this).val() == "historiography") {
                $('html, body').scrollTop($("#resources-section-3").offset().top - 90);
                $("#resource-selector").val("historiography");
            } else if ($(this).val() == "books-papers") {
                $('html, body').scrollTop($("#resources-section-4").offset().top - 90);
                $("#resource-selector").val("books-papers");
            } else if ($(this).val() == "latin-type-design") {
                $('html, body').scrollTop($("#resources-section-5").offset().top - 90);
                $("#resource-selector").val("latin-type-design");
            }
        });




		//Pre-set elements
		if (vWidth < 768) {
            $("nav").css({"height" : "100vh"});
            $("nav").css({"right":vWidth});
        }



        $(".resources-section-link").on("click", function(e){
            e.preventDefault();

            if (vWidth < 768) {
                var resourceContainer = $(this).attr('href');
                if (resourceContainer == "#resources-section-1") {
                    $("#resource-selector").val("devanagari");
                    $('html, body').scrollTop($("#resources-section-1").offset().top - 90);
                } else if (resourceContainer == "#resources-section-2") {
                    $("#resource-selector").val("typography-history");
                    $('html, body').scrollTop($("#resources-section-2").offset().top - 90);
                } else if (resourceContainer == "#resources-section-3") {
                    $("#resource-selector").val("historiography");
                    $('html, body').scrollTop($("#resources-section-3").offset().top - 90);
                } else if (resourceContainer == "#resources-section-4") {
                    $("#resource-selector").val("books-papers");
                    $('html, body').scrollTop($("#resources-section-4").offset().top - 90);
                } else if (resourceContainer == "#resources-section-5") {
                    $("#resource-selector").val("latin-type-design");
                    $('html, body').scrollTop($("#resources-section-5").offset().top - 90);
                }
            } else {
                var top = $('body').find($(this).attr('href')).offset().top - 65;
            }

            $('html, body').scrollTop(top);
        });


        var menuSlide = 0;

        var toggles = $(".c-hamburger");
        for (var i = toggles.length - 1; i >= 0; i--) {
            var toggle = toggles[i];
            toggleHandler(toggle);
        };



        function toggleHandler(toggle) {
            toggle.addEventListener( "click", function(e) {
                e.preventDefault();

                if (this.classList.contains("is-active") === true) {
                    this.classList.remove("is-active");
                    $("#research-selector").show();
                    if ($(window).scrollTop() > 1200) {
                        $("#resource-selector").show();
                    }
                    $("nav").animate({right: vWidth}, 250, 'swing');

                    window.scrollTo(0,scrollHeight);
                    $("body").css({"overflow":"auto"});
                } else {
                    this.classList.add("is-active");
                    $("#research-selector").hide();
                    $("nav").animate({right: 0}, 250, 'swing');
                    scrollHeight = $(window).scrollTop();
                    $("body").css({"overflow":"hidden"});
                }
            });
        }

        $("nav").show();

        var projectFilterOptions = {
            animationDuration: 0, //in seconds
            filter: 'all', //Initial filter
            callbacks: {
                onFilteringStart: function() { },
                onFilteringEnd: function() { },
                onShufflingStart: function() { },
                onShufflingEnd: function() { },
                onSortingStart: function() { },
                onSortingEnd: function() { }
            },
            delay: 0, //Transition delay in ms
            delayMode: 'progressive', //'progressive' or 'alternate'
            easing: 'ease-out',
            filterOutCss: { //Filtering out animation
                opacity: 0,
                transform: 'scale(0.5)',
                "z-index": -9999999
            },
            filterInCss: { //Filtering in animation
                opacity: 1,
                transform: 'scale(1)',
                "z-index": 0
            },
            layout: 'sameSize', //See layouts
            selector: '#projects-container',
            setupControls: true
        }


        $(".projects-link").on("click", function(e){
            e.preventDefault();
            $(".projects-link").removeClass("link-active");
            $(this).addClass("link-active");
            var projectCategory = $(this).data("category");
            projectFilterOptions.filter = projectCategory;
            $("#projects-container").filterizr(projectFilterOptions);
        });


        $(".research-link").on("click", function(e){
            e.preventDefault();
            $(".research-link").removeClass("link-active");
            $(this).addClass("link-active");

            var categoryActive = $(this).data("publication-category-active");

            if (categoryActive == "all") {
                $(".publication-list-items").show();
            } else {
                $(".publication-list-items").hide();
                $("." + categoryActive).show();
            }
        });



        $("#research-selector").change(function(){
            var categoryActive = $(this).val();

            if (categoryActive == "all") {
                $(".publication-list-items").show();
            } else {
                $(".publication-list-items").hide();
                $("." + categoryActive).show();
            }
        });

	});
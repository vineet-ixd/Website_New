

<!DOCTYPE html>
<html lang="en">

<head>
    <?php

    $page_title = "Research";
    include("_includes/meta.php");

    ?>

    <link rel="stylesheet" type="text/css" href="style/style.css">

</head>

<body>

<?php include("_includes/nav.php"); ?>

<div class="page">

    <div id="hamburger-menu-container">



        <div id="hamburger-content-band">
            <div id="mobile-selector" class="sans-serif">
                <select id="research-selector" class="mobile-dropdown-nav">
                    <option value="all" selected>ALL PUBLICATIONS</option>
                    <option value="publication-category-1">HCI FOR DEVELOPMENT</option>
                    <option value="publication-category-2">SE + HCI</option>
                    <option value="publication-category-3">OTHERS</option>
                </select>
            </div>
            <div id="hamburger-menu">
                <button class="c-hamburger c-hamburger--htla">
                    <span>toggle menu</span>
                </button>
            </div>
        </div>
    </div>

<!--    <div class="top-gradient"></div>-->
    <div class="page-container">
        <div class="page-content">
            <section>
                <h1 class="section-header">
                    My Research Publications
                </h1>
                
                <ul id="research-domain-list" class="sans-serif">
                    <li><a href="#" class="link research-link link-active" data-publication-category-active="all">ALL PUBLICATIONS</a></li>
                    <li><a href="#" class="link research-link" data-publication-category-active="publication-category-1">DESIGN FOR DEVELOPMENT</a></li>
                    <li class="center-text"><a href="#" class="link research-link" data-publication-category-active="publication-category-2">HCI + SE</a></li>
                    <li class="center-text"><a href="#" class="link research-link" data-publication-category-active="publication-category-3">OTHERS</a></li>
                </ul>

<!--                <div class="top-gradient-2"></div>-->

                <div class="publication-container">
                    <ul class="publication-list">
                        <li class="publication-list-items publication-category-1">
                            <a class="link" target="_blank" href="http://dl.acm.org/citation.cfm?id=3025482">1-Chameleon Devices: Investigating More Secure and Discreet Mobile Interactions via Active Camouflaging</a> ; <a class="link" target="_blank" href="https://chi2017.acm.org/">CHI 2017</a>&nbsp;&nbsp;-&nbsp;&nbsp;
                            Pearson, J., Robinson, S., Jones, M., Joshi, A., Ahire, S. Sahoo, D., Subramanian, S.;
                            <span class="mention">⭐</span>&nbsp;<span class="honour-text">This paper got an Honorable Mention award</span>
                        </li>
                        <li class="publication-list-items publication-category-1">
                            <a class="link" target="_blank" href="http://dl.acm.org/citation.cfm?id=3025944">1-Shift+ Tap or Tap+ LongPress?: The Upper Bound of Typing Speed on InScript</a>; <a class="link" target="_blank" href="https://chi2017.acm.org/">CHI 2017</a>&nbsp;&nbsp;-&nbsp;&nbsp;
                            Ghosh, S., Joshi, A., Joshi, M., Emmadi, N., Dalvi, G., Ahire, S., Rangale, S.;
                            <span class="award">🏆</span>&nbsp;<span class="honour-text">This paper got the Best Case Study award</span>
                        </li>
                        <li class="publication-list-items publication-category-3">
                            <a class="link" target="_blank" href="http://dl.acm.org/citation.cfm?id=3025482">3-Chameleon Devices: Investigating More Secure and Discreet Mobile Interactions via Active Camouflaging</a> ; <a class="link" target="_blank" href="https://chi2017.acm.org/">CHI 2017</a>&nbsp;&nbsp;-&nbsp;&nbsp;
                            Pearson, J., Robinson, S., Jones, M., Joshi, A., Ahire, S. Sahoo, D., Subramanian, S.;
                            <span class="mention">⭐</span>&nbsp;<span class="honour-text">This paper got an Honorable Mention award</span>
                        </li>
                        <li class="publication-list-items publication-category-2">
                            <a class="link" target="_blank" href="http://dl.acm.org/citation.cfm?id=3025944">2-Shift+ Tap or Tap+ LongPress?: The Upper Bound of Typing Speed on InScript</a>; <a class="link" target="_blank" href="https://chi2017.acm.org/">CHI 2017</a>&nbsp;&nbsp;-&nbsp;&nbsp;
                            Ghosh, S., Joshi, A., Joshi, M., Emmadi, N., Dalvi, G., Ahire, S., Rangale, S.;
                            <span class="award">🏆</span>&nbsp;<span class="honour-text">This paper got the Best Case Study award</span>
                        </li>
                    </ul>
                </div>

            </section>
        </div>
    </div>
</div>


<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="script/script.js"></script>

</body>
</html>
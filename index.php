<?php
include './setting.php';
include './header.php';
?>

<main onscroll="verifScroll()">
    <?php
    include './sections/accueil.php';
    include './sections/introspeedrun.php';
    include './sections/video.php';
    include './sections/introevent.php';
    include './sections/events.php';
    include './sections/statgdq.php';
    include './sections/statszevent.php';
    include './sections/solostreams.php';
    include './sections/twitchevo.php';
    include './sections/sondage.php';
    include './sections/associations.php';

    // include './sections/speedrunningrise.php';
    // include './sections/charitystreams.php';
    
    // include './sections/graphsrecolte.php';
    
    // include './sections/comparaison.php';
    
    
    // include './sections/conclusion.php';
    ?>
</main>

<?php
include './footer.php';
?>
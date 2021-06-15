<?php
include './setting.php';
include './header.php';
?>

<main onscroll="verifScroll()">
    <?php
    include './sections/introduction.php';
    include './sections/introspeedrun.php';
    include './sections/video.php';
    include './sections/introevent.php';
    include './sections/events.php';
    include './sections/statgdq.php';
    include './sections/statszevent.php';
    include './sections/solostreams.php';
    include './sections/twitchevo.php';
    include './sections/streams-costs.php';
    include './sections/sondage.php';
    include './sections/associations.php';
    ?>
</main>

<?php
include './footer.php';
?>
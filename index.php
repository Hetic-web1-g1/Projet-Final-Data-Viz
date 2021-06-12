<?php
    include 'setting.php';
    include 'header.php';
?>

<main>
    <section id="acceuil">
        <h1 id="speed"><span>Speed</span><span>Run</span></h1>
    </section>
    <section class="video">
        <video src="./assets/video/speedrun.mp4" autoplay loop muted></video>
    </section>
    <section id="introspeedrun">
        <p>In 1993, ID Software releases Doom which becomes an international success. One year after its release, a website by the name of LMP Hall of Fame 
            lets players upload their gameplay clips in the hopes of obtaining “DOOM Honorifics Titles”, the goal being finishing the game with various challenges or as quick as possible. This is 
            how speedrunning was born. In November of the same year the COMPET-N website was created and becomes the cornerstone of the DOOM speedruning community. </p>
    </section>
    <section id="introtwitch">
        <p class="demo">In the following years, speedrunning became common practice with multiple other games. The Speed Demo website then becomes the reference in terms of speedrunning content.</p>
        <p class="twitch">Twitch’s arrrival onto  the scene in 2011 offers speedrunners a new platform where they can share their content and exploits; live-streaming allows spectators to watch the run live and interact with the speedrunner via chat.</p>
    </section>
    <section id="stat_gdq">
        <button onclick="update_chart(agdq)">Data 1</button>
        <button onclick="update_chart(sgdq)">Data 2</button>
        <script src="js/bar chart.js"></script>
    </section>
    <section id="charitystreams">
        <img src="./assets/img/speedons.svg" alt="speedons" tag-inviewport="scale-in">
        <img src="./assets/img/livetime.svg" alt="livetime" tag-inviewport="scale-in">
        <img src="./assets/img/bourglarun.svg" alt="bourglarun" tag-inviewport="scale-in">
        <p class="event">Following speedrunning rise to popularity, people started to organise charity events around this phenomenon. That’s how the very first edition of Awesome Games Done Quick came to be in 2010.</p>
        <img src="./assets/img/speedrun4life.svg" alt="speedrun4life" tag-inviewport="scale-in">
        <img src="./assets/img/lefrenchrestream.svg" alt="lefrenchrestream" tag-inviewport="scale-in">
        <script src="js/section4.js"></script>
    </section>
    <section class="logo-assoc">
        <a href="https://www.la-spa.fr/nos-missions" target="_blank"><img class="spa" src="./assets/img/spa.svg" alt=""></a>
        <a href="https://paris.croix-rouge.fr/paris-1er-2e" target="_blank"><img class="cr" src="./assets/img/croixrouge.svg" alt=""></a>
        <a href="https://www.msf.fr/agir/soutenir-nos-actions/faire-un-don-en-ligne?cid=87&reserved_field=W**W00001&esv_source=Google&esv_medium=SEA_Brand&esv_campaign=W**W00001&reserved_tracking_iraiser=adwords&esv_term=m%C3%A9decins%20sans%20fronti%C3%A8res&gclid=CjwKCAjwtpGGBhBJEiwAyRZX2rL6ve_74sfnH0KQErrgRNTlQJNPVanLcCvYsyC_NHwcSZEMsBytehoCGCgQAvD_BwE" target="_blank"><img class="medecins" src="./assets/img/medecinssf.svg" alt=""></a>
        <a href="https://donate.savethechildren.org/en?utm_source=google&utm_medium=cpc&utm_campaign=gsn%20west%20brand%20care%20exact&utm_term=save%20the%20children&gclid=CjwKCAjwtpGGBhBJEiwAyRZX2hyY8OEnTFSnAAYdL9oDscXNXu3wjciHn7pehgEGYkz5RfsL7TcY4BoCwYUQAvD_BwE" target="_blank"><img class="save" src="./assets/img/savethechildren.svg" alt=""></a>
        <a href="https://www.pasteur.fr/fr" target="_blank"><img class="institut" src="./assets/img/institutpasteur.svg" alt=""></a>
        <a href="https://www.preventcancer.org/" target="_blank"><img class="prevent" src="./assets/img/preventcancer.svg" alt=""></a>
    </section>
</main>
<?php
    include 'footer.php';
?>

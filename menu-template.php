<nav class="main-menu">
    <div class="main-menu__container">
        <div class="main-menu__navegacion">
            <a href="/" class="main-menu__logo" aria-label="KSchool">
                <img src="<?php echo plugin_dir_url(__FILE__); ?>assets/Logo.svg" alt="KSchool" />
            </a>
            <div class="main-menu__toggle" role="button" tabindex="0" aria-label="Abrir menú">
                <span></span><span></span><span></span>
            </div>
            <ul class="main-menu__list">
                <li class="main-menu__item main-menu__item--has-submenu">
                    <a href="#" class="main-menu__link" id="formacionLink">Formación</a>
                </li>
                <li class="main-menu__item">
                    <a href="#" class="main-menu__link" id="somosksLink">Somos KS</a>
                </li>
                <li class="main-menu__item">
                    <a href="#" class="main-menu__link" id="kstalentLink">KS Talent</a>
                </li>
                <li class="main-menu__item">
                    <a href="/" class="main-menu__link">Blog</a>
                </li>
            </ul>
        </div>
        <div class="main-menu__actions">
            <a href="/" class="main-menu__action">
                <img class="main-menu__action-icon" src="<?php echo plugin_dir_url(__FILE__); ?>assets/briefcase.svg" alt="" width="24" height="24">
                <span class="main-menu__action-text">Empleo</span>
            </a>
            <a href="/" class="main-menu__action">
                <img class="main-menu__action-icon" src="<?php echo plugin_dir_url(__FILE__); ?>assets/user.svg" alt="" width="24" height="24">
                <span class="main-menu__action-text">Campus</span>
            </a>
            <span class="main-menu__byunir">
                <img src="<?php echo plugin_dir_url(__FILE__); ?>/assets/Unir.svg" alt="UNIR" />
            </span>
        </div>
    </div>
    <div class="main-menu__submenu-block main-menu__submenu-block--five-items" id="submenu-formacion" style="display: none;">
        <ul class="main-menu__submenu-list">
            <li class="main-menu__submenu-item"><a href="#">Digital Marketing School</a></li>
            <li class="main-menu__submenu-item"><a href="#">Tech School</a></li>
            <li class="main-menu__submenu-item"><a href="#">Business School</a></li>
            <li class="main-menu__submenu-item"><a href="#">Sports School</a></li>
            <li class="main-menu__submenu-item"><a href="#">Education School</a></li>
        </ul>
    </div>
    <div class="main-menu__submenu-block main-menu__submenu-block--two-items" id="submenu-somosks" style="display: none;">
        <ul class="main-menu__submenu-list">
            <li class="main-menu__submenu-item"><a href="#">Conócenos</a></li>
            <li class="main-menu__submenu-item"><a href="#">Nuestros Profesores</a></li>
        </ul>
    </div>
    <div class="main-menu__submenu-block main-menu__submenu-block--three-items" id="submenu-kstalent" style="display: none;">
        <ul class="main-menu__submenu-list">
            <li class="main-menu__submenu-item"><a href="#">Network</a></li>
            <li class="main-menu__submenu-item"><a href="#">Eventos</a></li>
            <li class="main-menu__submenu-item"><a href="#">Empleo</a></li>
        </ul>
    </div>
    <div class="main-menu__overlay">
        <div class="main-menu__mobile-header">
        </div>
        <ul class="main-menu__mobile-list">
            <li class="main-menu__mobile-item main-menu__mobile-item--has-submenu">
                <button class="main-menu__mobile-link" data-submenu="formacion">
                    Formación
                    <span class="main-menu__arrow"></span></button>
                <ul class="main-menu__mobile-submenu" id="submenu-formacion">
                    <li><a href="#">Digital Marketing School</a></li>
                    <li><a href="#">Tech School</a></li>
                    <li><a href="#">Business School</a></li>
                    <li><a href="#">Sports School</a></li>
                    <li><a href="#">Education School</a></li>
                </ul>
            </li>
            <li class="main-menu__mobile-item main-menu__mobile-item--has-submenu">
                <button class="main-menu__mobile-link" data-submenu="somosks">
                    Somos KS
                    <span class="main-menu__arrow"></span></button>
                <ul class="main-menu__mobile-submenu" id="submenu-somosks">
                    <li><a href="#">Conócenos</a></li>
                    <li><a href="#">Nuestros Profesores</a></li>
                </ul>
            </li>
            <li class="main-menu__mobile-item main-menu__mobile-item--has-submenu">
                <button class="main-menu__mobile-link" data-submenu="kstalent">
                    KS Talent
                    <span class="main-menu__arrow"></span></button>
                <ul class="main-menu__mobile-submenu" id="submenu-kstalent">
                    <li><a href="#">Network</a></li>
                    <li><a href="#">Eventos</a></li>
                    <li><a href="#">Empleo</a></li>
                </ul>
            </li>
            <li class="main-menu__mobile-item">

                <a href="#" class="main-menu__mobile-link">Blog</a>

            </li>
        </ul>
        <div class="main-menu__mobile-footer">
            <span>By <img src="<?php echo plugin_dir_url(__FILE__); ?>/assets/Unir.svg" alt="UNIR" style="height: 40px; vertical-align: middle;"></span>
        </div>
    </div>
</nav>
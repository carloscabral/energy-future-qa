<template>
    <footer class="landing-footer">
        <div class="row cta">
          <div class="col-md-12">
                <div class="cta__item cta__item--blue">
                    <h3>Não perca esta oportunidade!</h3>
                    <p>Seu projeto pode ser selecionado para ajudar a melhorar o fornecimento de energia de <strong>milhões</strong> de brasileiros.</p>
                    <button>Inscrições: 25 de novembro</button>
                </div>
          </div>
        </div> 
        <div class="row mt-5 align-items-end">
            <div class="col-xl-3 col-lg-4 col-sm-6">
                <ul class="footer-menu__list">
                    <li class="footer-menu__item">Menu</li>
                    <li class="footer-menu__item"><g-link to="/noticias/">Inscrição</g-link></li>
                    <li class="footer-menu__item"><g-link to="/duvidas/">Quem Somos</g-link></li>
                    <li class="footer-menu__item"><g-link to="/noticias/">Notícias</g-link></li>
                    <li class="footer-menu__item"><g-link to="/inscricoes/">Dúvidas</g-link></li>
                </ul>
            </div>
            <div class="col-xl-3 col-lg-4 col-sm-6">
                <ul class="footer-menu__list">
                    <li class="footer-menu__item">Outros</li>
                    <li class="footer-menu__item"><g-link to="/">Regulamento Aneel</g-link></li>
                    <li class="footer-menu__item"><g-link to="/">Critérios de Seleção</g-link></li>                    
                    <li class="footer-menu__item"><g-link to="/">Política de Privacidade</g-link></li>
                    <li class="footer-menu__item"><g-link to="/">Termos & Condições</g-link></li>
                </ul>                
            </div>
            <div class="col-xl-4 offset-xl-2 col-lg-4 col-md-6">
                <div class="footer-box mx-auto mx-sm-0">
                    <p class="footer-box__title">Energy Future é uma realização:</p>
                    <g-image class="footer-box__logo" src="../assets/images/img-logo-makeab-light.svg" width="230" />
                    <p class="footer-box__contact">Entre em contato:<span>contato@makeab.com</span></p>
                </div>
            </div>
        </div>

        <div class="row justify-content-between social align-items-end">
            <div class="col-md-6">
                <p class="text-center text-sm-left">Siga-nos:</p>
                <div class="social-list text-center text-sm-left mb-5 mb-md-0">
                    <a href="https://www.instagram.com/energyfuturebr/" class="social-list__link" target="_blank" alt="Instagram">
                        <font-awesome :icon="['fab', 'instagram']"/>
                    </a>                    
                    <a href="https://www.linkedin.com/company/energy-future-br/" class="social-list__link" target="_blank" alt="Linkedin">
                        <font-awesome :icon="['fab', 'linkedin']"/>
                    </a>
                    <a href="https://www.facebook.com/energyfuturebr/" class="social-list__link" target="_blank" alt="Facebook">
                        <font-awesome :icon="['fab', 'facebook']"/>
                    </a>
                </div>
            </div>
            <div class="col-md-6 social-newsletter">
                <p>Receba a nossa newsletter.</p>
            </div>
        </div>

        <div class="row footer-copyright align-items-end">
            <div class="col-md-6 footer-copyright__logo">
                <g-image class="d-none d-sm-none d-md-none d-lg-block" src="../assets/images/img-logo-ef-light.svg" />
                <g-image class="d-none d-sm-none d-md-block d-lg-none" src="../assets/images/img-logo-ef.svg" />
            </div>
            <small class="col-md-6 footer-copyright__text">
                Rua São José, 40 - 4º andar, Centro - Rio de Janeiro, RJ.<br>
                © Copyright 2019. Energy Future. Todos os direitos reservados.
            </small>
        </div>             
    </footer>
</template>

<style lang="scss">

</style>

<template>
    <form 
        class="subscription-form" 
        name="contact" 
        method="post" 
        @submit.prevent="handleSubmit" 
        action="/success/"
        data-netlify="true"
        netlify-honeypot="bot-field">

        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
            <label> Não preencha esse campo se você for um humano: <input name="bot-field" /> </label>
        </p>
        <p class="subscription-form__text"><font-awesome class="subscription-form__icon" :icon="['fas', 'info-circle']"/>&nbsp;&nbsp;Saiba mais sobre a inscrição e como apresentar seu projeto a grandes concessionárias.</p>
        <div class="sender-info">
            
            <label class="subscription-form__label" for="name">Nome</label>
            <input class="subscription-form__input" type="text" name="name" placeholder="Digite seu primeiro nome" v-model="formData.name" required="true" />
            
            <label class="subscription-form__label" for="last-name">Sobrenome</label>
            <input class="subscription-form__input" type="text" name="last-name" placeholder="Digite seu sobrenome" v-model="formData.lastName" required="true" />
            
            <label class="subscription-form__label" for="email">E-mail</label>
            <input class="subscription-form__input" type="email" name="email" placeholder="Digite seu melhor e-mail" v-model="formData.email" required="true"/>

            <div class="subscription-form__checkbox">
                <label>
                    <input type="checkbox" id="checkbox" name="checkbox" v-model="formData.checkbox" required="true" />
                    <span></span>
                    &nbsp;Eu concordo em receber e-mails com atualizações sobre o Energy Future.
                </label>
            </div>

        </div>

        <button class="subscription-form__button" type="submit">Enviar</button>
    </form>    
</template>


<script>
export default {
    data: () => ({
        formData: {},
    }),
    methods: {
        encode(data) {
            return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
        },
        handleSubmit(e) {
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: this.encode({
                    'form-name': e.target.getAttribute('name'),
                    ...this.formData,
                }),
            })
            .then(() => this.$router.push('/success'))
            .catch(error => alert(error))
        }
    }        
}
</script>

<style lang="scss">

.subscription-form {
    padding: 1.5rem;
    margin: 1.5rem 0;
    border-radius: .22rem;
    background-color: #fff;
    max-width: 25rem;
    box-shadow: 0 1rem 5rem rgba($primary-color, 0.12);

    @media (min-width: 992px) {
        margin-top: 3rem;
        margin-bottom: 0;
    }

    &__icon {
        color: $light-grey;
    }

    &__text {
        font-style: italic;
        font-weight: 400;
    }

    &__label {
        display: block;
        font-size: .75rem;
        //color: $accent-color-2;
        margin-bottom: .15rem;
    }

    &__input {
        width: 100%;
        padding: .5rem 1rem;
        outline: 0;
        border-radius: .22rem;
        border-style: none;
        margin-bottom: 1.5rem;
        background-color: lighten($light-grey, 18%);       
    }

    ::placeholder {
        color: darken($light-grey, 5%);
    } 

    &__button {
        @include colored-button($secondary-color);
        width: 100%;
        text-align: center;
    }

    &__checkbox{
        margin: 0 0 1.5rem 0;

        label {
            padding-left: 1.5rem;
            margin-bottom: 0;
            font-weight: 500;
            font-size: .66rem;
            color: $secondary-color;
            cursor: pointer;  
        }

        span {
            position: relative;
            display: inline-block;
            vertical-align: top;
            margin-left: -1.5rem;
            width: 1.11rem;
            height: 1.11rem;
            border-radius: 2px;
            border: 1px solid #ccc;
            text-align: center;
            
            &::before {
                content: "\2713";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0;
                text-align: center !important;
                line-height: 1;
                vertical-align: middle;                
            }            
        }

        input[type=checkbox]{
            position:absolute;
            margin: 0;
            opacity:0;
        }

        input[type=checkbox]:checked {
            color: #fff;
            transition: color 0.3s ease-out;
        }
        
        input[type=checkbox]:checked + span{
            border-color: $secondary-color;
            background-color: $secondary-color;
        }

        input[type=checkbox]:checked + span:before{
            color: #fff;
            opacity: 1;
            transition: color 0.3s ease-out;
        }

    }
}

</style>


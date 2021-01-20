let app = new Vue({
    el: '#app',
    data:{
        //array di link
        listLinkNavbar:[
            'Home',
            'About',
            'Services',
            'Blog',
            'Contact',
            'Portfolio',
        ],

        //card section servizi
        cards:[
            {
                img:"group-247.png",
                titolo:"Data Analysis",
                testo:"When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            },
            {
                img:"group-567.png",
                titolo:"SEO Optimizazion",
                testo:"When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            },
            {
                img:"group-538.png",
                titolo:"Security Data",
                testo:"When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            },
            {
                img:"group-566.png",
                titolo:"Branding Strategy",
                testo:"When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            },
        ],
        
        //array di immagini per lo slider
        immagini:[
            './assets/img/sale80.jpg',
            './assets/img/indice.jpg',
            './assets/img/Dry.jpg',
            './assets/img/dust-cover.jpg',
            './assets/img/indice.jpg',
        ],
        //creato contatore che indica l'indice dell'array
        contatore1: 0,
        contatore2: 1,
        contatore3: 2,
        contatore4: 3,
        contatore5: 4,
    
        //cards section listino prezzi
        cardsList:[
            {
                titolo:"Designing",
                titoloPiccolo:"Process",
                numero:"40",
            },
            {
                titolo:"Developing",
                titoloPiccolo:"Product",
                numero:"60",
            },
            {
                titolo:"Supporting",
                titoloPiccolo:"Clients",
                numero:"80",
            },
        ],

        //cards section blog e testimonial
        cardsBlog:[
            {
                testoGrassetto:"Clearing Corporations get Sebi nod to invest in overnight funds",
            },
            {
                testoGrassetto:"Shabnam Dhillion, wife of RSSB chief Gurinder Dhillon, passes away in London",
            },
        ],
    },

    methods:{
          //cliccando sul bottone right le immagini si spostano a destra
          avanti(){ 
            (this.contatore1 == this.immagini.length - 1) ? this.contatore1 = 0 : this.contatore1++
            (this.contatore2 == this.immagini.length - 1) ? this.contatore2 = 0 : this.contatore2++
            (this.contatore3 == this.immagini.length - 1) ? this.contatore3 = 0 : this.contatore3++
            (this.contatore4 == this.immagini.length - 1) ? this.contatore4 = 0 : this.contatore4++
            (this.contatore5 == this.immagini.length - 1) ? this.contatore5 = 0 : this.contatore5++
         },

         //cliccando sul bottone left le immagini si postano a sinistra
         indietro(){ 
            (this.contatore1 == 0) ? this.contatore1 = this.immagini.length -1 : this.contatore1--
            (this.contatore2 == 0) ? this.contatore2 = this.immagini.length -1 : this.contatore2--
            (this.contatore3 == 0) ? this.contatore3 = this.immagini.length -1 : this.contatore3--
            (this.contatore4 == 0) ? this.contatore4 = this.immagini.length -1 : this.contatore4--
            (this.contatore5 == 0) ? this.contatore5 = this.immagini.length -1 : this.contatore5--
         }
    },

});

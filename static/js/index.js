(() => {

    const app = {

        init() {
            console.log(1);
            this.cache();
        },

        cache() {
            console.log(1);
            this.$indexpics = document.querySelector('.indexpics');
            this.generate();
        },

        generate() {
            console.log(1);
            this.$indexpics.innerHTML = this.generateHTMLForIndexPics();
        },

        generateHTMLForIndexPics() {
            return indexpics.map((indexpic) => {
                return `
                
                
                                <figure>
                                    <img src=${indexpic.image} loading="lazy">
                                    <figcaption>
                                        <span>${indexpic.description}</span class"indexpic-title">
                                        <div class="indexpic-title"></div>
                                    </figcaption>
                                </figure>
                            
                
                `
            }).join('');
            
            
            `
            ${indexpics.image}
            `
        },


    }; app.init();


})()
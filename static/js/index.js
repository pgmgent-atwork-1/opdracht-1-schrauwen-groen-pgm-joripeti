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
                                        <div class="indexpic-title"><span>${indexpic.description}</span></div>
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
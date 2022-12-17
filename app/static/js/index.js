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
                    <figure class="scroll-element">
                            <a href="#"><img src=${indexpic.image} loading="lazy"></a>
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
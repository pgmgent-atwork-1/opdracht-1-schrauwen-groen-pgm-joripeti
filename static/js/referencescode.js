(() => {
    const app = {
        init() {
            console.log('1. init');
            this.cache();
        },
        cache() {
            console.log('2. cache');
            this.$referencesList = document.querySelector('.references-list');
            this.generate();
        },
        generate(){
            console.log('3. generate');
            this.$referencesList.innerHTML = this.getHTMLForRefs(references);
        },
        getHTMLForRefs (references) {
            return references.map((reference) => {
                return `
                
                <div class="reference">
                    <figure class="reference-picture">
                        <img src=${reference.image}>
                        <figcaption>
                            <h3 class="reference-title">${reference.description}</h3>
                            <div class="divider-line"><div>
                        </figcaption>
                    </figure>
                </div>
                
                `;
            }).join('');
        }
    };
    app.init()
})();
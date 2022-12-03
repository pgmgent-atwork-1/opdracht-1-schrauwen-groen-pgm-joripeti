(() => {
    const app = {
        init() {
            console.log('1.init');
            this.cache();
        },
        cache() {
            console.log('2.cache');
            this.$bodyListing = document.querySelector('.onderhoud_body_listing');
            this.$aanlegRefListing = document.querySelector('.aanleg_references_listing');
            this.generate();
        },
        generate() {
            console.log('3.generate');
            this.$bodyListing.innerHTML = this.generateHTMLForBodyListing();
            this.$aanlegRefListing.innerHTML = this.generateHTMLForRefListing();
        },
        generateHTMLForBodyListing() {
            return aanenonderdata.map((aanenonderdatum) => {
                if (aanenonderdatum.type == "onderhoud") {
                    return `
                    <article class="body_list_items">
                        <article class="image-body">
                        <img src="${aanenonderdatum.image}" loading="lazy">
                        </article>
                        <article class="text-body">
                        <h2>${aanenonderdatum.title}</h2>
                        <p>${aanenonderdatum.body}<p>
                        </article>
                        <div class="button-orange">Meer informatie</div>
                        </article>
                    `
                }
            }).join('');
        },
        generateHTMLForRefListing() {
            references.length = 6;
            return references.map((reference) =>{
                return `
                <article class="refsection">
                <div class="aanenonder_references-list">
                    <figure class="reference-picture">
                        <img src=${reference.image} loading="lazy">
                        <figcaption>
                            <h3 class="reference-title">${reference.description}</h3>
                            <div class="divider-line"><div>
                        </figcaption>
                    </figure>
                </div>
                </article>
                `
            }).join('');
        },
    }; app.init();
})()
(() => {
    const app = {
        init() {
            console.log('1.init');
            this.cache();
        },
        cache() {
            console.log('2.cache');
            this.$bodyListing = document.querySelector('.aanleg_body_listing');
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
                if (aanenonderdatum.type == "aanleg") {
                    return `
                        <article class="body_list_items" a href="${aanenonderdatum.buttonlink}">
                        <article class="image-body">
                        <img src="${aanenonderdatum.image}" loading="lazy">
                        </article>
                        <article class="text-body">
                        <h2>${aanenonderdatum.title}</h2>
                        <p>${aanenonderdatum.body}<p>
                        </article>
                        <div class="button-orange"><a href="#">Meer informatie<a href="#"></div>
                        </article>
                    `
                }
            }).join('');
        },
        generateHTMLForRefListing() {
            references.length = 6;
            return references.map((reference) =>{
                return `
                <div class="aanleg-refsection">
                    <div class="aanenonder_references-list">
                        <figure class="reference-picture">
                            <img src=${reference.image} loading="lazy">
                            <figcaption>
                                <span class="aanleg-reference-title">${reference.description}</span>
                                <div class="divider-line"><div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                `
            }).join('');
        },
    }; app.init();
})()
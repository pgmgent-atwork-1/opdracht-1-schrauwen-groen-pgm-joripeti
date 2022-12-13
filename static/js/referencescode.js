(() => {
    const app = {
        init() {
            console.log('1. init');
            this.cache();
        },
        cache() {
            console.log('2. cache');
            this.$referencesList_private = document.querySelector('.references-list_private');
            this.$referencesList_b2b = document.querySelector('.references-list_b2b');
            this.$referencesList_public = document.querySelector('.references-list_public');
            this.$anchorTitles = document.querySelector('.anchor-titles');
            this.generate();
        },
        generate(){
            console.log('3. generate');
            this.$anchorTitles.innerHTML = this.getHTMLForAnchors(anchorTitles);
            this.$referencesList_private.innerHTML = this.getHTMLForPrivateRefs(references);
            this.$referencesList_b2b.innerHTML = this.getHTMLForB2BRefs(references);
            this.$referencesList_public.innerHTML = this.getHTMLForPublicRefs(references);
        },
        getHTMLForPrivateRefs (references) {
            return references.map((reference) => {
                if (reference.type == "private") {
                return `
                <div class="reference">
                    <figure class="reference-picture">
                        <img src=${reference.image} loading="lazy">
                        <figcaption>
                            <span class="reference-title">${reference.description}</span>
                            <div class="divider-line"><div>
                        </figcaption>
                    </figure>
                </div>
                `;
            };
        }).join('');
    },
        getHTMLForB2BRefs (references) {
            return references.map((reference) => {
                if (reference.type == "b2b") {
                    return `
                    <div class="reference_b2b">
                        <figure class="reference-picture">
                            <img src=${reference.image} loading="lazy">
                            <figcaption>
                                <span class="reference-title">${reference.description}</span>
                                <div class="divider-line"><div>
                            </figcaption>
                        </figure>
                    </div>
                    `;
                };
             }).join('');
    },
        getHTMLForPublicRefs (references) {
            return references.map((reference) => {
                if (reference.type == "public") {
                    return `
                    <div class="reference">
                        <figure class="reference-picture">
                            <img src=${reference.image} loading="lazy">
                            <figcaption>
                                <span class="reference-title">${reference.description}</span>
                                <div class="divider-line"><div>
                            </figcaption>
                        </figure>
                    </div>
                    `;
                };
             }).join('');
        },
        getHTMLForAnchors(anchorTitles) {
            return anchorTitles.map((anchorTitle) => {
                return `
                <article class="anchor-container">
                    <img src="static/img/quick-link-icon.svg" loading="lazy">
                    <article class="anchor-title"> <a href="#${anchorTitle.type}">${anchorTitle.name}</a></article>
                </article>
                `;
            }).join('');
    },
    };
    app.init()
})();
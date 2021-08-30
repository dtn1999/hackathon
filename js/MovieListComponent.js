export class MovieListComponent {
    state = [];

    htmlElement;
    constructor(state) {
        this.htmlElement = document.createElement("section");
        this.htmlElement.innerHtml = "";

        //
        const main = document.querySelector("main");
        main.appendChild(this.htmlElement);

        if (state) {
            this.render();
        }
    }

    setState(state) {
        this.state = state;
        this.render();
    }

    render() {
        this.htmlElement.innerHTML = "";
        if (this.state.length === 0) {
            this.htmlElement.appendChild(this.createEmptyList());
            return;
        }

        this.state.map(({ movieTitle, poster, rating, overview }) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
            <img src="${poster}" alt="${movieTitle}" />
            <div class="moviInfo">
                <span class="title"> ${movieTitle} </span>
                <span class="rating"> ${rating} </span>
            </div>
            <div class="movieOverView">
                <h3>Overview</h3>
                <p>
                ${overview}
                </p>
            </div>
            `;
            this.htmlElement.appendChild(card);
        });
    }

    createEmptyList() {
        const empty = document.createElement("div");
        empty.innerHTML = `
    <h3> No Element found check if search element correct
    </h3>
    `;
        return empty;
    }
}
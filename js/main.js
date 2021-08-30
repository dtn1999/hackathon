import { AppState } from "./AppState.js";
import { MovieListComponent } from "./MovieListComponent.js";

const appState = new AppState();
const movieListComponent = new MovieListComponent([]);

appState.fetchData().then(() => {
    // state already update
    movieListComponent.setState(appState.data);
});
const input = document.getElementById("input");
input.addEventListener("input", async(event) => {
    const query = event.target.value;
    await appState.setSearch(query);
    movieListComponent.setState(appState.data);
});
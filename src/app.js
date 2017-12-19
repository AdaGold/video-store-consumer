import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// collections
import MovieList from 'collections/movie_list';

// views
import MovieView from './views/movie_view.js';
import MovieListView from './views/movie_list_view.js';
import SearchMoviesView from './views/movie_list_view.js';

// model
import Movie from 'models/movie';

// ready to go
$(document).ready(function() {
  const movies = new MovieList();
  const movieListView = new MovieListView({
    model: movies,
    template: _.template($('#movie-template').html()),
    searchTemplate: _.template($('#search-template').html()),
    el: ('#main-content')
  });

  // after call to external API, render the movieListView
  movies.fetch({
    success: function(){
      movieListView.render();
    }
  });
});

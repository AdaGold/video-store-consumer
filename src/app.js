import 'css/_settings.css';
import 'foundation-sites/dist/css/foundation.css';
import './css/styles.css';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';


// ready to go
$(document).ready(function() {

  const movies = new MovieList(movieData);

  const MovieListView = new MovieListView({
    model: movies,
    template: _.template($('#movie-template').html()),
    el: 'main'
  });

  $('#main-content').append('<p>Hello World!</p>');

  MovieListView.render();
});

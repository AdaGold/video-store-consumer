import Backbone from 'backbone';
import _ from 'underscore';
import OrderView from '../views/movie_view';
import Order from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model,"update", this.render);
  }
});


export default MovieListView;

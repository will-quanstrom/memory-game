import './styles.css';
import { Entry } from './journal3';

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();

    var post = new Entry($('#titleInput').val(), $('#bodyInput').val());
    console.log(post);
    // $("#displayTeaser").show();
    $("#displayTeaser").append('<h3>' + post.getTeaser() + '</h3>');
    $("#bodyLetterCounter").text("Your post has " + post.countWords() + " words.");
    console.log(post.countWords());
    $("#vowelCounter").text(post.countVowels());
    console.log(post.countVowels());


  });
});

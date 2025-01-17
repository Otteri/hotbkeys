/* Currently does:
 * - opens Google links with number keys
 * - opens Bing links with number keys
 */



 // Opens a link when user presses a number key when nothing is focused.
 // (Links are not wanted to be opened when user writes e.g. a search query).
document.addEventListener('keydown', function(event) {
  const key = event.key;

  if (!isNaN(key) && document.activeElement === document.body) {
    openLink(key-1);        
  }
 });


function openLink(number) {
  var desired_search_result;

  if (window.location.hostname == "www.google.com") {
    desired_search_result = document.getElementsByClassName("g")[number];
  } else if (window.location.hostname == "www.bing.com") {
    desired_search_result = document.getElementsByClassName("b_algo")[number];
  }

  var desired_link = desired_search_result.getElementsByTagName("a")[0].href;
  window.location.href = desired_link;
}



/* For lazy debugging: */
//document.body.style.border = "5px solid green";

/*
 * NOTES:
 *==============================================================================
 * window.location.replace(desired_link)
 * This doesn't return back to search results if user decides to go back.
 * For this reason window.location.href is better, because it doesn't 'forget'
 * the previous page.
 * -----------------------------------------------------------------------------
 */

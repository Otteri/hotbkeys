/* Currently does:
 * - [ctrl + alt + s] selects first search field in DOM.
 */

// define vocabulary for shortcuts here.
// Lower case only (i.e no need to duplicate words with capital letters).
var trigger_search = ["search", "haku", "hae", "etsi"];

// Main event
document.addEventListener('keydown', function(e) {
  var evtobj = window.event? event : e

  // shift + s - select first search field.
  if (evtobj.ctrlKey && evtobj.altKey && evtobj.keyCode == 83) {
    e.preventDefault();
    var input_fields = document.body.getElementsByTagName("input");
    for (var i in input_fields) {
      if(is_match(input_fields[i], trigger_search)) {
        break;
      }
    }
  }
 });


// Checks if the input field contains some of the triggering words.
// @words: List of eligible words.
// @field: The field being checked.
// @return: true/false depending if matches are found.
function is_match(field, trigger_words) {
  for (var j in trigger_words) {
    if(field.placeholder.toLowerCase().includes(trigger_words[j]) ||
      field.className.toLowerCase().includes(trigger_words[j]) ||
      field.title.toLowerCase().includes(trigger_words[j]) ||
      field.getAttribute("name").toLowerCase().includes(trigger_words[j]) ||
      field.getAttribute("type").toLowerCase().includes(trigger_words[j])) {
      select(field);
      return true;
    }
  }
  return false;
}

// Select input field if the field is not already selected.
// @param: some input field (DOM element).
function select(field) {
  if(document.activeElement !== field) {
    field.focus();
    field.select();
  }
}


/* Notes:
 * Prevent default must come after valid shortcut combination.
 * If it is placed earlier, then the preventdefault blocks browser's default behaviour.
 */

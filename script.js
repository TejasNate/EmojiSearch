function SearchEmoji() {
  let inputvalue = document.getElementById("EmojiSearch").value;

  emojiSearch(inputvalue);
}
function emojiSearch(searchQuery = "") {
  let filterData = emojiList.filter((e) => {
    if (e.description.indexOf(searchQuery) != -1) {
      return true;
    }

    if (e.tags.some((elem) => elem.startsWith(searchQuery))) {
      return true;
    }

    if (e.aliases.some((elem) => elem.startsWith(searchQuery))) {
      return true;
    }
  });

  let Value = document.getElementById("search_result");
  Value.innerHTML = "";
  filterData.forEach((e) => {
    let new_row = document.createElement("tr");
    let new_emoji = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_description = document.createElement("td");
    new_emoji.innerText = e.emoji;
    new_aliases.innerText = e.aliases;
    new_description.innerText = e.description;

    new_row.appendChild(new_emoji);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_description);

    Value.appendChild(new_row);
  });
}
document.getElementById("EmojiSearch").addEventListener("keyup", SearchEmoji);
window.onload = () => emojiSearch();

function test() {
  let name = prompt("What is your name?");
  let genre = prompt("What is your favorite music genre?");

  genre = genre.toLowerCase();
  genre = genre.trim();
  name = name.trim();

  if (
    genre.includes("rock") ||
    genre.includes("folk") ||
    genre.includes("pop") ||
    genre.includes("indie") ||
    genre.includes("soul") ||
    genre.includes("ambient")
  ) {
    alert(
      name + ", you will ❤ Rue Royale's music! Give it a listen right now! 🎧"
    );
  } else {
    alert(
      name +
        ", maybe you won't like Rue Royale's music. But give them a listen anyway! 🎧"
    );
  }
}
let testButton = document.querySelector(".test-button");
testButton.addEventListener("click", test);

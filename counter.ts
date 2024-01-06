//* Changing profile views counter

const url =
  "https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com/Michal-Radomski&count_bg=%238530D4&title_bg=%23515151&icon_color=%23FCC624&title=Profile+views%3A";

for (let i = 0; i < 2211; i++) {
  setTimeout(() => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        const regex = /\d{3,4}\s\/\s\d{4}/gim;
        const result = data.match(regex);
        console.log({ i }, "result[0]:", result![0]);
      })
      .catch((err) => console.log(err));
  }, i * 1000);
}

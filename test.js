const url =
  "https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com/Michal-Radomski&count_bg=%238530D4&title_bg=%23515151&icon=linux.svg&icon_color=%23FCC624&title=Profile+views%3A";

for (let i = 0; i < 1; i++) {
  setTimeout(() => {
    console.log({ i });
    fetch(url)
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, i * 100);
}

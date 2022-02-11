fetch("https://restcountries.com/v3.1/all")
  .then((a) => a.json())
  .then((q) => {
    document.querySelector(".loading").remove();
    q.forEach((e) => {
      console.log(e.latlng);
      const [lat, lng] = e.latlng;
      const newlat = lat * (5 / 9) + 50;
      const newlng = lng * (5 / 18) + 50;
      const area = e.area > 500000 ? (e.area / 150000000) * 100 : 0.2;
      console.log(area);
      document.querySelector(".cont").innerHTML += `<img src=${
        e.flags.svg
      } class="${e.name.common} round" style="position: absolute;top: ${
        100 - newlat
      }%;left: ${newlng}%;width: ${
        area * 3
      }%; transform:translate(-50%,-50%); z-index: ${Math.floor(
        (100 - area) * 1000
      )}"/>`;
    });
  });

function bestRockBand(band) {
  return new Promise((resolve, reject) => {
    if (band == "Queen") {
      resolve({
        sucess: true,
        bandName: band,
        msg: band + " is the best rock band ever",
      });
    } else {
      reject({
        sucess: false,
        msg: "I'm not so sure",
      });
    }
  });
}

function bestRockSong(response) {
  return new Promise((resolve, reject) => {
    if (response.sucess) {
      resolve("Bohemia Rhapsody by " + response.bandName);
    } else {
      reject("Do you know Queen?");
    }
  });
}

// bestRockBand("Queen")
//   .then((response) => {
//     console.log("Checking the answer...");
//     return bestRockSong(response);
//   })
//   .then((response) => {
//     console.log("Finding the best song...");
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err.msg);
//   });

async function doTheJob() {
  try {
    const bestRockBandResponse = await bestRockBand("Kiss");
    console.log(bestRockBandResponse);
    const bestRockSongResponse = await bestRockSong(bestRockBandResponse);
    console.log(bestRockSongResponse);
  } catch (err) {
    console.log(err.msg);
  }
}

doTheJob();

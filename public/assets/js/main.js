document.addEventListener("DOMContentLoaded", function () {
  const createCarousel = (
    containerSelector,
    imageFolder,
    images,
    isDownloadable
  ) => {
    const container = document.querySelector(containerSelector);

    // Shuffle the images array
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }

    images.forEach((imageData, index) => {
      const encodedImage = encodeURIComponent(imageData.image);
      const itemContainer = document.createElement("div");
      itemContainer.classList.add("mb-4");

      const imgElement = document.createElement("img");
      imgElement.src = `${imageFolder}/${encodedImage}`;
      imgElement.alt = imageData.image;
      imgElement.classList.add("w-full", "rounded-lg");

      const textElement = document.createElement("p");
      textElement.classList.add("text-center", "mt-2");
      textElement.textContent = imageData.image
        .replace(".jpg", "")
        .replace(".png", "")
        .replace(".bmp", "");

      if (index === 0) {
        imgElement.classList.add("active");
        textElement.classList.add("active");
      }

      if (isDownloadable) {
        imgElement.addEventListener("click", () => {
          const link = document.createElement("a");
          link.href = imageData.downloadLink;
          link.download = imageData.downloadLink.split("/").pop();
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        });
      }

      itemContainer.appendChild(imgElement);
      itemContainer.appendChild(textElement);
      container.appendChild(itemContainer);
    });

    let currentIndex = 0;
    setInterval(() => {
      const items = container.querySelectorAll("div");
      items[currentIndex].querySelector("img").classList.remove("active");
      items[currentIndex].querySelector("p").classList.remove("active");
      currentIndex = Math.floor(Math.random() * items.length);
      items[currentIndex].querySelector("img").classList.add("active");
      items[currentIndex].querySelector("p").classList.add("active");
    }, 3000); // Change image every 3 seconds
  };

  const toolImages = [
    {
      image: "AIO Tool 2.5.2 Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/AIO Tool v2.5.2 Cracked By Nebula.rar",
    },
    {
      image: "Alcatraz Cracked By Nebula",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1261754476264558713/Alcatraz_Cracked_By_Nebula.rar?ex=66941bed&is=6692ca6d&hm=bb0ae5ab41b012532163ae7d108c3d598e290b0674c42cfb8fe536df7758b5ca&",
    },
    {
      image: "Aurora exclusive Cracked By Nebula",
      downloadLink: "https://nebulamods.ca/tools/Aurora Cracked By Nebula.rar",
    },
    {
      image: "BatMan Tool Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/BatMan Tool Cracked By Nebula.rar",
    },
    {
      image: "BO1 XRPC Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/BO1_XRPC_Cracked_By_Nebula.zip",
    },
    {
      image: "Casper 4.1 Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Casper 4.1 AUTH Cracked By Nebula.rar",
    },
    {
      image: "CFW Grabber Cracked By Nebula",
      downloadLink: "https://nebulamods.ca/tools/CFW Grabber.rar",
    },
    {
      image: "Chaotic360 Cracked By Nebula",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1261754478240202752/Chaotic360_Remastered_v2.0.7_Cracked_By_Nebula.rar?ex=66941bed&is=6692ca6d&hm=d8caa1eb568781f654d1698847fad7e84bdddf5e7e2f5ac87def68443e8c7673&",
    },
    {
      image: "DankTool Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/DANK TOOL Cracked By Nebula.rar",
    },
    {
      image: "Dank RGH Grabber Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Dank RGH Grabber Cracked By Nebula.rar",
    },
    {
      image: "DeathRGH Tools Studio Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/DeathRGH Tool Private Cracked By Nebula.rar",
    },
    {
      image: "Halo Astro 2 Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Halo Astro 2 Cracked By Nebula.rar",
    },
    {
      image: "Imperium Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/1.27_IMPERIUM_ACCOUNT_EDITOR_0.9 Cracked By Nebula.rar",
    },
    {
      image: "Injector Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Injector_Cracked_By_Nebula.zip",
    },
    {
      image: "Nimbus Cracked By Nebula",
      downloadLink: "https://nebulamods.ca/tools/Nimbus Cracked By Nebula.rar",
    },
    {
      image: "Paragon Engine Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Paragon Engine Cracked By Nebula.rar",
    },
    {
      image: "Pesticide Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Pesticide Beta 1.0.0 Cracked By Nebula.rar",
    },
    {
      image: "Project Nix Cracked By Nebula",
      downloadLink: "https://nebulamods.ca/tools/NIX Cracked By Nebula.rar",
    },
    {
      image: "Project Rebirth Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Project Rebirth Cracked By Nebula.rar",
    },
    {
      image: "Project Stealth Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Project Stealth Cracked By Nebula.rar",
    },
    {
      image: "Revox Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Revox v3 Cracked By Nebula.rar",
    },
    {
      image: "Satan's Modding Team Tool Cracked By Nebula",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1261783082545971312/Satan_Modding_Tool_V6.2.2_Cracked_By_Nebula.rar?ex=66943691&is=6692e511&hm=5f97306a749b04f5f41c0df0601962dc45f3c94a1085bd35155ecad2bffa387b&",
    },
    {
      image: "Simplicity Beta [v0.1] Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Simplicity Beta [v0.1] Cracked By Nebula.rar",
    },
    {
      image: "Solution Finale Cracked By Nebula",
      downloadLink: "https://nebulamods.ca/tools/Solution Finale 1.2.0.rar",
    },
    {
      image: "Super Shitty Tool Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Super Shitty Tool Cracked By Nebula.rar",
    },
    {
      image: "TCM's Multi-COD Tool Cracked By Nebula",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1261783116545134722/TCMs_Multi-COD_Tool_Cracked_By_Nebula.rar?ex=66943699&is=6692e519&hm=fc3c44951ebe5b45b2475ae0061967be73c15ca63c86094a02a0ecea4111f533&",
    },
    {
      image: "The Legion Cracked By Nebula",
      downloadLink: "https://nebulamods.ca/tools/Legion Cracked By Nebula.rar",
    },
    {
      image: "VENOM Cracked By Nebula",
      downloadLink: "https://nebulamods.ca/tools/VENOM Cracked By Nebula.rar",
    },
    {
      image: "Versa Shotz Cracked By Nebula",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1261783082974056519/Versa_Shotz_1.3_Cracked_By_Nebula.rar?ex=66943691&is=6692e511&hm=0192d855ad62af2d7a4fa84e177d0eddc1ec9a12d2278bdf3315d962d2c9b220&",
    },
    {
      image: "Ziimze Tool Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Ziimze Tool Cracked By Nebula.rar",
    },
    {
      image: "Real Nigga Tool Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/My Real Nigga Tool Cracked By Nebula.rar",
    },
    {
      image: "Project Gucci Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Project Gucci Remastered Cracked By Nebula.rar",
    },
    {
      image: "BO2 Derank Tool Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/X360DeRank Tool v5.0.6 Cracked By Nebula.rar",
    },
    {
      image: "TCM BO2 IP Spoofer Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/TCMipSpoofer+MoreUpdate Cracked By Nebula.rar",
    },
    {
      image: "Revolution Cracked By Nebula",
      downloadLink:
        "https://nebulamods.ca/tools/Revolution Tool Cracked By Nebula.rar",
    },
  ];

  //   createCarousel(
  //     ".carousel",
  //     "https://nebulamods.ca/assets/img/tools",
  //     toolImages,
  //     true
  //   );

  const toolLinksContainer = document.getElementById("tool-links");
  toolImages.forEach((imageData) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = imageData.downloadLink;
    link.textContent = imageData.image;
    link.classList.add("text-blue-400", "hover:underline");
    listItem.appendChild(link);
    toolLinksContainer.appendChild(listItem);
  });

  const xexImages = [
    {
      image: "Coming Soon",
      downloadLink: "#",
    },
  ];

  const xexLinksContainer = document.getElementById("xex-links");
  xexImages.forEach((imageData) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = imageData.downloadLink;
    link.textContent = imageData.image;
    link.classList.add("text-blue-400", "hover:underline");
    listItem.appendChild(link);
    xexLinksContainer.appendChild(listItem);
  });

  const sourceImages = [
    {
      image: "Coming Soon",
      downloadLink: "#",
    },
  ];

  const sourceLinksContainer = document.getElementById("source-links");
  sourceImages.forEach((imageData) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = imageData.downloadLink;
    link.textContent = imageData.image;
    link.classList.add("text-blue-400", "hover:underline");
    listItem.appendChild(link);
    sourceLinksContainer.appendChild(listItem);
  });

  const showcaseImages = [
    "75-0 Pub TDM.jpg",
    "Animus Offhost.jpg",
    "AWAimbot.jpg",
    "Beds Offhost.jpg",
    "BO1 Classes.jpg",
    "BO1 Shit.jpg",
    "Bolt MW3 Offhost.jpg",
    "cipher-aurora.jpg",
    "COD Engine Offhost.jpg",
    "dank-image3.jpg",
    "Dev XeX NiNJA Skid.jpg",
    "DevilEngine Offhost.jpg",
    "DieXbls Offhost.jpg",
    "Eunoia Offhost.jpg",
    "Exodus Offhost.jpg",
    "FSD Blades.jpg",
    "LPTF Menu V1 Offhost.jpg",
    "Mac & IP Spoofing.jpg",
    "Naked Vanguard.png",
    "NebCheese.jpg",
    "Nigel's Offhost.png",
    "NiNJA V1 Menu Base.jpg",
    "Null offhost.jpg",
    "Pheonix V2 Offhost.jpg",
    "Rebellion CE Beta.jpg",
    "Sarx Offhost.jpg",
    "Synergy Offhost.jpg",
    "Vanguard(2).jpg",
    "Vanguard(3).jpg",
    "Vanguard(4).bmp",
    "Vanguard(8).bmp",
    "Vanguard(9).bmp",
    "Vanguard.bmp",
    "Weird Ping.jpg",
    "xNet Engine Offhost Ingame.jpg",
    "xNet Engine Offhost.jpg",
  ];

  createCarousel(
    ".showcase-carousel",
    "https://nebulamods.ca/assets/img/showcase",
    showcaseImages.map((image) => ({ image })),
    false
  );
});

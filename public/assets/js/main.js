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
    { image: "$hit", downloadLink: "https://nebulamods.ca/xexs/$hit.xex" },
    {
      image: "1337 Hax",
      downloadLink: "https://nebulamods.ca/xexs/1337%20Hax.xex",
    },
    { image: "2", downloadLink: "https://nebulamods.ca/xexs/2.xex" },
    { image: "3", downloadLink: "https://nebulamods.ca/xexs/3.xex" },
    { image: "32Char", downloadLink: "https://nebulamods.ca/xexs/32Char.xex" },
    { image: "5", downloadLink: "https://nebulamods.ca/xexs/5.xex" },
    { image: "6", downloadLink: "https://nebulamods.ca/xexs/6.xex" },
    {
      image: "7sNotify v1.2",
      downloadLink: "https://nebulamods.ca/xexs/7sNotify%20v1.2.xex",
    },
    {
      image: "a8ca5-cheatengine",
      downloadLink: "https://nebulamods.ca/xexs/a8ca5-cheatengine.xex",
    },
    { image: "Aero", downloadLink: "https://nebulamods.ca/xexs/Aero.xex" },
    {
      image: "Agony Framework",
      downloadLink: "https://nebulamods.ca/xexs/Agony%20Framework.xex",
    },
    { image: "Aimbot", downloadLink: "https://nebulamods.ca/xexs/Aimbot.xex" },
    { image: "Akira", downloadLink: "https://nebulamods.ca/xexs/Akira.xex" },
    {
      image: "All Cod Bypass",
      downloadLink: "https://nebulamods.ca/xexs/All%20Cod%20Bypass.xex",
    },
    { image: "Alpha", downloadLink: "https://nebulamods.ca/xexs/Alpha.xex" },
    {
      image: "AlternativeLive",
      downloadLink: "https://nebulamods.ca/xexs/AlternativeLive.xex",
    },
    {
      image: "AMEngineCrack",
      downloadLink: "https://nebulamods.ca/xexs/AMEngineCrack.xex",
    },
    {
      image: "Anarchise",
      downloadLink: "https://nebulamods.ca/xexs/Anarchise.xex",
    },
    {
      image: "AnimusOffhost",
      downloadLink: "https://nebulamods.ca/xexs/AnimusOffhost.xex",
    },
    {
      image: "Annoyance",
      downloadLink: "https://nebulamods.ca/xexs/Annoyance.xex",
    },
    {
      image: "AnonLive",
      downloadLink: "https://nebulamods.ca/xexs/AnonLive.xex",
    },
    {
      image: "Anti End Game",
      downloadLink: "https://nebulamods.ca/xexs/Anti%20End%20Game.xex",
    },
    {
      image: "Anti-Plugin",
      downloadLink: "https://nebulamods.ca/xexs/Anti-Plugin.xex",
    },
    { image: "Aspire", downloadLink: "https://nebulamods.ca/xexs/Aspire.xex" },
    { image: "Atlas", downloadLink: "https://nebulamods.ca/xexs/Atlas.xex" },
    {
      image: "AwAimbot",
      downloadLink: "https://nebulamods.ca/xexs/AwAimbot.xex",
    },
    { image: "Base", downloadLink: "https://nebulamods.ca/xexs/Base.xex" },
    {
      image: "Battlefields",
      downloadLink: "https://nebulamods.ca/xexs/Battlefields.xex",
    },
    {
      image: "Battlefields_6",
      downloadLink: "https://nebulamods.ca/xexs/Battlefields_6.xex",
    },
    { image: "Beats", downloadLink: "https://nebulamods.ca/xexs/Beats.xex" },
    {
      image: "BedsOffhost",
      downloadLink: "https://nebulamods.ca/xexs/BedsOffhost.xex",
    },
    {
      image: "BHMLive",
      downloadLink: "https://nebulamods.ca/xexs/BHMLive.xex",
    },
    { image: "blacky", downloadLink: "https://nebulamods.ca/xexs/blacky.xex" },
    {
      image: "Blasts_Mods",
      downloadLink: "https://nebulamods.ca/xexs/Blasts_Mods.xex",
    },
    {
      image: "blueNotify",
      downloadLink: "https://nebulamods.ca/xexs/blueNotify.xex",
    },
    {
      image: "Bo1 Shit Menu",
      downloadLink: "https://nebulamods.ca/xexs/Bo1%20Shit%20Menu.xex",
    },
    {
      image: "Bo2 Bypass V2",
      downloadLink: "https://nebulamods.ca/xexs/Bo2%20Bypass%20V2.xex",
    },
    {
      image: "Bo2 Bypass",
      downloadLink: "https://nebulamods.ca/xexs/Bo2%20Bypass.xex",
    },
    {
      image: "Bo2 Shit Tool",
      downloadLink: "https://nebulamods.ca/xexs/Bo2%20Shit%20Tool.xex",
    },
    {
      image: "BO2 Spoof",
      downloadLink: "https://nebulamods.ca/xexs/BO2%20Spoof.xex",
    },
    { image: "BO2", downloadLink: "https://nebulamods.ca/xexs/BO2.xex" },
    {
      image: "BO2Bypass",
      downloadLink: "https://nebulamods.ca/xexs/BO2Bypass.xex",
    },
    {
      image: "Bo2Bypassed",
      downloadLink: "https://nebulamods.ca/xexs/Bo2Bypassed.xex",
    },
    {
      image: "BO2Spoofer",
      downloadLink: "https://nebulamods.ca/xexs/BO2Spoofer.xex",
    },
    {
      image: "Bo2ZombiesNotify",
      downloadLink: "https://nebulamods.ca/xexs/Bo2ZombiesNotify.xex",
    },
    {
      image: "Bo2_Offhost_Base",
      downloadLink: "https://nebulamods.ca/xexs/Bo2_Offhost_Base.xex",
    },
    {
      image: "BO2_Spoof",
      downloadLink: "https://nebulamods.ca/xexs/BO2_Spoof.xex",
    },
    {
      image: "BO3Menu",
      downloadLink: "https://nebulamods.ca/xexs/BO3Menu.xex",
    },
    { image: "Bolt", downloadLink: "https://nebulamods.ca/xexs/Bolt.xex" },
    {
      image: "bossamdefault_mp",
      downloadLink: "https://nebulamods.ca/xexs/bossamdefault_mp.xex",
    },
    {
      image: "BossModding",
      downloadLink: "https://nebulamods.ca/xexs/BossModding.xex",
    },
    { image: "Bypass", downloadLink: "https://nebulamods.ca/xexs/Bypass.xex" },
    {
      image: "BypassByEchos",
      downloadLink: "https://nebulamods.ca/xexs/BypassByEchos.xex",
    },
    {
      image: "BypassPlugin",
      downloadLink: "https://nebulamods.ca/xexs/BypassPlugin.xex",
    },
    {
      image: "CheatEngine MW3",
      downloadLink: "https://nebulamods.ca/xexs/CheatEngine%20MW3.xex",
    },
    {
      image: "CheatEngine",
      downloadLink: "https://nebulamods.ca/xexs/CheatEngine.xex",
    },
    { image: "Cheats", downloadLink: "https://nebulamods.ca/xexs/Cheats.xex" },
    {
      image: "Chimera",
      downloadLink: "https://nebulamods.ca/xexs/Chimera.xex",
    },
    {
      image: "CoD Bypass",
      downloadLink: "https://nebulamods.ca/xexs/CoD%20Bypass.xex",
    },
    {
      image: "COD Engine",
      downloadLink: "https://nebulamods.ca/xexs/COD%20Engine.xex",
    },
    {
      image: "CoDEngine",
      downloadLink: "https://nebulamods.ca/xexs/CoDEngine.xex",
    },
    { image: "Comet", downloadLink: "https://nebulamods.ca/xexs/Comet.xex" },
    {
      image: "Console Ban Bypass",
      downloadLink: "https://nebulamods.ca/xexs/Console%20Ban%20Bypass.xex",
    },
    {
      image: "CreeperBeta",
      downloadLink: "https://nebulamods.ca/xexs/CreeperBeta.xex",
    },
    {
      image: "CrypticLive",
      downloadLink: "https://nebulamods.ca/xexs/CrypticLive.xex",
    },
    {
      image: "CryptLive",
      downloadLink: "https://nebulamods.ca/xexs/CryptLive.xex",
    },
    { image: "Custom", downloadLink: "https://nebulamods.ca/xexs/Custom.xex" },
    {
      image: "Cyanokit",
      downloadLink: "https://nebulamods.ca/xexs/Cyanokit.xex",
    },
    {
      image: "DankMenu Cracked",
      downloadLink: "https://nebulamods.ca/xexs/DankMenu%20Cracked.xex",
    },
    {
      image: "DankMenu",
      downloadLink: "https://nebulamods.ca/xexs/DankMenu.xex",
    },
    {
      image: "Deception",
      downloadLink: "https://nebulamods.ca/xexs/Deception.xex",
    },
    { image: "Design", downloadLink: "https://nebulamods.ca/xexs/Design.xex" },
    {
      image: "Destruction",
      downloadLink: "https://nebulamods.ca/xexs/Destruction.xex",
    },
    {
      image: "DieXBLSOffhost",
      downloadLink: "https://nebulamods.ca/xexs/DieXBLSOffhost.xex",
    },
    {
      image: "divercitylive",
      downloadLink: "https://nebulamods.ca/xexs/divercitylive.xex",
    },
    {
      image: "dudeeitsbrian",
      downloadLink: "https://nebulamods.ca/xexs/dudeeitsbrian.xex",
    },
    {
      image: "DuhSauce",
      downloadLink: "https://nebulamods.ca/xexs/DuhSauce.xex",
    },
    {
      image: "Edge Offline",
      downloadLink: "https://nebulamods.ca/xexs/Edge%20Offline.xex",
    },
    { image: "Edge", downloadLink: "https://nebulamods.ca/xexs/Edge.xex" },
    { image: "EFLC", downloadLink: "https://nebulamods.ca/xexs/EFLC.xex" },
    {
      image: "EliteMods",
      downloadLink: "https://nebulamods.ca/xexs/EliteMods.xex",
    },
    {
      image: "EnforcerMenu",
      downloadLink: "https://nebulamods.ca/xexs/EnforcerMenu.xex",
    },
    { image: "Engine", downloadLink: "https://nebulamods.ca/xexs/Engine.xex" },
    {
      image: "EunoiaPrivate",
      downloadLink: "https://nebulamods.ca/xexs/EunoiaPrivate.xex",
    },
    {
      image: "EunoiaPrivate_0",
      downloadLink: "https://nebulamods.ca/xexs/EunoiaPrivate_0.xex",
    },
    {
      image: "EuroStealth",
      downloadLink: "https://nebulamods.ca/xexs/EuroStealth.xex",
    },
    { image: "Evade", downloadLink: "https://nebulamods.ca/xexs/Evade.xex" },
    {
      image: "ExodusBase",
      downloadLink: "https://nebulamods.ca/xexs/ExodusBase.xex",
    },
    {
      image: "ExtremeMods",
      downloadLink: "https://nebulamods.ca/xexs/ExtremeMods.xex",
    },
    {
      image: "Faggot Hax BO2",
      downloadLink: "https://nebulamods.ca/xexs/Faggot%20Hax%20BO2.xex",
    },
    {
      image: "Faggot Hax",
      downloadLink: "https://nebulamods.ca/xexs/Faggot%20Hax.xex",
    },
    {
      image: "fakeanim",
      downloadLink: "https://nebulamods.ca/xexs/fakeanim.xex",
    },
    { image: "fgthax", downloadLink: "https://nebulamods.ca/xexs/fgthax.xex" },
    {
      image: "FH2Trainer",
      downloadLink: "https://nebulamods.ca/xexs/FH2Trainer.xex",
    },
    {
      image: "FonzBypass",
      downloadLink: "https://nebulamods.ca/xexs/FonzBypass.xex",
    },
    { image: "FTP", downloadLink: "https://nebulamods.ca/xexs/FTP.xex" },
    {
      image: "FuckerMenu",
      downloadLink: "https://nebulamods.ca/xexs/FuckerMenu.xex",
    },
    { image: "Fusion", downloadLink: "https://nebulamods.ca/xexs/Fusion.xex" },
    {
      image: "GlowModsEngine",
      downloadLink: "https://nebulamods.ca/xexs/GlowModsEngine.xex",
    },
    {
      image: "GTA5Menu",
      downloadLink: "https://nebulamods.ca/xexs/GTA5Menu.xex",
    },
    {
      image: "gtahaxs",
      downloadLink: "https://nebulamods.ca/xexs/gtahaxs.xex",
    },
    {
      image: "GTAPatcher",
      downloadLink: "https://nebulamods.ca/xexs/GTAPatcher.xex",
    },
    {
      image: "GTASyndicate",
      downloadLink: "https://nebulamods.ca/xexs/GTASyndicate.xex",
    },
    {
      image: "GTAV Havoc Cracked",
      downloadLink: "https://nebulamods.ca/xexs/GTAV%20Havoc%20Cracked.xex",
    },
    {
      image: "GTAVEnforcer",
      downloadLink: "https://nebulamods.ca/xexs/GTAVEnforcer.xex",
    },
    {
      image: "GTAVHavocBeta",
      downloadLink: "https://nebulamods.ca/xexs/GTAVHavocBeta.xex",
    },
    {
      image: "GTAVHavocPublic",
      downloadLink: "https://nebulamods.ca/xexs/GTAVHavocPublic.xex",
    },
    {
      image: "GTAVMenu",
      downloadLink: "https://nebulamods.ca/xexs/GTAVMenu.xex",
    },
    {
      image: "GTAVThePurge-Private",
      downloadLink: "https://nebulamods.ca/xexs/GTAVThePurge-Private.xex",
    },
    {
      image: "GTAVThePurge",
      downloadLink: "https://nebulamods.ca/xexs/GTAVThePurge.xex",
    },
    {
      image: "GTAVThePurgeCrack",
      downloadLink: "https://nebulamods.ca/xexs/GTAVThePurgeCrack.xex",
    },
    { image: "gtset", downloadLink: "https://nebulamods.ca/xexs/gtset.xex" },
    {
      image: "HalloweenNotify",
      downloadLink: "https://nebulamods.ca/xexs/HalloweenNotify.xex",
    },
    { image: "Halo", downloadLink: "https://nebulamods.ca/xexs/Halo.xex" },
    { image: "HaloR", downloadLink: "https://nebulamods.ca/xexs/HaloR.xex" },
    { image: "Hax", downloadLink: "https://nebulamods.ca/xexs/Hax.xex" },
    {
      image: "HitmanOficialVersionFinalV5-5",
      downloadLink:
        "https://nebulamods.ca/xexs/HitmanOficialVersionFinalV5-5.xex",
    },
    { image: "HvH", downloadLink: "https://nebulamods.ca/xexs/HvH.xex" },
    {
      image: "IcedHarley 1.27",
      downloadLink: "https://nebulamods.ca/xexs/IcedHarley%201.27.xex",
    },
    { image: "ImGay", downloadLink: "https://nebulamods.ca/xexs/ImGay.xex" },
    {
      image: "Infected 3.0",
      downloadLink: "https://nebulamods.ca/xexs/Infected%203.0.xex",
    },
    {
      image: "Infernus",
      downloadLink: "https://nebulamods.ca/xexs/Infernus.xex",
    },
    {
      image: "JakesMenu",
      downloadLink: "https://nebulamods.ca/xexs/JakesMenu.xex",
    },
    { image: "Jiggy", downloadLink: "https://nebulamods.ca/xexs/Jiggy.xex" },
    {
      image: "Joker Cheats",
      downloadLink: "https://nebulamods.ca/xexs/Joker%20Cheats.xex",
    },
    {
      image: "JokerEngine",
      downloadLink: "https://nebulamods.ca/xexs/JokerEngine.xex",
    },
    {
      image: "Kryptonic",
      downloadLink: "https://nebulamods.ca/xexs/Kryptonic.xex",
    },
    { image: "l00t", downloadLink: "https://nebulamods.ca/xexs/l00t.xex" },
    {
      image: "LegacyMenu",
      downloadLink: "https://nebulamods.ca/xexs/LegacyMenu.xex",
    },
    {
      image: "LegacyV1",
      downloadLink: "https://nebulamods.ca/xexs/LegacyV1.xex",
    },
    { image: "Matrix", downloadLink: "https://nebulamods.ca/xexs/Matrix.xex" },
    {
      image: "MatrixMods",
      downloadLink: "https://nebulamods.ca/xexs/MatrixMods.xex",
    },
    {
      image: "MegaMenu",
      downloadLink: "https://nebulamods.ca/xexs/MegaMenu.xex",
    },
    {
      image: "MoccowCheats",
      downloadLink: "https://nebulamods.ca/xexs/MoccowCheats.xex",
    },
    {
      image: "Multi Colored Notify",
      downloadLink: "https://nebulamods.ca/xexs/Multi%20Colored%20Notify.xex",
    },
    {
      image: "MW2 Aimbot",
      downloadLink: "https://nebulamods.ca/xexs/MW2%20Aimbot.xex",
    },
    { image: "MW2", downloadLink: "https://nebulamods.ca/xexs/MW2.xex" },
    { image: "MW2_0", downloadLink: "https://nebulamods.ca/xexs/MW2_0.xex" },
    { image: "MW3Hax", downloadLink: "https://nebulamods.ca/xexs/MW3Hax.xex" },
    {
      image: "Neptune",
      downloadLink: "https://nebulamods.ca/xexs/Neptune.xex",
    },
    { image: "Nether", downloadLink: "https://nebulamods.ca/xexs/Nether.xex" },
    {
      image: "NiceNotify",
      downloadLink: "https://nebulamods.ca/xexs/NiceNotify.xex",
    },
    { image: "Nike", downloadLink: "https://nebulamods.ca/xexs/Nike.xex" },
    {
      image: "NiNJA 2.0",
      downloadLink: "https://nebulamods.ca/xexs/NiNJA%202.0.xex",
    },
    {
      image: "NiNJA AW",
      downloadLink: "https://nebulamods.ca/xexs/NiNJA%20AW.xex",
    },
    {
      image: "Ninja Engine V2 Base",
      downloadLink: "https://nebulamods.ca/xexs/Ninja%20Engine%20V2%20Base.xex",
    },
    {
      image: "NiNJA Ghosts",
      downloadLink: "https://nebulamods.ca/xexs/NiNJA%20Ghosts.xex",
    },
    {
      image: "NiNjA Hud-Notify",
      downloadLink: "https://nebulamods.ca/xexs/NiNjA%20Hud-Notify.xex",
    },
    {
      image: "NiNJA MW2",
      downloadLink: "https://nebulamods.ca/xexs/NiNJA%20MW2.xex",
    },
    {
      image: "NiNJA MW3",
      downloadLink: "https://nebulamods.ca/xexs/NiNJA%20MW3.xex",
    },
    {
      image: "Ninja v1",
      downloadLink: "https://nebulamods.ca/xexs/Ninja%20v1.xex",
    },
    {
      image: "Ninja V2",
      downloadLink: "https://nebulamods.ca/xexs/Ninja%20V2.xex",
    },
    {
      image: "NiNJACOD",
      downloadLink: "https://nebulamods.ca/xexs/NiNJACOD.xex",
    },
    {
      image: "NinjaEngineV2",
      downloadLink: "https://nebulamods.ca/xexs/NinjaEngineV2.xex",
    },
    {
      image: "NiNJAGTA5",
      downloadLink: "https://nebulamods.ca/xexs/NiNJAGTA5.xex",
    },
    {
      image: "NinjaNotify",
      downloadLink: "https://nebulamods.ca/xexs/NinjaNotify.xex",
    },
    {
      image: "NiNJA_BO2",
      downloadLink: "https://nebulamods.ca/xexs/NiNJA_BO2.xex",
    },
    {
      image: "Ninja_Engine_V1",
      downloadLink: "https://nebulamods.ca/xexs/Ninja_Engine_V1.xex",
    },
    { image: "Notify", downloadLink: "https://nebulamods.ca/xexs/Notify.xex" },
    {
      image: "Offhost",
      downloadLink: "https://nebulamods.ca/xexs/Offhost.xex",
    },
    {
      image: "OGMenuCrack",
      downloadLink: "https://nebulamods.ca/xexs/OGMenuCrack.xex",
    },
    { image: "Online", downloadLink: "https://nebulamods.ca/xexs/Online.xex" },
    { image: "oof", downloadLink: "https://nebulamods.ca/xexs/oof.xex" },
    {
      image: "Pandora",
      downloadLink: "https://nebulamods.ca/xexs/Pandora.xex",
    },
    {
      image: "PhoenixCE",
      downloadLink: "https://nebulamods.ca/xexs/PhoenixCE.xex",
    },
    {
      image: "Pikachu",
      downloadLink: "https://nebulamods.ca/xexs/Pikachu.xex",
    },
    {
      image: "PotHeadMenu",
      downloadLink: "https://nebulamods.ca/xexs/PotHeadMenu.xex",
    },
    {
      image: "Preferences",
      downloadLink: "https://nebulamods.ca/xexs/Preferences.xex",
    },
    {
      image: "Private Cheats",
      downloadLink: "https://nebulamods.ca/xexs/Private%20Cheats.xex",
    },
    {
      image: "Private Cheats_0",
      downloadLink: "https://nebulamods.ca/xexs/Private%20Cheats_0.xex",
    },
    {
      image: "Project360",
      downloadLink: "https://nebulamods.ca/xexs/Project360.xex",
    },
    {
      image: "ProjectCryptic",
      downloadLink: "https://nebulamods.ca/xexs/ProjectCryptic.xex",
    },
    {
      image: "ProjectExoMw3",
      downloadLink: "https://nebulamods.ca/xexs/ProjectExoMw3.xex",
    },
    {
      image: "Prviate Cheats",
      downloadLink: "https://nebulamods.ca/xexs/Prviate%20Cheats.xex",
    },
    { image: "Purge", downloadLink: "https://nebulamods.ca/xexs/Purge.xex" },
    {
      image: "RawFileManager",
      downloadLink: "https://nebulamods.ca/xexs/RawFileManager.xex",
    },
    {
      image: "RealNigga",
      downloadLink: "https://nebulamods.ca/xexs/RealNigga.xex",
    },
    {
      image: "RebelMenu",
      downloadLink: "https://nebulamods.ca/xexs/RebelMenu.xex",
    },
    {
      image: "Riptide",
      downloadLink: "https://nebulamods.ca/xexs/Riptide.xex",
    },
    {
      image: "SarxsOffhost",
      downloadLink: "https://nebulamods.ca/xexs/SarxsOffhost.xex",
    },
    {
      image: "SarxsOffhost_0_0",
      downloadLink: "https://nebulamods.ca/xexs/SarxsOffhost_0_0.xex",
    },
    {
      image: "Saymtex",
      downloadLink: "https://nebulamods.ca/xexs/Saymtex.xex",
    },
    {
      image: "school shoter",
      downloadLink: "https://nebulamods.ca/xexs/school%20shoter.xex",
    },
    { image: "Septic", downloadLink: "https://nebulamods.ca/xexs/Septic.xex" },
    {
      image: "SepticEngine",
      downloadLink: "https://nebulamods.ca/xexs/SepticEngine.xex",
    },
    {
      image: "SepticLoot",
      downloadLink: "https://nebulamods.ca/xexs/SepticLoot.xex",
    },
    {
      image: "ShadowEngine",
      downloadLink: "https://nebulamods.ca/xexs/ShadowEngine.xex",
    },
    { image: "Sick", downloadLink: "https://nebulamods.ca/xexs/Sick.xex" },
    {
      image: "SikOcide",
      downloadLink: "https://nebulamods.ca/xexs/SikOcide.xex",
    },
    {
      image: "SilkRoad 1.7",
      downloadLink: "https://nebulamods.ca/xexs/SilkRoad%201.7.xex",
    },
    {
      image: "SilkRoad",
      downloadLink: "https://nebulamods.ca/xexs/SilkRoad.xex",
    },
    {
      image: "SkyAcro",
      downloadLink: "https://nebulamods.ca/xexs/SkyAcro.xex",
    },
    {
      image: "SkyAcro5.5",
      downloadLink: "https://nebulamods.ca/xexs/SkyAcro5.5.xex",
    },
    {
      image: "SkyAcro6.5",
      downloadLink: "https://nebulamods.ca/xexs/SkyAcro6.5.xex",
    },
    {
      image: "SkyAcro7.5",
      downloadLink: "https://nebulamods.ca/xexs/SkyAcro7.5.xex",
    },
    {
      image: "SkyAcroV7 EDITION",
      downloadLink: "https://nebulamods.ca/xexs/SkyAcroV7%20EDITION.xex",
    },
    {
      image: "SkyAcroV7",
      downloadLink: "https://nebulamods.ca/xexs/SkyAcroV7.xex",
    },
    {
      image: "sNotify",
      downloadLink: "https://nebulamods.ca/xexs/sNotify.xex",
    },
    { image: "START", downloadLink: "https://nebulamods.ca/xexs/START.xex" },
    {
      image: "SubliminalV",
      downloadLink: "https://nebulamods.ca/xexs/SubliminalV.xex",
    },
    {
      image: "Supreme",
      downloadLink: "https://nebulamods.ca/xexs/Supreme.xex",
    },
    {
      image: "Syndicate",
      downloadLink: "https://nebulamods.ca/xexs/Syndicate.xex",
    },
    { image: "Tab", downloadLink: "https://nebulamods.ca/xexs/Tab.xex" },
    {
      image: "TabCheats",
      downloadLink: "https://nebulamods.ca/xexs/TabCheats.xex",
    },
    {
      image: "Tabs Offhost",
      downloadLink: "https://nebulamods.ca/xexs/Tabs%20Offhost.xex",
    },
    {
      image: "Tampered CE V1_0_1",
      downloadLink: "https://nebulamods.ca/xexs/Tampered%20CE%20V1_0_1.xex",
    },
    {
      image: "Tampered CE",
      downloadLink: "https://nebulamods.ca/xexs/Tampered%20CE.xex",
    },
    {
      image: "TamperedLive",
      downloadLink: "https://nebulamods.ca/xexs/TamperedLive.xex",
    },
    { image: "Teapot", downloadLink: "https://nebulamods.ca/xexs/Teapot.xex" },
    {
      image: "TeapotCE",
      downloadLink: "https://nebulamods.ca/xexs/TeapotCE.xex",
    },
    {
      image: "TeapotLoader",
      downloadLink: "https://nebulamods.ca/xexs/TeapotLoader.xex",
    },
    {
      image: "TestMenu",
      downloadLink: "https://nebulamods.ca/xexs/TestMenu.xex",
    },
    {
      image: "The Purge v3.9",
      downloadLink: "https://nebulamods.ca/xexs/The%20Purge%20v3.9.xex",
    },
    {
      image: "TheDream",
      downloadLink: "https://nebulamods.ca/xexs/TheDream.xex",
    },
    {
      image: "ThugzLife",
      downloadLink: "https://nebulamods.ca/xexs/ThugzLife.xex",
    },
    { image: "tr01", downloadLink: "https://nebulamods.ca/xexs/tr01.xex" },
    {
      image: "TU6Enabler",
      downloadLink: "https://nebulamods.ca/xexs/TU6Enabler.xex",
    },
    {
      image: "UnitedX",
      downloadLink: "https://nebulamods.ca/xexs/UnitedX.xex",
    },
    { image: "VANiSH", downloadLink: "https://nebulamods.ca/xexs/VANiSH.xex" },
    {
      image: "VapingLounge",
      downloadLink: "https://nebulamods.ca/xexs/VapingLounge.xex",
    },
    {
      image: "VENOM CE",
      downloadLink: "https://nebulamods.ca/xexs/VENOM%20CE.xex",
    },
    {
      image: "VNM_3.0",
      downloadLink: "https://nebulamods.ca/xexs/VNM_3.0.xex",
    },
    { image: "weed", downloadLink: "https://nebulamods.ca/xexs/weed.xex" },
    {
      image: "XBLBallin",
      downloadLink: "https://nebulamods.ca/xexs/XBLBallin.xex",
    },
    {
      image: "XBLDevastation",
      downloadLink: "https://nebulamods.ca/xexs/XBLDevastation.xex",
    },
    { image: "XBLive", downloadLink: "https://nebulamods.ca/xexs/XBLive.xex" },
    {
      image: "XBLPurpleHaze",
      downloadLink: "https://nebulamods.ca/xexs/XBLPurpleHaze.xex",
    },
    {
      image: "XBLSLauncher",
      downloadLink: "https://nebulamods.ca/xexs/XBLSLauncher.xex",
    },
    {
      image: "XBLSRevBeta",
      downloadLink: "https://nebulamods.ca/xexs/XBLSRevBeta.xex",
    },
    {
      image: "XBLStudio",
      downloadLink: "https://nebulamods.ca/xexs/XBLStudio.xex",
    },
    {
      image: "XBLSynax",
      downloadLink: "https://nebulamods.ca/xexs/XBLSynax.xex",
    },
    {
      image: "XBLTuna",
      downloadLink: "https://nebulamods.ca/xexs/XBLTuna.xex",
    },
    {
      image: "XboxCore",
      downloadLink: "https://nebulamods.ca/xexs/XboxCore.xex",
    },
    {
      image: "xbPirate",
      downloadLink: "https://nebulamods.ca/xexs/xbPirate.xex",
    },
    {
      image: "XeCheats",
      downloadLink: "https://nebulamods.ca/xexs/XeCheats.xex",
    },
    {
      image: "xexcaleb",
      downloadLink: "https://nebulamods.ca/xexs/xexcaleb.xex",
    },
    {
      image: "XGMLive",
      downloadLink: "https://nebulamods.ca/xexs/XGMLive.xex",
    },
    { image: "xLive", downloadLink: "https://nebulamods.ca/xexs/xLive.xex" },
    {
      image: "xNETEngine",
      downloadLink: "https://nebulamods.ca/xexs/xNETEngine.xex",
    },
    { image: "xNiNJA", downloadLink: "https://nebulamods.ca/xexs/xNiNJA.xex" },
    {
      image: "xNotify",
      downloadLink: "https://nebulamods.ca/xexs/xNotify.xex",
    },
    { image: "XOS", downloadLink: "https://nebulamods.ca/xexs/XOS.xex" },
    {
      image: "XosOffline",
      downloadLink: "https://nebulamods.ca/xexs/XosOffline.xex",
    },
    { image: "XUID", downloadLink: "https://nebulamods.ca/xexs/XUID.xex" },
    {
      image: "YetAnotherEngine",
      downloadLink: "https://nebulamods.ca/xexs/YetAnotherEngine.xex",
    },
    { image: "yolo", downloadLink: "https://nebulamods.ca/xexs/yolo.xex" },
    { image: "yolo_0", downloadLink: "https://nebulamods.ca/xexs/yolo_0.xex" },
    { image: "Zenyle", downloadLink: "https://nebulamods.ca/xexs/Zenyle.xex" },
    {
      image: "ZenyleMenu",
      downloadLink: "https://nebulamods.ca/xexs/ZenyleMenu.xex",
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
      image: "360_is_dying Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/360_is_dying%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "AIO Tool Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/AIO%20Tool%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Apocalypse By Havoc",
      downloadLink: "https://nebulamods.ca/sources/Apocalypse%20By%20Havoc.rar",
    },
    {
      image: "AW Off Host Tool",
      downloadLink: "https://nebulamods.ca/sources/AW%20Off%20Host%20Tool.rar",
    },
    {
      image: "Battlefeld 3 Offhost Tool Source",
      downloadLink:
        "https://nebulamods.ca/sources/Battlefeld%203%20Offhost%20Tool%20Source.rar",
    },
    {
      image: "Battlefeld 4 Offhost Tool Source",
      downloadLink:
        "https://nebulamods.ca/sources/Battlefeld%204%20Offhost%20Tool%20Source.rar",
    },
    {
      image: "Bed Protector Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Bed%20Protector%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Black Hatter Source",
      downloadLink: "https://nebulamods.ca/sources/Black%20Hatter%20Source.rar",
    },
    {
      image: "Black Ops 1 Stats Tool",
      downloadLink:
        "https://nebulamods.ca/sources/Black%20Ops%201%20Stats%20Tool.rar",
    },
    {
      image: "Black Ops 1 Zombies And Multiplayer Tool Source",
      downloadLink:
        "https://nebulamods.ca/sources/Black%20Ops%201%20Zombies%20And%20Multiplayer%20Tool%20Source.rar",
    },
    {
      image: "Black Ops 2 Injector Source",
      downloadLink:
        "https://nebulamods.ca/sources/Black%20Ops%202%20Injector%20Source.rar",
    },
    {
      image: "Black Ops 2 Recovery Tool Source",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1264402865036988436/Black_Ops_2_Recovery_Tool_Source.rar?ex=669dbe6e&is=669c6cee&hm=8c5e78e7ed5314c3e3fefe60c78bf6fc490941c3b387d2135407c2ce94852ca6&",
    },
    {
      image: "Black Ops I",
      downloadLink: "https://nebulamods.ca/sources/Black%20Ops%20I.rar",
    },
    {
      image: "Blue Sky Tool Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Blue%20Sky%20Tool%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "BO1 GT Changer Source",
      downloadLink:
        "https://nebulamods.ca/sources/BO1%20GT%20Changer%20Source.rar",
    },
    {
      image: "BO2 Account Spoofer By XBOX360LSBEST Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/BO2%20Account%20Spoofer%20By%20XBOX360LSBEST%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "BO2 Life Tool Source",
      downloadLink:
        "https://nebulamods.ca/sources/BO2%20Life%20Tool%20Source.rar",
    },
    {
      image: "BO2 Ownage Tool Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/BO2%20Ownage%20Tool%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Bo2 Shit Cracked Nebula Edit",
      downloadLink:
        "https://nebulamods.ca/sources/Bo2%20Shit%20Cracked%20Nebula%20Edit.rar",
    },
    { image: "BO2", downloadLink: "https://nebulamods.ca/sources/BO2.rar" },
    {
      image: "BO3 Tool Source",
      downloadLink: "https://nebulamods.ca/sources/BO3%20Tool%20Source.rar",
    },
    {
      image: "Call of DDoS Source",
      downloadLink:
        "https://nebulamods.ca/sources/Call%20of%20DDoS%20Source.rar",
    },
    {
      image: "Cheat3r source",
      downloadLink: "https://nebulamods.ca/sources/Cheat3r%20source.rar",
    },
    {
      image: "CIA's MW2 Tool Source",
      downloadLink:
        "https://nebulamods.ca/sources/CIA's%20MW2%20Tool%20Source.rar",
    },
    {
      image: "CoD Public Rape Tool v3 Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/CoD%20Public%20Rape%20Tool%20v3%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "COD Stats Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/COD%20Stats%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "CoD Tool Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/CoD%20Tool%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "CPU_AUTH",
      downloadLink: "https://nebulamods.ca/sources/CPU_AUTH.rar",
    },
    {
      image: "Dank RGH Grabber Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Dank%20RGH%20Grabber%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "DArK's MW3 Stat RTE Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/DArK's%20MW3%20Stat%20RTE%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "DArK's Super XRPC Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/DArK's%20Super%20XRPC%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "DEATH RGH SOURCE",
      downloadLink: "https://nebulamods.ca/sources/DEATH%20RGH%20SOURCE.rar",
    },
    {
      image: "DeathRGH Tools Studio Remastered Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/DeathRGH%20Tools%20Studio%20Remastered%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "DeathRGH Tools Studio Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/DeathRGH%20Tools%20Studio%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "DeliriousKVs MW2 Tool",
      downloadLink:
        "https://nebulamods.ca/sources/DeliriousKVs%20MW2%20Tool.rar",
    },
    {
      image: "Design Testing",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1264402865468739674/Design_Testing.rar?ex=669dbe6e&is=669c6cee&hm=018410609b384eb92a45e4080d3c8fa8ebd4bf4044ecee8966f7469e3bb1a387&",
    },
    {
      image: "Desolation2 Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Desolation2%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "DolanHax",
      downloadLink: "https://nebulamods.ca/sources/DolanHax.rar",
    },
    {
      image: "Extra Shit Tool Remastered Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Extra%20Shit%20Tool%20Remastered%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Get Stoned",
      downloadLink: "https://nebulamods.ca/sources/Get%20Stoned.rar",
    },
    {
      image: "Ghost Vapour Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Ghost%20Vapour%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Ghosts Tool",
      downloadLink: "https://nebulamods.ca/sources/Ghosts%20Tool.rar",
    },
    {
      image: "GTA 5 Garage Tool Source",
      downloadLink:
        "https://nebulamods.ca/sources/GTA%205%20Garage%20Tool%20Source.rar",
    },
    {
      image: "GTA 5 Recovery Tool Source",
      downloadLink:
        "https://nebulamods.ca/sources/GTA%205%20Recovery%20Tool%20Source.rar",
    },
    {
      image: "GTA Online Garage Tool Source",
      downloadLink:
        "https://nebulamods.ca/sources/GTA%20Online%20Garage%20Tool%20Source.rar",
    },
    {
      image: "Halo Reach Astro Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Halo%20Reach%20Astro%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Juggernaut Tool Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Juggernaut%20Tool%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Juggernaut",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1264402865796026409/Juggernaut.rar?ex=669dbe6e&is=669c6cee&hm=22384d3fcaf770402260a5ec0c1a7799492d0c69f25d6611d42a6b061e6ffc1a&",
    },
    {
      image: "Light Lobbies",
      downloadLink: "https://nebulamods.ca/sources/Light%20Lobbies.rar",
    },
    {
      image: "MerKiiV1 Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/MerKiiV1%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Mw2 Zone Editor Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Mw2%20Zone%20Editor%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "MW3 Jug Classes Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/MW3%20Jug%20Classes%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Operation MW2 Source",
      downloadLink:
        "https://nebulamods.ca/sources/Operation%20MW2%20Source.rar",
    },
    {
      image: "PlayStation 4 Tool Box v2 Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/PlayStation%204%20Tool%20Box%20v2%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Prod Lario",
      downloadLink: "https://nebulamods.ca/sources/Prod%20Lario.rar",
    },
    {
      image: "Professional XRPC Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Professional%20XRPC%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Progamer",
      downloadLink: "https://nebulamods.ca/sources/Progamer.rar",
    },
    {
      image: "Project Gucci 10 Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Project%20Gucci%2010%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Project Gucci Remastered Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Project%20Gucci%20Remastered%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Project Nix Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Project%20Nix%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Project XDK Source",
      downloadLink: "https://nebulamods.ca/sources/Project%20XDK%20Source.rar",
    },
    {
      image: "Project XDK Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Project%20XDK%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Projekt Harz4 by XeTazzy",
      downloadLink:
        "https://nebulamods.ca/sources/Projekt%20Harz4%20by%20XeTazzy.rar",
    },
    {
      image: "R1ppinz Halo 3 Recovery Tool Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/R1ppinz%20Halo%203%20Recovery%20Tool%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Remote Recovery Tool Source",
      downloadLink:
        "https://nebulamods.ca/sources/Remote%20Recovery%20Tool%20Source.rar",
    },
    {
      image: "Satan's Modding Team Tool Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Satan's%20Modding%20Team%20Tool%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Savage Puller Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Savage%20Puller%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Serenity Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Serenity%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Sharks Name Changer Source'",
      downloadLink:
        "https://nebulamods.ca/sources/Sharks%20Name%20Changer%20Source'.rar",
    },
    {
      image: "Smokey xKoVx  BO1 Tool",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1264402866114662461/Smokey_xKoVx_BO1_Tool.rar?ex=669dbe6e&is=669c6cee&hm=297aa8516c6038bbc32d53e0499782059097245e1cb3d4a8ae83dcf6b83d5460&",
    },
    {
      image: "SoNiDo Multi Tool v2 Source By Monster",
      downloadLink:
        "https://nebulamods.ca/sources/SoNiDo%20Multi%20Tool%20v2%20Source%20By%20Monster.rar",
    },
    {
      image: "Source Halo AStro",
      downloadLink: "https://nebulamods.ca/sources/Source%20Halo%20AStro.rar",
    },
    {
      image: "Speedsters Source",
      downloadLink: "https://nebulamods.ca/sources/Speedsters%20Source.rar",
    },
    {
      image: "Supreme Source",
      downloadLink: "https://nebulamods.ca/sources/Supreme%20Source.rar",
    },
    {
      image: "Synergy Source",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1264402866521640960/Synergy_Source.rar?ex=669dbe6e&is=669c6cee&hm=7b0ce08dea69147fa84ee90b318ca63f6786afd9c7bf56a84fae0c3334eb4a15&",
    },
    {
      image: "TCM's Multi-COD Tool Unpacked By Nebula",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1264402866827952162/TCMs_Multi-COD_Tool_Unpacked_By_Nebula.rar?ex=669dbe6e&is=669c6cee&hm=dee819cd8397e11816d3e25037c8008834d559b92167e96d399bb59269d1f70b&",
    },
    {
      image: "Terminator Source",
      downloadLink: "https://nebulamods.ca/sources/Terminator%20Source.rar",
    },
    {
      image: "V12's BO1 Recovery Tool Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/V12's%20BO1%20Recovery%20Tool%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Venom Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Venom%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "WAW Gamertag Changer Source",
      downloadLink:
        "https://nebulamods.ca/sources/WAW%20Gamertag%20Changer%20Source.rar",
    },
    {
      image: "Xbot Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Xbot%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "Xbox JRPC Tool- by RyZzy - Unpacked By Ryan Borland !",
      downloadLink:
        "https://nebulamods.ca/sources/Xbox%20JRPC%20Tool-%20by%20RyZzy%20-%20Unpacked%20By%20Ryan%20Borland%20!.rar",
    },
    {
      image: "Xbox Troubleshooter Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/Xbox%20Troubleshooter%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "XeTaxis MW3 Rape Tool Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/XeTaxis%20MW3%20Rape%20Tool%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "XeX BMTH v2.1 - Unpacked by RayZer",
      downloadLink:
        "https://nebulamods.ca/sources/XeX%20BMTH%20v2.1%20-%20Unpacked%20by%20RayZer.rar",
    },
    {
      image: "xKoVx Gamertag Changer Tool Source",
      downloadLink:
        "https://nebulamods.ca/sources/xKoVx%20Gamertag%20Changer%20Tool%20Source.rar",
    },
    {
      image: "XOps Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/XOps%20Unpacked%20By%20Nebula.rar",
    },
    {
      image: "y0da PRO - Open Source By Ben Mhenni",
      downloadLink:
        "https://nebulamods.ca/sources/y0da%20PRO%20-%20Open%20Source%20By%20Ben%20Mhenni.rar",
    },
    {
      image: "[Tool]Kewizzles Fuckin Retarded Little Tool Unpacked By Nebula",
      downloadLink:
        "https://nebulamods.ca/sources/[Tool]Kewizzles%20Fuckin%20Retarded%20Little%20Tool%20Unpacked%20By%20Nebula.rar",
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
    "40gbps speedtest.png",
    "75-0 Pub TDM.jpg",
    "Animus Offhost.jpg",
    "AWAimbot.jpg",
    "Beds Offhost.jpg",
    "BO1 Classes.jpg",
    "BO1 Shit.jpg",
    "bo2 image injection.jpg",
    "Bolt MW3 Offhost.jpg",
    "cipher-aurora.jpg",
    "COD Engine Offhost.jpg",
    "Dev XeX NiNJA Skid.jpg",
    "DevilEngine Offhost.jpg",
    "DieXbls Offhost.jpg",
    "Eunoia Offhost.jpg",
    "Exodus Offhost.jpg",
    "FSD Blades.jpg",
    "gta v haxs.jpg",
    "LPTF Menu V1 Offhost.jpg",
    "Mac & IP Spoofing.jpg",
    "mw2 fade.jpg",
    "mw3 modded title.jpg",
    "Naked Vanguard.png",
    "NebCheese.jpg",
    "Nigel's Offhost.png",
    "NiNJA V1 Menu Base.jpg",
    "Null offhost.jpg",
    "oof ce.bmp",
    "Pheonix V2 Offhost.jpg",
    "Rebellion CE Beta.jpg",
    "Sarx Offhost.jpg",
    "some septic engine.bmp",
    "Synergy Offhost.jpg",
    "tabs ce.bmp",
    "tampered ce.jpg",
    "Vanguard File Manager.png",
    "Vanguard.bmp",
    "Weird Ping.jpg",
    "xbo lifetime.jpg",
    "xbO.png",
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

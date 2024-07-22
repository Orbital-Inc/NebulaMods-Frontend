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
      image: "AIO Tool 2.5.2 Cracked By Nebula.png",
      downloadLink: "./tools/AIO Tool v2.5.2 Cracked By Nebula.rar",
    },
    {
      image: "Alcatraz Cracked By Nebula.png",
      downloadLink: "https://files.catbox.moe/mou7yl.rar",
    },
    {
      image: "Aurora exclusive Cracked By Nebula.png",
      downloadLink: "./tools/Aurora Cracked By Nebula.rar",
    },
    {
      image: "BatMan Tool Cracked By Nebula.png",
      downloadLink: "./tools/BatMan Tool Cracked By Nebula.rar",
    },
    {
      image: "BO1 XRPC Cracked By Nebula.png",
      downloadLink: "./tools/BO1_XRPC_Cracked_By_Nebula.zip",
    },
    {
      image: "Casper 4.1 Cracked By Nebula.png",
      downloadLink: "./tools/Casper 4.1 AUTH Cracked By Nebula.rar",
    },
    {
      image: "CFW Grabber Cracked By Nebula.png",
      downloadLink: "./tools/CFW Grabber.rar",
    },
    {
      image: "Chaotic360 Cracked By Nebula.png",
      downloadLink: "https://files.catbox.moe/e4vefh.rar",
    },
    {
      image: "DankTool Cracked By Nebula.png",
      downloadLink: "./tools/DANK TOOL Cracked By Nebula.rar",
    },
    {
      image: "Dank RGH Grabber Cracked By Nebula.png",
      downloadLink: "./tools/Dank RGH Grabber Cracked By Nebula.rar",
    },
    {
      image: "DeathRGH Tools Studio Cracked By Nebula.png",
      downloadLink: "./tools/DeathRGH Tool Private Cracked By Nebula.rar",
    },
    {
      image: "Halo Astro 2 Cracked By Nebula.png",
      downloadLink: "./tools/Halo Astro 2 Cracked By Nebula.rar",
    },
    {
      image: "Imperium Cracked By Nebula.png",
      downloadLink:
        "./tools/1.27_IMPERIUM_ACCOUNT_EDITOR_0.9 Cracked By Nebula.rar",
    },
    {
      image: "Injector Cracked By Nebula.png",
      downloadLink: "./tools/Injector_Cracked_By_Nebula.zip",
    },
    {
      image: "Nimbus Cracked By Nebula.png",
      downloadLink: "./tools/Nimbus Cracked By Nebula.rar",
    },
    {
      image: "Paragon Engine Cracked By Nebula.png",
      downloadLink: "./tools/Paragon Engine Cracked By Nebula.rar",
    },
    {
      image: "Pesticide Cracked By Nebula.png",
      downloadLink: "./tools/Pesticide Beta 1.0.0 Cracked By Nebula.rar",
    },
    {
      image: "Project Nix Cracked By Nebula.png",
      downloadLink: "./tools/NIX Cracked By Nebula.rar",
    },
    {
      image: "Project Rebirth Cracked By Nebula.png",
      downloadLink: "./tools/Project Rebirth Cracked By Nebula.rar",
    },
    {
      image: "Project Stealth Cracked By Nebula.png",
      downloadLink: "./tools/Project Stealth Cracked By Nebula.rar",
    },
    {
      image: "Revox Cracked By Nebula.png",
      downloadLink: "./tools/Revox v3 Cracked By Nebula.rar",
    },
    {
      image: "Satan's Modding Team Tool Cracked By Nebula.png",
      downloadLink: "https://files.catbox.moe/r6m9s6.rar",
    },
    {
      image: "Simplicity Beta [v0.1] Cracked By Nebula.png",
      downloadLink: "./tools/Simplicity Beta [v0.1] Cracked By Nebula.rar",
    },
    {
      image: "Solution Finale Cracked By Nebula.png",
      downloadLink: "./tools/Solution Finale 1.2.0.rar",
    },
    {
      image: "Super Shitty Tool Cracked By Nebula.png",
      downloadLink: "./tools/Super Shitty Tool Cracked By Nebula.rar",
    },
    {
      image: "TCM's Multi-COD Tool Cracked By Nebula.png",
      downloadLink: "https://files.catbox.moe/1w8jkh.rar",
    },
    {
      image: "The Legion Cracked By Nebula.png",
      downloadLink: "./tools/Legion Cracked By Nebula.rar",
    },
    {
      image: "VENOM Cracked By Nebula.png",
      downloadLink: "./tools/VENOM Cracked By Nebula.rar",
    },
    {
      image: "Versa Shotz Cracked By Nebula.png",
      downloadLink: "https://files.catbox.moe/lfoj05.rar",
    },
    {
      image: "Ziimze Tool Cracked By Nebula.png",
      downloadLink: "./tools/Ziimze Tool Cracked By Nebula.rar",
    },
    {
      image: "Real Nigga Tool Cracked By Nebula.png",
      downloadLink: "./tools/My Real Nigga Tool Cracked By Nebula.rar",
    },
    {
      image: "Project Gucci Cracked By Nebula.png",
      downloadLink: "./tools/Project Gucci Remastered Cracked By Nebula.rar",
    },
    {
      image: "BO2 Derank Tool Cracked By Nebula.png",
      downloadLink: "./tools/X360DeRank Tool v5.0.6 Cracked By Nebula.rar",
    },
    {
      image: "TCM BO2 IP Spoofer Cracked By Nebula.png",
      downloadLink: "./tools/TCMipSpoofer+MoreUpdate Cracked By Nebula.rar",
    },
    {
      image: "Revolution Cracked By Nebula.png",
      downloadLink: "./tools/Revolution Tool Cracked By Nebula.rar",
    },
    {
      image: "Notoriety Cracked.png",
      downloadLink: "https://files.catbox.moe/gnofi9.rar",
    },
    {
      image: "TCM 38.0 Cracked.png",
      downloadLink: "https://files.catbox.moe/9ffkui.rar",
    },
    {
      image: "GuidoCT V1 Cracked.png",
      downloadLink: "https://files.catbox.moe/yx4cst.rar",
    },
  ];

  createCarousel(".carousel", "./assets/img/tools", toolImages, true);

  const toolLinksContainer = document.getElementById("tool-links");
  toolImages.forEach((imageData) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = imageData.downloadLink;
    link.textContent = imageData.image.replace(".png", "");
    link.classList.add("text-blue-400", "hover:underline");
    link.setAttribute("download", imageData.downloadLink.split("/").pop());
    link.setAttribute("type", (type = "application/x-rar-compressed"));
    listItem.appendChild(link);
    toolLinksContainer.appendChild(listItem);
  });

  const xexImages = [
    { image: "$hit", downloadLink: "./xexs/$hit.xex" },
    {
      image: "1337 Hax",
      downloadLink: "./xexs/1337 Hax.xex",
    },
    { image: "2", downloadLink: "./xexs/2.xex" },
    { image: "3", downloadLink: "./xexs/3.xex" },
    { image: "32Char", downloadLink: "./xexs/32Char.xex" },
    { image: "5", downloadLink: "./xexs/5.xex" },
    { image: "6", downloadLink: "./xexs/6.xex" },
    {
      image: "7sNotify v1.2",
      downloadLink: "./xexs/7sNotify v1.2.xex",
    },
    {
      image: "a8ca5-cheatengine",
      downloadLink: "./xexs/a8ca5-cheatengine.xex",
    },
    { image: "Aero", downloadLink: "./xexs/Aero.xex" },
    {
      image: "Agony Framework",
      downloadLink: "./xexs/Agony Framework.xex",
    },
    { image: "Aimbot", downloadLink: "./xexs/Aimbot.xex" },
    { image: "Akira", downloadLink: "./xexs/Akira.xex" },
    {
      image: "All Cod Bypass",
      downloadLink: "./xexs/All Cod Bypass.xex",
    },
    { image: "Alpha", downloadLink: "./xexs/Alpha.xex" },
    {
      image: "AlternativeLive",
      downloadLink: "./xexs/AlternativeLive.xex",
    },
    {
      image: "AMEngineCrack",
      downloadLink: "./xexs/AMEngineCrack.xex",
    },
    {
      image: "Anarchise",
      downloadLink: "./xexs/Anarchise.xex",
    },
    {
      image: "AnimusOffhost",
      downloadLink: "./xexs/AnimusOffhost.xex",
    },
    {
      image: "Annoyance",
      downloadLink: "./xexs/Annoyance.xex",
    },
    {
      image: "AnonLive",
      downloadLink: "./xexs/AnonLive.xex",
    },
    {
      image: "Anti End Game",
      downloadLink: "./xexs/Anti End Game.xex",
    },
    {
      image: "Anti-Plugin",
      downloadLink: "./xexs/Anti-Plugin.xex",
    },
    { image: "Aspire", downloadLink: "./xexs/Aspire.xex" },
    { image: "Atlas", downloadLink: "./xexs/Atlas.xex" },
    {
      image: "AwAimbot",
      downloadLink: "./xexs/AwAimbot.xex",
    },
    { image: "Base", downloadLink: "./xexs/Base.xex" },
    {
      image: "Battlefields",
      downloadLink: "./xexs/Battlefields.xex",
    },
    {
      image: "Battlefields_6",
      downloadLink: "./xexs/Battlefields_6.xex",
    },
    { image: "Beats", downloadLink: "./xexs/Beats.xex" },
    {
      image: "BedsOffhost",
      downloadLink: "./xexs/BedsOffhost.xex",
    },
    {
      image: "BHMLive",
      downloadLink: "./xexs/BHMLive.xex",
    },
    { image: "blacky", downloadLink: "./xexs/blacky.xex" },
    {
      image: "Blasts_Mods",
      downloadLink: "./xexs/Blasts_Mods.xex",
    },
    {
      image: "blueNotify",
      downloadLink: "./xexs/blueNotify.xex",
    },
    {
      image: "Bo1 Shit Menu",
      downloadLink: "./xexs/Bo1 Shit Menu.xex",
    },
    {
      image: "Bo2 Bypass V2",
      downloadLink: "./xexs/Bo2 Bypass V2.xex",
    },
    {
      image: "Bo2 Bypass",
      downloadLink: "./xexs/Bo2 Bypass.xex",
    },
    {
      image: "Bo2 Shit Tool",
      downloadLink: "./xexs/Bo2 Shit Tool.xex",
    },
    {
      image: "BO2 Spoof",
      downloadLink: "./xexs/BO2 Spoof.xex",
    },
    { image: "BO2", downloadLink: "./xexs/BO2.xex" },
    {
      image: "BO2Bypass",
      downloadLink: "./xexs/BO2Bypass.xex",
    },
    {
      image: "Bo2Bypassed",
      downloadLink: "./xexs/Bo2Bypassed.xex",
    },
    {
      image: "BO2Spoofer",
      downloadLink: "./xexs/BO2Spoofer.xex",
    },
    {
      image: "Bo2ZombiesNotify",
      downloadLink: "./xexs/Bo2ZombiesNotify.xex",
    },
    {
      image: "Bo2_Offhost_Base",
      downloadLink: "./xexs/Bo2_Offhost_Base.xex",
    },
    {
      image: "BO2_Spoof",
      downloadLink: "./xexs/BO2_Spoof.xex",
    },
    {
      image: "BO3Menu",
      downloadLink: "./xexs/BO3Menu.xex",
    },
    { image: "Bolt", downloadLink: "./xexs/Bolt.xex" },
    {
      image: "bossamdefault_mp",
      downloadLink: "./xexs/bossamdefault_mp.xex",
    },
    {
      image: "BossModding",
      downloadLink: "./xexs/BossModding.xex",
    },
    { image: "Bypass", downloadLink: "./xexs/Bypass.xex" },
    {
      image: "BypassByEchos",
      downloadLink: "./xexs/BypassByEchos.xex",
    },
    {
      image: "BypassPlugin",
      downloadLink: "./xexs/BypassPlugin.xex",
    },
    {
      image: "CheatEngine MW3",
      downloadLink: "./xexs/CheatEngine MW3.xex",
    },
    {
      image: "CheatEngine",
      downloadLink: "./xexs/CheatEngine.xex",
    },
    { image: "Cheats", downloadLink: "./xexs/Cheats.xex" },
    {
      image: "Chimera",
      downloadLink: "./xexs/Chimera.xex",
    },
    {
      image: "CoD Bypass",
      downloadLink: "./xexs/CoD Bypass.xex",
    },
    {
      image: "COD Engine",
      downloadLink: "./xexs/COD Engine.xex",
    },
    {
      image: "CoDEngine",
      downloadLink: "./xexs/CoDEngine.xex",
    },
    { image: "Comet", downloadLink: "./xexs/Comet.xex" },
    {
      image: "Console Ban Bypass",
      downloadLink: "./xexs/Console Ban Bypass.xex",
    },
    {
      image: "CreeperBeta",
      downloadLink: "./xexs/CreeperBeta.xex",
    },
    {
      image: "CrypticLive",
      downloadLink: "./xexs/CrypticLive.xex",
    },
    {
      image: "CryptLive",
      downloadLink: "./xexs/CryptLive.xex",
    },
    { image: "Custom", downloadLink: "./xexs/Custom.xex" },
    {
      image: "Cyanokit",
      downloadLink: "./xexs/Cyanokit.xex",
    },
    {
      image: "DankMenu Cracked",
      downloadLink: "./xexs/DankMenu Cracked.xex",
    },
    {
      image: "DankMenu",
      downloadLink: "./xexs/DankMenu.xex",
    },
    {
      image: "Deception",
      downloadLink: "./xexs/Deception.xex",
    },
    { image: "Design", downloadLink: "./xexs/Design.xex" },
    {
      image: "Destruction",
      downloadLink: "./xexs/Destruction.xex",
    },
    {
      image: "DieXBLSOffhost",
      downloadLink: "./xexs/DieXBLSOffhost.xex",
    },
    {
      image: "divercitylive",
      downloadLink: "./xexs/divercitylive.xex",
    },
    {
      image: "dudeeitsbrian",
      downloadLink: "./xexs/dudeeitsbrian.xex",
    },
    {
      image: "DuhSauce",
      downloadLink: "./xexs/DuhSauce.xex",
    },
    {
      image: "Edge Offline",
      downloadLink: "./xexs/Edge Offline.xex",
    },
    { image: "Edge", downloadLink: "./xexs/Edge.xex" },
    { image: "EFLC", downloadLink: "./xexs/EFLC.xex" },
    {
      image: "EliteMods",
      downloadLink: "./xexs/EliteMods.xex",
    },
    {
      image: "EnforcerMenu",
      downloadLink: "./xexs/EnforcerMenu.xex",
    },
    { image: "Engine", downloadLink: "./xexs/Engine.xex" },
    {
      image: "EunoiaPrivate",
      downloadLink: "./xexs/EunoiaPrivate.xex",
    },
    {
      image: "EunoiaPrivate_0",
      downloadLink: "./xexs/EunoiaPrivate_0.xex",
    },
    {
      image: "EuroStealth",
      downloadLink: "./xexs/EuroStealth.xex",
    },
    { image: "Evade", downloadLink: "./xexs/Evade.xex" },
    {
      image: "ExodusBase",
      downloadLink: "./xexs/ExodusBase.xex",
    },
    {
      image: "ExtremeMods",
      downloadLink: "./xexs/ExtremeMods.xex",
    },
    {
      image: "Faggot Hax BO2",
      downloadLink: "./xexs/Faggot Hax BO2.xex",
    },
    {
      image: "Faggot Hax",
      downloadLink: "./xexs/Faggot Hax.xex",
    },
    {
      image: "fakeanim",
      downloadLink: "./xexs/fakeanim.xex",
    },
    { image: "fgthax", downloadLink: "./xexs/fgthax.xex" },
    {
      image: "FH2Trainer",
      downloadLink: "./xexs/FH2Trainer.xex",
    },
    {
      image: "FonzBypass",
      downloadLink: "./xexs/FonzBypass.xex",
    },
    { image: "FTP", downloadLink: "./xexs/FTP.xex" },
    {
      image: "FuckerMenu",
      downloadLink: "./xexs/FuckerMenu.xex",
    },
    { image: "Fusion", downloadLink: "./xexs/Fusion.xex" },
    {
      image: "GlowModsEngine",
      downloadLink: "./xexs/GlowModsEngine.xex",
    },
    {
      image: "GTA5Menu",
      downloadLink: "./xexs/GTA5Menu.xex",
    },
    {
      image: "gtahaxs",
      downloadLink: "./xexs/gtahaxs.xex",
    },
    {
      image: "GTAPatcher",
      downloadLink: "./xexs/GTAPatcher.xex",
    },
    {
      image: "GTASyndicate",
      downloadLink: "./xexs/GTASyndicate.xex",
    },
    {
      image: "GTAV Havoc Cracked",
      downloadLink: "./xexs/GTAV Havoc Cracked.xex",
    },
    {
      image: "GTAVEnforcer",
      downloadLink: "./xexs/GTAVEnforcer.xex",
    },
    {
      image: "GTAVHavocBeta",
      downloadLink: "./xexs/GTAVHavocBeta.xex",
    },
    {
      image: "GTAVHavocPublic",
      downloadLink: "./xexs/GTAVHavocPublic.xex",
    },
    {
      image: "GTAVMenu",
      downloadLink: "./xexs/GTAVMenu.xex",
    },
    {
      image: "GTAVThePurge-Private",
      downloadLink: "./xexs/GTAVThePurge-Private.xex",
    },
    {
      image: "GTAVThePurge",
      downloadLink: "./xexs/GTAVThePurge.xex",
    },
    {
      image: "GTAVThePurgeCrack",
      downloadLink: "./xexs/GTAVThePurgeCrack.xex",
    },
    { image: "gtset", downloadLink: "./xexs/gtset.xex" },
    {
      image: "HalloweenNotify",
      downloadLink: "./xexs/HalloweenNotify.xex",
    },
    { image: "Halo", downloadLink: "./xexs/Halo.xex" },
    { image: "HaloR", downloadLink: "./xexs/HaloR.xex" },
    { image: "Hax", downloadLink: "./xexs/Hax.xex" },
    {
      image: "HitmanOficialVersionFinalV5-5",
      downloadLink: "./xexs/HitmanOficialVersionFinalV5-5.xex",
    },
    { image: "HvH", downloadLink: "./xexs/HvH.xex" },
    {
      image: "IcedHarley 1.27",
      downloadLink: "./xexs/IcedHarley 1.27.xex",
    },
    { image: "ImGay", downloadLink: "./xexs/ImGay.xex" },
    {
      image: "Infected 3.0",
      downloadLink: "./xexs/Infected 3.0.xex",
    },
    {
      image: "Infernus",
      downloadLink: "./xexs/Infernus.xex",
    },
    {
      image: "JakesMenu",
      downloadLink: "./xexs/JakesMenu.xex",
    },
    { image: "Jiggy", downloadLink: "./xexs/Jiggy.xex" },
    {
      image: "Joker Cheats",
      downloadLink: "./xexs/Joker Cheats.xex",
    },
    {
      image: "JokerEngine",
      downloadLink: "./xexs/JokerEngine.xex",
    },
    {
      image: "Kryptonic",
      downloadLink: "./xexs/Kryptonic.xex",
    },
    { image: "l00t", downloadLink: "./xexs/l00t.xex" },
    {
      image: "LegacyMenu",
      downloadLink: "./xexs/LegacyMenu.xex",
    },
    {
      image: "LegacyV1",
      downloadLink: "./xexs/LegacyV1.xex",
    },
    { image: "Matrix", downloadLink: "./xexs/Matrix.xex" },
    {
      image: "MatrixMods",
      downloadLink: "./xexs/MatrixMods.xex",
    },
    {
      image: "MegaMenu",
      downloadLink: "./xexs/MegaMenu.xex",
    },
    {
      image: "MoccowCheats",
      downloadLink: "./xexs/MoccowCheats.xex",
    },
    {
      image: "Multi Colored Notify",
      downloadLink: "./xexs/Multi Colored Notify.xex",
    },
    {
      image: "MW2 Aimbot",
      downloadLink: "./xexs/MW2 Aimbot.xex",
    },
    { image: "MW2", downloadLink: "./xexs/MW2.xex" },
    { image: "MW2_0", downloadLink: "./xexs/MW2_0.xex" },
    { image: "MW3Hax", downloadLink: "./xexs/MW3Hax.xex" },
    {
      image: "Neptune",
      downloadLink: "./xexs/Neptune.xex",
    },
    { image: "Nether", downloadLink: "./xexs/Nether.xex" },
    {
      image: "NiceNotify",
      downloadLink: "./xexs/NiceNotify.xex",
    },
    { image: "Nike", downloadLink: "./xexs/Nike.xex" },
    {
      image: "NiNJA 2.0",
      downloadLink: "./xexs/NiNJA 2.0.xex",
    },
    {
      image: "NiNJA AW",
      downloadLink: "./xexs/NiNJA AW.xex",
    },
    {
      image: "Ninja Engine V2 Base",
      downloadLink: "./xexs/Ninja Engine V2 Base.xex",
    },
    {
      image: "NiNJA Ghosts",
      downloadLink: "./xexs/NiNJA Ghosts.xex",
    },
    {
      image: "NiNjA Hud-Notify",
      downloadLink: "./xexs/NiNjA Hud-Notify.xex",
    },
    {
      image: "NiNJA MW2",
      downloadLink: "./xexs/NiNJA MW2.xex",
    },
    {
      image: "NiNJA MW3",
      downloadLink: "./xexs/NiNJA MW3.xex",
    },
    {
      image: "Ninja v1",
      downloadLink: "./xexs/Ninja v1.xex",
    },
    {
      image: "Ninja V2",
      downloadLink: "./xexs/Ninja V2.xex",
    },
    {
      image: "NiNJACOD",
      downloadLink: "./xexs/NiNJACOD.xex",
    },
    {
      image: "NinjaEngineV2",
      downloadLink: "./xexs/NinjaEngineV2.xex",
    },
    {
      image: "NiNJAGTA5",
      downloadLink: "./xexs/NiNJAGTA5.xex",
    },
    {
      image: "NinjaNotify",
      downloadLink: "./xexs/NinjaNotify.xex",
    },
    {
      image: "NiNJA_BO2",
      downloadLink: "./xexs/NiNJA_BO2.xex",
    },
    {
      image: "Ninja_Engine_V1",
      downloadLink: "./xexs/Ninja_Engine_V1.xex",
    },
    { image: "Notify", downloadLink: "./xexs/Notify.xex" },
    {
      image: "Offhost",
      downloadLink: "./xexs/Offhost.xex",
    },
    {
      image: "OGMenuCrack",
      downloadLink: "./xexs/OGMenuCrack.xex",
    },
    { image: "Online", downloadLink: "./xexs/Online.xex" },
    { image: "oof", downloadLink: "./xexs/oof.xex" },
    {
      image: "Pandora",
      downloadLink: "./xexs/Pandora.xex",
    },
    {
      image: "PhoenixCE",
      downloadLink: "./xexs/PhoenixCE.xex",
    },
    {
      image: "Pikachu",
      downloadLink: "./xexs/Pikachu.xex",
    },
    {
      image: "PotHeadMenu",
      downloadLink: "./xexs/PotHeadMenu.xex",
    },
    {
      image: "Preferences",
      downloadLink: "./xexs/Preferences.xex",
    },
    {
      image: "Private Cheats",
      downloadLink: "./xexs/Private Cheats.xex",
    },
    {
      image: "Private Cheats_0",
      downloadLink: "./xexs/Private Cheats_0.xex",
    },
    {
      image: "Project360",
      downloadLink: "./xexs/Project360.xex",
    },
    {
      image: "ProjectCryptic",
      downloadLink: "./xexs/ProjectCryptic.xex",
    },
    {
      image: "ProjectExoMw3",
      downloadLink: "./xexs/ProjectExoMw3.xex",
    },
    {
      image: "Prviate Cheats",
      downloadLink: "./xexs/Prviate Cheats.xex",
    },
    { image: "Purge", downloadLink: "./xexs/Purge.xex" },
    {
      image: "RawFileManager",
      downloadLink: "./xexs/RawFileManager.xex",
    },
    {
      image: "RealNigga",
      downloadLink: "./xexs/RealNigga.xex",
    },
    {
      image: "RebelMenu",
      downloadLink: "./xexs/RebelMenu.xex",
    },
    {
      image: "Riptide",
      downloadLink: "./xexs/Riptide.xex",
    },
    {
      image: "SarxsOffhost",
      downloadLink: "./xexs/SarxsOffhost.xex",
    },
    {
      image: "SarxsOffhost_0_0",
      downloadLink: "./xexs/SarxsOffhost_0_0.xex",
    },
    {
      image: "Saymtex",
      downloadLink: "./xexs/Saymtex.xex",
    },
    {
      image: "school shoter",
      downloadLink: "./xexs/school shoter.xex",
    },
    { image: "Septic", downloadLink: "./xexs/Septic.xex" },
    {
      image: "SepticEngine",
      downloadLink: "./xexs/SepticEngine.xex",
    },
    {
      image: "SepticLoot",
      downloadLink: "./xexs/SepticLoot.xex",
    },
    {
      image: "ShadowEngine",
      downloadLink: "./xexs/ShadowEngine.xex",
    },
    { image: "Sick", downloadLink: "./xexs/Sick.xex" },
    {
      image: "SikOcide",
      downloadLink: "./xexs/SikOcide.xex",
    },
    {
      image: "SilkRoad 1.7",
      downloadLink: "./xexs/SilkRoad 1.7.xex",
    },
    {
      image: "SilkRoad",
      downloadLink: "./xexs/SilkRoad.xex",
    },
    {
      image: "SkyAcro",
      downloadLink: "./xexs/SkyAcro.xex",
    },
    {
      image: "SkyAcro5.5",
      downloadLink: "./xexs/SkyAcro5.5.xex",
    },
    {
      image: "SkyAcro6.5",
      downloadLink: "./xexs/SkyAcro6.5.xex",
    },
    {
      image: "SkyAcro7.5",
      downloadLink: "./xexs/SkyAcro7.5.xex",
    },
    {
      image: "SkyAcroV7 EDITION",
      downloadLink: "./xexs/SkyAcroV7 EDITION.xex",
    },
    {
      image: "SkyAcroV7",
      downloadLink: "./xexs/SkyAcroV7.xex",
    },
    {
      image: "sNotify",
      downloadLink: "./xexs/sNotify.xex",
    },
    { image: "START", downloadLink: "./xexs/START.xex" },
    {
      image: "SubliminalV",
      downloadLink: "./xexs/SubliminalV.xex",
    },
    {
      image: "Supreme",
      downloadLink: "./xexs/Supreme.xex",
    },
    {
      image: "Syndicate",
      downloadLink: "./xexs/Syndicate.xex",
    },
    { image: "Tab", downloadLink: "./xexs/Tab.xex" },
    {
      image: "TabCheats",
      downloadLink: "./xexs/TabCheats.xex",
    },
    {
      image: "Tabs Offhost",
      downloadLink: "./xexs/Tabs Offhost.xex",
    },
    {
      image: "Tampered CE V1_0_1",
      downloadLink: "./xexs/Tampered CE V1_0_1.xex",
    },
    {
      image: "Tampered CE",
      downloadLink: "./xexs/Tampered CE.xex",
    },
    {
      image: "TamperedLive",
      downloadLink: "./xexs/TamperedLive.xex",
    },
    { image: "Teapot", downloadLink: "./xexs/Teapot.xex" },
    {
      image: "TeapotCE",
      downloadLink: "./xexs/TeapotCE.xex",
    },
    {
      image: "TeapotLoader",
      downloadLink: "./xexs/TeapotLoader.xex",
    },
    {
      image: "TestMenu",
      downloadLink: "./xexs/TestMenu.xex",
    },
    {
      image: "The Purge v3.9",
      downloadLink: "./xexs/The Purge v3.9.xex",
    },
    {
      image: "TheDream",
      downloadLink: "./xexs/TheDream.xex",
    },
    {
      image: "ThugzLife",
      downloadLink: "./xexs/ThugzLife.xex",
    },
    { image: "tr01", downloadLink: "./xexs/tr01.xex" },
    {
      image: "TU6Enabler",
      downloadLink: "./xexs/TU6Enabler.xex",
    },
    {
      image: "UnitedX",
      downloadLink: "./xexs/UnitedX.xex",
    },
    { image: "VANiSH", downloadLink: "./xexs/VANiSH.xex" },
    {
      image: "VapingLounge",
      downloadLink: "./xexs/VapingLounge.xex",
    },
    {
      image: "VENOM CE",
      downloadLink: "./xexs/VENOM CE.xex",
    },
    {
      image: "VNM_3.0",
      downloadLink: "./xexs/VNM_3.0.xex",
    },
    { image: "weed", downloadLink: "./xexs/weed.xex" },
    {
      image: "XBLBallin",
      downloadLink: "./xexs/XBLBallin.xex",
    },
    {
      image: "XBLDevastation",
      downloadLink: "./xexs/XBLDevastation.xex",
    },
    { image: "XBLive", downloadLink: "./xexs/XBLive.xex" },
    {
      image: "XBLPurpleHaze",
      downloadLink: "./xexs/XBLPurpleHaze.xex",
    },
    {
      image: "XBLSLauncher",
      downloadLink: "./xexs/XBLSLauncher.xex",
    },
    {
      image: "XBLSRevBeta",
      downloadLink: "./xexs/XBLSRevBeta.xex",
    },
    {
      image: "XBLStudio",
      downloadLink: "./xexs/XBLStudio.xex",
    },
    {
      image: "XBLSynax",
      downloadLink: "./xexs/XBLSynax.xex",
    },
    {
      image: "XBLTuna",
      downloadLink: "./xexs/XBLTuna.xex",
    },
    {
      image: "XboxCore",
      downloadLink: "./xexs/XboxCore.xex",
    },
    {
      image: "xbPirate",
      downloadLink: "./xexs/xbPirate.xex",
    },
    {
      image: "XeCheats",
      downloadLink: "./xexs/XeCheats.xex",
    },
    {
      image: "xexcaleb",
      downloadLink: "./xexs/xexcaleb.xex",
    },
    {
      image: "XGMLive",
      downloadLink: "./xexs/XGMLive.xex",
    },
    { image: "xLive", downloadLink: "./xexs/xLive.xex" },
    {
      image: "xNETEngine",
      downloadLink: "./xexs/xNETEngine.xex",
    },
    { image: "xNiNJA", downloadLink: "./xexs/xNiNJA.xex" },
    {
      image: "xNotify",
      downloadLink: "./xexs/xNotify.xex",
    },
    { image: "XOS", downloadLink: "./xexs/XOS.xex" },
    {
      image: "XosOffline",
      downloadLink: "./xexs/XosOffline.xex",
    },
    { image: "XUID", downloadLink: "./xexs/XUID.xex" },
    {
      image: "YetAnotherEngine",
      downloadLink: "./xexs/YetAnotherEngine.xex",
    },
    { image: "yolo", downloadLink: "./xexs/yolo.xex" },
    { image: "yolo_0", downloadLink: "./xexs/yolo_0.xex" },
    { image: "Zenyle", downloadLink: "./xexs/Zenyle.xex" },
    {
      image: "ZenyleMenu",
      downloadLink: "./xexs/ZenyleMenu.xex",
    },
  ];

  const xexLinksContainer = document.getElementById("xex-links");
  xexImages.forEach((imageData) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = imageData.downloadLink;
    link.textContent = imageData.image;
    link.classList.add("text-blue-400", "hover:underline");
    link.setAttribute("download", imageData.downloadLink.split("/").pop());
    listItem.appendChild(link);
    xexLinksContainer.appendChild(listItem);
  });

  const sourceImages = [
    {
      image: "360_is_dying Unpacked By Nebula",
      downloadLink: "./sources/360_is_dying Unpacked By Nebula.rar",
    },
    {
      image: "AIO Tool Unpacked By Nebula",
      downloadLink: "./sources/AIO Tool Unpacked By Nebula.rar",
    },
    {
      image: "Apocalypse By Havoc",
      downloadLink: "./sources/Apocalypse By Havoc.rar",
    },
    {
      image: "AW Off Host Tool",
      downloadLink: "./sources/AW Off Host Tool.rar",
    },
    {
      image: "Battlefeld 3 Offhost Tool Source",
      downloadLink: "./sources/Battlefeld 3 Offhost Tool Source.rar",
    },
    {
      image: "Battlefeld 4 Offhost Tool Source",
      downloadLink: "./sources/Battlefeld 4 Offhost Tool Source.rar",
    },
    {
      image: "Bed Protector Unpacked By Nebula",
      downloadLink: "./sources/Bed Protector Unpacked By Nebula.rar",
    },
    {
      image: "Black Hatter Source",
      downloadLink: "./sources/Black Hatter Source.rar",
    },
    {
      image: "Black Ops 1 Stats Tool",
      downloadLink: "./sources/Black Ops 1 Stats Tool.rar",
    },
    {
      image: "Black Ops 1 Zombies And Multiplayer Tool Source",
      downloadLink:
        "./sources/Black Ops 1 Zombies And Multiplayer Tool Source.rar",
    },
    {
      image: "Black Ops 2 Injector Source",
      downloadLink: "./sources/Black Ops 2 Injector Source.rar",
    },
    {
      image: "Black Ops 2 Recovery Tool Source",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1264402865036988436/Black_Ops_2_Recovery_Tool_Source.rar?ex=669dbe6e&is=669c6cee&hm=8c5e78e7ed5314c3e3fefe60c78bf6fc490941c3b387d2135407c2ce94852ca6&",
    },
    {
      image: "Black Ops I",
      downloadLink: "./sources/Black Ops I.rar",
    },
    {
      image: "Blue Sky Tool Unpacked By Nebula",
      downloadLink: "./sources/Blue Sky Tool Unpacked By Nebula.rar",
    },
    {
      image: "BO1 GT Changer Source",
      downloadLink: "./sources/BO1 GT Changer Source.rar",
    },
    {
      image: "BO2 Account Spoofer By XBOX360LSBEST Unpacked By Nebula",
      downloadLink:
        "./sources/BO2 Account Spoofer By XBOX360LSBEST Unpacked By Nebula.rar",
    },
    {
      image: "BO2 Life Tool Source",
      downloadLink: "./sources/BO2 Life Tool Source.rar",
    },
    {
      image: "BO2 Ownage Tool Unpacked By Nebula",
      downloadLink: "./sources/BO2 Ownage Tool Unpacked By Nebula.rar",
    },
    {
      image: "Bo2 Shit Cracked Nebula Edit",
      downloadLink: "./sources/Bo2 Shit Cracked Nebula Edit.rar",
    },
    { image: "BO2", downloadLink: "./sources/BO2.rar" },
    {
      image: "BO3 Tool Source",
      downloadLink: "./sources/BO3 Tool Source.rar",
    },
    {
      image: "Call of DDoS Source",
      downloadLink: "./sources/Call of DDoS Source.rar",
    },
    {
      image: "Cheat3r source",
      downloadLink: "./sources/Cheat3r source.rar",
    },
    {
      image: "CIA's MW2 Tool Source",
      downloadLink: "./sources/CIA's MW2 Tool Source.rar",
    },
    {
      image: "CoD Public Rape Tool v3 Unpacked By Nebula",
      downloadLink: "./sources/CoD Public Rape Tool v3 Unpacked By Nebula.rar",
    },
    {
      image: "COD Stats Unpacked By Nebula",
      downloadLink: "./sources/COD Stats Unpacked By Nebula.rar",
    },
    {
      image: "CoD Tool Unpacked By Nebula",
      downloadLink: "./sources/CoD Tool Unpacked By Nebula.rar",
    },
    {
      image: "CPU_AUTH",
      downloadLink: "./sources/CPU_AUTH.rar",
    },
    {
      image: "Dank RGH Grabber Unpacked By Nebula",
      downloadLink: "./sources/Dank RGH Grabber Unpacked By Nebula.rar",
    },
    {
      image: "DArK's MW3 Stat RTE Unpacked By Nebula",
      downloadLink: "./sources/DArK's MW3 Stat RTE Unpacked By Nebula.rar",
    },
    {
      image: "DArK's Super XRPC Unpacked By Nebula",
      downloadLink: "./sources/DArK's Super XRPC Unpacked By Nebula.rar",
    },
    {
      image: "DEATH RGH SOURCE",
      downloadLink: "./sources/DEATH RGH SOURCE.rar",
    },
    {
      image: "DeathRGH Tools Studio Remastered Unpacked By Nebula",
      downloadLink:
        "./sources/DeathRGH Tools Studio Remastered Unpacked By Nebula.rar",
    },
    {
      image: "DeathRGH Tools Studio Unpacked By Nebula",
      downloadLink: "./sources/DeathRGH Tools Studio Unpacked By Nebula.rar",
    },
    {
      image: "DeliriousKVs MW2 Tool",
      downloadLink: "./sources/DeliriousKVs MW2 Tool.rar",
    },
    {
      image: "Design Testing",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1264402865468739674/Design_Testing.rar?ex=669dbe6e&is=669c6cee&hm=018410609b384eb92a45e4080d3c8fa8ebd4bf4044ecee8966f7469e3bb1a387&",
    },
    {
      image: "Desolation2 Unpacked By Nebula",
      downloadLink: "./sources/Desolation2 Unpacked By Nebula.rar",
    },
    {
      image: "DolanHax",
      downloadLink: "./sources/DolanHax.rar",
    },
    {
      image: "Extra Shit Tool Remastered Unpacked By Nebula",
      downloadLink:
        "./sources/Extra Shit Tool Remastered Unpacked By Nebula.rar",
    },
    {
      image: "Get Stoned",
      downloadLink: "./sources/Get Stoned.rar",
    },
    {
      image: "Ghost Vapour Unpacked By Nebula",
      downloadLink: "./sources/Ghost Vapour Unpacked By Nebula.rar",
    },
    {
      image: "Ghosts Tool",
      downloadLink: "./sources/Ghosts Tool.rar",
    },
    {
      image: "GTA 5 Garage Tool Source",
      downloadLink: "./sources/GTA 5 Garage Tool Source.rar",
    },
    {
      image: "GTA 5 Recovery Tool Source",
      downloadLink: "./sources/GTA 5 Recovery Tool Source.rar",
    },
    {
      image: "GTA Online Garage Tool Source",
      downloadLink: "./sources/GTA Online Garage Tool Source.rar",
    },
    {
      image: "Halo Reach Astro Unpacked By Nebula",
      downloadLink: "./sources/Halo Reach Astro Unpacked By Nebula.rar",
    },
    {
      image: "Juggernaut Tool Unpacked By Nebula",
      downloadLink: "./sources/Juggernaut Tool Unpacked By Nebula.rar",
    },
    {
      image: "Juggernaut",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1264402865796026409/Juggernaut.rar?ex=669dbe6e&is=669c6cee&hm=22384d3fcaf770402260a5ec0c1a7799492d0c69f25d6611d42a6b061e6ffc1a&",
    },
    {
      image: "Light Lobbies",
      downloadLink: "./sources/Light Lobbies.rar",
    },
    {
      image: "MerKiiV1 Unpacked By Nebula",
      downloadLink: "./sources/MerKiiV1 Unpacked By Nebula.rar",
    },
    {
      image: "Mw2 Zone Editor Unpacked By Nebula",
      downloadLink: "./sources/Mw2 Zone Editor Unpacked By Nebula.rar",
    },
    {
      image: "MW3 Jug Classes Unpacked By Nebula",
      downloadLink: "./sources/MW3 Jug Classes Unpacked By Nebula.rar",
    },
    {
      image: "Operation MW2 Source",
      downloadLink: "./sources/Operation MW2 Source.rar",
    },
    {
      image: "PlayStation 4 Tool Box v2 Unpacked By Nebula",
      downloadLink:
        "./sources/PlayStation 4 Tool Box v2 Unpacked By Nebula.rar",
    },
    {
      image: "Prod Lario",
      downloadLink: "./sources/Prod Lario.rar",
    },
    {
      image: "Professional XRPC Unpacked By Nebula",
      downloadLink: "./sources/Professional XRPC Unpacked By Nebula.rar",
    },
    {
      image: "Progamer",
      downloadLink: "./sources/Progamer.rar",
    },
    {
      image: "Project Gucci 10 Unpacked By Nebula",
      downloadLink: "./sources/Project Gucci 10 Unpacked By Nebula.rar",
    },
    {
      image: "Project Gucci Remastered Unpacked By Nebula",
      downloadLink: "./sources/Project Gucci Remastered Unpacked By Nebula.rar",
    },
    {
      image: "Project Nix Unpacked By Nebula",
      downloadLink: "./sources/Project Nix Unpacked By Nebula.rar",
    },
    {
      image: "Project XDK Source",
      downloadLink: "./sources/Project XDK Source.rar",
    },
    {
      image: "Project XDK Unpacked By Nebula",
      downloadLink: "./sources/Project XDK Unpacked By Nebula.rar",
    },
    {
      image: "Projekt Harz4 by XeTazzy",
      downloadLink: "./sources/Projekt Harz4 by XeTazzy.rar",
    },
    {
      image: "R1ppinz Halo 3 Recovery Tool Unpacked By Nebula",
      downloadLink:
        "./sources/R1ppinz Halo 3 Recovery Tool Unpacked By Nebula.rar",
    },
    {
      image: "Remote Recovery Tool Source",
      downloadLink: "./sources/Remote Recovery Tool Source.rar",
    },
    {
      image: "Satan's Modding Team Tool Unpacked By Nebula",
      downloadLink:
        "./sources/Satan's Modding Team Tool Unpacked By Nebula.rar",
    },
    {
      image: "Savage Puller Unpacked By Nebula",
      downloadLink: "./sources/Savage Puller Unpacked By Nebula.rar",
    },
    {
      image: "Serenity Unpacked By Nebula",
      downloadLink: "./sources/Serenity Unpacked By Nebula.rar",
    },
    {
      image: "Sharks Name Changer Source'",
      downloadLink: "./sources/Sharks Name Changer Source'.rar",
    },
    {
      image: "Smokey xKoVx  BO1 Tool",
      downloadLink:
        "https://cdn.discordapp.com/attachments/975730799112503306/1264402866114662461/Smokey_xKoVx_BO1_Tool.rar?ex=669dbe6e&is=669c6cee&hm=297aa8516c6038bbc32d53e0499782059097245e1cb3d4a8ae83dcf6b83d5460&",
    },
    {
      image: "SoNiDo Multi Tool v2 Source By Monster",
      downloadLink: "./sources/SoNiDo Multi Tool v2 Source By Monster.rar",
    },
    {
      image: "Source Halo AStro",
      downloadLink: "./sources/Source Halo AStro.rar",
    },
    {
      image: "Speedsters Source",
      downloadLink: "./sources/Speedsters Source.rar",
    },
    {
      image: "Supreme Source",
      downloadLink: "./sources/Supreme Source.rar",
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
      downloadLink: "./sources/Terminator Source.rar",
    },
    {
      image: "V12's BO1 Recovery Tool Unpacked By Nebula",
      downloadLink: "./sources/V12's BO1 Recovery Tool Unpacked By Nebula.rar",
    },
    {
      image: "Venom Unpacked By Nebula",
      downloadLink: "./sources/Venom Unpacked By Nebula.rar",
    },
    {
      image: "WAW Gamertag Changer Source",
      downloadLink: "./sources/WAW Gamertag Changer Source.rar",
    },
    {
      image: "Xbot Unpacked By Nebula",
      downloadLink: "./sources/Xbot Unpacked By Nebula.rar",
    },
    {
      image: "Xbox JRPC Tool- by RyZzy - Unpacked By Ryan Borland !",
      downloadLink:
        "./sources/Xbox JRPC Tool- by RyZzy - Unpacked By Ryan Borland !.rar",
    },
    {
      image: "Xbox Troubleshooter Unpacked By Nebula",
      downloadLink: "./sources/Xbox Troubleshooter Unpacked By Nebula.rar",
    },
    {
      image: "XeTaxis MW3 Rape Tool Unpacked By Nebula",
      downloadLink: "./sources/XeTaxis MW3 Rape Tool Unpacked By Nebula.rar",
    },
    {
      image: "XeX BMTH v2.1 - Unpacked by RayZer",
      downloadLink: "./sources/XeX BMTH v2.1 - Unpacked by RayZer.rar",
    },
    {
      image: "xKoVx Gamertag Changer Tool Source",
      downloadLink: "./sources/xKoVx Gamertag Changer Tool Source.rar",
    },
    {
      image: "XOps Unpacked By Nebula",
      downloadLink: "./sources/XOps Unpacked By Nebula.rar",
    },
    {
      image: "y0da PRO - Open Source By Ben Mhenni",
      downloadLink: "./sources/y0da PRO - Open Source By Ben Mhenni.rar",
    },
    {
      image: "[Tool]Kewizzles Fuckin Retarded Little Tool Unpacked By Nebula",
      downloadLink:
        "./sources/[Tool]Kewizzles Fuckin Retarded Little Tool Unpacked By Nebula.rar",
    },
  ];

  const sourceLinksContainer = document.getElementById("source-links");
  sourceImages.forEach((imageData) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = imageData.downloadLink;
    link.textContent = imageData.image;
    link.classList.add("text-blue-400", "hover:underline");
    link.setAttribute("download", imageData.downloadLink.split("/").pop());
    link.setAttribute("type", (type = "application/x-rar-compressed"));
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
    "xNet Engine Offhost Ingame.jpg",
    "xNet Engine Offhost.jpg",
  ];

  createCarousel(
    ".showcase-carousel",
    "./assets/img/showcase",
    showcaseImages.map((image) => ({ image })),
    false
  );
});

document.addEventListener("DOMContentLoaded", async function () {
  // Function to fetch JSON data for each collection
  const fetchCollectionData = async (jsonPath) => {
    try {
      const response = await fetch(jsonPath);
      if (!response.ok)
        throw new Error(`Failed to fetch JSON data from ${jsonPath}`);
      const data = await response.json();
      console.log(`Fetched data from ${jsonPath}:`, data); // Debugging log
      return data;
    } catch (error) {
      console.error("Error fetching JSON data:", error);
      return null;
    }
  };

  // Function to create carousel
  const createCarousel = (
    containerSelector,
    imageFolder,
    images,
    isDownloadable
  ) => {
    const container = document.querySelector(containerSelector);

    if (!container || !Array.isArray(images) || images.length === 0) {
      console.error(
        "Container not found or images array is invalid or empty:",
        containerSelector
      );
      return;
    }

    // Add images in the order they appear in the array
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

          // Track download event in Google Analytics
          gtag("event", "download", {
            event_category: "Image",
            event_label: imageData.downloadLink,
          });
        });
      }

      itemContainer.appendChild(imgElement);
      itemContainer.appendChild(textElement);
      container.appendChild(itemContainer);
    });

    let currentIndex = 0;
    setInterval(() => {
      const items = container.querySelectorAll("div");
      if (items.length === 0) return; // Guard against empty container
      items[currentIndex].querySelector("img").classList.remove("active");
      items[currentIndex].querySelector("p").classList.remove("active");
      currentIndex = (currentIndex + 1) % items.length;
      items[currentIndex].querySelector("img").classList.add("active");
      items[currentIndex].querySelector("p").classList.add("active");
    }, 3000);
  };

  // Function to filter list based on search input
  const filterList = (inputId, listId) => {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);

    // If input or list not found, log the error
    if (!input || !list) {
      console.error(`Input or list not found: ${inputId}, ${listId}`);
      return;
    }

    const listItems = list.querySelectorAll("li");
    input.addEventListener("input", () => {
      const filter = input.value.toLowerCase();
      listItems.forEach((item) => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? "" : "none";
      });
    });
  };

  // Function to add links to the list
  const addLinksToList = (containerId, images, fileType) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with ID ${containerId} not found.`);
      return;
    }
    console.log(`Adding links to container: ${containerId}`); // Debugging log

    if (!Array.isArray(images)) {
      console.error("Images data is not an array:", images);
      return;
    }

    images.forEach((imageData) => {
      const listItem = document.createElement("li");
      listItem.classList.add("mb-2"); // Ensure there's some spacing between items
      const link = document.createElement("a");
      link.href = imageData.downloadLink;
      link.textContent = imageData.image.replace(".png", "");

      // Set attributes based on file type
      if (fileType === "rar") {
        link.setAttribute("download", imageData.downloadLink.split("/").pop());
        link.setAttribute("type", "application/x-rar-compressed");
      } else if (fileType === "xex") {
        link.setAttribute("download", imageData.downloadLink.split("/").pop());
        link.setAttribute("type", "application/octet-stream"); // For `.xex` type
      } else {
        link.setAttribute("download", imageData.downloadLink.split("/").pop());
      }

      link.classList.add("text-blue-400", "hover:underline");
      link.addEventListener("click", () => {
        gtag("event", "click", {
          event_category: "Link",
          event_label: imageData.downloadLink,
        });
      });

      listItem.appendChild(link);
      container.appendChild(listItem);
    });
  };

  // Initialize collections and handle any errors
  const initializeCollections = async () => {
    try {
      // Fetch data for each section
      const xexData = await fetchCollectionData("assets/json/xexs.json");
      const toolData = await fetchCollectionData("assets/json/tools.json");
      const sourceData = await fetchCollectionData("assets/json/sources.json");
      const randomStuffData = await fetchCollectionData(
        "assets/json/random.json"
      );
      const showcaseData = await fetchCollectionData(
        "assets/json/showcase.json"
      );

      // Add data to lists
      if (xexData && Array.isArray(xexData.xexImages)) {
        addLinksToList("xex-links", xexData.xexImages, "xex");
      }

      if (toolData && Array.isArray(toolData.toolImages)) {
        createCarousel(
          ".carousel",
          "./assets/img/tools",
          toolData.toolImages,
          true
        );
        addLinksToList("tool-links", toolData.toolImages, "rar");
      }

      if (sourceData && Array.isArray(sourceData.sourceImages)) {
        addLinksToList("source-links", sourceData.sourceImages, "rar");
      }

      if (randomStuffData && Array.isArray(randomStuffData.sourceRandomStuff)) {
        addLinksToList(
          "random-links",
          randomStuffData.sourceRandomStuff,
          "rar"
        );
      }

      if (showcaseData && Array.isArray(showcaseData.showcaseImage)) {
        createCarousel(
          ".showcase-carousel",
          "./assets/img/showcase",
          showcaseData.showcaseImage.map((image) => ({
            image,
            downloadLink: "",
          })),
          false
        );
      }

      // Initialize search for each list
      filterList("tool-search", "tool-links");
      filterList("xex-search", "xex-links");
      filterList("source-search", "source-links");
      filterList("random-search", "random-links");
    } catch (error) {
      console.error("Error during initialization:", error);
    }
  };

  initializeCollections();

  const icons = document.querySelectorAll(".icon-color-fade");
  const colors = ["red", "green", "blue", "purple", "orange", "yellow"];

  function cycleColors(icon, index = 0) {
    icon.style.transition = "fill 1s ease-in-out";
    icon.style.fill = colors[index];

    setTimeout(() => {
      const nextIndex = (index + 1) % colors.length;
      cycleColors(icon, nextIndex);
    }, 1000);
  }

  icons.forEach((icon) => {
    cycleColors(icon);
  });
});

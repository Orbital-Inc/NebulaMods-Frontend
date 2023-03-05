window.addEventListener("DOMContentLoaded", async () => {
  //check if url contains ip if so then geolocate that
  await CheckToken();
  // Get the URLSearchParams object
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams != null) {
    // Get the value of a parameter with a specified name
    const paramValue = urlParams.get("ip");
    if (paramValue != null) {
      await Geolocate(paramValue);
      return;
    }
  }
  //temp until i update the api to support /me
  const XHR = new XMLHttpRequest();
  XHR.addEventListener("load", async (event) => {
    let data = JSON.parse(event.target.responseText);
    if (data.ip == null || data.ip == "") {
      console.log(event.target.responseText);
      return;
    }
    await Geolocate(data.ip);
  });
  XHR.addEventListener("error", (event) => {
    console.log(event.target.responseText);
  });
  XHR.open("GET", "https://api.ipify.org/?format=json");
  XHR.send();
});

async function Geolocate(ip) {
  if (ip == null || ip == "") return;
  const XHR = new XMLHttpRequest();

  XHR.addEventListener("load", async (event) => {
    let data = JSON.parse(event.target.responseText);
    if (data.success != null) {
      alert(data.details);
      return;
    }
    // Clear the URL parameters without reloading the page
    history.pushState({}, document.title, window.location.pathname);

    //console.log(data);
    //#region Setting Data
    const extraElems = document.querySelectorAll("#extras li");
    const locationElems = document.querySelectorAll("#location li");
    const networkElems = document.querySelectorAll("#network li");
    document.getElementById("flagImg").src = data.flag;
    const ipAddy = document.getElementById("ipAddy");
    if (ipAddy.value == "" || ipAddy.value == null) {
      ipAddy.value = data.ip;
    }
    networkElems[0].textContent = `IP Address: ${
      data.ip == null ? "N/A" : data.ip
    }`;
    networkElems[1].textContent = `Hostname: ${
      data.hostname == null ? "N/A" : data.hostname
    }`;
    networkElems[2].textContent = `Type: ${
      data.type == null ? "N/A" : data.type
    }`;
    networkElems[3].textContent = `Organization: ${
      data.organization == null ? "N/A" : data.organization
    }`;
    networkElems[4].textContent = `ISP: ${data.isp == null ? "N/A" : data.isp}`;
    networkElems[5].textContent = `Domain: ${
      data.domain == null ? "N/A" : data.domain
    }`;
    networkElems[6].textContent = `AS Number: ${
      data.asnNumber == null ? "N/A" : data.asnNumber
    }`;
    networkElems[7].textContent = `AS Name: ${
      data.asnName == null ? "N/A" : data.asnName
    }`;
    networkElems[8].textContent = `Route: ${
      data.route == null ? "N/A" : data.route
    }`;
    locationElems[0].textContent = `Country: ${
      data.country == null ? "N/A" : data.country
    }`;
    locationElems[1].textContent = `Region: ${
      data.region == null ? "N/A" : data.region
    }`;
    locationElems[2].textContent = `District: ${
      data.district == null ? "N/A" : data.district
    }`;
    locationElems[3].textContent = `City: ${
      data.city == null ? "N/A" : data.city
    }`;
    extraElems[0].textContent = `Attacker: ${
      data.attacker == null ? "N/A" : data.attacker
    }`;
    extraElems[1].textContent = `Abuser: ${
      data.abuser == null ? "N/A" : data.abuser
    }`;
    extraElems[2].textContent = `Proxy: ${
      data.proxy == null ? "N/A" : data.proxy
    }`;
    extraElems[3].textContent = `Tor: ${data.tor == null ? "N/A" : data.tor}`;
    extraElems[4].textContent = `Annonymous: ${
      data.annonymous == null ? "N/A" : data.annonymous
    }`;
    extraElems[5].textContent = `Cloud Provider: ${
      data.cloudProvider == null ? "N/A" : data.cloudProvider
    }`;
    extraElems[6].textContent = `Bogon: ${
      data.bogon == null ? "N/A" : data.bogon
    }`;
    extraElems[7].textContent = `Relay: ${
      data.relay == null ? "N/A" : data.relay
    }`;
    extraElems[8].textContent = `Tor Exit: ${
      data.torExit == null ? "N/A" : data.torExit
    }`;
    extraElems[9].textContent = `Response Time: ${
      data.responseTime == null ? "N/A" : data.responseTime
    }`;
    //#endregion
  });
  XHR.addEventListener("error", async (event) => {
    alert(
      "An error occurred, if this continues to occur please contact an admin."
    );
  });
  XHR.open("GET", `https://api.nebulamods.ca/network/geolocation/${ip}`);
  //get token from local/session storage
  let token = window.localStorage.getItem("Authorization");
  if (token == null || token == "") {
    token =
      "eRk6Uf6XmTlDqdaYAd3q+R6RPugGLabPE0YEcv1Oy9F7Y/zcTaNMoXU+vjOT49u/wJZj3ZA+IcB7pWnFgvERczVGY9ODw7pthLMmorWW3wJPFZhQ6/QyL13At+7VVbXDhHTMkLafHjiFMHjogSyDFuE6722VCjbQ6tBqsOHi3Kc88JNu+9RkeBLh1s7JZtH5LQBCn363oyW+O8SnEgt4Igz2Xj5+yMxBRfkFpdFbLXB2gWbRCchxRYdyE/jbMZgPPJOfW2TqXe0rfNxUhvvovg==";
  }
  XHR.setRequestHeader("Authorization", token);
  if (token == "some free token?????" || token == "" || token == null) {
    return;
  }
  XHR.send();
}

async function CheckToken() {
  let token = window.localStorage.getItem("Authorization");
  if (token == null || token == "") {
    return;
  }
  const authToggle = document.querySelector(".js-change-token");
  authToggle.innerHTML = "🔒";
}

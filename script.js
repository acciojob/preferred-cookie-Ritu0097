document.addEventListener("DOMContentLoaded", function () {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");
  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize);
    document.getElementById("fontsize").value = savedFontSize.replace("px", "");
  }
  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const fontSize = document.getElementById("fontsize").value + "px";
    const fontColor = document.getElementById("fontcolor").value;
    document.documentElement.style.setProperty("--fontsize", fontSize);
    document.documentElement.style.setProperty("--fontcolor", fontColor);
    setCookie("fontsize", fontSize, 365);
    setCookie("fontcolor", fontColor, 365);
  });
  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }
  function getCookie(name) {
    const cookieName = name + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return null;
  }
});

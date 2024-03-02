async function getShibaImage() {
    const includeUrls = true; // Specify whether you want to include URLs in the response
    const useHttpsUrls = true; // Specify whether you want to use HTTPS URLs
  
    const url = `https://shibe.online/api/shibes?count=1&urls=${includeUrls}&httpsUrls=${useHttpsUrls}`;
  
    const response = await fetch(url);
    const data = await response.json();
  
    return data[0];
  }
  
  async function updatePopup() {
    try {
      const shibaImage = await getShibaImage();
      const imageContainer = document.getElementById('image-container');
      imageContainer.innerHTML = `<img src="${shibaImage}" alt="Shiba Inu">`;
    } catch (error) {
      console.error('Error fetching Shiba Inu image:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    updatePopup();
  });
  
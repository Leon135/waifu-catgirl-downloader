import { useEffect, useState } from "react";

const WAIFU_API = "https://api.waifu.im";

const WaifusPage = () => {
    const [nsfw, setNsfw] = useState(false);
    const [gif, setGif] = useState(false);

    const [imageURL, setImageURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchWaifu = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(
                `${WAIFU_API}/search?is_nsfw=${nsfw}&gif=${gif}`
            );
            if (response.status === 429) {
                alert("Rate limit exceeded. Please try again later.");
                throw new Error("Rate limit exceeded. Please try again later.");
            }
            const data = await response.json();
            setImageURL(data.images[0].url);
        } catch (error) {
            console.error("Error fetching waifu:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchWaifu();
    }, []);

    return (
        <>
            <header>
                <h1>Waifus Page</h1>
                <section className="grid">
                    <button onClick={() => setNsfw(!nsfw)}>
                        NSFW ({nsfw ? "On" : "Off"})
                    </button>
                    <button onClick={() => setGif(!gif)}>
                        GIF ({gif ? "On" : "Off"})
                    </button>
                    <button onClick={fetchWaifu} aria-busy={isLoading}>
                        {isLoading ? "Loading..." : "WAIFU"}
                    </button>
                </section>
            </header>
            <main>
                {isLoading ? (
                    <></>
                ) : imageURL ? (
                    <img
                        className="center"
                        src={imageURL}
                        alt={imageURL == "" ? "" : "Waifu"}
                    />
                ) : (
                    <p>No image found</p>
                )}
                {imageURL && (
                    <button
                        onClick={() => {
                            window.open(imageURL);
                        }}
                        style={{ marginTop: "1rem", display: "block" }}
                    >
                        Save Image
                    </button>
                )}
            </main>
        </>
    );
};

export default WaifusPage;

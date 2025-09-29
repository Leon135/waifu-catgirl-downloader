import { useEffect, useState } from "react";

const CATGIRL_API = "https://nekos.moe/api/v1";
const CATGIRL_IMAGE_ENDPOINT = "https://nekos.moe";

const CatgirlPage = () => {
    const [nsfw, setNsfw] = useState(false);

    const [imageURL, setImageURL] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const fetchRandomCatGirl = async () => {
        setIsLoading(true);
        try {
            const random_response = await fetch(
                `${CATGIRL_API}/random/image?nsfw=${nsfw}`
            );
            const random_data = await random_response.json();

            if (random_response.status === 429) {
                alert("Rate limit exceeded. Please try again later.");
                throw new Error("Rate limit exceeded. Please try again later.");
            }

            console.log(random_data);

            setImageURL(
                `${CATGIRL_IMAGE_ENDPOINT}/image/${random_data["images"][0]["id"]}`
            );
        } catch (error) {
            console.error("Error fetching catgirl: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRandomCatGirl();
    }, []);

    return (
        <>
            <header>
                <h1>Catgirls Page</h1>
                <section className="grid">
                    <button
                        className={nsfw ? "" : "outline"}
                        onClick={() => setNsfw(!nsfw)}
                    >
                        NSFW ({nsfw ? "On" : "Off"})
                    </button>
                    <button
                        className="outline"
                        onClick={fetchRandomCatGirl}
                        aria-busy={isLoading}
                    >
                        {isLoading ? "Loading..." : "CATGIRL"}
                    </button>
                    {imageURL && (
                        <button
                            className="secondary"
                            onClick={() => {
                                window.open(imageURL);
                            }}
                        >
                            Save Image
                        </button>
                    )}
                </section>
            </header>
            <main>
                {isLoading ? (
                    <></>
                ) : imageURL ? (
                    <img
                        className="center"
                        src={imageURL}
                        alt={imageURL == "" ? "" : "Catgirl"}
                        style={{ borderRadius: "10px", maxHeight: "70vh" }}
                    />
                ) : (
                    <p>No image found</p>
                )}
            </main>
        </>
    );
};

export default CatgirlPage;

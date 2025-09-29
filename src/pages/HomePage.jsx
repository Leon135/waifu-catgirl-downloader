const HomePage = () => {
    return (
        <>
            <header>
                <h1>Welcome to Waifu & Catgirl downloader</h1>
                <p>
                    This is a simple app to download random waifus and catgirls.
                    <br />
                    Use the navigation bar to explore the pages.
                </p>
                <figure>
                    <img
                        src="yae.jpg"
                        alt="Yae Miko"
                        width="200"
                        style={{ borderRadius: "10px" }}
                    />
                    <figcaption>💜 Yae Miko</figcaption>
                </figure>
            </header>
            <main>
                <hr />
                <h2>About</h2>
                <p>
                    Wonder how it was made?
                    <br />I saw{" "}
                    <a href="https://github.com/NyarchLinux/CatgirlDownloader/tree/master">
                        CatgirlDownloader
                    </a>{" "}
                    made by{" "}
                    <a href="https://github.com/NyarchLinux">NyArch linux</a>{" "}
                    and i liked it.
                    <br />
                    But there was no windows/web version, so i made my one in
                    React as a learning project.
                    <br />
                    It uses <a href="https://waifu.im/docs">
                        waifu.im
                    </a> and <a href="https://docs.nekos.moe/">nekos.moe</a>{" "}
                    APIs to fetch images.
                </p>
            </main>
        </>
    );
};

export default HomePage;

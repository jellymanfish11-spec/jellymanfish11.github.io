document
    .getElementById("loginForm")
    .addEventListener("submit", function(e){

        e.preventDefault();

        const email =
            document.getElementById("email").value;

        alert(
`${email} でログインしました。

アカウントは正しく認証されました。

※これはフィッシング体験です。`
        );

        window.location.href =
            "https://line.me/";
});
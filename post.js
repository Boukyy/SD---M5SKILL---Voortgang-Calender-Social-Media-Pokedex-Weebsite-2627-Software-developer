function makePost(data) {
    let postList = document.querySelector("#postList");

    let post = document.createElement("article");
    post.classList.add("post");

    post.innerHTML = `
        <div class="post-header">
            <img class="profile" src="${data.profile}" alt="Profielfoto">
            <span class="username">${data.user}</span>
            <span class="dots">...</span>
        </div>

        <img class="post-img" src="${data.imgUrl}" alt="Post afbeelding">

        <div class="buttons">
            <span class="like">♡</span>
            <span>♧</span>
            <span>➤</span>
            <span class="bookmark">♧</span>
        </div>

        <div class="likes">${data.likes} likes</div>

        <p class="caption">
            <b>${data.user}</b> ${data.text}
        </p>

        <p class="comments">${data.comments} reacties bekijken</p>

        <p class="date">${data.date}</p>
    `;

    postList.appendChild(post);
}

export { makePost };

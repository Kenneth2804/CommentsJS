document.addEventListener("DOMContentLoaded", function() {
	const commentText = document.getElementById("commentText");
	const imageInput = document.getElementById("imageInput");
	const submitComment = document.getElementById("submitComment");
	const commentList = document.getElementById("commentList");


submitComment.addEventListener("click", function(){
	const commentValue = commentText.value.trim();
	const selectedImage = imageInput.files[0];

	if (commentValue !== "") {
		const commentDiv = document.createElement("div");
		commentDiv.className = "comment";
		commentDiv.innerHTML = `
		<p>${commentValue}</p>
		${selectedImage ? `<img src="${URL.createObjectURL(selectedImage)}" alt="Esperando Imagen"/>` : ''}  
		<div class="reactions">

    	  <button class="reaction-btn" data-reaction="like">👍</button>
          <button class="reaction-btn" data-reaction="love">❤️</button>
          <button class="reaction-btn" data-reaction="haha">😆</button>
          <button class="reaction-btn" data-reaction="wow">😮</button>
          <button class="reaction-btn" data-reaction="sad">😢</button>
          <button class="reaction-btn" data-reaction="angry">😡</button>
		</div>
		<div class="interaction">

		</div>

		`;
		commentList.insertBefore(commentDiv, commentList.firstChild);
		commentText.value = "";
		imageInput.value = null;

	}
});

commentList.addEventListener("click", function (event){
	if (event.target.classList.contains("reaction-btn")) {
		const reactionType = event.target.getAttribute("data-reaction");
		const interactionDiv = event.target.closest(".comment").querySelector(".interaction");
		interactionDiv.innerHTML = `Reaccionaste: ${getEmoji(reactionType)}`;
	}
}); 
});

function getEmoji(reactionType) {
	const emojiMap ={
		like: "👍",
		love: "❤️",
		haha:"😆",
		wow:"😮",
		sad:"😢",
		angry:"😡",
	}
	return emojiMap[reactionType] || "";
}



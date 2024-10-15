const token = "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";
const inputText = document.getElementById('input');
const image = document.getElementById('image');
const button = document.getElementById('btn');

async function query() {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/prompthero/openjourney",
		{
			headers: { Authorization: `Bearer ${token}` },
			method: "POST",
    		body: JSON.stringify({"inputs": inputText.value}),

        }
        
	);
	const result = await response.blob();
	return result;
}
button.addEventListener('click', async function(){
    query().then((response) => {
        const objectURL = URL.createObjectURL(response) 
        image.src = objectURL
    });
})

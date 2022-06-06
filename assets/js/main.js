document.addEventListener('DOMContentLoaded', () => {
	const search = document.querySelector('#searchInput')

	document.addEventListener('keydown', function(e) {
		//if key pressed is Enter key
              	if (e.keyCode ===  13) {
			e.preventDefault();

			if (isValidURL(search.value)) {
				window.location.assign("https://" + search.value);
				return;
			}

			window.location.assign("https://duckduckgo.com/?q=" + search.value);
		}
	})
});

function isValidURL(string) {
	var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
	
	return (res !== null);
};

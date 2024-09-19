const confeti = '❤️'; //Sustituir por el emoticono que quieras que llueva (yo uso esta pagina https://emojipedia.org/es)

        document.getElementById("surpriseButton").addEventListener("click", function() {
            this.style.display = 'none';
            document.getElementById("message").style.display = "block";
            startHearts();
        });

        function startHearts() {
            for (let i = 0; i < 150; i++) {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * window.innerWidth + 'px';
                heart.style.animation = 'floating ' + (2 + Math.random() * 3) + 's ease-in infinite';
                heart.innerText = confeti;
                heart.style.transform= 'rotate(' + 360 * Math.random() + 'deg)';
                document.body.appendChild(heart);
            }
        }
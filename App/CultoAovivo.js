const apiKey = 'AIzaSyCD_GcmB4Ze2No4skZtyw32DhPz8M1Dx7Y';
const channelId = 'UCuP7t_Isa_YoV8FIyAaNdhA';
const conteudo = document.getElementById('conteudo')

function loadVideos() {
    const Link = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=10`
    fetch(Link)
        .then(response => response.json())
        .then(data => {
            const videoPrincipal = document.getElementById('videoPrincipal');
            const videoList = document.getElementById('videoList');
            videoList.innerHTML = '';
            videoPrincipal.innerHTML = '';

            const videos = data.items.filter(item => item.id.kind === 'youtube#video');

            const videoIdPrincipal = videos[0].id.videoId;
            const videoTitlePrincipal = videos[0].snippet.title;
            const videoElementPrincipal = `
                 <div class="video">
                    <iframe style="width: 1250px; height: 500px;"
                        src="https://www.youtube.com/embed/${videoIdPrincipal}" frameborder="0"
                        allowfullscreen></iframe>
                    <h3>${videoTitlePrincipal}</h3>
                </div>
            `;
            videoPrincipal.innerHTML = videoElementPrincipal;

            const videoColumns = [
                { id: 'column1', videos: [] },
                { id: 'column2', videos: [] }
            ];

            videos.slice(1, 9).forEach((item, index) => {
                const videoId = item.id.videoId;
                const videoTitle = item.snippet.title;
                const videoElement = `
                    <div class="video">
                        <iframe style="width: 300px; height: 200px;"
                            src="https://www.youtube.com/embed/${videoId}" frameborder="0"
                            allowfullscreen></iframe>
                        <h3>${videoTitle}</h3>
                    </div>
                `;


                const columnIndex = index < 4 ? 0 : 1;
                videoColumns[columnIndex].videos.push(videoElement);
            });

            videoColumns.forEach(column => {
                const columnDiv = document.createElement('div');
                columnDiv.className = 'video-column';
                columnDiv.id = column.id;

                column.videos.forEach(video => {
                    columnDiv.innerHTML += video;
                });

                videoList.appendChild(columnDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar vídeos:', error));

        
    conteudo.style.display = 'flex'

}

loadVideos();
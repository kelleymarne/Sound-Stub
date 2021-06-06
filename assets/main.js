var BTapiUrl = 'https://rest.bandsintown.com/artists/' //bandsintown artists/[artist name]/events?app_id=
var BTapiKey = '/events?app_id=codingbootcamp'


var YTapiUrl = "https://youtube.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=1&q="
var YTapiKey = "&key=AIzaSyCbfLWENG7Xt-bGvusj8DNP7usCXXeF1XM"

var video = ''

$('#find').on('click', function(event) {
    var search = $('#search').val()
    event.preventDefault()
    
    fetch(BTapiUrl + search + BTapiKey)
    .then(data => data.json())
    .then(result => {
        console.log(result);
    })
    
    fetch(YTapiUrl + search + YTapiKey)
    .then(data => data.json())
    .then(result => {
        console.log(result);
    
        result.items.forEach(item => {
            video = 
            `
            <iframe width="420" height="315" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>
            `
            $('#player').append(video);
        })
    })


})

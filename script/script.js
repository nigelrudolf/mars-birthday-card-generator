/*eslint-disable*/
const nasaApp = {};

nasaApp.baseUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?';
nasaApp.key = 'tBamPmfMDWz4V3P6N9NonSibwfdLF73yuNa5GQVY';

nasaApp.rovers = {
        curiosity: 'curiosity',
        opportunity: 'opportunity',
        spirit: 'spirit',
};

nasaApp.state = {
        randomPhoto: [],
}

nasaApp.getMarsImages = () => {
        return $.ajax({
                url: nasaApp.baseUrl,
                method: 'GET',
                dataType: 'json',
                data: {
                        api_key: nasaApp.key,
                        format: 'json',
                },
        })

                .then(function(result) {
                        const latestPhotos = [...result.latest_photos];

                        // shuffle latest photos
                        function shuffle(array) {
                                let currentIndex = array.length;
                                let temporaryValue;
                                let randomIndex;
                                randomIndex;

                                // While there remain elements to shuffle...
                                while (currentIndex !== 0) {
                                        // Pick a remaining element...
                                        randomIndex = Math.floor(Math.random() * currentIndex);
                                        currentIndex -= 1;

                                        // And swap it with the current element.
                                        temporaryValue = array[currentIndex];
                                        array[currentIndex] = array[randomIndex];
                                        array[randomIndex] = temporaryValue;
                                }
                                return array[0];
                        }
                        const randomPhoto = [...nasaApp.state.randomPhoto, shuffle(latestPhotos)];
                        nasaApp.state.randomPhoto = randomPhoto;
                })
                .fail(function(result) {
                        nasaApp.displayBirthdayCard();
                });
};

nasaApp.gatherFormData = function() {
        const email = $('.email-input').val();
        const name = $('.name-input').val();
        const birthday = $('.birthday-input').val();
        const message = $('.message-input').val();

        return [email, name, birthday, message];
};

nasaApp.generateBirthdayCard = function(roverName, camera, sol) {
        const [email, name, birthday, message] = nasaApp.gatherFormData();
        return (`
    <div class="birthday-card">
        <div class="birthday-card-wrapper">
            <div class="nasa-img"></div>
            <p>Happy Birthday ${name}. ${message}</p>
            <ul>
                <li>Rover: ${roverName}</li>
                <li>Cam: ${camera}</li>
                <li>Sol: ${sol}</li>
            </ul>
            <ul class="social-media-icons" >
                <li><a href=""><i class="social-icon fab fa-twitter"></i></a></li>
                <li><a href=""><i class="social-icon fab fa-facebook-f"></i></a></li>
            </ul>
        </div>
    </div>`);
};
nasaApp.hideBirthdayForm = function() {
        $('.birthday-form').hide();
};

nasaApp.displayBirthdayCard = function(img_src, birthdayCard) {
        $('.navigation').after(birthdayCard); // append .birthday-card div after .navigation
        $('.nasa-img').css('background', `url(${img_src})`); // set .nasa-img as randomly selected mars image
};

nasaApp.init = function() {

        $('.birthday-form').submit(async function(e) {
                e.preventDefault();
                
                await nasaApp.getMarsImages();                      

                const { camera, img_src, rover, sol } = [...nasaApp.state.randomPhoto][0] // copy of state - not mutating state directly
                
                const birthdayCard = nasaApp.generateBirthdayCard(rover.name, camera.name, sol);
                nasaApp.hideBirthdayForm();
                nasaApp.displayBirthdayCard(img_src, birthdayCard);
        });
};

$(function() {
        nasaApp.init();
});

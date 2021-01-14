import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer BqF0J-g3Y5WTe4_tZhWlpauEodMWhy5l4afyCEbcsFeYalMjJisridaU5XQNdo2ux3xaBjdmxjhYUiaXd3vdiAVmJVgOZlxVoiEHKr2wkc0reI0s-G5nK_LqJI4AYHYx'
    }
})
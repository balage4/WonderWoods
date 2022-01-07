import { Client } from '@googlemaps/google-maps-services-js'
import osrm from ''

const { G_API_KEY } = process.env;
const req = `https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=${G_API_KEY}`;


const client = new Client({});



const osrmString = '/route/v1/car/{coordinates}[.{format}]?option=value&option=value'


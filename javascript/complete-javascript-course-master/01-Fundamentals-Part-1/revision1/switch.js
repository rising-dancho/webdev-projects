const day = 'saturday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'teusday':
        console.log('prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Write code examples');
        break;
    default:
        console.log('not a valid day 😴');
        break;
}
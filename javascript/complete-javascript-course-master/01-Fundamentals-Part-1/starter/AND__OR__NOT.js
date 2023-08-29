const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log("sara is able to drive");
// } else {
//     console.log("someone else should drive");
// }

const notTired = true; //B
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && notTired) {
    console.log('sara is able to drive');
} else {
    console.log('someone else should drive...');
}
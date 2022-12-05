// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    return `![Github license]((https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None'){
    return `*[license](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
    
This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description 
${data.description}

## Table of Contents 

*[Installation](#installation)

*[Usage](#usage)

*[Test](#test)

*[Contributing](#contributing)

${renderLicenseLink(data.license)}

*[Contact](#contact)

## Installation 

To insall necessary dependencies, run the following: 

${data.installation}

## Usage

${data.usage}

## Test 

To run test use the following:

${data.test}

## Contributing 

${data.contribute}

${renderLicenseSection(data.license)}

## Contact

If you have any questions, comments, or issues with the project contact me via email at ${data.userEmail}.

Link to my github (https://github.com/${data.githubUser})
`;
}

module.exports = generateMarkdown;

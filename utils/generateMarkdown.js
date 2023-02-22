// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    MIT: '![License](https://img.shields.io/badge/License-MIT-blue.svg)',
    Apache2: '![License](https://img.shields.io/badge/License-Apache-License-2.0-blue.svg)',
    GNUGPLv3: '![License](https://img.shields.io/badge/License-GNU-GPLv3-blue.svg)',
    GNUGPLv2: '![License](https://img.shields.io/badge/License-GNU-GPLv2-blue.svg)',
    ISC: '![License](https://img.shields.io/badge/License-ISC-blue.svg)'

  }
  return badges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
    Apache2: '[Apache2](https://choosealicense.com/licenses/apache-2.0/)',
    GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
    GNUGPLv2: '[GNUGPLv2](https://choosealicense.com/licenses/gpl-2.0/)',
    ISC: '[ISC](https://choosealicense.com/licenses/isc/)'
  }

  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license) {
    return `Licensed under the ${renderLicenseLink(license)} license`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  # ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  Reach me by email: ${data.email}
  Github username: ${data.github}
  
  Github Profile Link: ${data.link}
`;
};

module.exports = generateMarkdown;

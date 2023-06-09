// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "GPL") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return ''
  }
  
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Github
  ${data.github}

## Description
  ${data.description}

## Email
  Please email me @ ${data.email} with any additional questions.

## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [GitHub](#github)
    
## Installation
  ${data.installation}
    
## Usage
  ${data.usage}

## Credits
  ${data.credits}
    
## License
  ${data.license}`
    
    

}

module.exports = generateMarkdown;
// module.exports.renderLicenseBadge= renderLicenseBadge;

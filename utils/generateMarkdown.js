// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "GNU") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === "None") {
    return `"No License"`
  }
};

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return `[(https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "Mozilla") {
    return `(https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`
  } else if (license === "GNU") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license === "Boost") {
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === "None") {
    return ``
  }
};

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}, ${renderLicenseLink(license)}`
};

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description 
${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Tests
${data.tests}

## Questions
${data.questions}
https://github.com/${data.username}
${data.email}
`;
}

module.exports = generateMarkdown;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT"){
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  }
  else if (license === "ISC"){
    badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
  }
  else if (license === "Mozilla"){
    badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
  }
  else if (license === "Perl"){
    badge = `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`;
  }
  else if (license === "IBM"){
    badge = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]`;
  }
  else if (license === "Apache"){
    badge = `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
  }
  else if (license === "No License"){
    badge = "";
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT"){
    link = `(https://opensource.org/licenses/MIT)`;
  }
  else if (license === "ISC"){
    link = `(https://opensource.org/licenses/ISC)`;
  }
  else if (license === "Mozilla"){
    link = `(https://opensource.org/licenses/MPL-2.0)`;
  }
  else if (license === "Perl"){
    link = `(https://opensource.org/licenses/Artistic-2.0)`;
  }
  else if (license === "IBM"){
    link = `(https://opensource.org/licenses/IPL-1.0)`;
  }
  else if (license === "Apache"){
    link = `(https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === "No License"){
    link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No License"){
    licenseStatus = "not licensed."
  }
  else {
    licenseStatus = `licensed by ${license}.`
  }
  return licenseStatus;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  renderLicenseBadge(response.license);
  renderLicenseLink(response.license);
  renderLicenseSection(response.license);

  return `# ${response.title}
${badge + link}
## Description
#### ${response.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#test)
6. [Questions](#questions)
    
## Installation
 ${response.instructions}
    
## Usage
 ${response.usageinfo}
    
## License
 ${response.license}
    
## Contributing
 ${response.contribution}
    
## Test
 ${response.test}

## Questions
 If there are any issues, don't hesitate to reach out!

#### GITHUB: https://github.com/${response.github}
#### EMAIL: ${response.email}

##### This product is currently ${licenseStatus}.
`;
}

module.exports = generateMarkdown;

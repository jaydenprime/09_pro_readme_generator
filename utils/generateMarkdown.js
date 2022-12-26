// Displays license if license is chosen
function licenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return ``;
}

// Returns empty string if no license
function licenseLink(license) {
  if (license !== 'None') {
    return `- [License](#license-✍🏻)`
  }
  return ``;
}

// Returns empty string if no license
function licenseSection(license) {
  if (license !== 'None') {
    return `## License ✍🏻
    Licensed under ${license} license.`
  }
  return ``;
}

// Generates MarkDown file
function generateMarkdown(data) {
  return `# ${data.title}

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.username}/${data.repo}?style=flat&logo=appveyor) 
![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat&logo=appveyor)
${licenseBadge(data.license)}

## Description 📚
${data.description}

## Table of Contents 📄
- [Installation](#installation-🔧)
- [Usage](#usage-📈)
${licenseLink(data.license)}
- [Tests](#test-✅)
- [Collaborators](#collaborators-🤝🏻)
- [Deployment](#deployed-🚀)
- [Questions](#questions-🙋🏻‍♂️)

## Installation 🔧
${data.installation}

## Usage 📈
${data.usage}
${licenseSection(data.license)}

## Tests ✅
${data.test}

## Collaborators 🤝🏻
${data.collaborators}

## Deployment 🚀
This application was deployed at ${data.deployed}

## Questions 🙋🏻‍♂️
If you have any questions for me, please email me at ${data.email}

To view more of my work, please visit my repo at [${data.username}(https://github.com/${data.username})]
`;
}

module.exports = generateMarkdown;

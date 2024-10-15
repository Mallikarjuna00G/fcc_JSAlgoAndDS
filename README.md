# fcc_JSAlgoAndDS

Learn and practice JavaScript Algorithms and Data Structures through FreeCodeCamp website.

## References: 

1. [FreeCodeCamp](https://www.freecodecamp.org)
2. [FreeCodeCamp JS algorithms and Data structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/)
3. Small learning on web scraping using python-selenium: <https://www.scrapingbee.com/blog/selenium-python/>. Had to install `python3-selenium`. Also `BeautifulSoup` is used.


## Environment Setup:

`ipynbGenerator.py` script shall be updated to latest project and run to get the project specific jupyter notebook. Thus, generated notebook will be just an outline. You shall update the project specific jupyter notebook.

The idea is to generate the project specific README.md file using project specific jupyter notebook using the following command form:

- `jupyter nbconvert <projectName>.ipynb --to markdown --no-input --output README.md`. Here `--no-input` flag indicates that in the generated markdown file code cells of the notebook will not be present. With this command you will get the project specific readme markdown file.

**Note:** Using Node.js to run the scripts, since we need to run some/most of the javascript files without using them in html files

Command used will be of the format: `node <scriptName>`. Currently using Node.js version v18.19.0. Node.js can be obtained from <https://nodejs.org/en>.

## Topics
1. Learn Introductory JavaScript by Building a Pyramid Generator: [pyramidGenerator](./pyramidGenerator/)
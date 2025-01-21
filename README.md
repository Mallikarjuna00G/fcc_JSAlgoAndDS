# fcc_JSAlgoAndDS

Learn and practice JavaScript Algorithms and Data Structures through FreeCodeCamp website.

<img src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png" height="24" alt="javascript-logo"/> <img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" height="24" alt="python-logo"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" height="24" alt="vscode-logo"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg" height="24" alt="selenium-logo"/> <img src="https://www.markdownguide.org/assets/images/markdown-mark-white.svg" height="24" alt="markdown-logo"> <img src="https://jupyter.org/assets/homepage/main-logo.svg" height="24" alt="jupyterNotebook-logo"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" height="24" alt="NodeJS-logo">

<img src="https://raw.githubusercontent.com/fizzed/font-mfizz/master/src/svg/freecodecamp.svg" height="24" alt="freeCodeCamp-logo">

## References: 

1. [FreeCodeCamp](https://www.freecodecamp.org)
2. [FreeCodeCamp JS algorithms and Data structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/)
3. Small learning on web scraping using python-selenium: <https://www.scrapingbee.com/blog/selenium-python/>. Had to install `python3-selenium`. Also `BeautifulSoup` is used.


## Environment Setup:

`ipynbGenerator.py` script shall be updated to latest project and run to get the project specific jupyter notebook. Thus, generated notebook will be just an outline. You shall update the project specific jupyter notebook.

The idea is to generate the project specific README.md file using project specific jupyter notebook using the following command form:

- `jupyter nbconvert <projectName>.ipynb --to markdown --no-input --output README.md`. Here `--no-input` flag indicates that in the generated markdown file code cells of the notebook will not be present. With this command you will get the project specific readme markdown file.
- Run `removeColEscSeq.py` after converting the jupyter notebook to markdown file. This is needed because jupyter notebook adds color escape sequence in its output cells to highlight some keywords which get added to mark down file during conversion. So we need to remove them from generated markdown file. 

**Note:** Using Node.js to run the scripts, since we need to run some/most of the javascript files without using them in html files

Command used will be of the format: `node <scriptName>`. Currently using Node.js version v18.19.0. Node.js can be obtained from <https://nodejs.org/en>.

## Topics
1. Learn Introductory JavaScript by Building a Pyramid Generator: [pyramidGenerator](./pyramidGenerator/)
2. Review JavaScript Fundamentals by Building a Gradebook App: [gradeBookApp](./gradeBookApp/)
3. Learn Basic JavaScript by Building a Role Playing Game: [rolePlayingGame](./rolePlayingGame/)
4. Learn Basic Debugging by Building a Random Background Color Changer: [randomBgColorChanger](./randomBgColorChanger/)
5. Learn Form Validation by Building a Calorie Counter: [calorieCounter](./calorieCounter/)
6. Review DOM Manipulation by Building a Rock, Paper, Scissors Game: [rockPaperScissor](./rockPaperScissor/)
7. Learn Basic String and Array Methods by Building a Music Player: [musicPlayer](./musicPlayer/)
8. **Certification Project (1/5)::** Build a Palindrome Checker: [palindromeChecker](./palindromeChecker/)
9. Learn the `Date` Object by Building a Date Formatter: [dateFormatter](./dateFormatter/)
10. Learn Modern JavaScript Methods by Building Football Team Cards: [footballTeamCards](./footballTeamCards/)
11. Learn localStorage by Building a Todo App: [toDoApp](./toDoApp/)
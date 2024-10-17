import nbformat
from pathlib import Path

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

options = Options()
options.add_argument('--headless')
options.add_argument('--disable-images')

def webScrapJob(stepNo):
    elements = []
    driver = webdriver.Chrome(options=options)

    url = f"https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/learn-basic-javascript-by-building-a-role-playing-game/step-{stepNo}"  # UPDATE HERE

    driver.get(url)
    element = ""
    foundItems = ""

    try:
        print(f"Trying to scrape step{stepNo}")
        element = WebDriverWait(driver, 40).until(EC.presence_of_element_located((By.ID, 'description')))
        foundItems = element.get_attribute('innerHTML')
    finally:
        driver.quit()

    if element:
        # print(element)
        # print(foundItems)
        soup = BeautifulSoup(foundItems, 'html.parser')

        textContent = ""
        entries = soup.findAll('p')

        for entry in entries:
            # print(entry.text)
            # elements.append(entry.text)
            elements.append(entry)
        # print(entries)
        print(f"Successfully scraped step{stepNo}")
        return elements

jnb = nbformat.NotebookNode()

jnb['nbformat'] = 4
jnb['nbformat_minor'] = 2

jnb['metadata'] = {
    "kernelspec": {
        "display_name": "Python 3",
        "language": "python",
        "name": "python3"
    },
    "language_info": {
        "codemirror_mode": {
            "name": "ipython",
            "version": 3
        },
        "file_extension": ".py",
        "mimetype": "text/x-python",
        "name": "python",
        "nbconvert_exporter": "python",
        "pygments_lexer": "ipython3",
        "version": "3.11.2"
    }
}

jnb['cells'] = []


cell = nbformat.NotebookNode(cell_type='code', metadata={}, outputs=[], execution_count=0, source=[
        "from IPython.display import display, Markdown, HTML, Image",
        """
def fetchAndDisplaySrcFileAsCodeBlock(fileName):
	code = \"\"

	with open(fileName, \"r\") as file:
		code = file.read()
	fileType = \"\"
	i = fileName.rfind(\".\")
	if i != -1:
		fileType = fileName[i+1:]
	display(Markdown(f\"\"\"```{fileType}
{code}
```\"\"\"))
"""
    ]
)
jnb['cells'].append(cell)

projectIntro = """JavaScript is a powerful scripting language that you can use to make web pages interactive. It's one of the core technologies of the web, along with HTML and CSS. All modern browsers support JavaScript.

In this practice project, you'll learn fundamental programming concepts in JavaScript by coding your own Role Playing Game. You'll learn how to work with arrays, strings, objects, functions, loops, `if`/`else` statements, and more."""  # UPDATE HERE (Copy paste from freeCodeCamp website course page)
projectTitle = "# " + "Learn Basic JavaScript by Building a Role Playing Game"  # UPDATE HERE
projectName = "rolePlayingGame"  # UPDATE HERE
number_of_steps = 173  # UPDATE HERE
projectPath = "../" + projectName

cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"{projectTitle}"])
jnb['cells'].append(cell)

cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"{projectIntro}"])
jnb['cells'].append(cell)


print(f"============{projectName}============")

for i in range(1, number_of_steps + 1):
    # START: Webscraping
    elements = []
    elements = webScrapJob(i)
    # END: Webscraping

    srcFileName = f"{projectName}_step{i:03d}.js"

    Path(f"{projectPath}/{srcFileName}").touch()

    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"## Step{i:03d}:"])
    jnb['cells'].append(cell)
    for element in elements:
        cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"{element}"])
        jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[
                f"""**Source file link:** [{srcFileName}](./{srcFileName})"""
            ]
        )
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='code', metadata={}, outputs=[], execution_count=0, source=[
            f"""fileName = \"{srcFileName}\"
fetchAndDisplaySrcFileAsCodeBlock(fileName)"""
            ]
        )
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"### Execution logs: "])
    jnb['cells'].append(cell)

    cell = nbformat.NotebookNode(cell_type='code', metadata={}, outputs=[], execution_count=0, source=[f"!node {srcFileName}"])
    jnb['cells'].append(cell)


    cell = nbformat.NotebookNode(cell_type='markdown', metadata={}, source=[f"---"])
    jnb['cells'].append(cell)



fname = f"{projectPath}/{projectName}.ipynb"

with open(fname, 'w') as f:
    nbformat.write(jnb, f)

print(f"============{projectName}============")
print('DONE: ipynb generation script')